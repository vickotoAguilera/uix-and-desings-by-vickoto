"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Ghost, 
  Cat, 
  Dog, 
  Bird, 
  Heart, 
  Zap, 
  Coffee, 
  Gamepad2, 
  Smile, 
  Moon,
  Sun,
  Camera,
  Music,
  Bot
} from 'lucide-react';

export const PlayfulUIVariants = {
  // 1. GhostCompanion: A floating ghost that follows the cursor within its container
  GhostCompanion: () => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full py-24 bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] cursor-none"
      >
        <div className="absolute top-12 left-12 space-y-2 z-10">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Playful_Entity_v1</div>
          <h2 className="text-4xl font-black italic tracking-tighter">GHOST_BUDDY.</h2>
        </div>

        <div 
          className="absolute transition-all duration-300 ease-out pointer-events-none"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse" />
            <Ghost size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-bounce" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-[10px] font-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              BOO! 👋
            </div>
          </div>
        </div>

        <div className="text-zinc-800 text-9xl font-black select-none pointer-events-none uppercase italic">
          BOO!
        </div>
      </div>
    );
  },

  // 2. CyberKitten: A reactive cat that purrs and glows
  CyberKitten: () => {
    const [isHappy, setIsHappy] = useState(false);
    const [mood, setMood] = useState('Idle');

    return (
      <div className="w-full py-24 bg-black text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        <div className="max-w-md w-full bg-zinc-900 border-2 border-white/10 rounded-[3rem] p-12 relative group transition-all hover:border-pink-500/50">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-pink-600 rounded-full text-xs font-black italic uppercase tracking-widest shadow-xl shadow-pink-600/20">
            {mood}_Mode
          </div>

          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className={`transition-all duration-500 ${isHappy ? 'scale-125 rotate-12' : 'scale-100'}`}>
              <Cat size={120} className={`${isHappy ? 'text-pink-500' : 'text-zinc-600'} transition-colors duration-500`} />
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">CYBER_NEKO</h3>
              <p className="text-sm text-zinc-500 font-medium">Interacción táctil habilitada. Alimentar con energía digital.</p>
            </div>

            <div className="flex gap-4 relative z-20">
              <button 
                onMouseEnter={() => { setIsHappy(true); setMood('Happy'); }}
                onMouseLeave={() => { setIsHappy(false); setMood('Idle'); }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-pink-500 hover:text-white transition-all cursor-pointer pointer-events-auto"
              >
                <Heart size={24} />
              </button>
              <button 
                onClick={() => setMood('Turbo')}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-yellow-500 hover:text-black transition-all cursor-pointer pointer-events-auto"
              >
                <Zap size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]" />
      </div>
    );
  },

  // 3. PixelBird: Flappy-style animated bird
  PixelBird: () => {
    const [y, setY] = useState(50);
    const [isJumping, setIsJumping] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setY(prev => Math.min(prev + 2, 80));
      }, 50);
      return () => clearInterval(interval);
    }, []);

    const jump = () => {
      setIsJumping(true);
      setY(prev => Math.max(prev - 15, 10));
      setTimeout(() => setIsJumping(false), 200);
    };

    return (
      <div 
        onClick={jump}
        className="w-full py-24 bg-sky-400 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] cursor-pointer"
      >
        <div className="absolute top-12 left-12 space-y-1">
          <h2 className="text-6xl font-black italic tracking-tighter uppercase text-white/40">FLAPPY_BIT.</h2>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Click_To_Fly_v2</div>
        </div>

        <div 
          className="absolute transition-all duration-300 ease-out"
          style={{ top: `${y}%`, transform: `rotate(${isJumping ? -20 : 20}deg)` }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-150" />
            <Bird size={80} className="text-yellow-400 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]" />
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-24 bg-emerald-500 border-t-8 border-emerald-600 flex items-center justify-center">
           <div className="flex gap-8 opacity-20">
              {Array.from({ length: 10 }).map((_, i) => <div key={i} className="w-12 h-12 bg-emerald-400 rounded-lg rotate-45" />)}
           </div>
        </div>
      </div>
    );
  },

  // 4. MoodBot: An AI face that changes expressions
  MoodBot: () => {
    const [mood, setMood] = useState('Happy');
    const [color, setColor] = useState('text-emerald-500');

    const moods = [
      { label: 'Happy', color: 'text-emerald-500', icon: Smile },
      { label: 'Gaming', color: 'text-purple-500', icon: Gamepad2 },
      { label: 'Coffee', color: 'text-orange-500', icon: Coffee },
      { label: 'Sleeping', color: 'text-blue-500', icon: Moon }
    ];

    return (
      <div className="w-full py-24 bg-[#0a0a0a] text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        <div className="max-w-2xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative aspect-square rounded-[4rem] bg-zinc-900 border-4 border-white/5 flex items-center justify-center transition-all duration-700 ${color.replace('text', 'shadow')}/20 shadow-[0_0_50px]`}>
            <div className="flex flex-col items-center gap-6">
               <Bot size={120} className={`${color} transition-colors duration-500`} />
               <div className="flex gap-4">
                  <div className={`w-4 h-4 rounded-full ${color} animate-pulse`} />
                  <div className={`w-4 h-4 rounded-full ${color} animate-pulse delay-75`} />
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500">Emotion_Module_v4</div>
              <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">MOOD_BOT.</h2>
            </div>
            
          <div className="grid grid-cols-2 gap-4 relative z-20">
               {moods.map(m => (
                 <button 
                  key={m.label}
                  onClick={() => { setMood(m.label); setColor(m.color); }}
                  className={`p-6 border-2 rounded-3xl flex flex-col items-center gap-3 transition-all cursor-pointer pointer-events-auto ${mood === m.label ? 'border-white bg-white text-black' : 'border-white/10 hover:border-white/30'}`}
                 >
                   <m.icon size={24} />
                   <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  },

  // 5. InteractiveGarden: Click to spawn flowers/items
  InteractiveGarden: () => {
    const [items, setItems] = useState<{ x: number, y: number, id: number }[]>([]);

    const spawn = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setItems(prev => [...prev, {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        id: Date.now()
      }]);
    };

    return (
      <div 
        onClick={spawn}
        className="w-full py-24 bg-white text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] cursor-crosshair group"
      >
        <div className="absolute top-12 left-12 z-10 pointer-events-none">
          <h2 className="text-8xl font-black italic tracking-tighter uppercase text-zinc-100">GARDEN.</h2>
          <div className="text-xs font-black uppercase tracking-widest text-zinc-400 mt-2">Click_To_Cultivate_Reality</div>
        </div>

        {items.map(item => (
          <div 
            key={item.id}
            className="absolute animate-bounce"
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative group/item">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-150 animate-pulse" />
              <Smile size={48} className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
            </div>
          </div>
        ))}

        <div className="absolute bottom-12 right-12 text-[10px] font-black uppercase tracking-widest opacity-20 italic">
          Entities_Created: {items.length}
        </div>
      </div>
    );
  },

  // 6. CyberDog: A guard dog that alerts on hover
  CyberDog: () => {
    const [isAlert, setIsAlert] = useState(false);

    return (
      <div className="w-full py-24 bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        <div 
          onMouseEnter={() => setIsAlert(true)}
          onMouseLeave={() => setIsAlert(false)}
          className={`max-w-xl w-full p-16 rounded-[4rem] border-4 transition-all duration-500 flex flex-col items-center gap-12 cursor-help ${isAlert ? 'bg-rose-600 border-white shadow-[0_0_100px_rgba(225,29,72,0.5)]' : 'bg-zinc-900 border-white/5'}`}
        >
          <div className={`transition-transform duration-300 ${isAlert ? 'scale-125' : 'scale-100'}`}>
            <Dog size={160} className={`${isAlert ? 'text-white' : 'text-zinc-700'}`} />
          </div>

          <div className="text-center space-y-4">
             <h3 className={`text-4xl font-black italic uppercase tracking-tighter transition-colors ${isAlert ? 'text-white' : 'text-zinc-500'}`}>
               {isAlert ? 'INTRUDER_DETECTED' : 'SYSTEM_GUARD'}
             </h3>
             <div className={`h-1 w-48 mx-auto rounded-full overflow-hidden transition-colors ${isAlert ? 'bg-white/20' : 'bg-zinc-800'}`}>
                <div className={`h-full transition-all duration-300 ${isAlert ? 'w-full bg-white' : 'w-0 bg-rose-500'}`} />
             </div>
          </div>
        </div>
      </div>
    );
  },

  // 7. MusicBlob: A blob that reacts to virtual music
  MusicBlob: () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div className="w-full py-24 bg-black text-white p-8 md:p-24 relative overflow-hidden flex items-center justify-center min-h-[600px]">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-24 relative z-10">
          <div 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`relative w-80 h-80 flex items-center justify-center cursor-pointer group`}
          >
            <div className={`absolute inset-0 bg-blue-600 rounded-full transition-all duration-1000 ${isPlaying ? 'animate-[ping_3s_linear_infinite] opacity-20' : 'opacity-0'}`} />
            <div className={`absolute inset-4 bg-purple-600 rounded-full transition-all duration-1000 ${isPlaying ? 'animate-[ping_2s_linear_infinite] opacity-30' : 'opacity-0'}`} />
            <div className={`w-64 h-64 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isPlaying ? 'scale-110 rotate-180' : 'scale-100'}`}>
               <Music size={64} className="animate-bounce" />
            </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.6em] text-blue-400 italic">Sonic_Entity_v9</div>
                <h2 className="text-8xl font-black italic tracking-tighter uppercase leading-none">MUSIC <br /> <span className="text-white/20">BLOB.</span></h2>
             </div>
             <p className="text-2xl text-white/40 font-medium italic leading-relaxed">Entidad auditiva reactiva. Sincronización de ondas de choque habilitada.</p>
             <button 
              onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
              className="px-12 py-5 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-blue-500 hover:text-white transition-all relative z-20 cursor-pointer pointer-events-auto"
             >
                {isPlaying ? '[ STOP_SYNC ]' : '[ START_SYNC ]'}
             </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      </div>
    );
  },

  // 8. PhotoBudgie: A bird that "takes photos" of the UI
  PhotoBudgie: () => {
    const [flash, setFlash] = useState(false);

    const takePhoto = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 100);
    };

    return (
      <div className="w-full py-24 bg-zinc-100 text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        {flash && <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-500" />}
        
        <div className="max-w-md w-full text-center space-y-12">
          <div className="relative inline-block group cursor-pointer" onClick={takePhoto}>
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-150 group-hover:bg-emerald-500/20 transition-all" />
            <Bird size={140} className="text-emerald-500 relative z-10 animate-bounce" />
            <div className="absolute -right-4 -top-4 bg-black text-white p-4 rounded-2xl shadow-2xl rotate-12 group-hover:rotate-0 transition-transform">
              <Camera size={32} />
            </div>
          </div>

          <div className="space-y-4">
             <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">PHOTO_BUDGIE</h2>
             <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Click_To_Capture_Moment</p>
          </div>
        </div>
      </div>
    );
  },

  // 9. DayNightCritter: Changes with system time or toggle
  DayNightCritter: () => {
    const [isNight, setIsNight] = useState(false);

    return (
      <div className={`w-full py-24 transition-colors duration-1000 p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[600px] ${isNight ? 'bg-indigo-950 text-white' : 'bg-orange-50 text-black'}`}>
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
             <div className="space-y-4">
                <div className={`text-xs font-black uppercase tracking-widest italic ${isNight ? 'text-indigo-400' : 'text-orange-400'}`}>Chronos_Entity_v2</div>
                <h1 className="text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">
                   {isNight ? 'NIGHT' : 'DAY'} <br /> <span className="opacity-20">PHASE.</span>
                </h1>
             </div>
             <button 
               onClick={(e) => { e.stopPropagation(); setIsNight(!isNight); }}
               className={`px-12 py-5 font-black uppercase italic rounded-2xl transition-all relative z-20 cursor-pointer pointer-events-auto ${isNight ? 'bg-white text-black hover:bg-indigo-400' : 'bg-black text-white hover:bg-orange-400'}`}
             >
                [ TOGGLE_TIMELINE ]
             </button>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
             <div className={`w-80 h-80 rounded-full transition-all duration-1000 flex items-center justify-center relative ${isNight ? 'bg-indigo-900 shadow-[0_0_100px_rgba(79,70,229,0.3)]' : 'bg-orange-200 shadow-[0_0_100px_rgba(251,146,60,0.3)]'}`}>
                {isNight ? (
                  <Moon size={120} className="text-white animate-pulse" />
                ) : (
                  <Sun size={120} className="text-orange-500 animate-[spin_10s_linear_infinite]" />
                )}
                <div className="absolute -bottom-12 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-2xl">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">System_State: {isNight ? 'LUNAR' : 'SOLAR'}</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  },

  // 10. GamingDragon: Retro pixel dragon that breathes fire
  GamingDragon: () => {
    const [isFire, setIsFire] = useState(false);

    return (
      <div className="w-full py-24 bg-zinc-900 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
        <div className="max-w-2xl w-full space-y-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 text-[10px] font-black uppercase tracking-widest italic">
            <Gamepad2 size={12} />
            <span>Legendary_Entity_v99</span>
          </div>

          <div 
            onMouseDown={() => setIsFire(true)}
            onMouseUp={() => setIsFire(false)}
            className="relative cursor-pointer group"
          >
            <Bird size={160} className={`mx-auto transition-all duration-300 ${isFire ? 'text-rose-500 scale-110' : 'text-zinc-600'}`} />
            {isFire && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-8 h-8 bg-orange-500 rounded-full animate-ping opacity-60"
                    style={{ 
                      left: `${50 + (Math.random() - 0.5) * 60}%`,
                      top: `${50 + (Math.random() - 0.5) * 60}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
               Hold_To_Breathe_Fire
            </div>
          </div>

          <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none italic">DRACO_BIT.</h2>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_70%)]" />
      </div>
    );
  },

  // 11. VirtualFishTank: Floating entities in a tank
  VirtualFishTank: () => (
    <div className="w-full py-24 bg-blue-900 text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[600px]">
       <div className="absolute inset-0 opacity-20 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-bounce" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${i * 0.2}s` }} />
          ))}
       </div>
       <div className="max-w-4xl w-full border-8 border-white/20 rounded-[4rem] p-12 bg-white/5 backdrop-blur-3xl relative">
          <div className="flex flex-col items-center gap-12">
             <div className="flex gap-12 animate-pulse">
                <Bird size={80} className="text-blue-300 -scale-x-100" />
                <Bird size={60} className="text-blue-200 mt-12" />
                <Bird size={40} className="text-blue-400 -mt-8" />
             </div>
             <h2 className="text-5xl font-black italic tracking-tighter uppercase">VIRTUAL_AQUARIUM.</h2>
          </div>
       </div>
    </div>
  ),

  // 12. EmojiRain: Interactive particle rain
  EmojiRain: () => {
    const [emojis, setEmojis] = useState<{ id: number, x: number }[]>([]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setEmojis(prev => [...prev.slice(-15), { id: Date.now(), x: Math.random() * 100 }]);
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full py-24 bg-purple-50 text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        {emojis.map(e => (
          <div key={e.id} className="absolute top-0 animate-[fall_3s_linear_infinite] text-4xl" style={{ left: `${e.x}%` }}>
            ✨
          </div>
        ))}
        <div className="z-10 text-center space-y-4">
           <h2 className="text-7xl font-black italic tracking-tighter uppercase italic">SPARKLE_STORM.</h2>
           <p className="text-xs font-black uppercase tracking-widest text-purple-400 italic">Reactive_Atmosphere_v1</p>
        </div>
      </div>
    );
  },

  // 13. TamagotchiPulse: Retro handheld device
  TamagotchiPulse: () => (
    <div className="w-full py-24 bg-black text-white p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[600px]">
       <div className="w-80 h-[450px] bg-pink-500 rounded-[5rem] border-8 border-pink-400 p-8 flex flex-col items-center gap-8 shadow-2xl">
          <div className="w-full h-48 bg-[#9ea78d] border-8 border-pink-700 rounded-3xl p-4 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
             <Bot size={80} className="text-black/60 animate-bounce" />
          </div>
          <div className="grid grid-cols-3 gap-4 relative z-20">
             {Array.from({ length: 3 }).map((_, i) => (
               <div key={i} className="w-12 h-12 bg-pink-700 rounded-full border-4 border-pink-800 active:scale-90 cursor-pointer pointer-events-auto" />
             ))}
          </div>
          <div className="text-center">
             <div className="text-xs font-black uppercase tracking-widest text-pink-900 italic">POCKET_PAL_v1</div>
             <div className="text-2xl font-black italic text-pink-100 uppercase">NEO_GOTCHI</div>
          </div>
       </div>
    </div>
  ),

  // 14. BalloonPop: Interactive balloons
  BalloonPop: () => {
    const [balloons, setBalloons] = useState(Array.from({ length: 8 }).map((_, i) => ({ id: i, x: 10 + i * 10, popped: false })));

    return (
      <div className="w-full py-24 bg-white text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        <div className="flex gap-4 mb-12 relative z-20">
           {balloons.map(b => (
             <div 
               key={b.id}
               onClick={(e) => { e.stopPropagation(); setBalloons(prev => prev.map(item => item.id === b.id ? { ...item, popped: true } : item)); }}
               className={`w-16 h-20 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto ${b.popped ? 'scale-0 opacity-0' : 'scale-100 hover:scale-110'} ${b.id % 3 === 0 ? 'bg-rose-500' : b.id % 3 === 1 ? 'bg-blue-500' : 'bg-yellow-400'}`}
             />
           ))}
        </div>
        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic text-zinc-100">POP_VALLEY.</h2>
        <button 
          onClick={(e) => { e.stopPropagation(); setBalloons(prev => prev.map(item => ({ ...item, popped: false }))); }}
          className="mt-8 px-8 py-3 bg-black text-white font-black uppercase italic rounded-xl hover:bg-zinc-800 transition-all relative z-20 cursor-pointer pointer-events-auto"
        >
          [ RESET_VIBE ]
        </button>
      </div>
    );
  },

  // 15. PaperPlane: Send messages across the screen
  PaperPlane: () => (
    <div className="w-full py-24 bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
       <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-0 animate-[fly-across_5s_linear_infinite]">
             <Bird size={48} className="text-white rotate-90" />
          </div>
       </div>
       <div className="max-w-xl w-full text-center space-y-8 z-10 relative">
          <h2 className="text-7xl font-black italic tracking-tighter uppercase italic leading-none">AERO_MSGR.</h2>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl relative z-20">
             <input type="text" placeholder="WRITE_YOUR_MESSAGE..." className="w-full bg-transparent border-b-2 border-white/20 p-4 font-black italic uppercase text-2xl focus:outline-none focus:border-white transition-colors pointer-events-auto" />
             <button 
               onClick={(e) => e.stopPropagation()}
               className="mt-8 px-12 py-4 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-blue-500 hover:text-white transition-all w-full cursor-pointer pointer-events-auto"
             >
                [ LAUNCH_FLIGHT ]
             </button>
          </div>
       </div>
    </div>
  ),

  // 16. GravityBalls: Physics-inspired bouncing balls
  GravityBalls: () => (
    <div className="w-full py-24 bg-emerald-50 text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
       <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-12 h-12 rounded-full bg-black/5 border-2 border-black/10 animate-bounce" 
              style={{ left: `${Math.random() * 90}%`, top: `${Math.random() * 80}%`, animationDuration: `${1 + Math.random() * 2}s` }} 
            />
          ))}
       </div>
       <div className="z-10 text-center space-y-4 pointer-events-none">
          <h2 className="text-8xl font-black italic tracking-tighter uppercase italic leading-none opacity-10">GRAVITY.</h2>
          <div className="text-2xl font-black italic uppercase">Bouncing_Simulation_v4</div>
       </div>
    </div>
  ),

  // 17. ColorSplash: Interactive paint splatter
  ColorSplash: () => {
    const [splats, setSplats] = useState<{ x: number, y: number, color: string, id: number }[]>([]);
    const colors = ['bg-rose-500', 'bg-blue-500', 'bg-yellow-400', 'bg-emerald-500', 'bg-purple-600'];

    const addSplat = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setSplats(prev => [...prev, {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        id: Date.now()
      }]);
    };

    return (
      <div 
        onClick={addSplat}
        className="w-full py-24 bg-white text-black p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] cursor-crosshair"
      >
        <div className="absolute top-12 left-12 z-10 pointer-events-none">
          <h2 className="text-7xl font-black italic tracking-tighter uppercase italic leading-none opacity-5">SPLASH.</h2>
          <div className="text-xs font-black uppercase tracking-widest text-zinc-400">Click_To_Fragment_Color</div>
        </div>

        {splats.map(s => (
          <div 
            key={s.id}
            className={`absolute rounded-full animate-ping ${s.color}`}
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: '100px', height: '100px', transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>
    );
  },

  // 18. RobotDance: Animated dancing bot
  RobotDance: () => (
    <div className="w-full py-24 bg-[#0a0a0a] text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
       <div className="max-w-md w-full text-center space-y-12 relative z-10">
          <div className="relative inline-block animate-bounce">
             <Bot size={160} className="text-blue-500 drop-shadow-[0_0_30px_#3b82f6]" />
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-blue-500/20 blur-xl rounded-full" />
          </div>
          <div className="space-y-4">
             <h2 className="text-6xl font-black italic tracking-tighter uppercase italic">GROOVE_BOT.</h2>
             <div className="flex justify-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-2 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
             </div>
          </div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
    </div>
  ),

  // 19. StarCollector: Clickable stars with counter
  StarCollector: () => {
    const [stars, setStars] = useState(Array.from({ length: 20 }).map((_, i) => ({ id: i, x: Math.random() * 90, y: Math.random() * 80, collected: false })));
    const [count, setCount] = useState(0);

    return (
      <div className="w-full py-24 bg-indigo-950 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
        <div className="absolute top-12 left-12 z-10 pointer-events-none">
           <h2 className="text-5xl font-black italic tracking-tighter uppercase italic">STAR_HUNT.</h2>
           <div className="text-2xl font-black italic text-yellow-400 mt-2">COLLECTED: {count}</div>
        </div>

        {stars.map(s => (
          <div 
            key={s.id}
            onClick={(e) => { e.stopPropagation(); if(!s.collected) { setCount(c => c + 1); setStars(prev => prev.map(item => item.id === s.id ? { ...item, collected: true } : item)); } }}
            className={`absolute cursor-pointer transition-all duration-500 pointer-events-auto z-20 ${s.collected ? 'scale-0 opacity-0' : 'scale-100 hover:scale-150'}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
             <Zap size={24} className="text-yellow-400 animate-pulse" />
          </div>
        ))}

        <button 
          onClick={(e) => { e.stopPropagation(); setStars(prev => prev.map(item => ({ ...item, collected: false }))); setCount(0); }}
          className="absolute bottom-12 px-8 py-3 border-2 border-white text-white font-black uppercase italic rounded-xl hover:bg-white hover:text-indigo-950 transition-all relative z-20 cursor-pointer pointer-events-auto"
        >
          [ REGENERATE_GALAXY ]
        </button>
      </div>
    );
  },

  // 20. WhackAMole: Simple interactive game
  WhackAMole: () => {
    const [active, setActive] = useState<number | null>(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActive(Math.floor(Math.random() * 9));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full py-24 bg-zinc-950 text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
        <div className="max-w-2xl w-full space-y-12">
           <div className="flex justify-between items-end border-b border-white/10 pb-8">
              <h2 className="text-5xl font-black italic tracking-tighter uppercase">WHACK_PRO.</h2>
              <div className="text-3xl font-black italic text-emerald-500">SCORE: {score}</div>
           </div>

           <div className="grid grid-cols-3 gap-8 relative z-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  onClick={(e) => { e.stopPropagation(); if(active === i) { setScore(s => s + 100); setActive(null); } }}
                  className="aspect-square bg-zinc-900 rounded-[2rem] border-4 border-white/5 flex items-center justify-center relative overflow-hidden cursor-crosshair active:bg-zinc-800 pointer-events-auto"
                >
                   <div className={`transition-all duration-300 ${active === i ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      <Smile size={64} className="text-emerald-500" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }
};
