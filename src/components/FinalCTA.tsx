import React from 'react';
import { ChevronRight } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#0A1610] text-warm-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary-green/20 blur-[100px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8"
        >
          Your members already live on their phones.<br className="hidden md:block"/> Your club should be there too.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-muted/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Launch a premium branded app for your golf club and turn member attention into loyalty, spend, and retention.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-primary-green text-warm-white px-8 py-4 rounded-full font-medium hover:bg-success transition-colors text-lg shadow-lg flex items-center justify-center border border-white/10">
            Book demo
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="bg-transparent text-warm-white px-8 py-4 rounded-full font-medium hover:bg-white/5 border border-white/20 transition-colors text-lg flex items-center justify-center">
            See app preview
          </button>
        </motion.div>
      </div>
    </section>
  );
}
