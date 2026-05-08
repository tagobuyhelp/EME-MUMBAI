"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import studentIcon from "../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../public/assets/images/SAP_Course/common/cards/assistance.svg";

export default function OtherMarketingAdvancedDigital() {
    const courses = [
        {
            name: "Crash Course",
            decs_name: "Master Digital Marketing with AI",
            id: 1,
            student: "80% Students",
            student2: "Hired by MNCs",
            job: "1000+",
            job2: "Employment Generated",
            duration: "4 Months",
            assistance: "100%",
            assistance2: "Assistance",
            decsTwo: "Certification Assistance",
            decsThree: "Cutting-edge Curriculum.",
            link: "/diploma-in-advance-digital-marketing-courses-in-mumbai",
        },
        {
            name: "Advanced",
            decs_name: "Advanced Digital Marketing",
            id: 2,
            student: "80% Students",
            student2: "Hired by MNCs",
            job: "1000+",
            job2: "Employment Generated",
            duration: "6 Months",
            assistance: "100%",
            assistance2: "Assistance",
            decsTwo: "Certification Assistance",
            decsThree: "Cutting-edge Curriculum.",
            link: "/advanced-digital-marketing-certificate-course-in-mumbai",
        },
    ];

    return (
        <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center items-center pt-[40px] px-[20px] md:px-24">
            <div className="text-[#232D63] text-[16px] lg:text-[18px] font-[700] text-center text-4xl leading-loose tracking-tighter">
                Explore Our Courses: <span className="text-[#00A2E7] px-1">What is on Offer?</span>
            </div>
            <div className="flex text-center text-[#727272] font-medium leading-[20px] text-[14px] md:text-[16px]">
                Both beginners and advanced professionals stand to gain from our courses.
            </div>

            {/* Mobile View Carousel */}
            <div className="w-full flex flex-col justify-center items-center lg:hidden py-6">
                <Carousel className="w-full max-w-sm">
                    <CarouselContent>
                        {courses.map((course) => (
                            <CarouselItem key={course.id}>
                                <div className="w-[416px] h-[430px] border rounded-lg overflow-hidden bg-white mx-auto">
                                    <div className="flex flex-row items-center justify-start py-2.5 px-4">
                                        <div className="bg-[#e3f5fd] rounded-md text-center text-[14px] text-[#00a2e7] py-2 px-4">
                                            {course.name}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[22px] pt-[5px] pb-[20px]">
                                        <div className="text-[14px] text-[#232d63] text-left font-[600] px-[22px]">{course.decs_name}</div>

                                        {/* Duration & Student */}
                                        <div className="flex justify-between px-[22px]">
                                            <div className="flex items-center gap-2">
                                                <Image src={durationIcon} alt="duration" />
                                                <div className="text-[13px] font-[600]">{course.duration}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Image src={studentIcon} alt="student" />
                                                <div className="text-[13px] font-[600]">{course.student}</div>
                                            </div>
                                        </div>

                                        {/* Job & Assistance */}
                                        <div className="flex justify-between px-[22px]">
                                            <div className="flex items-center gap-2">
                                                <Image src={employeeIcon} alt="employee" />
                                                <div className="text-[13px] font-[600]">{course.job}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Image src={assistanceIcon} alt="assistance" />
                                                <div className="text-[13px] font-[600]">{course.assistance}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[90%] h-[1px] bg-[#585858] mx-auto"></div>

                                    {/* Highlights */}
                                    <div className="flex flex-col px-[22px] py-[20px] gap-[10px]">
                                        <p className="text-[13px]">
                                            Industry <span className="font-[700]">“Co-Op”</span> programme
                                        </p>
                                        <p className="text-[13px]">{course.decsTwo}</p>
                                        <p className="text-[13px]">{course.decsThree}</p>
                                    </div>

                                    <div className="flex justify-center pb-4">
                                        <Link href={course.link}>
                                            <div className="border border-[#0057e2] text-[#0057e2] font-[600] rounded-lg py-2 px-8 flex items-center gap-2 hover:bg-[#0057e2] hover:text-white">
                                                Explore Now <ArrowRight size={16} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center gap-3 pt-4">
                        <CarouselPrevious className="border border-[#00A2E7] text-[#00A2E7]" icon={ArrowLeft} />
                        <CarouselNext className="border border-[#00A2E7] text-[#00A2E7]" icon={ArrowRight} />
                    </div>
                </Carousel>
            </div>

            {/* Laptop View */}
            <div className="hidden lg:grid grid-cols-2 gap-[20px] py-[40px]">
                {courses.map((course) => (
                    <div key={course.id} className="w-[350px] border-[1.5px] rounded-lg overflow-hidden bg-white">
                        <div className="flex flex-row items-center justify-start py-2.5 px-4">
                            <div className="bg-[#e3f5fd] rounded-md text-center text-[12px] text-[#00a2e7] py-2 px-3">
                                {course.name}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[22px] pt-[5px] pb-[20px]">
                            <div className="text-[16px] text-[#232d63] text-left font-[600] px-[22px]">
                                {course.decs_name}
                            </div>

                            <div className="flex justify-between px-[22px]">
                                <div className="flex items-center gap-2">
                                    <Image src={durationIcon} alt="duration" />
                                    <div className="text-[13px] font-[600]">{course.duration}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={studentIcon} alt="student" />
                                    <div className="text-[13px] font-[600]">{course.student}</div>
                                </div>
                            </div>

                            <div className="flex justify-between px-[22px]">
                                <div className="flex items-center gap-2">
                                    <Image src={employeeIcon} alt="employee" />
                                    <div className="text-[13px] font-[600]">{course.job}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={assistanceIcon} alt="assistance" />
                                    <div className="text-[13px] font-[600]">{course.assistance}</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%] h-[1px] bg-[#585858] mx-auto"></div>

                        <div className="flex flex-col px-[22px] py-[20px] gap-[10px]">
                            <p className="text-[13px]">
                                Industry <span className="font-[700]">“Co-Op”</span> programme
                            </p>
                            <p className="text-[13px]">{course.decsTwo}</p>
                            <p className="text-[13px]">{course.decsThree}</p>
                        </div>

                        <div className="flex justify-center pb-4">
                            <Link href={course.link}>
                                <div className="border border-[#0057e2] text-[#0057e2] font-[600] rounded-lg py-2 px-8 flex items-center gap-2 hover:bg-[#0057e2] hover:text-white">
                                    Explore Now <ArrowRight size={16} />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
