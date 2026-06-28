"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Download,
  BarChart2,
  Cpu,
  Cloud,
  Briefcase,
  User,
  Award,
  FolderPlus,
  Users,
  Check,
  Sparkles,
} from "lucide-react";

const toolIcons = [
  { src: "/assets/images/Data_Analytics_Landing/icons/icons8-excel.svg", name: "Excel" },
  { src: "/assets/images/Data_Analytics_Landing/icons/mysql-Logo.svg", name: "SQL" },
  { src: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg", name: "Python" },
  { src: "/assets/images/Data_Analytics_Landing/icons/icons8-power-bi-logo.svg", name: "Power BI" },
  { src: "/assets/images/Data_Analytics_Landing/icons/Tableau.svg", name: "Tableau" },
  { src: "/assets/images/Data_Analytics_Landing/icons/chatgpt-logo.svg", name: "AI Tools" },
  { src: "/assets/images/Data_Analytics_Landing/icons/bar-chart-logo.svg", name: "Statistics" },
  { src: "/assets/images/Data_Analytics_Landing/icons/SAS-logo.svg", name: "SAS" },
];

const topics = [
  {
    num: "01",
    category: "Advanced Excel",
    badge: "12 Topics",
    duration: "4 Weeks",
    projects: "1 Project",
    tools: "Excel",
    icon: BarChart2,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    skills: [
      "Data Analytics Introduction",
      "Excel Fundamentals",
      "Logical & Conditional Functions",
      "Text Functions",
      "Sorting, Filtering & Data Validation",
      "Lookup Functions & Pivot Tables",
      "Charts, Graphs & Dashboard Creation",
      "Excel Project",
    ],
  },
  {
    num: "02",
    category: "SQL / MySQL",
    badge: "13 Topics",
    duration: "4 Weeks",
    projects: "1 Project",
    tools: "MySQL",
    icon: Cpu,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    color: "bg-purple-50 text-purple-700 border-purple-100",
    skills: [
      "SQL Introduction & MySQL Installation",
      "Data Types & SQL Operators",
      "DDL, DML, DCL, DQL, TCL",
      "Database & Table Management",
      "Importing Data, Aggregation & Grouping",
      "Subqueries & Window Functions",
      "Stored Procedures & SQL Views",
      "SQL Project",
    ],
  },
  {
    num: "03",
    category: "Power BI",
    badge: "12 Topics",
    duration: "4 Weeks",
    projects: "1 Project",
    tools: "Power BI",
    icon: BarChart2,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    skills: [
      "Data Visualization & Reporting",
      "Power BI Fundamentals & Data Source Connections",
      "Power Query & Data Modeling",
      "Table Relationships & DAX Calculations",
      "Dashboard Development",
      "Advanced Power BI & Statistics Basics",
      "Power BI Project",
    ],
  },
  {
    num: "04",
    category: "Python for Data Analytics",
    badge: "10 Topics",
    duration: "4 Weeks",
    projects: "1 Project",
    tools: "Python, Pandas, NumPy",
    icon: Sparkles,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    skills: [
      "Python Basics, Variables & Data Types",
      "Data Structures & Date & Time Functions",
      "Error Handling & Libraries & Packages",
      "NumPy & Pandas",
      "Data Visualization",
      "Analytics Projects",
    ],
  },
  {
    num: "05",
    category: "Tableau",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "—",
    tools: "Tableau",
    icon: Cloud,
    iconColor: "text-sky-600",
    bgColor: "bg-sky-50",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    skills: [
      "Data Visualization & Reporting",
      "Connecting Data Sources",
    ],
  },
];

const highlights = [
  { label: "15+ Real-world Projects", color: "bg-blue-50 text-blue-600 border-blue-100", icon: FolderPlus },
  { label: "Internship Certificate", color: "bg-purple-50 text-purple-600 border-purple-100", icon: Award },
  { label: "Industry Expert Mentorship", color: "bg-emerald-50 text-emerald-600 border-emerald-100", icon: Users },
  { label: "Placement Preparation", color: "bg-amber-50 text-amber-700 border-amber-100", icon: Briefcase },
  { label: "AI Automation Labs", color: "bg-rose-50 text-rose-600 border-rose-100", icon: Sparkles },
];

export default function SkillsCurriculum({ _this }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 border-t border-slate-100 overflow-hidden">
      {/* Subtle Grid + Dot Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
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
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-6 sm:gap-8 md:gap-10 relative z-10">

        {/* Header Title & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2E7] animate-pulse" />
              Full Curriculum
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#232D63] leading-tight tracking-tight">
              What Skills You’ll Master in Our <span className="text-[#00A2E7]">Data Analytics Course with AI in Kolkata</span>
            </h2>
            <p className="text-[#64748b] text-xs sm:text-[15px] leading-relaxed">
              A structured, industry-aligned curriculum that takes you from zero to job-ready across 5 learning tracks.
            </p>
          </div>
          <button
            onClick={() => {
              _this?.setCtaType?.("download");
              _this?.setIsModalOpen?.(true);
            }}
            className="flex items-center gap-2 border-2 border-[#232D63] text-[#232D63] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#232D63] hover:text-white transition-colors text-xs sm:text-sm self-start md:self-auto"
          >
            <Download className="w-3.5 h-3.5" /> Download Full Syllabus
          </button>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ─── LEFT COLUMN (5 Cols: Dashboard Card + Master Tools + Badges) ─── */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Overlay Dashboard Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] w-full">
              <Image
                src="/assets/images/Data_Analytics_AI/data-analytics-tools-mastery.png"
                alt="Data Scientist Working"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-[#232D63]/20" />

              {/* Float Overlay 1: AI Assistant (Top Left) */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-lg max-w-[210px]">
                <div className="w-8 h-8 rounded-full bg-[#232D63]/5 flex items-center justify-center border border-slate-100 shrink-0">
                  <Cpu className="w-4 h-4 text-[#232D63]" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[10px] font-black text-[#232D63] leading-none">AI Assistant</span>
                  <span className="text-[8px] text-[#64748b] truncate leading-tight">Analyze customer churn prediction for Q4 data</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00A2E7] flex items-center justify-center shrink-0 shadow-sm ml-auto">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-white rotate-45">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>

              {/* Float Overlay 2: Power BI Dashboard (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-lg min-w-[130px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-amber-50 rounded flex items-center justify-center">
                    <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-800 leading-none">Power BI Dashboard</span>
                    <span className="text-[7px] text-[#64748b] leading-none mt-0.5">Real-time Business Insights</span>
                  </div>
                </div>
                {/* Visual miniature chart */}
                <div className="flex items-end gap-1 h-5 justify-between px-1">
                  {[20, 40, 30, 60, 45, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-t bg-sky-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Float Overlay 3: SQL Query (Bottom Left) */}
              <div className="absolute bottom-4 left-4 bg-[#050D1A]/90 backdrop-blur-sm border border-slate-800 rounded-xl p-3 shadow-xl max-w-[240px] text-white">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wide">SQL Query</span>
                <div className="font-mono text-[8px] sm:text-[9px] leading-relaxed mt-1.5 text-slate-300 flex flex-col gap-0.5">
                  <div><span className="text-pink-400">SELECT</span> product, <span className="text-yellow-400">SUM</span>(sales)</div>
                  <div><span className="text-pink-400">FROM</span> sales_data</div>
                  <div><span className="text-pink-400">WHERE</span> year = <span className="text-emerald-400">2024</span></div>
                  <div><span className="text-pink-400">GROUP BY</span> product;</div>
                </div>
              </div>
            </div>

            {/* Key Industry Tools Grid */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col gap-3 shadow-sm">
              <h3 className="text-xs sm:text-sm font-black text-[#232D63] uppercase tracking-wider">
                Key Industry Tools You'll Master
              </h3>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                {toolIcons.map((tool, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 group cursor-default"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-slate-200 transition-all p-2">
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold leading-none">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* highlights badges */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((feat, i) => {
                const FeatIcon = feat.icon;
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold px-3 py-2 rounded-xl border shadow-sm ${feat.color}`}
                  >
                    <FeatIcon className="w-3.5 h-3.5" />
                    {feat.label}
                  </span>
                );
              })}
            </div>

          </div>

          {/* ─── RIGHT COLUMN (7 Cols: Your Learning Journey Timeline Accordion) ─── */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            
            {/* Journey Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#232D63]">
                <Cpu className="w-3.5 h-3.5 text-[#00A2E7]" />
                Your Learning Journey
              </span>
              <span className="text-[11px] sm:text-xs font-black text-[#00A2E7]">
                7 Learning Tracks
              </span>
            </div>

            {/* Timeline Accordions */}
            <div className="relative flex flex-col gap-3.5 pl-7 sm:pl-9">
              
              {/* Vertical dotted timeline line */}
              <div className="absolute left-3.5 sm:left-4.5 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-sky-100 pointer-events-none" />

              {topics.map((topic, i) => {
                const TopicIcon = topic.icon;
                const isOpen = openIdx === i;

                return (
                  <div key={i} className="relative w-full">
                    
                    {/* Timeline bullet circle absolute */}
                    <div
                      className={`absolute -left-7 sm:-left-9 top-3.5 w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center font-black text-[9px] sm:text-[11px] border-2 shadow-sm transition-colors z-10 ${
                        isOpen
                           ? "bg-[#00A2E7] border-[#00A2E7] text-white"
                           : "bg-white border-sky-100 text-[#00A2E7]"
                      }`}
                    >
                      {topic.num}
                    </div>

                    {/* Accordion Card */}
                    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between p-3.5 gap-3.5"
                      >
                        {/* Title and Icon */}
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${topic.bgColor}`}>
                            <TopicIcon className={`w-4 h-4 ${topic.iconColor}`} />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs sm:text-[15px] text-[#232D63] leading-tight">
                                {topic.category}
                              </span>
                              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full border leading-none ${topic.color}`}>
                                {topic.badge}
                              </span>
                            </div>
                            <span className="text-[9px] text-slate-500 leading-none mt-0.5 font-semibold">
                              Tools: {topic.tools}
                            </span>
                          </div>
                        </div>

                        {/* Track Specs (Chevron only) */}
                        <div className="flex items-center gap-4 sm:gap-5 self-start sm:self-auto pl-11.5 sm:pl-0">
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-350 shrink-0 ${
                              isOpen ? "rotate-180 text-[#00A2E7]" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expandable Topic list */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="px-4.5 pb-4 pt-1.5 bg-[#F8FAFF] flex flex-col gap-2 border-t border-slate-50">
                              {topic.skills.map((skill, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                                  <span className="mt-1.5 shrink-0 w-1.2 h-1.2 rounded-full bg-[#00A2E7]" />
                                  <span>{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Timeline Bottom CTA Banner */}
            <div className="bg-sky-50 rounded-2xl border border-sky-100 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#00A2E7]/10 flex items-center justify-center border border-[#00A2E7]/20 shrink-0">
                  <Check className="w-4 h-4 text-[#00A2E7]" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-black text-[#232D63]">From Learning to Earning – We've Got You Covered!</span>
                  <span className="text-[9px] sm:text-[11px] text-slate-500 font-semibold leading-tight">Industry-relevant curriculum, real projects and complete career support.</span>
                </div>
              </div>
              <button
                onClick={() => {
                  _this?.setCtaType?.("download");
                  _this?.setIsModalOpen?.(true);
                }}
                className="bg-[#232D63] hover:bg-[#1a2252] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shrink-0 transition-colors shadow-sm self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" /> Download Syllabus
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
