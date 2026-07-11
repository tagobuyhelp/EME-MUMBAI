"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Home, Info, Briefcase, FileText, Trophy, Phone, BookOpen } from "lucide-react";

export const AnotherHeader = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const changeColor = useCallback(() => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

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
        setActiveCategory(null);
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Dropdown doesn't occupy full viewport height, so scroll locking is not needed
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className="sticky top-0 w-full z-[99] px-2 sm:px-4 md:px-8 py-2 transition-all duration-500 ease-in-out bg-transparent"
    >
      <div
        className={`relative flex items-center justify-between mx-auto transition-all duration-500 ease-in-out ${
          isOpen
            ? "w-full max-w-[1280px] px-3 sm:px-6 py-4 bg-white shadow-lg rounded-2xl border border-slate-200"
            : color
            ? "w-full max-w-[1280px] px-3 sm:px-6 py-3 bg-white/85 backdrop-blur-md border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl mt-2 scale-[0.98] lg:scale-[0.99]"
            : "w-full max-w-[1280px] px-3 sm:px-6 py-4 bg-white/95 backdrop-blur-[2px] border border-slate-200/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl mt-2"
        }`}
      >
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8">
          <div className=" flex flex-col justify-start cursor-pointer">
            <Link href={"/"} className="z-[30]">
              <Image
                className="w-[95px] h-[36px] md:w-[115px] md:h-[46px] object-contain"
                width={130}
                height={130}
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png"
                alt="EME Academy Mumbai Logo"
                priority
              />
            </Link>
            <div className="text-[9px] md:text-[10px] text-[#252C65] font-bold text-nowrap ml-1.5 sm:ml-[10px] z-[30]">
              A <span className="text-[#E87D1A]">Decade</span> of Excellence
            </div>
          </div>

          {/* All Courses Button */}
          <div>
            <button
              className="text-white text-[11px] sm:text-[13px] lg:text-[14px] font-semibold rounded-lg bg-[#0057E2] hover:bg-[#0047C2] px-2.5 py-1.5 sm:px-3.5 sm:py-2 flex justify-center items-center gap-1 sm:gap-2 z-[30] relative shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Image
                src="/assets/icons/book.svg"
                alt="book"
                width={14}
                height={14}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
              <span>Courses</span>
              <ChevronDown
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex lg:hidden flex-col justify-center items-center gap-[5px] bg-slate-100 hover:bg-slate-200 h-10 w-10 rounded-full z-[30] focus:outline-none transition-all duration-300"
          onClick={toggleMenu}
        >
          <span
            className={`block bg-[#252C65] h-[2px] w-[20px] rounded-md transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`block bg-[#252C65] h-[2px] w-[20px] rounded-md transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block bg-[#252C65] h-[2px] w-[20px] rounded-md transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <div
          className={
            isOpen
              ? "absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-md shadow-xl rounded-2xl mt-2 p-5 border border-slate-200/60 flex lg:hidden flex-col items-stretch gap-2.5 text-[15px] font-semibold text-slate-800 animate-fade-in-down z-[98] transition-all"
              : "hidden lg:flex flex-row items-center justify-center gap-[24px] lg:text-[14px] 2xl:text-[16px] font-[500] text-[#191919]"
          }
        >
          <Link
            href="/"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Home className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>Home</span>
          </Link>
          {/* Collapsible Courses Item for Mobile */}
          <div className="lg:hidden w-full">
            <button
              onClick={() => handleCategoryClick("mobile-courses")}
              className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-slate-700 hover:bg-slate-50 transition-all focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 opacity-70 text-blue-600/80" />
                <span>Our Courses</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeCategory === "mobile-courses" ? "rotate-180" : ""}`} />
            </button>
            {activeCategory === "mobile-courses" && (
              <div className="pl-6 pt-1.5 pb-2 flex flex-col gap-2 border-l border-slate-200 ml-5 mt-1 animate-fade-in-down">
                <Link href="/data-analytics-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">Data Analytics Course</Link>
                <Link href="/maincourse/sap-training-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">SAP Course</Link>
                <Link href="/human-resource-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">HR Course</Link>
                <Link href="/maincourse/digital-marketing-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">Digital Marketing Course</Link>
                <Link href="/maincourse/web-development" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">Full-Stack IT Course</Link>
                <Link href="/maincourse/data-science-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">Data Science Course</Link>
                <Link href="/maincourse/graphic-design-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">Graphic Design Course</Link>
                <Link href="/ui-ux-design-course-in-mumbai" onClick={() => setIsOpen(false)} className="text-sm py-1.5 text-slate-600 hover:text-blue-600 font-normal transition-colors">UI UX Course</Link>
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/about-us"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Info className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>About</span>
          </Link>
          <Link
            href="/recentplacements"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/recentplacements"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Briefcase className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>Recent Placements</span>
          </Link>

          <Link
            href="/blogs"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/blogs"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <FileText className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>Blogs</span>
          </Link>

          <Link
            href="/rewards-recognition"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/rewards-recognition"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Trophy className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>Awards</span>
          </Link>
          <Link
            href="/contact-us"
            className={`relative transition-all duration-300 group flex items-center gap-2 py-2 px-3 rounded-xl lg:p-0 lg:rounded-none lg:bg-transparent lg:gap-1.5 ${
              pathname === "/contact-us"
                ? "bg-blue-50 text-blue-600 font-bold lg:bg-transparent"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 lg:hover:bg-transparent lg:text-[#333333]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-600/80" />
            <span>Contact Us</span>
          </Link>

          <Link href="/admission-page" className="w-full mt-1 lg:hidden" onClick={() => setIsOpen(false)}>
            <button className="w-full text-white text-[14px] font-semibold rounded-lg bg-[#FD7900] hover:bg-[#E87D1A] py-2.5 flex justify-center items-center gap-2 shadow-md shadow-orange-500/10 transition-all duration-300">
              <div>Get Admission</div>
              <Image
                className=" w-[10px] lg:w-[16px] lg:h-[16px] "
                width={500}
                height={500}
                src={"/assets/images/rightArrow.svg"}
                alt="Admission"
              />
            </button>
          </Link>
        </div>
        <Link href="/admission-page" className="hidden lg:block">
          <button className="hidden lg:flex text-white text-[14px] font-semibold rounded-lg bg-[#FD7900] hover:bg-[#E87D1A] px-5 py-2.5 justify-center items-center gap-2 group shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300">
            <div>Get Admission</div>
            <Image
              className=" w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] filter invert group-hover:translate-x-1 transition-all "
              width={500}
              height={500}
              src={"/assets/images/rightArrow.svg"}
              alt="EME Logo"
            />
          </button>
        </Link>

        {/* Dropdown Menu */}
        {openMenu && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 right-0 w-full bg-white shadow-xl mt-2 rounded-xl z-50 border border-slate-200/60 max-h-[70vh] overflow-y-auto animate-fade-in-down"
          >
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
                    href="/data-analytics-course-in-mumbai"
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
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 md:absolute relative left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/sap-training-mumbai"
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
                          href="/best-mern-stack-development-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Full Stack (MERN) Web Development Course
                        </Link>
                        <Link
                          href="/best-mean-stack-training-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Full Stack (MEAN) Web Development Course
                        </Link>
                        <Link
                          href="/php-mysql-training-institute-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          PHP & MySQL Development Intensive Course
                        </Link>
                        <Link
                          href="/wordpress-development-training-institute-in-mumbai"
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
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 md:absolute relative left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/digital-marketing-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Digital Marketing Main Course
                        </Link>
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/advanced-digital-marketing-certificate-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Advanced Digital Marketing (Facebook & Google Ads)
                        </Link>
                        <Link
                          href="/diploma-in-advance-digital-marketing-courses-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Master Digital Marketing with AI
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/maincourse/data-science-course-in-mumbai"
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
                      } bg-white border border-gray-100 rounded-md shadow-sm mt-1 md:absolute relative left-0 w-full z-10`}
                    >
                      <div className="p-2 space-y-1">
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          main courses
                        </div>
                        <Link
                          href="/maincourse/graphic-design-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Graphic Design Main Course
                        </Link>
                        <div className="text-[#97A3B7] uppercase text-xs font-semibold">
                          {" "}
                          sub courses
                        </div>

                        <Link
                          href="/graphic-design-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Graphic Design
                        </Link>
                        <Link
                          href="/motion-graphics-course-in-mumbai"
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-[#EDFAFF] hover:text-blue-600 rounded-md"
                        >
                          Motion Graphic
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/human-resource-course-in-mumbai"
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
                    href="/ui-ux-design-course-in-mumbai"
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
                    href="/generative-ai-course-training-in-mumbai"
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
                    href="/machine-learning-course-in-mumbai"
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
                    href="/cyber-security-course-in-mumbai"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <Image
                        width={20}
                        height={20}
                        src={"/assets/images/dropdown-menu/CyberSecurity.svg"}
                        alt="cyber Security icon"
                      />{" "}
                      {/*needto add icon */}
                    </span>
                    <span className="text-sm font-medium">Cyber Security</span>
                  </Link>

                  <Link
                    href="/best-linkedin-course-for-career-hiring-growth"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#EDFAFF]"
                  >
                    <span className=" p-1 rounded-md">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#0A66C2" strokeWidth="1.8"/>
                        <path d="M8 10V16" stroke="#0A66C2" strokeWidth="1.8" strokeLinecap="round"/>
                        <circle cx="8" cy="7.5" r="1" fill="#0A66C2"/>
                        <path d="M12 16V12.8C12 11.6 12.7 11 13.6 11C14.5 11 15 11.6 15 12.6V16" 
                              stroke="#0A66C2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-medium">LinkedIn Course</span>
                  </Link>

                  <Link
                    href="/best-animation-and-vfx-institute-in-mumbai"
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
