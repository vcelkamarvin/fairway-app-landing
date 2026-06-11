import React from 'react';
import * as motion from 'framer-motion/client';

export function Pricing() {
  return (
    <section className="py-32 bg-cream-surface border-t border-border-green/30" id="membership">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-6">Membership</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-dark-green leading-[1.2] mb-6">
            Membership in the platform is <br className="hidden md:block"/>
            transactional. <span className="italic text-text-muted">It is considered.</span>
          </h2>
          <p className="text-sm font-sans text-text-muted max-w-lg mx-auto">
            We do not seek volume or growth for its own sake. The platform is configured for compatibility with your club's operational ethos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingTier 
            title="Society"
            desc="For boutique and historic clubs."
            price="€199"
            features={["Digital crest card", "Event invitations", "Basic ledger", "Up to 300 members"]}
            delay={0.1}
          />
          <PricingTier 
            title="Championship"
            desc="For active, competitive memberships."
            price="€299"
            features={["Everything in Society", "Tournament scoring", "Member wallet", "Analytics reporting"]}
            delay={0.3}
          />
          <PricingTier 
            title="Heritage"
            desc="For premium, multi-estate clubs."
            price="€499"
            features={["Everything in Championship", "Bespoke branding", "Dedicated concierge", "Unlimited members"]}
            delay={0.5}
          />
        </div>

      </div>
    </section>
  );
}

function PricingTier({ title, desc, price, features, delay }: { title: string, desc: string, price: string, features: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="border border-dark-green/20 p-10 flex flex-col hover:border-dark-green transition-colors duration-500 bg-warm-white"
    >
      <h3 className="text-2xl font-serif font-medium text-dark-green mb-2">{title}</h3>
      <p className="text-sm font-sans text-text-muted mb-8">{desc}</p>
      
      <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-dark-green/10">
        <span className="text-4xl font-serif text-dark-green">{price}</span>
        <span className="text-xs font-sans text-text-muted tracking-widest uppercase">/ Month</span>
      </div>

      <ul className="space-y-4 mb-12 flex-1">
        {features.map((f, i) => (
          <li key={i} className="text-sm font-sans text-dark-green flex items-start">
            <span className="mr-3 text-text-muted">—</span>
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full py-4 border border-dark-green text-dark-green text-xs font-sans tracking-widest uppercase hover:bg-dark-green hover:text-warm-white transition-colors duration-500">
        Apply
      </button>
    </motion.div>
  );
}
