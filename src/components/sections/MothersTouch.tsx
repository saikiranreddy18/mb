'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function MothersTouch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
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
      className="py-20 sm:py-32 bg-mummas-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mummas-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mummas-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-mummas-text mb-6"
          >
            Some things are made with ingredients.
            <br />
            <span className="text-mummas-primary">
              Some are made with love.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div>
            <p className="text-lg text-mummas-text-light mb-6 leading-relaxed">
              The recipe isn't just about what goes inside the bar. It's about
              why we make it. Every single bite is infused with care, intention,
              and the warmth of someone who wants you to feel nourished.
            </p>
            <p className="text-lg text-mummas-text-light mb-6 leading-relaxed">
              That's what a mother does. She thinks about what's best for you.
              She doesn't cut corners. She doesn't use shortcuts. She knows
              that love is the most important ingredient.
            </p>
            <p className="text-lg text-mummas-text-light mb-6 leading-relaxed">
              That's why MUMMAS BITE exists. To remind you that nutrition
              doesn't have to be complicated. It just has to be honest.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-mummas-primary pl-6 mt-8">
              <blockquote className="text-xl font-serif text-mummas-primary italic">
                "The love of a mother, packed into every bite."
              </blockquote>
            </div>
          </div>

          {/* Visual - Character placeholder */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Character silhouette placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-mummas-primary to-mummas-earth rounded-full flex items-center justify-center text-8xl opacity-20">
                👩‍👧
              </div>

              {/* Decorative circle */}
              <div className="absolute inset-4 border-2 border-mummas-primary/30 rounded-full" />
              <div className="absolute inset-8 border-2 border-mummas-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
