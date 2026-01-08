"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CtaButton";
import { ArrowRight } from "lucide-react";

export default function CourseDetailsGrid({
  title,
  subtitle,
  description,
  brochureInfo,
  courses,
  thisObject,
}) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(true);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    ctaType,
    setCtaType,
    ...thisObject,
  };
  // console.log(_this)
  return (
    <div className="w-full h-full max-w-[1380px] flex flex-col justify-center items-center gap-6 py-4 md:py-10 mx-auto px-4">
      {/* Title Section */}
      <div className="text-[#232D63] md:leading-5 text-[16px] md:text-[22px] font-bold text-center">
        {title} {subtitle && <span className="text-[#E87D1A]">{subtitle}</span>}
        <p className="mt-2 text-[#4B4B4B] text-center text-[14px] md:text-[16px] font-[400]">
          {description || ""}
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-3 md:gap-4 p-5 shadow-lg rounded-lg w-full md:max-w-[568px] transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <div
              className="w-full flex justify-center items-center overflow-hidden rounded-[8px]"
              style={{ backgroundColor: course.imageBgColor }}
            >
              <Image
                src={course.image.src}
                alt={course.image.alt}
                width={course.image.width}
                height={course.image.height}
                className="rounded-lg object-contain w-full h-[180px]"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="text-[#232D63] font-bold text-[14px] md:text-[16px]">
                {course.title}
              </div>
              {course.description && (
                <div className="text-[#4B4B4B] font-medium text-[12px] md:text-[13px]">
                  {course.description}
                </div>
              )}
            </div>

            <hr className="w-full border-gray-300 md:my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.details.map((detail, dIndex) => (
                <div key={dIndex} className="flex items-center gap-2">
                  <Image
                    src={detail.icon}
                    alt={detail.label}
                    width={38}
                    height={38}
                  />
                  <div className="text-[12px]">
                    <strong>{detail.label}</strong>
                    <br />
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full justify-center md:justify-start flex flex-row md:flex-wrap gap-2 md:gap-4 md:mt-4">
              {course.link ? (
                // If course has a link → redirect
                <Link
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="flex items-center gap-2 md:px-5 md:py-2 
                         text-[12px] md:text-[14px] bg-[#0057E2] 
                         text-white rounded-full hover:bg-[#0047C2] 
                         font-semibold"
                  >
                    Explore Now <ArrowRight size={16} />
                  </Button>
                </Link>
              ) : (
                // If course has NO link → open CTA modal
                <CTAButton
                  name="Explore Now ->"
                  styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                  _this={_this}
                />
              )}
              {/* <CTAButton name="Explore Now ->"
                  styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                  _this={_this}
                /> */}

              <Button
                onClick={() => setSelectedCourse(course)}
                className="flex items-center gap-2 md:px-5 md:py-2 text-[12px] md:text-[14px] bg-[#ffffff] border border-[#0057E2] text-[#0057E2] rounded-full font-semibold md:hover:bg-[#0057E2]/10"
              >
                Course Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <Card
            className="bg-white overflow-y-auto shadow-none border-[#EEEEEE] p-6 rounded-lg max-w-[1200px] w-full relative max-h-[90vh] transition duration-500 ease-in-out transform cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>

            <div className="w-full gap-2 flex flex-col">
              <div className="text-[18px] font-bold text-[#232D63]">
                {selectedCourse.title}
              </div>

              <div>
                <p className="text-[#656565] text-[14px] mb-4">
                  {selectedCourse.descriptionAlert}
                </p>

                <p className="text-[#00A2E7] font-semibold mt-2">
                  This course covers:
                </p>

                <ul
                  className={`mt-2 gap-3 text-[14px] font-[500] ${
                    selectedCourse.title.includes("MERN") ||
                    selectedCourse.title.includes("MEAN")
                      ? "flex flex-col"
                      : "grid grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {selectedCourse.topics.map((topic, tIndex) => {
                    if (typeof topic === "string") {
                      return (
                        <li
                          key={tIndex}
                          className="text-[#232D63] font-semibold list-none"
                        >
                          • {topic}
                        </li>
                      );
                    }
                    return (
                      <li
                        key={tIndex}
                        className="text-[#232D63] font-semibold list-none"
                      >
                        • {topic.title}
                        {Array.isArray(topic.subpoints) &&
                          topic.subpoints.length > 0 && (
                            <ul className="mt-1 pl-4 text-[13px] text-[#656565] font-normal space-y-1">
                              {topic.subpoints.map((point, subIdx) => (
                                <li key={subIdx} className="list-disc">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    );
                  })}
                </ul>

                {selectedCourse.accordionItems?.length > 0 && (
                  <Accordion
                    type="single"
                    collapsible
                    className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {selectedCourse.accordionItems.map((acc, aIndex) => (
                      <AccordionItem
                        key={aIndex}
                        value={acc.value}
                        className="bg-[#ffffff] w-full border border-[#DDDDDD] rounded-[10px] px-3 md:px-4 md:py-1"
                      >
                        <AccordionTrigger className="py-2 [&>svg]:text-[#000000] [&[data-state=open]>svg]:bg-[#FFFFFF] [&[data-state=open]>svg]:text-[#000000] [&[data-state=open]>svg]:rounded-lg [&[data-state=open]>svg]:w-7 [&[data-state=open]>svg]:h-7 [&[data-state=open]>svg]:border [&[data-state=open]>svg]:border-[#D8DADC]">
                          {acc.trigger}
                        </AccordionTrigger>
                        <AccordionContent>{acc.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}

                <hr className="w-full border-[#DDDDDD] mt-4" />

                <div className="w-full mt-3 md:mt-6 flex flex-col gap-2 justify-center items-center">
                  <div className="text-[12px] md:text-[14px] font-[600] text-center">
                    {selectedCourse.hookLine}
                  </div>

                  <CTAButton
                    name="Download Brochure"
                    styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                    _this={_this}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
