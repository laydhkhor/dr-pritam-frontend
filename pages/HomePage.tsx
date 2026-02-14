
import React from 'react';
import Hero from '../components/layout/hero';
import BookingSection from '../components/layout/booking-section';
import Pricing from '../components/layout/pricing';
import HealthTipsPreview from '../components/layout/health-tips-preview';
import Testimonials from '../components/layout/testimonials';
import ReviewPage from './ReviewPage';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero & Stats Section */}
      <Hero />
      
      {/* Booking / Appointment Management */}
      <BookingSection />
      
      {/* Transparent Service Pricing */}
      <Pricing />
      
      {/* Curated Health Content */}
      <HealthTipsPreview />
      
      {/* Patient Success Stories */}
      <Testimonials />

      {/* Final Review/CTA Section - Stays within div to ensure scroll sequence */}
        <ReviewPage />
    </div>
  );
};

export default HomePage;
