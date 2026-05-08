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
  title: "Best Graphic Design courses and Training Institute in Mumbai",
  description:
    "Enroll in the best graphic design institute in Mumbai and master creativity with the best graphic design courses in Mumbai. Start your design journey today!",
  keywords: [
    "graphic design courses in Mumbai",
    "graphic design courses in Mumbai fees",
    "graphic design institutes in Mumbai",
    "graphic design courses fees in Mumbai",
    "best graphic design institute in Mumbai",
    "best graphic design courses in Mumbai",
    "best institute for graphic designing in Mumbai",
    "graphic design training institute in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/maincourse/graphic-design",
  },
};

const faq = [
  {
    id: 1,
    title: "Is this course for beginners in Mumbai?",
    desc: "Yes! Our Graphic Design Course in Mumbai is perfect for beginners. Whether you're a student, career switcher, or creative enthusiast, the course starts from scratch.",
  },
  {
    id: 2,
    title: "What is the duration and fee of the graphic design course?",
    desc: "The course is 6 months long (including internship). The graphic design course fees in Mumbai at EME Academy Mumbai is ₹35,000 after discount.",
  },
  {
    id: 3,
    title: "Will I learn all the Adobe tools in this course?",
    desc: "Yes, we cover Adobe Photoshop, Illustrator, InDesign, and Lightroom in detail, along with CorelDraw.",
  },
  {
    id: 4,
    title: "Do I get placement support after completing the course?",
    desc: "Absolutely. We offer 100% placement assistance including job referrals, direct interview calls, resume building, and mock interviews.",
  },
  {
    id: 5,
    title: "What kind of certification will I receive?",
    desc: "After successful completion, you will receive a globally recognized certification from EME Academy Mumbai.",
  },
  {
    id: 6,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 7,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes.",
  },
  {
    id: 8,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 9,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 9093926145/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

// Hero Data
const heroData = {
  badgeText: "Learn & Get Hired in 6 Months!",
  title:
    "Best Graphic Design Course in Mumbai- Master Photoshop, Illustrator, CoreIDRAW & More",
  description:
    "Learn with EME Academy Mumbai, the best graphic design institute in Mumbai, and gain hands-on expertise in CorelDraw, Adobe Photoshop, Illustrator, InDesign, and Lightroom. Whether you dream of working in top design studios or want to earn from lucrative freelance projects, our graphic design training institute in Mumbai gives you the right skills to build a thriving career in creative design.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Course details data
const courseDetailsData = {
  courseName: "Graphic Design Course",
  subtitle:
    "Learn with EME Academy Mumbai and become a certified Graphic Designer with placement support!",
  courseData: [
    {
      id: 1,
      title: "Graphic Design Course Details",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCourseMain.png",
      description:
        "Get certified with the best graphic design course in Mumbai. Gain hands-on expertise in CorelDraw, Adobe Photoshop, Illustrator, InDesign, and Lightroom, and build a strong portfolio for freelance or studio work.",
      details: [
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
              ₹30,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Online and classroom sessions are available.",
        },
        {
          label: "Languages",
          value: "Bengali, English & Hindi",
        },
      ],
      hookLine:
        "Become job-ready with the best institute for graphic designing in Mumbai with placement support!",
      topics: [
        {
          title: "Design Principles & Typography",
          points: [
            "Fundamentals of design, color theory, and layout techniques",
            "Font pairing, spacing, alignment, and visual balance",
          ],
        },
        {
          title: "CorelDRAW Mastery",
          points: [
            "Vector illustration and logo creation",
            "Write SQL queries for data extraction and reporting",
          ],
        },
        {
          title: "Adobe Photoshop",
          points: [
            "Image retouching, photo manipulation, and compositing",
            "Social media creatives, poster design, and mockups",
          ],
        },
        {
          title: "Adobe Illustrator",
          points: [
            "Vector graphics, logo design, and brand identity",
            "Icons, infographics, and scalable visuals",
          ],
        },
        {
          title: "Adobe InDesign",
          points: [
            "Magazine, eBook, and brochure layouts",
            "Print production & publishing workflow",
          ],
        },
        {
          title: "Adobe Lightroom",
          points: [
            "Color grading, tone correction, and image enhancement",
            "Portfolio-ready photo editing and visual storytelling",
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
    'Future Prospects of this <span class="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing EME Academy Mumbai’s graphic design course in Mumbai, you&apos;ll be equipped to take up roles in both print and digital media across diverse industries:",
  careerRoles: [
    "Graphic Designer",
    "UI/UX Designer",
    "Logo Designer",
    "Creative Executive",
    "Freelance Illustrator",
    "Print Media Designer",
    "Book Cover Illustrator",
  ],
  salaryInfo:
    'Average Salary in India: <strong class="font-bold">₹5 - 8 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCareerProspectsImage.png",
  buttonText: "Check Eligibility",
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
        <PlacementSupport {..._this} />
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
      <div className="w-full bg-[#F4FBFE]">
        <Faqs faqs={faq} />
      </div>
      <Footer />
      <StickyCTAButton Courses="Graphics Designing Course" />
    </main>
  );
}
