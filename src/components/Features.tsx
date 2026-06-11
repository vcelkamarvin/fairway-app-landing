import React from 'react';
import { CreditCard, BellRing, Wallet, Gift, ThermometerSun, Trophy, Clock, BarChart3 } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function Features() {
  const features = [
    {
      title: "Digital Membership Card",
      description: "A branded member card inside the app with tier badge, QR code, member name, and status.",
      icon: <CreditCard />
    },
    {
      title: "Push Campaigns",
      description: "Send segmented campaigns to all members, Gold members, inactive members, tournament players, juniors, or high-spend members.",
      icon: <BellRing />
    },
    {
      title: "Club Wallet",
      description: "Members can preload credit and spend it in the pro shop, restaurant, lessons, range buckets, or event fees.",
      icon: <Wallet />
    },
    {
      title: "Rewards Engine",
      description: "Give points for check-ins, spending, reviews, referrals, birthdays, tournament entries, and visits.",
      icon: <Gift />
    },
    {
      title: "Course Conditions",
      description: "Groundskeepers can update green speed, fairway condition, bunkers, closures, aeration, and weather notes.",
      icon: <ThermometerSun />
    },
    {
      title: "Leaderboards",
      description: "Weekly, monthly, season, and tournament rankings with member-friendly competition.",
      icon: <Trophy />
    },
    {
      title: "Tee Time Nudges",
      description: "Use weather windows, quiet periods, and last-minute availability to fill open tee slots.",
      icon: <Clock />
    },
    {
      title: "Analytics Dashboard",
      description: "Track push open rates, redemptions, wallet top-ups, member engagement, and revenue generated.",
      icon: <BarChart3 />
    }
  ];

  return (
    <section className="py-24 bg-warm-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-6">
            A private member app built for golf clubs
          </h2>
          <p className="text-lg text-text-muted">
            Everything your club needs to retain, reward, and monetize members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, delay }: { title: string, description: string, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-border-green/50 hover:shadow-md hover:border-border-green transition-all"
    >
      <div className="w-12 h-12 bg-cream-surface rounded-xl flex items-center justify-center text-primary-green mb-6">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <h3 className="text-lg font-bold text-dark-green mb-3">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
