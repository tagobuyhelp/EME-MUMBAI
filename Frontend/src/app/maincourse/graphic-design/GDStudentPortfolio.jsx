"use client";
import CTAButton from "@/components/common/CtaButton";
import Image from "next/image";
import { useState } from "react";

function GDStudentPortfolio() {
  const Courses = "Graphics Designing Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
  const BrochureName = "graphic_design_brochure.pdf";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };
  const portfolios = [
    {
      name: "Brand Identity",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/BrandID.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Logo Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/LogoDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Advertising Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/ADDesign.png",
      color: "bg-green-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Brand Management",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/BrandManagement.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Product Designer",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/ProductDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "UI/UX Designer",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/UIUXDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Ad Agencies",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/Agency.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Visiting Card Designer",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/VisitingCardDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Social Media Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/SocialMediaDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Brochure Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/BrochureDesign.png",
      color: "bg-blue-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Packaging Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/PackDesign.png",
      color: "bg-orange-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
    {
      name: "Mockup Design",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/MockupDesign.png",
      color: "bg-yellow-50",
      companyLogoWidth: 315,
      companyLogoHeight: 186,
    },
  ];

  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className=" w-full px-2 py-4 md:p-6">
          <h2 className=" text-center text-[18px] md:text-[22px] font-semibold mb-2 md:mb-6">
            <span className="text-[#232D63]"> Portfolio Highlights</span>{" "}
            <span className="text-[#E87D1A]">You’ll Work On</span>
            <div className="text-[#7F7879] text-[12px] font-normal">
              <p>
                Secure 100% Placement Assistance Post-Graphic Design Course in
                Mumbai
              </p>
            </div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-2 md:gap-4">
            {portfolios.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 text-center transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={tool.icon || "/placeholder.svg"}
                  alt={tool.name}
                  width={tool.companyLogoWidth}
                  height={tool.companyLogoHeight}
                  className="object-contain transition-transform duration-300 hover:-translate-y-1"
                />
                <p className="text-[10px] md:text-[12px] font-medium">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTAButton
        name="Book A Free Demo Class →"
        styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-12 border-none"
        _this={_this}
      />
    </div>
  );
}

export default GDStudentPortfolio;
