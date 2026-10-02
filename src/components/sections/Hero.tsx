'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // Fade in title
      timeline.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      // Fade in subtitle
      timeline.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        0.2
      );

      // Fade in CTAs
      timeline.from(
        ctasRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        0.4
      );

      // Pulse scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      // Parallax on scroll
      gsap.to(backgroundRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: 'top top',
          end: 'bottom top',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-mummas-off-white"
    >
      {/* Background gradient */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-mummas-secondary/30 via-mummas-off-white to-mummas-off-white"
        style={{ pointerEvents: 'none' }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-mummas-secondary rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-mummas-primary opacity-5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight text-mummas-text"
        >
          Made with a
          <br />
          <span className="text-mummas-primary">Mother's Love</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-mummas-text-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Simple ingredients. Honest nourishment.
          <br />
          One little bite at a time.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="px-8 py-4 bg-mummas-primary text-white font-semibold rounded-lg hover:bg-mummas-primary-light transition-colors duration-300 active:scale-95"
          >
            SHOP MUMMAS BITE
          </Link>
          <Link
            href="#story"
            className="px-8 py-4 border-2 border-mummas-primary text-mummas-primary font-semibold rounded-lg hover:bg-mummas-primary hover:text-white transition-colors duration-300 active:scale-95"
          >
            OUR STORY
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs uppercase tracking-widest text-mummas-text-light">
          Scroll to discover
        </p>
        <svg
          className="w-5 h-5 text-mummas-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
