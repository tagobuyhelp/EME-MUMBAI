'use client'
import { useState } from "react";
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { Card, CardContent } from '@/components/ui/card';
import CTAButton from "../common/CtaButton";



const companies1 = [
    { src: "/assets/icons/companies/Infosys_icon.svg", alt: 'Infosys', height: "90px" },
    { src: "/assets/icons/companies/itcInfo.png", alt: 'ITC Info', height: "120px" },
    { src: "/assets/icons/companies/Deloitte2.svg", alt: 'Deloitte', height: "120px" },
    { src: "/assets/icons/companies/capgemini.svg", alt: 'Capgemini', height: "120px" },
    { src: "/assets/icons/companies/AccentureIcon.svg", alt: 'Accenture', height: "80px" },
    { src: "/assets/icons/companies/CognizantIcon.svg", alt: 'Cognizant', height: "60px" },
];

const companies2 = [
    // { src: ibm, alt: 'IBM', width: 70, height: 60 },
    { src: "/assets/icons/companies/WiproIcon.svg", alt: 'Wipro', height: "50px" },
    { src: "/assets/icons/companies/BTIcon.svg", alt: 'BT', height: "60px" },
    { src: "/assets/icons/companies/TCS_icon.svg", alt: 'TCS', height: "60px" },
    { src: "/assets/icons/companies/genpact.svg", alt: 'genpact', height: "40px" },
    { src: "/assets/icons/companies/HCLIcon.svg", alt: 'HCL', height: "40px" },
    { src: "/assets/icons/companies/Tech_Mahindra-Logo.svg", alt: 'TechMahindra', height: "40px" },
];


function PlacementPartners() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);
    const Courses = "All Course"
    const email_sender = "ALL"
    const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
    const BrochureName = "EME-brochure-2024.pdf";
    const SelectCourses = [
        "Data Analytics Course",
        "Sap Course",
        "Digital Marketing Course",
        "HR Management Course",
        "Web Development Course",
        "Data Science Course",
        "Graphics Designing Course",
        "Cyber Security Course",
        "UI UX Course",
        "Animation & VFX Course",
        "Cloud Computing Course",
        "Prompt Engineering with AI Course"
    ];
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
        Brochure,
        BrochureName,
        SelectCourses,
        ctaType,
        setCtaType,
    };

    return (
        <>
            <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-center justify-between gap-0.5 py-5 md:py-6  px-[20px] md:px-24 ">
                <div className="w-full  text-[#042A76] lg:leading-5 text-xl  font-bold flex flex-row  gap-2 justify-center items-center">
                    <div>
                        Our Students are
                    </div>
                    <div className="text-[#2251FF] lg:leading-5 lg:text-xl  font-bold">
                        <span className="text-[#E87D1A]">W</span>orking In
                    </div>
                </div>

                <div className='w-full space-y-4 py-4'>
                    {/* First Marquee */}
                    <Marquee speed={30} autoFill className="overflow-y-hidden">
                        {companies1.map((company, index) => (
                            <Card key={index} className="w-[100px] h-[64px] md:w-[150px] md:h-[74px] mx-4 md:mx-7 cursor-pointer transition items-center justify-center rounded-[15px] bg-[#fffff]">
                                <CardContent className="w-full p-2 flex items-center justify-center h-full">
                                    <Image
                                        className={`w-[85px] md:w-[110px] object-contain h-[${company?.height}]`}
                                        width={500}
                                        height={500}
                                        src={company.src}
                                        alt={company.alt}
                                    />
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>

                    {/* Second Marquee */}
                    <Marquee speed={30} autoFill direction="right" className="">
                        {companies2.map((company, index) => (
                            <Card key={index} className="w-[100px] h-[64px] md:w-[150px] md:h-[74px] mx-4 md:mx-7 cursor-pointer transition items-center justify-center rounded-[15px] bg-[#fffff]">
                                <CardContent className="w-full p-2 flex items-center justify-center h-full">
                                    <Image
                                        className={`w-[85px] md:w-[110px] object-contain h-[${company?.height}]`}
                                        width={500}
                                        height={500}
                                        src={company.src}
                                        alt={company.alt}
                                    />
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>
                </div>
                <CTAButton name="Book A Free Demo"
                    styleClasses="mt-4 bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 text-white rounded-full font-semibold text-[12px] md:text-[14px] md:px-11"
                    _this={_this}
                />
            </div>
        </>
    )
}

export default PlacementPartners