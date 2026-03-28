"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import studentIcon from "../../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../../public/assets/images/SAP_Course/common/cards/assistance.svg";

export default function SAPCourseDetails() {
  const courses = [
    {
      name: "SAP FICO Course",
      decs_name: "SAP FICO",
      id: 1,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-fico",
    },
    {
      name: "SAP MM Course",
      decs_name: "SAP MM (Material Management)",
      id: 2,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-mm",
    },
    {
      name: "SAP SD Course",
      decs_name: "SAP SD (Sales & Distribution)",
      id: 3,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-sd",
    },
    {
      name: "SAP PP Course",
      decs_name: "SAP PP (Production Planning)",
      id: 4,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-pp",
    },
    {
      name: "SAP ABAP Course",
      decs_name: "SAP ABAP",
      id: 5,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-abap",
    },
    {
      name: "SAP HCM Course",
      decs_name: "SAP HCM (Human Capital Management)",
      id: 6,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-hcm",
    },
    {
      name: "SAP SF Course",
      decs_name: "SAP SF (Success Factors)",
      id: 7,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-success",
    },
    {
      name: "SAP Basis Course",
      decs_name: "SAP Basis",
      id: 8,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-basis",
    },
    {
      name: "SAP Analytics Course ",
      decs_name: "SAP Analytics",
      id: 9,
      student: "80% Students",
      student2: "Hired by MNCs",
      job: "1000+",
      job2: "Employment Generated",
      duration: "4 Months",
      time: "",
      assistance: "100%",
      assistance2: "Assistance",
      decsTwo: "Certification Assistance",
      decsThree: "Cutting-edge Curriculum.",
      link: "/course/sap-analytics",
    },
  ];

  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center pt-10 px-5 md:px-24">
      <h2 className="text-4xl font-bold text-center text-[#232D63] leading-snug tracking-tight">
        SAP Modules at <span className="text-[#00A2E7]">EME Academy</span>
      </h2>
      <p className="text-center text-[#727272] font-medium text-base md:text-lg mt-3">
        You might be looking to specialize in a particular SAP module. Perhaps
        wanting comprehensive SAP training? We have you covered. Take a look at
        an overview of what we offer.
      </p>

      {/* Carousel */}
      <div className="w-full flex flex-col justify-center items-center py-[40px]">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-6">
            {courses.map((course) => (
              <CarouselItem
                key={course.id}
                className="flex justify-center min-w-[300px] md:min-w-[350px]"
              >
                <div className="w-[300px] md:w-[350px] border border-gray-200 rounded-lg overflow-hidden bg-white flex-shrink-0">
                  {/* Header */}
                  <div className="p-3 bg-[#e3f5fd] text-[#00A2E7] font-semibold text-center">
                    {course.name}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-4">
                    <h3 className="text-[#232D63] font-semibold text-lg">
                      {course.decs_name}
                    </h3>

                    <div className="flex justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Image src={durationIcon} alt="duration" />
                        <div>
                          <div className="font-semibold text-sm">
                            {course.duration}
                          </div>
                          <div className="text-xs">{course.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image src={studentIcon} alt="student" />
                        <div>
                          <div className="font-semibold text-sm">
                            {course.student}
                          </div>
                          <div className="text-xs">{course.student2}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Image src={employeeIcon} alt="employee" />
                        <div>
                          <div className="font-semibold text-sm">
                            {course.job}
                          </div>
                          <div className="text-xs">{course.job2}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image src={assistanceIcon} alt="assistance" />
                        <div>
                          <div className="font-semibold text-sm">
                            {course.assistance}
                          </div>
                          <div className="text-xs">{course.assistance2}</div>
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="mt-3 flex flex-col gap-1 text-xs text-[#121112]">
                      <li>
                        Industry <strong>“Co-Op”</strong> programme
                      </li>
                      <li>{course.decsTwo}</li>
                      <li>{course.decsThree}</li>
                    </ul>

                    {/* Button */}
                    <Link href={course.link}>
                      <div className="mt-4 w-full text-center py-2.5 border border-[#0057e2] text-[#0057e2] rounded-lg font-semibold hover:bg-[#0057e2] hover:text-white flex justify-center items-center gap-2">
                        Explore Now
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="border border-[#00A2E7] text-[#00A2E7] rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <ArrowLeft size={20} />
            </CarouselPrevious>
            <CarouselNext className="border border-[#00A2E7] text-[#00A2E7] rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <ArrowRight size={20} />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
