'use client'
import { useState } from 'react';
import Image from "next/image"
import star from "../../../public/assets/images/Star.svg"; 
import CourseData from '@/data/course.json'

export default function GoogleReview() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = CourseData?.AllCourse
    const email_sender = "ALL"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    return (
        <div className="w-full flex  flex-col justify-center items-center gap-[20px]">
            
            <div className="w-[300px] h-[120px] lg:h-[140px] flex rounded-2xl overflow-hidden mt-[20px] shadow-sm border">
                <div className="w-[45%] h-full bg-[#4285F4] flex justify-center items-center">
                    <div className="text-white text-[32px] lg:text-[50px] font-[800] ">
                        4.9
                    </div>
                </div>
                <div className="w-[55%] h-full bg-[#ffffff] flex flex-col justify-center items-center gap-[5px]">
                    <div className="text-[#070B23] text-[24px] lg:text-[30px] font-[700]">
                        Google
                    </div>
                    <div className="text-[#070B23] text-[14px] lg:text-[16px] font-[400]">
                        average rating
                    </div>
                    <div className="w-full flex items-start justify-center px-[10px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <path
                                d="M15.2425 2.02775C15.6562 1.19519 16.8438 1.19519 17.2575 2.02775L20.6359 8.82726C20.7997 9.15696 21.1144 9.38565 21.4786 9.43956L28.9893 10.5514C29.9089 10.6875 30.276 11.8171 29.612 12.4678L24.1892 17.782C23.9263 18.0396 23.8061 18.4097 23.8673 18.7727L25.1308 26.2593C25.2855 27.176 24.3247 27.8741 23.5007 27.4437L16.7708 23.9286C16.4445 23.7581 16.0555 23.7581 15.7292 23.9286L8.99935 27.4437C8.17532 27.8741 7.21447 27.176 7.36918 26.2593L8.63268 18.7727C8.69395 18.4097 8.57372 18.0396 8.31078 17.782L2.88804 12.4678C2.22405 11.8171 2.59106 10.6875 3.5107 10.5514L11.0214 9.43956C11.3856 9.38565 11.7003 9.15696 11.8641 8.82726L15.2425 2.02775Z"
                                fill="#FCD503"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <path
                                d="M15.2425 2.02775C15.6562 1.19519 16.8438 1.19519 17.2575 2.02775L20.6359 8.82726C20.7997 9.15696 21.1144 9.38565 21.4786 9.43956L28.9893 10.5514C29.9089 10.6875 30.276 11.8171 29.612 12.4678L24.1892 17.782C23.9263 18.0396 23.8061 18.4097 23.8673 18.7727L25.1308 26.2593C25.2855 27.176 24.3247 27.8741 23.5007 27.4437L16.7708 23.9286C16.4445 23.7581 16.0555 23.7581 15.7292 23.9286L8.99935 27.4437C8.17532 27.8741 7.21447 27.176 7.36918 26.2593L8.63268 18.7727C8.69395 18.4097 8.57372 18.0396 8.31078 17.782L2.88804 12.4678C2.22405 11.8171 2.59106 10.6875 3.5107 10.5514L11.0214 9.43956C11.3856 9.38565 11.7003 9.15696 11.8641 8.82726L15.2425 2.02775Z"
                                fill="#FCD503"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <path
                                d="M15.2425 2.02775C15.6562 1.19519 16.8438 1.19519 17.2575 2.02775L20.6359 8.82726C20.7997 9.15696 21.1144 9.38565 21.4786 9.43956L28.9893 10.5514C29.9089 10.6875 30.276 11.8171 29.612 12.4678L24.1892 17.782C23.9263 18.0396 23.8061 18.4097 23.8673 18.7727L25.1308 26.2593C25.2855 27.176 24.3247 27.8741 23.5007 27.4437L16.7708 23.9286C16.4445 23.7581 16.0555 23.7581 15.7292 23.9286L8.99935 27.4437C8.17532 27.8741 7.21447 27.176 7.36918 26.2593L8.63268 18.7727C8.69395 18.4097 8.57372 18.0396 8.31078 17.782L2.88804 12.4678C2.22405 11.8171 2.59106 10.6875 3.5107 10.5514L11.0214 9.43956C11.3856 9.38565 11.7003 9.15696 11.8641 8.82726L15.2425 2.02775Z"
                                fill="#FCD503"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <path
                                d="M15.2425 2.02775C15.6562 1.19519 16.8438 1.19519 17.2575 2.02775L20.6359 8.82726C20.7997 9.15696 21.1144 9.38565 21.4786 9.43956L28.9893 10.5514C29.9089 10.6875 30.276 11.8171 29.612 12.4678L24.1892 17.782C23.9263 18.0396 23.8061 18.4097 23.8673 18.7727L25.1308 26.2593C25.2855 27.176 24.3247 27.8741 23.5007 27.4437L16.7708 23.9286C16.4445 23.7581 16.0555 23.7581 15.7292 23.9286L8.99935 27.4437C8.17532 27.8741 7.21447 27.176 7.36918 26.2593L8.63268 18.7727C8.69395 18.4097 8.57372 18.0396 8.31078 17.782L2.88804 12.4678C2.22405 11.8171 2.59106 10.6875 3.5107 10.5514L11.0214 9.43956C11.3856 9.38565 11.7003 9.15696 11.8641 8.82726L15.2425 2.02775Z"
                                fill="#FCD503"
                            />
                        </svg>

                        <Image
                            className="w-[26px]  h-[26px] object-cover object-center  "
                            width={500}
                            height={500}
                            src={star}
                            alt="student Img"
                        />
                    </div>
                </div>
            </div>
            <div className="text-[#191919] text-[20px] leading-8 lg:leading-[30px] lg:text-[30px]  font-[700] ">
                Join The Best Academy Today
            </div>
            <div className="text-[#fff] text-[16px] leading-5   font-[600] bg-[#009743] hover:bg-green-600 px-[40px] hover:cursor-pointer py-[15px] rounded-md" onClick={() => { _this?.setIsModalOpen(true) }}>
                Get started
            </div>
        </div>
    )
}
