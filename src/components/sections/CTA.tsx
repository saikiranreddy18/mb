'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 bg-mummas-primary text-mummas-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mummas-primary-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mummas-white/5 rounded-full blur-3xl -z-10" />

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main message */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
          Ready to Taste the Difference?
        </h2>

        <p className="text-lg sm:text-xl text-mummas-secondary mb-8 max-w-2xl mx-auto">
          Experience the warmth of home in every bite. Order MUMMAS BITE today.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="px-8 py-4 bg-mummas-white text-mummas-primary font-semibold rounded-lg hover:bg-mummas-secondary transition-colors duration-300 active:scale-95"
          >
            SHOP NOW
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border-2 border-mummas-white text-mummas-white font-semibold rounded-lg hover:bg-mummas-white hover:text-mummas-primary transition-colors duration-300 active:scale-95"
          >
            LEARN MORE
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-mummas-primary-light">
          <div>
            <p className="text-3xl mb-2">🚚</p>
            <p className="font-semibold">Free Shipping</p>
            <p className="text-sm text-mummas-secondary">On orders above ₹500</p>
          </div>
          <div>
            <p className="text-3xl mb-2">✓</p>
            <p className="font-semibold">100% Natural</p>
            <p className="text-sm text-mummas-secondary">No artificial ingredients</p>
          </div>
          <div>
            <p className="text-3xl mb-2">❤️</p>
            <p className="font-semibold">Made with Love</p>
            <p className="text-sm text-mummas-secondary">Every batch crafted with care</p>
          </div>
        </div>
      </div>
    </section>
  );
}
