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
import CloudComputingHeroLanding from "./CloudComputingHeroLanding";
import CloudComputingCourse from "./CloudComputingCourse";
import { CloudComputingLandingTestimonials } from "./CloudComputingLandingTestimonials";
import OurSuccessfulStudentsTestimonial from "@/components/OurSuccessfulStudentsTestimonial";
import BoardOfAdvisor from "@/components/common/BoardOfAdvisor";
import { EventAbout } from "../../components/common/EventAbout";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: "https://emeacademy.co.in/cloud-computing-landing",
  },
};

const faq = [
  {
    id: 1,
    title: "Is Cloud computing a good course to boost your career?",
    desc: "Cloud computing certification opens a plethora of job opportunities in the industry. The course offers a valuable pathway to acquire the skills needed to succeed in this digital age."
  },
  {
    id: 2,
    title: " Why choose cloud computing at EME Academy?",
    desc: " EME Academy offers inclusive training in cloud computing with extensive practical training. This helps students equipped with live projects and simulations coupled with in-depth study of the subject."
  },
  {
    id: 3,
    title: "Who is eligible for the course?",
    desc: "Anyone having interest in computers and technology is best suited for the course. Courses have also been designed for beginners to get fast equipped with knowledge in cloud computing. "
  },
  {
    id: 4,
    title: "What are the job opportunities available after pursuing a course?",
    desc: "The demand for skilled cloud professionals continues to boom as businesses adopt Cloud Technologies. Cloud Architect, Cloud Engineer, and DevOps Engineer are a few career options. followed by many more. "
  },
  {
    id: 5,
    title: "Why are cloud computing courses crucial?",
    desc: "Cloud Computing courses are crucial because the adoption of cloud technologies by the big industries is always growing, and the demand for skilled personnels is always increasing. The courses enrich the aspirants with all necessary skills, thereby preparing them for high-paying jobs in some of the fields like IT, Devops and Security. "
  },
  {
    id: 6,
    title: "Are Cloud Computing courses in high demand in today’s competitive job market?",
    desc: "Yes, cloud computing courses are in high demand. According to LinkedIn, cloud jobs are increasing by 30% annually and since August 2024, more than 20000 jobs are available in the cloud domain in India"
  },
  {
    id: 7,
    title: "Can I take a cloud computing course in 2 months?",
    desc: "Learning cloud computing in two months can be challenging, but our experts can help you achieve your career goal in the best way. "
  },
]

export default function page() {
  const Prospect = [
    "Cloud Solutions Architect",
    "Cloud Developer",
    "Cloud Consultant",
    "Cloud Security Engineer",
    "Cloud Data Engineer",
    "Cloud Operation Manager",
    "Cloud Automation Engineer",
    "Cloud Business manager",
    "Cloud Educator",
    "Site Reliability Engineer & many more",
  ];

  const whyEme = [
    "Lifetime Placement Assistance",
    "Certified Experienced Trainers",
    "Multiple Unique Specialization in Cloud Computing",
    "24*7 Server Access",
    "Latest Study Materials",
    "Anytime Trainer Support",
    "Continuous Evaluation",
    "Flexible Batch Timings",
    "Online/Offline Classroom Session",
    "Industry Resume Preparation",
  ];

  const Courses = "Cloud Computing Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
  // const Brochure =
  //   "/assets/documents/AllCourseBrochure/CLOUD_COMPUTING_COURSE.pdf";
  const BrochureName = "CLOUD_COMPUTING_COURSE_brochure.pdf";
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
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <CloudComputingHeroLanding {..._this}/>
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
        <CloudComputingCourse {..._this}/>
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
        <WhyEmeLanding data={whyEme} />
      </div>

      <div
        id="testimonials"
        className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% "
      >
        <CloudComputingLandingTestimonials />
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
        <Faqs faqs={faq}/>
      </div>
      <CoursesLandingFooter courseName="Cloud Computing Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
