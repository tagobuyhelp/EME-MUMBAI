"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Autoplay, Zoom, Navigation, Keyboard } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import CTAButton from "@/components/common/CtaButton";

export default function CloudComputingCourse({
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
    <div className="w-full   flex flex-col items-center gap-y-5 py-5 lg:py-10 px-[10px] md:px-24 bg-[linear-gradient(to_right,#4f4f4f23_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f23_1px,transparent_1px)] bg-[size:150px_60px] 2xl:bg-[size:120px_80px]">
      <div className="w-full flex justify-center  max-w-[1380px] mx-auto ">
        <div className="flex flex-row items-start justify-center gap-x-2 text-[#2251FF] text-3xl lg:leading-10 lg:text-5xl  font-bold ">
          <div>
            <span className="text-[#E87D1A]">C</span>ourse
          </div>
          <div className=" text-[#042A76] text-3xl lg:leading-10 lg:text-5xl  font-bold  ">
            Details
            <span>
              {" "}
              <svg
                className="w-[122px] md:w-[178px]"
                xmlns="http://www.w3.org/2000/svg"
                width="178"
                height="10"
                viewBox="0 0 178 10"
                fill="none"
              >
                <path
                  d="M0.405273 8.19779C48.9391 0.108794 116.122 -0.565329 177.239 8.19779"
                  stroke="#E87D1A"
                  strokeWidth="2.24694"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* 
          ===============================================
                  All Sap Course in Labtop view  
          ==============================================
          */}

      <div className="w-full h-full  flex  flex-col max-w-[1380px] mx-auto">
        <div className="w-auto  flex justify-center  mx-auto gap-12 pt-[40px] p-5 ">
          <div className="min-w-[300px]:w-[300px] w-[350px] lg:w-[620px] lg:min-h-[380px]  rounded-lg  bg-white shadow-custom  flex flex-col justify-center p-3 border">
            <div className="relative">
              <Image
                className="w-full h-[170px] object-cover object-right-top rounded-lg"
                width={200}
                height={200}
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/cloudComputingImg.jpg"
                alt="course Image"
              />

              <div className="hidden lg:block absolute  left-3  top-3 backdrop-blur-xl rounded-2xl px-3 py-2 text-xs text-center leading-4 bg-white ">
                ‘0’ cost EMI available
              </div>
              <div className="lg:hidden absolute  right-0 -bottom-3 backdrop-blur-xl rounded-2xl px-3 py-2 text-xs text-center leading-4 bg-white ">
                ‘0’ cost EMI available
              </div>
            </div>

            <div className="w-full px-3 py-2 flex flex-col gap-y-2 ">
              <div className="text-[#232D63] font-bold text-base">
                {/* {course.name} */}
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-start gap-5 ">
                <div className=" flex flex-col gap-y-4 ">
                  <div className="text-[#232D63] font-bold">Details</div>
                  <div className=" flex flex-col gap-y-2 justify-evenly  h-[120px]">
                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-0 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <rect
                            y="0.258789"
                            width="32"
                            height="32"
                            rx="16"
                            fill="#E0F5FF"
                          />
                          <path
                            d="M16 8.25879C20.4184 8.25879 24 11.8404 24 16.2588C24 20.6772 20.4184 24.2588 16 24.2588C11.5816 24.2588 8 20.6772 8 16.2588C8 11.8404 11.5816 8.25879 16 8.25879ZM16 9.85879C14.3026 9.85879 12.6747 10.5331 11.4745 11.7333C10.2743 12.9335 9.6 14.5614 9.6 16.2588C9.6 17.9562 10.2743 19.584 11.4745 20.7843C12.6747 21.9845 14.3026 22.6588 16 22.6588C17.6974 22.6588 19.3253 21.9845 20.5255 20.7843C21.7257 19.584 22.4 17.9562 22.4 16.2588C22.4 14.5614 21.7257 12.9335 20.5255 11.7333C19.3253 10.5331 17.6974 9.85879 16 9.85879ZM16 11.4588C16.1959 11.4588 16.3851 11.5308 16.5315 11.661C16.6779 11.7912 16.7715 11.9706 16.7944 12.1652L16.8 12.2588V15.9276L18.9656 18.0932C19.1091 18.2372 19.1924 18.4303 19.1986 18.6335C19.2048 18.8367 19.1334 19.0346 18.999 19.187C18.8646 19.3395 18.6772 19.435 18.4748 19.4543C18.2725 19.4736 18.0704 19.4151 17.9096 19.2908L17.8344 19.2244L15.4344 16.8244C15.3101 16.6999 15.2302 16.538 15.2072 16.3636L15.2 16.2588V12.2588C15.2 12.0466 15.2843 11.8431 15.4343 11.6931C15.5843 11.5431 15.7878 11.4588 16 11.4588Z"
                            fill="#00A2E7"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        6 Months
                      </div>
                    </div>

                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-0 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <rect
                            y="0.258789"
                            width="32"
                            height="32"
                            rx="16"
                            fill="#E0F5FF"
                          />
                          <path
                            d="M23 10.2588H9C7.89543 10.2588 7 11.1542 7 12.2588V20.2588C7 21.3634 7.89543 22.2588 9 22.2588H23C24.1046 22.2588 25 21.3634 25 20.2588V12.2588C25 11.1542 24.1046 10.2588 23 10.2588Z"
                            stroke="#00A2E7"
                            strokeWidth="1.2"
                          />
                          <path
                            d="M10 13.2588H12M20 19.2588H22"
                            stroke="#00A2E7"
                            strokeWidth="1.2"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16 18.2588C17.1046 18.2588 18 17.3634 18 16.2588C18 15.1542 17.1046 14.2588 16 14.2588C14.8954 14.2588 14 15.1542 14 16.2588C14 17.3634 14.8954 18.2588 16 18.2588Z"
                            stroke="#00A2E7"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        INR. 50,000 Full Course
                      </div>
                    </div>

                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-0 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <rect
                            y="0.258789"
                            width="32"
                            height="32"
                            rx="16"
                            fill="#E0F5FF"
                          />
                          <path
                            d="M12.5384 8.25879C12.6869 8.25879 12.8294 8.31779 12.9344 8.42281C13.0394 8.52783 13.0984 8.67027 13.0984 8.81879V9.86599H19.112V8.82599C19.112 8.67747 19.171 8.53503 19.276 8.43001C19.381 8.32499 19.5235 8.26599 19.672 8.26599C19.8205 8.26599 19.963 8.32499 20.068 8.43001C20.173 8.53503 20.232 8.67747 20.232 8.82599V9.86599H22.4C22.8242 9.86599 23.2311 10.0345 23.5311 10.3343C23.8311 10.6342 23.9998 11.041 24 11.4652V22.6596C23.9998 23.0838 23.8311 23.4906 23.5311 23.7904C23.2311 24.0903 22.8242 24.2588 22.4 24.2588H9.6C9.17579 24.2588 8.76895 24.0903 8.46891 23.7904C8.16888 23.4906 8.00021 23.0838 8 22.6596V11.4652C8.00021 11.041 8.16888 10.6342 8.46891 10.3343C8.76895 10.0345 9.17579 9.86599 9.6 9.86599H11.9784V8.81799C11.9786 8.66961 12.0377 8.52737 12.1427 8.42253C12.2477 8.31768 12.39 8.25879 12.5384 8.25879ZM9.12 14.4524V22.6596C9.12 22.7226 9.13242 22.785 9.15654 22.8433C9.18066 22.9015 9.21602 22.9544 9.26059 22.999C9.30516 23.0436 9.35808 23.0789 9.41631 23.1031C9.47455 23.1272 9.53697 23.1396 9.6 23.1396H22.4C22.463 23.1396 22.5255 23.1272 22.5837 23.1031C22.6419 23.0789 22.6948 23.0436 22.7394 22.999C22.784 22.9544 22.8193 22.9015 22.8435 22.8433C22.8676 22.785 22.88 22.7226 22.88 22.6596V14.4636L9.12 14.4524ZM13.3336 19.954V21.2868H12V19.954H13.3336ZM16.6664 19.954V21.2868H15.3336V19.954H16.6664ZM20 19.954V21.2868H18.6664V19.954H20ZM13.3336 16.7724V18.1052H12V16.7724H13.3336ZM16.6664 16.7724V18.1052H15.3336V16.7724H16.6664ZM20 16.7724V18.1052H18.6664V16.7724H20ZM11.9784 10.9852H9.6C9.53697 10.9852 9.47455 10.9976 9.41631 11.0217C9.35808 11.0458 9.30516 11.0812 9.26059 11.1258C9.21602 11.1704 9.18066 11.2233 9.15654 11.2815C9.13242 11.3397 9.12 11.4022 9.12 11.4652V13.3332L22.88 13.3444V11.4652C22.88 11.4022 22.8676 11.3397 22.8435 11.2815C22.8193 11.2233 22.784 11.1704 22.7394 11.1258C22.6948 11.0812 22.6419 11.0458 22.5837 11.0217C22.5255 10.9976 22.463 10.9852 22.4 10.9852H20.232V11.7284C20.232 11.8769 20.173 12.0193 20.068 12.1244C19.963 12.2294 19.8205 12.2884 19.672 12.2884C19.5235 12.2884 19.381 12.2294 19.276 12.1244C19.171 12.0193 19.112 11.8769 19.112 11.7284V10.9852H13.0984V11.7212C13.0984 11.8697 13.0394 12.0121 12.9344 12.1172C12.8294 12.2222 12.6869 12.2812 12.5384 12.2812C12.3899 12.2812 12.2474 12.2222 12.1424 12.1172C12.0374 12.0121 11.9784 11.8697 11.9784 11.7212V10.9852Z"
                            fill="#00A2E7"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        4 hrs. a day, once a week (Saturday / Sunday)
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col gap-y-2 ">
                  <div className="text-[#232D63] font-bold">Fees Division</div>
                  <ul className="flex flex-col justify-evenly gap-y-2 text-xs text-[#121112] leading-3 list-disc pl-4 h-[120px] ">
                    <li className="p-1">INR 20,000 Admission Fee</li>
                    <li className="p-1">INR 20,000 Admission Fee</li>
                    <li className="p-1">INR 10,000 Admission Fee</li>
                  </ul>
                </div>
              </div>

          
              <CTAButton
                                  name="Enroll now"
                                  styleClasses="w-full capitalize text-sm bg-[#0057E2] rounded-sm px-5 py-2 text-white cursor-pointer text-center hover:text-white border-none hover:bg-[#0047C2]"
                                  _this={_this}
                                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
