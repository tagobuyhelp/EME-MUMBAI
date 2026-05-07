"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "../common/CtaButton";

export default function CoursesLandingFooter({
  courseName,
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

  const addressUrl = "https://www.google.com/maps/search/Synergy+Business+Park,+Goregaon+East,+Mumbai";
  const addressUrl2 = "https://maps.app.goo.gl/HzhGJgQaWtG4G2C5A";
  return (
    <div className="w-full bg-[#001029] border-t-2 border-[#FAF9F9]">
      <div className="bg-[#001029] text-[#fff] w-full max-w-[1380px]  mx-auto    lg:h-auto py-[20px] px-[20px] lg:py-[60px] lg:px-24">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-10">
          <div className="flex flex-col justify-start items-start gap-[20px] lg:gap-[40px] ">
            <Image
              className=" w-[100px]  lg:w-[120px]   "
              width={500}
              height={500}
              src="/assets/images/emeFooterLogo.svg"
              alt="EME Academy Mumbai Logo"
            />
            <div className="text-[13px] lg:text-[15px] font-[400] border-b w-[300px] pb-[10px]">
              Explore, learn, and grow with us today. With a diverse range of
              courses, expert instructors, and a supportive community,
              we&apos;re here to empower you on your educational journey.
            </div>
          </div>

          <div>
            <ul className=" flex flex-col  gap-[20px] lg:gap-[40px]">
              <li className="text-[15px] lg:text-[24px] font-[700] leading-[20px] lg:leading-[28px] text-white text-nowrap">
                Our Couses
              </li>
              <div className="flex flex-col justify-start items-start gap-[10px] text-[13px] lg:text-[14px] font-[400] leading-[20px] lg:leading-[24px] text-white/80">
                {/* <div
                  onClick={() => {
                    _this?.setIsModalOpen(true);
                  }}
                >
                  <li className="hover:underline cursor-pointer">
                    <div>{courseName}</div>
                  </li>
                </div> */}
                <li className="hover:underline cursor-pointer text-left">
                  <CTAButton
                    name={courseName}
                    styleClasses="bg-transparent hover:bg-transparent
                          text-white 
                          hover:text-white
                          font-semibold 
                      border-none -ml-7"
                    _this={_this}
                  />
                </li>
              </div>
            </ul>
          </div>

          <div className="w-full max-w-[410px] flex flex-col justify-items-end">
            <ul className=" space-y-3 lg:space-y-2">
              <li className="text-[14px] lg:text-[16px] font-[700] leading-[10px] lg:leading-[18px] text-white">
                Contact Us
              </li>
              <div className="flex flex-col justify-start items-start gap-2 text-[12px] md:text-[14px] leading-[20px] lg:leading-[24px] text-[#FAF9F9]">
                <div className="font-bold text-lg">
                  EME Academy Educational & Welfare Trust
                </div>
                <div className="flex mt-[10px] hover:underline cursor-pointer">
                  <Link
                    href={addressUrl}
                    target="_blank"
                    className="flex text-wrap gap-2"
                  >
                    <Image
                      className=" w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] "
                      width={25}
                      height={25}
                      src="/assets/images/Web_Development/icons/icons8-india-48.png"
                      alt="Location Icon"
                    />
                    EME Academy Mumbai, 605, 6th Floor, Synergy Business Park, Sahakar Wadi, Vishweshwar Nagar, Goregaon, Mumbai, Maharashtra 400063
                  </Link>
                </div>
                <div className="flex mt-[10px] hover:underline cursor-pointer">
                  <Link
                    href={addressUrl2}
                    target="_blank"
                    className="flex text-wrap gap-2"
                  >
                    <Image
                      className=" w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] "
                      width={25}
                      height={25}
                      src="/assets/images/Web_Development/icons/icons8-uk-48.png"
                      alt="Location Icon"
                    />
                    EME Academy, 275 New north Road, islington, London, N1 7AA,
                    United Kingdom
                  </Link>
                </div>
                <li className="flex items-center gap-2 mt-[5px] lg:mt-[15px]">
                  <Image
                    className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                    width={500}
                    height={500}
                    src="/assets/icons/call.svg"
                    alt="call icon"
                  />

                  <a
                    className="hover:underline cursor-pointer"
                    href="tel:+91-9093926145"
                  >
                    9093926145
                  </a>
                </li>

                <li className="flex items-center  gap-2 mt-[5px] lg:mt-[15px] hover:underline cursor-pointer">
                  <Image
                    className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                    width={500}
                    height={500}
                    src="/assets/icons/sms.svg"
                    alt="call icon"
                  />
                  <a href="mailto:infomumbai@emeacademy.co.in">
                    infomumbai@emeacademy.co.in
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
