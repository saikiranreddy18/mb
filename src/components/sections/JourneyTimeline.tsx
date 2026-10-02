'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { label: 'DAY 01', title: 'We Started', description: 'First batch in a home kitchen.' },
  { label: 'FIRST TEST', title: 'We Tested', description: 'Making sure every bite was perfect.' },
  { label: 'FIRST CUSTOMER', title: 'Someone Believed', description: 'Our first customer said yes.' },
  { label: 'V2.0', title: 'We Listened', description: 'Taking feedback and improving.' },
  { label: 'FSSAI', title: 'We Certified', description: 'Meeting all food safety standards.' },
  { label: 'TODAY', title: 'We Continue', description: 'Growing while staying true to our values.' },
];

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      const milestoneElements = timelineRef.current?.querySelectorAll('[data-milestone]');
      if (milestoneElements) {
        gsap.from(milestoneElements, {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -30 : 30),
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
          },
        });
      }

      // Animate center line
      const line = timelineRef.current?.querySelector('[data-timeline-line]');
      if (line) {
        gsap.from(line, {
          height: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-20 sm:py-32 bg-mummas-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24">
          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-mummas-text mb-4"
          >
            Building MUMMAS BITE
          </h2>
          <p className="text-base sm:text-lg text-mummas-text-light">
            From home kitchen to your table — our real journey
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line */}
          <div
            data-timeline-line
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mummas-primary via-mummas-primary to-transparent transform -translate-x-1/2"
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-milestone
                className={`flex gap-8 items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div className={`bg-mummas-off-white p-6 rounded-lg border border-mummas-border hover:shadow-md transition-shadow ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <p className="text-sm uppercase tracking-widest text-mummas-primary font-semibold mb-2">
                      {milestone.label}
                    </p>
                    <h3 className="text-xl font-semibold text-mummas-text mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-mummas-text-light text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-mummas-primary rounded-full ring-4 ring-mummas-off-white" />
                </div>

                {/* Empty space */}
                <div className="hidden sm:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="text-center mt-16 sm:mt-24 pt-12 border-t border-mummas-border">
          <p className="text-lg sm:text-xl text-mummas-primary font-semibold">
            This is just the beginning.
          </p>
          <p className="text-mummas-text-light mt-3">
            We're committed to growing while staying true to what makes MUMMAS BITE special.
          </p>
        </div>
      </div>
    </section>
  );
}
