'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function FAQ() {
  const faqs = [
    {
      question: "Is this a replacement for our tee-time system?",
      answer: "No. The platform sits quietly on top of your existing infrastructure as a layer for engagement, communication, and commerce."
    },
    {
      question: "Will members resist downloading an app?",
      answer: "We find adoption is exceptionally high when the app serves as their digital membership card and access point for club privileges."
    },
    {
      question: "Can we maintain our historic branding?",
      answer: "Entirely. The platform is white-labeled to match your exact crest, colors, and typographic standards."
    },
    {
      question: "Is the digital wallet mandatory?",
      answer: "No. The wallet is an optional feature for clubs wishing to streamline halfway house and dining room transactions."
    },
    {
      question: "What is the timeline for implementation?",
      answer: "Upon receipt of your brand assets and member registry, our team configures the platform within 48 hours."
    }
  ];

  return (
    <section className="py-32 bg-cream-surface border-t border-border-green/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-sans block mb-6">Inquiries</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-dark-green">
            Commonly Asked Questions
          </h2>
        </div>

        <div className="space-y-2 border-t border-dark-green/20 pt-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="border-b border-dark-green/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className="font-serif text-lg text-dark-green group-hover:text-text-muted transition-colors pr-8">{question}</span>
        <ChevronDown 
          className={`w-4 h-4 text-dark-green shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`pr-12 text-text-muted font-sans text-sm leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </motion.div>
  );
}
