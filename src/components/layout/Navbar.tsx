'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/store/cart';
import clsx from 'clsx';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const itemCount = useCart((state) => state.getItemCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-mummas-off-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-mummas-primary flex items-center justify-center">
              <span className="text-white font-semibold text-sm">MB</span>
            </div>
            <span className="font-serif text-lg sm:text-xl font-medium hidden sm:inline">
              MUMMAS BITE
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#story"
              className="text-mummas-text hover:text-mummas-primary transition-colors text-sm"
            >
              OUR STORY
            </Link>
            <Link
              href="#ingredients"
              className="text-mummas-text hover:text-mummas-primary transition-colors text-sm"
            >
              INGREDIENTS
            </Link>
            <Link
              href="#journey"
              className="text-mummas-text hover:text-mummas-primary transition-colors text-sm"
            >
              OUR JOURNEY
            </Link>
            <Link
              href="#contact"
              className="text-mummas-text hover:text-mummas-primary transition-colors text-sm"
            >
              CONTACT
            </Link>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:text-mummas-primary transition-colors">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-mummas-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
