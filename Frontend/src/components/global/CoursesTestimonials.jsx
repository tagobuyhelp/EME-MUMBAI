"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/zoom"
import { Autoplay, Zoom, Navigation } from "swiper/modules"
import Image from "next/image"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function CoursesTestimonials({
    TestimonialsData = [],
    title = "Students",
    titleHighlight = "Testimonials",
    subtitle = ""
  }) {

  const breakpoints = {
    300: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 1.2, spaceBetween: 15 },
    768: { slidesPerView: 1.5, spaceBetween: 20 },
    1024: { slidesPerView: 2.5, spaceBetween: 25 },
    1280: { slidesPerView: 3, spaceBetween: 30 },
  }

  return (
    <div id="testimonials" className="w-full max-w-[1380px] mx-auto px-4 md:px-8 lg:px-10 py-2">
      {/* Section title */}
      <div className="flex flex-col items-center md:mb-2">
        <h2 className="text-[18px] md:text-[22px] font-bold text-center text-[#042A76]">
          {title}
          <span className="text-[#E87D1A]"> {titleHighlight}</span>
        </h2>
        {subtitle ? (
          <p className="mt-1 text-center text-[#4B4B4B] text-[12px] md:text-[14px] font-medium max-w-[900px]">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Swiper Carousel */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="relative flex items-center">
          {/* Left button */}
          <button className="swiper-button-prev-custom absolute left-0 top-[38%] md:top-[45%] -translate-y-1/2 z-10 -translate-x-3 md:-translate-x-1/2 bg-transparent">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#2251FF] hover:text-[#1a4adf]" />
          </button>

          <div className="w-full px-2 lg:px-8">
            <Swiper
              zoom
              loop
              grabCursor
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={breakpoints}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Autoplay, Zoom, Navigation]}
              className="w-full !py-4"
            >
              {TestimonialsData.map((data) => (
                <SwiperSlide key={data.id} className="h-auto flex flex-col gap-2 items-stretch">
                  <Card className="relative w-full max-w-[450px] h-auto min-h-[170px] md:min-h-[240px] flex flex-col items-center justify-center p-4 md:p-5 border border-[#EFF0F6] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    {/* Rating stars */}
                    <div className="w-full flex justify-start items-start gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${i < data.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.2c.969 0 1.371 1.24.588 1.81l-3.399 2.337a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.399-2.337a1 1 0 00-1.176 0l-3.399 2.337c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.2a1 1 0 00.95-.69l1.286-3.974z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="font-[500] text-[#4B4B4B] leading-relaxed text-xs sm:text-sm text-pretty">
                      {data.text}
                    </p>

                    {/* Pointer triangle */}
                    <div className="absolute left-[15%] -bottom-2.5 -translate-x-2/3 z-[1]">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-white border-b border-r border-[#EFF0F6] rotate-45 transform origin-center" />
                    </div>
                  </Card>

                  {/* Name + Avatar */}
                  <div className="flex items-center gap-3 mt-3 md:mt-2 pl-2">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                      <Image
                        src={data.src}
                        alt={data.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-[16px] font-[500]">{data.name}</h4>
                      <p className="text-xs md:text-[14px] text-[#7F7F7F] font-[400]">
                        {data.role}
                      </p>
                      {data.note ? (
                        <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-semibold text-[#0057E2]">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{data.note}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right button */}
          <button className="swiper-button-next-custom absolute right-0 top-[38%] md:top-[45%] -translate-y-1/2 z-10 bg-transparent translate-x-3 md:translate-x-1/2">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#2251FF] hover:text-[#1a4adf]" />
          </button>
        </div>
      </div>
    </div>
  )
}
