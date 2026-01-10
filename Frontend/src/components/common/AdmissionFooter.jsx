'use client'
import { useState } from "react";

import logo from '../../../public/assets/images/eme.svg'
import Image from "next/image";
import Link from "next/link"
import call from "../../../public/assets/icons/call.svg"
import sms from "../../../public/assets/icons/sms.svg"
import fb from "../../../public/assets/images/fb.svg"
import insta from "../../../public/assets/images/insta.svg"
import yt from "../../../public/assets/images/yt.svg"

export default function AdmissionFooter() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const _this = {
        isModalOpen,
        setIsModalOpen,
    };
    return (
        <div className="w-full bg-[#070B23] border-t-2 border-[#FAF9F9]">
            
            <div
                className="bg-[#070B23] text-[#fff] w-full 2xl:w-[1380px] mx-auto    lg:h-auto py-[20px] px-[20px] lg:py-[60px] lg:px-24">

                <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[100px]'>
                    <div className='flex flex-col justify-start items-start gap-[20px] lg:gap-[40px]'>
                        <Image
                            className=" w-[80px] h-[34px] lg:w-[120px]   "
                            width={500}
                            height={500}
                            src={logo}
                            alt="EME Logo" />
                        <div className='text-[13px] lg:text-[15px] font-[400] border-b w-[300px] pb-[10px]'>
                            Explore, learn, and grow with us today. With a diverse range of courses, expert instructors, and a supportive community, we&apos;re here to empower you on your educational journey.

                        </div>
                        <div className='flex justify-start items-start gap-[20px] lg:gap-[30px]'>
                            <a href='https://www.facebook.com/emeacademy.Official' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={fb}
                                    alt="EME Logo" />
                            </a>

                            <a href='https://www.instagram.com/emeacademy.co.in/'>
                                <Image
                                    className=" w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={insta}
                                    alt="EME Logo" />
                            </a>

                            <a href='https://www.youtube.com/@emeacademy' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={yt}
                                    alt="EME Logo" />
                            </a>
                        </div>
                    </div>



                    <div>
                        <ul className=' flex flex-col  gap-[20px] lg:gap-[40px]'>
                            <li className='text-[15px] lg:text-[24px] font-[700] leading-[20px] lg:leading-[28px] text-white text-nowrap'>Resources</li>
                            <div className='flex flex-col justify-start items-start gap-[10px] text-[13px] lg:text-[14px] font-[400] leading-[20px] lg:leading-[24px] text-white/80'>

                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>SAP Course</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Digital Marketing</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Web Development </div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Hotel Management</div>
                                    </li>
                                </div>
                                <div onClick={() => { _this?.setIsModalOpen(true) }}>
                                    <li className='hover:underline cursor-pointer'>
                                        <div>Graphic Design</div>
                                    </li>
                                </div>

                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col   gap-[20px] lg:gap-[40px]'>
                            <li className='text-[15px] lg:text-[24px] font-[700] leading-[20px] lg:leading-[28px] text-white'>
                                Contact Us
                            </li>
                            <div className='text-[13px] lg:text-[14px] font-[400] leading-[20px] lg:leading-[24px] text-white/80'>
                                <li className='flex justify-start items-center'>
                                    {/* <img src={location_icon} alt="" /> */}
                                    Office No - 505, 5th Floor, Tower- 1,Kolkata,</li>
                                <li>West Bengal, India,700136</li>

                                <li className='flex items-center gap-2 mt-[15px] lg:mt-[25px]'>
                                    <Image
                                        className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                                        width={500}
                                        height={500}
                                        src={call}
                                        alt="call icon" />
                                    <a href="tel:+91-9093926145">9093926145</a>
                                </li>
                                <li className='flex items-center  gap-2 mt-[3px]'>

                                    <Image
                                        className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                                        width={500}
                                        height={500}
                                        src={sms}
                                        alt="call icon" />
                                    <a href="mailto:info@emeacademy.co.in"
                                        className=' font-[400]  '>
                                        info@emeacademy.co.in
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

            <div className='w-full bg-[#ffffff]'>
                <div className='w-full mx-auto 2xl:w-[1380px] flex text-black flex-col md:flex-row justify-center items-center gap-[10px]  mt-[20px] md:items-center  md:justify-between px-[20px]  lg:px-24  py-[20px]  text-[11px] lg:text-[12px] xl:text-[14px] font-[400] leading-[12px] lg:leading-[16px]'>
                    <div className='text-[15px]'> © 2024 <span className='text-[#508ef8]'>EME Academy</span>  | All Rights Reserved. </div>
                    <div className='text-[15px]'>Design & Developed By <a href="https://emeacademy.co.in/" className='text-[18px] font-[600] text-[#508ef8]'>EME IT Team</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
