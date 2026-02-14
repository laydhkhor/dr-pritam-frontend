
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, MapPin, Check, ExternalLink } from 'lucide-react';
import Tabs from '../ui/tabs';
import Card from '../ui/card';
import Input from '../ui/input';
import Button from '../ui/button';
import { CLINICS } from '../../constants';

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState('online');
  const [activeClinicIdx, setActiveClinicIdx] = useState(0);

  const bookingTabs = [
    { id: 'online', label: 'Online Consultation' },
    { id: 'offline', label: 'Visit Clinic' }
  ];

  const currentClinic = CLINICS[activeClinicIdx];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-emerald-950 mb-6">Book a Consultation</h2>
            <Tabs tabs={bookingTabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>

          <Card variant="white" padding="xl" className="shadow-2xl shadow-gray-200/50">
            <AnimatePresence mode="wait">
              {activeTab === 'online' ? (
                <motion.div
                  key="online"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <Input label="Patient Full Name" placeholder="e.g. John Doe" />
                    <Input label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
                    <Input label="Preferred Date" type="date" />
                    <Button variant="primary" size="lg" className="w-full">
                      Confirm Online Booking
                    </Button>
                  </div>
                  <div className="bg-emerald-50 rounded-3xl p-8 flex flex-col justify-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Video className="text-emerald-600 w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900 mb-3">Telehealth Ready</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Secure, encrypted high-quality video consultations from the comfort of your home.
                    </p>
                    <ul className="text-left space-y-3 text-sm text-gray-700 mx-auto">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>No travel time needed</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Direct digital prescriptions</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="offline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  {/* Clinic Selector UX FIX */}
                  <div className="flex justify-center space-x-3">
                    {CLINICS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveClinicIdx(i)}
                        className={`w-12 h-12 rounded-xl font-bold text-sm transition-all border ${
                          activeClinicIdx === i 
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-100' 
                            : 'bg-white text-gray-500 border-gray-100 hover:border-emerald-200'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClinic.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col lg:flex-row bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                    >
                      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                              <MapPin className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1.5 rounded-lg text-emerald-700">Open Now</span>
                          </div>
                          <h4 className="font-bold text-2xl text-emerald-950 mb-3">{currentClinic.name}</h4>
                          <p className="text-gray-500 text-sm mb-6 flex items-start space-x-2">
                            <span className="mt-1"><MapPin className="w-4 h-4" /></span>
                            <span>{currentClinic.address}, {currentClinic.city}</span>
                          </p>
                        </div>
                        <Button 
                          onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(currentClinic.address + ' ' + currentClinic.city)}`, '_blank')}
                          className="w-full lg:w-fit"
                        >
                          <span>Get Directions</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      <div className="lg:w-1/2 h-[300px] lg:h-auto min-h-[300px] relative">
                        <iframe 
                          title={`Map for ${currentClinic.name}`}
                          src={currentClinic.mapUrl}
                          className="absolute inset-0 w-full h-full border-0 grayscale-[0.2] hover:grayscale-0 transition-all"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
