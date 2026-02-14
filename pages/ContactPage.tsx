
import React from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pb-24">
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your health or need to reschedule? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 px-1">Full Name</label>
                    {/* Added 'border border-gray-200' and removed 'border-none' */}
                    <input type="text" className="w-full bg-gray-50 py-5 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 px-1">Email Address</label>
                    {/* Added 'border border-gray-200' and removed 'border-none' */}
                    <input type="email" className="w-full bg-gray-50 py-5 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 px-1">Subject</label>
                  {/* Added 'border border-gray-200' and removed 'border-none' */}
                  <select className="w-full bg-gray-50 py-5 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-200 appearance-none">
                    <option>General Inquiry</option>
                    <option>Booking/Rescheduling</option>
                    <option>Prescription Question</option>
                    <option>Billing Question</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 px-1">Your Message</label>
                  {/* Added 'border border-gray-200' and removed 'border-none' */}
                  <textarea rows={6} className="w-full bg-gray-50 py-5 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-200 resize-none"></textarea>
                </div>
                <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center space-x-3">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm space-y-8">
                <h3 className="text-xl font-bold text-gray-900">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                    <div><p className="text-xs font-bold text-gray-400 uppercase">Call Support</p><p className="font-bold text-gray-900">(555) 123-4567</p></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                    <div><p className="text-xs font-bold text-gray-400 uppercase">Email Us</p><p className="font-bold text-gray-900">care@healio.health</p></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                    <div><p className="text-xs font-bold text-gray-400 uppercase">Headquarters</p><p className="font-bold text-gray-900">San Francisco, CA</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 relative z-10">Emergency Help</h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed mb-6 relative z-10">
                  If you are experiencing a life-threatening medical emergency, please call 911 immediately or go to the nearest emergency room.
                </p>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center relative z-10">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
