"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { alumniStudents } from "@/data/alumniStudentsData";
import {
  Download,
  Star,
  Clock,
  Users,
  Trophy,
  Award,
  ClipboardList,
  Briefcase,
  Bot,
  Sparkles,
  Cpu,
  ArrowRight,
  Handshake,
  ShieldCheck,
  Monitor,
  Languages,
} from "lucide-react";

const heroImages = [
  "/assets/images/Data_Analytics_AI/hero-data-analytics-ai-kolkata.png",
  "/assets/images/Data_Analytics_AI/hero-powerbi-business-intelligence.png",
  "/assets/images/Data_Analytics_AI/hero-ai-data-analysis.png",
  "/assets/images/Data_Analytics_AI/mentor-support-data-analytics.webp",
  "/assets/images/Data_Analytics_AI/doubt-clearing-session.webp",
  "/assets/images/Data_Analytics_AI/mock-test-assessment.webp",
  "/assets/images/Data_Analytics_AI/portfolio-building-data-analytics.webp",
  "/assets/images/Data_Analytics_AI/placement-support-career.webp",
];

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState("0");

  useEffect(() => {
    const match = value.match(/([0-9.]+)/);
    if (!match) {
      setCount(value);
      return;
    }
    const target = parseFloat(match[1]);
    const isFloat = value.includes(".");
    const suffix = value.replace(match[1], "");

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * target;

      if (isFloat) {
        setCount(currentVal.toFixed(1) + suffix);
      } else {
        setCount(Math.floor(currentVal) + suffix);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function HeroSection({ _this }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trustMetrics = [
    {
      label: "4.8/5 Rating",
      sub: "Google & Justdial",
      icon: Star,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      label: "750+",
      sub: "Students Placed",
      icon: Users,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      label: "10+ Years",
      sub: "Legacy of Trust",
      icon: Trophy,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const highlights = [
    { label: "Live Interactive Classes", icon: VideoIcon },
    { label: "15+ Real-World Projects", icon: ClipboardList },
    { label: "Internship Certificate", icon: Award },
    { label: "100% Placement Support", icon: Briefcase },
  ];

  const tools = [
    { src: "/assets/images/Data_Analytics_Landing/icons/icons8-excel.svg", label: "Excel", isCustom: false },
    { src: "/assets/images/Data_Analytics_Landing/icons/mysql-Logo.svg", label: "SQL", isCustom: false },
    { src: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg", label: "Python", isCustom: false },
    { src: "/assets/images/Data_Analytics_Landing/icons/icons8-power-bi-logo.svg", label: "Power BI", isCustom: false },
    { src: "/assets/images/Data_Analytics_Landing/icons/Tableau.svg", label: "Tableau", isCustom: false },
    { src: "/assets/images/Data_Analytics_Landing/icons/chatgpt-logo.svg", label: "ChatGPT", isCustom: false },
    { label: "Claude", isCustom: true, component: <span className="w-5 h-5 flex items-center justify-center font-black text-[10px] bg-[#D97706]/10 text-[#D97706] rounded border border-[#D97706]/20">CL</span> },
    { label: "Gemini", isCustom: true, component: <Sparkles className="w-5 h-5 text-indigo-500 fill-indigo-500" /> },
    { label: "Agentic AI", isCustom: true, component: <Cpu className="w-5 h-5 text-purple-600" /> },
  ];

  const certifiedLogos = [
    { src: "/assets/images/Data_Analytics_Landing/Certifiedby.svg", alt: "IIMS Certified", width: 90, height: 35 },
    { src: "/assets/icons/ISOIcon.svg", alt: "ISO Certified", width: 45, height: 45 },
    { src: "/assets/icons/StartUpIndiaIcon.svg", alt: "Startup India", width: 90, height: 35 },
    { src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/TOI-logo.png", alt: "Times of India", width: 70, height: 30, isExternal: true },
    { src: "/assets/images/blog/abpnews 1.svg", alt: "ABP Ananda", width: 60, height: 30 },
    { src: "/assets/icons/TV9Logo.svg", alt: "TV9 Bangla", width: 35, height: 35 },
    { src: "/assets/images/blog/republic.svg", alt: "Republic Bharat", width: 65, height: 30 },
    { src: "/assets/images/indianews-logo.png", alt: "India News", width: 55, height: 30 },
    { src: "/assets/images/newsx-world-logo.webp", alt: "NewsX", width: 50, height: 30 },
    { src: "/assets/images/blog/dailyhunt.svg", alt: "Dailyhunt", width: 55, height: 30 },
    { src: "/assets/images/startup_pedia_logo.jpg", alt: "Startuppedia", width: 75, height: 30 },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#232D63] via-[#00A2E7] to-[#232D63]" />


      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-200/35 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-50/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Subtle Grid + Dot Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#cbd5e1 1.5px, transparent 1.5px),
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 pt-3 sm:pt-8 md:pt-12 pb-0 relative z-10">

        {/* Main Grid: Left copy, Right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">

          {/* ─── LEFT COLUMN (7 Cols on LG) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-6 w-full"
          >
            {/* Header pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100/60 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2E7] animate-pulse" />
              Data Analytics with AI · Kolkata
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-[#232D63] leading-[1.15] tracking-tight">
              Best Data Analytics with AI Course in Kolkata - <span className="text-[#00A2E7]">Build Your Career As a Certified Data Analyst</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-[#475569] text-xs sm:text-sm md:text-base lg:text-[15px] leading-relaxed">
              <span className="sm:hidden">
                {isDescExpanded ? (
                  <>
                    Secure your career with our AI-based data analytics course with placement in Kolkata, from basic to advanced level learning. Acquire knowledge of SQL, Excel, Advanced Excel, <span className="text-purple-600 font-bold">automation with Agentic AI</span>, and Python for Data Analysis. Define your profession as a Data Analyst with our personal mentors' guidance.
                    <button
                      onClick={() => setIsDescExpanded(false)}
                      className="text-[#00A2E7] font-bold ml-1 hover:underline focus:outline-none"
                    >
                      Read Less
                    </button>
                  </>
                ) : (
                  <>
                    Secure your career with our AI-based data analytics course with placement in Kolkata, from basic to advanced level learning...
                    <button
                      onClick={() => setIsDescExpanded(true)}
                      className="text-[#00A2E7] font-bold ml-1 hover:underline focus:outline-none"
                    >
                      Read More
                    </button>
                  </>
                )}
              </span>
              <span className="hidden sm:inline">
                Secure your career with our AI-based data analytics course with placement in Kolkata, from basic to advanced level learning. Acquire knowledge of SQL, Excel, Advanced Excel, <span className="text-purple-600 font-bold">automation with Agentic AI</span>, and Python for Data Analysis. Define your profession as a Data Analyst with our personal mentors' guidance.
              </span>
            </p>

            {/* Trust Metrics Row */}
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-1.5 sm:flex sm:gap-4 sm:items-center w-full">
              {trustMetrics.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-1 sm:gap-2 px-1.5 py-1 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow transition-shadow w-full">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ${item.bgColor}`}>
                      <IconComp className="w-3 h-3 sm:w-4 sm:h-4 text-[#00A2E7]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] sm:text-xs lg:text-sm font-black text-[#232D63] leading-tight">{item.label}</span>
                      <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#64748b] font-medium leading-none mt-0.5">{item.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Training Details */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:items-center sm:gap-6 pt-0.5 pb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                  <Monitor className="w-3.5 h-3.5 text-[#00A2E7]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-[#64748b] font-bold uppercase tracking-wider leading-none">Mode of Training</span>
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#232D63] leading-tight mt-0.5">Online &amp; Offline</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-slate-200 self-center"></div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                  <Languages className="w-3.5 h-3.5 text-[#00A2E7]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-[#64748b] font-bold uppercase tracking-wider leading-none">Language</span>
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#232D63] leading-tight mt-0.5">Bengali, English, &amp; Hindi</span>
                </div>
              </div>
            </div>

            {/* Pricing block */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#232D63]">₹75,000</span>
              <span className="text-sm sm:text-base text-[#94a3b8] line-through font-semibold">₹85,000</span>
              <span className="bg-[#E6F9F1] text-[#10B981] text-[10px] sm:text-xs font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#C6F6DF] shadow-sm">
                Save ₹10,000
              </span>
            </div>

            {/* CTA buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3.5 pt-1 w-full sm:w-auto">
              <button
                onClick={() => {
                  _this?.setCtaType?.("normal");
                  _this?.setIsModalOpen?.(true);
                }}
                className="flex items-center justify-center gap-1.5 bg-[#0057E2] hover:bg-[#0047c2] text-white font-bold px-3 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors shadow-md text-xs sm:text-sm lg:text-[15px] whitespace-nowrap"
              >
                Enrol Now <ArrowRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </button>
              <button
                onClick={() => {
                  _this?.setCtaType?.("download");
                  _this?.setIsModalOpen?.(true);
                }}
                className="flex items-center justify-center gap-1.5 border-2 border-sky-100 hover:border-sky-200 bg-white text-[#232D63] font-bold px-2 sm:px-7 py-3 sm:py-4 rounded-xl transition-colors text-xs sm:text-sm lg:text-[15px] whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#00A2E7]" /> Brochure
              </button>
            </div>

            {/* Highlight Badges Below Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-4 pt-1.5 border-t border-slate-100">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-sky-50 text-[#00A2E7]">
                      <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-[#475569] leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN (5 Cols on LG) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-5 relative w-full flex flex-col justify-end"
          >
            {/* Main Image Frame */}
            <div className="relative w-full rounded-2xl border border-slate-200 shadow-xl overflow-hidden h-[220px] sm:h-[380px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={heroImages[imgIdx]}
                  alt="Data Analytics Classroom"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Floating Pill Overlay 1: Power BI (Top Left) */}
              <div className="hidden sm:flex absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-lg items-center gap-2.5 z-20">
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src="/assets/images/Data_Analytics_Landing/icons/icons8-power-bi-logo.svg"
                    alt="Power BI"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 leading-none">Power BI</span>
                  <span className="text-[9px] text-slate-500 font-medium mt-0.5">Interactive Dashboards</span>
                </div>
              </div>

              {/* Floating Pill Overlay 2: AI Insights (Top Right) */}
              <div className="hidden sm:flex absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-lg items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-[#00A2E7]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 leading-none">AI Insights</span>
                  <span className="text-[9px] text-slate-500 font-medium mt-0.5">Smarter Decisions with AI</span>
                </div>
              </div>

              {/* Floating Pill Overlay 3: Placement Support (Bottom Right) */}
              <div className="hidden sm:flex absolute bottom-24 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-lg items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 leading-none">Placement Support</span>
                  <span className="text-[9px] text-slate-500 font-medium mt-0.5">Resume, Interview &amp; Career</span>
                </div>
              </div>

              {/* Bottom Dark Stats Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#232D63] border-t border-white/10 grid grid-cols-4 divide-x divide-white/10 z-20">
                <div className="flex flex-col items-center justify-center px-1 text-center">
                  <span className="text-sm sm:text-base font-black text-white">750+</span>
                  <span className="text-[9px] text-white/70 font-medium mt-0.5 leading-none">Students Placed</span>
                </div>
                <div className="flex flex-col items-center justify-center px-1 text-center">
                  <span className="text-sm sm:text-base font-black text-white">6 Months</span>
                  <span className="text-[9px] text-white/70 font-medium mt-0.5 leading-none">Duration</span>
                </div>
                <div className="flex flex-col items-center justify-center px-1 text-center">
                  <span className="text-sm sm:text-base font-black text-white">4.8/5</span>
                  <span className="text-[9px] text-white/70 font-medium mt-0.5 leading-none">Average Rating</span>
                </div>
                <div className="flex flex-col items-center justify-center px-1 text-center">
                  <span className="text-sm sm:text-base font-black text-white">100%</span>
                  <span className="text-[9px] text-white/70 font-medium mt-0.5 leading-none">Placement Support</span>
                </div>
              </div>
            </div>

            {/* ─── Latest Success Stories OF EME Academy strip ─────────────────── */}
            <div className="pt-6 sm:pt-8 w-full">
              <div className="flex flex-col gap-3.5">
                <span className="text-[10px] sm:text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                  Latest Success Stories OF EME Academy
                </span>
                <div className="relative w-full overflow-hidden">
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes marquee-success {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-success {
                      display: flex;
                      width: max-content;
                      animation: marquee-success 40s linear infinite;
                    }
                    .animate-marquee-success:hover {
                      animation-play-state: paused;
                    }
                  `}} />

                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  <div className="animate-marquee-success gap-4 sm:gap-6">
                    {/* First set of success stories */}
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                      {alumniStudents.slice(0, 15).map((student, i) => (
                        <div key={`alumni1-${i}`} className="flex items-center gap-3 p-2 pr-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 relative">
                            <Image
                              src={student.img}
                              alt={student.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-none mb-1">{student.title}</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-none">Placed at</span>
                              {student.companyLogo && student.companyLogo !== "/assets/icons/companies/default.svg" ? (
                                <div className="h-3 sm:h-4 relative min-w-[48px]">
                                  <Image
                                    src={student.companyLogo}
                                    alt={student.companyName}
                                    fill
                                    className="object-contain object-left"
                                  />
                                </div>
                              ) : (
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 leading-none">{student.companyName}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Duplicate set for seamless looping */}
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0" aria-hidden="true">
                      {alumniStudents.slice(0, 15).map((student, i) => (
                        <div key={`alumni2-${i}`} className="flex items-center gap-3 p-2 pr-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 relative">
                            <Image
                              src={student.img}
                              alt={student.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-none mb-1">{student.title}</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-none">Placed at</span>
                              {student.companyLogo && student.companyLogo !== "/assets/icons/companies/default.svg" ? (
                                <div className="h-3 sm:h-4 relative min-w-[48px]">
                                  <Image
                                    src={student.companyLogo}
                                    alt={student.companyName}
                                    fill
                                    className="object-contain object-left"
                                  />
                                </div>
                              ) : (
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 leading-none">{student.companyName}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ─── Certified & Featured By strip (Auto Marquee Scrolling) ──────────────── */}
        <div className="border-t border-slate-100 py-6 mt-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
              Certified &amp; Featured By
            </span>

            <div className="relative w-full overflow-hidden py-2">
              {/* Fade masks for visual premium feeling */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee-custom {
                  display: flex;
                  width: max-content;
                  animation: marquee 30s linear infinite;
                }
                .animate-marquee-custom:hover {
                  animation-play-state: paused;
                }
              `}} />

              <div className="animate-marquee-custom gap-6 sm:gap-12">
                {/* First set of logos */}
                <div className="flex items-center gap-6 sm:gap-12 shrink-0">
                  {certifiedLogos.map((logo, i) => (
                    <div key={`set1-${i}`} className="relative opacity-75 hover:opacity-100 transition-opacity">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain max-h-[22px] sm:max-h-[35px] w-auto h-auto"
                        unoptimized={logo.isExternal}
                      />
                    </div>
                  ))}
                </div>

                {/* Duplicate set of logos for seamless looping */}
                <div className="flex items-center gap-6 sm:gap-12 shrink-0" aria-hidden="true">
                  {certifiedLogos.map((logo, i) => (
                    <div key={`set2-${i}`} className="relative opacity-75 hover:opacity-100 transition-opacity">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain max-h-[22px] sm:max-h-[35px] w-auto h-auto"
                        unoptimized={logo.isExternal}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
}

// Custom simple video camera icon for badge list to prevent Lucide import warnings
function VideoIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
