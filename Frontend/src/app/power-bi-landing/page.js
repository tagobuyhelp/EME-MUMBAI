import AdmissionHeader from "@/components/common/AdmissionHeader";
import WhyEmeLanding from "@/components/common/WhyEmeLanding";
import InfiniteCall from "@/components/InfiniteCall";
import certiface from "../../../public/assets/images/certified.png";
import iso from "../../../public/assets/images/isoNew.png";
import startup from "../../../public/assets/images/startup.png";
import AdmissionForm from "@/components/common/LandingAdmissionForm";
import Image from "next/image";
import Featured from "@/components/common/Featured";
import NewsChannel from "@/components/NewsChannel";
import CareerProspect from "@/components/common/CareerProspect";
import Awards from "@/components/common/Awards";
import msme from "../../../public/assets/images/msmeOne.svg";
import PowerBiHeroLanding from "./PowerBiHeroLanding";
import PowerBiLandingCourse from "./PowerBiLandingCourse";
import OurSuccessfulStudentsTestimonial from "@/components/OurSuccessfulStudentsTestimonial";
import BoardOfAdvisor from "@/components/common/BoardOfAdvisor";
import { EventAbout } from "../../components/common/EventAbout";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://emeacademy.co.in/power-bi-landing",
  },
};

const faq = [
  {
    id: 1,
    title: "Why should I choose EME Academy for Power BI training?",
    desc: "You may find out a number of reasons as you explore us. But two foremost among them are - 1. Quality of Teaching  2. Quantity of Knowledge Delivered"
  },
  {
    id: 2,
    title: "What modules does the Power BI course cover?",
    desc: "For Power BI Course some of the main topics that modules covered are :- Key Concepts, Data Modelling, DAX, Data Sources, Visualization etc."
  },
  {
    id: 3,
    title: "Are there any prerequisites for this course? ",
    desc: "No, the basic knowledge of IT is not mandatory, although if the candidate has it, it would be always beneficial."
  },
  {
    id: 4,
    title: "Will I have placement support after course completion?",
    desc: "Yes, we provide full placement assistance, ensuring you find the right job post-training."
  },


]
export default function page() {
  const Prospect = [
    "BI (Business Intelligence) Analyst",
    "Power BI Developer",
    "Data Engineer",
    "Data Analyst",
    "Financial Analyst",
    "BI Consultant",
  ];

  const whyEme = [
    "Lifetime Placement Assistance",
    "Certified Experienced Trainers",
    "Multiple Unique Specialization in Power BI",
    "24*7 Server Access",
    "Latest Study Materials",
    "Anytime Trainer Support",
    "Continuous Evaluation",
    "Flexible Batch Timings",
    "Online/Offline Classroom Session",
    "Industry Resume Preparation",
  ];

  const Courses = "Power BI Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "power_bi_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main
      className={` flex flex-col justify-start items-center w-full min-h-screen bg-[#CAE5FF]`}
    >
      <AdmissionHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <PowerBiHeroLanding {..._this}/>
      </div>

      <div className="w-full  md:hidden bg-gradient-to-r from-[#CAE5FF] from-20% to-[#FFF] to-100% flex flex-col gap-y-5  px-5 py-2 lg:py-5">
        <div className="  w-full  flex  flex-col justify-center items-center gap-y-2 lg:gap-y-3">
          <div className="w-full  flex items-center justify-center gap-x-2">
            <div>
              <Image
                className="w-8 h-8 "
                width={500}
                height={500}
                src={certiface}
                alt="certiface"
              />
            </div>
            <div className="text-black text-xl leading-5 font-semibold">
              Certified by{" "}
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-x-5">
            <div>
              <Image
                className="w-[80px] lg:w-[100px]"
                width={150}
                height={150}
                src={msme}
                alt="msme"
              />
            </div>
            <div>
              <Image
                className="w-[120px] lg:w-[150px]"
                width={150}
                height={150}
                src={startup}
                alt="startup"
              />
            </div>
            <div>
              <Image
                className="w-[60px] lg:w-[70px]"
                width={70}
                height={70}
                src={iso}
                alt="iso"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <AdmissionForm {..._this} />
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-20% to-[#FFF] to-100%">
        <StudentsWorkingInCompanies courses={Courses} brochure={Brochure} brochureName={BrochureName} />
      </div>
      <div
        id="CourseCurriculum"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <PowerBiLandingCourse {..._this}/>
      </div>
      <div
        id="about"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <Featured />
      </div>

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <NewsChannel />
      </div>

      <div
        id="CourseTool"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <WhyEmeLanding data={whyEme} {..._this}/>
      </div>

      <div
        id="testimonials"
        className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% "
      >
        {/* <GenerativeAiLandingTestimonials /> */}
      </div>

      <div id="CourseProspects" className="flex w-full  bg-[#ffffff] ">
        <CareerProspect data={Prospect} {..._this}/>
      </div>

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>

      <div className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this}/>  
      </div>


      <div className="flex w-full bg-[#ffffff]">
        <BoardOfAdvisor />
      </div>
      <div className="flex flex-col w-full  bg-[#ffffff]">
        <div className="relative flex justify-center text-center text-[22px] font-semibold text-[#4B4B4B]">
          Student
          <span className="flex flex-col items-end">
            <span className="text-[22px] text-[#232D63]">Gallery</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>
        <EventAbout />
      </div>


      <div
        id="testimonials"
        className="flex flex-col justify-center gap-2 items-center w-full bg-[#ffffff] p-4 md:p-2"
      >
        <OurSuccessfulStudentsTestimonial />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={faq} />
      </div>
      <CoursesLandingFooter courseName="Power BI Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
