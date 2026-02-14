
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, Github, Chrome } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-[500px] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="p-10 lg:p-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Access your patient dashboard & medical history.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" 
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-gray-500 group-hover:text-emerald-600 transition-colors">Remember Me</span>
              </label>
              <Link to="/forgot-password" size="small" className="text-emerald-600 font-bold hover:underline">Forgot Password?</Link>
            </div>

            <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 active:scale-[0.98]">
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <div className="relative flex justify-center"><span className="bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or Continue With</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 py-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                <Chrome className="w-5 h-5" />
                <span className="text-sm font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                <Github className="w-5 h-5" />
                <span className="text-sm font-bold">Apple</span>
              </button>
            </div>
          </form>

          <p className="text-center mt-10 text-sm text-gray-500">
            Don't have an account? <Link to="/signup" className="text-emerald-600 font-bold hover:underline">Create Patient Account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
