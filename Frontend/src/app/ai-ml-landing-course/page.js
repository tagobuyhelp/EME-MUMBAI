import AdmissionHeader from "@/components/common/AdmissionHeader";
import WhyStudentsChooseUs from "./WhyStudentsChooseUs";
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
import WhatOurAIMLCourseProvides from "./WhatOurAIMLCourseProvides";

export const metadata = {
  title: "Best Machine Learning & Artificial Intelligence Institute in Mumbai",
  description:
    "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
  keywords: [
    "Best Generative AI Course in mumbai",
    "Generative AI Institute in mumbai",
    "Prompt Engineering Course in mumbai",
    "LLM Course in mumbai",
    "AI Course in mumbai",
    "LangChain Course mumbai",
    "Generative AI Certification Course mumbai",
    "Generative AI Course for Beginners",
    "Generative AI Course with Placement",
    "Prompt Engineer Course mumbai",
    "ChatGPT Course mumbai",
    "Generative AI Course for Freshers",
    "AI App Development Course mumbai",
    "Generative AI Course with Certificate",
    "Generative AI Course Fees mumbai",
    "NLP Course mumbai",
    "Generative AI Course for Working Professionals",
    "Generative AI Freelancing Course mumbai",
    "Best AI Training Institute mumbai",
    "Generative AI Course Online mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/ai-ml-landing-course",
  },
  openGraph: {
    title: "Best Machine Learning & Artificial Intelligence Institute in Mumbai",
    siteName: "EME Academy Mumbai",
    url: "https://mumbai.emeacademy.co.in/ai-ml-landing-course",
    description: "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
    type: "website",
    images: [
      {
        url: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png",
      },
    ],
    locale: "en_IN",
  },
};

