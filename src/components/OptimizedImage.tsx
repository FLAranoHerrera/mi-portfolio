import React from 'react';
import { useImageLazyLoading } from '@/hooks/useImageLazyLoading';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMWYyOTM3IiByeD0iMTIiLz4KPHN2ZyB4PSIxNzUiIHk9IjExNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgNTAgMjAiIGZpbGw9Im5vbmUiPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI4IiBzdHJva2U9IiM2YjcyODAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4KPC9zdmc+',
  onLoad,
  onError
}) => {
  const { imgRef, isIntersecting, hasLoaded, handleLoad, handleError } = useImageLazyLoading();

  const handleImageLoad = () => {
    handleLoad();
    onLoad?.();
  };

  const handleImageError = () => {
    handleError();
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={isIntersecting ? src : placeholder}
        alt={alt}
        className={`transition-opacity duration-300 ${hasLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
