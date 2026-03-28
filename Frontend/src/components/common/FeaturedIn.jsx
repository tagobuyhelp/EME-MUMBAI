"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CTAButton from "./CtaButton";

const featuredLogos1 = [
  {
    src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/TOI-logo.png",
    alt: "TOIlogo",
    width: 60,
    height: 50,
  },
  {
    src: "/assets/images/blog/abpnews 1.svg",
    alt: "ABP Ananda",
    width: 100,
    height: 70,
  },
  {
    src: "/assets/images/blog/republic.svg",
    alt: "Republic Bharat",
    width: 100,
    height: 70,
  },
  { src: "/assets/icons/TV9Logo.svg", alt: "TV9Logo", width: 50, height: 50 },
];

const featuredLogos2 = [
  {
    src: "/assets/images/indianews-logo.png",
    alt: "India News",
    width: 60,
    height: 40,
  },
  {
    src: "/assets/images/newsx-world-logo.webp",
    alt: "newsx",
    width: 45,
    height: 40,
  },
  {
    src: "/assets/images/blog/dailyhunt.svg",
    alt: "Dailyhunt",
    width: 50,
    height: 40,
  },
  { src: "/assets/images/blog/klam.svg", alt: "Kolom", width: 90, height: 80 },
  {
    src: "/assets/images/startup_pedia_logo.jpg",
    alt: "Startuppedia",
    width: 90,
    height: 40,
  },
];

export default function FeaturedIn({
  Courses,
  email_sender,
  SelectCourses,
  Brochure,
  BrochureName,
  formVariant,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
    formVariant,
  };

  return (
    <div className="w-full max-w-[1200px] gap-4 md:gap-10 flex flex-col md:flex-row justify-center md:justify-between items-center py-4 md:py-10 px-6 mx-auto">
      <div className="flex flex-col justify-center items-center md:items-start ">
        <h2 className="text-[18px] md:text-[26px] font-black text-[#232D63] leading-tight text-center md:text-left">
          When the Media Takes Notice
        </h2>
        <p className="text-[#0057E2] font-bold text-[12px] md:text-[14px] mt-1 text-center md:text-left">
          They Trusted Us — So Can You
        </p>
        <p className="text-[#4B4B4B] font-medium text-[12px] md:text-[14px] mt-2 max-w-[520px] text-center md:text-left">
          From Times of India to TV9 Bangla — the media has noticed why EME Academy works.
        </p>

        <CTAButton
          name="Check My Eligibility →"
          styleClasses="mt-4 bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 text-white rounded-xl font-bold text-[12px] md:text-[14px] px-8 h-11"
          _this={_this}
        />
      </div>

      <div className="w-full max-w-[380px] md:max-w-[620px] flex flex-row flex-wrap justify-center md:justify-end items-center gap-4">
        <div className="w-full space-y-3 md:space-y-4 py-2 md:py-4 relative">
          {/* First Marquee */}
          <Marquee speed={30} autoFill className="w-full">
            {featuredLogos1.map((company, index) => (
              <Card
                key={index}
                className="w-[60px] h-[40px] md:w-[90px] md:h-[65px] mx-1 md:mx-5 items-center justify-center rounded-[10px] md:rounded-[15px] shadow-none hover:shadow-sm transition duration-1000 ease-in-out transform hover:scale-75 cursor-pointer"
              >
                <CardContent className="p-1 md:p-2 flex items-center justify-center h-full">
                  <Image
                    className="object-contain"
                    width={company.width}
                    height={company.height}
                    src={company.src}
                    alt={company.alt}
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>

          {/* Second Marquee */}
          <Marquee speed={30} autoFill direction="right" className="w-full">
            {featuredLogos2.map((company, index) => (
              <Card
                key={index}
                className="w-[60px] h-[40px] md:w-[90px] md:h-[65px] mx-1 md:mx-5 items-center justify-center rounded-[10px] md:rounded-[15px] shadow-none hover:shadow-sm transition duration-1000 ease-in-out transform hover:scale-75 cursor-pointer"
              >
                <CardContent className="p-1 md:p-2 flex items-center justify-center h-full">
                  <Image
                    className="object-cover"
                    width={company.width}
                    height={company.height}
                    src={company.src}
                    alt={company.alt}
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
