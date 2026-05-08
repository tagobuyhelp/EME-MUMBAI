'use client'

import { useState } from "react";
import { ArrowRight, Percent } from "lucide-react";
import CTAButton from "@/components/common/CtaButton";


export default function MADetails({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,}) {
    
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
    };

    return (
        <div className='w-full  max-w-[1380px] mx-auto flex flex-col items-start gap-[20px] py-[20px]  px-[20px] md:px-24'>
            
            <div className='w-full flex justify-center items-center'>
                <div className=' text-[22px] font-[700] leading-[52px] text-[#232D63]'>
                    Course Details
                </div>
            </div>
            <div className='w-full h-auto border-[1px] border-[#EEEEEE] rounded-[16px] overflow-hidden'>
                <div className='flex flex-row justify-center pt-4 pb-4 px-4'>
                    <div className='relative bg-[#e3f5fd] rounded-md box-border text-center lg:text-start text-[16px] lg:text-[20px] leading-[26px] text-[#41ABE0] font-[700]  py-[6px] md:py-[14px] px-[18px] md:px-[50px]'>
                    Advanced Certificate Program in Digital Marketing
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start pt-4 px-[22px] lg:px-[40px] text-[16px] text-[#232D63] leading-[26px] font-[500]">
                    Course Details
                </div>

                {/* Icons and Details */}
                <div className='flex  flex-col items-center justify-center gap-[18px] py-[16px] '>
                    <div className='flex flex-col lg:flex-row w-full px-[22px] lg:px-[40px] gap-[30px] items-start lg:items-center justify-between'>
                        <div className='flex  items-center justify-center gap-[10px]'>
                            <div className='bg-[#00A2E7] rounded-[4px] p-[6px] w-[42px] h-[42px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M29.485 16.4375C29.485 23.7975 23.5117 29.7708 16.1517 29.7708C8.79169 29.7708 2.81836 23.7975 2.81836 16.4375C2.81836 9.07751 8.79169 3.10417 16.1517 3.10417C23.5117 3.10417 29.485 9.07751 29.485 16.4375Z" stroke="#FAF9F9" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.0982 20.6775L16.9649 18.2108C16.2449 17.7842 15.6582 16.7575 15.6582 15.9175V10.4508" stroke="#FAF9F9" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='fle flex-col text-[12px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                <div className='font-[600] text-[14px]'>
                                    4 Months
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='bg-[#00A2E7] rounded-[4px] p-[6px] w-[42px] h-[42px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M10.9854 3.10417V7.10417" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.6514 3.10417V7.10417" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.98535 12.5575H27.652" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28.3184 11.7708V23.1042C28.3184 27.1042 26.3184 29.7708 21.6517 29.7708H10.985C6.31836 29.7708 4.31836 27.1042 4.31836 23.1042V11.7708C4.31836 7.77084 6.31836 5.10417 10.985 5.10417H21.6517C26.3184 5.10417 28.3184 7.77084 28.3184 11.7708Z" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.3127 18.7042H16.3246" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.3771 18.7042H11.3891" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.3771 22.7042H11.3891" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='fle flex-col text-[12px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                <div className='font-[600] text-[14px]'>
                                    3 hrs. a day , once a week
                                </div>
                                <div>
                                    Saturday / Sunday
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='bg-[#00A2E7] rounded-[4px] p-[6px] w-[42px] h-[42px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M18.6523 13.0875V16.7875C18.6523 19.9075 15.7423 22.4375 12.1523 22.4375C8.56234 22.4375 5.65234 19.9075 5.65234 16.7875V13.0875C5.65234 16.2075 8.56234 18.4375 12.1523 18.4375C15.7423 18.4375 18.6523 16.2075 18.6523 13.0875Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.6523 8.0875C18.6523 8.9975 18.4023 9.8375 17.9623 10.5575C16.8923 12.3175 14.6923 13.4375 12.1523 13.4375C9.61234 13.4375 7.41235 12.3175 6.34235 10.5575C5.90235 9.8375 5.65234 8.9975 5.65234 8.0875C5.65234 6.5275 6.38234 5.1175 7.55234 4.0975C8.73234 3.0675 10.3523 2.4375 12.1523 2.4375C13.9523 2.4375 15.5723 3.0675 16.7523 4.0875C17.9223 5.1175 18.6523 6.5275 18.6523 8.0875Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.6523 8.0875V13.0875C18.6523 16.2075 15.7423 18.4375 12.1523 18.4375C8.56234 18.4375 5.65234 16.2075 5.65234 13.0875V8.0875C5.65234 4.9675 8.56234 2.4375 12.1523 2.4375C13.9523 2.4375 15.5723 3.0675 16.7523 4.0875C17.9223 5.1175 18.6523 6.5275 18.6523 8.0875Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='fle flex-col text-[12px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                <div className='font-[600] text-[14px]'>
                                Total Fee - INR. 35,000 
                                </div>
                                <div>
                                    Full Course
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='bg-[#00A2E7] rounded-[4px] p-[6px] w-[42px] h-[42px] flex justify-center items-center'>
                                <Percent className="w-5 text-white" />
                            </div>
                            <div className='fle flex-col text-[12px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                <div className='font-[600] text-[14px]'>
                                Discounted Fee - INR. 30,000 
                                </div>
                                <div>
                                    Discounted Price
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* This is Underline */}
                <div className='w-[95%] h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]'></div>
                {/* Fees Division */}
                <div className='flex flex-col justify-start items-start pt-4 px-[22px] lg:px-[40px] text-[16px] text-[#232D63] leading-[26px] font-[500]'>
                    Fees Division
                </div>
                {/* Fees Devison Fess Details */}
                <div className="flex flex-row lg:flex-col border-[1px] border-[#EEEEEE] rounded-[10px] w-[95%] overflow-hidden mx-auto mt-[20px] lg:mt-[15px]">
                    <div className='flex flex-col lg:flex-row px-[22px] lg:px-[40px] py-[20px] justify-center items-start gap-[10px]'>
                        <div className='flex justify-center items-center gap-[5px]'>
                            <div className='text-[16px] font-[500] leading-[14px]  text-[#121112] text-wrap'>
                                Admission Fee
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-[5px]'>
                            <div className='text-[16px] font-[500] leading-[14px]  text-[#121112] text-wrap'>
                                First Instalment
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    {/* This is Underline */}
                    <div className='w-auto lg:w-full h-[1px] bg-[#EEEEEE] mx-auto lg:mt-[12px]'></div>

                    <div className='flex flex-col lg:flex-row px-[22px] lg:px-[40px] py-[20px] justify-center items-start gap-[10px] md:gap-[20px]'>
                        <div className='flex justify-center items-center gap-[5px]'>
                            <div className='text-[14px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                            INR 10,000 
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-[5px]'>
                            <div className='text-[14px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                            INR 10,000 
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="flex lg:justify-start justify-center px-[26px] my-6">
                
                <CTAButton
                                    name="Explore Now ->"
                                    styleClasses="flex text-[#fff] text-xs lg:text-[14px] rounded-md bg-[#0057E2] hover:bg-[#00a2e7]/90 px-[10px] lg:px-[160px] py-[12px] lg:py-[16px] font-[600] gap-2.5 group hover:text-white border-none hover:bg-[#0047C2]"
                                    _this={_this}
                                    />
                </div>
            </div>
        </div>
    )
}
