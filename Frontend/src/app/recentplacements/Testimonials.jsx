"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

export function Testimonials({ testimonials = [] }) {
  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 1.2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  };
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full max-w-[1380px] mx-auto px-4 md:px-8 lg:px-10 py-4 md:py-10 bg-[#F5F6F9]"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-xl md:text-[26px] font-semibold text-[#4B4B4B]">
          Student{" "}
          <span className="relative inline-flex flex-col text-[#232D63]">
            Testimonials
            <motion.span
              className="flex justify-end items-end overflow-hidden"
              initial={{ width: 0 }}
              animate={isLoaded ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="w-20 md:w-[100px] h-3 md:h-4 ml-1">
                <Image
                  src="/assets/images/Home/icons/StudentsLineVector.svg"
                  alt="Underline"
                  width={160}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.span>
          </span>
        </h1>
      </div>

      {/* Swiper Wrapper */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button className="swiper-button-prev-custom absolute left-0 top-[38%] md:top-[45%] -translate-y-1/2 z-10 -translate-x-3  bg-white rounded-full p-1 md:-translate-x-1/2 bg-transparent">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#2251FF] hover:text-[#1a4adf]" />
          </button>

          {/* Swiper */}
          <div className="w-full px-2 lg:px-8">
            <Swiper
              loop
              grabCursor
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              breakpoints={breakpoints}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="w-full !py-4"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide
                  key={idx}
                  className="h-auto flex flex-col gap-3 items-stretch"
                >
                  <div className="relative bg-white rounded-2xl shadow-sm p-6 w-full max-w-[400px] flex flex-col border border-gray-100 hover:shadow-md transition-shadow">
                    {/* Top Row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#323232]">
                          {t.name}
                        </h3>
                        
                      </div>
                      
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < t.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                            }`}
                        />
                      ))}
                      <span className="text-xs text-[#989898] ml-2">
                        {t.timeAgo}
                      </span>
                    </div>

                    {/* Testimonial */}
                    <p className="text-sm text-[#4B4B4B] leading-relaxed ">
                      {t.testimonial}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <button className="swiper-button-next-custom absolute right-2 top-[38%] md:top-[45%] -translate-y-1/2 z-10 bg-white rounded-full p-1 translate-x-3 md:translate-x-1/2">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#2251FF] hover:text-[#1a4adf]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center mt-6 !bottom-0"></div>
      </div>
    </section>
  );
}