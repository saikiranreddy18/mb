'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: '01', title: 'SELECT', description: 'Choosing the finest ingredients with care and precision.' },
  { number: '02', title: 'PREPARE', description: 'Washing, sorting, and preparing each ingredient.' },
  { number: '03', title: 'MIX', description: 'Blending with the perfect balance of flavor and nutrition.' },
  { number: '04', title: 'PRESS', description: 'Hand-pressed into bars with careful attention to quality.' },
  { number: '05', title: 'CUT', description: 'Cutting into perfect portions with precision.' },
  { number: '06', title: 'PACK', description: 'Wrapping with love, ready for your first bite.' },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      const stepElements = stepsRef.current?.querySelectorAll('[data-step]');
      if (stepElements) {
        gsap.from(stepElements, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 60%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 bg-mummas-off-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24">
          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-mummas-text mb-4"
          >
            How We Make It
          </h2>
          <p className="text-base sm:text-lg text-mummas-text-light">
            Each step taken with care and attention
          </p>
        </div>

        {/* Process steps */}
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step
              className="group relative"
            >
              {/* Step card */}
              <div className="bg-mummas-white rounded-lg p-8 border border-mummas-border hover:shadow-lg hover:border-mummas-primary transition-all duration-300 h-full flex flex-col">
                {/* Step number with background */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-mummas-primary/10 flex items-center justify-center group-hover:bg-mummas-primary/20 transition-colors">
                    <span className="text-2xl font-serif font-semibold text-mummas-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-mummas-text mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-mummas-text-light text-sm leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Icon placeholder */}
                <div className="mt-6 text-4xl">
                  {index === 0 && '✋'}
                  {index === 1 && '🔄'}
                  {index === 2 && '🥣'}
                  {index === 3 && '👐'}
                  {index === 4 && '✂️'}
                  {index === 5 && '📦'}
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-mummas-primary/20" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16 sm:mt-24">
          <p className="text-lg text-mummas-text-light max-w-2xl mx-auto">
            No shortcuts. No compromises. Just the care and attention that goes into every single MUMMAS BITE.
          </p>
        </div>
      </div>
    </section>
  );
}
