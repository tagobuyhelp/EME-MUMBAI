"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import CTAButton from "../common/CtaButton";

function CoursesCurriculum({
  title,
  courseName,
  tools,
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
  name = "Download Brochure"
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


  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Left Column - Tools */}
        <div className=" w-full px-2 py-4 md:p-6">
          <h2 className=" text-center text-[18px] md:text-[22px] font-semibold mb-2 md:mb-6">
            <span className="text-[#232D63]">
              {" "}
              {title}
            </span>{" "}
            <span className="text-[#E87D1A]">{courseName}</span>
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4">
            {tools?.map((tool, index) => (
              <Card
                key={index}
                className="p-4 w-full max-w-[105px] md:max-w-[160px] h-full max-h-[97px] md:max-h-[140px] flex flex-col items-center justify-center hover:shadow-md transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
              >
                <div className="rounded-md flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 h-12">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    width={tool.companyLogoWidth}
                    height={tool.companyLogoHeight}
                    className="max-h-12 md:w-auto"
                  />
                </div>
                <p className="text-[8px] md:text-[10px] text-center text-wrap font-medium">
                  {tool.name}
                </p>
              </Card>
            ))}
          </div>
          <div className="w-full mt-8">
            <CTAButton name="Download Brochure"
              styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none"
              _this={_this}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCurriculum;
