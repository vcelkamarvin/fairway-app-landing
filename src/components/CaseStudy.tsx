import React from 'react';
import { Star, PlayCircle } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function CaseStudy() {
  return (
    <section className="py-24 bg-cream-surface" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Video Case Study Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] bg-dark-green shadow-2xl mb-12 flex items-center justify-center group cursor-pointer"
        >
          {/* Background image placeholder - using a subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/80 to-dark-green/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e1c04618d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <PlayCircle className="w-16 h-16 text-accent-gold mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-warm-white leading-tight mb-4">
              How Rheinwald Golf Club added €14,800 in member spend during its first 60 days
            </h3>
            <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 mt-4 inline-block">
              <span className="text-xs text-warm-white/80 font-medium tracking-wide uppercase">Pilot Case Study</span>
            </div>
          </div>
        </motion.div>

        {/* Example Club Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-24 opacity-60 grayscale">
          {['Rheinwald Golf Club', 'Alpine Green Club', 'Schloss Fairway', 'München West Golf'].map((club) => (
            <div key={club} className="text-lg font-serif font-semibold text-text-primary">
              {club}
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReviewCard 
            title="Finally, members actually see our offers"
            text="Email was dead for us. Push notifications made our twilight offers visible again."
            name="Club Manager, Bavaria"
            delay={0.1}
          />
          <ReviewCard 
            title="The wallet changed spending behavior"
            text="Members top up once and spend more naturally across the pro shop and restaurant."
            name="Operations Lead, Germany"
            delay={0.2}
          />
          <ReviewCard 
            title="Premium without feeling complicated"
            text="It feels like our own club app, not another external platform."
            name="Golf Club Director"
            delay={0.3}
          />
        </div>

      </div>
    </section>
  );
}

function ReviewCard({ title, text, name, delay }: { title: string, text: string, name: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-border-green/50 hover:shadow-md transition-shadow"
    >
      <div className="flex text-accent-gold mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <h4 className="font-bold text-lg text-dark-green mb-3">{title}</h4>
      <p className="text-text-muted mb-6 text-sm leading-relaxed">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-cream-surface border border-border-green flex items-center justify-center">
          <span className="text-xs font-bold text-primary-green">{name.charAt(0)}</span>
        </div>
        <span className="text-xs font-medium text-text-primary">{name}</span>
      </div>
    </motion.div>
  );
}
