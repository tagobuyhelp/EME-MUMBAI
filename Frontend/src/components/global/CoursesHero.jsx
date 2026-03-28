"use client"
import Image from 'next/image'
import { useState } from "react";
import { Card } from "@/components/ui/card"
import LandingAdmissionForm from '@/components/common/LandingAdmissionForm';
import LandingAdmissionFormWithTiming from '@/components/common/LandingAdmissionFormWithTiming';
import CTAButton from '../common/CtaButton';



function CoursesHero({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
    formVariant,
    badgeText,
    title,
    description,
    googleRating,
    justdialRating,
    heroStats = [] }) {

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
        formVariant,
    };

    return (
        <>
            {/* Hero Section */}
            <div className="w-full flex flex-col lg:flex-row md:justify-between gap-1 lg:gap-[10px] items-center py-[8px] px-[20px] md:px-28 max-w-[1380px] mx-auto">

                {/* left content */}
                <div className='flex flex-col  md:items-start justify-center mt-2 md:mt-8 gap-4 md:gap-6 text-[#FAF9F9]'>
                    <div className='flex flex-col gap-2'>
                        <div className="text-[11px] text-[#E87D1A] font-semibold bg-[#FFF5ED] py-1 px-4 rounded-lg w-fit">
                            {badgeText}
                        </div>

                        <h1 className='text-[24px] lg:text-[34px] font-extrabold text-[#FFF5ED] text-left md:text-left md:pr-6'>
                            {title}
                        </h1>

                        <p className='text-[12px] md:text-[16px] text-[#FFF5ED] leading-[20px] font-[500] md:pr-40'>
                            {description}
                        </p>
                    </div>

                    {heroStats?.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full">
                            {heroStats.map((stat, idx) => (
                                <div
                                    key={`${stat?.value ?? "stat"}-${idx}`}
                                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-3 py-2"
                                >
                                    {stat?.iconSrc ? (
                                        <Image
                                            src={stat.iconSrc}
                                            alt={stat.iconAlt || "icon"}
                                            width={18}
                                            height={18}
                                            className="mt-0.5"
                                        />
                                    ) : (
                                        <div className="text-base leading-none">{stat.icon}</div>
                                    )}
                                    <div className="flex flex-col leading-tight">
                                        <div className="text-[12px] md:text-[13px] font-extrabold text-[#FFF5ED]">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] md:text-[11px] font-semibold text-white/80">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Rating and Brochure */}
                    <div className='w-full flex flex-row justify-center md:justify-start items-center gap-2 text-[#fff] text-[12px]'>
                        <CTAButton name="Download Brochure ->"
                            styleClasses="hidden md:block text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                            _this={_this}
                        />

                        <div className='flex flex-row items-center gap-2  border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src="/assets/icons/googleLogo.svg" alt='Google Logo' width={17} height={17} />
                            <div className='flex items-center font-[500] text-white'>
                                {googleRating} <Image src="/assets/icons/startIcon.svg" alt='star' width={10} height={10} />
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-2  border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src="/assets/icons/JustDialLogo.svg" alt='JustDial Logo' width={40} height={40} />
                            <div className='flex items-center font-[500] text-white'>
                                {justdialRating} <Image src="/assets/icons/startIcon.svg" alt='star' width={10} height={10} />
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className='flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start gap-2'>
                        <div>
                            <Image src="/assets/icons/CertifiedByIcon.svg" alt='Certified By Icon' width={100} height={100} />

                        </div>
                        <div className='flex flex-row gap-2'>
                            <Image src="/assets/icons/MSMEIcon.svg" alt='MSME Logo' width={70} height={70} />
                            <Image src="/assets/icons/ISOIcon.svg" alt='ISO Logo' width={60} height={60} />
                            <Image src="/assets/icons/StartUpIndiaIcon.svg" alt='Start Up India' width={110} height={60} className='mt-2' />
                        </div>
                    </div>
                </div>

                {/* right content */}
                {/* dialog box for mobile view*/}
                <div className='md:hidden flex flex-row items-center justify-center gap-2'>
                    <CTAButton name="Check Eligibility"
                        styleClasses="bg-[#0057E2] text-[#ffffff] font-bold py-1 px-7 text-[12px] rounded-[24px] transition-all border-none"
                        _this={_this}
                    />

                    <CTAButton name="Download Brochure"
                            styleClasses="bg-[#ffffff] text-[#0057E2] font-bold py-1 px-5 text-[12px] rounded-[24px] transition-all"
                            _this={_this}
                        />
                </div>

                {/* dialog box for desktop view */}
                {/* Admission Form */}
                <div className='hidden mt-10 lg:inline'>
                    {formVariant === "timing" ? (
                        <LandingAdmissionFormWithTiming {..._this} />
                    ) : (
                        <LandingAdmissionForm {..._this} />
                    )}
                </div>
            </div >

            {/* Bottom CTA Card */}
            <div className="hidden mt-1 relative w-full md:flex md:flex-col items-center justify-center z-[9] px-4 pb-6" >
                <Card className="w-full max-w-[1140px] px-6 py-4 shadow-l border border-gray-200 rounded-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#727272]">
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src="/assets/icons/PlacementIcon.svg" alt='EMI Icon' width={46} height={46} />
                            <div>
                                Placement Support <br /><strong className='text-[14px] text-[#121112]'>100% Placement Support</strong>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src="/assets/icons/Group3.svg" alt='EMI Icon' width={46} height={46} />
                            <div>
                                Specalists <br /><strong className='text-[14px] text-[#121112]'>10+ Years of Excellence</strong>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src="/assets/icons/EMIIcon.svg" alt='EMI Icon' width={46} height={46} />
                            <div>
                                EMI options available <br /><strong className='text-[14px] text-[#121112]'>EMI at 0% Interest</strong>
                            </div>
                        </div>

                        <CTAButton name="Apply Now"
                        styleClasses="bg-[#0057E2] hover:bg-[#0057E2] text-white hover:text-white font-bold py-2 px-7 mr-4 rounded-[24px] transition-all flex items-center justify-center"
                        _this={_this}
                    />
                    </div>
                </Card>
            </div >
        </>
    )
}

export default CoursesHero
