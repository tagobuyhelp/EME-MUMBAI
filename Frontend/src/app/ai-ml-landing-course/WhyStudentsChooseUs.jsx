"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyStudentsChooseUs() {
  const columns = [
    {
      title: "Foundational & Tech Skills",
      items: [
        "Designed for Beginners, Freshers & Working Professionals",
        "Hands-On Training with Real AI Projects",
        "Industry-Focused Generative AI Curriculum",
        "Certification After Successful Completion",
        "ChatGPT, LLMs, NLP & Prompt Engineering",
        "2000+ Successful Students",
      ],
      color: "border-t-blue-500",
      bg: "from-blue-50/50 to-white",
    },
    {
      title: "Placement & Career Acceleration",
      items: [
        "100% Placement Assistance & Interview Preparation",
        "Resume Building & Portfolio Guidance",
        "Mock Interviews with Industry Experts",
        "100+ Hiring & Industry Connections",
        "Career Support for Freelancing & Jobs",
        "Flexible Batch Online & Offline Classrooms",
      ],
      color: "border-t-amber-500",
      bg: "from-amber-50/50 to-white",
    },
    {
      title: "Applied AI & Modern Methodology",
      items: [
        "Build AI Apps Using Modern Tools",
        "Portfolio-Ready AI Projects",
        "Prepare for Real AI Job Roles",
        "Industry Expert Mentors & Trainers",
        "Regular Doubt-Clearing & Mentorship Sessions",
        "Latest AI Trends-Based Curriculum",
        "No Cost EMI Options Available",
      ],
      color: "border-t-emerald-500",
      bg: "from-emerald-50/50 to-white",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-[1380px] mx-auto px-5 md:px-24">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#232D63] text-3xl lg:text-4xl font-extrabold leading-tight">
            Why Students <span className="text-[#00A2E7]">Choose Us?</span>
          </h2>
          <div className="w-24 h-1 bg-[#E87D1A] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${col.bg} border-t-4 ${col.color} border border-gray-100 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
            >
              <h3 className="text-[#232D63] text-lg lg:text-xl font-bold mb-6">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00A2E7] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
