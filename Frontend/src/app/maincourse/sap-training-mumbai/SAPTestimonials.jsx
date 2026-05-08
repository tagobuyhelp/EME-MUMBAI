"use client";

import { Carousel } from "@/components/ui/carousel"; // make sure path is correct
import Image from "next/image";

const testimonials = [
  {
    name: "Sayani Hazra",
    role: "SAP MM Consultant at IBM",
    feedback:
      "I credit EME Academy for the sheer brilliance their curriculum contains. The classes were vital to providing me with the skills I needed to excel in my career. It has been a real confidence booster.",
    rating: 4,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SayaniHazra.jpg",
  },
  {
    name: "Arnab Bhattacharya",
    role: "SAP ABAP Consultant at ITC Infotech",
    feedback:
      "They have an array of hands-on projects for us to daily work on. The flexible batch timing also helped me switch from a different field to SAP development.",
    rating: 4,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/ArnabBhattacharya.jpg",
  },
  {
    name: "Somnath Manna",
    role: "SAP SD Consultant at Capgemini",
    feedback:
      "All that I learned and acquired at EME academy has been the foundation to my placement at such a reputed firm. The organization helped me thoroughly to secure my dream job.",
    rating: 5,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SomnathManna.jpg",
  },
  {
    name: "Anirban Kundu",
    role: "SAP SD Consultant at Capgemini",
    feedback:
      "All that I learned and acquired at EME academy has been the foundation to my placement at such a reputed firm. The organization helped me thoroughly to secure my dream job.",
    rating: 5,
    time: "12 months ago",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AnirbanKundu.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center pt-[40px] px-[20px] md:px-24">
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-[16px] md:text-[18px] font-bold tracking-tight text-[#232D63]">
          Testimonials from Our{" "}
          <span className="text-[#00A2E7]">Successful SAP</span> Alumni
        </h2>
        <p className="mt-2 text-[14px] md:text-[16px] font-500 text-[#727272]">
          Our students are our biggest advocates. Here are a few success
          stories.
        </p>

        <div className="mt-6">
          <Carousel
            className="space-x-4"
            loop
            align="start"
            slideSize="33.333%"
            slidesToScroll={1}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] flex flex-col gap-2 border rounded-[16px] border-solid border-[#EFF0F6]"
              >
                <div className="flex flex-row items-start lg:items-center pl-[19px] pt-[19px]">
                  <div className="flex justify-center w-[66px] h-[66px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col items-start lg:items-start pl-[10px]">
                    <p className="text-[16px] md:text-[18px] font-semibold text-[#323232]">
                      {testimonial.name}
                    </p>
                    <p className="text-[12px] text-start md:text-sm text-[#7F7F7F]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex justify-left items-center pl-[19px]">
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
                  <span className="px-2 text-[12px] font-noto font-normal text-right leading-5 text-[#989898]">
                    {testimonial.time}
                  </span>
                </div>

                <div className="px-[19px] pb-[19px] font-noto font-normal leading-[20px] text-left mt-2 text-[14px] text-[#4B4B4B]">
                  {testimonial.feedback}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
