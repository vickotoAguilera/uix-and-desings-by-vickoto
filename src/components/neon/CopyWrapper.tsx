"use client";

import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyWrapperProps {
  children: React.ReactNode;
  code: string;
  label?: string;
  className?: string;
}

export const CopyWrapper: React.FC<CopyWrapperProps> = ({ children, code, label, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (!successful) throw new Error('execCommand copy failed');
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar el código automáticamente. Por favor, revisa los permisos de tu navegador o usa HTTPS.');
    }
  }, [code]);

  return (
    <div className={cn("group relative p-6 border border-zinc-800 rounded-2xl bg-black/40 backdrop-blur-sm transition-all hover:border-zinc-700", className)}>
      {label && (
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{label}</h3>
      )}
      
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-700 hover:text-white z-20"
        title="Copiar código"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>

      <div className="flex flex-col items-center justify-center gap-4">
        {children}
      </div>
      
      {copied && (
        <div className="absolute top-4 right-14 text-xs font-bold text-green-500 animate-in fade-in slide-in-from-right-2 duration-200">
          ¡Copiado!
        </div>
      )}
    </div>
  );
};
