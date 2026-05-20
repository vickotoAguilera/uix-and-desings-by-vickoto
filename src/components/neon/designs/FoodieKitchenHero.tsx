"use client";

import React from 'react';
import { SmartImage } from '../SmartImage';
import { 
  UtensilsCrossed, 
  Clock, 
  Star, 
  MapPin, 
  ShoppingBag, 
  ArrowRight, 
  ChefHat, 
  Leaf, 
  Flame, 
  Coffee, 
  Bike, 
  Heart,
  Phone,
  Timer,
  Globe,
  Waves,
  Wine,
  Beef,
  Pizza,
  GlassWater,
  Cherry,
  Moon,
  Zap
} from 'lucide-react';

export const FoodieKitchenHero = {
  // Variante 01: Classic Restaurant (Elegant & Centered)
  Classic: () => (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage className="w-full h-full object-cover brightness-[0.4]" />
      </div>
      
      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span>Award Winning Gastronomy</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
          The Art of <br/> <span className="text-orange-500 italic">Fine Dining.</span>
        </h1>
        
        <p className="text-zinc-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Experience a journey of flavors crafted by world-class chefs using the freshest local ingredients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="px-10 py-5 bg-orange-500 text-white rounded-full font-black text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-orange-900/40">
            Book a Table
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            View Our Menu
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
        <div className="flex items-center gap-4">
          <Clock size={16} />
          <span>Open: 12:00 PM - 11:00 PM</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin size={16} />
          <span>Downtown, New York</span>
        </div>
      </div>
    </div>
  ),

  // Variante 02: Delivery Fast (Modern & Energetic)
  DeliveryFast: () => (
    <div className="w-full min-h-screen bg-yellow-50 flex flex-col lg:flex-row items-center pt-24 pb-12 px-8 lg:px-24 gap-16 overflow-hidden">
      <div className="flex-1 space-y-10 text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 rounded-full text-yellow-950 text-xs font-black uppercase tracking-widest">
          <Bike size={16} />
          <span>Fastest Delivery in Town</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tight">
          Hungry? <br/> We've got <br/> <span className="text-orange-600">You Covered.</span>
        </h1>
        
        <p className="text-slate-600 text-xl max-w-lg leading-relaxed font-medium">
          Order your favorite meals from the best restaurants and get them delivered to your doorstep in under 30 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Enter your delivery address" 
              className="w-full pl-12 pr-4 py-5 bg-white rounded-2xl border-2 border-slate-200 focus:border-yellow-400 outline-none transition-all font-bold text-slate-900"
            />
          </div>
          <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
            Find Food
          </button>
        </div>

        <div className="flex items-center gap-8 pt-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-yellow-50 bg-slate-200 overflow-hidden" />
            ))}
          </div>
          <div className="text-sm font-bold text-slate-500">
            <span className="text-slate-950">500k+</span> happy customers
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-2xl">
        <div className="absolute -inset-10 bg-yellow-200 rounded-full blur-[120px] opacity-50" />
        <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
          <SmartImage className="w-full h-full object-cover" />
          <div className="absolute top-8 right-8 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
              <Timer size={24} />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Est. Time</div>
              <div className="text-xl font-black text-slate-900">15-25 min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 03: Fine Dining (Dark & Minimalist)
  FineDining: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-4 bg-zinc-800 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800">
            <SmartImage className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-12 text-left">
          <div className="w-20 h-px bg-zinc-700" />
          <h1 className="text-6xl md:text-8xl font-light text-white leading-none tracking-tight font-serif">
            Elegance <br/> in every <br/> <span className="italic text-zinc-400">Detail.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-md">
            A curated experience of seasonal flavors, where tradition meets contemporary culinary innovation.
          </p>
          <div className="space-y-6 pt-4">
            <button className="group flex items-center gap-4 text-white font-bold text-xl uppercase tracking-widest hover:text-zinc-400 transition-colors">
              Reserve Experience
              <ArrowRight className="group-hover:translate-x-4 transition-transform" />
            </button>
            <div className="text-zinc-700 font-black text-xs uppercase tracking-[0.4em]">
              Michelin Star 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 04: Food Market (Bento Grid Style)
  FoodMarket: () => (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">Curated Categories</div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tight">
              Explore the <br/> <span className="text-slate-400">Flavor Universe.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-md">
            From street food to gourmet delicacies, discover the best of global cuisine in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-3xl font-bold text-white">Main Courses</h3>
              <p className="text-white/60 text-sm">Hearty meals for every appetite.</p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden group bg-orange-500 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <Flame className="text-white animate-bounce" size={48} />
            <h3 className="text-2xl font-black text-white">Trending Now</h3>
            <div className="px-4 py-1 bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Hot 🔥</div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Desserts</h3>
            </div>
          </div>

          <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group h-full">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-12 space-y-4">
              <h3 className="text-3xl font-bold text-white">Healthy Bowls</h3>
              <button className="w-fit px-6 py-2 bg-white text-slate-950 rounded-full font-bold text-sm">Discover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 05: Healthy Organic (Green & Fresh)
  HealthyOrganic: () => (
    <div className="w-full min-h-screen bg-emerald-50 flex flex-col items-center justify-center pt-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-2xl text-emerald-700 text-sm font-bold">
            <Leaf size={18} />
            <span>100% Organic & Locally Sourced</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-950 leading-[0.9] tracking-tight">
            Eat Well. <br/> Feel <span className="text-emerald-500">Amazing.</span>
          </h1>
          <p className="text-emerald-900/60 text-xl max-w-lg leading-relaxed">
            Fresh, nutrient-dense meals designed to fuel your body and delight your senses. From farm to your table.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-200">
              Order Healthy Now
            </button>
            <div className="flex items-center gap-4 px-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                <Heart size={24} className="fill-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-emerald-950 font-black">2.5k+</div>
                <div className="text-emerald-900/40 text-[10px] font-bold uppercase tracking-widest">Active Members</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-[100px]" />
          <div className="relative w-full aspect-square bg-white rounded-[5rem] p-12 shadow-[0_32px_64px_-12px_rgba(5,150,105,0.15)] flex items-center justify-center">
            <div className="w-full h-full rounded-[4rem] overflow-hidden">
              <SmartImage className="w-full h-full object-cover" />
            </div>
            {/* Feature Badges */}
            <div className="absolute -top-4 -right-4 bg-white p-6 rounded-3xl shadow-xl space-y-2">
              <div className="text-emerald-500 font-black text-2xl">0%</div>
              <div className="text-slate-400 text-[8px] font-bold uppercase tracking-widest">Additives</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-600 p-6 rounded-3xl shadow-xl text-white space-y-1">
              <div className="text-xs font-bold opacity-60">Daily Fresh</div>
              <div className="text-xl font-black">Harvested Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 06: Coffee Shop (Warm & Cozy)
  CoffeeShop: () => (
    <div className="w-full min-h-screen bg-[#1a1412] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-left">
          <div className="inline-flex items-center gap-3 text-amber-500 font-black uppercase tracking-[0.3em] text-xs">
            <Coffee size={20} />
            <span>Premium Roast Coffee</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
            Your Daily <br/> <span className="text-amber-600 italic">Ritual</span> <br/> Reimagined.
          </h1>
          <p className="text-zinc-500 text-xl max-w-lg leading-relaxed">
            Discover the perfect blend of ethically sourced beans and artisanal roasting techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-10 py-5 bg-amber-600 text-white rounded-xl font-black text-lg hover:bg-amber-700 transition-all shadow-2xl shadow-amber-900/40">
              Find a Coffee Shop
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              Order Beans Online
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-amber-900/20 rounded-full blur-[120px]" />
          <div className="relative aspect-[4/5] bg-zinc-900 rounded-[3rem] p-4 border border-white/5 overflow-hidden">
            <SmartImage className="w-full h-full object-cover rounded-[2.5rem] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center">
              <div>
                <div className="text-white font-bold text-2xl">Signature Latte</div>
                <div className="text-amber-500 font-bold">$4.50</div>
              </div>
              <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center text-white">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 07: Burger Energetic (Fast & Bold)
  BurgerBold: () => (
    <div className="w-full min-h-screen bg-red-600 flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1 bg-yellow-400 text-red-700 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
            New Limited Edition
          </div>
          <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            Double <br/> <span className="text-yellow-400">Trouble.</span>
          </h1>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             <div className="text-[20rem] font-black text-white/10 whitespace-nowrap select-none">BURGER BURGER BURGER</div>
          </div>
          <div className="relative w-full max-w-2xl aspect-square scale-110 hover:scale-125 transition-transform duration-700">
            <SmartImage className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="w-full sm:w-auto px-12 py-6 bg-yellow-400 text-red-700 rounded-2xl font-black text-2xl hover:bg-yellow-300 transition-all shadow-2xl">
            Order Now
          </button>
          <div className="text-left">
            <div className="text-white font-black text-3xl">$12.99</div>
            <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Free Fries Included</div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 08: Chef Showcase (Professional & Story)
  ChefShowcase: () => (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-stretch overflow-hidden">
      <div className="flex-1 bg-slate-50 flex items-center justify-center p-12 lg:p-24 relative">
        <div className="absolute top-12 left-12 text-slate-900 font-black text-2xl tracking-tighter">
          GASTRO<span className="text-orange-500">NOMY.</span>
        </div>
        
        <div className="space-y-12 relative z-10">
          <div className="w-20 h-px bg-slate-900" />
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-none tracking-tight">
            Meet the <br/> <span className="text-orange-500">Master.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-md leading-relaxed font-medium">
            Chef Marco Rossi brings 20 years of experience from Michelin-starred kitchens in Italy to your neighborhood.
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-950">20+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Years Exp.</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-black text-slate-950">15</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Global Awards</div>
            </div>
          </div>
          <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-orange-500 transition-all shadow-xl">
            Book Chef's Table
          </button>
        </div>
      </div>

      <div className="flex-1 relative bg-slate-950 overflow-hidden">
        <SmartImage className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 space-y-2">
          <div className="text-white font-black text-3xl italic">"Cooking is a language that <br/> doesn't need words."</div>
          <div className="text-orange-500 font-bold uppercase tracking-widest text-xs">- Marco Rossi</div>
        </div>
      </div>
    </div>
  ),

  // Variante 09: Special Offers (Conversion Focus)
  SpecialOffers: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* Animated Patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500 rounded-2xl text-white text-sm font-black uppercase tracking-widest animate-bounce">
            <ShoppingBag size={18} />
            <span>Flash Deal: 50% OFF</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            Don't Wait. <br/> <span className="text-orange-500">Eat Now.</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-lg leading-relaxed">
            Grab our exclusive weekend deals before they're gone. Fresh, hot, and delicious meals at half the price.
          </p>
          
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
              <div className="text-orange-500 font-black text-3xl">50%</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">On First Order</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
              <div className="text-white font-black text-3xl">FREE</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Delivery Today</div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="px-12 py-6 bg-orange-500 text-white rounded-full font-black text-xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)]">
              Claim Offer
            </button>
            <div className="flex items-center gap-3 text-zinc-500">
              <Timer size={20} />
              <span className="font-bold text-sm">Ends in 02:45:12</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
            <SmartImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute top-0 right-0 bg-orange-500 px-8 py-4 rounded-bl-[3rem] text-white font-black text-2xl">
              SAVE $15
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 10: Global Flavors (Variety Focus)
  GlobalFlavors: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10 mb-20">
        <h1 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-none">
          Taste the <br/> <span className="text-slate-300 italic">World.</span>
        </h1>
        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          From the streets of Tokyo to the piazzas of Rome. Explore authentic flavors from every corner of the globe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[
          { name: 'Italian', icon: '🍝' },
          { name: 'Japanese', icon: '🍣' },
          { name: 'Mexican', icon: '🌮' },
          { name: 'Indian', icon: '🍛' },
          { name: 'Thai', icon: '🍜' },
          { name: 'French', icon: '🥐' },
          { name: 'Greek', icon: '🥙' },
          { name: 'Chinese', icon: '🥟' },
          { name: 'Spanish', icon: '🥘' },
          { name: 'Korean', icon: '🍱' }
        ].map((cuisine, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center space-y-4 hover:bg-slate-950 hover:translate-y-[-10px] transition-all duration-500">
              <div className="text-5xl group-hover:scale-125 transition-transform">{cuisine.icon}</div>
              <div className="text-slate-400 group-hover:text-white font-black text-sm uppercase tracking-widest">{cuisine.name}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-slate-100 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <Globe className="text-slate-300" size={48} />
          <div className="text-left">
            <div className="text-slate-950 font-black text-xl">50+ Countries</div>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Authentic Recipes</div>
          </div>
        </div>
        <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:scale-105 transition-all">
          Explore All Flavors
        </button>
      </div>
    </div>
  ),

  // Variante 11: Street Food Night (Neon & Dark)
  StreetFoodNight: () => (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-black uppercase tracking-[0.3em]">
          <Moon size={16} className="text-fuchsia-500" />
          <span>Open Until 4:00 AM</span>
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
          Street <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-pulse">Vibes.</span>
        </h1>
        
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl leading-relaxed">
          The soul of the city on a plate. Authentic, raw, and full of flavor. No reservations needed.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <button className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:bg-fuchsia-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Find the Truck
          </button>
          <div className="flex items-center gap-4 px-8 py-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
             <Zap className="text-cyan-400" size={24} />
             <div className="text-left">
               <div className="text-white font-bold">Fast Service</div>
               <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Under 10 Mins</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 12: Artisan Bakery (Warm & Soft)
  ArtisanBakery: () => (
    <div className="w-full min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12 text-left">
          <div className="w-16 h-1 bg-amber-200" />
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-none tracking-tight">
            Baked with <br/> <span className="text-amber-700 italic font-serif font-light text-7xl md:text-9xl">Patience.</span>
          </h1>
          <p className="text-stone-500 text-xl leading-relaxed max-w-lg">
            Sourdough, croissants, and pastries crafted daily using heritage grains and slow fermentation techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="px-10 py-5 bg-stone-900 text-white rounded-full font-bold text-lg hover:bg-amber-800 transition-all">
              Fresh Today
            </button>
            <button className="px-10 py-5 bg-transparent border border-stone-200 text-stone-900 rounded-full font-bold text-lg hover:bg-stone-50 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-amber-100 rounded-full blur-[100px] opacity-40" />
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-stone-200 shadow-xl">
                <SmartImage className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-stone-200 shadow-xl">
                <SmartImage className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-stone-200 shadow-xl">
                <SmartImage className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-stone-200 shadow-xl">
                <SmartImage className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 13: Sushi Zen (Minimalist & High Contrast)
  SushiZen: () => (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1 relative">
          <div className="absolute -inset-20 bg-slate-100 rounded-full scale-150" />
          <div className="relative aspect-square w-full max-w-md mx-auto">
             <div className="absolute inset-0 border-[20px] border-slate-50 rounded-full" />
             <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <SmartImage className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        <div className="flex-1 space-y-12 text-left relative z-10">
          <div className="text-red-600 font-black text-sm uppercase tracking-[0.5em]">Omakase Experience</div>
          <h1 className="text-7xl md:text-9xl font-light text-slate-950 leading-[0.8] tracking-tighter">
            Pure <br/> <span className="font-black italic">Simplicity.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md">
            The highest quality seafood, prepared with precision and respect for Japanese tradition.
          </p>
          <div className="pt-8">
            <button className="px-12 py-5 bg-slate-950 text-white rounded-none font-bold text-lg hover:bg-red-600 transition-all uppercase tracking-widest">
              Reserve Seat
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-12 text-slate-100 font-black text-[15rem] leading-none select-none -z-0">
        ZEN
      </div>
    </div>
  ),

  // Variante 14: Steakhouse Industrial (Dark & Masculine)
  SteakhouseRough: () => (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
        <div className="relative h-full min-h-[500px] lg:min-h-0">
          <SmartImage className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:hidden" />
        </div>

        <div className="flex flex-col justify-center p-12 lg:p-24 space-y-12 relative z-10 bg-zinc-900/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
          <div className="inline-flex items-center gap-3 text-orange-600 font-black uppercase tracking-[0.4em] text-xs">
            <Beef size={20} />
            <span>Prime Cuts Only</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
            Rare. <br/> Well <br/> <span className="text-zinc-500">Done.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-md font-serif italic">
            "Dry-aged to perfection, grilled over hickory wood, served with respect."
          </p>
          
          <div className="space-y-8 pt-4">
             <button className="w-full lg:w-fit px-12 py-6 bg-orange-700 text-white rounded-none font-black text-xl hover:bg-orange-600 transition-all shadow-2xl">
               Book Your Table
             </button>
             <div className="flex items-center gap-8 text-zinc-600">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">45</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest mt-1">Days Aged</div>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div className="text-center">
                  <div className="text-2xl font-black text-white">800°</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest mt-1">Grill Temp</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 15: Vegan Garden (Light & Floating)
  VeganGarden: () => (
    <div className="w-full min-h-screen bg-lime-50 flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="absolute top-20 left-20 w-64 h-64 bg-lime-200/40 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200/40 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full text-emerald-600 text-sm font-bold shadow-sm">
          <Leaf size={18} />
          <span>Plant Based Revolution</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-emerald-950 leading-[0.85] tracking-tighter">
          Kind Food. <br/> <span className="text-lime-500">Bold Flavors.</span>
        </h1>
        
        <p className="text-emerald-900/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
          Delicious, sustainable, and 100% cruelty-free. Discover how good plant-based can taste.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-black text-xl hover:bg-emerald-700 hover:scale-105 transition-all shadow-xl shadow-emerald-200">
            View Vegan Menu
          </button>
          <button className="px-12 py-6 bg-white text-emerald-950 rounded-[2rem] font-bold text-xl hover:bg-lime-100 transition-all border border-emerald-100">
            Join the Club
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`absolute w-32 h-32 opacity-20 animate-bounce`} style={{ 
            top: `${Math.random() * 80}%`, 
            left: `${Math.random() * 80}%`,
            animationDelay: `${i * 500}ms`
          }}>
            <Leaf className="text-emerald-300 rotate-45" size={48} />
          </div>
        ))}
      </div>
    </div>
  ),

  // Variante 16: Juice Bar (Vibrant & Energetic)
  JuiceBar: () => (
    <div className="w-full min-h-screen bg-orange-400 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="w-fit px-4 py-1 bg-white rounded-full text-orange-500 text-xs font-black uppercase tracking-widest">
            Freshly Squeezed
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            Liquid <br/> <span className="text-yellow-300">Energy.</span>
          </h1>
          <p className="text-white text-xl max-w-md font-bold opacity-90">
            Boost your day with our cold-pressed juices and organic smoothies. No added sugar, just pure nature.
          </p>
          <div className="flex gap-4">
             <button className="px-10 py-5 bg-white text-orange-500 rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all shadow-2xl">
               Order Pickup
             </button>
             <button className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/40 transition-all">
               <ArrowRight size={32} />
             </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 rounded-full scale-110 blur-[100px] opacity-50" />
          <div className="relative aspect-square bg-white/10 backdrop-blur-md rounded-[5rem] border-4 border-white/20 p-8 flex items-center justify-center">
             <div className="w-full h-full rounded-[4rem] overflow-hidden bg-white shadow-2xl">
                <SmartImage className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-yellow-300 p-8 rounded-[3rem] shadow-2xl rotate-12">
                <Cherry className="text-orange-600" size={48} />
             </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 17: Wine Cellar (Deep & Sophisticated)
  WineCellar: () => (
    <div className="w-full min-h-screen bg-[#1a0b0d] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d1215] to-[#1a0b0d]" />
      
      <div className="max-w-5xl mx-auto w-full text-center space-y-12 relative z-10">
        <div className="flex justify-center">
           <div className="w-px h-24 bg-gradient-to-b from-transparent to-red-900" />
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-4 text-red-500 font-serif italic text-xl">
             <Wine size={24} />
             <span>Est. 1924</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-light text-white leading-none tracking-tight font-serif">
            Aged to <br/> <span className="text-red-800 italic">Perfection.</span>
          </h1>
        </div>
        
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Explore our curated selection of rare vintages and artisan wines from the world's most prestigious vineyards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
           <button className="text-white font-bold text-xl uppercase tracking-[0.3em] hover:text-red-500 transition-colors border-b-2 border-red-900 pb-2">
             The Collection
           </button>
           <button className="px-12 py-5 bg-red-900 text-white rounded-none font-bold text-lg hover:bg-red-800 transition-all">
             Book a Tasting
           </button>
        </div>
      </div>
    </div>
  ),

  // Variante 18: Family Pizzeria (Retro & Warm)
  FamilyPizzeria: () => (
    <div className="w-full min-h-screen bg-orange-50 flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute inset-0 border-[16px] border-red-600 rounded-[4rem] -rotate-3" />
           <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <SmartImage className="w-full h-full object-cover" />
           </div>
           <div className="absolute -top-8 -left-8 bg-yellow-400 p-8 rounded-full shadow-xl flex flex-col items-center justify-center rotate-[-15deg]">
              <div className="text-red-700 font-black text-3xl">HOT</div>
              <div className="text-red-700 font-bold text-xs">OVEN</div>
           </div>
        </div>

        <div className="order-1 lg:order-2 space-y-10 text-left">
          <div className="flex items-center gap-3">
             <Pizza className="text-red-600" size={32} />
             <div className="text-slate-900 font-black text-2xl tracking-tighter italic">NONNA'S PIZZA</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.85] tracking-tighter">
            Authentic <br/> <span className="text-red-600">Wood-Fired</span> <br/> Goodness.
          </h1>
          <p className="text-slate-600 text-xl max-w-lg leading-relaxed font-medium">
            Hand-stretched dough, secret family sauce, and the finest mozzarella. Just like Nonna used to make.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
             <button className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200">
               Order for Pickup
             </button>
             <button className="px-10 py-5 bg-white text-slate-900 border-4 border-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all">
               Delivery
             </button>
          </div>
        </div>
      </div>
    </div>
  ),

  // Variante 19: Seafood Coastal (Blue & Fresh)
  SeafoodCoastal: () => (
    <div className="w-full min-h-screen bg-sky-50 flex flex-col items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="flex-1 space-y-12">
          <div className="inline-flex items-center gap-3 text-sky-600 font-black uppercase tracking-[0.4em] text-xs">
            <Waves size={20} />
            <span>Caught This Morning</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-sky-950 leading-[0.8] tracking-tighter">
            From Sea <br/> <span className="text-sky-500 italic">To Table.</span>
          </h1>
          <p className="text-sky-900/60 text-xl max-w-lg leading-relaxed">
            The freshest catch from our local waters, prepared with simple ingredients to let the natural flavors shine.
          </p>
          <div className="flex items-center gap-8">
             <button className="px-12 py-6 bg-sky-600 text-white rounded-full font-black text-xl hover:bg-sky-700 transition-all shadow-2xl shadow-sky-200">
               Reserve Table
             </button>
             <div className="text-left">
                <div className="text-sky-950 font-black text-2xl">Daily Menu</div>
                <div className="text-sky-400 text-xs font-bold uppercase tracking-widest">Updated 6:00 AM</div>
             </div>
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="absolute -inset-10 bg-sky-200 rounded-[5rem] rotate-6 opacity-50 blur-3xl" />
           <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
              <SmartImage className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    </div>
  ),

  // Variante 20: Foodie Showcase Final (Visual Portfolio)
  FoodieShowcaseFinal: () => (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full text-center space-y-12 mb-20 relative z-10">
        <h1 className="text-6xl md:text-[12rem] font-black text-white leading-none tracking-tighter uppercase opacity-10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
          GASTRONOMY
        </h1>
        <div className="space-y-6">
          <div className="text-orange-500 font-black text-xs uppercase tracking-[0.5em]">The Ultimate Collection</div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight">
            Elevate Your <br/> <span className="text-orange-500">Food Brand.</span>
          </h2>
        </div>
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl mx-auto">
          20 professional layouts designed for restaurants, cafes, and food services. Stable, responsive, and ready.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
           <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 group">
              <SmartImage className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
           </div>
         ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-8 relative z-10">
         <button className="px-16 py-8 bg-white text-slate-950 rounded-full font-black text-2xl hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
           Get All Layouts
         </button>
         <div className="flex items-center gap-12 text-zinc-600 font-bold uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2"><Star className="text-orange-500" size={16} /> 20 Variants</div>
            <div className="flex items-center gap-2"><Clock className="text-orange-500" size={16} /> React + Tailwind</div>
            <div className="flex items-center gap-2"><MapPin className="text-orange-500" size={16} /> Fully Responsive</div>
         </div>
      </div>
    </div>
  ),
};
