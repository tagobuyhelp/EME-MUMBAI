import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapMMHero from "./SapMMHero";
import OtherSAPMMCourse from "./OtherSAPMMCourse";
import KeypointMM from "./KeypointMM";
import WhatSAPMMExpects from "./WhatSAPMMExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP MM Training Course in Mumbai | Certification & Placement Support",
  description:
    "Enroll in the best SAP MM Training Course in Mumbai and master Material Management with hands-on practical training, paid internships, mock interviews, and 100% placement assistance from industry experts.",
  keywords: [
    "Best SAP MM Training in Mumbai",
    "SAP MM Training in Mumbai",
    "SAP MM Training course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-mm",
  },
};

export default function page() {
  const Courses = "Sap Course";
  const email_sender = "SAP";
  const Brochure =
    "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
  const BrochureName = "sap_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const benefits = [
    "Comprehensive Course Selection ",
    "Career Advancement",
    "Industry-Approved Certification",
    "20+ S A P Experts as Trainer",
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapMMHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointMM />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPMMCourse />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPMMExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
