'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const storyPoints = [
  { step: '01', title: 'A Mother\'s Kitchen', description: 'It started with something simple — experimenting with recipes to make snacks that were both delicious and nutritious.' },
  { step: '02', title: 'Real Ingredients', description: 'No compromises. Just dates, almonds, cashews, and pure intention. Every ingredient chosen with care.' },
  { step: '03', title: 'Countless Experiments', description: 'Perfecting the balance. Making sure every batch tasted exactly how it should — like something made with love.' },
  { step: '04', title: 'The First Bite', description: 'Sharing with family. Seeing their faces when they tasted something genuinely good. That moment changed everything.' },
  { step: '05', title: 'A Brand Begins', description: 'From kitchen experiments to MUMMAS BITE. Building something real, something honest, something worth sharing.' },
];

export function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      // Animate each story point
      const points = pointsRef.current?.querySelectorAll('[data-story-point]');
      if (points) {
        gsap.from(points, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: pointsRef.current,
            start: 'top 60%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
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
            It Started at Home
          </h2>
          <p className="text-base sm:text-lg text-mummas-text-light max-w-2xl mx-auto">
            The real journey of MUMMAS BITE — from a mother's kitchen to your table.
          </p>
        </div>

        {/* Story timeline */}
        <div
          ref={pointsRef}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {storyPoints.map((point, index) => (
            <div
              key={index}
              data-story-point
              className="group relative"
            >
              {/* Card */}
              <div className="bg-mummas-white rounded-lg p-6 sm:p-8 border border-mummas-border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="text-4xl font-serif text-mummas-primary/20 mb-3">
                  {point.step}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-mummas-primary mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-mummas-text-light leading-relaxed flex-grow">
                  {point.description}
                </p>

                {/* Connector line (hidden on last) */}
                {index < storyPoints.length - 1 && (
                  <div className="absolute hidden md:block top-1/2 -right-4 w-8 h-0.5 bg-mummas-primary/20" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 sm:mt-24 text-center">
          <p className="text-lg sm:text-xl font-semibold text-mummas-primary">
            FROM OUR HOME TO YOURS.
          </p>
        </div>
      </div>
    </section>
  );
}
