import React from 'react';
import * as motion from 'framer-motion/client';

export function SetupSteps() {
  return (
    <section className="py-32 bg-warm-white">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-dark-green mb-8">
            Tradition on the tee.<br/>
            <span className="italic text-text-muted">Technology in the background.</span>
          </h2>
          <p className="text-lg font-sans text-text-muted max-w-2xl mx-auto">
            The purpose here is continuity. Play is approached as something sustained over time, not refreshed for effect. Our platform respects your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <Step 
            number="I."
            title="Import Identity"
            desc="We import your crest, colors, course photography, and membership registry with total fidelity."
            delay={0.1}
          />
          <Step 
            number="II."
            title="Configure Rituals"
            desc="Set the cadence of communication. Define the parameters of your club wallet and member privileges."
            delay={0.3}
          />
          <Step 
            number="III."
            title="Invite Members"
            desc="A discreet, branded invitation is extended to your membership. No friction. Immediate utility."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="flex flex-col border-t border-dark-green/20 pt-8"
    >
      <span className="font-serif italic text-3xl text-dark-green mb-6">{number}</span>
      <h3 className="text-xl font-serif font-medium text-dark-green mb-4">{title}</h3>
      <p className="text-sm font-sans text-text-muted leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
