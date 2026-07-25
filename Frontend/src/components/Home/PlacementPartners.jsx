'use client'
import { useState } from "react";
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import CTAButton from "../common/CtaButton";

const companies1 = [
    { src: "/assets/icons/companies/Infosys_icon.svg", alt: 'Infosys' },
    { src: "/assets/icons/companies/Deloitte2.svg", alt: 'Deloitte' },
    { src: "/assets/icons/companies/AccentureIcon.svg", alt: 'Accenture' },
    { src: "/assets/icons/companies/flipkart.png", alt: 'Flipkart' },
    { src: "/assets/icons/companies/ntt-data.png", alt: 'NTT DATA' },
    { src: "/assets/icons/companies/birlasoft.png", alt: 'Birlasoft' },
    { src: "/assets/icons/companies/hp.png", alt: 'HP' },
    { src: "/assets/icons/companies/maruti-suzuki.png", alt: 'Maruti Suzuki' },
    { src: "/assets/icons/companies/yash-technologies.png", alt: 'YASH Technologies' },
    { src: "/assets/icons/companies/teamlease.png", alt: 'TeamLease' },
    { src: "/assets/icons/companies/m-pokket.png", alt: 'mPokket' },
    { src: "/assets/icons/companies/lead-height.png", alt: 'Lead Height' },
    { src: "/assets/icons/companies/mervice-infotech.png", alt: 'Mervice Infotech' },
    { src: "/assets/icons/companies/monotel.png", alt: 'Monotel' },
    { src: "/assets/icons/companies/edominer-expand.png", alt: 'eDominer EXPAND' },
    { src: "/assets/icons/companies/devant-it-solutions.png", alt: 'Devant IT Solutions' },
    { src: "/assets/icons/companies/ahrc.png", alt: 'AHRC Consultancy' },
    { src: "/assets/icons/companies/i-vista-techgen.png", alt: 'I-Vista Techgen' },
];

const companies2 = [
    { src: "/assets/icons/companies/TCS_icon.svg", alt: 'TCS' },
    { src: "/assets/icons/companies/WiproIcon.svg", alt: 'Wipro' },
    { src: "/assets/icons/companies/capgemini.svg", alt: 'Capgemini' },
    { src: "/assets/icons/companies/CognizantIcon.svg", alt: 'Cognizant' },
    { src: "/assets/icons/companies/genpact.svg", alt: 'Genpact' },
    { src: "/assets/icons/companies/Tech_Mahindra-Logo.svg", alt: 'TechMahindra' },
    { src: "/assets/icons/companies/HCLIcon.svg", alt: 'HCL' },
    { src: "/assets/icons/companies/fusion.png", alt: 'Fusion BPO' },
    { src: "/assets/icons/companies/meraqui.png", alt: 'Meraqui' },
    { src: "/assets/icons/companies/sjk-business-solutions.png", alt: 'SJK Business Solutions' },
    { src: "/assets/icons/companies/jpk-metallics.png", alt: 'JPK Metallics' },
    { src: "/assets/icons/companies/visa-steel.png", alt: 'VISA Steel' },
    { src: "/assets/icons/companies/samishti.png", alt: 'Samishti Infotech' },
    { src: "/assets/icons/companies/dr-p-banerji.png", alt: 'Dr. P Banerji Homeopathy' },
    { src: "/assets/icons/companies/hamilton-research.jpeg", alt: 'Hamilton Research' },
    { src: "/assets/icons/companies/neem-tree.png", alt: 'Neem Tree' },
    { src: "/assets/icons/companies/iimi.png", alt: 'IIMI' },
    { src: "/assets/icons/companies/yati-resource.png", alt: 'Yati Resource' },
];

function PlacementPartners() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);
    const Courses = "All Course"
    const email_sender = "ALL"
    const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
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
            <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center justify-between gap-0.5 py-5 md:py-6 px-[20px] md:px-24">
                <div className="w-full text-[#042A76] lg:leading-5 text-xl font-bold flex flex-row gap-2 justify-center items-center">
                    <div>
                        Our Students are
                    </div>
                    <div className="text-[#2251FF] lg:leading-5 lg:text-xl font-bold">
                        <span className="text-[#E87D1A]">W</span>orking In
                    </div>
                </div>

                <div className='w-full space-y-4 py-4'>
                    {/* First Marquee */}
                    <Marquee speed={35} autoFill className="overflow-y-hidden">
                        {companies1.map((company, index) => (
                            <div
                                key={index}
                                className="w-[130px] h-[58px] md:w-[170px] md:h-[68px] mx-2.5 md:mx-4 flex items-center justify-center rounded-[16px] bg-white border border-gray-200/80 shadow-sm hover:shadow-md px-3.5 py-2 transition-all duration-300 cursor-pointer"
                            >
                                <img
                                    className="max-h-[38px] md:max-h-[46px] max-w-[100px] md:max-w-[135px] w-auto h-auto object-contain"
                                    src={company.src}
                                    alt={company.alt}
                                />
                            </div>
                        ))}
                    </Marquee>

                    {/* Second Marquee */}
                    <Marquee speed={35} autoFill direction="right" className="overflow-y-hidden">
                        {companies2.map((company, index) => (
                            <div
                                key={index}
                                className="w-[130px] h-[58px] md:w-[170px] md:h-[68px] mx-2.5 md:mx-4 flex items-center justify-center rounded-[16px] bg-white border border-gray-200/80 shadow-sm hover:shadow-md px-3.5 py-2 transition-all duration-300 cursor-pointer"
                            >
                                <img
                                    className="max-h-[38px] md:max-h-[46px] max-w-[100px] md:max-w-[135px] w-auto h-auto object-contain"
                                    src={company.src}
                                    alt={company.alt}
                                />
                            </div>
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

export default PlacementPartners;