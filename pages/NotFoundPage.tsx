
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-12"
      >
        <span className="text-[12rem] font-black text-gray-100 leading-none">404</span>
        <h1 className="text-4xl font-bold text-emerald-950 -mt-10">Oops! Page Lost in Transit</h1>
      </motion.div>
      <p className="text-gray-500 mb-12 max-w-md">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link 
          to="/" 
          className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
