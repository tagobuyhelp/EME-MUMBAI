"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Mail,
  ArrowRight,
  BookOpen,
  Phone,
  Globe,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin
} from "lucide-react";

export default function CoursesLandingFooter({
  courseName = "Data Analytics Course",
  Courses,
  SelectCourses,
  customCourseList,
  email_sender,
  Brochure,
  BrochureName,
  setIsModalOpen,
  setCtaType,
}) {
  const [email, setEmail] = useState("");

  const defaultCourseList = [
    "Digital Marketing",
    "Data Science",
    "Web Development",
    "Graphic Design",
    "Cyber Security",
  ];

  const courseList = customCourseList || defaultCourseList;

  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    if (setCtaType) setCtaType("normal");
    if (setIsModalOpen) setIsModalOpen(true);
  };

  return (
    <footer className="w-full bg-[#050A1F] text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle dotted map background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-[1380px] mx-auto px-5 lg:px-24 pt-12 lg:pt-14 pb-6 relative z-10">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14">
          
          {/* ─── COLUMN 1: Brand, Stats, Newsletter (lg:col-span-4) ─── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Logo and Intro */}
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <Image
                  src="/assets/images/emeFooterLogo.svg"
                  alt="EME Academy Mumbai"
                  width={140}
                  height={50}
                  className="w-[120px] lg:w-[140px] cursor-pointer"
                  onClick={handleOpenModal}
                />
                <span className="text-xs font-bold pl-0.5 mt-2">
                  A <span className="text-[#f59e0b]">Decade</span> of Excellence
                </span>
              </div>
              <p className="text-[#94a3b8] text-[12.5px] leading-relaxed max-w-sm">
                Explore, learn, and grow with us today. With a diverse range of courses, expert instructors, and a supportive community, we're here to empower you on your educational journey.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/10">
              {[
                { icon: Users, val: "10+ Years", desc: "of Excellence" },
                { icon: Trophy, val: "Industry", desc: "Experts" },
                { icon: Briefcase, val: "100%", desc: "Placement Support" },
                { icon: GraduationCap, val: "Practical", desc: "& Job Ready" }
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-1">
                    <div className="w-8.5 h-8.5 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 shadow-sm">
                      <StatIcon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex flex-col leading-tight mt-1">
                      <span className="text-[10px] font-bold text-white">{stat.val}</span>
                      <span className="text-[8px] text-[#94a3b8] leading-tight">{stat.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stay Updated / Newsletter Card */}
            <div className="bg-[#0A1229] border border-white/10 rounded-2xl p-4.5 flex flex-col gap-3.5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-600/10 shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-tight">Stay Updated</span>
                  <span className="text-[9.5px] text-[#94a3b8] leading-tight mt-0.5">
                    Subscribe to get the latest updates, course offers &amp; career tips.
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-[#050A1F] border border-white/10 rounded-lg overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-xs text-white px-2.5 py-1.5 w-full outline-none placeholder:text-slate-600"
                />
                <button onClick={handleOpenModal} className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-md transition-colors shrink-0 shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* ─── COLUMN 2: Our Courses (lg:col-span-4) ─── */}
          <div className="lg:col-span-4 flex flex-col gap-5 lg:px-2">
            <h3 className="text-base sm:text-lg font-bold text-white flex flex-col gap-1.5">
              Our Courses
              <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>

            {/* Featured Course Card */}
            <div onClick={handleOpenModal} className="bg-[#0A1229] border border-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col cursor-pointer hover:border-blue-500/30 transition-colors group">
              <div className="p-3.5 flex gap-3.5 items-center border-b border-white/5 bg-gradient-to-r from-blue-900/20 to-transparent">
                <div className="relative w-18 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <Image 
                    src="/assets/images/Home/courses/data-analytics-course-dashboard-training.webp" 
                    alt="Data Analytics" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-xs text-white leading-tight">
                    {courseName}
                  </span>
                  <span className="text-[9.5px] text-[#94a3b8] leading-tight">
                    Master data analytics, visualization, and AI tools to transform data into insights.
                  </span>
                </div>
              </div>
              <div className="px-3.5 py-2.5 flex justify-end">
                <button onClick={handleOpenModal} className="text-blue-400 text-[11px] font-bold flex items-center gap-1 hover:text-blue-300 transition-colors">
                  Explore Course
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-600 flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5 text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Other Courses List */}
            <ul className="flex flex-col gap-0 border-y border-white/10">
              {courseList.map((c, i) => (
                <li onClick={handleOpenModal} key={i} className="flex items-center justify-between border-b border-white/5 py-2.5 last:border-0 group cursor-pointer hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    <span className="text-xs text-[#cbd5e1] group-hover:text-white transition-colors">{c}</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#64748b] group-hover:text-blue-400 transition-colors" />
                </li>
              ))}
            </ul>

            <button onClick={handleOpenModal} className="text-blue-400 text-xs font-bold flex items-center gap-1 hover:text-blue-300 transition-colors">
              View All Courses
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* ─── COLUMN 3: Contact Us (lg:col-span-4) ─── */}
          <div className="lg:col-span-4 flex flex-col gap-5 relative">
            <h3 className="text-base sm:text-lg font-bold text-white flex flex-col gap-1.5">
              Contact Us
              <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>

            <div className="flex flex-col gap-4.5">
              <span className="text-sm font-bold text-blue-400">
                EME Academy Mumbai Educational &amp; Welfare Trust
              </span>

              {/* Addresses */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-2.5">
                  <Image
                    src="/assets/images/Web_Development/icons/icons8-india-48.png"
                    alt="India"
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 object-contain mt-0.5 shrink-0"
                  />
                  <a href="#" onClick={handleOpenModal} className="text-[11px] text-[#cbd5e1] hover:text-white transition-colors leading-relaxed">
                    8th floor, RUPA SOLITAIRE,<br/>
                    MILLENNIUM BUSINESS PARK, 814, D wing,<br/>
                    Mahape, Navi Mumbai,<br/>
                    Maharashtra 400710
                  </a>
                </div>

                <div className="flex gap-2.5">
                  <Image
                    src="/assets/images/Web_Development/icons/icons8-india-48.png"
                    alt="India"
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 object-contain mt-0.5 shrink-0"
                  />
                  <a href="#" onClick={handleOpenModal} className="text-[11px] text-[#cbd5e1] hover:text-white transition-colors leading-relaxed">
                    EME Academy, 5th Floor, TOWER-1,<br/>
                    Globsyn Crystals, 505, EP Block,<br/>
                    Sector V, Bidhannagar, Kolkata,<br/>
                    West Bengal 700091
                  </a>
                </div>

                <div className="flex gap-2.5">
                  <Image
                    src="/assets/images/Web_Development/icons/icons8-uk-48.png"
                    alt="UK"
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 object-contain mt-0.5 shrink-0"
                  />
                  <a href="#" onClick={handleOpenModal} className="text-[11px] text-[#cbd5e1] hover:text-white transition-colors leading-relaxed">
                    EME Academy, 275 New north Road,<br/>
                    Islington, London,<br/>
                    N1 7AA, United Kingdom
                  </a>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="flex flex-col gap-3 mt-1.5">
                <a href="#" onClick={handleOpenModal} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600/50 transition-colors">
                    <Phone className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-[#cbd5e1] group-hover:text-white transition-colors">8207205867</span>
                </a>

                <a href="#" onClick={handleOpenModal} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600/50 transition-colors">
                    <Mail className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-[#cbd5e1] group-hover:text-white transition-colors">infomumbai@emeacademy.co.in</span>
                </a>

                <a href="#" onClick={handleOpenModal} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600/50 transition-colors">
                    <Globe className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-[#cbd5e1] group-hover:text-white transition-colors">www.emeacademy.co.in</span>
                </a>
              </div>
            </div>
            
            {/* Map pin absolute decorations for the right side */}
            <div className="absolute right-0 bottom-10 w-48 h-48 opacity-20 pointer-events-none hidden xl:block">
               <MapPin className="absolute top-10 right-20 w-5 h-5 text-blue-400" />
               <MapPin className="absolute bottom-10 right-10 w-6 h-6 text-blue-500" />
            </div>

          </div>

        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-[#94a3b8] flex flex-col md:flex-row md:gap-2 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} <span className="text-[#00A2E7] font-bold">EME Academy Mumbai Educational &amp; Welfare Trust</span> | All Rights Reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Developed By <a href="#" onClick={handleOpenModal} className="text-[#00A2E7] font-bold hover:underline">EME Academy Mumbai Team</a></span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-[#cbd5e1]">
            <button onClick={handleOpenModal} className="hover:text-white transition-colors">Privacy Policy</button>
            <span className="w-px h-3 bg-white/20"></span>
            <button onClick={handleOpenModal} className="hover:text-white transition-colors">Terms &amp; Conditions</button>
            <span className="w-px h-3 bg-white/20"></span>
            <button onClick={handleOpenModal} className="hover:text-white transition-colors">Refund Policy</button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#cbd5e1] mr-1">Follow Us</span>
            <a href="#" onClick={handleOpenModal} className="w-7 h-7 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity">
              <Facebook className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="#" onClick={handleOpenModal} className="w-7 h-7 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="#" onClick={handleOpenModal} className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
              <Instagram className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="#" onClick={handleOpenModal} className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
              <Youtube className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
