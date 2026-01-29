import WhyEmeLanding from "@/components/common/WhyEmeLanding";
import SAPHeroLanding from "./SAPHeroLanding";
import InfiniteCall from "@/components/InfiniteCall";
import certiface from "../../../public/assets/images/certified.png";
import iso from "../../../public/assets/images/isoNew.png";
import startup from "../../../public/assets/images/startup.png";
import AdmissionForm from "@/components/common/LandingAdmissionForm";
import Image from "next/image";
import AllSapCourseLanding from "./AllSapCourseLanding";
import Featured from "@/components/common/Featured";
import NewsChannel from "@/components/NewsChannel";
import CareerProspect from "@/components/common/CareerProspect";
import Awards from "@/components/common/Awards";
import msme from "../../../public/assets/images/msmeOne.svg";
import SAPStudentWorking from "./SAPStudentWorking";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import BoardOfAdvisor from "@/components/common/BoardOfAdvisor";
import { EventAbout } from "../../components/common/EventAbout";
import Header from "@/components/common/AdmissionHeader";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://emeacademy.co.in/sap-training-institute",
  },
};

const sapfaq = [
  {
    id: 1,
    title: "Why should I choose EME Academy for SAP training?",
    desc: "EME Academy is recognized for its expert faculty, hands-on SAP training with real-world projects, and strong track record of successful placements in reputable companies."
  },
  {
    id: 2,
    title: "What SAP modules does EME Academy offer training in?",
    desc: "EME Academy provides comprehensive training in essential SAP modules such as SAP FI, SAP MM, SAP SD, SAP HR, and more, ensuring a holistic learning experience."
  },
  {
    id: 3,
    title: "Can I access SAP software during my training at EME Academy?  ",
    desc: "Yes, students at EME Academy have access to SAP software for hands-on practice, essential for mastering SAP applications and gaining practical skills."
  },
  {
    id: 4,
    title: "What makes the faculty at EME Academy qualified to teach SAP courses? ",
    desc: "The faculty members at EME Academy are industry professionals with extensive experience in SAP implementation and consulting, providing valuable insights and mentorship."
  },
  {
    id: 5,
    title: "How flexible are the training schedules at EME Academy? ",
    desc: "EME Academy offers flexible training schedules to accommodate both full-time students and working professionals, ensuring accessibility and convenience."
  },
]

export default function page() {
  const Prospect = [
    "SAP Consultant",
    "SAP ABAP Consultant.",
    "SAP FIFO Consultant.",
    "SAP SD Consultant.",
    "SAP MM Consultant.",
    "SAP Hana Architect.",
    "SAP Project Manager",
    "SAP Basis Administrator.",
  ];

  const whyEme = [
    "Lifetime Placement Assistance",
    "Certified Experienced Trainers",
    "Multiple Unique Specialization in SAP",
    "24*7 Server Access",
    "Latest Study Materials",
    "Anytime Trainer Support",
    "Continuous Evaluation",
    "Flexible Batch Timings",
    "Online/Offline Classroom Session",
    "Industry Resume Preparation",
  ];

const Courses = "Sap Course";
const email_sender = "SAP";
const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
const BrochureName = "SAP_MM_brochure.pdf";
  const _this = {
  Courses,
  email_sender,
  Brochure,
  BrochureName,
};


  return (
    <main
      className={`flex flex-col justify-start items-center w-full min-h-screen bg-[#CAE5FF]`}
    >
      <Header _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SAPHeroLanding {..._this}/>
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
        <SAPStudentWorking />
      </div>
      <div
        id="course"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <AllSapCourseLanding {..._this} />
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
        id="CourseCurriculum"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <WhyEmeLanding data={whyEme} />
      </div>

      <div className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        {/* <SapTestimonials /> */}
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
        {/* <OurSuccessfulStudentsTestimonial /> */}
      </div>

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={sapfaq} />
      </div>
      <CoursesLandingFooter courseName="SAP Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
