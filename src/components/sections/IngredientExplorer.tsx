'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  {
    id: 'dates',
    name: 'Dates',
    image: '📅',
    description: 'Nature\'s candy. Sweet, nutritious, and packed with natural energy.',
    reason: 'Provides natural sweetness without added sugar. Rich in fiber and essential minerals.',
    color: 'from-amber-600 to-amber-800',
  },
  {
    id: 'almonds',
    name: 'Almonds',
    image: '🌰',
    description: 'The powerhouse. Crunchy, protein-rich, and full of healthy fats.',
    reason: 'Excellent source of protein and vitamin E. Supports heart health.',
    color: 'from-amber-700 to-yellow-800',
  },
  {
    id: 'cashews',
    name: 'Cashews',
    image: '🥜',
    description: 'Creamy and smooth. The perfect complement to every bite.',
    reason: 'Rich in minerals like magnesium and copper. Adds creamy texture.',
    color: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    image: '🌰',
    description: 'Brain food. Ancient, nutrient-dense, and full of omega-3s.',
    reason: 'High in omega-3 fatty acids. Supports cognitive function.',
    color: 'from-amber-800 to-amber-900',
  },
  {
    id: 'seeds',
    name: 'Seeds',
    image: '🌱',
    description: 'Tiny powerhouses. Seeds that pack maximum nutrition.',
    reason: 'Add nutritional variety. Rich in antioxidants and fiber.',
    color: 'from-green-600 to-amber-600',
  },
];

export function IngredientExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIngredient, setActiveIngredient] = useState<string>('dates');

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

      // Animate cards
      const cards = cardsRef.current?.querySelectorAll('[data-ingredient]');
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 60%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const selectedIngredient = ingredients.find(
    (ing) => ing.id === activeIngredient
  );

  return (
    <section
      id="ingredients"
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
            What's Inside
          </h2>
          <p className="text-base sm:text-lg text-mummas-text-light">
            Every ingredient chosen with intention and care
          </p>
        </div>

        {/* Ingredient cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              data-ingredient={ingredient.id}
              onClick={() => setActiveIngredient(ingredient.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 text-left group ${
                activeIngredient === ingredient.id
                  ? `bg-mummas-primary text-white border-mummas-primary`
                  : `bg-white border-mummas-border hover:border-mummas-primary`
              }`}
            >
              <div className="text-4xl mb-3">{ingredient.image}</div>
              <h3 className="font-semibold text-lg">{ingredient.name}</h3>
              <p className={`text-sm mt-2 ${activeIngredient === ingredient.id ? 'text-mummas-secondary' : 'text-mummas-text-light'}`}>
                {ingredient.description.split('.')[0]}.
              </p>
            </button>
          ))}
        </div>

        {/* Detailed view */}
        {selectedIngredient && (
          <div className="bg-mummas-white rounded-xl p-8 sm:p-12 border border-mummas-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Image placeholder */}
              <div className={`h-48 rounded-lg bg-gradient-to-br ${selectedIngredient.color} flex items-center justify-center text-6xl`}>
                {selectedIngredient.image}
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="font-serif text-3xl sm:text-4xl text-mummas-primary mb-4">
                  {selectedIngredient.name}
                </h3>
                <p className="text-lg text-mummas-text mb-6">
                  {selectedIngredient.description}
                </p>
                <div className="bg-mummas-primary/10 border-l-4 border-mummas-primary p-6 rounded">
                  <p className="text-sm uppercase tracking-widest text-mummas-primary font-semibold mb-2">
                    Why we chose it
                  </p>
                  <p className="text-mummas-text">{selectedIngredient.reason}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
