'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import google from '../../../../public/assets/icons/googleLogo.svg'
import justdial from '../../../../public/assets/icons/JustDialLogo.svg'
import star from '../../../../public/assets/icons/startIcon.svg'
import CertifiedByIcon from '../../../../public/assets/images/Data_Analytics_Landing/Certifiedby.svg'
import MSME from '../../../../public/assets/images/Data_Analytics_Landing/MSMEblack.svg'
import Iso from '../../../../public/assets/icons/ISOIcon.svg'
import StartUpIndia from '../../../../public/assets/icons/StartUpIndiaIcon.svg'
import FeesIcon from '../../../../public/assets/icons/Group3.svg'
import DurationIcon from '../../../../public/assets/icons/PlacementIcon.svg'
import EMIIcon from '../../../../public/assets/icons/EMIIcon.svg'
import { Dialog, DialogTrigger, DialogContent, } from "@/components/ui/dialog";

import LandingAdmissionForm from '@/components/common/LandingAdmissionForm';

export default function GraphicsDesignHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = "Graphics Designing Course";
    const email_sender = "ALL";
    const Brochure = "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
    const BrochureName = "graphic_design_brochure.pdf";
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
        Brochure,
        BrochureName
    };


    return (
        <>
            {/* Hero Section */}
            <div className="w-full flex flex-col lg:flex-row md:justify-between gap-1 lg:gap-[10px] items-center py-[8px] px-[20px] md:px-28 max-w-[1380px] mx-auto">
                

                {/* left content */}
                <div className=' flex flex-col  md:items-start justify-center mt-2 md:mt-8 gap-4 md:gap-6 text-[#FAF9F9]'>
                    <div className='flex flex-col gap-2'>
                        <div className="text-[11px] text-[#E87D1A] font-semibold bg-[#FFF5ED] py-1 px-4 rounded-lg w-fit">
                            Learn & Get Hired in 6 Months!
                        </div>

                        <h1 className=' max-w-3xl text-[20px] lg:text-[24px] font-bold text-black text-left md:text-left md:pr-6'>
                            Best Graphic Design Course in Mumbai- Master Photoshop, Illustrator, CoreIDRAW & More
                        </h1>

                        <p className='max-w-3xl text-[10px] md:text-[14px] text-[#757575] leading-[20px] font-[500] md:pr-40'>
                            Learn with EME Academy, the best graphic design institute in Mumbai, and gain hands-on expertise in CorelDraw, Adobe Photoshop, Illustrator, InDesign, and Lightroom. Whether you dream of working in top design studios or want to earn from lucrative freelance projects, our graphic design training institute in Mumbai gives you the right skills to build a thriving career in creative design.
                        </p>
                    </div>

                    {/* Rating and Brochure */}
                    <div className='w-full flex flex-row justify-center md:justify-start items-center gap-2 text-[#fff] text-[12px]'>
                        <Button className="hidden lg:flex gap-2 bg-[#0057E2] hover:bg-[#0057E2] text-white font-bold py-2 px-7 mr-4 rounded-[24px] transition-all" onClick={() => { _this?.setIsModalOpen(true) }}>
                            Download Brochure <ArrowRight size={20} />
                        </Button>

                        <div className='flex flex-row items-center gap-2  border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src={google} alt='Google Logo' width={17} height={17} />
                            <div className='flex items-center font-[500] text-black'>
                                4.8/5 <Image src={star} alt='star' width={10} height={10} />
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-2  border border-1 border-[#bebebe] text-[#000000] rounded-[67px] px-4 py-2'>
                            <Image src={justdial} alt='JustDial Logo' width={40} height={40} />
                            <div className='flex items-center font-[500] text-black'>
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

                {/* right content */}
                {/* dialog box for mobile view*/}
                <div className='md:hidden flex flex-row items-center justify-center gap-2'>
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

                    <Button
                        className="bg-[#ffffff] text-[#0057E2] font-bold py-1 px-5 text-[12px] rounded-[24px] transition-all"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Download Brochure
                    </Button>
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
                            <Image src={FeesIcon} alt='EMI Icon' width={46} height={46} />
                            <div>
                                Specalists <br /><strong className='text-[14px] text-[#121112]'>10+ Years of Excellence</strong>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-start gap-2'>
                            <Image src={EMIIcon} alt='EMI Icon' width={46} height={46} />
                            <div>
                                EMI options available <br /><strong className='text-[14px] text-[#121112]'>EMI at 0% Interest</strong>
                            </div>
                        </div>

                        <Button className="bg-[#0057E2] hover:bg-[#0057E2] text-white font-bold py-2 px-7 mr-4 rounded-[24px] transition-all flex items-center justify-center" onClick={() => { _this?.setIsModalOpen(true) }}>
                            Apply Now
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    )
}
