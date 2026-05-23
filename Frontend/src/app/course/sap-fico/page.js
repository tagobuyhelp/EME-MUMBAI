import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapFIFOHero from "./SapFIFOHero";
import OtherSAPFIFOCourse from "./OtherSAPFIFOCourse";
import KeypointFIFO from "./KeypointFIFO";
import WhatSAPFIFOExpects from "./WhatSAPFIFOExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP FICO Training Course in Mumbai | Certification & Placement Support",
  description:
    "Join the best SAP FICO Training Course in Mumbai and gain expertise in Financial Accounting & Controlling with practical training, paid internships, mock interviews, and 100% placement assistance. Learn from industry experts today.",
  keywords: [
    "Best SAP FICO Training in Mumbai",
    "SAP FICO Training in Mumbai",
    "SAP FICO Training course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-fico",
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
        <SapFIFOHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointFIFO />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>

      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPFIFOCourse />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPFIFOExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
