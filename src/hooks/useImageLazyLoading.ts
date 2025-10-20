import { useState, useEffect, useRef } from 'react';

interface UseImageLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useImageLazyLoading = (options: UseImageLazyLoadingOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setHasLoaded(true);
  };

  const handleError = () => {
    console.warn('Error loading image:', imgRef.current?.src);
  };

  return {
    imgRef,
    isIntersecting,
    hasLoaded,
    handleLoad,
    handleError,
  };
};
