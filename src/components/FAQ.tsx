'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as motion from 'framer-motion/client';

export function FAQ() {
  const faqs = [
    {
      question: "Does Fairway App replace our tee-time system?",
      answer: "No. It works as a member engagement and revenue layer on top of your existing tee-time system. Integrations can be added later."
    },
    {
      question: "Do members need to download a new app?",
      answer: "Yes, but the app is branded for the club, so it feels like the club's own mobile experience."
    },
    {
      question: "Can we use our own logo and colors?",
      answer: "Yes. Every club gets a white-label branded app experience."
    },
    {
      question: "Can we send segmented offers?",
      answer: "Yes. Clubs can target groups by tier, activity, handicap category, spend level, or membership type."
    },
    {
      question: "Is wallet functionality required?",
      answer: "No. Wallet is optional and available in Pro and Club Elite plans."
    },
    {
      question: "How long does setup take?",
      answer: "The target setup time is under 48 hours after receiving club branding, member structure, and campaign preferences."
    }
  ];

  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-green mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
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
      transition={{ duration: 0.4, delay }}
      className="border border-border-green rounded-xl bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-dark-green pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-primary-green shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`px-6 text-text-muted leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </motion.div>
  );
}
