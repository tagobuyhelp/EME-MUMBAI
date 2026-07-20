"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CTAButton from "@/components/common/CtaButton";

export default function AllSapCourseLandingShadcn({
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    SelectCourses: SelectCourses ? SelectCourses : [],
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  const courses = [
    {
      name: "SAP ABAP Course",
      id: 1,
      assistance: (
        <div>
          <span className="font-bold">‘0’</span> cost EMI available
        </div>
      ),
      decsOne: "80% Students Hired by MNCs",
      decsTwo: "100% Placement Assistance",
      decsThree: "2000+ Successful Students",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseOne.jpg",
    },
    {
      name: "SAP FICO Course",
      id: 2,
      assistance: (
        <div>
          <span className="font-bold">Affordable</span> Course Fees
        </div>
      ),
      decsOne: "78% Students Hired by MNCs",
      decsTwo: "Latest S/4 HANA Curriculum",
      decsThree: "2000+ Employment Generated",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseTwo.jpg",
    },
    {
      name: "SAP MM Course",
      id: 3,
      assistance: (
        <div>
          <span className="font-bold">Latest</span> Study Materials
        </div>
      ),
      decsOne: "80% Students Hired by MNCs",
      decsTwo: "100% Placement Assistance",
      decsThree: "100% Assistance",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseThree.jpg",
    },
    {
      name: "SAP PP Course",
      id: 4,
      assistance: (
        <div>
          <span className="font-bold">100+</span> Hiring EMI Available
        </div>
      ),
      decsOne: "78% Students Hired by MNCs",
      decsTwo: "100% Placement Assistance",
      decsThree: "Latest S/4 HANA Curriculum",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseFour.jpg",
    },
    {
      name: "SAP SD Course",
      id: 5,
      assistance: (
        <div>
          <span className="font-bold">24*7</span> Server Access
        </div>
      ),
      decsOne: "80% Students Hired by MNCs",
      decsTwo: "100% Placement Assistance",
      decsThree: "2000+ Employment Generated",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseFive.jpg",
    },
    {
      name: "SAP HCM Course",
      id: 6,
      assistance: (
        <div>
          <span className="font-bold">Flexible</span> Batch Timings
        </div>
      ),
      decsOne: "78% Students Hired by MNCs",
      decsTwo: "Latest S/4 HANA Curriculum",
      decsThree: "100% Assistance",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseSix.jpg",
    },
    {
      name: "SAP Success Factor",
      id: 7,
      assistance: (
        <div>
          <span className="font-bold">Continuous</span> Evaluation
        </div>
      ),
      decsOne: "80% Students Hired by MNCs",
      decsTwo: "100% Assistance",
      decsThree: "2000+ Employment Generated",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseSeven.jpg",
    },
    {
      name: "SAP Basis Course",
      id: 8,
      assistance: (
        <div>
          <span className="font-bold">Latest</span> Study Materials
        </div>
      ),
      decsOne: "78% Students Hired by MNCs",
      decsTwo: "Latest S/4 HANA Curriculum",
      decsThree: "2000+ Successful Students",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseEight.jpg",
    },
    {
      name: "SAP Analytics Course ",
      id: 9,
      assistance: (
        <div>
          <span className="font-bold">Certified</span> Expert Trainers
        </div>
      ),
      decsOne: "80% Students Hired by MNCs",
      decsTwo: "100% Assistance",
      decsThree: "2000+ Employment Generated",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SapCourseNine.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-y-5 py-5 lg:py-10 px-[10px] md:px-24 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold">
          <span className="text-[#E87D1A]">O</span>ur Courses
        </h2>
      </div>

      <Carousel opts={{ loop: true }} className="w-full max-w-[990px]">
        <CarouselContent className="gap-4">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-lg shadow overflow-hidden  my-2 mx-2">
                {/* Card content */}
                <Image
                  src={course.src}
                  alt={course.name}
                  width={320}
                  height={200}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <div className="font-bold">{course.name}</div>
                  <div className="text-xs mt-2">{course.decsOne}</div>
                  <div className="text-xs">{course.decsTwo}</div>
                  <div className="text-xs">{course.decsThree}</div>
                  <div className="flex items-start justify-start">
                  <CTAButton
                    name="Enroll Now"
                    styleClasses="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:text-white cursor-pointer"
                    _this={_this}
                  />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-0 z-10">
          <ChevronLeft />
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 z-10">
          <ChevronRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
