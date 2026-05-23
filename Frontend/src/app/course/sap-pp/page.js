import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapPPHero from "./SapPPHero";
import OtherSAPPPCourse from "./OtherSAPPPCourse";
import KeypointPP from "./KeypointPP";
import WhatSAPPPExpects from "./WhatSAPPPExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP PP Training Course in Mumbai | Certification & Placement Support",
  description:
    "Join the best SAP PP Training Course in Mumbai and master Production Planning with hands-on practical training, paid internships, mock interviews, flexible EMI options, and 100% placement assistance from industry experts.",
  keywords: [
    "Best SAP PP Training in Mumbai",
    "SAP PP Training in Mumbai",
    "SAP PP Training course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-pp",
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
        <SapPPHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointPP />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPPPCourse />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPPPExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
