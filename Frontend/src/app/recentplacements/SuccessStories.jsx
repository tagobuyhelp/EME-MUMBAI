"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SuccessStoryCard } from "./SuccessStoryCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const successStoriesData = [
    {
    id: 1,
    name: "Rahul Singh",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/RahulSingh.svg",
    beforeStatus: "Fresher",
    afterCompany: "TCS",
    afterCompanyLogo: "/assets/images/TcsLogo.svg",
  },
  {
    id: 2,
    name: "Aitrik Banerjee",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Aitrik.svg",
    beforeStatus: "Fresher",
    afterCompany: "Concentrix",
    afterCompanyLogo: "/assets/images/companyLogo/Concertrix.svg",
  },
    {
    id: 3,
    name: "Rahul Rana",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/RahulRana.svg",
    beforeStatus: "Fresher",
    afterCompany: "TCS",
    afterCompanyLogo: "/assets/images/TcsLogo.svg",
  },
  {
    id: 4,
    name: "Ankita Biswas",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Ankita_Biswas_HR.webp",
    beforeStatus: "Fresher",
    afterCompany: "Human Settlement Planning Centre",
    afterCompanyLogo: "/assets/icons/companies/hspc.jpeg",
  },
  {
    id: 5,
    name: "Rahul Routh",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/RahulRouth.svg",
    beforeStatus: "Fresher",
    afterCompany: "TCS",
    afterCompanyLogo: "/assets/images/TcsLogo.svg",
  },
  {
    id: 6,
    name: "Sreenanda Ghosh",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Sreenanda_Ghosh_DM_Lead Height.webp",
    beforeStatus: "Fresher",
    afterCompany: "Lead Heights",
    afterCompanyLogo: "/assets/images/Home/lead-height-logo.png",
  },
  {
    id: 7,
    name: "Laiba Noor",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Laiba_Noor_DM_Lead_Height.webp",
    beforeStatus: "Fresher",
    afterCompany: "2coms",
    afterCompanyLogo: "/assets/icons/companies/2coms.avif",
  },
  {
    id: 8,
    name: "Amit Singh",
    location: "Kolkata, India",
    profileImage:
      "/assets/images/Home/hero/Amit_Singh_SAP FICO_Hamilton_Reserch_PVT_Ltd.webp",
    beforeStatus: "Fresher",
    afterCompany: "Hamilton Research Pvt. Ltd",
    afterCompanyLogo: "/assets/icons/companies/hamilton-research.jpeg",
  },
  {
    id: 9,
    name: "Adrija Bose",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Adrija_Bose_DM_Lead_Height.webp",
    beforeStatus: "Fresher",
    afterCompany: "Lead Heights",
    afterCompanyLogo: "/assets/images/Home/lead-height-logo.png",
  },
  {   
    id: 10,
    name: "Jayita Halder",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Jayita_Halder_HR_Onemed_Billing.webp",
    beforeStatus: "Fresher",
    afterCompany: "Trustklub",
    afterCompanyLogo: "/assets/icons/companies/trustklub.jpg",
  },
  {
    id: 11,
    name: "Avick Chakraborty",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Avick.svg",
    beforeStatus: "Fresher",
    afterCompany: "Oxford TMG Corp",
    afterCompanyLogo: "/assets/images/companyLogo/Oxford.svg",
  },
  {
    id: 12,
    name: "Abhishek Majumder",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Abhishek_Majumder_DM_Lead Height.webp",
    beforeStatus: "Fresher",
    afterCompany: "Lead Heights",
    afterCompanyLogo: "/assets/images/Home/lead-height-logo.png",
  },
  {
    id: 13,
    name: "Keya Sharma",
    location: "Kolkata, India",
    profileImage:
      "/assets/images/Home/hero/Keya_Sharma_SAP FICO_Hamilton_Reserch_PVT_Ltd.webp",
    beforeStatus: "Fresher",
    afterCompany: "Hamilton Research Pvt. Ltd",
    afterCompanyLogo: "/assets/icons/companies/hamilton-research.jpeg",
  },
  {
    id: 14,
    name: "Krishna Das Ghosh",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/Krishna_Das_Ghosh_DM_Lead Height.webp",
    beforeStatus: "Fresher",
    afterCompany: "Genius Consultant",
    afterCompanyLogo: "/assets/icons/companies/genius-consultants.avif",
  },
  {
    id: 15,
    name: "Sukanya Ghosh",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/student-4.svg",
    beforeStatus: "Fresher",
    afterCompany: "Lead Height",
    afterCompanyLogo: "/assets/images/companyLogo/company-4.svg",
  },
  {
    id: 16,
    name: "Souvik Mondal",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Souvik.svg",
    beforeStatus: "Fresher",
    afterCompany: "mPokket",
    afterCompanyLogo: "/assets/images/companyLogo/company-2.svg",
  },
  {
    id: 17,
    name: "Aniket Shome",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/student-3.svg",
    beforeStatus: "Fresher",
    afterCompany: "Lead Height",
    afterCompanyLogo: "/assets/images/companyLogo/company-4.svg",
  },
  {
    id: 18,
    name: "ERA Saha",
    location: "Kolkata, India",
    profileImage: "/assets/images/Home/hero/ERA_SAHA_DM.webp",
    beforeStatus: "Fresher",
    afterCompany: "Not Specified",
    afterCompanyLogo: "/assets/icons/companies/default.svg",
  },
  {
    id: 19,
    name: "Nuruzzaman Mondal",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/student-5.svg",
    beforeStatus: "Fresher",
    afterCompany: "Mervice",
    afterCompanyLogo: "/assets/images/companyLogo/company-3.svg",
  },
  {
    id: 20,
    name: "Koushik Mondal",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Kousik.svg",
    beforeStatus: "Fresher",
    afterCompany: "mPokket",
    afterCompanyLogo: "/assets/images/companyLogo/company-2.svg",
  },


  
  
  
  
  
  
  
  
  
  

  // ===== EXISTING STUDENTS =====
  {
    id: 11,
    name: "Vashanvee Kumari",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/student-1.svg",
    beforeStatus: "Fresher",
    afterCompany: "Monotel",
    afterCompanyLogo: "/assets/images/companyLogo/company-1.svg",
  },
  
  
  
  {
    id: 15,
    name: "Supratim Sen",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/student-6.svg",
    beforeStatus: "Fresher",
    afterCompany: "Lead Height",
    afterCompanyLogo: "/assets/images/companyLogo/company-4.svg",
  },
  {
    id: 16,
    name: "Ujjal Sutradhar",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Ujjal.svg",
    beforeStatus: "Fresher",
    afterCompany: "Webbo",
    afterCompanyLogo: "/assets/images/companyLogo/Webbo.svg",
  },
  
  
  {
    id: 20,
    name: "Subham Sambui",
    location: "Kolkata, India",
    profileImage:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/Shuvam.svg",
    beforeStatus: "Fresher",
    afterCompany: "Oxford TMG Corp",
    afterCompanyLogo: "/assets/images/companyLogo/Oxford.svg",
  },

  
  
  
];

