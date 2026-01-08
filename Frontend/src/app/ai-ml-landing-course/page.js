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
import AIMLLandingHero from "./AIMLLandingHero";
import AIMLStudentWorking from "./AIMLStudentWorking";
import AIMLCourse from "./AIMLCourse";
import BoardOfAdvisor from "@/components/common/BoardOfAdvisor";
import { EventAbout } from "../../components/common/EventAbout";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],
  alternates: {
    canonical: "https://emeacademy.co.in/ai-ml-landing-course",
  },
};

const faq = [
  {
    id: 1,
    title: " Is AI & ML a good course to boost your career?",
    desc: "Definitely, if you are a person having an inquisitive bent of mind, wanting to bring about landmark changes in the way things run,  you are the person who can boost his/her career with AI & ML course."
  },
  {
    id: 2,
    title: " What has AI & ML to do with the industries?",
    desc: " AI & ML opens a plethora of job opportunities in the industry. Gartner’s study claims there were 2.3 million job prospects in AI & ML in 2020, which have duplicated in last three years."
  },
  {
    id: 3,
    title: "Why choose AI & ML at EME Academy?",
    desc: "EME Academy stands as a premier institute offering comprehensive and learning experience in AI & ML. The course fees are reasonable, the teaching is of the best quality and success is guaranteed."
  },
  {
    id: 4,
    title: "Who is eligible for the course?",
    desc: "We offer courses for learners who have sound acquittance in computers and the Internet. Additionally, courses have also been  designed for every beginner to learn impressive tools through lab practices. "
  },
  {
    id: 5,
    title: "What are the job opportunities available after pursuing a course?",
    desc: "There are multiple career options after pursuing the course. You may be a Data scientist, a machine learning engineer, a research scientist, a business intelligence developer or an AI Data Scientist. There are also scopes in big data engineering, robotics, AI engineering and a few more options to choose from. "
  },
  {
    id: 6,
    title: "How flexible are training schedules at EME Academy?",
    desc: "At EME Academy, we offer flexible training schedules that our students can accommodate while being full-time students and working professionals. Thus ensuring accessibility and convenience."
  },
  {
    id: 7,
    title: "What makes the faculty at EME Academy qualified to teach AI & ML course?",
    desc: "EME Academy fosters a supportive and collaborative learning environment with access to dedicated team of mentors always willing to assist you. "
  },
]

export default function page() {
  const Prospect = [
    "AI Consultant in MNCs",
    "Data Science Specialist",
    "Business Intelligence Developer",
    "AI Specialist",
    "Machine Learning Engineer",
    "AI Developer",
    "AI Product Manager",
    "AI Data Analyst",
  ];

  const whyEme = [
    "Lifetime Placement Assistance",
    "Certified Experienced Trainers",
    "Multiple Unique Specialization in AI & ML",
    "24*7 Server Access",
    "Latest Study Materials",
    "Anytime Trainer Support",
    "Continuous Evaluation",
    "Flexible Batch Timings",
    "Online/Offline Classroom Session",
    "Industry Resume Preparation",
  ];

  const Courses = "AI & ML Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1LPlfsCPoEtHbV4Zif5j6pp1OyG-oE7cN/view?usp=sharing";
  const BrochureName = "ai-ml-brochure.pdf";
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
        <AIMLLandingHero {..._this}/>
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
        <AIMLStudentWorking />
      </div>
      <div
        id="CourseCurriculum"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <AIMLCourse {..._this}/>
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
        {/* <GenerativeAiLandingTestimonials/> */}
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
        <Faqs faqs={faq}/>
      </div>
      <CoursesLandingFooter courseName="AI & ML Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
