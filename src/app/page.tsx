'use client';

import { Hero } from '@/components/sections/Hero';
import { BrandStory } from '@/components/sections/BrandStory';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { IngredientExplorer } from '@/components/sections/IngredientExplorer';
import { MothersTouch } from '@/components/sections/MothersTouch';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline';
import { CustomerStories } from '@/components/sections/CustomerStories';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <IngredientExplorer />
      <MothersTouch />
      <ProcessTimeline />
      <JourneyTimeline />
      <CustomerStories />
      <CTA />
    </>
  );
}
