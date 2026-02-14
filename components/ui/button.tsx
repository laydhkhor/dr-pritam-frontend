
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  to?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  to, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none group";
  
  const variants = {
    primary: "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
    outline: "bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white",
    ghost: "bg-transparent text-gray-500 hover:text-emerald-600",
    dark: "bg-gray-900 text-white hover:bg-black"
  };

  const sizes = {
    sm: "px-4 py-2 rounded-lg text-xs",
    md: "px-6 py-2.5 rounded-full text-sm",
    lg: "px-8 py-4 rounded-2xl text-base",
    xl: "px-10 py-5 rounded-2xl text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
