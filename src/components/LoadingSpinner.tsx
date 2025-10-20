import React from 'react';

interface LoadingSpinnerProps {
  color?: 'neon-cyan' | 'neon-purple' | 'neon-pink' | 'neon-blue';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = React.memo(({ 
  color = 'neon-cyan', 
  size = 'md',
  text 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const colorClasses = {
    'neon-cyan': 'border-neon-cyan',
    'neon-purple': 'border-neon-purple',
    'neon-pink': 'border-neon-pink',
    'neon-blue': 'border-neon-blue'
  };

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div 
        className={`animate-spin rounded-full border-b-2 ${colorClasses[color]} ${sizeClasses[size]}`}
        role="status"
        aria-label="Cargando contenido"
      />
      {text && (
        <p className="mt-4 text-gray-400 text-sm animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
