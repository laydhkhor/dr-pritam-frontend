
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HEALTH_TIPS } from '../../constants';
import Card from '../ui/card';
import { theme } from '../theme';

const HealthTipsPreview = () => {
  return (
    <section className={`${theme.layout.sectionY} ${theme.colors.sectionMutedBackground}`}>
      <div className={theme.layout.container}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className={`${theme.typography.sectionTitle} ${theme.typography.sectionTitleOnLight} mb-4`}>Daily Health Insights</h2>
            <p className={theme.typography.sectionSubtitle}>Proactive tips to keep you feeling your best every day.</p>
          </div>
          <Link to="/tips" className="flex items-center space-x-2 text-emerald-600 font-bold hover:text-emerald-700 transition-all group">
            <span className="link-underline">View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_TIPS.slice(0, 3).map((tip) => (
            <motion.div whileHover={{ y: -10 }} key={tip.id}>
              <Card variant="white" padding="none" className="group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-emerald-600">
                    {tip.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{tip.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{tip.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {tip.summary}
                  </p>
                  <Link to={`/tips`} className="inline-flex items-center space-x-2 text-emerald-600 font-bold text-sm">
                    <span className="link-underline">Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTipsPreview;
