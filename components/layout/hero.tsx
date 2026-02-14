
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Award, Activity, Users, MapPin } from 'lucide-react';
import Button from '../ui/button';

/**
 * CountUp Component
 * Animates a number from 0 to 'end' once it enters the viewport.
 */
const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const Hero = () => {
  return (
    <>
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-br from-emerald-50 via-white to-sky-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Top-Rated Physician in SF</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-emerald-950">
              Modern Care for <br />
              <span className="text-emerald-600">Your Modern Life</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Dr. Julian Vance combines advanced diagnostic technology with a personalized, holistic approach to cardiology and primary care. Experience healthcare that listens.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                <span>Book Appointment</span>
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Patient Avatar" loading="eager" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-gray-500 font-medium">Trusted by 2,000+ patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }} 
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] bg-emerald-200 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/doctor_vance/800/1000" alt="Dr. Julian Vance" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" loading="eager" />
            </div>
            
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-10 top-1/4 z-20 glass-card p-5 rounded-2xl shadow-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                <Award className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Board Certified</p>
                <p className="text-sm font-bold text-gray-800">Cardiology Specialist</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-10 bottom-1/4 z-20 glass-card p-5 rounded-2xl shadow-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                <Activity className="text-sky-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Experience</p>
                <p className="text-sm font-bold text-gray-800">12+ Years Practice</p>
              </div>
            </motion.div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-sky-400/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Intersection-based CountUp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Total Patients', value: 1500, suffix: '+', icon: <Users /> },
              { label: 'Years Experience', value: 12, suffix: '', icon: <Award /> },
              { label: 'Clinic Locations', value: 2, suffix: '', icon: <MapPin /> },
              { label: 'Satisfied Rate', value: 99, suffix: '%', icon: <Activity /> },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center group hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-emerald-950 mb-2">
                  <CountUp end={stat.value} />{stat.suffix}
                </h3>
                <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
