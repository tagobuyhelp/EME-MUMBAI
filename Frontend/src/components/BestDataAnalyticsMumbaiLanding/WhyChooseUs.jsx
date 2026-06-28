"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Video,
  Award,
  ClipboardList,
  FolderOpen,
  HelpCircle,
  Users,
  UserCheck,
  Briefcase,
  TrendingUp,
  Handshake,
  ShieldAlert
} from "lucide-react";

const highlightItems = [
  {
    label: "Live Interactive Classes",
    desc: "Engaging live sessions where you learn, ask questions and grow in real-time.",
    icon: Video,
    bgColor: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    label: "Industry-Experienced Trainers",
    desc: "Learn from professionals who bring real-world experience and practical insights.",
    icon: Award,
    bgColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    label: "Practical Assignments",
    desc: "Hands-on assignments designed to build skills and boost your confidence.",
    icon: ClipboardList,
    bgColor: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    label: "Real Projects",
    desc: "Work on real-time projects that prepare you for actual industry challenges.",
    icon: FolderOpen,
    bgColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    label: "Doubt-Clearing Sessions",
    desc: "Get your doubts resolved quickly in dedicated support sessions.",
    icon: HelpCircle,
    bgColor: "bg-pink-50 text-pink-600 border-pink-100",
  },
  {
    label: "Small Batch Sizes",
    desc: "Focused learning in small batches for personalized attention.",
    icon: Users,
    bgColor: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    label: "Personalized Mentorship",
    desc: "One-on-one mentorship to guide you at every step of your journey.",
    icon: UserCheck,
    bgColor: "bg-yellow-50 text-yellow-700 border-yellow-100",
  },
  {
    label: "Career Guidance",
    desc: "Expert guidance to help you choose the right path and achieve your goals.",
    icon: Briefcase,
    bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    label: "Interview Preparation",
    desc: "Resume building, mock interviews and tips to help you crack your dream job.",
    icon: TrendingUp,
    bgColor: "bg-lime-50 text-lime-700 border-lime-100",
  },
  {
    label: "Placement Assistance",
    desc: "End-to-end placement support to help you land the right opportunity.",
    icon: Handshake,
    bgColor: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export default function WhyChooseUs({ _this }) {
  return (
    <section className="relative w-full bg-[#FAFBFD] py-16 md:py-20 overflow-hidden border-t border-slate-100">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-sky-100/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-12 relative z-10">
        
        {/* Header Layout: 2-Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100/60 shadow-sm w-fit">
              <Award className="w-3.5 h-3.5" />
              Why Choose EME Academy?
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black text-[#232D63] leading-tight tracking-tight">
              We believe learning should prepare you for the workplace, <br className="hidden sm:inline" />
              <span className="text-[#00A2E7]">not just help you complete a course.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-500 text-xs sm:text-[14px] leading-relaxed max-w-2xl">
              EME Academy aims to provide the best training that stays mentor-led, practical and focused on job readiness, not just course completion, in a classroom where confusion gets solved instead of judged.
            </p>

          </div>

          {/* Right Column: Illustration Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Subtle background circles for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/50 to-transparent rounded-full filter blur-xl scale-75 pointer-events-none" />
            
            <div className="relative w-full max-w-[360px] lg:max-w-[420px] aspect-[4/3] sm:aspect-[1.3] flex justify-center items-center">
              <Image
                src="/assets/images/Data_Analytics_Landing/why-choose-image.png"
                alt="Why Choose EME Academy"
                width={500}
                height={380}
                className="w-full h-auto object-contain drop-shadow-md relative z-10"
                priority
              />
            </div>
          </div>

        </div>

        {/* Mobile Swipeable List (Visible on mobile/tablet) */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-[20px] px-[20px] scrollbar-none w-full">
          {highlightItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="snap-center shrink-0 w-[250px] bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center p-5 gap-3"
              >
                {/* Circle Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-inner ${item.bgColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Label Title */}
                <span className="text-sm font-extrabold text-[#232D63] leading-snug">
                  {item.label}
                </span>

                {/* Description Text */}
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 10-Card Responsive Grid Layout (Visible on desktop/tablet grid) */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5">
          {highlightItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#00A2E7]/20 transition-all flex flex-col items-center text-center p-6 gap-3 group cursor-default"
              >
                {/* Circle Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-inner ${item.bgColor} group-hover:-translate-y-1 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Label Title */}
                <span className="text-sm font-extrabold text-[#232D63] leading-snug group-hover:text-[#00A2E7] transition-colors">
                  {item.label}
                </span>

                {/* Description Text */}
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
      
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
