import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xl',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold 
                  bg-gradient-to-br from-primary to-secondary text-primary-foreground 
                  shadow-elegant hover:shadow-hover transition-all duration-300 
                  hover:scale-105 ${className}`}
      aria-label="Ayobami Edun Logo"
    >
      A
    </div>
  );
};

export default Logo;
