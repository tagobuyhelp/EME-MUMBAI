"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

export default function PlacementSupport({
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };
  // Data for the features
  const features = [
    {
      id: 1,
      title: "Resume Building & LinkedIn Optimization",
      position: "left",
      points: [
        "Create job-ready, professional resumes",
        "Optimize LinkedIn to attract recruiters",
        "Showcase skills, certifications & projects",
      ],
    },
    {
      id: 2,
      title: "Aptitude & Logical Reasoning Training",
      position: "right",
      points: [
        "Daily practice sessions",
        "Full-length aptitude tests",
        "Improve reasoning & speed",
      ],
    },
    {
      id: 3,
      title: "Interview Practice & Technical Training",
      position: "left",
      points: [
        "Weekly mock interviews",
        "HR + technical rounds",
        "Personalized feedback",
      ],
    },
    {
      id: 4,
      title: "Career Mentorship from Experts",
      position: "right",
      points: [
        "1-on-1 counseling sessions",
        "Industry insights & trends",
        "Salary negotiation tips",
      ],
    },
    {
      id: 5,
      title: "Hiring Partners & Career Portal Access",
      position: "left",
      points: [
        "50+ active hiring partners",
        "Exclusive access to job listings",
        "Direct interview referrals",
      ],
    },
    {
      id: 6,
      title: "Build Your Job-Winning Portfolio",
      position: "right",
      points: [
        "Build real-world projects",
        "Get mentor feedback",
        "Showcase work to employers",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="w-full py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
          Placement Support
          <span className="flex flex-col items-end">
            <span className="text-[16px] md:text-[22px] text-[#232D63]">
              to Land Your Dream Job
            </span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>

        <div className="hidden md:block mt-4">
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex justify-center">
                <Card
                  className={`p-4 bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-cover bg-center bg-no-repeat shadow-md w-full max-w-[400px] ${
                    feature.highlight
                      ? "border-2 border-blue-500"
                      : "transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                  }`}
                >
                  <h3 className="font-bold text-[#232D63] mb-2">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 ">
                        <Image
                          src="/assets/icons/Check3.svg"
                          width={16}
                          height={16}
                          className="h-3.5 w-3.5 mt-1 flex-shrink-0"
                          alt="check icon"
                        />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden relative mt-2">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 border-dashed border-l-2 border-blue-300"></div>

          <div className="relative space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-row justify-center items-center mb-4 relative pl-4"
              >
                <div className="w-3 h-3 p-1 mr-1 bg-blue-500 rounded-full z-10"></div>
                <hr className="w-[10%] border-dashed border-l-2 border-blue-300 -translate-y-1/2" />
                <Card
                  className={`p-4 shadow-md w-full ${
                    feature.highlight ? "border-2 border-blue-500" : ""
                  }`}
                >
                  <h3 className="font-bold text-[#232D63] mb-2">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image
                          src="/assets/icons/Check3.svg"
                          width={16}
                          height={16}
                          className="h-3.5 w-3.5 mt-1.5 flex-shrink-0"
                          alt="check icon"
                        />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
