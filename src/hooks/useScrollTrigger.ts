import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollTrigger(
  animationFn: (trigger: ScrollTrigger) => void,
  dependencies: any[] = []
) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      onEnter: () => animationFn(trigger),
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, dependencies);

  return elementRef;
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: (_: number, target: HTMLElement) => {
        return gsap.getProperty(target, 'offsetTop') as number * speed;
      },
      scrollTrigger: {
        trigger: elementRef.current,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return elementRef;
}