const tabs = [
  { id: "all", label: "All Courses" },
  { id: "mba", label: "11-Month MBA-level PG" },
  { id: "certification", label: "4-6 Month Certification" },
  { id: "short", label: "Short-Term Certification" },
];

export default function SuccessStories() {
  const [displayCount, setDisplayCount] = useState(8);
  const visibleStories = successStoriesData.slice(0, displayCount);
  const hasMore = displayCount < successStoriesData.length;
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoHighlightIndex, setAutoHighlightIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!visibleStories.length) return;
    const interval = setInterval(() => {
      setAutoHighlightIndex((prev) => (prev + 1) % visibleStories.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [visibleStories.length]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 8);
  };

  return (
    <section className="w-full bg-[#F5F6F9]">
      <div className="max-w-7xl mx-auto h-[1px] w-full bg-gradient-to-r from-[#EEEEEE] via-[#D2D2D2] to-[#EEEEEE] my-8 md:my-10" />
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h1 className="text-xl md:text-[26px] font-semibold text-[#4B4B4B]">
          The Latest{" "}
          <span className="relative inline-flex flex-col text-[#232D63]">
            Success Stories
            <motion.span
              className="flex justify-end items-end"
              initial={{ width: 0 }}
              animate={isLoaded ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Underline"
                width={160}
                height={50}
                className="ml-1 w-[80px] md:w-[100px] h-3 md:h-4"
              />
            </motion.span>
          </span>
          {" "}Of EME Academy
        </h1>
        <p className="text-[#454545] text-xs md:text-base">
          Explore the professional milestones EME alumni have achieved before
          and after joining our institute.
        </p>
      </motion.div>

      {/* Success Stories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleStories.map((story, index) => (
            <SuccessStoryCard
              key={story.id}
              name={story.name}
              profileImage={story.profileImage}
              beforeStatus={story.beforeStatus}
              afterCompany={story.afterCompany}
              afterCompanyLogo={story.afterCompanyLogo}
              isHighlighted={autoHighlightIndex === index}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="px-14 text-base rounded-xl border-1 border-[#0057E2] text-[#0057E2] font-semibold hover:bg-blue-50 cursor-pointer"
            >
              Load More
            </Button>
          </motion.div>
        )}

        {/* No Results Message */}
        {successStoriesData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">
              No success stories found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
