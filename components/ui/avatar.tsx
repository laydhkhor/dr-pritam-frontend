
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ringColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '',
  ringColor = 'ring-emerald-500/20'
}) => {
  const sizes = {
    sm: "w-10 h-10 rounded-full",
    md: "w-12 h-12 rounded-full",
    lg: "w-20 h-20 rounded-2xl",
    xl: "w-32 h-32 rounded-3xl"
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover border-2 border-white ring-4 ${ringColor} ${sizes[size]} ${className}`} 
      loading="lazy"
    />
  );
};

export default Avatar;
