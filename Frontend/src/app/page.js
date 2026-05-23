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
    "Western India's No 1 Training Institute in Mumbai | Job Oriented Training Institute",
  description:
    "EME Academy Mumbai is a leading Professional Training Institute in Mumbai offering job-oriented courses. Learn industry-relevant skills with expert trainers, practical projects, and dedicated placement support for career growth.",
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/",
  },
  openGraph: {
    title: "Western India's No 1 Training Institute in Mumbai",
    siteName: "EME Academy Mumbai",
    url: "https://mumbai.emeacademy.co.in",
    description: "EME Academy Mumbai is a leading Professional Training Institute in Mumbai offering job-oriented courses. Learn industry-relevant skills with expert trainers, practical projects, and dedicated placement support for career growth.",
    type: "website",
    images: [
      {
        url: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png",
      },
    ],
    locale: "en_IN",
  },
};
const faqs = [
  {
    id: 1,
    title: "1. What professional courses does EME Academy offer in Mumbai?",
    desc: "Also, industry-aligned courses for high employability (IB Global, n.d.). Our core programs include Data Analytics, SAP Training (FICO, MM, SD), Digital Marketing, Full Stack Web Development (MERN), HR Management, and Data Science."
  },
  {
    id: 2,
    title: "2. Do I need any technical background to enroll in your IT courses?",
    desc: "Not at all. Whether you are a commerce graduate, an arts student, or only looking for a career change, our curriculum is built from the ground up. Step-by-step, we take you from the basics to execution at a high, practical level."
  },
  {
    id: 3,
    title: "3. Will I receive an industry-recognized certificate after course completion?",
    desc: "Yes. EME Academy is a certified, award-winning placement institute recognized under MSME, ISO, and Startup India. In addition to EME Academy’s own certification, specific certifications help one become certified in world-recognized certifications like SAP, which multinational corporations actively seek."
  },
  {
    id: 4,
    title: "4. What is the course duration and fee structure?",
    desc: "Course lengths usually vary between 3 and 6 months, depending on the course's comprehensiveness. Fees vary by course and range from ₹20,000 to ₹40,000, and are offered with flexible and 0% EMI options so that learners can concentrate on learning, and not on financial troubles."
  },
  {
    id: 5,
    title: "5. Do you offer placement support for all courses?",
    desc: "Yes! Yes! 100% placement assistance is given in all the professional training programs. This includes resume building, mock interview preparations, and referrals to more than 50 hiring partners until a placement is made (Talent500, n.d.)."
  },
  {
    id: 6,
    title: "6. Can I get a demo class before joining?",
    desc: "For sure. We encourage it! We want you to feel how our pragmatic methodologies work and communicate with our skilled guides yourself. When it comes to it, just hit the ‘Book a Free Demo’ option on the site to get your session scheduled."
  },
  {
    id: 7,
    title: "7. What if I miss a class or need revision?",
    desc: "Not to worry! You will have access to class recordings, study material, and regular doubt-clearing sessions so that you never fall behind, no matter your schedule."
  },
  {
    id: 8,
    title: "8. I’m working full-time. Can I still join this course?",
    desc: "Yes, many of our students are working professionals. We have evening and weekend batches primarily tailored to fit your hectic work schedule, so you can upskill yourself."
  },
  {
    id: 9,
    title: "9. How does EME Academy ensure practical learning?",
    desc: "We ditch the heavy theory. Our training is focused on execution in the real world, including access to a live server, capstone projects that require active participation, and actual ad campaign creation. That portfolio will be your proof for employers."
  },
  {
    id: 10,
    title: "10. How can I enroll in a course at EME Academy?",
    desc: "Enrolling is easy. You can apply now, schedule a free demo, or get in touch with our Mumbai career counselors. We will help you with course selection and admissions, step-by-step."
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
    "Prompt Engineering with AI Course",
    "LinkedIn Course"
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
          badgeText="Authentic Success Stories. Zero Fluff."
          title={"Launching Careers Across "}
          titleHighlight={"Top Global MNCs"}
          subtitle={"750+ fresh graduates transitioned into the corporate world last year"}   
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
