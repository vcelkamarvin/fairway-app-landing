import React from 'react';
import { DownloadCloud, Settings2, Send } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function SetupSteps() {
  return (
    <section className="py-24 bg-cream-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-6">
            3 easy steps to launch your club app
          </h2>
          <p className="text-lg text-text-muted">
            No internal developer. No new booking system. No long implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-border-green z-0 border-dashed border-b"></div>

          <StepCard 
            number="1"
            icon={<DownloadCloud />}
            title="Import your club identity"
            description="Fairway App imports your logo, colors, course images, membership tiers, and basic club information."
            delay={0.1}
          />
          <StepCard 
            number="2"
            icon={<Settings2 />}
            title="Configure your member experience"
            description="Choose rewards, wallet rules, birthday offers, push campaigns, and available member benefits."
            delay={0.3}
          />
          <StepCard 
            number="3"
            icon={<Send />}
            title="Start sending offers"
            description="Launch push campaigns for tee times, lessons, tournaments, F&B, and pro shop promotions."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, icon, title, description, delay }: { number: string, icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative z-10 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-warm-white rounded-2xl shadow-md border border-border-green flex items-center justify-center text-primary-green mb-8 relative">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
          {number}
        </div>
        {React.cloneElement(icon as any, { className: 'w-8 h-8' })}
      </div>
      
      {/* Abstract Visual Placeholder */}
      <div className="w-full h-40 bg-white rounded-xl shadow-sm border border-border-green mb-8 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')]"></div>
      </div>

      <h3 className="text-xl font-bold text-dark-green mb-4">{title}</h3>
      <p className="text-text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
