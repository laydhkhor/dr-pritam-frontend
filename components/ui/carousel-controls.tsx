
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  maxIndex: number;
  className?: string;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  currentIndex,
  maxIndex,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <button 
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${
          currentIndex === 0 ? 'border-white/10 text-white/10 cursor-not-allowed' : 'border-emerald-500 text-white hover:bg-emerald-500'
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex space-x-2">
        {[...Array(maxIndex + 1)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'}`}
          ></div>
        ))}
      </div>

      <button 
        onClick={onNext}
        disabled={currentIndex === maxIndex}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${
          currentIndex === maxIndex ? 'border-white/10 text-white/10 cursor-not-allowed' : 'border-emerald-500 text-white hover:bg-emerald-500'
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CarouselControls;
