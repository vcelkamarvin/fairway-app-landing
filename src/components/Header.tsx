import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-24">
          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-10 w-1/3">
            {['Product', 'Features', 'Pricing'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text-primary hover:text-text-muted font-sans text-xs tracking-widest uppercase transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-1/3">
            <Link href="/" className="font-serif font-bold text-3xl tracking-wide text-dark-green uppercase">
              FAIRWAY
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center justify-end space-x-8 w-1/3">
            <Link href="/login" className="text-text-primary hover:text-text-muted font-sans text-xs tracking-widest uppercase transition-colors">
              Log in
            </Link>
            <Link 
              href="#demo"
              className="text-text-primary border border-border-green px-6 py-2 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-dark-green hover:text-warm-white transition-all duration-300"
            >
              Book demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button className="text-dark-green">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
