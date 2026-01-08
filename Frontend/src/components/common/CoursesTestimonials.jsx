"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sayani Hazra",
    feedback:
      "I credit EME Academy for the sheer brilliance their curriculum contains. The classes were vital to providing me with the skills I needed to excel in my career. It has been a real confidence booster.",
    rating: 4,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SayaniHazra.jpg",
  },
  {
    name: "Arnab Bhattacharya",
    feedback:
      "They have an array of hands-on projects for us to daily work on. The flexible batch timing also helped me switch from a different field to SAP development.",
    rating: 4,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/ArnabBhattacharya.jpg",
  },
  {
    name: "Somnath Manna",
    feedback:
      "All that I learned and acquired at EME academy has been the foundation to my placement at such a reputed firm. The organization helped me thoroughly to secure my dream job.",
    rating: 5,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SomnathManna.jpg",
  },
  {
    name: "Anirban Kundu",
    feedback:
      "All that I learned and acquired at EME academy has been the foundation to my placement at such a reputed firm. The organization helped me thoroughly to secure my dream job.",
    rating: 5,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AnirbanKundu.jpg",
  },
];

export default function CoursesTestimonials({ name }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center pt-10 px-5 md:px-24">
      <div className="text-center">
        <h2 className="text-[16px] md:text-[18px] font-bold tracking-tight text-[#232D63]">
          Testimonials from Our{" "}
          <span className="text-[#00A2E7]">Successful {name}</span> Alumni
        </h2>
        <p className="mt-2 text-[14px] md:text-[16px] font-medium text-[#727272]">
          Our students are our biggest advocates. Here are a few success
          stories.
        </p>
      </div>

      <div className="mt-6 relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/3"
              >
                <div className="bg-[#FFFFFF] flex flex-col gap-2 border rounded-[16px] border-[#EFF0F6] shadow-sm">
                  <div className="flex flex-row items-start lg:items-center pl-[19px] pt-[19px]">
                    <div className="flex justify-center w-[66px] h-[66px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={66}
                        height={66}
                        className="rounded-full w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col items-start pl-[10px]">
                      <p className="mt-2 md:mt-0 text-[16px] md:text-[18px] font-semibold text-[#323232]">
                        {testimonial.name}
                      </p>
                      <p className="text-[12px] text-[#7F7F7F]">
                        {testimonial.role || "Student"}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-1 flex items-center pl-[19px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.2c.969 0 1.371 1.24.588 1.81l-3.399 2.337a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.399-2.337a1 1 0 00-1.176 0l-3.399 2.337c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.2a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                    <span className="px-2 text-[12px] text-[#989898]">
                      {testimonial.time}
                    </span>
                  </div>

                  <div className="px-[19px] pb-[19px] font-normal leading-[20px] text-left mt-2 text-[14px] text-[#4B4B4B]">
                    {testimonial.feedback}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
