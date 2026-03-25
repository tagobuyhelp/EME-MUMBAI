import { Hero } from "@/components/Home/Hero";
import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { alumniStudents } from "@/data/alumniStudentsData";

const PodcastHome = dynamic(() => import("@/components/common/PodcastHome"));
const EventAbout = dynamic(() => import("../components/common/EventAbout").then(mod => mod.EventAbout));
const Awards = dynamic(() => import("@/components/common/Awards"));
const Trustedby = dynamic(() => import("@/components/Home/Trustedby"));
const CareerPreparation = dynamic(() => import("@/components/Home/CareerPreparation"));
const PlacementPartners = dynamic(() => import("@/components/Home/PlacementPartners"));
const BoardOfAdvisor = dynamic(() => import("@/components/common/BoardOfAdvisor"));
const CoursesSection = dynamic(() => import("@/components/Home/CoursesSection"));
const PlacementSupport = dynamic(() => import("@/components/common/PlacementSupport"));
const StickyCTAButton = dynamic(() => import("./blogs/Components/stickyCTAButton"));
const AllLocation = dynamic(() => import("@/components/common/all-location"));
const FeaturedIn = dynamic(() => import("@/components/common/FeaturedIn"));
const FaqHome = dynamic(() => import("@/components/Home/FaqHome"));
const CertifiedStudent = dynamic(() => import("./recentplacements/CertifiedStudent"));
const NewsHomeLanding = dynamic(() => import("@/components/common/NewsHomeLanding").then(mod => mod.NewsHomeLanding));
const WhyEMEAcademy = dynamic(() => import("@/components/common/WhyEMEAcademy"));

export const metadata = {
  title:
    "Eastern India's No 1 Training Institute |  Kolkata's No.1 Job Oriented Training Institute - EME Academy",
  description:
    "We are job oriented training Institute. Best SAP Certification courses, advanced Digital Marketing, and hotel Management courses for career growth. Job-oriented & relevant courses in Kolkata at EME Academy.",
  alternates: {
    canonical: "https://emeacademy.co.in",
  },
};
const faqs = [
  {
    id: 1,
    title: "What professional courses does EME Academy offer in Kolkata?",
    desc: "We offer job-oriented IT training in Kolkata, including web development, web designing, data analytics, data science, and digital marketing courses, with expert guidance and placement support."
  },
  {
    id: 2,
    title: "Do I need any technical background to enroll in your IT courses?",
    desc: "No! All our programs including the data analyst course in Kolkata and UI/UX design course are beginner-friendly and perfect for students, freshers, or working professionals looking to upskill."
  },
  {
    id: 3,
    title: "Will I receive an industry-recognized certificate after course completion?",
    desc: "Absolutely! EME Academy provides globally valid certifications for all our programs, including the best web development course in Kolkata with placement and advanced digital marketing certification."
  },
  {
    id: 4,
    title: "What is the course duration and fee structure?",
    desc: "Our course durations range from 4 to 6 months, depending on the program."
  },
  {
    id: 5,
    title: "Do you offer placement support for all courses?",
    desc: "Yes! We are known as the best institute for digital marketing and web development in Kolkata with placement. Our support includes resume building, interview prep, job referrals, and mock interviews."
  },
  {
    id: 6,
    title: "Can I get a demo class before joining?",
    desc: "Of course! We offer a free demo session so you can experience our professional web design, data analytics, or digital marketing course before enrolling."
  },
  {
    id: 7,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning"
  },
  {
    id: 8,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes. Our data analytics training institute in Kolkata is built for working professionals who want to upskill without quitting their jobs."
  },
  {
    id: 9,
    title: "How does EME Academy ensure practical learning?",
    desc: "Our curriculum includes live projects, capstone assignments and real-world problem-solving."
  },
  {
    id: 10,
    title: "How can I enroll in a course at EME Academy?",
    desc: "To enroll, contact us at 9093926145/9831284098 or email at info@emeacademy.co.in. You can also register online through our website."
  },
]


export default function Home() {
  const Courses = "All Course";
  const email_sender = "ALL";
  const SelectCourses = [
    "Data Analytics Course",
    "Sap Course",
    "Digital Marketing Course",
    "HR Management Course",
    "Web Development Course",
    "Data Science Course",
    "Graphics Designing Course",
    "Cyber Security Course",
    "UI UX Course",
    "Animation & VFX Course",
    "Cloud Computing Course",
    "Prompt Engineering with AI Course"
  ];
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";  //needed
  const BrochureName = "EME-brochure-2024.pdf";
  
  const _this = {
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };
  
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <AnotherHeader />

      <div className="w-full  bg-gradient-to-r from-[#CAE5FF] from-20% to-[#FFF] to-100% lg:to-60%  ">
        <Hero />
      </div>

      <div className="flex w-full bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-size-[90px_50px] 2xl:bg-size-[100px_80px]">
        <PlacementPartners />
      </div>

      <div className="flex w-full bg-[#FFFFFF]">
        <CoursesSection />
      </div>

      <div className="flex justify-center items-center w-full h-auto m-auto">
        <Trustedby />
      </div>

      <div className="flex w-full bg-[#F4FBFE] bg-[url('/assets/images/Home/background1.png')] bg-fit bg-top md:bg-right bg-no-repeat">
        <CareerPreparation />
      </div>
      <div className="flex w-full bg-[#FFFFFF]">
        <FeaturedIn 
        Courses={Courses}
        email_sender={email_sender}
        SelectCourses={SelectCourses}
        Brochure={Brochure}
        BrochureName={BrochureName}
        />
      </div>
      
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent  {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone!"}   
        />
      </div>

      <div className="flex w-full justify-center items-center bg-[#ffffff] md:p-6">
        <WhyEMEAcademy />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>
      <div className="flex w-full bg-[#ffffff]">
        <BoardOfAdvisor />
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-[#F4FBFE] pb-4">
        <NewsHomeLanding {..._this} />  
      </div>
      <div className="w-full py-5">
        <Awards />
      </div>
     
      <div className="flex w-full  bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-size-[90px_50px] 2xl:bg-size-[100px_80px] py-8">
        <PodcastHome />
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
      <div className="flex w-full bg-[url('/assets/images/Home/background2.png')] bg-fit bg-left bg-no-repeat">
        <FaqHome faqs={faqs} />
      </div>
      <section className="pb-10 w-full">
        <AllLocation />
      </section>
      <div className=" w-full h-full bg-gradient-to-r from-[#CAE5FF] from-20% to-[#FFF] to-100% lg:to-60%"></div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
