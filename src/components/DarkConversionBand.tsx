import React from 'react';
import * as motion from 'framer-motion/client';

export function DarkConversionBand() {
  return (
    <section className="py-24 bg-dark-green text-warm-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif italic text-3xl md:text-5xl leading-tight opacity-90"
        >
          "The true luxury of a private club lies in its frictionlessness. Our software ensures the mechanics of membership disappear entirely."
        </motion.p>
      </div>
    </section>
  );
}
