import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapSucessHero from "./SapSucessHero";
import KeypointSucess from "./KeypointSucess";
import OtherSAPSucessCourse from "./OtherSAPSucessCourse";
import WhatSAPSucessExpects from "./WhatSAPSucessExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title:
    "SAP Success Factors Training | SAP SuccessFactors Course in kolkata- - EME Academy",
  description:
    "Discover top-notch SAP Success Factors courses in kolkata. Gain valuable skills for your career growth. Join now!",
  keywords: [
    "Best SAP SuccessFactors Training in kolkata",
    "SAP SuccessFactorsTraining in kolkata",
    "SAP SuccessFactors course in kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/course/sap-success",
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
        <SapSucessHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointSucess />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPSucessCourse />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPSucessExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
