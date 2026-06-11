import React from 'react';
import * as motion from 'framer-motion/client';

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-warm-white">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 relative">
        
        {/* Staggered Images Background Layer */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-10 left-[5%] w-64 h-80 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1593111774240-d529f12cb416?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-40 right-[8%] w-72 h-[26rem] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e1c04618d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
          </motion.div>
        </div>

        {/* Central Typographic Layout */}
        <div className="relative z-10 flex flex-col items-center text-center mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-6">Private Members Club Software</span>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-medium text-dark-green tracking-tight leading-[1.1]">
              Private, <span className="italic font-light">not distant.</span><br />
              The calm side of belonging.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <button className="bg-transparent border border-dark-green text-dark-green px-8 py-3 rounded-full font-sans text-sm tracking-wider uppercase hover:bg-dark-green hover:text-warm-white transition-colors duration-500 mb-16">
              Approach the club
            </button>
            <p className="max-w-2xl text-text-muted text-lg leading-relaxed font-sans">
              Fairway App is a private golf society platform built around discretion, ritual, and shared standards. We provide the digital foundation for your club's loyalty, wallet, and retention.
            </p>
          </motion.div>
        </div>

        {/* Floating Metrics (subtle) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-32 border-t border-border-green pt-16"
        >
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase text-text-muted mb-2">Setup Time</p>
            <p className="text-4xl font-serif text-dark-green">48 Hours</p>
          </div>
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase text-text-muted mb-2">Commission</p>
            <p className="text-4xl font-serif text-dark-green italic">Zero</p>
          </div>
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase text-text-muted mb-2">Integration</p>
            <p className="text-4xl font-serif text-dark-green">Seamless</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
