import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import * as motion from 'framer-motion/client';

export function AppScreenShowcase() {
  return (
    <section className="py-24 bg-[#0A1610] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-warm-white mb-6">
          The ultimate member experience
        </h2>
        <p className="text-lg text-text-muted/80 max-w-2xl mx-auto">
          Five core modules built specifically to keep your members engaged, informed, and spending more at your club.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-16 pt-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-8 snap-x snap-mandatory hide-scrollbar lg:justify-center">
        
        {/* Screen 1: Home Dashboard */}
        <ScreenCard title="Home Dashboard" delay={0.1}>
          <div className="p-4 flex flex-col gap-3">
            <div className="w-2/3 h-6 bg-gray-200 rounded-md"></div>
            <div className="w-full h-16 bg-gray-100 rounded-xl mt-2"></div>
            <div className="w-full h-24 bg-primary-green rounded-xl mt-2 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-1/2 h-20 bg-gray-100 rounded-xl"></div>
              <div className="w-1/2 h-20 bg-gray-100 rounded-xl"></div>
            </div>
            <div className="w-full h-24 bg-gray-50 border-l-4 border-accent-gold rounded-xl mt-2"></div>
          </div>
        </ScreenCard>

        {/* Screen 2: Course Map */}
        <ScreenCard title="Course Map" delay={0.2}>
          <div className="h-full bg-[url('https://images.unsplash.com/photo-1593111774640-36a14c6e9314?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 left-4 right-4 h-12 bg-white/90 backdrop-blur-md rounded-xl"></div>
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-white rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-3">
              <div className="w-12 h-1 bg-gray-300 mx-auto rounded-full mb-2"></div>
              <div className="w-1/3 h-5 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-100 rounded mt-2"></div>
              <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
            </div>
          </div>
        </ScreenCard>

        {/* Screen 3: My Game */}
        <ScreenCard title="My Game" delay={0.3}>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2">
              <div className="w-1/3 h-6 bg-gray-200 rounded"></div>
              <div className="w-12 h-12 rounded-full border-4 border-primary-green flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-gray-100 rounded-xl"></div>
              <div className="h-16 bg-gray-100 rounded-xl"></div>
              <div className="h-16 bg-gray-100 rounded-xl"></div>
              <div className="h-16 bg-gray-100 rounded-xl"></div>
            </div>
            <div className="w-full h-32 bg-gray-50 rounded-xl mt-2 border border-gray-100 flex items-end p-2 gap-2">
              <div className="w-1/6 h-1/3 bg-primary-green/40 rounded-t-sm"></div>
              <div className="w-1/6 h-1/2 bg-primary-green/60 rounded-t-sm"></div>
              <div className="w-1/6 h-2/3 bg-primary-green/80 rounded-t-sm"></div>
              <div className="w-1/6 h-full bg-primary-green rounded-t-sm"></div>
              <div className="w-1/6 h-1/2 bg-primary-green/60 rounded-t-sm"></div>
              <div className="w-1/6 h-3/4 bg-primary-green/90 rounded-t-sm"></div>
            </div>
          </div>
        </ScreenCard>

        {/* Screen 4: Leaderboard */}
        <ScreenCard title="Leaderboard" delay={0.4}>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-2">
              <div className="w-1/3 h-6 bg-white shadow-sm rounded-md"></div>
              <div className="w-1/3 h-6 bg-transparent"></div>
              <div className="w-1/3 h-6 bg-transparent"></div>
            </div>
            <div className="w-full h-20 bg-primary-green text-white rounded-xl mb-4 relative overflow-hidden flex items-center p-3 gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>
              <div className="flex-1">
                <div className="w-1/2 h-4 bg-white/50 rounded mb-1"></div>
                <div className="w-1/4 h-3 bg-white/30 rounded"></div>
              </div>
              <div className="w-8 h-8 font-bold text-lg">#4</div>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 bg-white border-b border-gray-100 pb-2">
                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                <div className="flex-1 h-3 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        </ScreenCard>

        {/* Screen 5: Rewards & Wallet */}
        <ScreenCard title="Rewards & Wallet" delay={0.5}>
          <div className="p-4 flex flex-col gap-4">
            <div className="w-full h-32 bg-dark-green rounded-2xl relative overflow-hidden flex flex-col justify-center items-center text-white">
              <div className="w-1/3 h-3 bg-white/30 rounded mb-2"></div>
              <div className="w-1/2 h-8 bg-white/90 rounded mb-4"></div>
              <div className="w-24 h-8 bg-accent-gold rounded-full"></div>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mt-2">
              <div className="w-2/3 h-full bg-primary-green"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/4 h-3 bg-gray-200 rounded"></div>
              <div className="w-1/4 h-3 bg-gray-200 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
            </div>
          </div>
        </ScreenCard>

      </div>
    </section>
  );
}

function ScreenCard({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center flex-none snap-center group"
    >
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[250px] shadow-2xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-4">
        <div className="absolute top-0 inset-x-0 h-5 bg-gray-800 rounded-b-2xl w-32 mx-auto z-20"></div>
        <div className="bg-white w-full h-full relative z-10 flex flex-col">
          {children}
        </div>
      </div>
      <h3 className="text-xl font-bold text-warm-white">{title}</h3>
    </motion.div>
  );
}
