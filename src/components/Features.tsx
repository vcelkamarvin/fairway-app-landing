import React from 'react';
import * as motion from 'framer-motion/client';

export function Features() {
  return (
    <section className="py-32 bg-cream-surface border-t border-border-green/30" id="features">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-dark-green/20 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-6">Activities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-dark-green leading-[1.2]">
              Working with leading names.<br/>
              <span className="italic text-text-muted">A standard of excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-sans text-text-muted mt-8 md:mt-0">
            Our platform provides the quiet infrastructure for the world's most prestigious golf societies, allowing staff to focus on personal service rather than administrative friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          <FeatureBlock 
            title="Tournaments & Events"
            desc="Seamless registration and live scoring for club-sanctioned events. Members can RSVP, review flight assignments, and view historical standings."
            img="https://images.unsplash.com/photo-1593111774641-a185b3992b45?q=80&w=800&auto=format&fit=crop"
            delay={0.1}
          />
          
          <FeatureBlock 
            title="Private Lessons"
            desc="Direct booking with club professionals. Integrated video swing analysis sharing and personalized practice regimens delivered quietly to the member's device."
            img="https://images.unsplash.com/photo-1620802051772-23c2800c1d68?q=80&w=800&auto=format&fit=crop"
            delay={0.3}
          />
          
          <FeatureBlock 
            title="Wellness & Fitness"
            desc="Extend the club experience to the fitness center. Book personal trainers, reserve spa treatments, and access golf-specific mobility routines."
            img="https://images.unsplash.com/photo-1587174486073-ae5e1c04618d?q=80&w=800&auto=format&fit=crop"
            delay={0.5}
          />

          <FeatureBlock 
            title="Clubhouse Access"
            desc="Digital wallet functionality for the halfway house and dining room. Effortless settlement of accounts with zero disruption to the post-round atmosphere."
            img="https://images.unsplash.com/photo-1535136018317-062e24eb5df1?q=80&w=800&auto=format&fit=crop"
            delay={0.7}
          />

        </div>

      </div>
    </section>
  );
}

function FeatureBlock({ title, desc, img, delay }: { title: string, desc: string, img: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="group"
    >
      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <h3 className="text-2xl font-serif font-medium text-dark-green mb-4">{title}</h3>
      <p className="text-sm font-sans text-text-muted leading-relaxed max-w-md">
        {desc}
      </p>
    </motion.div>
  );
}
