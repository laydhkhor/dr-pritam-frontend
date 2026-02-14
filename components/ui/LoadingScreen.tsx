
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="relative"
      >
        <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200">
          <Activity className="text-white w-10 h-10" />
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -bottom-10 left-0 h-1 bg-emerald-100 rounded-full overflow-hidden"
        >
          <div className="h-full bg-emerald-600 w-full" />
        </motion.div>
      </motion.div>
      <p className="mt-16 text-emerald-900 font-semibold tracking-widest uppercase text-xs animate-pulse">
        Healio Premium Healthcare
      </p>
    </div>
  );
};

export default LoadingScreen;
