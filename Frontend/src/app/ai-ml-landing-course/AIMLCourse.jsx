"use client";
import React, { useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";
import { Clock, Calendar, BadgePercent, GraduationCap, ArrowRight } from "lucide-react";

export default function AIMLCourse({
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    SelectCourses: SelectCourses ? SelectCourses : [],
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  const courseContents = [
    {
      id: "01",
      title: "Foundation of AI and ML",
      description: "Understand mathematical models, statistics, and basic machine learning concepts.",
    },
    {
      id: "02",
      title: "Python Programming for AI/ML",
      description: "Master Python libraries like NumPy, Pandas, Scikit-Learn for data manipulation.",
    },
    {
      id: "03",
      title: "AI Automation & Deep Learning Concepts",
      description: "Deep dive into Neural Networks, Computer Vision, and automated pipelines.",
    },
    {
      id: "04",
      title: "Professional Guidance",
      description: "Get industry-validated mentorship and regular feedback from senior AI practitioners.",
    },
    {
      id: "05",
      title: "Real-World Projects & Future Trends",
      description: "Work on live corporate datasets, advanced LLMs, and prompt engineering tools.",
    },
    {
      id: "06",
      title: "Capstone Training & Career Preparation",
      description: "Build an employer-ready GitHub portfolio and prepare for technical interviews.",
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-gradient-to-r from-slate-50 to-white">
      <div className="w-full max-w-[1380px] mx-auto px-5 md:px-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#232D63] text-3xl lg:text-4xl font-extrabold leading-tight">
            AI & ML <span className="text-[#00A2E7]">Course Structure</span> & Learning Path
          </h2>
          <div className="w-24 h-1 bg-[#E87D1A] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          
          {/* Left Side: Details & Overview */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-xl p-6 lg:p-8 shadow-sm flex flex-col justify-between h-full min-h-[480px]">
            <div>
              <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                  src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AiMLImage.jpg"
                  alt="AI & ML Course Path"
                />
                <div className="absolute top-3 left-3 bg-[#E87D1A] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                  EMI Available
                </div>
              </div>

              <h3 className="text-[#232D63] text-xl font-bold mb-4">Course Highlights</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-[#00A2E7] rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">6 Months</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-[#00A2E7] rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Schedule</p>
                    <p className="text-sm font-semibold text-gray-900">12hrs a week, once a week (Saturday/Sunday)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-[#00A2E7] rounded-lg">
                    <BadgePercent className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Course Fees</p>
                    <p className="text-sm font-semibold text-gray-900">
                      Discounted Fee: <span className="text-[#E87D1A]">INR 35,000</span> <span className="line-through text-gray-400 font-normal ml-1">INR 45,000</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton
                name="Reserve Your Seat"
                styleClasses="w-full bg-[#0057E2] hover:bg-[#0047C2] text-white text-sm font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-sm text-center"
                _this={_this}
              />
            </div>
          </div>

          {/* Right Side: Learning Path Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-[#232D63] text-xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#00A2E7]" />
              Learning Path Phases
            </h3>

            <div className="relative pl-6 border-l-2 border-blue-100 space-y-8">
              {courseContents.map((phase) => (
                <div key={phase.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[#00A2E7] bg-white group-hover:bg-[#00A2E7] transition-all duration-300"></div>
                  
                  {/* Phase Details */}
                  <div className="bg-white border border-gray-100 hover:border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#00A2E7] bg-blue-50 px-2.5 py-0.5 rounded-full">
                        Phase {phase.id}
                      </span>
                    </div>
                    <h4 className="text-gray-900 font-bold text-base md:text-lg mb-1 group-hover:text-[#00A2E7] transition-colors">
                      {phase.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