const faq = [
  {
    id: 1,
    title: "I don't know how to code. Can I still join this program?",
    desc: "Yes! We start from absolute scratch. Our curriculum is expertly structured as an AI Course for Beginners Mumbai to build your tech literacy from the ground up. Whether you are a non-IT student or transitioning careers, it is the perfect Machine Learning Course for Freshers looking to break into the tech industry.",
  },
  {
    id: 2,
    title: "I am currently employed in IT. How can I manage the classes?",
    desc: "We designed the AI Course for Working Professionals Mumbai specifically for demanding corporate schedules. You can opt for our highly flexible AI Course Weekend Batch Mumbai or take advantage of our fully interactive Online AI ML Course Mumbai format to upskill without leaving your current job.",
  },
  {
    id: 3,
    title: "What kind of career and job support do you provide?",
    desc: "We don't just teach you algorithms; we launch your data career. We offer a guaranteed AI ML Course with Placement Mumbai, routing your technical portfolio directly to top tech firms. We also offer tracks featuring an AI ML Course with Internship Mumbai so you can gain hands-on corporate experience before you even graduate.",
  },
  {
    id: 4,
    title: "What specific languages and programming logic will I learn?",
    desc: "You will start by mastering the industry standard in our Python for Machine Learning Course Mumbai. From there, you will learn to build predictive models, predictive analytics, and classification systems through our intensive Supervised Learning Course Mumbai modules.",
  },
  {
    id: 5,
    title: "Does this program cover advanced topics like neural networks?",
    desc: "Absolutely. This isn't just basic data entry; it functions as a complete, high-level Data Science and ML Course Mumbai. You will move beyond basic algorithms to architect complex neural networks and computer vision models in our advanced Deep Learning Course in Mumbai.",
  },
  {
    id: 6,
    title: "What credentials and certifications will I receive?",
    desc: "Upon graduation, you will earn a highly respected, industry-recognized Machine Learning Course with Certificate. To give you a massive competitive edge in the job market, our curriculum also features an exclusive AI ML Course with Power BI Certification to prove your data visualization mastery to recruiters.",
  },
  {
    id: 7,
    title: "What is the cost of the program, and are there payment plans?",
    desc: "We believe elite data education should be highly accessible. We maintain completely transparent Machine Learning Course Fees Mumbai with no hidden charges. To help you focus entirely on your studies, we offer flexible 0% No-Cost EMI payment options.",
  },
  {
    id: 8,
    title: "Why is EME Academy considered the top choice for AI training?",
    desc: "Because we teach commercial tech execution. Widely recognized as the Best AI Institute Western India has to offer, we skip the outdated textbook theory and deliver the exact, hands-on Machine Learning Training Mumbai that modern tech startups and global MNCs demand.",
  },
  {
    id: 9,
    title: "Is this training primarily theoretical or practical?",
    desc: "It is 100% practical. As the premier Machine Learning Institute in Mumbai, we simulate a live corporate tech laboratory. You will train on live datasets, clean messy data, and deploy real-world models under the guidance of senior data scientists.",
  },
  {
    id: 10,
    title: "Will I learn both Artificial Intelligence and Machine Learning?",
    desc: "Yes. This is a comprehensive, dual-track program. We combine the predictive data modeling of the Best Machine Learning Course in Mumbai with the advanced tech applications of a top-tier Artificial Intelligence Course in Mumbai, solidifying our reputation as the absolute Best AI and ML Institute in Mumbai.",
  },
];

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
      className="flex flex-col justify-start items-center w-full min-h-screen bg-[#CAE5FF]/10 text-gray-900"
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full">
        <InfiniteCall />
      </div>
      <div className="w-full bg-gradient-to-r from-[#CAE5FF]/40 to-white">
        <AIMLLandingHero {..._this} />
      </div>

      <div className="w-full md:hidden bg-gradient-to-r from-[#CAE5FF]/30 to-white flex flex-col gap-y-5 px-5 py-4">
        <div className="w-full flex flex-col justify-center items-center gap-y-3">
          <div className="w-full flex items-center justify-center gap-x-2">
            <div>
              <Image
                className="w-6 h-6"
                width={24}
                height={24}
                src={certiface}
                alt="certified"
              />
            </div>
            <div className="text-black text-lg leading-5 font-semibold">
              Certified by
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-x-5">
            <div>
              <Image
                className="h-8 w-auto object-contain"
                width={100}
                height={30}
                src={msme}
                alt="msme"
              />
            </div>
            <div>
              <Image
                className="h-8 w-auto object-contain"
                width={100}
                height={30}
                src={startup}
                alt="startup"
              />
            </div>
            <div>
              <Image
                className="h-8 w-auto object-contain"
                width={45}
                height={30}
                src={iso}
                alt="iso"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <AdmissionForm {..._this} />
        </div>
      </div>
      
      <div className="w-full bg-gradient-to-r from-[#CAE5FF]/20 to-white">
        <AIMLStudentWorking />
      </div>

      <div
        id="CourseCurriculum"
        className="w-full bg-white"
      >
        <AIMLCourse {..._this} />
      </div>

      <div className="w-full">
        <WhatOurAIMLCourseProvides />
      </div>

      <div className="w-full">
        <WhyStudentsChooseUs />
      </div>

      <div
        id="about"
        className="w-full bg-white"
      >
        <Featured />
      </div>

      <div className="w-full bg-white">
        <NewsChannel />
      </div>

      <div id="CourseProspects" className="flex w-full bg-[#ffffff] ">
        <CareerProspect data={Prospect} {..._this} />
      </div>

      <div id="awards" className="flex w-full bg-white">
        <Awards />
      </div>

      <div className="flex w-full bg-white">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="flex w-full bg-[#ffffff]">
        <BoardOfAdvisor />
      </div>
      
      <div className="flex flex-col w-full bg-[#ffffff] py-8">
        <div className="relative flex justify-center text-center text-[22px] font-semibold text-[#4B4B4B]">
          Student
          <span className="flex flex-col items-end ml-1">
            <span className="text-[22px] text-[#232D63]">Gallery</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Vector Line"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>
        <EventAbout />
      </div>

      <div className="w-full bg-white">
        <Faqs faqs={faq} />
      </div>
      
      <CoursesLandingFooter courseName="AI & ML Course" {..._this} />
      <StickyCTAButton {..._this} />
    </main>
  );
}
