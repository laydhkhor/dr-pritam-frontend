
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Bell, Mail, LogIn, Activity, ChevronRight, User } from 'lucide-react';
import Button from '../ui/button';
import { theme } from '../theme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Clinics', path: '/clinics' },
    { name: 'Health Tips', path: '/tips' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto px-[15px] flex items-center justify-between z-50">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-emerald-900">Dr. Pritam</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-all relative py-2 link-underline ${
                isActive(link.path) ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-500'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-5">
          <button className="text-gray-500 hover:text-emerald-600 transition-colors p-2">
            <Mail className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-emerald-600 transition-colors relative p-2">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <Link to="/login" className="flex items-center space-x-2 text-sm font-bold text-gray-700 hover:text-emerald-600 transition-colors">
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </Link>
          <Button to="/contact" variant="primary" size="md">
            Book Now
          </Button>
        </div>

        <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
    </motion.header>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden overflow-y-auto"
        >
          <div className="p-6 h-full space-y-8">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-lg font-bold border-b border-gray-50 pb-4 ${
                    isActive(link.path) ? 'text-emerald-600' : 'text-gray-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>
            <div className="pt-4 space-y-4">
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 text-lg font-bold text-gray-600">
                <User className="w-6 h-6" />
                <span>My Profile</span>
              </Link>
              <Button to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 rounded-2xl flex items-center justify-center font-bold text-lg">
                Get Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Header;
