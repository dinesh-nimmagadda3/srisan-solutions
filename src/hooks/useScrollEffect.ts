import { useState, useEffect } from 'react';
import { getScrollPosition } from '@/utils/scrollTo';

export const useScrollEffect = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getScrollPosition();
      setIsScrolled(scrollY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};
