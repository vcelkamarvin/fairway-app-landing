import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0A1610] text-warm-white py-16 border-t border-border-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-serif font-bold text-2xl tracking-tight text-warm-white flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-warm-white text-dark-green rounded flex items-center justify-center font-sans font-bold">F</div>
              FAIRWAY APP
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              The 24/7 Member Retention Engine for Golf Clubs. Sell more rounds, lessons & memberships.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent-gold">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Case Studies'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-muted hover:text-warm-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-gold">Company</h4>
            <ul className="space-y-3">
              {['About', 'Contact', 'For Clubs'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-muted hover:text-warm-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-gold">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-muted hover:text-warm-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Fairway App. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social placeholders */}
            <div className="w-5 h-5 bg-text-muted rounded-full opacity-50 hover:opacity-100 transition-opacity"></div>
            <div className="w-5 h-5 bg-text-muted rounded-full opacity-50 hover:opacity-100 transition-opacity"></div>
            <div className="w-5 h-5 bg-text-muted rounded-full opacity-50 hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
