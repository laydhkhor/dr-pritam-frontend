
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, ChevronRight, Share2 } from 'lucide-react';
import { HEALTH_TIPS } from '../constants';

const HealthTipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wellness', 'Technology', 'Mental Health', 'Cardiology'];

  const filteredTips = HEALTH_TIPS.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-24">
      {/* Search Header */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold">Health & Wellness Insights</h1>
            <p className="text-emerald-100 text-lg">Stay informed with the latest medical advice and research from Dr. Julian Vance.</p>
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl py-5 pl-14 pr-6 text-white placeholder-emerald-200 outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-200 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Bar */}
      <section className="sticky top-[80px] z-30 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide py-2">
            <Filter className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {filteredTips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredTips.map((tip, idx) => (
                <motion.article 
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={tip.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tip.title} loading="lazy" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-bold text-emerald-600">
                      {tip.category}
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{tip.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {tip.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-emerald-600 font-bold hover:text-emerald-700">
                        <span>Read Full Story</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-300 hover:text-emerald-500">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">No Articles Found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HealthTipsPage;
