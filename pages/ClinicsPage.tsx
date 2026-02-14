
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Globe } from 'lucide-react';
import { CLINICS } from '../constants';

const ClinicsPage = () => {
  return (
    <div className="pb-24">
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Our Clinic Locations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conveniently located in the heart of the Bay Area.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-24">
          {CLINICS.map((clinic, idx) => (
            <div key={clinic.id} className={`flex flex-col lg:flex-row items-stretch gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg uppercase tracking-widest">
                  Primary Location
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{clinic.name}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Address</p>
                      <p className="text-gray-500 mt-1">{clinic.address}, {clinic.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <p className="text-gray-500 mt-1">{clinic.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Working Hours</p>
                      <p className="text-gray-500 mt-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center space-x-2">
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center space-x-2">
                    <span>View Website</span>
                    <Globe className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[400px]">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl bg-gray-200">
                  <iframe 
                    src={clinic.mapUrl}
                    className="w-full h-full border-none"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClinicsPage;
