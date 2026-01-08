import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapAnalyticsHero from "./SapAnalyticsHero";
import KeypointSapAnalytics from "./KeypointSapAnalytics";
import OtherSAPAnalyticsCourse from "./OtherSAPAnalyticsCourse";
import WhatSAPAnalyticsExpects from "./WhatSAPAnalyticsExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP Analytics Cloud Training kolkata - EME Academy",
  description:
    "Looking for the top place to learn SAP Analytics in kolkata? Explore our institute for the best training!",
  keywords: [
    "Best SAP Analytics Cloud Training kolkata",
    "SAP Analytics Cloud Training kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/course/sap-analytics",
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
    <main className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapAnalyticsHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointSapAnalytics />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPAnalyticsCourse />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPAnalyticsExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
