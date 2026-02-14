
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, UserCheck, ShieldCheck, Microscope } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pb-24">
      {/* Intro Header */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-emerald-950 mb-6"
          >
            Meet Dr. Julian Vance
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A pioneer in integrative cardiology with over a decade of experience in providing world-class patient care.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about_doc/1000/1200" 
              className="w-full rounded-[3rem] shadow-2xl object-cover aspect-[4/5]"
              loading="lazy"
              alt="Dr. Julian Vance Biography"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900">Patient First Care</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Dedicated to the prevention and treatment <br /> of cardiovascular diseases since 2011.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Driven by Science, Focused on Humanity</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Dr. Julian Vance earned his Medical Degree from Stanford University School of Medicine, followed by a prestigious residency at the Mayo Clinic. He is board-certified in Internal Medicine and Cardiovascular Disease.
              </p>
              <p>
                Throughout his career, Dr. Vance has focused on "preventative cardiology"—helping patients mitigate risk factors before they become life-altering events. He believes that every patient is unique, and healthcare should reflect that individuality.
              </p>
              <p>
                When he's not in the clinic, Julian is an active researcher in digital health technologies and serves as a clinical advisor for several health-tech startups in Silicon Valley.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Board Certified</h4>
                  <p className="text-xs text-gray-500 mt-1">ABIM Cardiology</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Award Winning</h4>
                  <p className="text-xs text-gray-500 mt-1">Patient Choice '22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, title: 'Cardiology', desc: 'Specializing in heart failure management, arrhythmia, and hypertension.' },
              { icon: <Microscope className="w-8 h-8" />, title: 'Diagnostics', desc: 'Utilizing AI-assisted imaging and advanced metabolic testing.' },
              { icon: <BookOpen className="w-8 h-8" />, title: 'Wellness', desc: 'Lifestyle coaching focused on nutrition, sleep, and longevity.' },
            ].map((exp, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
