'use client';
import React from "react";
import { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import CTAButton from "./CtaButton";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Clock, 
  Zap, 
  Briefcase, 
  CreditCard 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Mentors",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "100% Placement",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Clock,
    title: "Flexible Batches",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Hands-on Projects",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: CreditCard,
    title: "Easy EMI Options",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function WhyChooseEMECard({ Courses, SelectCourses = [], email_sender, Brochure, BrochureName, backgroundImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  return (
    <section 
      className="w-full relative py-8 md:py-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[10px] md:text-xs text-white font-bold bg-white/10 backdrop-blur-md"
            >
              <Zap className="h-3.5 w-3.5 text-blue-400" />
              Our Learning Edge
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-black text-white leading-tight"
            >
              Why Choose <span className="text-blue-400">EME</span> Methodology?
            </motion.h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="group bg-white/95 backdrop-blur-sm border-none rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-3 md:gap-4 cursor-default">
                  <div className={`h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl ${feature.bg} flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-12`}>
                    <feature.icon className={`h-4 w-4 md:h-5 md:w-5 ${feature.color}`} />
                  </div>
                  <p className="text-[11px] md:text-[13px] font-black text-gray-800 leading-tight">
                    {feature.title}
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
              styleClasses="h-10 md:h-11 px-8 md:px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs md:text-sm shadow-xl shadow-blue-900/40 transition-all hover:scale-105 active:scale-95 border-none"
              _this={_this}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
