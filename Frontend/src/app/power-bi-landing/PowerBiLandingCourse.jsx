"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";

export default function PowerBiLandingCourse({
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

  const courses = [
    {
      name: "Certificate in Power BI Training",
      id: 1,
      assistance: (
        <div>
          <span className="font-bold">‘0’</span> cost EMI available
        </div>
      ),
      decsOne: "Expert Faculty",
      decsTwo: "4 months ",
      decsThree: "Job Orientation",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/PowerBILandingCourseOne.jpg",
    },
  ];

  return (
    <div className="w-full   flex flex-col items-center gap-y-5 py-5 lg:py-10 px-[10px] md:px-24 bg-[linear-gradient(to_right,#4f4f4f23_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f23_1px,transparent_1px)] bg-[size:150px_60px] 2xl:bg-[size:120px_80px]">
      <div className="w-full flex justify-center  max-w-[1380px] mx-auto ">
        <div className="flex flex-row items-start justify-center gap-x-2 text-[#2251FF] text-3xl lg:leading-10 lg:text-5xl  font-bold ">
          <div>
            <span className="text-[#E87D1A]">O</span>ur
          </div>
          <div className=" text-[#042A76] text-3xl lg:leading-10 lg:text-5xl  font-bold  ">
            Courses
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

      <div className=" w-full h-full  lg:flex  flex-col max-w-[1380px] mx-auto">
        <div className="w-auto  flex justify-center  mx-auto gap-12 pt-[40px] p-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[300px]:w-[300px] w-[350px]  min-h-[380px]   bg-white shadow-custom  flex flex-col justify-center overflow-hidden border rounded-xl"
            >
              <div className="relative">
                <Image
                  className="w-full h-[170px] object-cover object-right-top"
                  width={200}
                  height={200}
                  src={course.src}
                  alt="course Image"
                />

                <div className="absolute right-0 border -bottom-5 bg-[#FAFAFA] rounded-2xl px-3 py-2 text-xs text-center leading-4 ">
                  {course.assistance}
                </div>
              </div>

              <div className="w-full px-3 py-4 flex flex-col gap-y-4 mt-4 ">
                <div className="text-[#232D63] font-bold text-base">
                  {course.name}
                </div>
                <div className="w-full flex flex-col gap-y-2">
                  <div className="w-full flex items-center gap-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                      >
                        <path
                          d="M9.12526 2.30599L4.10859 5.58099C2.50026 6.63099 2.50026 8.98099 4.10859 10.031L9.12526 13.306C10.0253 13.8977 11.5085 13.8977 12.4085 13.306L17.4002 10.031C19.0002 8.98099 19.0002 6.63933 17.4002 5.58933L12.4085 2.31433C11.5085 1.71433 10.0253 1.71433 9.12526 2.30599Z"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.44192 11.0977L5.43359 15.006C5.43359 16.0644 6.25026 17.1977 7.25026 17.531L9.90859 18.4144C10.3669 18.5644 11.1252 18.5644 11.5919 18.4144L14.2502 17.531C15.2502 17.1977 16.0669 16.0644 16.0669 15.006V11.1394"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.583 12.6978V7.69775"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-[#121112] leading-3">
                      {course.decsOne}
                    </div>
                  </div>
                  <div className="w-full flex items-center gap-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                      >
                        <path
                          d="M4.2998 9.38104V13.5227C4.2998 15.0394 4.2998 15.0394 5.73313 16.006L9.6748 18.281C10.2665 18.6227 11.2331 18.6227 11.8248 18.281L15.7665 16.006C17.1998 15.0394 17.1998 15.0394 17.1998 13.5227V9.38104C17.1998 7.86437 17.1998 7.86437 15.7665 6.8977L11.8248 4.6227C11.2331 4.28104 10.2665 4.28104 9.6748 4.6227L5.73313 6.8977C4.2998 7.86437 4.2998 7.86437 4.2998 9.38104Z"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.3337 6.55617V4.3645C15.3337 2.69783 14.5003 1.8645 12.8337 1.8645H8.66699C7.00032 1.8645 6.16699 2.69783 6.16699 4.3645V6.49783"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.2745 9.35605L11.7495 10.0977C11.8245 10.2144 11.9911 10.331 12.1161 10.3644L12.9661 10.581C13.4911 10.7144 13.6328 11.1644 13.2911 11.581L12.7328 12.256C12.6495 12.3644 12.5828 12.556 12.5911 12.6894L12.6411 13.5644C12.6745 14.106 12.2911 14.381 11.7911 14.181L10.9745 13.856C10.8495 13.806 10.6411 13.806 10.5161 13.856L9.69949 14.181C9.19949 14.381 8.81616 14.0977 8.84949 13.5644L8.89949 12.6894C8.90782 12.556 8.84116 12.356 8.75782 12.256L8.19949 11.581C7.85782 11.1644 7.99949 10.7144 8.52449 10.581L9.37449 10.3644C9.50782 10.331 9.67449 10.206 9.74116 10.0977L10.2162 9.35605C10.5161 8.90605 10.9828 8.90605 11.2745 9.35605Z"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-[#121112] leading-3">
                      {course.decsTwo}
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M7.91637 19.5311H14.583C17.933 19.5311 18.533 18.1895 18.708 16.5561L19.333 9.88942C19.558 7.85608 18.9747 6.19775 15.4164 6.19775H7.08303C3.5247 6.19775 2.94136 7.85608 3.16636 9.88942L3.79136 16.5561C3.96636 18.1895 4.56636 19.5311 7.91637 19.5311Z"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.91699 6.19784V5.53117C7.91699 4.05617 7.91699 2.8645 10.5837 2.8645H11.917C14.5837 2.8645 14.5837 4.05617 14.5837 5.53117V6.19784"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.9163 12.0311V12.8645C12.9163 12.8728 12.9163 12.8728 12.9163 12.8811C12.9163 13.7895 12.908 14.5311 11.2497 14.5311C9.59968 14.5311 9.58301 13.7978 9.58301 12.8895V12.0311C9.58301 11.1978 9.58301 11.1978 10.4163 11.1978H12.083C12.9163 11.1978 12.9163 11.1978 12.9163 12.0311Z"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.292 10.3645C17.367 11.7645 15.167 12.5978 12.917 12.8811"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.43359 10.5894C5.30859 11.8727 7.42526 12.6477 9.58359 12.8894"
                          stroke="#00A2E7"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-[#121112] leading-3">
                      {course.decsThree}
                    </div>
                  </div>
                </div>

                <CTAButton
                                                  name="Enroll now"
                                                  styleClasses="w-28 capitalize text-sm bg-[#0057E2] rounded-sm px-5 py-2 text-white cursor-pointer hover:text-white border-none hover:bg-[#0047C2]"
                                                  _this={_this}
                                                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
