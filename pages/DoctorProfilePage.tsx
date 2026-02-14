
import React from 'react';
import { Award, GraduationCap, Building2, Globe, Heart, CheckCircle } from 'lucide-react';

const DoctorProfilePage = () => {
  return (
    <div className="pb-24">
      {/* Dr Profile Banner */}
      <section className="h-64 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 -mt-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Info */}
          <div className="lg:w-2/3 space-y-10">
            <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-50">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
                <img src="https://picsum.photos/seed/doctor_julian/400/400" className="w-48 h-48 rounded-[2.5rem] object-cover shadow-2xl" alt="Dr. Julian Vance" loading="lazy" />
                <div className="text-center md:text-left pt-4">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified Expert</span>
                  </div>
                  <h1 className="text-4xl font-bold text-emerald-950 mb-4">Dr. Julian Vance</h1>
                  <p className="text-lg text-gray-500 font-medium mb-6">Senior Consultant • Cardiovascular Specialist</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {['MD', 'FACC', 'Cardiology', 'San Francisco'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold border border-gray-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-10 border-t border-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Doctor</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dr. Julian Vance is a globally recognized leader in cardiology with a focus on preventative medicine. He specializes in the integration of genetic data and digital health monitoring to provide hyper-personalized care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 flex items-center space-x-2">
                      <GraduationCap className="text-emerald-600 w-5 h-5" />
                      <span>Education</span>
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-600">
                      <li>• Stanford University Medical School (MD)</li>
                      <li>• Mayo Clinic College of Medicine (Residency)</li>
                      <li>• Harvard Medical School (Fellowship)</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 flex items-center space-x-2">
                      <Award className="text-emerald-600 w-5 h-5" />
                      <span>Fellowships</span>
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-600">
                      <li>• Fellow of the American College of Cardiology (FACC)</li>
                      <li>• American Heart Association Member (AHA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-emerald-600 text-white rounded-[2.5rem] p-10 shadow-xl">
              <h3 className="text-xl font-bold mb-8">Professional Affiliations</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 shrink-0 opacity-60" />
                  <div>
                    <p className="font-bold">Chief of Cardiology</p>
                    <p className="text-sm opacity-80 mt-1">St. Mary’s Medical Plaza</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 shrink-0 opacity-60" />
                  <div>
                    <p className="font-bold">Medical Advisor</p>
                    <p className="text-sm opacity-80 mt-1">VitalTech Global</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 shrink-0 opacity-60" />
                  <div>
                    <p className="font-bold">Founder</p>
                    <p className="text-sm opacity-80 mt-1">Vance Cardiac Research Institute</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white text-emerald-600 py-4 rounded-2xl font-bold mt-10 hover:bg-emerald-50 transition-all">
                Request CV / Profile
              </button>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Satisfaction</h3>
              <div className="flex items-end justify-between mb-2">
                <span className="text-emerald-600 font-black text-4xl">4.9/5</span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Across 2k+ Patients</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[98%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
