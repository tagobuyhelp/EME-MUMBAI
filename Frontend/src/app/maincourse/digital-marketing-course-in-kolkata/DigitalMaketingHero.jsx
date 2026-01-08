'use client'
import Image from 'next/image'
import { useState } from "react";
import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"

import LandingAdmissionForm from '@/components/common/LandingAdmissionForm';
import AdmissionForm from '@/components/common/LandingAdmissionForm'
import google from '../../../../public/assets/icons/googleLogo.svg'
import justdial from '../../../../public/assets/icons/JustDialLogo.svg'
import star from '../../../../public/assets/icons/startIcon.svg'
import CertifiedByIcon from '../../../../public/assets/icons/CertifiedByIcon.svg'
import MSME from '../../../../public/assets/icons/MSMEIcon.svg'
import Iso from '../../../../assets/icons/ISOIcon.svg'
import StartUpIndia from '../../../../public/assets/icons/StartUpIndiaIcon.svg'
import FeesIcon from '../../../../public/assets/icons/Group3.svg'
import DurationIcon from '../../../../public/assets/icons/PlacementIcon.svg'
import EMIIcon from '../../../../public/assets/icons/EMIIcon.svg'



function DigitalMarketingHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Courses = "Digital Marketing Course"
    const SelectCourses = [
        "Advanced Digital Marketing (Facebook & Google Ads)",
        "Master Digital Marketing with AI",
    ];
    const email_sender = "ALL"
    const Brochure = "https://drive.google.com/file/d/1UkM4UILziWhL-n7secspw-j4K3lFoaXP/view?usp=sharing";
    const BrochureName = "digital_marketing-brochure.pdf";
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        SelectCourses,
        email_sender,
        Brochure,
        BrochureName,
    };

    return (
        <>
            <div className="w-full flex flex-col lg:flex-row md:justify-between gap-1 lg:gap-[10px] items-center py-[8px] px-[20px] md:px-28 max-w-[1380px] mx-auto ">
                
                {/* Left Content */}
                <div className='flex flex-col  md:items-start justify-center mt-2 md:mt-8 gap-4 md:gap-6 text-[#FAF9F9]'>
                    <div className='flex flex-col gap-2'>
                        <div className="text-[11px] text-[#E87D1A] font-semibold bg-[#FFF5ED] py-1 px-4 rounded-lg w-fit">
                            From Beginner to Job-Ready in Just 6 Months!
                        </div>
                        <h1 className='text-[24px] lg:text-[36px] font-extrabold text-[#ffffff] text-left md:text-left md:pr-6'>
                            Best Digital Marketing Course in Kolkata- Master SEO, Google Ads & AI Tools
                        </h1>
                        <p className='text-[12px] md:text-[16px] text-[#ffffff] leading-[20px] font-[500] md:pr-40'>
                            Upskill with EME Academy’s Advanced and AI-Powered Digital Marketing Course in Kolkata. Learn Google Ads, Facebook Ads, Sales Funnels, AI-powered automation, SEO, WhatsApp Marketing, WordPress, and more – all in one place and earn up to ₹10 LPA!
                        </p>
                    </div>
                    {/* Rating and Brochure */}
                    <div className='w-full flex flex-row justify-center md:justify-start items-center gap-2 text-[#ffffff] text-[12px]'>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    className="hidden lg:flex gap-2 bg-[#0057E2] hover:bg-[#0057E2] text-[#ffffff] font-bold py-1 px-7 text-[12px] rounded-[24px] transition-all"
                                >
                                    Download Brochure <ArrowRight size={20} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                                <LandingAdmissionForm {..._this} />
                            </DialogContent>
                        </Dialog>
                        <div className='flex flex-row items-center gap-2 bg-[#ffffff] border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src={google} alt='Google Logo' width={17} height={17} />
                            <div className='flex items-center font-[500]'>
                                4.8/5 <Image src={star} alt='star' width={10} height={10} />
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2 bg-[#ffffff] border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src={justdial} alt='JustDial Logo' width={40} height={40} />
                            <div className='flex items-center font-[500]'>
                                4.8/5 <Image src={star} alt='star' width={10} height={10} />
                            </div>
                        </div>
                    </div>
                    {/* Certifications */}
                    <div className='flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start gap-2'>
                        <div>
                            <Image src={CertifiedByIcon} alt='Certified By Icon' width={100} height={100} />

                        </div>
                        <div className='flex flex-row gap-2'>
                            <Image src={MSME} alt='MSME Logo' width={70} height={70} />
                            <Image src={Iso} alt='ISO Logo' width={60} height={60} />
                            <Image src={StartUpIndia} alt='Start Up India Logo' width={110} height={42} className='mt-2' />
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-row items-center justify-center gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="bg-[#0057E2] text-[#ffffff] font-bold py-1 px-7 text-[12px] rounded-[24px] transition-all"
                            >
                                Check Eligibility
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                            <LandingAdmissionForm {..._this} />
                        </DialogContent>
                    </Dialog>


                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="bg-[#ffffff] text-[#0057E2] font-bold py-1 px-5 text-[12px] rounded-[24px] transition-all"
                            >
                                Download Brochure
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                            <LandingAdmissionForm {..._this} />
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Admission Form */}
                <div className='hidden mt-10 lg:inline'>
                    <AdmissionForm  {..._this} />
                </div>
            </div>

            {/* Bottom CTA Card */}
            <div className="hidden mt-10 relative w-full md:flex md:flex-col items-center justify-center z-[9] px-4 pb-6">
                <Card className="w-full max-w-[1140px] px-6 py-4 shadow-l border border-gray-200 rounded-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#727272]">
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src={DurationIcon} alt='EMI Icon' width={46} height={46} />
                            <div>
                                Placement Support <br /><strong className='text-[14px] text-[#121112]'>100% Placement</strong>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src={EMIIcon} alt='EMI Icon' width={46} height={46} />
                            <div>
                                EMI options available <br /><strong className='text-[14px] text-[#121112]'>EMI at 0% Interest</strong>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src={FeesIcon} alt='EMI Icon' width={46} height={46} />
                            <div>
                                Expertise <br /><strong className='text-[14px] text-[#121112]'>10+ Years of Excellence</strong>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    className="bg-[#0057E2] hover:bg-[#0057E2] text-[#ffffff] font-bold py-1 px-7 text-[12px] rounded-[24px] transition-all"
                                >
                                    Apply Now
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                                <LandingAdmissionForm {..._this} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default DigitalMarketingHero