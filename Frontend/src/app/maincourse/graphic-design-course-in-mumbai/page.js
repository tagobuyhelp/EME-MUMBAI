import FeaturedIn from "@/components/common/FeaturedIn";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import Awards from "@/components/common/Awards";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import GDStudentWork from "./GDStudentWork";
import GDStudentPortfolio from "./GDStudentPortfolio";
import Faqs from "@/components/common/Faqs";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import CoursesTestimonials from "@/components/common/CoursesTestimonials";
import CoursesHero from "@/components/global/CoursesHero";
import CertifiedStudent from "@/app/recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";

export const metadata = {
  title:
    "Best Graphic Design Course in Mumbai | Adobe & UI Training",
  description:
    "Enroll in the Best Graphic Design Course in Mumbai. Learn Photoshop, Illustrator, Figma & build a creative portfolio.",
  keywords: [
    "best graphic design course in Mumbai",
    "graphic design institute in Mumbai",
    "graphic design course with placement in Mumbai",
    "advanced graphic design course in Mumbai",
    "Photoshop course in Mumbai",
    "Illustrator course in Mumbai",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/maincourse/graphic-design-course-in-mumbai",
  },
};

const faq = [
  {
    id: "1",
    title: "I can't even draw a straight line. Can I still become a designer?",
    desc: "100%. Modern graphic design is about visual problem solving and logic, not just hand-drawing. Our Graphic Design Course for Beginners Mumbai starts with the absolute basics of design software and theory, assuming you have zero prior experience, making it the perfect Graphic Design Course for Freshers Mumbai.",
  },
  {
    id: "2",
    title: "Will I learn the entire Adobe Creative Cloud?",
    desc: "We focus on the tools that actually get you hired. You will master the industry-standard 'Big Three'—Photoshop, Illustrator, and InDesign—through our comprehensive Adobe Suite Course Mumbai. We also include CorelDRAW Course in Mumbai modules to ensure you are ready for both digital and print production agencies.",
  },
  {
    id: "3",
    title: "How do you help me get a job in a design studio?",
    desc: "Your portfolio is your passport. As the provider of the most Practical Graphic Design Course with Placement in Mumbai, we don't just teach tools; we help you build a professional-grade portfolio of real-world client projects. Our placement cell then routes your work directly to our network of 50+ premium design agencies.",
  },
  {
    id: "4",
    title: "I am a working professional. Are there flexible timings?",
    desc: "Yes. We specifically designed our Graphic Design Course for Working Professionals Mumbai to slot around office hours. With highly adaptable weekend batches and evening sessions, you can transition into a creative career without leaving your current job.",
  },
  {
    id: "5",
    title: "Do I need a high-end computer to start?",
    desc: "While a decent laptop helps, our Mumbai campus is equipped with agency-level infrastructure and high-performance workstations. You have full access to our labs for practice, making this the most accessible Graphic Design Training Institute in Mumbai.",
  },
  {
    id: "6",
    title: "What is the difference between Graphic Design and UI/UX?",
    desc: "Graphic design focuses on visual communication (branding, ads, layout), while UI/UX focuses on digital product experience. Our program provides a solid foundation in visual design that serves as the perfect springboard into our specialized UI UX Design Course in Mumbai.",
  },
  {
    id: "7",
    title: "Will I receive a recognized certificate?",
    desc: "Yes. Upon graduation, you will receive a prestigious Graphic Design Course with Certificate Mumbai from EME Academy. This credential, backed by our ISO and MSME certifications, carries significant weight in the corporate and agency hiring world.",
  },
  {
    id: "8",
    title: "Can I earn money as a freelancer after this course?",
    desc: "Definitely. We include dedicated modules on the business of design, teaching you how to find clients and price your work. This is widely considered the best Portfolio Design Course Mumbai for students looking to dominate the freelance market.",
  },
  {
    id: "9",
    title: "What are the course fees, and is there an EMI option?",
    desc: "We maintain highly transparent and competitive Graphic Design Course Fees Mumbai, with packages starting at ₹25,000 after discounts. We also provide zero-interest, No-Cost EMI options so you can focus on your creativity instead of financial stress.",
  },
  {
    id: "10",
    title: "What makes EME Academy the best institute for design?",
    desc: "We are an agency first and an academy second. You don't learn from academic professors; you learn from active Art Directors and senior designers. As the Best Graphic Design Institute in Western India, we focus entirely on the execution skills and portfolio-building that recruiters actually care about.",
  },
];

