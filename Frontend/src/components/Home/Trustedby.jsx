'use client'
import { useState } from 'react';
import React from 'react'
import { Card } from '../ui/card';
import Image from 'next/image';
import CTAButton from '../common/CtaButton';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Trustedby() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = "All Course"
  const email_sender = "ALL"
  const SelectCourses = [
    "Data Analytics Course", "Sap Course", "Digital Marketing Course",
    "HR Management Course", "Web Development Course", "Data Science Course",
    "Graphics Designing Course", "Cyber Security Course", "UI UX Course",
    "Animation & VFX Course", "Cloud Computing Course", "Prompt Engineering with AI Course"
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
    <section className="w-full py-6 md:py-16 bg-[#F8FAFC]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-1.5 text-xl md:text-3xl font-black text-gray-800"
            >
              <span className="text-gray-500">Trusted by</span>
              <div className="relative inline-block">
                <span className="text-[#232D63]">10K+ Students</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-1 left-0 h-1.5 w-full"
                >
                  <Image
                    src="/assets/images/Home/icons/StudentsLineVector.svg"
                    alt="line"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-[12px] md:text-sm leading-relaxed max-w-lg font-medium"
            >
              Join Mumbai&apos;s highest-rated institute. Industry-focused excellence with expert mentorship and hands-on learning for your career success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <CTAButton 
                name="Book A Free Demo"
                styleClasses="mt-1 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-[10px] md:text-xs h-9 md:h-11 px-6 md:px-8 shadow-lg shadow-blue-50 transition-all hover:scale-105 active:scale-95"
                _this={_this}
              />
            </motion.div>
          </div>

          {/* Right Content - Review Cards */}
          <div className="w-full lg:w-[45%] flex flex-row gap-3 md:gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-1/2"
            >
              <Card className="h-full flex flex-col justify-center items-center p-3 md:p-6 space-y-2 md:space-y-4 text-center bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,87,226,0.1)] transition-all duration-500 group">
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-500">
                  <Image
                    src="/assets/icons/googleLogo.svg"
                    alt="Google"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-0.5 md:space-y-1.5">
                  <div className="flex items-center justify-center gap-1 md:gap-1.5">
                    <span className="text-lg md:text-2xl font-black text-gray-800">4.8</span>
                    <div className="flex text-yellow-400">
                      <Star className="h-3 w-3 md:h-3.5 md:w-3.5 fill-current" />
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    633+ Reviews
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-1/2"
            >
              <Card className="h-full flex flex-col justify-center items-center p-3 md:p-6 space-y-2 md:space-y-4 text-center bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,87,226,0.1)] transition-all duration-500 group">
                <div className="relative w-14 h-7 md:w-20 md:h-10 transition-all duration-500">
                  <Image
                    src="/assets/icons/JustDialLogo.svg"
                    alt="Justdial"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-0.5 md:space-y-1.5">
                  <div className="flex items-center justify-center gap-1 md:gap-1.5">
                    <span className="text-lg md:text-2xl font-black text-gray-800">4.8</span>
                    <div className="flex text-yellow-400">
                      <Star className="h-3 w-3 md:h-3.5 md:w-3.5 fill-current" />
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    311+ Reviews
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}