import React from 'react';
import { TrendingUp, ShoppingBag, GraduationCap, HeartHandshake, BarChart, Send, Eye, Ticket, CircleDollarSign } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function RevenueEngine() {
  return (
    <section className="py-24 bg-cream-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-6">
            Built to create measurable club revenue
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side: Outcome Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <OutcomeCard 
              icon={<TrendingUp />}
              title="Fill quiet tee times"
              description="Send weather-based and time-sensitive tee-time offers."
              delay={0.1}
            />
            <OutcomeCard 
              icon={<ShoppingBag />}
              title="Increase pro shop spend"
              description="Promote limited offers, new arrivals, fitting days, and member-only discounts."
              delay={0.2}
            />
            <OutcomeCard 
              icon={<GraduationCap />}
              title="Grow lesson bookings"
              description="Push lesson credits, coach availability, junior programs, and package offers."
              delay={0.3}
            />
            <OutcomeCard 
              icon={<HeartHandshake />}
              title="Improve retention"
              description="Reward members for visits, referrals, spend, reviews, and participation."
              delay={0.4}
            />
          </div>

          {/* Right Side: Analytics Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-border-green"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center text-primary-green">
                <BarChart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Campaign Performance</p>
                <h3 className="font-bold text-lg text-dark-green">Friday Twilight Round</h3>
              </div>
            </div>

            <div className="space-y-6">
              <AnalyticsRow icon={<Send />} label="Sent" value="842 members" />
              <AnalyticsRow icon={<Eye />} label="Open rate" value="46%" />
              <AnalyticsRow icon={<Ticket />} label="Redemptions" value="38" />
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-text-muted mb-2">Revenue generated</p>
                <div className="flex items-center gap-3 text-success">
                  <CircleDollarSign className="w-8 h-8" />
                  <span className="text-4xl font-mono font-bold">€2,470</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function OutcomeCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-warm-white p-6 rounded-2xl border border-border-green shadow-sm hover:border-primary-green transition-colors group"
    >
      <div className="w-10 h-10 bg-primary-green text-warm-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
      </div>
      <h3 className="font-bold text-dark-green text-lg mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function AnalyticsRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-text-muted">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
        <span className="font-medium">{label}</span>
      </div>
      <span className="font-bold text-dark-green">{value}</span>
    </div>
  );
}
