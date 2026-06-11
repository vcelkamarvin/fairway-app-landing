import React from 'react';
import * as motion from 'framer-motion/client';

export function DarkConversionBand() {
  return (
    <section className="bg-[#0A1610] text-warm-white py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-green/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-warm-white">
              Sell more, while your members play
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-lg">
              Fairway App turns every member&apos;s phone into a direct club revenue channel. Send targeted offers, reward loyal members, fill quiet tee times, and keep the club experience alive between visits.
            </p>
          </motion.div>

          {/* Right Side: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:border-l lg:border-white/10 lg:pl-16 relative"
          >
            <StatItem 
              stat="+40–60%" 
              description="expected push open rates" 
            />
            <StatItem 
              stat="+20–35%" 
              description="potential increase in on-site spend with wallet credit" 
            />
            <StatItem 
              stat="48h" 
              description="branded onboarding" 
            />
            <StatItem 
              stat="0%" 
              description="commission on club revenue" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, description }: { stat: string, description: string }) {
  return (
    <div className="relative pl-6 border-l-2 border-accent-gold/50">
      <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-accent-gold"></div>
      <p className="text-3xl font-mono font-bold text-warm-white mb-2">{stat}</p>
      <p className="text-sm text-text-muted leading-snug">{description}</p>
    </div>
  );
}
