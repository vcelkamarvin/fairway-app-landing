'use client';
import React, { useState } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Upload, ChevronDown } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function Configurator() {
  const [clubName, setClubName] = useState('Schloss Fairway Club');
  const [themeColor, setThemeColor] = useState('#1A3C2A');

  const colors = [
    { name: 'Classic Green', value: '#1A3C2A' },
    { name: 'Navy Blue', value: '#1E3A5F' },
    { name: 'Burgundy', value: '#5C1A1B' },
    { name: 'Slate Gray', value: '#3A4042' },
    { name: 'Royal Purple', value: '#3E2A4F' },
  ];

  return (
    <section className="py-24 bg-cream-surface border-y border-border-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Controls */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
              Configure your club app
            </h2>
            <p className="text-lg text-text-muted mb-10">
              Preview your branded member experience in minutes.
            </p>

            <div className="space-y-6 max-w-md">
              {/* Club Name Input */}
              <div>
                <label className="block text-sm font-medium text-dark-green mb-2">Club Name</label>
                <input 
                  type="text" 
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border-green bg-white focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-shadow"
                />
              </div>

              {/* Brand Color Picker */}
              <div>
                <label className="block text-sm font-medium text-dark-green mb-2">Brand Color</label>
                <div className="flex gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setThemeColor(c.value)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${themeColor === c.value ? 'border-accent-gold scale-110 shadow-md' : 'border-transparent hover:scale-105'}`}
                      style={{ backgroundColor: c.value }}
                      title={c.name}
                      aria-label={`Select ${c.name} color`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-dark-green mb-2">Club Logo</label>
                <div className="w-full border-2 border-dashed border-border-green rounded-lg p-4 flex items-center justify-center bg-white/50 cursor-pointer hover:bg-white transition-colors group">
                  <Upload className="w-5 h-5 text-text-muted mr-2 group-hover:text-primary-green transition-colors" />
                  <span className="text-sm text-text-muted group-hover:text-primary-green transition-colors">Upload PNG or SVG</span>
                </div>
              </div>

              {/* Selectors */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-green mb-2">Membership Tier</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-border-green bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-green text-sm cursor-pointer">
                      <option>Gold Member</option>
                      <option>Silver Member</option>
                      <option>Junior Member</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-green mb-2">Reward Type</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-border-green bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-green text-sm cursor-pointer">
                      <option>Points System</option>
                      <option>Cashback</option>
                      <option>Stamps</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button 
                  className="w-full bg-primary-green text-warm-white py-4 rounded-full font-medium hover:bg-dark-green transition-colors shadow-md"
                  style={{ backgroundColor: themeColor }}
                >
                  Build my club app
                </button>
                <p className="text-xs text-center text-text-muted mt-3">
                  48h average setup. No credit card required for pilot application.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Preview */}
          <div className="relative flex justify-center lg:justify-end perspective-1000">
            <div 
              className="transform lg:rotate-y-[-15deg] lg:rotate-x-[5deg] transition-all duration-700 ease-out drop-shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <PhoneMockup>
                <div className="h-full flex flex-col bg-gray-50" style={{ transition: 'background-color 0.5s' }}>
                  {/* Dynamic Header */}
                  <div 
                    className="pt-12 pb-6 px-6 text-white rounded-b-[2rem] shadow-sm relative overflow-hidden"
                    style={{ backgroundColor: themeColor, transition: 'background-color 0.5s' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <p className="text-xs opacity-80 uppercase tracking-wider mb-1 font-semibold">Digital Membership</p>
                    <h3 className="text-xl font-serif font-bold leading-tight">{clubName}</h3>
                    
                    {/* Membership Card Graphic */}
                    <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold" style={{ color: themeColor }}>SC</span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">Gold Tier</span>
                      </div>
                      <p className="text-sm opacity-80">Thomas Anderson</p>
                      <p className="font-mono text-xs opacity-60 mt-1">ID: 8492 0192 481</p>
                    </div>
                  </div>

                  {/* Dynamic Content */}
                  <div className="flex-1 p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 mb-1">Rewards</p>
                        <p className="font-bold text-lg" style={{ color: themeColor }}>1,245 pts</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 mb-1">Wallet</p>
                        <p className="font-bold text-lg" style={{ color: themeColor }}>€85.50</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="text-sm font-bold text-gray-800 mb-2">Today at {clubName}</h4>
                      <div className="h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e1c04618d?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
