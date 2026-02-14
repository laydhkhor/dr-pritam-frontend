
import React from 'react';
import { MessageSquare, Video, MapPin, Check } from 'lucide-react';
import Card from '../ui/card';
import Button from '../ui/button';

const Pricing = () => {
  const plans = [
    { title: 'Quick Chat', price: '49', period: '/ session', icon: <MessageSquare />, desc: '15 min chat session for quick health queries.', features: ['Direct messaging', 'Symptom analysis', 'Medical advice'] },
    { title: 'Video Call', price: '129', period: '/ session', icon: <Video />, desc: '30 min comprehensive video consultation.', features: ['Full health history review', 'Digital prescriptions', 'Follow-up email', 'Test referrals'], highlight: true },
    { title: 'Clinic Visit', price: '199', period: '/ session', icon: <MapPin />, desc: 'In-person comprehensive diagnostic visit.', features: ['Physical examination', 'Immediate basic vitals', 'Advanced ECG (if needed)', 'Comprehensive report'] },
  ];

  return (
    <section className="py-24 bg-white overflow-visible">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-emerald-950 mb-4">Transparent Pricing</h2>
          <p className="text-gray-500">Quality care doesn't have to be a mystery. Choose a plan that fits your needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative pt-6">
              <Card 
                variant={plan.highlight ? 'emerald' : 'gray'} 
                padding="xl"
                overflowHidden={!plan.highlight}
                className={`h-full flex flex-col relative transition-all duration-500 hover:translate-y-[-8px] ${plan.highlight ? 'z-10' : 'z-0'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg shadow-sky-400/20 whitespace-nowrap z-20">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0 ${plan.highlight ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 leading-relaxed flex-grow ${plan.highlight ? 'text-emerald-50' : 'text-gray-600'}`}>{plan.desc}</p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm font-medium">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-emerald-500' : 'bg-emerald-100'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'secondary' : 'primary'} className="w-full py-4">
                  Choose Plan
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
