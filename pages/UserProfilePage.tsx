
import React from 'react';
import { User, Calendar, Activity, FileText, Settings, LogOut, ChevronRight, Clock } from 'lucide-react';

const UserProfilePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="container mx-auto px-4 md:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img src="https://picsum.photos/seed/patient/200/200" className="w-32 h-32 rounded-3xl object-cover ring-8 ring-gray-50" alt="User Profile Avatar" loading="lazy" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center border-4 border-white">
                  <Settings className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Johnathan Doe</h3>
              <p className="text-gray-500 text-sm mb-6">Patient since Jan 2022</p>
              <div className="w-full pt-6 border-t border-gray-50 space-y-4">
                <button className="w-full flex items-center space-x-3 text-emerald-600 font-bold bg-emerald-50 p-4 rounded-xl transition-all">
                  <Activity className="w-5 h-5" />
                  <span>Health Overview</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-gray-500 font-medium hover:bg-gray-50 p-4 rounded-xl transition-all">
                  <FileText className="w-5 h-5" />
                  <span>Medical Records</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-gray-500 font-medium hover:bg-gray-50 p-4 rounded-xl transition-all">
                  <Settings className="w-5 h-5" />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-red-500 font-medium hover:bg-red-50 p-4 rounded-xl transition-all">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-8">
            {/* Header Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Next Appointment', value: 'Oct 24, 2023', sub: '9:30 AM', icon: <Calendar />, color: 'emerald' },
                { label: 'Recent Heart Rate', value: '72 bpm', sub: 'Last measured today', icon: <Activity />, color: 'sky' },
                { label: 'Pending Tests', value: '1 Report', sub: 'Blood Work Panel', icon: <FileText />, color: 'purple' },
              ].map((m, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">{m.label}</p>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{m.value}</h4>
                    <p className="text-sm text-gray-500">{m.sub}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${m.color}-50 text-${m.color}-600 rounded-xl flex items-center justify-center shrink-0`}>
                    {m.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h3>
                <button className="text-emerald-600 font-bold text-sm">View Schedule</button>
              </div>
              <div className="space-y-6">
                {[
                  { dr: 'Dr. Julian Vance', type: 'Cardiology Follow-up', time: 'Oct 24, 2023 • 09:30 AM', status: 'Confirmed' },
                  { dr: 'Dr. Julian Vance', type: 'Lab Results Review', time: 'Nov 12, 2023 • 02:15 PM', status: 'Pending' },
                ].map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-3xl border border-gray-50 hover:bg-gray-50 transition-all cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <User className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{app.type}</h4>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center space-x-1"><Clock className="w-3 h-3" /> <span>{app.time}</span></span>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-bold text-[10px]">{app.status}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Health History Chart Placeholder */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-10">Vital Signs Trends</h3>
              <div className="w-full h-64 bg-gray-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <div className="text-center text-gray-400">
                  <Activity className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="font-medium">Connect wearable device to sync health data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
