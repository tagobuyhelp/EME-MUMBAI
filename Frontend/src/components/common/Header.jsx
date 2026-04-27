"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import CourseData from "@/data/course.json";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const Courses = CourseData?.AllCourse;
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  // Scroll down color change of header
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setActiveCategory(null)
            setOpenMenu(false)   
        }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
}, [])


  return (
    <div
      className={
        color
          ? isOpen
            ? "fixed top-0 transition-all bg-[#070B23] backdrop-blur-md w-full z-[99] py-[8px] lg:py-[8px] animate-fade-in-down"
            : "fixed top-0 transition-all bg-[#070B23]/20 backdrop-blur-2xl w-full z-[99] py-[8px] lg:py-[8px] animate-fade-in-down"
          : isOpen
          ? "fixed top-0  w-full z-[99]  transition-all  bg-[#ffffff]  py-[8px] lg:py-[8px]"
          : "fixed top-0  w-full z-[99]  transition-all bg-[#070B23]/20  py-[8px] lg:py-[8px]"
      }
    >
      
      <div className=" relative  flex items-center justify-between max-w-[1380px] mx-auto px-[20px] lg:px-24 ">
        <div className="flex justify-center items-center gap-5 lg:gap-10">
          <div className=" flex flex-col justify-center items-center  cursor-pointer">
            <Link href="/" className="z-[30]">
              <Image
                className=" w-[90px] h-[33px] lg:w-[120px] lg:h-[47px]  "
                width={100}
                height={100}
                src="/assets/images/eme.svg"
                alt="EME Logo"
              />
            </Link>
            <div className="text-[10px] md:text-[10px] text-[#ffffff] font-bold text-nowrap ml-[13px] z-[30]">
              A <span className="text-[#E87D1A]"> Decade</span> of Excellence
            </div>
          </div>
          {/* All Courses Button */}
          <div>
            <button
              className="text-[#E9E7E4] text-[13px] lg:text-[14px] rounded-md bg-[#00a2e7] px-3 py-[10px] lg:px-5 lg:py-[12px] flex justify-center items-center gap-2 z-[30] relative"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <button
          className=" flex lg:hidden flex-col justify-center items-center gap-[5px] bg-transparent z-[30] focus:outline-none "
          onClick={toggleMenu}
        >
          <span
            className={`block bg-white h-[2px] w-[25px] rounded-md origin-left transition-all
          ${isOpen ? "rotate-45 opacity-1 bg-[#000000]" : ""}`}
          ></span>
          <span
            className={`block bg-white h-[2px]  w-[25px] rounded-md origin-center transition-all 
          ${isOpen ? "opacity-0 mb-[4px]" : ""}`}
          ></span>
          <span
            className={`block bg-white h-[2px] w-[25px] rounded-md origin-left transition-all ${
              isOpen ? "-rotate-[45deg] opacity-1 bg-[#000000]" : ""
            }`}
          ></span>
        </button>

        {/* ===================================
                        All Navber Menu list 
                    ======================================
                */}

        <div
          className={
            isOpen
              ? " flex lg:hidden   flex-col items-start gap-[12px] text-[18px] font-[500] absolute pt-[120px] top-[0px] left-0 w-full h-screen  px-6 py-[10px] bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%  animate-fade-in-left z-[28] transition-all "
              : "hidden lg:flex flex-row items-center justify-center gap-[28px] lg:text-[15px] 2xl:text-[18px] text-[#E9E7E4] font-[400] 2xl:font-[400] "
          }
        >
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? "text-blue-800 font-bold "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`link ${
              pathname === "/about-us"
                ? " text-blue-800 font-bold  navElement-style "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/recentplacements"
            className={`link ${
              pathname === "/recentplacements"
                ? "text-blue-800 font-bold  navElement-style "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Recent Placements
          </Link>

          <Link
            href="/blogs"
            className={`link ${
              pathname === "/blogs"
                ? "text-blue-800 font-bold  navElement-style "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          {/* <Link href='/recentplacements'
                        className={`link ${pathname === '/recentplacements' ? 'text-blue-800 font-bold  navElement-style ' : 'text-[#191919]'}`}
                        onClick={() => setIsOpen(false)}>
                        Recent Placements
                    </Link> */}
          <Link
            href="/rewards-recognition"
            className={`link ${
              pathname === "/careers"
                ? "text-blue-800 font-bold  navElement-style "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Awards
          </Link>
          <Link
            href="/contact-us"
            className={`link ${
              pathname === "/contact-us"
                ? "text-blue-800 font-bold navElement-style "
                : "text-[#000000] md:text-[#E9E7E4]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <Link href="/admission-page">
            <button className="lg:hidden text-[#fff] text-[14px] rounded-md bg-[#00a2e7] px-[24px] py-[12px] flex justify-center items-center gap-2 ">
              <div>Get Admission</div>
              <Image
                className=" w-[10px] lg:w-[16px] lg:h-[16px]  "
                width={500}
                height={500}
                src={"/assets/images/rightArrow.svg"}
                alt="EME Logo"
              />
            </button>
          </Link>
        </div>
        <Link href="/admission-page" className="hidden lg:block">
          <button className="hidden lg:flex text-[#E9E7E4]  text-[14px] rounded-md bg-[#00a2e7] px-[24px] py-[12px]  justify-center items-center gap-2 group hover:bg-blue-700 ">
            <div>Get Admission</div>
            <Image
              className=" w-[10px] lg:w-[16px] lg:h-[16px] group-hover:translate-x-1 transition-all "
              width={500}
              height={500}
              src="/assets/images/rightArrow.svg"
              alt="EME Logo"
            />
          </button>
        </Link>

        {/* Dropdown Menu */}
        {openMenu && (
          <div ref={menuRef} className="absolute top-full left-0 w-full  bg-white shadow-lg mt-2 rounded-xl z-50 animate-fade-in-down">
            <div className="max-w-5xl mx-auto p-4 md:p-6">
              <div className="flex flex-col gap-2">
                <div className="col-span-3 mb-2">
                  <h3 className="text-sm font-medium  text-gray-500 uppercase text-[#97A3B7] tracking-wider">
                    All Course
                  </h3>
                </div>

                {/* First Column */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5">
                  <Link
                    href="/data-analytics-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/dataAnalytics.svg"}
                        alt="data analytics icon"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      Data Analytics Course
                    </span>
                  </Link>
                  {/* SAP Category */}
                  <div className="group relative">
                    <div
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[#EDFAFF] cursor-pointer"
                      onClick={() => handleCategoryClick("sap")}
                    >
                      <div className="flex items-center gap-2">
                        <span className=" p-1 rounded-md">
                          <Image
                            width={20}
                            height={20}
                            src={"/assets/images/dropdown-menu/sap.svg"}
                            alt="sap icon"
                          />
                        </span>
                        <span className="text-sm font-medium">SAP Course</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4  transition-transform duration-200 ${
                          activeCategory === "sap"
                            ? "rotate-180 text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>

                    {/* SAP Dropdown */}
                    <div
                      className={`${
                        activeCategory === "sap" ? "block" : "hidden"
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 absolute left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/sap-training-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP Main Course
                        </Link>

                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/course/sap-abap"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP ABAP
                        </Link>
                        <Link
                          href="/course/sap-fico"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP FICO
                        </Link>
                        <Link
                          href="/course/sap-mm"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP MM
                        </Link>
                        <Link
                          href="/course/sap-sd"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP SD
                        </Link>
                        <Link
                          href="/course/sap-hcm"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP HCM
                        </Link>
                        <Link
                          href="/course/sap-pp"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP PP
                        </Link>
                        <Link
                          href="/course/sap-success"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP Success Factor
                        </Link>
                        <Link
                          href="/course/sap-basis"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP Basis
                        </Link>
                        <Link
                          href="/course/sap-analytics"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          SAP Analytics
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Web Development Category */}
                  <div className="group relative">
                    <div
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[#EDFAFF] cursor-pointer"
                      onClick={() => handleCategoryClick("web")}
                    >
                      <div className="flex items-center gap-2">
                        <span className=" p-1 rounded-md">
                          <Image
                            width={20}
                            height={20}
                            src={"/assets/images/dropdown-menu/web.svg"}
                            alt="web icon"
                          />
                        </span>
                        <span className="text-sm font-medium">
                          Web Development
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeCategory === "web" ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Web Development Dropdown */}
                    <div
                      className={`${
                        activeCategory === "web" ? "block" : "hidden"
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 absolute left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/web-development"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Web Development Main Course
                        </Link>
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/best-mern-stack-development-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Full Stack (MERN) Web Development Course
                        </Link>
                        <Link
                          href="/best-mean-stack-training-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Full Stack (MEAN) Web Development Course
                        </Link>
                        <Link
                          href="/php-mysql-training-institute-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          PHP & MySQL Development Intensive Course
                        </Link>
                        <Link
                          href="/wordpress-development-training-institute-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          WordPress Development
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Digital Marketing Category */}
                  <div className="group relative">
                    <div
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[#EDFAFF] cursor-pointer"
                      onClick={() => handleCategoryClick("marketing")}
                    >
                      <div className="flex items-center gap-2">
                        <span className=" p-1 rounded-md">
                          <Image
                            width={20}
                            height={20}
                            src={"/assets/images/dropdown-menu/dm.svg"}
                            alt="digital marketing icon"
                          />
                        </span>
                        <span className="text-sm font-medium">
                          Digital Marketing
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeCategory === "marketing" ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Digital Marketing Dropdown */}
                    <div
                      className={`${
                        activeCategory === "marketing" ? "block" : "hidden"
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 absolute left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/digital-marketing-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Digital Marketing Main Course
                        </Link>
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/advanced-digital-marketing-certificate-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Advanced Digital Marketing (Facebook & Google Ads)
                        </Link>
                        <Link
                          href="/diploma-in-advance-digital-marketing-courses-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Master Digital Marketing with AI
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/data-science-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/dataScience.svg"}
                        alt="data science icon"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      Data Science Course{" "}
                    </span>
                  </Link>

                  {/* Graphic Design Category */}
                  <div className="group relative">
                    <div
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[#EDFAFF] cursor-pointer"
                      onClick={() => handleCategoryClick("graphic")}
                    >
                      <div className="flex items-center gap-2">
                        <span className=" p-1 rounded-md">
                          <Image
                            width={20}
                            height={20}
                            src={
                              "/assets/images/dropdown-menu/GraphicsDesign.svg"
                            }
                            alt="Graphics icon"
                          />
                        </span>
                        <span className="text-sm font-medium">
                          Graphic Design and Motion Graphic
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeCategory === "graphic" ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Graphic Design Dropdown */}
                    <div
                      className={`${
                        activeCategory === "graphic" ? "block" : "hidden"
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 absolute left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/graphic-design"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Graphic Design Main Course
                        </Link>
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/graphic-design-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Graphic Design
                        </Link>
                        <Link
                          href="/motion-graphics-course-in-kolkata"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Motion Graphic
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/human-resource-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/hr.svg"}
                        alt="HR icon"
                      />
                    </span>
                    <span className="text-sm font-medium">HR Management</span>
                  </Link>

                  <Link
                    href="/ui-ux-design-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/uiux.svg"}
                        alt="ui/ux icon"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      Web Design (UI/UX)
                    </span>
                  </Link>

                  <Link
                    href="/generative-ai-course-training-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/promtEng.svg"}
                        alt="genAi icon"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      Generative AI Course
                    </span>
                  </Link>

                  <Link
                    href="/machine-learning-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/aiMl.svg"}
                        alt="ML icon"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      AI and ML Course
                    </span>
                  </Link>

                  <Link
                    href="/cyber-security-course-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/CyberSecurity.svg"}
                        alt="cyber Security icon"
                      />
                    </span>
                    <span className="text-sm font-medium">Cyber Security</span>
                  </Link>

                  <Link
                    href="/best-linkedin-course-for-career-hiring-growth"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/linkedin.svg"}
                        alt="LinkedIn icon"
                      />
                    </span>
                    <span className="text-sm font-medium">LinkedIn Course</span>
                  </Link>

                  <Link
                    href="/best-animation-and-vfx-institute-in-kolkata"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/AVIcon.svg"}
                        alt="Animation & VFX icon"
                      />
                    </span>
                    <span className="text-sm font-medium">Animation & VFX</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
