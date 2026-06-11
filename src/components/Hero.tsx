import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { CheckCircle2, ChevronRight, CloudSun, Calendar, Trophy, Gift, Home, Map, CircleUserRound } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark-green tracking-tight mb-6"
          >
            Sell more rounds, lessons & memberships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            Fairway App gives golf clubs their own branded mobile app for push offers, loyalty rewards, wallet credit, course updates, and member retention.
          </motion.p>
          
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['No credit card needed', '48h branded setup', 'Built for golf clubs', 'Works with existing tee-time systems'].map((badge) => (
              <div key={badge} className="flex items-center space-x-2 text-sm text-text-muted bg-white px-3 py-1.5 rounded-full border border-border-green shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-primary-green text-warm-white px-8 py-4 rounded-full font-medium hover:bg-dark-green transition-colors text-lg shadow-lg flex items-center justify-center">
              Build my club app
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white text-text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-50 border border-border-green transition-colors text-lg flex items-center justify-center">
              See live preview
            </button>
          </motion.div>
        </div>

        {/* Center Visual */}
        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Floating features */}
          <div className="hidden lg:block absolute top-1/4 -left-12 z-20">
            <FeaturePill label="Push Offers" delay={0.4} />
          </div>
          <div className="hidden lg:block absolute top-1/2 -left-20 z-20">
            <FeaturePill label="Digital Card" delay={0.5} />
          </div>
          <div className="hidden lg:block absolute bottom-1/4 -left-8 z-20">
            <FeaturePill label="Club Wallet" delay={0.6} />
          </div>

          <div className="hidden lg:block absolute top-1/3 -right-12 z-20">
            <FeaturePill label="Rewards" delay={0.4} />
          </div>
          <div className="hidden lg:block absolute top-2/3 -right-16 z-20">
            <FeaturePill label="Tee Time Nudges" delay={0.5} />
          </div>
          <div className="hidden lg:block absolute bottom-1/4 -right-4 z-20">
            <FeaturePill label="Leaderboards" delay={0.6} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center relative z-10"
          >
            <PhoneMockup className="shadow-2xl">
              <div className="bg-warm-white h-full flex flex-col font-sans">
                {/* Status bar area */}
                <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-xs font-semibold">
                  <span>9:41</span>
                  <div className="flex space-x-1 items-center mb-0.5">
                    <div className="w-4 h-3 bg-black rounded-sm"></div>
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                    <div className="w-5 h-3 bg-black rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="flex-1 overflow-y-auto pb-20 px-5 pt-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-text-muted">Good morning,</p>
                      <h2 className="text-2xl font-serif font-bold text-dark-green">Thomas</h2>
                    </div>
                    <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">
                      T
                    </div>
                  </div>

                  {/* Weather Strip */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center mb-4">
                    <CloudSun className="w-6 h-6 text-accent-gold mr-3" />
                    <div>
                      <p className="font-semibold text-sm">18°C · Course Open</p>
                      <p className="text-xs text-text-muted">Greens running at 10.5</p>
                    </div>
                  </div>

                  {/* Next Tee Time */}
                  <div className="bg-primary-green text-white rounded-xl p-4 shadow-md mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                    <div className="flex items-center mb-2 relative z-10">
                      <Calendar className="w-4 h-4 mr-2 opacity-80" />
                      <span className="text-xs font-medium uppercase tracking-wider opacity-80">Next Tee Time</span>
                    </div>
                    <p className="text-lg font-bold relative z-10">Today · 14:20</p>
                    <p className="text-sm opacity-90 relative z-10">West Course · 4 Players</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Rewards */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <Trophy className="w-5 h-5 text-accent-gold mb-2" />
                      <p className="text-xs text-text-muted mb-1">Reward Points</p>
                      <p className="font-bold text-lg">1,245 pts</p>
                    </div>
                    {/* Wallet */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <div className="w-5 h-5 bg-dark-green rounded-full flex items-center justify-center text-white text-[10px] font-bold mb-2">€</div>
                      <p className="text-xs text-text-muted mb-1">Club Wallet</p>
                      <p className="font-bold text-lg">€85.50</p>
                    </div>
                  </div>

                  {/* Offer Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-accent-gold relative overflow-hidden">
                    <Gift className="w-20 h-20 text-accent-gold/10 absolute right-0 top-1/2 -translate-y-1/2 -mr-4" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider bg-accent-gold/10 px-2 py-0.5 rounded-sm inline-block mb-1">Birthday Offer</span>
                      <p className="font-bold text-sm mb-1">Free range bucket this week</p>
                      <p className="text-xs text-text-muted">Show this at the pro shop</p>
                    </div>
                  </div>
                  
                </div>

                {/* Bottom Nav */}
                <div className="h-20 bg-white border-t border-gray-100 absolute bottom-0 w-full flex justify-around items-center px-2 pb-4 pt-2">
                  <NavItem icon={<Home />} label="Home" active />
                  <NavItem icon={<Map />} label="Course" />
                  <NavItem icon={<Trophy />} label="Game" />
                  <NavItem icon={<Gift />} label="Rewards" />
                  <NavItem icon={<CircleUserRound />} label="Profile" />
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>

        {/* Metrics Below */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
        >
          <Metric stat="+32%" label="more pro shop visits" />
          <Metric stat="+18%" label="higher lesson bookings" />
          <Metric stat="+41%" label="push offer open rate" />
          <Metric stat="48h" label="app setup time" />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturePill({ label, delay }: { label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white px-4 py-2 rounded-full shadow-lg border border-border-green flex items-center gap-2 whitespace-nowrap"
    >
      <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
      <span className="font-medium text-sm text-text-primary">{label}</span>
    </motion.div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center w-12 ${active ? 'text-primary-green' : 'text-gray-400'}`}>
      <div className="w-6 h-6 mb-1">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full' })}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}

function Metric({ stat, label }: { stat: string, label: string }) {
  return (
    <div className="text-center p-4">
      <p className="text-3xl font-mono font-bold text-dark-green mb-1">{stat}</p>
      <p className="text-sm text-text-muted">{label}</p>
    </div>
  );
}
