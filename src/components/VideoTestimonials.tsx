import React from 'react';
import { Play } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function VideoTestimonials() {
  const testimonials = [
    {
      quote: "We filled our quiet Friday tee times with one push.",
      name: "David H.",
      role: "Head Pro",
      bgImage: "https://images.unsplash.com/photo-1593111774240-d529f12cb416?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "Members started using points after the first week.",
      name: "Sarah M.",
      role: "Club Manager",
      bgImage: "https://images.unsplash.com/photo-1535136018317-062e24eb5df1?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "The birthday offers feel personal, not spammy.",
      name: "Michael T.",
      role: "Operations Dir.",
      bgImage: "https://images.unsplash.com/photo-1595804670233-018241b712fb?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "It made our club look modern without changing our systems.",
      name: "Elena R.",
      role: "Membership Coord.",
      bgImage: "https://images.unsplash.com/photo-1600171092873-10eb06b744a5?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((t, i) => (
            <VideoCard key={i} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ quote, name, role, bgImage, delay }: { quote: string, name: string, role: string, bgImage: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex-none w-64 h-[400px] rounded-2xl overflow-hidden snap-center group cursor-pointer shadow-lg border border-border-green/20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
      
      {/* Play Icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
        <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end h-full">
        <p className="text-white font-serif font-medium text-lg leading-snug mb-4">
          &quot;{quote}&quot;
        </p>
        <div className="flex items-center gap-3 border-t border-white/20 pt-3">
          <div className="w-8 h-8 rounded-full bg-primary-green flex items-center justify-center border border-white/30">
            <span className="text-xs font-bold text-white">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none mb-1">{name}</p>
            <p className="text-[10px] text-white/70 uppercase tracking-wider">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
