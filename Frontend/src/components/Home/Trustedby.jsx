'use client'
import { useState } from 'react';
import React from 'react'
import { Card } from '../ui/card';
import Image from 'next/image';
import CTAButton from '../common/CtaButton';
export default function Trustedby() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = "All Course"
  const email_sender = "ALL"
  const SelectCourses = [
    "Data Analytics Course",
    "Sap Course",
    "Digital Marketing Course",
    "HR Management Course",
    "Web Development Course",
    "Data Science Course",
    "Graphics Designing Course",
    "Cyber Security Course",
    "UI UX Course",
    "Animation & VFX Course",
    "Cloud Computing Course",
    "Prompt Engineering with AI Course"
  ];
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };
  return (
    <section className='w-full max-w-[1240px] p-8 md:p-10 flex flex-col md:flex-row justify-center items-center gap-4'>
      {/* Left Content */}
      <div className='w-full space-y-3 md:max-w-[620px] flex flex-col justify-center  items-center md:items-start' >
        <div className='flex justify-center md:justify-start items-baseline gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]'>
          Trusted by
          <span className='flex flex-col items-end'>
            <span className='text-[18px] md:text-[22px] text-[#232D63]'>10K+ Students</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={80}
              height={40}
              className='ml-2'
            />
          </span>
        </div>

        <p className=' text-center md:text-start text-[12px] md:text-[14px] text-[#4B4B4B]'>
          Join the top-rated IT training institute in Kolkata offering industry-focused courses with placement support, expert mentors and hands-on learning.
        </p>

        <CTAButton name="Book A Free Demo"
          styleClasses="mt-4 bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 text-white rounded-full font-semibold text-[12px] md:text-[14px] md:px-11"
          _this={_this}
        />
      </div>

      {/* Right Content */}
      <div className='w-full flex flex-row gap-4 justify-center'>
        <Card className='w-full max-w-[280px] flex flex-col justify-center items-center p-4 md:p-6 space-y-2 text-center bg-[#F8F8F8] border border-[#EEEEEE] rounded-[16px] transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
          <Image
            src="/assets/icons/googleLogo.svg"
            alt="Justicial"
            width={50}
            height={40}
            className='mx-auto'
          />

          <div className='space-y-2'>
            <div className='flex items-center justify-center text-[18px] md:text-[22px] font-semibold'>
              4.8/5<Image src="assets/icons/startIcon.svg" alt='star' width={15} height={15} />
            </div>

            <p className=' text-[#4B4B4B] text-[10px] md:text-[12px]'>633+ Google Reviews</p>
          </div>
        </Card>
        <Card className='w-full max-w-[280px] flex flex-col justify-center items-center p-4 md:p-6 space-y-4 text-center bg-[#F8F8F8] border border-[#EEEEEE] rounded-[16px] transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
          <Image
            src="/assets/icons/JustDialLogo.svg"
            alt="Justicial"
            width={80}
            height={60}
            className='mx-auto mt-2 md:mt-1 '
          />

          <div className='space-y-2'>
            <div className='flex items-center justify-center text-[18px] md:text-[22px] font-semibold'>
              4.8/5<Image src="/assets/icons/startIcon.svg" alt='star' width={15} height={15} />
            </div>

            <p className='text-gray-600 text-[#4B4B4B] text-[10px] md:text-[12px]'>311+ Justdial Reviews</p>
          </div>
        </Card>
      </div>
    </section>
  )
}