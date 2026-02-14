
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'glass' | 'emerald' | 'gray';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  overflowHidden?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'white',
  padding = 'md',
  overflowHidden = true
}) => {
  const variants = {
    white: "bg-white border border-gray-100 shadow-sm",
    glass: "glass-card shadow-xl",
    emerald: "bg-emerald-600 text-white shadow-2xl shadow-emerald-200",
    gray: "bg-gray-50 border border-gray-100"
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10 lg:p-12"
  };

  return (
    <div className={`rounded-[2.5rem] transition-all duration-300 ${overflowHidden ? 'overflow-hidden' : ''} ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
