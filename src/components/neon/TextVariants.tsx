"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MorphingText } from '@/components/magicui/morphing-text';
import { HyperText } from '@/components/magicui/hyper-text';

// 1. DecryptedText implementation
interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'click' | 'view' | 'inViewHover';
  clickMode?: 'once' | 'toggle';
}

export function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(animateOn !== 'click');
  const [direction, setDirection] = useState<'forward' | 'reverse'>('forward');

  const containerRef = useRef<HTMLSpanElement>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef(0);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const computeOrder = useCallback(
    (len: number) => {
      const order: number[] = [];
      if (len <= 0) return order;
      if (revealDirection === 'start') {
        for (let i = 0; i < len; i++) order.push(i);
        return order;
      }
      if (revealDirection === 'end') {
        for (let i = len - 1; i >= 0; i--) order.push(i);
        return order;
      }
      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + offset / 2;
          if (idx >= 0 && idx < len) order.push(idx);
        } else {
          const idx = middle - Math.ceil(offset / 2);
          if (idx >= 0 && idx < len) order.push(idx);
        }
        offset++;
      }
      return order.slice(0, len);
    },
    [revealDirection]
  );

  const fillAllIndices = useCallback(() => {
    const s = new Set<number>();
    for (let i = 0; i < text.length; i++) s.add(i);
    return s;
  }, [text]);

  const removeRandomIndices = useCallback((set: Set<number>, count: number) => {
    const arr = Array.from(set);
    for (let i = 0; i < count && arr.length > 0; i++) {
      const idx = Math.floor(Math.random() * arr.length);
      arr.splice(idx, 1);
    }
    return new Set(arr);
  }, []);

  const encryptInstantly = useCallback(() => {
    const emptySet = new Set<number>();
    setRevealedIndices(emptySet);
    setDisplayText(shuffleText(text, emptySet));
    setIsDecrypted(false);
  }, [text, shuffleText]);

  const triggerDecrypt = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length);
      pointerRef.current = 0;
      setRevealedIndices(new Set());
    } else {
      setRevealedIndices(new Set());
    }
    setDirection('forward');
    setIsAnimating(true);
  }, [sequential, computeOrder, text.length]);

  const triggerReverse = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length).slice().reverse();
      pointerRef.current = 0;
      setRevealedIndices(fillAllIndices());
      setDisplayText(shuffleText(text, fillAllIndices()));
    } else {
      setRevealedIndices(fillAllIndices());
      setDisplayText(shuffleText(text, fillAllIndices()));
    }
    setDirection('reverse');
    setIsAnimating(true);
  }, [sequential, computeOrder, fillAllIndices, shuffleText, text]);

  useEffect(() => {
    if (!isAnimating) return;

    let intervalId: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>) => {
      const textLength = text.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    intervalId = setInterval(() => {
      setRevealedIndices(prevRevealed => {
        if (sequential) {
          if (direction === 'forward') {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              clearInterval(intervalId);
              setIsAnimating(false);
              setIsDecrypted(true);
              return prevRevealed;
            }
          }
          if (direction === 'reverse') {
            if (pointerRef.current < orderRef.current.length) {
              const idxToRemove = orderRef.current[pointerRef.current++];
              const newRevealed = new Set(prevRevealed);
              newRevealed.delete(idxToRemove);
              setDisplayText(shuffleText(text, newRevealed));
              if (newRevealed.size === 0) {
                clearInterval(intervalId);
                setIsAnimating(false);
                setIsDecrypted(false);
              }
              return newRevealed;
            } else {
              clearInterval(intervalId);
              setIsAnimating(false);
              setIsDecrypted(false);
              return prevRevealed;
            }
          }
        } else {
          if (direction === 'forward') {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(intervalId);
              setIsAnimating(false);
              setDisplayText(text);
              setIsDecrypted(true);
            }
            return prevRevealed;
          }
          if (direction === 'reverse') {
            let currentSet = prevRevealed;
            if (currentSet.size === 0) {
              currentSet = fillAllIndices();
            }
            const removeCount = Math.max(1, Math.ceil(text.length / Math.max(1, maxIterations)));
            const nextSet = removeRandomIndices(currentSet, removeCount);
            setDisplayText(shuffleText(text, nextSet));
            currentIteration++;
            if (nextSet.size === 0 || currentIteration >= maxIterations) {
              clearInterval(intervalId);
              setIsAnimating(false);
              setIsDecrypted(false);
              setDisplayText(shuffleText(text, new Set()));
              return new Set();
            }
            return nextSet;
          }
        }
        return prevRevealed;
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [
    isAnimating,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    shuffleText,
    direction,
    fillAllIndices,
    removeRandomIndices,
    characters,
    useOriginalCharsOnly
  ]);

  const handleClick = () => {
    if (animateOn !== 'click') return;
    if (clickMode === 'once') {
      if (isDecrypted) return;
      setDirection('forward');
      triggerDecrypt();
    }
    if (clickMode === 'toggle') {
      if (isDecrypted) {
        triggerReverse();
      } else {
        setDirection('forward');
        triggerDecrypt();
      }
    }
  };

  const triggerHoverDecrypt = useCallback(() => {
    if (isAnimating) return;
    setRevealedIndices(new Set());
    setIsDecrypted(false);
    setDisplayText(text);
    setDirection('forward');
    setIsAnimating(true);
  }, [isAnimating, text]);

  const resetToPlainText = useCallback(() => {
    setIsAnimating(false);
    setRevealedIndices(new Set());
    setDisplayText(text);
    setIsDecrypted(true);
    setDirection('forward');
  }, [text]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'inViewHover') return;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          triggerDecrypt();
          setHasAnimated(true);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated, triggerDecrypt]);

  useEffect(() => {
    if (animateOn === 'click') {
      encryptInstantly();
    } else {
      setDisplayText(text);
      setIsDecrypted(true);
    }
    setRevealedIndices(new Set());
    setDirection('forward');
  }, [animateOn, text, encryptInstantly]);

  const animateProps =
    animateOn === 'hover' || animateOn === 'inViewHover'
      ? {
          onMouseEnter: triggerHoverDecrypt,
          onMouseLeave: resetToPlainText
        }
      : animateOn === 'click'
        ? {
            onClick: handleClick
          }
        : {};

  return (
    <motion.span 
      className={`inline-block whitespace-pre-wrap select-none cursor-pointer ${parentClassName}`} 
      ref={containerRef} 
      {...animateProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}

// 2. TextPressure implementation
interface TextPressureProps {
  text: string;
  textColor?: string;
  minFontSize?: number;
}

export function TextPressure({
  text = 'PRESION',
  textColor = '#FFFFFF',
  minFontSize = 32
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(minFontSize);

  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        cursorRef.current.x = e.touches[0].clientX;
        cursorRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width } = containerRef.current.getBoundingClientRect();
      setFontSize(Math.max(width / (chars.length / 1.5), minFontSize));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [chars.length, minFontSize]);

  useEffect(() => {
    let rafId = 0;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 10;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 10;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;
          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };
          const dx = charCenter.x - mouseRef.current.x;
          const dy = charCenter.y - mouseRef.current.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          const wdth = Math.max(10, 200 - Math.min(200, (d / maxDist) * 200));
          const wght = Math.max(100, 900 - Math.min(800, (d / maxDist) * 800));

          span.style.fontWeight = Math.floor(wght).toString();
          span.style.fontStretch = `${Math.floor(wdth)}%`;
        });
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-transparent py-4">
      <h1
        ref={titleRef}
        className="w-full text-center uppercase select-none m-0 font-light flex justify-between"
        style={{
          color: textColor,
          fontSize: `${fontSize}px`,
          lineHeight: '1.2'
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => { spansRef.current[i] = el; }}
            style={{
              display: 'inline-block',
              transition: 'font-weight 0.1s ease, font-stretch 0.1s ease',
              fontStyle: 'normal'
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

// 3. TrueFocus implementation
interface TrueFocusProps {
  sentence?: string;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
}

export function TrueFocus({
  sentence = 'True Focus Effect',
  blurAmount = 4,
  borderColor = '#6366f1',
  animationDuration = 0.4
}: TrueFocusProps) {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap outline-none select-none py-6" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => { wordRefs.current[index] = el; }}
            className="relative text-3xl font-extrabold cursor-pointer transition-all duration-300 select-none text-white"
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`
            }}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute pointer-events-none box-content border-none"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeOut'
        }}
      >
        <span className="absolute w-3 h-3 border-[2px] rounded-[1px]" style={{ borderColor, top: '-6px', left: '-6px', borderRight: 'none', borderBottom: 'none' }}></span>
        <span className="absolute w-3 h-3 border-[2px] rounded-[1px]" style={{ borderColor, top: '-6px', right: '-6px', borderLeft: 'none', borderBottom: 'none' }}></span>
        <span className="absolute w-3 h-3 border-[2px] rounded-[1px]" style={{ borderColor, bottom: '-6px', left: '-6px', borderRight: 'none', borderTop: 'none' }}></span>
        <span className="absolute w-3 h-3 border-[2px] rounded-[1px]" style={{ borderColor, bottom: '-6px', right: '-6px', borderLeft: 'none', borderTop: 'none' }}></span>
      </motion.div>
    </div>
  );
}

// Export object grouping all 5 effects
export const TextVariants = {
  DecryptedText: ({ text = 'Hack The Planet' }) => (
    <div className="text-xl font-mono text-emerald-400 font-bold p-4 bg-zinc-950/80 border border-emerald-500/20 rounded-lg">
      <DecryptedText 
        text={text} 
        speed={40} 
        sequential 
        className="text-emerald-400" 
        encryptedClassName="text-emerald-700 opacity-60" 
      />
    </div>
  ),

  TextPressure: ({ text = 'COMPRESS' }) => (
    <div className="w-full flex items-center justify-center p-4 bg-black/40 rounded-lg">
      <TextPressure text={text} textColor="#c084fc" />
    </div>
  ),

  TrueFocus: ({ text = 'Visual Focus Blur Effect' }) => (
    <div className="p-4 bg-zinc-900/60 rounded-lg border border-white/5">
      <TrueFocus sentence={text} borderColor="#38bdf8" />
    </div>
  ),

  TextMorph: ({ texts = ['React', 'NextJS', 'Tailwind', 'Antigravity'] }) => (
    <div className="flex items-center justify-center p-6 bg-zinc-950/80 border border-purple-500/20 rounded-lg min-h-[100px]">
      <MorphingText texts={texts} className="text-3xl font-black text-white tracking-tighter" />
    </div>
  ),

  TextScramble: ({ text = 'Matrix Decoding Signal' }) => (
    <div className="flex items-center justify-center p-6 bg-black/60 rounded-lg font-mono text-xl">
      <HyperText text={text} className="text-white font-bold" />
    </div>
  ),

  // 6. KineticScale (ADN 13) - Kinetic Typography
  KineticScale: ({ text = 'KINETIC' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const handleMove = (e: MouseEvent) => {
        if (!containerRef.current || !textRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        gsap.to(textRef.current, {
          scaleX: 1 + x * 1.5,
          scaleY: 1 + y * 1.5,
          skewX: (x - 0.5) * 30,
          duration: 0.4,
          ease: 'power2.out'
        });
      };
      
      window.addEventListener('mousemove', handleMove);
      return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
      <div ref={containerRef} className="w-full h-40 flex items-center justify-center bg-zinc-950/40 border border-white/5 rounded-xl overflow-hidden cursor-none">
        <div ref={textRef} className="text-6xl font-black text-white italic tracking-tighter select-none">
          {text}
        </div>
      </div>
    );
  },

  // 7. BrutalistStroke (ADN 01) - Neo-Brutalism
  BrutalistStroke: ({ text = 'STRIKE' }) => (
    <div className="group relative w-full h-32 flex items-center justify-center bg-[#ffde59] border-4 border-black rounded-xl cursor-pointer overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      <span className="relative text-5xl font-black text-black group-hover:text-white transition-colors duration-300 [text-shadow:2px_2px_0_#fff] group-hover:[text-shadow:none]">
        {text}
      </span>
    </div>
  ),

  // 8. ASCIIWave (ADN 10) - ASCII / Low-Tech
  ASCIIWave: ({ text = 'WAVE' }) => {
    const [offset, setOffset] = React.useState(0);
    useEffect(() => {
      const interval = setInterval(() => setOffset(o => o + 0.1), 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full h-32 flex flex-col items-center justify-center bg-black rounded-xl border border-white/10 font-mono text-[10px] text-emerald-500 overflow-hidden leading-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="whitespace-pre">
            {Array.from({ length: 40 }).map((_, j) => {
              const val = Math.sin(j * 0.2 + offset + i * 0.5);
              if (val > 0.8) return '#';
              if (val > 0.4) return '*';
              if (val > 0) return '+';
              if (val > -0.4) return '-';
              return '.';
            }).join('')}
          </div>
        ))}
        <div className="absolute bg-black/80 px-4 py-1 border border-emerald-500 text-lg font-bold tracking-[0.5em]">
          {text}
        </div>
      </div>
    );
  },

  // 9. GlassRefract (ADN 02) - Glassmorphism
  GlassRefract: ({ text = 'REFRACTION' }) => (
    <div className="relative w-full h-40 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl border border-white/5 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20 tracking-widest blur-sm">
        {text}
      </div>
      <div className="relative z-10 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-pulse-slow">
        <span className="text-4xl font-black text-white tracking-tighter drop-shadow-lg">
          {text}
        </span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  ),

  // 10. TerminalGlitch (ADN 04) - Cyberpunk
  TerminalGlitch: ({ text = 'CORE_ERROR' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-black rounded-xl border-2 border-red-500/30 overflow-hidden font-mono">
      <div className="relative">
        <span className="text-3xl font-bold text-red-500 animate-glitch-1 inline-block">
          {text}
        </span>
        <span className="absolute top-0 left-0 text-3xl font-bold text-cyan-400 animate-glitch-2 opacity-70">
          {text}
        </span>
        <span className="absolute top-0 left-0 text-3xl font-bold text-magenta-500 animate-glitch-3 opacity-70">
          {text}
        </span>
      </div>
      <style jsx>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(50% 0 30% 0); transform: translate(5px); }
          100% { clip-path: inset(10% 0 70% 0); transform: translate(-5px); }
        }
        .animate-glitch-1 { animation: glitch-1 0.2s infinite; }
        .animate-glitch-2 { animation: glitch-2 0.3s infinite alternate-reverse; }
      `}</style>
    </div>
  ),

  // 11. NeonSign (ADN 04) - Cyberpunk / Neon
  NeonSign: ({ text = 'OPEN 24/7' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-[#050505] rounded-xl border border-pink-500/20">
      <span className="text-4xl font-black text-pink-500 tracking-wider animate-neon-flicker">
        {text}
      </span>
      <style jsx>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f0f, 0 0 80px #f0f, 0 0 90px #f0f, 0 0 100px #f0f, 0 0 150px #f0f;
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            text-shadow: none;
            opacity: 0.5;
          }
        }
        .animate-neon-flicker { animation: flicker 2s infinite; }
      `}</style>
    </div>
  ),

  // 12. TypewriterPro (ADN 15) - Minimalist Dark
  TypewriterPro: ({ text = 'Building the future of UIX...' }) => {
    const [display, setDisplay] = React.useState('');
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplay(text.slice(0, i));
        i = (i + 1) % (text.length + 10);
      }, 100);
      return () => clearInterval(interval);
    }, [text]);

    return (
      <div className="w-full h-32 flex items-center p-8 bg-zinc-950 rounded-xl border border-white/5 font-mono">
        <span className="text-xl text-white tracking-tight">
          {display}
          <span className="inline-block w-2 h-6 bg-white ml-1 animate-pulse" />
        </span>
      </div>
    );
  },

  // 13. VoxelText (ADN 05) - 8-Bit / Retro
  VoxelText: ({ text = 'VOXEL' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-[#1a1a1a] rounded-xl border-b-8 border-r-8 border-black overflow-hidden">
      <span className="text-6xl font-black text-[#00ff00] uppercase tracking-tighter [text-shadow:4px_4px_0_#000,8px_8px_0_#444]">
        {text}
      </span>
    </div>
  ),

  // 14. ClaymorphicText (ADN 09) - Claymorphism
  ClaymorphicText: ({ text = 'CLAY' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-slate-100 rounded-xl overflow-hidden">
      <span className="text-6xl font-black text-indigo-500 uppercase tracking-tight px-8 py-2 rounded-3xl bg-slate-100 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] inner-shadow-clay">
        {text}
      </span>
      <style jsx>{`
        .inner-shadow-clay {
          box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.8);
        }
      `}</style>
    </div>
  ),

  // 15. SolarpunkLeaf (ADN 11) - Solarpunk
  SolarpunkLeaf: ({ text = 'GROWTH' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-[#f4f1de] rounded-xl border border-[#81b29a]/30 overflow-hidden">
      <div className="relative group">
        <span className="text-5xl font-serif italic text-[#3d405b] transition-transform duration-500 group-hover:scale-110">
          {text}
        </span>
        <div className="absolute -top-4 -right-4 w-8 h-8 text-[#81b29a] animate-bounce-slow">🍃</div>
        <div className="absolute -bottom-2 -left-4 w-6 h-6 text-[#f2cc8f] animate-pulse">☀️</div>
      </div>
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}</style>
    </div>
  ),

  // 16. MetallicChrome (ADN 12) - Skeuomorphism Moderno
  MetallicChrome: ({ text = 'CHROME' }) => (
    <div className="w-full h-40 flex items-center justify-center bg-black rounded-xl overflow-hidden">
      <span className="text-7xl font-black italic tracking-tighter bg-gradient-to-b from-zinc-300 via-white to-zinc-500 bg-clip-text text-transparent [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.8))] animate-chrome-shift">
        {text}
      </span>
      <style jsx>{`
        @keyframes chrome-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-chrome-shift {
          background-size: 200% 200%;
          animation: chrome-shift 5s linear infinite;
        }
      `}</style>
    </div>
  ),

  // 17. BentoTitle (ADN 14) - Bento Grid Pro
  BentoTitle: ({ text = 'BENTO' }) => (
    <div className="w-full h-32 flex items-center justify-center bg-zinc-950 p-4 gap-2 rounded-xl border border-white/5 overflow-hidden">
      {text.split('').map((char, i) => (
        <div key={i} className="flex-1 h-full bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-3xl font-bold text-white hover:bg-white hover:text-black transition-all duration-300 cursor-default">
          {char}
        </div>
      ))}
    </div>
  ),

  // 18. MinimalOutline (ADN 15) - Minimalist Dark
  MinimalOutline: ({ text = 'ELEGANCE' }) => (
    <div className="group w-full h-32 flex items-center justify-center bg-black rounded-xl border border-white/10 cursor-pointer overflow-hidden">
      <span className="text-5xl font-light text-transparent [webkit-text-stroke:1px_white] group-hover:text-white transition-all duration-700 tracking-[0.2em] group-hover:tracking-normal">
        {text}
      </span>
    </div>
  ),

  // 19. ElasticBounce (ADN 09) - Claymorphism / Motion
  ElasticBounce: ({ text = 'BOUNCE' }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-32 flex items-center justify-center bg-zinc-950 rounded-xl overflow-hidden cursor-pointer"
      >
        <motion.span 
          animate={isHovered ? { scale: [1, 1.4, 0.8, 1.1, 1], rotate: [0, 5, -5, 2, 0] } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-5xl font-black text-purple-400 uppercase tracking-widest"
        >
          {text}
        </motion.span>
      </div>
    );
  },

  // 20. RetroPC (ADN 05) - 8-Bit / Retro
  RetroPC: ({ text = 'SYSTEM_READY' }) => (
    <div className="relative w-full h-32 flex items-center justify-center bg-[#001100] rounded-xl border-4 border-zinc-800 overflow-hidden shadow-[inset_0_0_20px_rgba(0,255,0,0.2)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 pointer-events-none" style={{ backgroundSize: '100% 2px, 3px 100%' }} />
      <span className="text-2xl font-mono text-[#00ff00] tracking-widest animate-crt-flicker">
        {'>'} {text}_
      </span>
      <style jsx>{`
        @keyframes crt-flicker {
          0% { opacity: 0.9; }
          5% { opacity: 0.7; }
          10% { opacity: 0.9; }
          15% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        .animate-crt-flicker { animation: crt-flicker 0.15s infinite; }
      `}</style>
    </div>
  )
};
