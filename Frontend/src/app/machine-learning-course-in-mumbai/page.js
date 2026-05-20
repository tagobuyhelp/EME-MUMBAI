import MLCourseDetails from "./MLCourseDetails";
import { Footer } from "@/components/common/Footer";
import KeyHighlight from "@/components/common/KeyHighlight";
import CareerCall from "@/components/common/CareerCall";
import MLHero from "./MLHero";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import CoursesTestimonials from "@/components/common/CoursesTestimonials";
import WhatMLExpect from "./WhatMLExpect";
import Faqs from "@/components/common/Faqs";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Turn Curiosity into Real Skills with the Best Generative AI Course in Mumbai",
  description:
    "Don’t Just Use AI, Learn to Build with it. Begin shaping your future with an advanced Machine Learning and Generative AI course in Mumbai.",
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
    "Generative AI Course Online mumbai"
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/machine-learning-course-in-mumbai",
  },
};

const faqs = [
  {
    id: 1,
    question: "How can an AI course build career growth?",
    answer:
      "In Today’s digital era, AI is taking over all the industries and businesses. Learning AI skills, including App Development, Prompt Engineering, LLM, and more, can secure your future and strengthen your career.",
  },
  {
    id: 2,
    question: "Which is the best Generative AI course in Mumbai?",
    answer:
      "The best Generative AI Course in Mumbai should include practical training in ChatGPT, Prompt Engineering, LLMs, LangChain, NLP, and AI App Development, along with real-world projects and placement support. Our course is designed to help beginners and professionals build industry-ready AI skills through hands-on learning.",
  },
  {
    id: 3,
    question: "Is this Generative AI course suitable for beginners?",
    answer:
      "Absolutely, yes, this course is designed for beginners, freshers, students, and working professionals. You do not need advanced technical knowledge to start Machine Learning and AI tools.",
  },
  {
    id: 4,
    question: "What topics are covered in the Generative AI course in Mumbai at EME Academy?",
    answer:
      "At EME Academy in Mumbai, the Generative AI Course with Certificate includes Generative AI fundamentals, Prompt Engineering, ChatGPT, Machine Learning, NLP, LLMs, LangChain, Python for AI, AI automation, and AI App Development with practical projects.",
  },
  {
    id: 5,
    question: "Do I get a certificate after completing the course?",
    answer:
      "Yes, students receive a course completion certificate after completing the Generative AI and ML training program and projects. Moreover, we give placement support and portfolio guidance.",
  },
  {
    id: 6,
    question: "Is placement assistance available after the course?",
    answer:
      "Yes, our Generative AI Certification Course Mumbai provide placement assistance, including resume building, interview preparation, mock interviews, portfolio guidance, and career support for AI-related job roles.",
  },
  {
    id: 7,
    question: "Do you teach ChatGPT and Prompt Engineering course in Mumbai?",
    answer:
      "Yes, Prompt Engineering and ChatGPT are important parts of the course. Students learn how to create effective prompts, automate workflows, and build AI-powered solutions with our Prompt Engineering Course in Mumbai.",
  },
];

export default function page() {
  const Courses = "AI & ML Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1LPlfsCPoEtHbV4Zif5j6pp1OyG-oE7cN/view?usp=sharing";
  const BrochureName = "AIML_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main className="flex flex-col justify-start items-center w-full overflow-x-hidden min-h-screen bg-[#070B23]">
      <AnotherHeader />
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100% ">
        <MLHero {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeyHighlight mode="aiml" />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <MLCourseDetails {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatMLExpect />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CoursesTestimonials name="Machine Learning" />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <Faqs faqs={faqs} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
