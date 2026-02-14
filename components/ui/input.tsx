
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  icon?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  icon, 
  multiline = false, 
  rows = 4, 
  className = '', 
  ...props 
}) => {
  // Added 'border border-gray-200' and removed 'border-none' to improve inactive state visibility
  const inputStyles = "w-full bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium py-4 px-6";
  const iconPadding = icon ? "pl-14" : "";

  return (
    <div className="space-y-2 w-full">
      {label && <label className="block text-sm font-bold text-gray-700 px-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        {multiline ? (
          <textarea 
            rows={rows} 
            className={`${inputStyles} resize-none ${className}`} 
            {...(props as any)}
          />
        ) : (
          <input 
            className={`${inputStyles} ${iconPadding} ${className}`} 
            {...(props as any)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
