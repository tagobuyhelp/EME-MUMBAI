import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapHCMHero from "./SapHCMHero";
import OtherSAPHCMCourse from "./OtherSAPHCMCourse";
import KeypointHCM from "./KeypointHCM";
import WhatSAPHCMExpects from "./WhatSAPHCMExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP HCM Training in Mumbai - EME Academy Mumbai",
  description:
    "Get the best SAP HCM training in Mumbai at EME Academy Mumbai. Learn from experts, gain practical skills, and advance your career in human resources.",
  keywords: [
    "Best SAP HCM Training in Mumbai",
    "SAP HCM Training in Mumbai",
    "SAP HCM Training course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-hcm",
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

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapHCMHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointHCM />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPHCMCourse />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPHCMExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
