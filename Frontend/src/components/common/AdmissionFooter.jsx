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
                            alt="EME Academy Mumbai Logo" />
                        <div className='text-[13px] lg:text-[15px] font-[400] border-b w-[300px] pb-[10px]'>
                            Explore, learn, and grow with us today. With a diverse range of courses, expert instructors, and a supportive community, we&apos;re here to empower you on your educational journey.

                        </div>
                        <div className='flex justify-start items-center gap-[20px] lg:gap-[30px]'>
                            <a href='https://www.facebook.com/profile.php?id=61589298807614' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={fb}
                                    alt="EME Academy Mumbai facebook Logo" />
                            </a>

                            <a href='https://www.instagram.com/eme_academy_mumbai/' target='_blank'>
                                <Image
                                    className=" w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={insta}
                                    alt="EME Academy Mumbai Instagram Logo" />
                            </a>

                            <a href='https://www.pinterest.com/hiemeacademy/?invite_code=b612232379204c42a5e74b0e188e7d6d&sender=108578992882025' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-[30px] h-[30px] hover:scale-110 transition-all ease-out">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                                </svg>
                            </a>

                            <a href='https://www.youtube.com/@EMEAcademyMumbai' target='_blank'>
                                <Image
                                    className="  w-[30px] h-[30px] hover:scale-110 transition-all ease-out"
                                    width={500}
                                    height={500}
                                    src={yt}
                                    alt="EME Academy Mumbai Youtube Logo" />
                            </a>

                            <a href='https://www.youtube.com/channel/UCcYuv-IUJMyKdy0e-T5E5DA' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px] hover:scale-110 transition-all ease-out"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
                                    8th floor, RUPA SOLITAIRE, MILLENNIUM BUSINESS PARK, 814, D wing, Mahape, Navi Mumbai,</li>
                                <li>Maharashtra 400710</li>

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
                                    <a href="mailto:infomumbai@emeacademy.co.in"
                                        className=' font-[400]  '>
                                        infomumbai@emeacademy.co.in
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

            <div className='w-full bg-[#ffffff]'>
                <div className='w-full mx-auto 2xl:w-[1380px] flex text-black flex-col md:flex-row justify-center items-center gap-[10px]  mt-[20px] md:items-center  md:justify-between px-[20px]  lg:px-24  py-[20px]  text-[11px] lg:text-[12px] xl:text-[14px] font-[400] leading-[12px] lg:leading-[16px]'>
                    <div className='text-[15px]'> © 2024 <span className='text-[#508ef8]'>EME Academy Mumbai</span>  | All Rights Reserved. </div>
                    <div className='text-[15px]'>Design & Developed By <a href="https://mumbai.emeacademy.co.in/" className='text-[18px] font-[600] text-[#508ef8]'>EME IT Team</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
