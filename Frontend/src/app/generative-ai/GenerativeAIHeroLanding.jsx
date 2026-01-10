"use client";
import { useState } from "react";
import certiface from '../../../public/assets/images/certified.png'
import iso from '../../../public/assets/images/isoNew.png'
import startup from '../../../public/assets/images/startup.png'
import Image from 'next/image'
import msme from '../../../public/assets/images/msmeOne.svg'
import AdmissionForm from '@/components/common/LandingAdmissionForm'

function GenerativeAIHeroLanding({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
}) {

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
        <div className="w-full  md:max-h-[100vh] max-w-[1380px] mx-auto flex flex-col md:flex-row items-center justify-between gap-y-3  lg:gap-x-6 py-5 md:py-10  px-5 md:px-24 ">
            <div className='w-full lg:hidden inline'>
                <div className='w-full text-[#042A76] text-xl font-bold text-nowrap text-center '>
                    <span className="text-[#E87D1A]">B</span>uild Up Your Career as a
                </div>
                <div className='w-full text-[#00A2E7] text-xl font-bold text-nowrap text-center '>
                    Prompt Engineering Expert
                </div>
                <div className='w-full text-[#232D63] text-base   font-bold flex justify-center gap-x-1 lg:gap-x-2 text-center pt-1'>
                    <div><span className="text-[#E87D1A]">J</span>oin Eastern India’s Best Professional Training Institute
                    </div>
                    

                </div>
            </div>

            <div className='w-full flex lg:hidden pt-3'>

                <div className='w-full flex flex-col gap-y-3 justify-center items-start min-[450px]:px-5 min-[550px]:px-10'>

                    <div className='w-full  flex justify-between  '>
                        <div className='  text-black text-xs  font-semibold flex  flex-col items-start gap-y-3  '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Cutting Edge Tools
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Expert Instructors
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Practical Experience
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Practical Applications
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Flexible Schedules
                            </div>


                        </div>



                        <div className='  text-black text-xs  font-semibold flex   flex-col items  gap-y-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Real World Projects
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Industry-relevant Knowledge
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>  Natural Language Processing
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Interactive Learning
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Focus on Applicability
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        

            <div className='hidden w-[70%] lg:flex flex-col gap-y-10 items-start justify-start '>
                <div className='w-full hidden lg:inline'>
                    <div className='w-full text-[#232D63] lg:leading-10 lg:text-3xl  font-bold  text-start '>
                        <span className="text-[#E87D1A]">B</span>uild Up Your Career as a <span className='text-[#00A2E7]'>Prompt Engineering Expert with AI</span>

                    </div>
                    <div className='w-full text-[#232D63] lg:leading-10 lg:text-3xl  font-extrabold flex justify-start gap-x-2 text-start '>
                        <div><span className="text-[#E87D1A]">J</span>oin Eastern India’s Best Professional Training Institute
                        </div>
                        

                    </div>
                </div>

                <div className='w-full flex flex-col gap-y-3 justify-center items-start  '>
                    <div className='w-full  flex justify-start   items-center gap-x-4'>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Cutting Edge Tools
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Real World Projects 

                            </div>


                        </div>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3'>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Expert Instructors
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Industry-relevant Knowledge
                            </div>

                        </div>

                    </div>

                    <div className='w-full  flex justify-start   items-center gap-x-4 '>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3  '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Practical Experience
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>   Natural Language Processing
                            </div>


                        </div>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Practical Applications
                            </div>
                            

                        </div>

                    </div>

                    <div className='w-full  flex justify-start   items-center gap-x-4 '>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3  '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Interactive Learning
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>   Flexible Schedules
                            </div>


                        </div>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Focus on Applicability
                            </div>
                            

                        </div>

                    </div>

                </div>

                <div className='hidden w-full  lg:flex flex-col items-start gap-y-5'>
                    <div className='w-full  flex items-center gap-x-2'>
                        <div>
                            <Image className='w-8 h-8 '
                                width={500}
                                height={500}
                                src={certiface}
                                alt='certiface'
                            />
                        </div>
                        <div className='text-black text-xl leading-5 font-semibold'>Certified by </div>
                    </div>

                    <div className='w-full flex items-center justify-start gap-x-4'>

                        <div>
                            <Image

                                width={150}
                                height={150}
                                src={msme}
                                alt="msme"
                            />
                        </div>
                        <div>
                            <Image className='' width={150} height={150} src={startup} alt='startup' />
                        </div>
                        <div>
                            <Image className='' width={70} height={70} src={iso} alt='iso' />
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-[30%] hidden lg:inline'>
                <AdmissionForm  {..._this} />
            </div>
        </div>
    )
}

export default GenerativeAIHeroLanding