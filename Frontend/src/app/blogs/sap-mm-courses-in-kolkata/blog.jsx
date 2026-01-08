"use client";

import { Calendar, Clock2, Eye } from "lucide-react";
import Image from "next/image";
import Cards from "./cards";
import NewsLogo from "../Components/NewsLogo";
import BlogTestimonial from "../Components/BlogTestimonial";
import NewsCard from "../Components/NewsCard";
import CompanyLogo from "../Components/CompanyLogo";
import BlogAdmissionForm from "../Components/BlogAdmissionForm";
import ShareBlog from "../Components/ShareBlog";
import Link from "next/link";
import LeftSection from "./left_section";
import CTAButton from "@/components/common/CtaButton";
import { useState } from "react";

const placementCards = [
  {
    id: 1,
    title: "100% Placement Support Program",
    imageSrc: "/assets/images/blog/girl_photo.svg",
    features: [
      "5000+ placed",
      "180+ hiring partners",
      "EMI options available",
      "Highest CTC Upto 10 LPA",
      "Hybrid Mode Class",
    ],
  },
  {
    id: 2,
    title: "Additional Career Benefits",
    imageSrc: "/assets/images/blog/girl_photo.svg",
    features: [
      "5000+ placed",
      "180+ hiring partners",
      "EMI options available",
      "Highest CTC Upto 10 LPA",
      "Hybrid Mode Class",
    ],
  },
];

export default function SAPMMBlog({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName}) {
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
    <div className="w-full flex flex-col md:flex-row max-w-7xl justify-between gap-4 px-4 py-2 mx-auto">
      <div className="hidden lg:block">
        <LeftSection />
      </div>

      <div className="flex flex-col justify-center gap-4 md:mt-8 md:max-w-[680px]">
        <div className="flex flex-col gap-2">
          <Image
            className="w-full rounded-md"
            width={500}
            height={500}
            src="/assets/images/blog/SAP_MM_Course_In_Kolkata.jpeg"
            alt="Blog Image"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
              <span>
                By -{" "}
                <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">
                  Eme Academy
                </span>
              </span>
              <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2">
                <Calendar size={14} />
                08 May 2025
              </span>
              <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2">
                <Clock2 size={14} /> 10 min
              </span>
              <span className="flex gap-2 items-center pr-2">
                <Eye size={14} /> 5586 views
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h1
            id="top-5-benefits-of-sap-mm-for-revolutionising-supply-chain-management-process"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Top 5 Benefits of SAP MM for Revolutionising Supply Chain Management
            Process
          </h1>
          <p>
            In the present competitive business environment, efficient supply
            chain management is the most important for sustainable growth. SAP
            MM (Materials Management), a quality module in the SAP ERE system,
            plays a significant role in streamlining procurement and inventory
            functions across all industries. No matter if you are an aspiring
            SAP professional or a small business owner, understanding the
            benefits of the power of SAP MM can transform your
            organisation&#39;s operations entirely. This blog is here to discuss
            the top benefits of SAP MM in revolutionising the supply chain
            management process.
          </p>
          <div className="w-full mx-auto flex justify-center  lg:hidden  ">
            <BlogAdmissionForm {..._this} />
          </div>
          <p>
            If you are searching for the best{" "}
            <Link
              className="text-[#0057E2] underline"
              href="https://emeacademy.co.in/course/sap-mm"
              target="_blank"
            >
              SAP MM course in Kolkata
            </Link>
            , then this blog is perfect for you. So let&apos;s start together.
          </p>
        </div>
        {/* News Channel Logo */}

        <NewsLogo />


        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h2
            id="optimised-procurement-process"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Optimised Procurement Process
          </h2>
          <p>
            SAP MM aims to simplify and automate the procurement cycle — from
            purchase requisition to invoice verification. In organisations, it
            ensures that every material is properly procured at the right time,
            in the exact quantity, and from the right source. This is highly
            effective for significant cost savings while improving supplier
            relationships and helps to create a smooth workflow in your supply
            chain. In simple words, this procurement process eliminates manual
            errors while ensuring that the business operations are never stalled
            due to material shortages.
          </p>

          <div>
            <Cards cards={placementCards} id={1} _this={_this} />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h2
            id="realtime-inventory-management"
            className="text-[18px] font-[700] leading-[24px]"
          >
            {" "}
            Real-Time Inventory Management
          </h2>
          <p>
            With SAP MM, organisations can manage their inventory in real time.
            The system is very effective as it provides accurate stock
            information, helping various companies avoid overstocking or
            understocking issues. It also supports features like automatic
            reordering, stock transfer, and consumption-based planning. The
            real-time inventory data improves the decision- making process,
            reduces potential costs, and increases overall supply chain
            efficiency.
          </p>
        </div>

        <CompanyLogo _this={_this} />



        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h3
            id="enhanced-vendor-management"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Enhanced Vendor Management
          </h3>
          <p>
            SAP MM helps other organisations maintain a comprehensive vendor
            master record for better settlement. It includes performance
            tracking, contract management, and pricing conditions. It is also
            very effective as it promotes better negotiation strategies and
            fosters long-term, reliable supplier relationships. The SAP MM helps
            to create strong relationships with the vendor that lead to timely
            deliveries, competitive pricing and quality materials, all of which
            are essential for a successful supply chain.
          </p>
        </div>

        {/* Testimonials  */}
        <BlogTestimonial _this={_this} />

        

        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h3
            id="improved-compliance-and-audit-control"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Improved Compliance and Audit Control
          </h3>
          <p>
            SAP MM helps to maintain and improve compliance with tax
            regulations, company policies, and industry standards. Every
            transaction is recorded with a complete audit trail, ensuring
            transparency and accountability. In today’s regulatory environment,
            compliance is essential, and SAP MM helps businesses avoid penalties
            and maintain a reputation for integrity.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h3
            id="seamless-integration-with-other-sap-modules"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Seamless Integration with Other SAP Modules
          </h3>
          <p>
            SAP MM can effortlessly incorporate other modules like SAP PP
            (Production Planning), SAP SD (Sales and Distribution), and SAP FI
            (Financial Accounting). This creates a unified platform where data
            flows smoothly between departments, breaking down silos and boosting
            overall productivity. A perfectly integrated system means fewer data
            discrepancies, faster response times, and a more agile supply chain.
          </p>
        </div>

       

        <NewsCard _this={_this} />


        <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
          <h3
            id="final-thoughts"
            className="text-[18px] font-[700] leading-[24px]"
          >
            Final Thoughts
          </h3>
          <p>
            SAP MM is not just a module - it is a powerful tool that helps to
            transform businesses and manage their supply chains properly. From
            procurement and inventory to vendor and compliance management, SAP
            MM offers end-to-end solutions that can lead to operational
            excellence. So, if you are ready to boost your career in SAP, then
            enroll in a SAP MM course in Kolkata to fulfil your dream. To learn
            about the SAP MM course fees in Kolkata, you can check out our
            website,{" "}
            <Link
              className="text-[#0057E2] underline"
              href="https://emeacademy.co.in/"
              target="_blank"
            >
              EME Academy
            </Link>
            .
          </p>
        </div>

        <div className="flex justify-center">
          <CTAButton
            name="Enquire Now"
            styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
            _this={_this}
          />
        </div>
      </div>

      {/* Right Section  */}

      <div className="md:sticky md:top-14 md:h-screen bg-white hidden lg:block">
        <div className="mt-8">
          <div className="w-full">
            <BlogAdmissionForm {..._this} />
          </div>
          <ShareBlog />
        </div>
      </div>
    </div>
  );
}
