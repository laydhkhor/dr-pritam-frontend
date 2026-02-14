
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, PhoneCall, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">Healio</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium medical services provided by Dr. Julian Vance. Excellence in cardiology and general medicine with a focus on patient-first technology.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                  <span className="capitalize text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Dr. Vance</Link></li>
              <li><Link to="/clinics" className="hover:text-emerald-500 transition-colors">Find a Clinic</Link></li>
              <li><Link to="/tips" className="hover:text-emerald-500 transition-colors">Health Tips</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Book Online</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Medical Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li>Cardiology Services</li>
              <li>Chronic Pain Care</li>
              <li>Neurological Checkups</li>
              <li>Stress Management</li>
              <li>Telemedicine Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>452 Medical Plaza, Suite 200, San Francisco, CA</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>care@healio.health</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Healio Medical Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
