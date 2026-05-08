"use client";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import CTAButton from "./CtaButton";
import { motion } from "framer-motion";
import { 
  Award, 
  Target, 
  Clock, 
  Zap, 
  LifeBuoy, 
  CreditCard,
  CheckCircle2 
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry-Expert Mentors",
    subtitle: "Learn directly from certified experts who bring years of actual corporate experience into the classroom, not just textbook theory.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "100% Placement",
    subtitle: "We stand by you with rigorous interview coaching, resume optimization, and direct referrals to hiring partners until you secure an offer.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Clock,
    title: "Adaptive Timings",
    subtitle: "Designed to fit your life. Whether you are a college student or a working professional, our flexible batches ensure learning never stops.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Project-Based Curriculum",
    subtitle: "Stop memorizing and start executing. Build a compelling portfolio of projects that prove your skills to recruiters.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: LifeBuoy,
    title: "Career Guidance",
    subtitle: "Your journey doesn't end with a certificate. Get continuous mentorship, upskilling advice, and career roadmaps even after you graduate.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: CreditCard,
    title: "EMI Options",
    subtitle: "Enjoy affordable learning with easy, no-cost monthly EMI options. Invest in your future with easy monthly installments.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function WhyEMEAcademy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = "All Course";
  const email_sender = "ALL";
  const SelectCourses = [
    "Data Analytics Course", "Sap Course", "Digital Marketing Course",
    "HR Management Course", "Web Development Course", "Data Science Course",
    "Graphics Designing Course", "Cyber Security Course", "UI UX Course",
    "Animation & VFX Course", "Cloud Computing Course", "Prompt Engineering with AI Course",
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
    <section className="w-full py-8 md:py-12 bg-[#F8FAFC] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 px-3 py-1 text-[10px] md:text-xs text-[#0057E2] font-bold bg-blue-50/50"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              The EME Edge
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-black text-gray-900 leading-tight"
            >
              What Makes EME Academy the <span className="text-[#0057E2]">Smart Choice</span>?
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-1.5 w-16"
            >
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="line"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full p-4 md:p-5 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,87,226,0.08)] transition-all duration-500 group flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 md:h-11 md:w-11 rounded-lg md:rounded-xl ${feature.bg} flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                      <feature.icon className={`h-5 w-5 md:h-5.5 md:w-5.5 ${feature.color}`} />
                    </div>
                    <h3 className="text-base md:text-lg font-black text-gray-800 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-[12px] md:text-[13px] leading-relaxed flex-1">
                    {feature.subtitle}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <CTAButton 
              name="Enroll Now"
              styleClasses="h-10 md:h-11 px-8 md:px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-xs md:text-sm shadow-lg shadow-blue-50 transition-all hover:scale-105 active:scale-95 border-none"
              _this={_this}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
