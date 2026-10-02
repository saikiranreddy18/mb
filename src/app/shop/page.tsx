'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useCart } from '@/store/cart';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: '1',
    title: 'MUMMAS BITE - Dry Fruit Bar',
    description: 'Our signature bar packed with dates, almonds, cashews, walnuts and seeds.',
    price: 30,
    weight: '22g',
    image: '📦',
    ingredients: ['Dates', 'Almonds', 'Cashews', 'Walnuts', 'Seeds'],
    claims: ['No Added Sugar', 'No Preservatives', '3.1g Protein'],
  },
];

export default function ShopPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addItem } = useCart();

  useEffect(() => {
    const initial: Record<string, number> = {};
    products.forEach((product) => {
      initial[product.id] = 1;
    });
    setQuantities(initial);
  }, []);

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

      const productCards = productsRef.current?.querySelectorAll('[data-product]');
      if (productCards) {
        gsap.from(productCards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 60%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleAddToCart = (product: any) => {
    addItem(product, quantities[product.id] || 1);
  };

  return (
    <div ref={containerRef} className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-mummas-off-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <Link href="/" className="text-mummas-primary text-sm font-semibold mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-mummas-text mb-4"
          >
            Shop MUMMAS BITE
          </h1>
          <p className="text-base sm:text-lg text-mummas-text-light">
            Choose your favorite snack. All made with love.
          </p>
        </div>

        {/* Products grid */}
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              data-product
              className="bg-mummas-white rounded-lg border border-mummas-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12">
                {/* Product image */}
                <div className="flex items-center justify-center bg-gradient-to-br from-mummas-secondary to-mummas-earth/10 rounded-lg min-h-80">
                  <div className="text-9xl">{product.image}</div>
                </div>

                {/* Product details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-mummas-primary mb-2">
                      {product.title}
                    </h2>
                    <p className="text-mummas-text-light mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="mb-8 pb-8 border-b border-mummas-border">
                      <div className="flex gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-mummas-text-light mb-1">
                            Price
                          </p>
                          <p className="text-3xl font-semibold text-mummas-primary">
                            ₹{product.price}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-mummas-text-light mb-1">
                            Weight
                          </p>
                          <p className="text-lg text-mummas-text">{product.weight}</p>
                        </div>
                      </div>
                    </div>

                    {/* Claims */}
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-widest text-mummas-text-light mb-3">
                        Verified claims
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.claims.map((claim) => (
                          <span
                            key={claim}
                            className="px-3 py-1.5 bg-mummas-primary/10 text-mummas-primary text-xs font-semibold rounded-full"
                          >
                            ✓ {claim}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-mummas-text-light mb-3">
                        Ingredients
                      </p>
                      <p className="text-mummas-text text-sm">
                        {product.ingredients.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Add to cart */}
                  <div className="mt-8 pt-8 border-t border-mummas-border">
                    <div className="flex gap-4 items-center mb-4">
                      <label className="text-sm font-semibold text-mummas-text">
                        Quantity:
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setQuantities({
                              ...quantities,
                              [product.id]: Math.max(1, (quantities[product.id] || 1) - 1),
                            })
                          }
                          className="w-8 h-8 border border-mummas-border rounded hover:bg-mummas-secondary transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() =>
                            setQuantities({
                              ...quantities,
                              [product.id]: (quantities[product.id] || 1) + 1,
                            })
                          }
                          className="w-8 h-8 border border-mummas-border rounded hover:bg-mummas-secondary transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full px-6 py-4 bg-mummas-primary text-white font-semibold rounded-lg hover:bg-mummas-primary-light transition-colors duration-300 active:scale-95"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-16 sm:mt-24 pt-16 border-t border-mummas-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl mb-3">🚚</p>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-mummas-text-light">On orders above ₹500</p>
            </div>
            <div>
              <p className="text-3xl mb-3">✓</p>
              <h3 className="font-semibold mb-2">Money Back Guarantee</h3>
              <p className="text-sm text-mummas-text-light">Not satisfied? Full refund.</p>
            </div>
            <div>
              <p className="text-3xl mb-3">📞</p>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-sm text-mummas-text-light">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
