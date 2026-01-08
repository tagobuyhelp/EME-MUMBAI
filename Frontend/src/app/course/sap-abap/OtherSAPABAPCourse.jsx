"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import studentIcon from "../../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../../public/assets/images/SAP_Course/common/cards/assistance.svg";

export default function SAPCourseDetails() {
    const courses = [
        {
            name: 'SAP FICO Course',
            decs_name: 'SAP FICO',
            id: 1,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Including 1 month internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-fico',
        },
        {
            name: 'SAP MM',
            decs_name: 'SAP MM (Material Management)',
            id: 2,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-mm',
        },
        {
            name: 'SAP SD',
            decs_name: 'SAP SD (Sales & Distribution)',
            id: 3,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-sd',
        },
        {
            name: 'SAP PP Course',
            decs_name: 'SAP PP (Production Planning)',
            id: 4,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-pp',
        },
        {
            name: 'SAP HCM Course',
            decs_name: 'SAP HCM (Human Capital Management)',
            id: 5,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-hcm',
        },
        {
            name: 'SAP SF Course',
            decs_name: 'SAP SF (Success Factors)',
            id: 6,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-success',
        },
        {
            name: 'SAP Basis Course',
            decs_name: 'SAP Basis',
            id: 7,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Incl. 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-basis',
        },
        {
            name: 'SAP Analytics Course ',
            decs_name: 'SAP Analytics',
            id: 8,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '4 Months',
            time: 'Including 1 mo internship',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/course/sap-analytics',
        },

    ]


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center pt-[40px] px-[20px] md:px-24">
            <h2 className="text-[#232D63] text-4xl font-bold text-center mb-4">
                SAP Modules at <span className="text-[#00A2E7]">EME Academy</span>
            </h2>
            <p className="text-center text-[#727272] text-[14px] lg:text-[16px] mb-8">
                You might be looking to specialize in a particular SAP module. Perhaps
                wanting comprehensive SAP training? We have you covered. Take a look at
                an overview of what we offer
            </p>

            {/* Carousel */}
            <div className="w-full relative flex items-center justify-center">
                <div className="w-full max-w-[416px] lg:max-w-[350px]">
                    {/* Single course card */}
                    <div className="w-full h-[430px] border-[1.5px] rounded-lg overflow-hidden bg-white">
                        <div className="flex items-center px-4 py-2.5">
                            <div className="bg-[#e3f5fd] text-[#00A2E7] text-[12px] py-2 px-4 rounded-md">
                                {courses[currentIndex].name}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 px-5 py-3">
                            <div className="text-[#232d63] font-semibold text-[14px]">
                                {courses[currentIndex].decs_name}
                            </div>

                            <div className="flex justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <Image src={durationIcon} alt="duration" />
                                    <div className="text-[10px]">
                                        <div className="font-semibold text-[13px]">
                                            {courses[currentIndex].duration}
                                        </div>
                                        {courses[currentIndex].time}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image src={studentIcon} alt="students" />
                                    <div className="text-[10px]">
                                        <div className="font-semibold text-[13px]">
                                            {courses[currentIndex].student}
                                        </div>
                                        {courses[currentIndex].student2}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <Image src={employeeIcon} alt="jobs" />
                                    <div className="text-[10px]">
                                        <div className="font-semibold text-[13px]">
                                            {courses[currentIndex].job}
                                        </div>
                                        {courses[currentIndex].job2}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image src={assistanceIcon} alt="assistance" />
                                    <div className="text-[10px]">
                                        <div className="font-semibold text-[13px]">
                                            {courses[currentIndex].assistance}
                                        </div>
                                        {courses[currentIndex].assistance2}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="px-5 py-3 flex flex-col gap-2 text-[13px]">
                            <div>Industry <span className="font-bold">“Co-Op”</span> programme</div>
                            <div>{courses[currentIndex].decsTwo}</div>
                            <div>{courses[currentIndex].decsThree}</div>
                        </div>

                        {/* Explore button */}
                        <div className="flex justify-center py-2">
                            <Link href={courses[currentIndex].link}>
                                <div className="flex items-center gap-2 border border-[#0057e2] px-6 py-2 rounded-lg text-[#0057e2] font-semibold hover:bg-[#0057e2] hover:text-white">
                                    Explore Now <ArrowRight size={18} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[-25px] bg-white border border-[#00A2E7] rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-[-25px] bg-white border border-[#00A2E7] rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}
