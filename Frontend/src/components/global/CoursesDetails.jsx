"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CTAButton from "../common/CtaButton"

function CoursesDetails({
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
  courseName,
  subtitle,
  courseData
}) {

  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
  }

  return (
    <div className="w-full h-full max-w-[1380px] flex flex-col justify-center items-center gap-4 py-4 md:py-6 mx-auto px-4">

      <h2 className="text-center text-[18px] md:text-[22px] font-bold">
        <span className="text-[#232D63]">Explore Our </span>
        <span className="text-[#E87D1A]">{courseName}</span>
        <div className="text-[#4B4B4B] text-[12px] font-normal">
          <p>{subtitle}</p>
        </div>
      </h2>

      {/* course card */}
      <Card className="max-w-6xl mx-auto bg-[#ffffff] p-0 rounded-2xl border border-[#EEEEEE]">
        {courseData?.map((course) => (
          <div key={course.id}>
            <div className="flex flex-col md:flex-row p-4">
              {/* Left: Image */}
              <div className="md:w-2/5 relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={540}
                  height={337}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              {/* Right: Description */}
              <div className="md:w-3/5 p-3 flex flex-col justify-center items-start gap-5 md:gap-6">
                <div className="w-full flex flex-col gap-2 md:gap-1">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[#232D63]">
                    {course.title}
                  </h3>
                  <div className="text-[#7F7879] text-[12px] flex flex-col">
                    <p>
                      {course.description}
                    </p>
                  </div>
                  <hr className="w-full border-[#EEEEEE]" />
                </div>

                {/* Dynamic Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.details.map((detail, index) => {
                    let icon
                    if (detail.label === "Duration") {
                      icon = "/assets/icons/DurationIcon.svg"
                    } else if (detail.label === "Affordable Fees") {
                      icon = "/assets/icons/BudgetIcon.svg"
                    } else if (detail.label === "Mode of Training") {
                      icon = "/assets/icons/TrainingIcon.svg"
                    } else if (detail.label === "Languages") {
                      icon = "/assets/icons/LanguageIcon.svg"
                    }

                    return (
                      <div key={index} className="flex items-center gap-2">
                        <Image src={icon} alt={detail.label} width={38} height={38} />
                        <div className="text-[12px] md:text-[13px]">
                          <div className="text-[#7F7879]">{detail.label}</div>
                          {detail.value}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Buttons */}
                <div className="w-full flex flex-row md:flex-wrap justify-center md:justify-start gap-2 md:gap-4">
                  <CTAButton name="Explore Now ->"
                    styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                    _this={_this}
                  />
                  <Button
                    onClick={() => setSelectedCourse(course)}
                    className="flex items-center gap-2 md:px-5 md:py-2 text-[12px] md:text-[14px] bg-[#ffffff] border border-[#0057E2] text-[#0057E2] rounded-full font-semibold md:hover:bg-[#0057E2]/10 cursor-pointer"
                  >
                    Course Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center p-4 z-[50]" onClick={() => setSelectedCourse(null)}>
          <Card className="bg-white shadow-none border-[#EEEEEE] p-6 rounded-lg max-w-[1200px] w-full relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>

            <div className="w-full gap-2 flex flex-col">
              <div>
                <p className="text-[#656565] text-[14px] mb-4">
                  {selectedCourse.descriptionAlert}
                </p>

                <p className="text-[#232D63] font-bold text-[16px] mb-2">
                  Here&apos;s what you&apos;ll learn:
                </p>

                {/* Accordion */}
                <div className="flex flex-col gap-4">
                  <Accordion
                    type="multiple"
                    collapsible
                    className="w-full max-w-[1200px] shadow-none border-[#EEEEEE] gap-3 md:gap-6 grid grid-cols-1 md:grid-cols-2 justify-center rounded-[26px] mx-auto"
                  >
                    {selectedCourse.topics.map((topic, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`item-${idx}`}
                        className="border border-[#EEEEEE] rounded-lg overflow-hidden bg-white "
                      >
                        <AccordionTrigger className=" px-6 py-4 text-left font-medium text-[#0057E2] [&>svg]:text-[#656565] [&[data-state=open]>svg]:bg-[#FFFFFF] [&[data-state=open]>svg]:text-[#656565] [&[data-state=open]>svg]:rounded-lg [&[data-state=open]>svg]:w-7 [&[data-state=open]>svg]:h-7 [&[data-state=open]>svg]:border [&[data-state=open]>svg]:border-[#D8DADC]">
                          {topic.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-0">
                          {
                            typeof topic.points[0] === "string" ?
                              (
                                <ul className="list-disc list-inside text-slate-600 space-y-2 pl-4">
                                  {topic.points.map((point, i) => (
                                    <li key={i} className="text-[#656565]">
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                topic.points.map((sub, i) => (
                                  <div key={i} className="mb-4">
                                    <h4 className="font-semibold text-[#232D63] mb-1 text-[14px]">
                                      {sub.title}
                                    </h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 pl-4">
                                      {sub.points.map((p, j) => (
                                        <li key={j} className="text-[#656565]">
                                          {p}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))
                              )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <hr className="w-full border-[#DDDDDD] mt-6" />

                <div className="w-full mt-6 flex flex-col gap-2 justify-center items-center z-[999]">
                  <div className="italic text-[#232D63] text-[14px] text-center">
                    {selectedCourse.hookLine}
                  </div>

                  {/* <Button
                    className="bg-[#0057E2] hover:bg-[#0047C2] text-[14px] text-white rounded-full font-semibold px-8"
                    onClick={() => {
                      _this?.setIsModalOpen(true)
                    }}
                  >
                    Download Brochure →
                  </Button> */}
                  <CTAButton name="Download Brochure →"
                    styleClasses="bg-[#0057E2] hover:bg-[#0047C2] text-[14px] text-white hover:text-white rounded-full font-semibold px-8 "
                    _this={_this}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default CoursesDetails
