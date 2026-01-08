"use client";
import { useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";

export default function SapHero({
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
    <>
      <div className=" w-full flex flex-col lg:flex-row justify-center gap-5 lg:gap-[50px] items-start  py-[26px] px-[20px] md:px-24  max-w-[1380px] mx-auto ">
        <div className="w-full lg:w-[50%] pt-[18px] lg:pt-[30px] h-full flex flex-col item-center lg:items-start gap-y-4 lg:gap-[15px] text-steelblue">
          <div className=" relative rounded-md bg-lightblue flex flex-row items-center justify-center py-0.5 px-3 text-left text-[11px] text-steelblue ">
            <div className="relative leading-[30px] font-semibold text-center">
              SAP ABAP (Advanced Business Application Programming)
            </div>
          </div>
          <h1 className="max-w-[673px] lg:w-full lg:h-auto text-xl lg:text-4xl  font-extrabold  text-[#262626] text-center lg:text-left flex justify-center item-center">
            The Abbreviation of Advanced Business Application Programming
          </h1>
          <p className="relative leading-[18.75px]  text-[#727272] text-[12px] md:text-[14px] text-center lg:text-left">
            GET AN ASSORTMENT of job-oriented SAP ABAP TRAINING courses in
            Kolkata
          </p>

          <div className="w-full flex flex-row items-start justify-center lg:justify-start gap-5 text-mini text-goldenrod font-font-awesome-5-free pt-[10px] pb-5">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="relative leading-[15px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58789 1.02734C7.93945 0.324219 8.93555 0.353516 9.25781 1.02734L11.1914 4.92383L15.4688 5.53906C16.2305 5.65625 16.5234 6.59375 15.9668 7.15039L12.8906 10.168L13.623 14.416C13.7402 15.1777 12.9199 15.7637 12.2461 15.4121L8.4375 13.3906L4.59961 15.4121C3.92578 15.7637 3.10547 15.1777 3.22266 14.416L3.95508 10.168L0.878906 7.15039C0.322266 6.59375 0.615234 5.65625 1.37695 5.53906L5.68359 4.92383L7.58789 1.02734Z"
                    fill="#F7C32E"
                  />
                </svg>
              </div>
              <b className="relative leading-[18.75px]  text-[#24292D] text-[10px] md:text-[13px]">
                4.5/5.0
              </b>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 text-darkorange">
              <div className="relative leading-[15px]">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3457 9.9043C12.4258 9.99219 14.125 11.7207 14.125 13.8301V14.0938C14.125 14.8848 13.4805 15.5 12.7188 15.5H2.40625C1.61523 15.5 1 14.8848 1 14.0938V13.8301C1 11.7207 2.66992 9.99219 4.75 9.9043L7.5625 12.6875L10.3457 9.9043ZM1.38086 2.84375C0.853516 2.72656 0.853516 2.05273 1.38086 1.93555L6.97656 0.587891C7.35742 0.5 7.73828 0.5 8.11914 0.587891L13.7148 1.93555C14.2422 2.05273 14.2422 2.72656 13.7148 2.84375L10.9023 3.51758C11.1367 4.04492 11.3125 4.60156 11.3125 5.1875C11.3125 7.26758 9.61328 8.9375 7.5625 8.9375C5.48242 8.9375 3.8125 7.26758 3.8125 5.1875C3.8125 4.60156 3.95898 4.04492 4.22266 3.51758L2.28906 3.07812V4.60156C2.49414 4.71875 2.64062 4.95312 2.64062 5.1875C2.64062 5.45117 2.49414 5.65625 2.28906 5.77344L2.75781 7.58984C2.81641 7.79492 2.69922 8 2.52344 8H1.32227C1.14648 8 1.0293 7.79492 1.08789 7.58984L1.55664 5.77344C1.35156 5.65625 1.23438 5.45117 1.23438 5.1875C1.23438 4.95312 1.38086 4.71875 1.58594 4.60156V2.90234L1.38086 2.84375Z"
                    fill="#FD7E14"
                  />
                </svg>
              </div>
              <b className="relative leading-[18.75px]  text-[#24292D] text-[10px] md:text-[13px]">
                12k Enrolled
              </b>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 text-cadetblue">
              <div className="relative leading-[15px]">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83374 5.1875H4.64819C5.08765 2.58008 6.08374 0.734375 7.25562 0.734375C8.39819 0.734375 9.42358 2.58008 9.83374 5.1875ZM4.44312 8C4.44312 7.35547 4.47241 6.74023 4.53101 6.125H9.95093C10.0095 6.74023 10.0388 7.35547 10.0388 8C10.0388 8.67383 10.0095 9.28906 9.95093 9.875H4.53101C4.47241 9.28906 4.44312 8.67383 4.44312 8ZM13.9353 5.1875H10.7712C10.5076 3.54688 10.0388 2.05273 9.3064 1.05664C11.4158 1.67188 13.115 3.22461 13.9353 5.1875ZM5.17554 1.05664C4.44312 2.05273 3.97437 3.54688 3.71069 5.1875H0.546631C1.36694 3.22461 3.06616 1.67188 5.17554 1.05664ZM14.2576 6.125C14.4041 6.74023 14.4919 7.35547 14.4919 8C14.4919 8.67383 14.4041 9.28906 14.2576 9.875H10.8884C10.947 9.25977 11.0056 8.64453 11.0056 8C11.0056 7.38477 10.947 6.74023 10.8884 6.125H14.2576ZM3.50562 8C3.50562 8.64453 3.53491 9.25977 3.59351 9.875H0.224365C0.0778809 9.28906 -0.0100098 8.67383 -0.0100098 8C-0.0100098 7.35547 0.0778809 6.74023 0.224365 6.125H3.59351C3.53491 6.74023 3.50562 7.38477 3.50562 8ZM4.64819 10.8125H9.83374C9.42358 13.4492 8.39819 15.2656 7.25562 15.2656C6.08374 15.2656 5.08765 13.4492 4.64819 10.8125ZM9.3064 14.9727C10.0388 13.9766 10.5369 12.4824 10.7712 10.8125H13.9353C13.115 12.8047 11.4158 14.3574 9.3064 14.9727ZM0.546631 10.8125H3.71069C3.97437 12.4824 4.44312 13.9766 5.17554 14.9727C3.06616 14.3574 1.36694 12.8047 0.546631 10.8125Z"
                    fill="#17A2B8"
                  />
                </svg>
              </div>
              <b className="relative leading-[18.75px]  text-[#24292D] text-[10px] md:text-[13px]">
                English, Hindi
              </b>
            </div>
          </div>

          <div className="flex flex-row items-start justify-center lg:justify-start gap-3 lg:gap-5">
          
             <CTAButton
                    name="Register Now ->"
                    styleClasses="flex flex-row text-[#fff] text-xs lg:text-[14px] rounded-md bg-[#0057E2] hover:bg-[#00a2e7]/90 px-[10px] lg:px-[24px] py-[14px] font-[600] gap-2.5 group hover:text-white border-none hover:bg-[#0047C2]"
                    _this={_this}
                  />
          
            <CTAButton
                    name="Download curriculum ->"
                    styleClasses="flex text-[#0057E2] text-xs lg:text-[14px] border-[1px] border-[#0057E2] bg-transparent rounded-md hover:bg-[#00a2e7]/90 hover:text-[#fff] hover:border-[#00a2e7]/90 px-[10px] lg:px-[24px] py-[13px] lg:py-[14px] lg:font-[600] font-[500]  justify-center items-center gap-2 group hover:text-white hover:bg-[#0047C2]"
                    _this={_this}
                  />
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex items-center lg:items-start lg:pt-[40px]">
          <Image
            className="w-full h-full object-cover"
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_ABAP/SAP_ABAP_Hero.svg"
            width={100}
            height={100}
            alt="team"
          />
        </div>
      </div>
    </>
  );
}
