"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-scroll";
import CTAButton from "./CtaButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";

export default function Header({ _this: parentThis }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);

  // Determine course name based on props or pathname
  let Courses = "All Courses";
  if (parentThis && parentThis.Courses) {
    Courses = parentThis.Courses;
  } else if (pathname === "/best-hr-training-course-in-kolkata") {
    Courses = "HR Management Course";
  } else if (pathname === "/best-data-analytics-course-in-kolkata") {
    Courses = "Data Analytics Course";
  } else if (pathname === "/best-data-science-course-in-kolkata") {
    Courses = "Data Science Course";
  } else if (pathname === "/best-digital-marketing-course-in-kolkata") {
    Courses = "Digital Marketing Course";
  }

  const email_sender = parentThis?.email_sender || "ALL";
  const Brochure = parentThis?.Brochure || "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = parentThis?.BrochureName || "EME-brochure-2024.pdf";

  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 drop-shadow-2xl w-full z-[50] py-2 bg-white">
      <div className="flex items-center gap-5 justify-between max-w-[1380px] mx-auto px-[20px] lg:px-24">
        {/* Logo */}
        <div className="flex flex-col justify-start cursor-pointer">
          <Link to="home" smooth={true} offset={-80} duration={1000}>
            <Image
              className="w-[100px] h-[38px] md:w-[120px] md:h-[48px]"
              width={150}
              height={150}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png"
              alt="EME Logo"
            />
          </Link>
          <div className="text-[10px] md:text-[10px] text-[#252C65] font-bold text-nowrap ml-[13px] z-[30]">
            A <span className="text-[#E87D1A]">Decade</span> of Excellence
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger flex lg:hidden flex-col justify-center items-center gap-[5px] bg-transparent z-[99] focus:outline-none"
          onClick={toggleMenu}
        >
          <span
            className={`block bg-[#252C65] h-[2px] w-[25px] rounded-md origin-left transition-all ${
              isOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block bg-[#252C65] h-[2px] w-[25px] rounded-md origin-center transition-all ${
              isOpen ? "opacity-0 mb-[4px]" : ""
            }`}
          ></span>
          <span
            className={`block bg-[#252C65] h-[2px] w-[25px] rounded-md origin-left transition-all ${
              isOpen ? "-rotate-[45deg]" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center w-full max-w-[760px] relative header-swiper">
          {/* Left Arrow */}
          <div className="header-swiper-prev cursor-pointer absolute left-[-25px] bg-white shadow-md p-1 rounded-full z-10">
            <ChevronRight size={20} className="rotate-180 text-[#252C65]" />
          </div>

          <Swiper
            spaceBetween={25}
            slidesPerView={"auto"}
            freeMode={true}
            navigation={{
              nextEl: ".header-swiper-next",
              prevEl: ".header-swiper-prev",
            }}
            modules={[Navigation, FreeMode]}
            className="!mx-0 !px-0 w-full"
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 25 },
              1280: { slidesPerView: 6, spaceBetween: 25 },
            }}
          >
            {[
              { to: "home", label: "Course Overview" },
              { to: "about", label: "Featured In" },
              { to: "CourseCurriculum", label: "Course Curriculum" },
              { to: "CourseTool", label: "Tools" },
              { to: "CourseProspects", label: "Career Prospects" },
              { to: "testimonials", label: "Testimonials" },
              { to: "awards", label: "Awards" },
            ].map((item, index) => (
              <SwiperSlide key={index} className="!w-auto !mx-0">
                <Link
                  to={item.to}
                  smooth={true}
                  offset={-105}
                  duration={1000}
                  className="text-[#191919] text-[15px] cursor-pointer hover:text-[#00A2E7] whitespace-nowrap px-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <div className="header-swiper-next cursor-pointer absolute right-[-25px] bg-white shadow-md p-1 rounded-full z-10">
            <ChevronRight size={20} className="text-[#252C65]" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen
              ? "flex lg:hidden flex-col items-start gap-4 text-[14px] absolute pt-[90px] top-0 left-0 w-full h-full min-h-[100vh] px-6 py-6 bg-white z-[28]"
              : "hidden"
          }`}
        >
          {[
            { to: "home", label: "Course Overview" },
            { to: "about", label: "Featured In" },
            { to: "CourseCurriculum", label: "Course Curriculum" },
            { to: "CourseTool", label: "Tools" },
            { to: "CourseProspects", label: "Career Prospects" },
            { to: "testimonials", label: "Testimonials" },
            { to: "awards", label: "Awards" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              offset={-100}
              duration={1000}
              className="text-[#191919] cursor-pointer hover:text-[#00A2E7]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          
          <CTAButton
            name="Contact Us ->"
            styleClasses="flex text-[#E9E7E4] text-[14px] rounded-[24px] bg-[#0057E2] hover:bg-[#0057E2]/90 md:px-[24px] py-[12px] justify-center items-center gap-2 font-[600] group hover:text-white"
            _this={_this}
          />
        </div>

        {/* Contact (Desktop) */}
        <div className="hidden lg:block">
          <CTAButton
            name="Contact Us ->"
            styleClasses="flex text-[#E9E7E4] text-[14px] rounded-[24px] bg-[#0057E2] hover:bg-[#0057E2]/90 px-[20px] py-[12px] justify-center items-center gap-2 font-[600] group hover:text-white"
            _this={_this}
          />
        </div>
      </div>
    </div>
  );
}
