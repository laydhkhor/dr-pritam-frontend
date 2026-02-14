
import React from 'react';
import { HealthTip, Clinic, Review } from './types';
import { Heart, Activity, Brain, Thermometer, ShieldCheck, MapPin, Clock, Phone } from 'lucide-react';

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: '1',
    title: 'Managing Seasonal Allergies Effectively',
    category: 'Wellness',
    summary: 'Discover the latest natural and clinical approaches to handle spring pollen.',
    content: 'Allergies can be debilitating. While antihistamines are the gold standard, lifestyle changes like high-efficiency air filters and saline nasal rinses can make a massive difference...',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/med1/800/600'
  },
  {
    id: '2',
    title: 'The Future of Telemedicine',
    category: 'Technology',
    summary: 'How remote monitoring is changing the face of chronic disease management.',
    content: 'Telemedicine is no longer just video calls. Wearable sensors that sync with your patient portal allow doctors to see real-time heart rate and oxygen data...',
    date: 'Oct 15, 2023',
    image: 'https://picsum.photos/seed/med2/800/600'
  },
  {
    id: '3',
    title: 'Mental Resilience in Modern Times',
    category: 'Mental Health',
    summary: 'Simple cognitive strategies to maintain balance in a high-stress world.',
    content: 'Mindfulness is often misunderstood. It is simply the act of being present without judgment. Practicing this for just 10 minutes a day has shown significant reduction in cortisol levels...',
    date: 'Oct 18, 2023',
    image: 'https://picsum.photos/seed/med3/800/600'
  }
];

export const CLINICS: Clinic[] = [
  {
    id: 'c1',
    name: 'St. Mary’s Wellness Center',
    address: '452 Medical Plaza, Suite 200',
    city: 'San Francisco, CA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus',
    phone: '(555) 123-4567'
  },
  {
    id: 'c2',
    name: 'Metropolitan Health Hub',
    address: '88 Innovation Dr., Level 5',
    city: 'San Jose, CA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332506840645!2d-121.8863286!3d37.3382082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca440a3195b%3A0x7d83897d2c3f8754!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus',
    phone: '(555) 987-6543'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    rating: 5,
    comment: 'Dr. Vance is incredibly thorough. He took the time to explain my results in a way I could actually understand.',
    date: '2 weeks ago',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 'r2',
    author: 'Michael Chen',
    rating: 4,
    comment: 'Great bedside manner and very professional clinic staff. The online booking system is a lifesaver.',
    date: '1 month ago',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    id: 'r3',
    author: 'Emily Rodriguez',
    rating: 5,
    comment: 'The technology they use for diagnostics is impressive. I felt very well cared for during my entire visit.',
    date: '3 weeks ago',
    avatar: 'https://picsum.photos/seed/emily/100/100'
  },
  {
    id: 'r4',
    author: 'David Wilson',
    rating: 5,
    comment: 'Finally a doctor who listens! Dr. Vance really cares about his patients and it shows in his approach.',
    date: '5 days ago',
    avatar: 'https://picsum.photos/seed/david/100/100'
  },
  {
    id: 'r5',
    author: 'Amanda Lee',
    rating: 4,
    comment: 'Very efficient and clean clinic. The wait times were minimal and the staff was friendly.',
    date: '1 month ago',
    avatar: 'https://picsum.photos/seed/amanda/100/100'
  }
];

export const SERVICES = [
  { title: 'Cardiology', icon: <Heart className="w-6 h-6 text-red-500" />, desc: 'Expert care for your heart health.' },
  { title: 'General Medicine', icon: <Activity className="w-6 h-6 text-blue-500" />, desc: 'Daily health checks and wellness.' },
  { title: 'Neurology', icon: <Brain className="w-6 h-6 text-purple-500" />, desc: 'Brain and nerve related therapies.' },
  { title: 'Diagnostics', icon: <ShieldCheck className="w-6 h-6 text-green-500" />, desc: 'Advanced lab testing and imaging.' },
];
