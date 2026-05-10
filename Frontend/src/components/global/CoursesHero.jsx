"use client"
import Image from 'next/image'
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
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
    heroStats = [],
    heroStatsTitle,
    ctaPrimaryLabel,
    ctaSecondaryLabel,
    ctaSecondaryHref,
    ctaBelowText,
    ctaRatingsLabel,
    showRatings = true,
    showCertifications = true,
    showBottomCtaCard = true,
    theme = "dark" }) {

    const isLight = theme === "light";
    const textColorClass = isLight ? "text-[#232D63]" : "text-[#FFF5ED]";
    const subTextColorClass = isLight ? "text-[#727272]" : "text-[#FFF5ED]";
    const badgeBgClass = isLight ? "bg-[#CAE5FF]" : "bg-[#FFF5ED]";
    const cardBgClass = isLight ? "bg-white border-gray-200" : "border-white/10 bg-white/10 backdrop-blur";

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
                <div className={`flex flex-col md:items-start justify-center mt-2 md:mt-8 gap-4 md:gap-6 ${isLight ? "text-[#232D63]" : "text-[#FAF9F9]"}`}>
                    <div className='flex flex-col gap-2'>
                        {badgeText ? (
                            <div className={`text-[11px] text-[#E87D1A] font-semibold ${badgeBgClass} py-1 px-4 rounded-lg w-fit`}>
                                {badgeText}
                            </div>
                        ) : null}

                        <h1 className={`text-[24px] lg:text-[34px] font-extrabold ${textColorClass} text-left md:text-left md:pr-6`}>
                            {title}
                        </h1>

                        <p className={`text-[12px] md:text-[16px] ${textColorClass} leading-[20px] font-[500] md:pr-40`}>
                            {description}
                        </p>
                    </div>

                    {ctaPrimaryLabel || ctaSecondaryLabel || ctaBelowText ? (
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="flex flex-row flex-wrap gap-2">
                                {ctaPrimaryLabel ? (
                                    <CTAButton
                                        name={ctaPrimaryLabel}
                                        styleClasses="bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-full !px-6 border-none"
                                        _this={_this}
                                    />
                                ) : null}
                                {ctaSecondaryLabel && ctaSecondaryHref ? (
                                    <Button
                                        variant="outline"
                                        asChild
                                        className={`rounded-full bg-transparent ${isLight ? "text-[#0057E2] border-[#0057E2]/40 hover:bg-[#0057E2]/10" : "text-[#FFF5ED] border-white/40 hover:bg-white/10 hover:text-[#FFF5ED]"}`}
                                    >
                                        <a href={ctaSecondaryHref}>{ctaSecondaryLabel}</a>
                                    </Button>
                                ) : null}
                            </div>
                            {ctaBelowText ? (
                                <div className={`${textColorClass} text-[12px] font-[500]`}>
                                    {ctaBelowText}
                                </div>
                            ) : null}
                        </div>
                    ) : null}

                    {heroStatsTitle ? (
                        <div className={`${textColorClass} text-[14px] md:text-[16px] font-extrabold `}>
                            {heroStatsTitle}
                        </div>
                    ) : null}

                    {heroStats?.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full pr-0 md:pr-40">
                            {heroStats.map((stat, idx) => (
                                <div
                                    key={`${stat?.value ?? "stat"}-${idx}`}
                                    className={`flex items-start gap-2 rounded-xl border ${cardBgClass} px-3 py-2`}
                                >
                                    {stat?.iconSrc ? (
                                        <Image
                                            src={stat.iconSrc}
                                            alt={stat.iconAlt || "icon"}
                                            width={18}
                                            height={18}
                                            className="mt-0.5"
                                        />
                                    ) : stat?.materialIcon ? (
                                        <span className={`material-symbols-outlined ${isLight ? "text-[#0057E2]" : "text-white"} text-[18px] leading-none relative top-[1px]`}>
                                            {stat.materialIcon}
                                        </span>
                                    ) : stat?.icon ? (
                                        <div className="text-base leading-none">{stat.icon}</div>
                                    ) : null}
                                    <div className="flex flex-col leading-tight">
                                        <div className={`text-[12px] md:text-[13px] font-extrabold ${textColorClass}`}>
                                            {stat.value}
                                        </div>
                                        {stat.label ? (
                                            <div className={`text-[10px] md:text-[11px] font-semibold ${isLight ? "text-[#727272]" : "text-white/80"}`}>
                                                {stat.label}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Rating and Brochure */}
                    {showRatings ? (
                        <div className={`w-full flex flex-row justify-center md:justify-start items-center gap-2 ${isLight ? "text-[#232D63]" : "text-[#fff]"} text-[12px]`}>
                            <CTAButton name={ctaRatingsLabel || "Download Brochure ->"}
                                styleClasses="hidden md:block text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-4 border-none"
                                _this={_this}
                            />

                            <div className={`flex flex-row items-center gap-2  border border-1 ${isLight ? "border-gray-200 bg-white" : "border-[#bebebe]"} text-[#000000] rounded-[67px] px-4 py-2`}>
                                <Image src="/assets/icons/googleLogo.svg" alt='Google Logo' width={17} height={17} />
                                <div className={`flex items-center font-[500] ${isLight ? "text-[#232D63]" : "text-white"}`}>
                                    {googleRating} <Image src="/assets/icons/startIcon.svg" alt='star' width={10} height={10} />
                                </div>
                            </div>

                            <div className={`flex flex-row items-center gap-2  border border-1 ${isLight ? "border-gray-200 bg-white" : "border-[#bebebe]"} text-[#000000] rounded-[67px] px-4 py-2`}>
                                <Image src="/assets/icons/JustDialLogo.svg" alt='JustDial Logo' width={40} height={40} />
                                <div className={`flex items-center font-[500] ${isLight ? "text-[#232D63]" : "text-white"}`}>
                                    {justdialRating} <Image src="/assets/icons/startIcon.svg" alt='star' width={10} height={10} />
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {/* Certifications */}
                    {showCertifications ? (
                        <div className='flex flex-row md:justify-center md:items-center justify-start items-center gap-2 flex-nowrap overflow-x-auto'>
                            <div className='flex-shrink-0'>
                                <Image src="/assets/icons/CertifiedByIcon.svg" alt='Certified By Icon' width={100} height={100} />

                            </div>
                            <div className='flex flex-row items-center gap-2 flex-shrink-0'>
                                <Image src="/assets/icons/MSMEIcon.svg" alt='MSME Logo' width={70} height={70} />
                                <Image src="/assets/icons/ISOIcon.svg" alt='ISO Logo' width={60} height={60} />
                                <Image src="/assets/icons/StartUpIndiaIcon.svg" alt='Start Up India' width={110} height={60} className='mt-2' />
                            </div>
                        </div>
                    ) : null}
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
            {showBottomCtaCard ? (
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
            ) : null}
        </>
    )
}

export default CoursesHero
