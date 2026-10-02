'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Health Enthusiast',
    content: '"Finally, a snack that tastes good AND is actually good for you. No guilt, just genuine nutrition."',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Working Mom',
    content: '"I love knowing exactly what\'s in my child\'s snack. MUMMAS BITE feels like home in every bite."',
    rating: 5,
  },
  {
    name: 'Rahul D.',
    role: 'Fitness Coach',
    content: '"Recommend this to all my clients. The ingredient quality is unmatched."',
    rating: 5,
  },
];

export function CustomerStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

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

      const testimonials = testimonialRef.current?.querySelectorAll('[data-testimonial]');
      if (testimonials) {
        gsap.from(testimonials, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: testimonialRef.current,
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
            Real People. Real Bites.
          </h2>
          <p className="text-base sm:text-lg text-mummas-text-light">
            What our customers are saying
          </p>
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className="bg-mummas-white rounded-lg p-8 border border-mummas-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-mummas-text italic mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-mummas-border">
                <div className="w-10 h-10 rounded-full bg-mummas-primary/20 flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <p className="font-semibold text-mummas-text">{testimonial.name}</p>
                  <p className="text-xs text-mummas-text-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for reviews */}
        <div className="text-center mt-16">
          <p className="text-mummas-text-light mb-4">
            Share your MUMMAS BITE story
          </p>
          <button className="inline-block px-6 py-3 border-2 border-mummas-primary text-mummas-primary font-semibold rounded-lg hover:bg-mummas-primary hover:text-white transition-colors duration-300">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
}
