import React from 'react';
import * as motion from 'framer-motion/client';

export function CaseStudy() {
  return (
    <section className="py-32 bg-cream-surface border-t border-border-green/30" id="case-studies">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-6">The Face</span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-dark-green leading-[1.1] mb-6">
              Nothing here is rushed.<br/>
              <span className="italic text-text-muted">Including people.</span>
            </h2>
            <p className="text-sm font-sans text-text-muted leading-relaxed max-w-sm mb-12">
              Every meeting is special.<br/>
              Every participant is unique.<br/>
              Our software ensures the club experience feels personal, never automated.
            </p>

            <div className="border-l border-dark-green pl-6 py-2">
              <p className="font-serif italic text-2xl text-dark-green mb-4">
                "It feels like our own club tradition, not an external platform."
              </p>
              <p className="text-xs tracking-widest uppercase text-text-muted">Club Director, Bavaria</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] bg-[url('https://images.unsplash.com/photo-1535136018317-062e24eb5df1?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
              <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1595804670233-018241b712fb?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1600171092873-10eb06b744a5?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
              <div className="aspect-[3/4] bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e1c04618d?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
