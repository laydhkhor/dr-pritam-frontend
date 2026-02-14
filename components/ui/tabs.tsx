
import React from 'react';

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-1.5 bg-white rounded-2xl w-fit mx-auto border border-gray-100 shadow-sm ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === tab.id 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
