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
  title:
    "Machine Learning Course | Best Machine Learning institute in kolkata - EME Academy",
  description:
    "Join the best machine learning training in Kolkata and enhance your skills with an expert-led machine learning course in Kolkata for career growth. Enroll now!",
  keywords: [
    "machine learning training in kolkata",
    "machine learning course in kolkata",
    "machine learning institute in kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/machine-learning-course-in-kolkata",
  },
};

  const faqs = [
    {
      id: 1,
      question: "Is AI & ML a good course to boost your career?",
      answer:
        "Definitely, if you are a person having an inquisitive bent of mind, wanting to bring about landmark changes in the way things run, you are the person who can boost his/her career with AI & ML course.",
    },
    {
      id: 2,
      question: "What has AI & ML to do with the industries?",
      answer:
        "You will get to learn Network Security, Encryption, Malware Analysis, Ethical Hacking, and more.",
    },
    {
      id: 3,
      question: "Why choose AI & ML at EME Academy?",
      answer:
        "No, you do not. We have designed our course to accommodate beginners as well. Experience is recommended, but not mandatory.",
    },
    {
      id: 4,
      question: "Who is eligible for the course?",
      answer:
        "All of our students get to work on simulations that mimic real-world cyberattacks to build their skills.",
    },
    {
      id: 5,
      question: "What are the job opportunities available after pursuing a course?",
      answer:
        "Absolutely! We offer full placement support with a network of hiring partners in top companies.",
    },
    {
      id: 6,
      question: "How flexible are training schedules at EME Academy?",
      answer:
        "Our training schedules are designed to be flexible, allowing students to balance learning with their existing commitments.",
    },
    {
      id: 7,
      question: "What makes the faculty at EME Academy qualified to teach AI & ML course?",
      answer:
        "Our faculty members are highly qualified professionals with extensive experience in AI & ML, ensuring top-quality mentorship and practical insights.",
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
    <main className="flex flex-col justify-start items-center w-full min-h-screen bg-[#070B23]">
      <AnotherHeader />
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100% ">
        <MLHero {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeyHighlight />
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
