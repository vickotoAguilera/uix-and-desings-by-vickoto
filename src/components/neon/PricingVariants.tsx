"use client";

import React from 'react';

export const PricingVariants: Record<string, React.FC> = {
  // Las variantes se implementarán en la siguiente sesión
  MinimalPricing: () => (
    <div className="p-8 bg-white border border-zinc-200 rounded-3xl text-center">
      <h3 className="text-xl font-bold mb-4 text-zinc-900">Basic Plan</h3>
      <p className="text-4xl font-black text-zinc-900 mb-6">$19<span className="text-sm text-zinc-400 font-normal">/mo</span></p>
      <button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-bold">Start Free</button>
    </div>
  ),
};
