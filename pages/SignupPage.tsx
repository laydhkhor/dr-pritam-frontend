
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const SignupPage = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-[550px] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="p-10 lg:p-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Healio</h1>
            <p className="text-gray-500 text-sm">Create your medical profile for smarter care.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="First Name" className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" />
              </div>
              <div className="relative">
                <input type="text" placeholder="Last Name" className="w-full bg-gray-50 py-5 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" />
            </div>

            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="password" placeholder="Choose Password" className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" />
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl flex items-start space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                Your data is protected by HIPAA-compliant end-to-end encryption. We never share your medical history with third parties.
              </p>
            </div>

            <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 active:scale-[0.98] group">
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-10 text-sm text-gray-500">
            Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:underline">Sign In Instead</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
