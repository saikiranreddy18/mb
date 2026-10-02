'use client';

import Link from 'next/link';
import { Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mummas-primary text-mummas-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-mummas-secondary flex items-center justify-center">
                <span className="text-mummas-primary font-semibold text-sm">MB</span>
              </div>
              <span className="font-serif text-lg font-medium">MUMMAS BITE</span>
            </div>
            <p className="text-mummas-secondary text-sm">
              Made with a mother's love.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:text-mummas-accent transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?type=bars" className="hover:text-mummas-accent transition-colors text-sm">
                  Dry Fruit Bars
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#story" className="hover:text-mummas-accent transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mummas-accent transition-colors text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mummas-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mummas-accent transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mummas-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mummas-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:hello@mummasbite.com"
                className="hover:text-mummas-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-mummas-primary-light pt-8">
          <p className="text-center text-mummas-secondary text-xs sm:text-sm">
            © {currentYear} MUMMAS BITE. All rights reserved. | Made with ❤️ from home.
          </p>
        </div>
      </div>
    </footer>
  );
}
