import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS } from "../../constants";
import Avatar from "../ui/avatar";
import CarouselControls from "../ui/carousel-controls";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "5" | "4">("all");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);

  // Handle responsive items count
  useEffect(() => {
    const handleResize = () => {
      setItemsVisible(
        window.innerWidth >= 1280
          ? 5
          : window.innerWidth >= 1024
            ? 4
            : window.innerWidth >= 768
              ? 2
              : 1,
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize filtered reviews
  const filteredReviews = useMemo(() => {
    let reviews = [...REVIEWS];
    if (activeFilter === "5") reviews = reviews.filter((r) => r.rating === 5);
    if (activeFilter === "4") reviews = reviews.filter((r) => r.rating === 4);
    return reviews;
  }, [activeFilter]);

  const maxIdx = Math.max(0, filteredReviews.length - itemsVisible);

  // Reset index when filter changes
  useEffect(() => {
    setTestimonialIdx(0);
  }, [activeFilter]);

  return (
    <section className="py-24 bg-emerald-900 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Quote className="w-16 h-16 text-emerald-600/30 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              What My Patients Say
            </h2>

            {/* Filter Bar */}
            <div className="flex items-center justify-center space-x-3 mb-10 overflow-x-auto scrollbar-hide py-2">
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-sm">
                {[
                  { id: "all", label: "All Reviews" },
                  { id: "5", label: "5 Stars Only" },
                  { id: "4", label: "4 Stars Only" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as any)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeFilter === filter.id
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/40"
                        : "text-emerald-100/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden py-4">
              <AnimatePresence mode="wait">
                {filteredReviews.length > 0 ? (
                  <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex"
                  >
                    <motion.div
                      animate={{
                        x: `-${testimonialIdx * (100 / itemsVisible)}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="flex flex-nowrap gap-6 w-full"
                    >
                      {filteredReviews.map((review) => (
                        <div
                          key={review.id}
                          className="
                               shrink-0
                               bg-white/10 backdrop-blur-md
                                p-5 lg:p-6
                                rounded-[2rem]
                                border border-white/10
                                hover:bg-white/[0.15]
                                transition-colors
                              "
                          style={{ flex: `0 0 ${100 / itemsVisible}%` }}
                        >
                          <div>
                            <div className="flex items-center space-x-5 mb-6">
                              <Avatar
                                src={review.avatar}
                                alt={review.author}
                                size="md"
                              />
                              <div>
                                <h4 className="text-lg font-bold text-white leading-tight">
                                  {review.author}
                                </h4>
                                <div className="flex text-yellow-400 mt-1 space-x-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-white/20"}`}
                                    />
                                  ))}
                                </div>
                                <p className="text-white/40 text-[10px] font-bold mt-1 uppercase tracking-widest">
                                  {review.date}
                                </p>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg text-emerald-50 leading-relaxed italic font-medium">
                              "{review.comment}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="py-20 text-center text-emerald-100/40 font-bold">
                    No reviews found for this filter.
                  </div>
                )}
              </AnimatePresence>
            </div>

            {filteredReviews.length > itemsVisible && (
              <CarouselControls
                onPrev={() =>
                  setTestimonialIdx((prev) => Math.max(prev - 1, 0))
                }
                onNext={() =>
                  setTestimonialIdx((prev) => Math.min(prev + 1, maxIdx))
                }
                currentIndex={testimonialIdx}
                maxIndex={maxIdx}
                className="mt-12"
              />
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-900/20 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Testimonials;
