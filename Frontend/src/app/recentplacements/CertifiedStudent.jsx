"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { StudentCard } from "./StudentCard";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";
import { Award, CheckCircle2 } from "lucide-react";

const CertifiedStudent = ({
  students = [],
  title,
  titleHighlight,
  subtitle,
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ctaType, setCtaType] = React.useState(null);

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
    <section className="w-full py-8 md:py-12 bg-[#F8FAFC] overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-repeat opacity-[0.05] pointer-events-none" />
      
      <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 px-3 py-1 text-[10px] md:text-xs text-[#0057E2] font-bold bg-blue-50/50"
          >
            <Award className="h-3.5 w-3.5" />
            Verified Student Success
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-black text-gray-900 leading-tight"
          >
            {title}{" "}
            <span className="relative inline-block text-[#0057E2]">
              {titleHighlight}
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
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-[12px] md:text-sm leading-relaxed max-w-lg font-medium"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Marquee Section */}
        <div className="relative mb-8 md:mb-10">
          <Marquee 
            direction="left" 
            pauseOnHover={true}
            gradient={false}
            speed={40}
            className="py-4 overflow-hidden"
          >
            {[...(students || []), ...(students || [])].map((s, i) => (
              <div key={i} className="mx-3 md:mx-4 transition-transform duration-500 hover:scale-[1.02]">
                <StudentCard student={s} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <CTAButton 
            name="Explore Our Courses"
            styleClasses="h-10 md:h-11 px-8 md:px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-xs md:text-sm shadow-lg shadow-blue-50 transition-all hover:scale-105 active:scale-95 border-none"
            _this={_this}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CertifiedStudent;