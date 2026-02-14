
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-[500px] rounded-[3rem] shadow-2xl overflow-hidden"
      >
        <div className="p-10 lg:p-14">
          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                <p className="text-gray-500 text-sm">Enter your email and we'll send instructions.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-gray-50 py-5 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" />
                </div>

                <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all active:scale-[0.98]">
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Your Inbox</h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                If an account exists for that email, you will receive password reset instructions shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-emerald-600 font-bold hover:underline"
              >
                Try a different email
              </button>
            </div>
          )}

          <div className="mt-10 pt-10 border-t border-gray-100">
            <Link to="/login" className="flex items-center justify-center space-x-2 text-gray-500 hover:text-emerald-600 font-bold transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
