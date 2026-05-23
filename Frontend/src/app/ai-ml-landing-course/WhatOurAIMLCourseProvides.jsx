"use client";
import React from "react";
import { FolderGit2, BookOpen, Users, Cpu, Compass, Briefcase } from "lucide-react";

export default function WhatOurAIMLCourseProvides() {
  const provisions = [
    {
      title: "Working on Hands-on Projects",
      desc: "Our curriculum is packed with practical projects that mimic real-world corporate data challenges. You will learn how to clean datasets, deploy predictive algorithms, and train neural networks. Building a robust portfolio of live AI models dramatically accelerates your job prospects.",
      icon: <FolderGit2 className="w-8 h-8 text-[#00A2E7]" />,
      bg: "bg-blue-50/50",
    },
    {
      title: "Industry-Focused Curriculum",
      desc: "You will cover a massive range of topics, starting from foundational logic in our Python for Machine Learning Course Mumbai to advanced architectures in our Deep Learning Course in Mumbai. We help you master both supervised and unsupervised learning, giving you full-stack data capabilities.",
      icon: <BookOpen className="w-8 h-8 text-[#E87D1A]" />,
      bg: "bg-orange-50/50",
    },
    {
      title: "Professional Mentors",
      desc: "Data Scientists and Lead AI Engineers mentor our students to become the future of the tech sector. With years of corporate experience by their side, students learn the exact best practices and algorithmic problem-solving strategies used by the Best AI and ML Institute in Mumbai.",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50/50",
    },
    {
      title: "Industry-Specific Instruments & Systems",
      desc: "EME Academy provides access to the exact tech stacks used by global MNCs. Students will master model deployment working with TensorFlow, PyTorch, cloud-based AI services, and gain critical visualization skills through our AI ML Course with Power BI Certification.",
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-50/50",
    },
    {
      title: "Flexible Learning Paths",
      desc: "Flexible classes allow students to learn at their own pace without sacrificing their current commitments. EME Academy offers both an interactive Online AI ML Course Mumbai and an immersive AI Course Weekend Batch Mumbai, perfectly accommodating working professionals and full-time students.",
      icon: <Compass className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50/50",
    },
    {
      title: "Career Guidance & Placement Support",
      desc: "Our personalized career support guarantees your corporate transition. Backed by our dedicated AI ML Course with Placement Mumbai, we offer technical resume workshops, white-board interview coaching, and exclusive networking via our AI ML Course with Internship Mumbai track.",
      icon: <Briefcase className="w-8 h-8 text-rose-600" />,
      bg: "bg-rose-50/50",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-[#CAE5FF]/20">
      <div className="w-full max-w-[1380px] mx-auto px-5 md:px-24">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 lg:mb-16">
          <h2 className="text-[#232D63] text-3xl lg:text-4xl font-extrabold leading-tight">
            What our <span className="text-[#00A2E7]">ML & AI Course</span> in Mumbai Provides
          </h2>
          <p className="text-gray-700 text-base md:text-lg mt-4 leading-relaxed">
            At EME Academy, our mission is to equip you with the advanced data skills and algorithmic logic needed to dominate this highly competitive tech sector.
          </p>
          <div className="w-24 h-1 bg-[#E87D1A] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Provisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provisions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 hover:border-blue-100 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start"
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-xl ${item.bg} mb-6 shrink-0`}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-[#232D63] text-lg lg:text-xl font-bold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
