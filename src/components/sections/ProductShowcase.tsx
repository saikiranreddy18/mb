'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const product = {
  name: 'MUMMAS BITE',
  type: 'Dry Fruit Bar',
  weight: '22 g',
  price: '₹30',
  ingredients: ['Dates', 'Almonds', 'Cashews', 'Walnuts', 'Seeds'],
  claims: ['No Added Sugar', 'No Preservatives', '3.1g Protein'],
};

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const [activeIngredient, setActiveIngredient] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Product entrance
      gsap.from(productRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 bg-mummas-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-mummas-text mb-4">
            The Product
          </h2>
          <p className="text-mummas-text-light">
            A perfect bite of wholesome goodness
          </p>
        </div>

        {/* Product showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product image and ingredients */}
          <div ref={productRef} className="flex flex-col items-center">
            {/* Product wrapper visual */}
            <div className="relative w-64 h-80 mb-8">
              {/* Wrapper */}
              <div className="absolute inset-0 bg-gradient-to-br from-mummas-secondary to-mummas-earth/10 rounded-2xl shadow-2xl flex items-center justify-center border border-mummas-border">
                {/* Product bar */}
                <div className="w-20 h-40 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg shadow-lg transform -rotate-6" />
              </div>
            </div>

            {/* Ingredients circle */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-sm">
              {product.ingredients.map((ingredient) => (
                <button
                  key={ingredient}
                  onClick={() =>
                    setActiveIngredient(
                      activeIngredient === ingredient ? null : ingredient
                    )
                  }
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeIngredient === ingredient
                      ? 'bg-mummas-primary text-white'
                      : 'bg-mummas-secondary text-mummas-primary hover:bg-mummas-primary hover:text-white'
                  }`}
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>

          {/* Product information */}
          <div>
            {/* Product name */}
            <h3 className="font-serif text-3xl sm:text-4xl text-mummas-text mb-2">
              {product.name}
            </h3>
            <p className="text-lg text-mummas-text-light mb-6">
              {product.type}
            </p>

            {/* Price and weight */}
            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-mummas-border">
              <span className="text-4xl font-semibold text-mummas-primary">
                {product.price}
              </span>
              <span className="text-mummas-text-light">
                {product.weight} per bar
              </span>
            </div>

            {/* Claims */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-mummas-text-light mb-4">
                What's inside
              </p>
              <div className="flex flex-wrap gap-3">
                {product.claims.map((claim) => (
                  <div
                    key={claim}
                    className="px-4 py-2 bg-mummas-primary/10 border border-mummas-primary/30 rounded-full text-sm font-semibold text-mummas-primary"
                  >
                    ✓ {claim}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-mummas-primary text-white font-semibold rounded-lg hover:bg-mummas-primary-light transition-colors duration-300 active:scale-95"
            >
              ADD TO CART
            </Link>

            {/* Additional info */}
            <div className="mt-8 text-sm text-mummas-text-light space-y-2">
              <p>🌱 100% Natural Ingredients</p>
              <p>📦 Eco-friendly Packaging</p>
              <p>✨ Made with Love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