// Hero Data
const heroData = {
  badgeText: "Turn Your Creativity into a Career in 6 Months!",
  title: "Dominate Visual Communication with the Best Graphic Design Course in Mumbai",
  description:
    "Stop just making \"pretty pictures\" and start designing for impact. Upskill with EME Academy’s Professional Graphic Design Course in Mumbai. Master Photoshop, Illustrator, InDesign, and CorelDRAW through a curriculum built strictly around agency-level execution and commercial design principles. We offer the most reliable Graphic Design Course with Placement in Mumbai. Step out of the classroom, build a high-caliber portfolio of real-world projects, and unlock creative roles earning up to ₹8 LPA!",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Course details data
const courseDetailsData = {
  courseName: "Graphic Design Course",
  subtitle: "Choose Your Focus: Specialized Graphic & Visual Design Courses in Mumbai",
  description: "Don't just learn to use software. Learn the exact design theory, typography rules, and visual psychology used by global brand agencies. Whether you want to master print media or design for the digital-first era, we have the ultimate blueprint.",
  courseData: [
    {
      id: 1,
      title: "Advanced Graphic Design (Print & Branding)",
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCourseMain.png",
      description: "Master the fundamentals of color theory, typography, and layout through high-intensity branding projects. This track serves as a complete Adobe Illustrator Course in Mumbai and Adobe Photoshop Course in Mumbai.",
      details: [
        {
          label: "Duration",
          value: "4 months",
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹35,000</span> ₹25,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Online and classroom sessions are available.",
        },
      ],
      hookLine: "Master Visual Identity & Print Media Architecture.",
      topics: [
        {
          title: "Design Principles & Typography",
          points: [
            "Fundamentals of design, color theory, and layout techniques",
            "Font pairing, spacing, alignment, and visual balance",
          ],
        },
        {
          title: "Adobe Illustrator & Photoshop",
          points: [
            "Vector graphics, logo design, and brand identity",
            "Image retouching, photo manipulation, and compositing",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Master Creative Suite (Social Media & UX)",
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCourseMain.png",
      description: "Learn to design for the digital-first era, mastering social media aesthetics, UI foundations, and complex multi-page layouts, including advanced InDesign Course in Mumbai and CorelDRAW Course in Mumbai.",
      details: [
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹40,000</span> ₹30,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Online and classroom sessions are available.",
        },
      ],
      hookLine: "Premier Adobe Suite & Portfolio Design Course.",
      topics: [
        {
          title: "Adobe InDesign & CorelDRAW",
          points: [
            "Magazine, eBook, and brochure layouts",
            "Print production & publishing workflow",
          ],
        },
        {
          title: "Branding & Portfolio Design",
          points: [
            "Creating cohesive brand visuals and style guides",
            "Design your professional portfolio under expert feedback",
          ],
        },
      ],
    },
  ],
};

// Tools & Technologies
const courseCurriculumData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "Graphic Design Course",
  tools: [
    {
      name: "Canva",
      icon: "/assets/images/Graphic_Designing/icons/canva-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 29,
    },
    {
      name: "Photoshop",
      icon: "/assets/images/Graphic_Designing/icons/photoshop-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 129,
      companyLogoHeight: 36,
    },
    {
      name: "Illustrator",
      icon: "/assets/images/Graphic_Designing/icons/Illustrator-logo.svg",
      color: "bg-green-50",
      companyLogoWidth: 135,
      companyLogoHeight: 30,
    },
    {
      name: "Adobe Express",
      icon: "/assets/images/Graphic_Designing/icons/adobe-express-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 71,
      companyLogoHeight: 57,
    },
    {
      name: "Corel Draw",
      icon: "/assets/images/Graphic_Designing/icons/corel-draw-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 86,
      companyLogoHeight: 64,
    },
    {
      name: "Figma",
      icon: "/assets/images/Graphic_Designing/icons/figma-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 74,
      companyLogoHeight: 70,
    },
  ],
};

// Career Prospects
const careerProspectsData = {
  title:
    'High-Paying Creative Roles <span class="text-[#f97316]">You Will Dominate</span>',
  subtitle:
    "Design studios aren't looking for average software operators; graduating from the premier Graphic Design Institute in Mumbai unlocks the doors to the most lucrative creative roles.",
  careerRoles: [
    "Brand Identity Designer",
    "UI & Visual Interface Designer",
    "Editorial & Layout Artist",
    "Social Media Content Creator",
    "Packaging & Print Specialist",
    "Freelance Creative Consultant",
  ],
  salaryInfo:
    "Average Salary in India: ₹5 - 8 LPA (As per industry standards.) Backed by a recognized Graphic Design Course with Certificate Mumbai, your creative potential is virtually limitless.",
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCareerProspectsImage.png",
  buttonText: "Download Career Guide",
};

// Testimonials
const testimonialsData = {
  title: "Students",
  titleHighlight: "Testimonials",
  testimonials: [
    {
      id: 1,
      name: "Ritika Mondal",
      text: "The trainers at EME Academy Mumbai are truly experts. I had no idea Photoshop could be this fun and powerful! This is the best graphic design course in Mumbai!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ritwika Roy",
      text: "Loved learning CorelDraw and Illustrator at EME. Got two freelancing projects before I even finished the course!",
      rating: 5,
    },
    {
      id: 3,
      name: "Deblina Saha",
      text: "I designed my first book cover and brochure within just 2 months of joining. Amazing experience",
      rating: 5,
    },
    {
      id: 4,
      name: "Priyanka Bar",
      text: "Graphic design শেখার ইচ্ছা অনেকদিনের ছিল। EME Academy Mumbai-র expert instructors আর practical classes আমাকে আজ independent designer বানিয়েছে।",
      rating: 5,
    },
    {
      id: 5,
      name: "Animesh Das",
      text: "From zero experience to earning ₹15,000 per month through freelance logo design! This is truly the best institute for graphic designing in Mumbai",
      rating: 5,
    },
    {
      id: 6,
      name: "Sayani Sarkar",
      text: "This course not only taught me design tools but also how to create real client-ready portfolios. I’ve now completed 3 paid projects!",
      rating: 5,
    },
    {
      id: 7,
      name: "Mehendi Singh",
      text: "আমি ভেবেছিলাম graphic design শেখা কঠিন হবে, কিন্তু এখানে প্রতিটি টপিক খুব সহজভাবে শেখানো হয়। Photoshop আর Illustrator এখন আমার কাছে খেলনা মনে হয়।",
      rating: 5,
    },
    {
      id: 8,
      name: "Sandeep Ghosh",
      text: "Thanks to EME Academy Mumbai’s graphic design institute in Mumbai, I cracked my first job as a junior designer within a week of completing the course!",
      rating: 5,
    },
    {
      id: 9,
      name: "Simran Kaur",
      text: "EME Academy Mumbai offers the best graphic design courses in Mumbai. Their hands-on Adobe InDesign training helped me land a part-time job at a local print agency!",
      rating: 5,
    },
    {
      id: 10,
      name: "Ananya Pal",
      text: "If you're looking for the best graphic design training institute in Mumbai with placement, this is it! The trainers, the tools, the mentorship, everything’s perfect.",
      rating: 5,
    },
  ],
};

export default function page() {
  const Courses = "Graphics Designing Course";
  const SelectCourses = 
  [
    "Graphics Designing Course",
    "Motion Graphics Course,"
  ]
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
  const BrochureName = "graphic_design_brochure.pdf";
  const _this = {
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main
      className={`flex flex-col justify-start items-center w-full min-h-screen`}
    >
      <AnotherHeader />

      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full  bg-[#F4FBFE] bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDMaincourseHero.png')] xs:h-[460px] md:h-[520px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div id="CourseCurriculum" className="flex w-full  bg-white">
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>
      <div id="CourseTool" className="flex w-full  bg-[#F4FBFE] mt-6">
        <CoursesCurriculum {...courseCurriculumData} {..._this} />
      </div>
      <div
        id="Studentwork"
        className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% "
      >
        <GDStudentWork />
      </div>
      <div id="CourseProspects" className="flex w-full bg-[#F4FBFE] mt-6">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="about" className="flex w-full  bg-[#F4FBFE] mt-6">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div
        id="Portfolio"
        className="flex flex-col justify-center w-full bg-[#F4FBFE] mt-6 pb-8"
      >
        <GDStudentPortfolio />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDWhyChoose.png"
        />
      </div>{" "}
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} mode="graphic-design" />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹40,000 to ₹70,000 per month"
          }
        />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>
      <div id="testimonials" className="flex w-full">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div className="w-full bg-gradient-to-r bg-[#F4FBFE] mt-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-8">
          {/* GD Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              The EME Advantage: Why We Are the Best Graphic Design Institute in Western India
            </h2>
            <p>
              Breaking into the creative ecosystem requires more than just knowing software shortcuts. You need hands-on exposure, agency-level mentorship, and aggressive industry backing. Here is exactly why ambitious designers choose EME Academy for the most High-ROI Graphic Design Course in Mumbai.
            </p>
            <p>
              <strong>Mentorship from Active Art Directors -</strong> We skip the academic lectures. Your training is led by industry veterans who bring real-world design projects, global brand experience, and insider agency knowledge straight into the classroom.
            </p>
            <p>
              <strong>Execution-First, Portfolio Training -</strong> Say goodbye to theoretical fluff. We focus entirely on live corporate case studies and actual commercial design projects. You will acquire the tangible, hands-on execution skills that prove to employers you are workforce-ready from day one.
            </p>
            <p>
              <strong>Unrivaled Placement Assistance -</strong> As the leading provider of a Graphic Design Course with Placement Mumbai relies on, we don't just train you—we launch you. Our dedicated placement cell aggressively leverages our vast corporate network to land you high-paying roles in prestigious studios.
            </p>
          </section>

          {/* Recognized Section */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              Recognized by Experts, Proven by Results
            </h2>
            <p>
              Excellence That Speaks for Itself. Celebrated nationwide for educational excellence, EME Academy was crowned as the <strong>Best Placement Institute of the Year – 2024</strong> (Leadership Award presented by India News Business & NewsX). Graduate from the Best Graphic Design Institute in Mumbai and join an elite league of creative professionals.
            </p>
          </section>

          <Faqs faqs={faq} />
        </div>
      </div>
      <Footer />
      <StickyCTAButton Courses="Graphics Designing Course" />
    </main>
  );
}
