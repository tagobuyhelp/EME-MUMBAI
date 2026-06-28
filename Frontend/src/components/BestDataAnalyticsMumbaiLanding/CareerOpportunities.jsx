"use client";
import React from "react";
import Image from "next/image";
import {
  Briefcase,
  Building,
  Heart,
  GraduationCap,
  Code,
  ShoppingCart,
  Users,
  Target,
  BarChart3,
  User,
  PieChart,
  FileSpreadsheet,
  LineChart,
  BarChart,
  Settings,
  ShieldCheck,
  Monitor,
  Check
} from "lucide-react";

const industries = [
  { name: "Finance", icon: Building, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Healthcare", icon: Heart, color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "Edtech", icon: GraduationCap, color: "bg-amber-50 text-amber-700 border-amber-200" },
  { name: "IT", icon: Code, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "E-Commerce", icon: ShoppingCart, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "Consulting", icon: Users, color: "bg-purple-50 text-purple-700 border-purple-200" },
];

const rolesData = [
  { title: "Data Analyst", salary: "₹4.5 – 8.0 LPA", icon: BarChart3, iconColor: "text-blue-500 bg-blue-50" },
  { title: "Junior Data Analyst", salary: "₹3.0 – 5.0 LPA", icon: User, iconColor: "text-sky-500 bg-sky-50" },
  { title: "Business Analyst", salary: "₹6.0 – 11.0 LPA", icon: PieChart, iconColor: "text-indigo-500 bg-indigo-50" },
  { title: "MIS Executive", salary: "₹3.0 – 6.0 LPA", icon: FileSpreadsheet, iconColor: "text-blue-500 bg-blue-50" },
  { title: "Reporting Analyst", salary: "₹3.5 – 7.0 LPA", icon: LineChart, iconColor: "text-sky-500 bg-sky-50" },
  { title: "Data Visualisation Analyst", salary: "₹5.0 – 10.0 LPA", icon: BarChart, iconColor: "text-indigo-500 bg-indigo-50" },
  { title: "Operations Analyst", salary: "₹4.0 – 8.5 LPA", icon: Settings, iconColor: "text-blue-500 bg-blue-50" },
];

const whoIsThisFor = [
  "College Students",
  "Fresh Graduates",
  "Working Professionals",
  "Career Switchers",
  "Business Owners wanting to understand data",
  "Anyone interested in analytics without prior experience",
];

export default function CareerOpportunities({ _this }) {
  return (
    <section className="w-full bg-[#FAFBFD] py-16 md:py-20 border-t border-slate-100 relative overflow-hidden">
      {/* Background glow graphics to match design */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-sky-100/30 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-12">
        
        {/* Main Section Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Texts, Industry Badges, Roles, and Standard Salary Banner */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Title badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100/60 shadow-sm w-fit">
              <Briefcase className="w-3.5 h-3.5" />
              Career Outlook
            </span>

            {/* Main Header and Description */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black text-[#232D63] leading-tight tracking-tight">
                Why Is Data Analytics One of the <br className="hidden sm:inline" />
                <span className="text-[#00A2E7]">Fastest-Growing Careers</span> Today?
              </h2>
              <p className="text-slate-500 text-xs sm:text-[14px] leading-relaxed">
                In this digital era, Businesses today rely on better decision-making for improved customer satisfaction and results, for which a skilled Data Analyst is in demand. The job opportunities are beyond your thoughts; it is required across almost all industries, including Finance, Healthcare, Edtech, IT, e-commerce, consulting, and more.
              </p>
            </div>

            {/* Industry Badges row */}
            <div className="flex flex-wrap gap-2.5 py-1">
              {industries.map((ind, i) => {
                const IndIcon = ind.icon;
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1.5 rounded-full border shadow-sm transition-all hover:translate-y-[-1px] cursor-default ${ind.color}`}
                  >
                    <IndIcon className="w-3.5 h-3.5" />
                    {ind.name}
                  </span>
                );
              })}
            </div>

            {/* Career Opportunities Subheading */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-base sm:text-lg font-black text-[#232D63] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#00A2E7]" />
                Career Opportunities After This Course
              </h3>

              {/* Blue Highlight Card */}
              <div className="bg-[#EBF7FF] border-l-4 border-[#00A2E7] rounded-r-2xl p-5 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#00A2E7] border border-blue-100 shadow-sm shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-[13px] text-[#232D63] font-medium leading-relaxed">
                  A data analytics course in Mumbai built around real practice, not slides. You get hands-on work with Excel, SQL, Power BI and Python. With mentor support, resume building, interview preparation, mock interviews, a real capstone project for your portfolio and honest career counselling along the way, career opportunities, such as:
                </p>
              </div>

              {/* 7 Roles Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {rolesData.map((role, idx) => {
                  const RoleIcon = role.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex items-center gap-4"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${role.iconColor} shadow-inner`}>
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs sm:text-[14px] font-extrabold text-[#232D63] group-hover:text-[#00A2E7] transition-colors leading-tight">
                          {role.title}
                        </span>
                        <span className="text-[11px] text-slate-400 font-bold">{role.salary}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Standard Salary Range Banner */}
            <div className="bg-gradient-to-r from-[#010b1e] to-[#041d40] text-white rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800/80 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center border border-blue-500/50 shrink-0 shadow-inner">
                  <span className="text-xl font-black text-white">₹</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">STANDARD SALARY RANGE</span>
                  <span className="text-xl sm:text-2xl font-black leading-none mt-1 text-white">₹4.0 – 12.0 LPA</span>
                </div>
              </div>
              <button
                onClick={() => {
                  _this?.setCtaType?.("normal");
                  _this?.setIsModalOpen?.(true);
                }}
                className="bg-[#00A2E7] hover:bg-[#0090ce] text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm text-center transition-all shadow-md shrink-0 flex items-center gap-2 hover:translate-x-[2px]"
              >
                Get Curriculum Details
                <span className="font-bold">→</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Illustration Graphic & Is Data Analytics Right For You Card */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            
            {/* Top Illustration Graphic */}
            <div className="relative w-full flex justify-center">
              <Image
                src="/assets/images/Data_Analytics_Landing/CareerProspectsImage.svg"
                alt="Career Prospects Illustration"
                width={645}
                height={394}
                className="w-full h-auto object-contain max-w-[480px] mx-auto lg:mx-0 drop-shadow-md"
                priority
              />
            </div>

            {/* Right-hand side Vertical Container Card */}
            <div className="bg-gradient-to-b from-[#062c6f] to-[#031d4e] text-white rounded-3xl p-6 shadow-2xl flex flex-col gap-6 border border-[#1e4896]/30">
              
              {/* Header inside right column container */}
              <div className="flex gap-4 items-start border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#00A2E7] border border-white/20 shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                    Is Data Analytics Right For You?
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    This data analytics course in Mumbai is ideally designed for:
                  </p>
                </div>
              </div>

              {/* List of 6 items */}
              <div className="flex flex-col gap-4">
                {whoIsThisFor.map((item, idx) => (
                  <div key={idx} className="flex gap-3.5 items-center">
                    <div className="w-5.5 h-5.5 rounded-full bg-blue-500/20 text-[#00A2E7] flex items-center justify-center border border-[#00A2E7]/40 shrink-0 p-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-100 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* No coding required block inside container */}
              <div className="bg-[#051c4a] rounded-2xl p-4 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-[#00A2E7] flex items-center justify-center border border-blue-500/30 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">NO PROGRAMMING BACKGROUND IS NECESSARY</span>
                  <p className="text-[11px] text-slate-300 leading-normal">
                    We start from the absolute basics and build up your skills step-by-step.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
