import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-warm-white/90 backdrop-blur-md border-b border-border-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif font-bold text-2xl tracking-tight text-primary-green flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-green text-warm-white rounded flex items-center justify-center font-sans font-bold">F</div>
              FAIRWAY APP
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Product', 'Features', 'Pricing', 'Case Studies', 'For Clubs'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text-primary hover:text-primary-green font-medium transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-text-primary hover:text-primary-green font-medium transition-colors text-sm">
              Log in
            </Link>
            <Link 
              href="#demo"
              className="bg-primary-green text-warm-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-dark-green transition-colors"
            >
              Book demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-text-primary hover:text-primary-green">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
