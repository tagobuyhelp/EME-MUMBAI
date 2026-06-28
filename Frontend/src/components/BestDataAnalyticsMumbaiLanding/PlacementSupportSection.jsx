"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FileText,
  MessageSquare,
  UserCheck,
  Handshake,
  Check,
  Users,
  BarChart,
  Building2,
  Award,
  FileCheck2,
  CheckCircle2,
  Briefcase,
  Rocket,
  Calendar,
} from "lucide-react";

const stats = [
  {
    value: "100%",
    label: "Placement Assistance",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    value: "750+",
    label: "Students Placed",
    icon: BarChart,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    value: "300+",
    label: "Hiring Partners",
    icon: Building2,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    value: "10+ Years",
    label: "Of Trust",
    icon: Award,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const supports = [
  {
    title: "Resume & LinkedIn",
    icon: FileText,
    borderColor: "border-t-[#3b82f6]", // Blue
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    checkColor: "text-blue-500",
    lineColor: "bg-blue-500",
    points: [
      "ATS-friendly Resume Building",
      "LinkedIn Profile Optimisation",
      "Build a professional online presence for recruiters",
    ],
  },
  {
    title: "Interview Preparation",
    icon: MessageSquare,
    borderColor: "border-t-[#f43f5e]", // Rose
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50 border-rose-100",
    checkColor: "text-rose-500",
    lineColor: "bg-rose-500",
    points: [
      "Mock Interviews",
      "HR Interview Preparation",
      "Technical Interview Preparation",
    ],
  },
  {
    title: "Career & Updates",
    icon: Handshake,
    borderColor: "border-t-[#f59e0b]", // Amber
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
    checkColor: "text-amber-500",
    lineColor: "bg-amber-500",
    points: [
      "Honest Career Counselling",
      "Job Opportunity Updates",
      "Skill gaps get addressed before you apply",
    ],
  },
];

export default function PlacementSupportSection({ _this }) {
  return (
    <section className="w-full bg-[#f8faff] py-8 sm:py-12 md:py-16 border-t border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-8 md:gap-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          <div className="flex flex-col gap-5 lg:w-[55%]">
            <div className="flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#232D63] border border-slate-200 shadow-sm w-fit">
                <Briefcase className="w-3.5 h-3.5 text-[#00A2E7]" />
                Placement Assistance
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-[#232D63] leading-[1.15] tracking-tight">
                We assist in making you <br className="hidden sm:block" />
                <span className="text-[#00A2E7]">Job-Ready.</span>
              </h2>
              <p className="text-[#475569] text-xs sm:text-[15px] leading-relaxed max-w-2xl mt-0.5">
                While no academy can guarantee a job, EME Academy assists in making you job-ready. We never just promised something that depends entirely on chance. Our goal is to help you become interview-ready with confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 pt-3">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                      <StatIcon className={`w-4 h-4 ${stat.iconColor}`} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-black text-base text-[#1e293b] leading-none">{stat.value}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#64748b] leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-[45%] w-full relative max-w-lg mx-auto lg:mx-0 mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/50 aspect-[4/3] bg-white">
              <Image 
                src="/assets/images/Data_Analytics_Landing/data-analyst-career-placement.png" 
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>

            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-3 sm:-left-10 top-5 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Resume Shortlisted</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-emerald-600">ATS Score 92%</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-1 sm:-left-6 bottom-10 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Interview Scheduled</span>
                <span className="text-[8px] sm:text-[9px] text-slate-500">Data Analyst Role</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-3 sm:-right-6 top-[-16px] sm:top-[-8px] bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                <Users className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Placed Successfully</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-emerald-600">Dream Job Achieved!</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-2">
          {supports.map((support, i) => {
            const IconComponent = support.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                 className={`flex flex-col bg-white rounded-2xl border-t-4 border-l border-r border-b border-slate-100 hover:border-b-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${support.borderColor}`}
              >
                <div className="flex items-center gap-3.5 px-4 pt-5 pb-1.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${support.iconBg}`}>
                    <IconComponent className={`w-4.5 h-4.5 ${support.iconColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-[#1e293b] text-sm sm:text-[15px] leading-tight">
                      {support.title}
                    </h3>
                    <div className={`w-7 h-[1.5px] rounded-full mt-1 ${support.lineColor}`}></div>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 px-4 pb-5 pt-2">
                  {support.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${support.checkColor}`} strokeWidth={3} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-[#f1f5f9] rounded-2xl border border-slate-200 p-4 sm:p-5 lg:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3.5 sm:gap-4.5 z-10">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 relative">
              <div className="absolute inset-0 bg-blue-50 rounded-full opacity-50" />
              <Rocket className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 text-blue-600 relative z-10 -rotate-12" />
            </div>
            
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm sm:text-base font-black text-[#1e293b]">Ready to Launch Your Data Analytics Career?</h3>
              <p className="text-slate-600 text-xs">Join EME Academy — where skills meet opportunity.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 shrink-0 z-10">
            <button
              onClick={() => {
                _this?.setCtaType?.("normal");
                _this?.setIsModalOpen?.(true);
              }}
              className="bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              Enrol Now →
            </button>
            <button
              onClick={() => {
                _this?.setCtaType?.("normal");
                _this?.setIsModalOpen?.(true);
              }}
              className="bg-white border-2 border-[#0052cc] text-[#0052cc] font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" /> Free Counselling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
