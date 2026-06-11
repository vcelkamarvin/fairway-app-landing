import React from 'react';
import { Check } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function Pricing() {
  return (
    <section className="py-24 bg-warm-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-6">
            Simple pricing. No commission. No heavy implementation.
          </h2>
          <p className="text-lg text-text-muted">
            Free pilot available for selected clubs. No commission on club revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <PricingCard 
            title="Starter"
            price="€199"
            subtitle="For smaller clubs"
            features={[
              "Digital membership card",
              "Push notifications",
              "Basic rewards",
              "Branded app",
              "Up to 300 members"
            ]}
            ctaText="Start pilot"
            delay={0.1}
          />
          
          <PricingCard 
            title="Pro"
            price="€299"
            subtitle="For active member clubs"
            features={[
              "Everything in Starter",
              "Club wallet",
              "Birthday campaigns",
              "Advanced rewards",
              "Analytics dashboard",
              "Google review automation",
              "Up to 800 members"
            ]}
            ctaText="Book demo"
            isPopular
            delay={0.2}
          />
          
          <PricingCard 
            title="Club Elite"
            price="€499"
            subtitle="For premium and multi-course clubs"
            features={[
              "Everything in Pro",
              "Fully custom branding",
              "Dedicated onboarding",
              "Priority support",
              "Custom integrations",
              "Multi-course support",
              "Unlimited members"
            ]}
            ctaText="Talk to us"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  subtitle, 
  features, 
  ctaText, 
  isPopular = false,
  delay
}: { 
  title: string, 
  price: string, 
  subtitle: string, 
  features: string[], 
  ctaText: string, 
  isPopular?: boolean,
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white rounded-3xl p-8 flex flex-col h-full ${
        isPopular 
          ? 'border-2 border-primary-green shadow-xl md:-translate-y-4' 
          : 'border border-border-green shadow-sm'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
          <div className="bg-primary-green text-warm-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-dark-green mb-2">{title}</h3>
        <p className="text-sm text-text-muted mb-6">{subtitle}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif font-bold text-dark-green">{price}</span>
          <span className="text-text-muted">/month</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success shrink-0" />
            <span className="text-sm text-text-primary">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-4 rounded-full font-medium transition-colors ${
          isPopular 
            ? 'bg-primary-green text-warm-white hover:bg-dark-green' 
            : 'bg-cream-surface text-dark-green hover:bg-border-green border border-border-green'
        }`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
}
