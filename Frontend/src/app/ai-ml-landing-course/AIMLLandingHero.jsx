"use client"
import { useState } from 'react'
import certiface from '../../../public/assets/images/certified.png'
import iso from '../../../public/assets/images/isoNew.png'
import startup from '../../../public/assets/images/startup.png'
import Image from 'next/image'
import msme from '../../../public/assets/images/msmeOne.svg'
import AdmissionForm from '@/components/common/LandingAdmissionForm'

function AIMLLandingHero({
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
            <div className='w-full lg:hidden inline '>
                <div className='w-full text-[#042A76] text-xl font-bold  text-center '>
                    <span className="text-[#E87D1A]">A</span>re you looking for the Best Institute for 
                     <span className=' text-[#00A2E7] text-xl font-bold  text-center '> AI & ML in Eastern India ?</span>
                </div>
                
                <div className='w-full text-[#232D63] text-base   font-bold   text-center pt-1'>
                    <div><span className="text-[#E87D1A]">Y</span>ou are in the right place to be in. Scroll downwards to know more
                    </div>
                    

                </div>
            </div>

            <div className='w-full flex lg:hidden pt-3 '>

                <div className='w-full flex flex-col gap-y-3 justify-center items-start min-[450px]:px-5 min-[550px]:px-10'>

                    <div className='w-full  flex justify-between  '>
                        <div className='  text-black text-xs  font-semibold flex  flex-col items-start gap-y-3  '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Network and Recognition
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Placement Assistance
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Offline/Online Classes
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> 100+ Hiring Partners 
                            </div>


                        </div>



                        <div className='  text-black text-xs  font-semibold flex   flex-col items  gap-y-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>  High salaried jobs (4-5 LPA)
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> 12 Months course
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>  2000+ successful students
                            </div>
                            


                        </div>

                    </div>

                </div>

            </div>

          

            <div className='hidden w-[70%] lg:flex flex-col gap-y-10 items-start justify-start '>
                <div className='w-full hidden lg:inline'>
                    <div className='w-full text-[#232D63] lg:leading-9 lg:text-3xl  font-bold  text-start '>
                        <span className="text-[#E87D1A]">A</span>re you looking for the Best Institute <span className='text-[#00A2E7]'>for AI & ML in Eastern India ?</span>

                    </div>
                    <div className='w-full text-[#232D63] lg:leading-9 lg:text-3xl  font-extrabold flex justify-start gap-x-2 text-start pt-3'>
                        <div><span className="text-[#E87D1A]">Y</span>ou are in the right place to be in. Scroll downwards to know more.
                        </div>


                    </div>
                </div>

                <div className='w-full flex flex-col gap-y-3 justify-center items-start  '>
                    <div className='w-full  flex justify-start   items-center gap-x-4'>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> Network and Recognition
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> High salaried jobs (4-5 LPA)

                            </div>


                        </div>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3'>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>  Placement Assistance
                            </div>


                        </div>

                    </div>

                    <div className='w-full  flex justify-start   items-center gap-x-4 '>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3  '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> 12 Months course
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span>  Offline/Online Classes
                            </div>


                        </div>
                        <div className=' text-black text-sm  font-semibold flex   gap-x-3 '>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> 2000+ successful students 
                            </div>
                            <div>
                                <span className='text-[#00A2E7]'>✦</span> 100+ Hiring Partners
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

export default AIMLLandingHero