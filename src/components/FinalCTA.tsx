import React from 'react';
import * as motion from 'framer-motion/client';

export function FinalCTA() {
  return (
    <section className="py-40 bg-warm-white relative overflow-hidden flex flex-col items-center border-t border-border-green/30">
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-8"
        >
          The Next Step
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-dark-green mb-12"
        >
          Begin the <br className="hidden md:block"/>
          <span className="italic font-light">conversation.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-transparent border border-dark-green text-dark-green px-10 py-4 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-dark-green hover:text-warm-white transition-colors duration-500">
            Approach the club
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
