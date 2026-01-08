"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";

export default function DevopsLandingCourse({
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

      <div className="w-full h-full  flex  flex-col max-w-[1380px] mx-auto">
        <div className="w-auto  flex justify-center  mx-auto gap-12 pt-[40px] p-5 ">
          <div className="min-w-[300px]:w-[300px] w-[350px]  min-h-[380px]   bg-white shadow-custom  flex flex-col justify-center overflow-hidden border rounded-xl">
            <div className="relative">
              <Image
                className="w-full h-[170px] object-cover object-right-top "
                width={200}
                height={200}
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/DevOpsLandingImage.jpg"
                alt="course Image"
              />

              <div className=" absolute  right-0 -bottom-3 backdrop-blur-xl rounded-2xl px-3 py-2 text-xs text-center leading-4 bg-white ">
                ‘0’ cost EMI available
              </div>
            </div>

            <div className="w-full px-3 py-2 flex flex-col gap-y-2 ">
              <div className="text-[#232D63] font-bold text-base">
                {/* {course.name} */}
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-start gap-5 ">
                <div className=" flex flex-col gap-y-4 ">
                  <div className="text-[#232D63] font-bold">
                     DevOps Training & Certification Course (DTC)
                  </div>
                  <div className=" flex flex-col gap-y-2 justify-evenly  h-[120px]">
                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-0 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="21"
                          viewBox="0 0 22 21"
                          fill="none"
                        >
                          <path
                            d="M9.12526 2.30697L4.10859 5.58197C2.50026 6.63197 2.50026 8.98197 4.10859 10.032L9.12526 13.3069C10.0253 13.8986 11.5085 13.8986 12.4085 13.3069L17.4002 10.032C19.0002 8.98197 19.0002 6.64031 17.4002 5.59031L12.4085 2.31531C11.5085 1.71531 10.0253 1.71531 9.12526 2.30697Z"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.44192 11.0986L5.43359 15.0069C5.43359 16.0653 6.25026 17.1986 7.25026 17.5319L9.90859 18.4153C10.3669 18.5653 11.1252 18.5653 11.5919 18.4153L14.2502 17.5319C15.2502 17.1986 16.0669 16.0653 16.0669 15.0069V11.1403"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5859 12.6982V7.69824"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        4 months duration
                      </div>
                    </div>

                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="21"
                          viewBox="0 0 22 21"
                          fill="none"
                        >
                          <path
                            d="M4.30078 9.38177V13.5234C4.30078 15.0401 4.30078 15.0401 5.73411 16.0067L9.67578 18.2817C10.2674 18.6234 11.2341 18.6234 11.8258 18.2817L15.7675 16.0067C17.2008 15.0401 17.2008 15.0401 17.2008 13.5234V9.38177C17.2008 7.8651 17.2008 7.8651 15.7675 6.89843L11.8258 4.62343C11.2341 4.28177 10.2674 4.28177 9.67578 4.62343L5.73411 6.89843C4.30078 7.8651 4.30078 7.8651 4.30078 9.38177Z"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.3308 6.5569V4.36523C15.3308 2.69856 14.4974 1.86523 12.8308 1.86523H8.66406C6.99739 1.86523 6.16406 2.69856 6.16406 4.36523V6.49856"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.2765 9.35703L11.7515 10.0987C11.8265 10.2154 11.9931 10.332 12.1181 10.3654L12.9681 10.582C13.4931 10.7154 13.6348 11.1654 13.2931 11.582L12.7348 12.257C12.6515 12.3654 12.5848 12.557 12.5931 12.6904L12.6431 13.5654C12.6765 14.107 12.2931 14.382 11.7931 14.182L10.9765 13.857C10.8515 13.807 10.6431 13.807 10.5181 13.857L9.70145 14.182C9.20145 14.382 8.81812 14.0987 8.85145 13.5654L8.90145 12.6904C8.90978 12.557 8.84312 12.357 8.75978 12.257L8.20145 11.582C7.85978 11.1654 8.00145 10.7154 8.52645 10.582L9.37645 10.3654C9.50978 10.332 9.67645 10.207 9.74312 10.0987L10.2181 9.35703C10.5181 8.90703 10.9848 8.90703 11.2765 9.35703Z"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        Offline/online modes
                      </div>
                    </div>

                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E0F5FF] p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M7.91735 19.5315H14.584C17.934 19.5315 18.534 18.1899 18.709 16.5565L19.334 9.88991C19.559 7.85657 18.9757 6.19824 15.4174 6.19824H7.08401C3.52568 6.19824 2.94234 7.85657 3.16734 9.88991L3.79234 16.5565C3.96734 18.1899 4.56734 19.5315 7.91735 19.5315Z"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.91406 6.19857V5.5319C7.91406 4.0569 7.91406 2.86523 10.5808 2.86523H11.9141C14.5808 2.86523 14.5808 4.0569 14.5808 5.5319V6.19857"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9192 12.0315V12.8649C12.9192 12.8732 12.9192 12.8732 12.9192 12.8815C12.9192 13.7899 12.9109 14.5315 11.2526 14.5315C9.60261 14.5315 9.58594 13.7982 9.58594 12.8899V12.0315C9.58594 11.1982 9.58594 11.1982 10.4193 11.1982H12.0859C12.9192 11.1982 12.9192 11.1982 12.9192 12.0315Z"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.2891 10.3652C17.3641 11.7653 15.1641 12.5986 12.9141 12.8819"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.43359 10.5898C5.30859 11.8732 7.42526 12.6482 9.58359 12.8899"
                            stroke="#00A2E7"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-[#121112] leading-3">
                        Reasonable fees
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
                className="w-full capitalize text-sm bg-[#0057E2] rounded-sm px-5 py-2 text-white cursor-pointer text-center"
                onClick={() => {
                  _this?.setIsModalOpen(true);
                }}
              >
                enroll now
              </div> */}
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
