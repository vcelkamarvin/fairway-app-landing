import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-warm-white border-t border-border-green py-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif font-bold text-3xl tracking-wide text-dark-green uppercase block mb-6">
              FAIRWAY
            </Link>
            <p className="text-sm font-sans text-text-muted max-w-sm">
              The purpose here is continuity. Software for the world's finest private member clubs.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-sans tracking-widest uppercase text-dark-green mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Tournaments</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Lessons</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Wallet</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans tracking-widest uppercase text-dark-green mb-6">Society</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Journal</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm font-sans text-text-muted hover:text-dark-green transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-dark-green/10 pt-8">
          <p className="text-xs font-sans text-text-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fairway Technology. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs font-sans text-text-muted hover:text-dark-green transition-colors">Terms</Link>
            <Link href="#" className="text-xs font-sans text-text-muted hover:text-dark-green transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
