"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import studentIcon from "../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../public/assets/images/SAP_Course/common/cards/assistance.svg";

export default function OtherDMPro() {
    const courses = [
        {
            name: "Advanced",
            decs_name: "Advanced Digital Marketing",
            id: 1,
            student: "80% Students",
            student2: "Hired by MNCs",
            job: "1000+",
            job2: "Employment Generated",
            duration: "3 Months",
            assistance: "100%",
            assistance2: "Assistance",
            decsTwo: "Certification Assistance",
            decsThree: "Cutting-edge Curriculum.",
            link: "/advanced-digital-marketing-certificate-course-in-kolkata",
        },
        {
            name: "Diploma",
            decs_name: "Diploma in Advanced Marketing with AI",
            id: 2,
            student: "80% Students",
            student2: "Hired by MNCs",
            job: "1000+",
            job2: "Employment Generated",
            duration: "3 Months",
            assistance: "100%",
            assistance2: "Assistance",
            decsTwo: "Certification Assistance",
            decsThree: "Cutting-edge Curriculum.",
            link: "/diploma-in-advance-digital-marketing-courses-in-kolkata",
        },
    ];

    return (
        <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center items-center pt-[40px] px-[20px] md:px-24">
            <div className="text-[#232D63] text-[16px] lg:text-[18px] font-[700] text-center text-4xl leading-loose tracking-tighter">
                Explore Our Courses:
                <span className="text-[#00A2E7] px-1">What is on Offer?</span>
            </div>
            <div className="flex lg:-w-full text-center text-[#727272] font-medium leading-[20px] text-[14px] md:text-[16px]">
                Both beginners and advanced professionals stand to gain from our courses.
            </div>

            {/* ✅ Mobile View Carousel */}
            <div className="w-full flex lg:hidden justify-center items-center mt-6">
                <Carousel className="w-full max-w-[90%]">
                    <CarouselContent>
                        {courses.map((course) => (
                            <CarouselItem key={course.id} className="basis-full sm:basis-1/2 md:basis-1/2">
                                <CourseCard course={course} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-3 mt-6">
                        <CarouselPrevious className="border border-[#00A2E7] text-[#00A2E7] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px]" icon={ArrowLeft} />
                        <CarouselNext className="border border-[#00A2E7] text-[#00A2E7] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px]" icon={ArrowRight} />
                    </div>
                </Carousel>
            </div>

            {/* ✅ Desktop View */}
            <div className="hidden w-full lg:flex flex-col justify-center items-center py-[40px]">
                <div className="grid grid-cols-2 gap-[20px] justify-items-center">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ✅ Extracted Reusable Course Card Component */
const CourseCard = ({ course }) => (
    <div className="w-[350px] h-[430px] border-[1.5px] rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="flex flex-row items-center justify-start py-2.5 px-4">
            <div className="bg-[#e3f5fd] rounded-md text-center text-[14px] text-[#00a2e7] py-2 px-4 font-medium">
                {course.name}
            </div>
        </div>

        <div className="flex flex-col gap-[22px] pt-[5px] pb-[20px]">
            <div className="text-[14px] text-[#232d63] text-left font-[600] px-[22px]">
                {course.decs_name}
            </div>

            <div className="flex w-full px-[22px] gap-[40px] items-center justify-between">
                <InfoItem icon={durationIcon} title={course.duration} />
                <InfoItem icon={studentIcon} title={course.student} subtitle={course.student2} />
            </div>

            <div className="flex w-full px-[22px] gap-[40px] items-center justify-between">
                <InfoItem icon={employeeIcon} title={course.job} subtitle={course.job2} />
                <InfoItem icon={assistanceIcon} title={course.assistance} subtitle={course.assistance2} />
            </div>
        </div>

        <div className="w-[90%] h-[1px] bg-[#585858] mx-auto"></div>

        <div className="flex flex-col px-[22px] py-[20px] gap-[10px]">
            <BulletPoint text="Industry “Co-Op” programme" />
            <BulletPoint text={course.decsTwo} />
            <BulletPoint text={course.decsThree} />
        </div>

        <div className="w-full flex justify-center items-center">
            <Link href={course.link} className="flex justify-center items-center p-[8px]">
                <div className="w-full rounded-lg border border-[#0057e2] flex flex-row items-center py-2.5 px-20 gap-2.5 text-[14px] text-[#0057e2] font-[600] hover:bg-[#0057e2] hover:text-white transition">
                    Explore Now
                    <ArrowRight size={18} />
                </div>
            </Link>
        </div>
    </div>
);

/* ✅ Small UI Helpers */
const InfoItem = ({ icon, title, subtitle }) => (
    <div className="w-1/2 flex items-center justify-start gap-[6px]">
        <Image src={icon} alt="icon" className="object-cover" />
        <div className="flex flex-col text-[10px] text-[#121112] leading-[14px]">
            <div className="font-[600] text-[13px]">{title}</div>
            {subtitle && <div>{subtitle}</div>}
        </div>
    </div>
);

const BulletPoint = ({ text }) => (
    <div className="flex items-center gap-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
            <path
                d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 0 11.2644 0 10.4478V1.55217C0 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z"
                fill="#0057E2"
            />
        </svg>
        <div className="text-[13px] font-[400] leading-[14px] text-[#121112]">{text}</div>
    </div>
);
