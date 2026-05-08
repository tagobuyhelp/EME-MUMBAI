"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import studentIcon from "../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../public/assets/images/SAP_Course/common/cards/assistance.svg";

export default function OtherGraphicDesignCourse() {
    const courses = [
        {
            name: "Motion",
            decs_name: "Motion Graphic Course",
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
            link: "/motion-graphics-course-in-mumbai",
        },
    ];

    return (
        <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center items-center pt-[40px] px-[20px] md:px-24">
            <div className="text-[#232D63] text-[16px] lg:text-[18px] font-[700] text-center leading-loose tracking-tighter">
                Graphic Design{" "}
                <span className="text-[#00A2E7] px-1">Other Courses</span>
            </div>
            <div className="text-center text-[#727272] font-medium leading-[20px] text-[14px] md:text-[16px]">
                Both beginners and advanced professionals stand to gain from our courses.
            </div>

            {/* Carousel Section */}
            <div className="w-full h-full flex flex-col justify-center items-center py-[40px]">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="flex justify-center min-w-[300px] md:min-w-[350px]"
                            >
                                <div className="w-[350px] h-[430px] border-[1.5px] rounded-lg bg-white flex flex-col">
                                    {/* Title */}
                                    <div className="flex items-center justify-start py-2.5 px-4">
                                        <div className="bg-[#e3f5fd] rounded-md text-center text-[14px] text-[#00a2e7] py-2 px-4">
                                            {course.name}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col gap-[22px] pt-[5px] pb-[20px] px-[22px]">
                                        <div className="text-[14px] text-[#232d63] font-[600]">
                                            {course.decs_name}
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <Image src={durationIcon} alt="duration-icon" />
                                                <div className="flex flex-col text-[10px] text-[#121112] leading-[14px]">
                                                    <div className="font-[600] text-[13px]">{course.duration}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Image src={studentIcon} alt="student-icon" />
                                                <div className="flex flex-col text-[10px] text-[#121112] leading-[14px]">
                                                    <div className="font-[600] text-[13px]">{course.student}</div>
                                                    <div>{course.student2}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <Image src={employeeIcon} alt="employee-icon" />
                                                <div className="flex flex-col text-[10px] text-[#121112] leading-[14px]">
                                                    <div className="font-[600] text-[13px]">{course.job}</div>
                                                    <div>{course.job2}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Image src={assistanceIcon} alt="assistance-icon" />
                                                <div className="flex flex-col text-[10px] text-[#121112] leading-[14px]">
                                                    <div className="font-[600] text-[13px]">{course.assistance}</div>
                                                    <div>{course.assistance2}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    <div className="w-[90%] h-[1px] bg-[#E0E0E0] mx-auto"></div>

                                    {/* Points */}
                                    <div className="flex flex-col px-[22px] py-[20px] gap-[10px] text-[13px] text-[#121112]">
                                        <div>• Industry <span className="font-[700]">“Co-Op”</span> programme</div>
                                        <div>• {course.decsTwo}</div>
                                        <div>• {course.decsThree}</div>
                                    </div>

                                    {/* Button */}
                                    <div className="w-full flex justify-center mt-auto pb-4">
                                        <Link
                                            href={course.link}
                                            className="w-full mx-5 text-center border border-[#0057e2] text-[#0057e2] font-[600] py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0057e2] hover:text-white transition-all"
                                        >
                                            Explore Now <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
