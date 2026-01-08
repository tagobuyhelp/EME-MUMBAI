import AllSapCourseDetails from "@/components/common/AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapAbapHero from "./SapAbapHero";
import KeypointABAP from "./KeypointABAP";
import WhatSAPABAPExpects from "./WhatSAPABAPExpects";
import OtherSAPABAPCourse from "./OtherSAPABAPCourse";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Best SAP ABAP Training in kolkata - EME Academy",
  description:
    "EME Academy provides the most job-focused SAP ABAP training in kolkata, designed to offer valuable insights into the analytics market. Our trainer will support you every step of the way, starting from the basics.",
  keywords: [
    "Best SAP ABAP Training in kolkata",
    "SAP ABAP Training in kolkata",
    "SAP ABAP Training course in kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/course/sap-abap",
  },
};

export default function page() {

   const Courses = "Sap Course";
    const email_sender = "SAP";
    const Brochure = "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
    const BrochureName = "sap_brochure.pdf";
    const _this = {
      Courses,
      email_sender,
      Brochure,
      BrochureName,
    };

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen bg-[#ffffff] overflow-x-hidden">
      {/* Here is Hero Section Color Gradiant */}
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapAbapHero {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointABAP />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>

      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPABAPCourse />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>

      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPABAPExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
