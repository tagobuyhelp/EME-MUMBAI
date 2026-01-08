"use client";
import Image from "next/image";
import { use, useState } from "react";

export default function WhyChooseEMELatest({ name, image, thisObject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _this = { isModalOpen, setIsModalOpen, ...thisObject };
  const features = [
    {
      id: 1,
      icon: "industry-certified",
      title: "Industry-Certified Trainers",
      bgColor: "bg-[#E0F5FF]",
    },
    {
      id: 2,
      icon: "placement-support",
      title: "100% Placement Support",
      bgColor: "bg-[#E0F5FF]",
    },
    {
      id: 3,
      icon: "flexible-schedule",
      title: "Flexible Schedule (Weekday + Weekend Options)",
      bgColor: "bg-[#E0F5FF]",
    },
    {
      id: 4,
      icon: "capstone-projects",
      title: "Capstone Projects & Hands-on Learning",
      bgColor: "bg-[#E0F5FF]",
    },
    {
      id: 5,
      icon: "career-assistance",
      title: "Lifetime Career Assistance",
      bgColor: "bg-[#E0F5FF]",
    },
    {
      id: 6,
      icon: "emi-options",
      title: "EMI Options",
      bgColor: "bg-[#E0F5FF]",
    },
  ];

  // Icon mapping function
  const icons = {
    "industry-certified": "/assets/icons/Icon2.svg",
    "placement-support": "/assets/icons/Icon4.svg",
    "flexible-schedule": "/assets/icons/Icon5.png",
    "capstone-projects": "/assets/icons/Icon1.svg",
    "career-assistance": "/assets/icons/Icon6.png",
    "emi-options": "/assets/icons/Icon3.svg",
  };

  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Column - Image */}
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="relative rounded-[26px] overflow-hidden">
              <Image
                src={image}
                alt="EME Academy Workspace"
                width={600}
                height={400}
                className="w-full h-auto lg:h-[510px] object-cover"
                priority
              />

              {/* 100% Original Badge */}
              <div className="absolute top-4 left-4">
                <Image
                  src="/assets/images/Original100Badge.svg"
                  alt="100% Original Badge"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Placement Support Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-[#FFFFFF] text-[#E87D1A] px-4 py-2 rounded-lg text-[12px] md:text-[14px] font-semibold">
                  Placement Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 lg:w-1/2">
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-[16px] md:text-[22px] font-bold text-[#232D63] mb-4">
                Why Choose EME Academy for{" "}
                <span className="text-[#E87D1A]">{name}</span>?
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-cover bg-center bg-no-repeat bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center md:mb-4`}
                    >
                      <Image
                        src={icons[feature.icon]}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[12px] md:text-[14px] font-bold text-[#232D63] leading-tight">
                        {feature.title}
                      </h3>
                    </div>
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
