import Button from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

const ReviewPage = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-emerald-950 mb-8">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Join thousands of patients who have found a better way to care for
              their cardiovascular and primary health. Dr. Vance is currently
              accepting new patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" className="px-10">
                Book Now
              </Button>
              <Button
                to="/clinics"
                variant="secondary"
                size="lg"
                className="px-10"
              >
                Visit Clinics
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10 flex flex-col items-center">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl w-full max-w-md">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Write a Review
              </h4>
              <div className="space-y-4">
                <div className="flex justify-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-gray-200 cursor-pointer hover:text-yellow-400 transition-colors"
                    />
                  ))}
                </div>
                {/* Added 'border border-gray-200' and removed 'border-none' for visibility */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* Added 'border border-gray-200' and removed 'border-none' for visibility */}
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience..."
                  className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                ></textarea>
                <Button variant="dark" className="w-full py-4 rounded-xl">
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-100 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
