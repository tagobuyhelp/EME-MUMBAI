import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import PlacementSupport from "@/components/common/PlacementSupport";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import GDStudentPortfolio from "../maincourse/graphic-design-course-in-mumbai/GDStudentPortfolio";
import FeaturedIn from "@/components/common/FeaturedIn";
import GDStudentWork from "../maincourse/graphic-design-course-in-mumbai/GDStudentWork";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";

import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import CoursesHero from "@/components/global/CoursesHero";

export const metadata = {
  title: "Best Graphic Design Course in Mumbai | EME Academy",
  description:
    "Enroll in the best graphic design institute in Mumbai at EME Academy. Master Adobe Photoshop, Illustrator, InDesign, CorelDRAW, & Lightroom with 100% placement support.",
  keywords: [
    "Best Graphic Design Course in mumbai",
    "Graphic Design Institute in mumbai",
    "Graphic Design Training in mumbai",
    "Graphic Design Course with Placement mumbai",
    "Graphic Design Course for Beginners mumbai",
    "Photoshop Course in mumbai",
    "Illustrator Course in mumbai",
    "CorelDraw Course in mumbai",
    "Graphic Design Course with Certificate mumbai",
    "Graphic Design Course for Freshers mumbai",
    "Graphic Design Course Fees mumbai",
    "Freelance Graphic Design Course mumbai",
    "Logo Design Course mumbai",
    "Adobe InDesign Course mumbai",
    "Social Media Design Course mumbai",
    "Brand Identity Design Course mumbai",
    "Graphic Design Course Online mumbai",
    "Graphic Design Course for Working Professionals",
    "Best Graphic Design Institute western India",
    "UI UX and Graphic Design Course mumbai",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/best-graphic-design-course-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "I do not know how to design. Is this course right for me?",
    desc: "Yes! You do not need fine art or drawing skills to master commercial design. Our Graphic Design Course for Beginners in Mumbai starts from scratch. We teach you the software mechanics and visual principles step-by-step, making it the perfect Graphic Design Course for Freshers in Mumbai looking to launch a creative career.",
  },
  {
    id: 2,
    title: "How does your placement guarantee actually work?",
    desc: "We don't just teach you; we launch you. Recognized as the Best Graphic Design Institute in Western India, our Graphic Design Course with Placement Mumbai includes dedicated portfolio reviews, mock agency interviews, and direct routing of your Behance profile to our network of 50+ hiring studios and ad agencies until you land an offer.",
  },
  {
    id: 3,
    title: "What exact software and tools will I learn?",
    desc: "You will master the complete industry-standard Adobe Creative Cloud and beyond. Our intensive curriculum acts as a deep-dive Photoshop Course in Mumbai, an advanced vector-focused Illustrator Course in Mumbai, a layout-heavy Adobe InDesign Course Mumbai, and a print-ready CorelDraw Course in Mumbai.",
  },
  {
    id: 4,
    title: "Will I learn how to design logos, social media posts, and websites?",
    desc: "Absolutely. This program is an all-in-one commercial package. It serves as a comprehensive Logo Design Course Mumbai, an engaging Social Media Design Course Mumbai, and a strategic Brand Identity Design Course Mumbai. We also cover digital interfaces, creating a powerful foundation for our UI UX and Graphic Design Course Mumbai.",
  },
  {
    id: 5,
    title: "Can I take this course if I want to work as a freelancer?",
    desc: "100%. Many of our creative students prefer the freedom of independent work. We teach you how to package your services, pitch to corporate clients, and build a high-ticket commercial portfolio, making this the ultimate Freelance Graphic Design Course Mumbai.",
  },
  {
    id: 6,
    title: "I currently work a 9-to-5. Do you have flexible batch timings?",
    desc: "Yes. We engineered our Graphic Design Course for Working Professionals specifically to fit around busy corporate schedules. You can choose flexible weekend classroom batches or opt for our highly interactive Graphic Design Course Online Mumbai format to upskill seamlessly without quitting your job.",
  },
  {
    id: 7,
    title: "What is the cost of the course, and are there payment plans?",
    desc: "We believe elite creative education should be accessible. We maintain highly transparent Graphic Design Course Fees Mumbai, with the complete 6-month diploma priced at just ₹30,000 after our special discount. We also offer 0% No-Cost EMI options so you can focus on building your portfolio, not stressing over finances.",
  },
  {
    id: 8,
    title: "Will I get a recognized certificate after completing the training?",
    desc: "Yes. Upon graduation, you will receive a highly respected Graphic Design Course with Certificate Mumbai. Because EME Academy is MSME, ISO, and #startupindia certified, your credentials carry severe weight with art directors and agency recruiters.",
  },
  {
    id: 9,
    title: "Is this a practical course or just textbook theory?",
    desc: "We despise textbook theory. As the premier provider of Graphic Design Training in Mumbai, our classes operate exactly like a live creative agency. You will work on real client briefs, design actual marketing campaigns, and graduate with a deployable commercial portfolio.",
  },
  {
    id: 10,
    title: "Why is EME Academy considered the top design institute?",
    desc: "Because we teach commercial execution, not just software buttons. Recognized as the Best Graphic Design Course in Mumbai, your classes are led by active industry professionals. We don't just teach you how to make things look pretty; we teach you how to design visuals that sell, convert, and build massive brand value.",
  },
];

// Hero Data
const heroData = {
  badgeText: "Learn & Get Hired in 6 Months!",
  title: "Turn Your Creativity Into a Career with the Best Graphic Design Course in Mumbai",
  description:
    "Stop scrolling through great design and start creating it. Master Adobe Photoshop, Illustrator, InDesign, CorelDRAW, and Lightroom with EME Academy, the premier Graphic Design Institute in Mumbai. Build a high-paying creative career with hands-on, agency-level training and aggressive 100% placement support.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
  ctaRatingsLabel: "Download Syllabus & Brochure →",
};

// Course details data
const courseDetailsData = {
  courseName: "Graphic Design Training in Mumbai",
  subtitle:
    "Upgrade your skills from basic design to commercial visual mastery. Learn with EME Academy and become a highly-paid, certified visual communicator equipped with our aggressive, 100% placement support ecosystem!",
  courseData: [
    {
      id: 1,
      title: "Master Commercial Graphic Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCourseMain.png",
      description:
        "Transform your raw creativity into a lucrative asset with the Best Graphic Design Course in Mumbai. It is a full-stack design bootcamp. Gain hands-on, agency-level expertise through our dedicated Photoshop Course in Mumbai, vector-focused Illustrator Course in Mumbai, and print-ready CorelDraw Course in Mumbai. Whether you are looking for a foundational Graphic Design Course for Beginners Mumbai or mastering layouts in our Adobe InDesign Course Mumbai, this 6-month track ensures you build a stunning, undeniable portfolio for high-end studio work.",
      descriptionAlert:
        "Transform your raw creativity into a lucrative asset with the Best Graphic Design Course in Mumbai. It is a full-stack design bootcamp. Gain hands-on, agency-level expertise through our dedicated Photoshop Course in Mumbai, vector-focused Illustrator Course in Mumbai, and print-ready CorelDraw Course in Mumbai. Whether you are looking for a foundational Graphic Design Course for Beginners Mumbai or mastering layouts in our Adobe InDesign Course Mumbai, this 6-month track ensures you build a stunning, undeniable portfolio for high-end studio work.",
      details: [
        {
          label: "Duration",
          value: "6 Months",
        },
        {
          label: "Transparent Graphic Design Course Fees Mumbai",
          value: (
            <>
              Affordable Fees at <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
              ₹30,000 <span className="text-[#00A51E]">(Save ₹10,000/- Special Discount)</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Flexible Graphic Design Course Online Mumbai and immersive classroom sessions available.",
        },
        {
          label: "Languages",
          value: "English, Hindi",
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
            "Design custom icons, shapes, and complex layouts",
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
    'Future Career <span style="color: #0057E2;">Prospects</span> in <span style="color: #f97316;">Creative</span> Design',
  subtitle:
    "After mastering your craft at EME Academy, you won't just be pushing pixels—you will be shaping how the world sees top brands. Whether you are launching your creative journey through our Graphic Design Course for Freshers Mumbai or upgrading your agency skills as a professional, graduating from the Best Graphic Design Institute in Western India equips you to dominate both the digital and print media industries.",
  careerRoles: [
    "Senior Graphic Designer & Creative Executive",
    "UI/UX & Digital Experience Designer",
    "Brand Identity & Logo Designer",
    "Social Media & Digital Content Designer",
    "Freelance Illustrator & Commercial Artist",
    "Print Media & Packaging Designer",
  ],
  salaryInfo:
    "Average Salary in India: ₹5 - 8 LPA (As per industry standards.) Backed by a globally recognized Graphic Design Course with a Certificate in Mumbai, your earning potential is virtually limitless. Don't wait for the future—build it.",
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDCareerProspectsImage.png",
  buttonText: "Download Free Career Guide & Brochure",
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
      text: "Loved learning CorelDraw and Illustrator at EME Academy Mumbai. Got two freelancing projects before I even finished the course!",
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

const alumniStudentsMumbai = [
  {
    id: 1,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-1.png",
    title: "Sukanya Ghosh",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 2,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-2.png",
    title: "Nuruzzaman Mondal",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 3,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
    title: "Vaishnavi",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 4,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
    title: "Aniket Shome",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 5,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
    title: "Supratim Sen",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 6,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
    title: "Souvik Mondal",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 7,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
    title: "Koushik Mondal",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
];

export default function page() {
  const Courses = "Graphics Designing Course";
  const SelectCourses = ["Graphics Design Course", "Motion Graphics Course"];
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
      className="flex flex-col justify-start items-center w-full min-h-screen"
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDMaincourseHero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col  h-full  bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
          SelectCourses={SelectCourses || []}
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
        className="flex flex-col justify-center w-full   bg-gradient-to-r from-[#fff] from-0% to-white to-100% "
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
        <TalkToOurCareerExpert 
          {..._this} 
          buttonText="Download Full Syllabus & Brochure →" 
          title='Stop Guessing. <span style="color: #0057E2;">Start Designing.</span> Talk to a <span style="color: #f97316;">Creative</span> Career Expert!'
          description="Whether you are balancing a full-time job and needing a flexible Graphic Design Course for Working Professionals, or prefer a highly interactive Graphic Design Course Online Mumbai format, we will map out the exact blueprint to help you land your dream design role."
        />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport 
          {..._this} 
          mode="graphic-design"
          badge="Career Excellence"
          title="100% Dedicated Placement Support to Launch Your Agency Career"
          description="We don't just teach you how to design; we teach you how to get hired. As the premier Graphic Design Institute in Mumbai, our commitment to your success doesn't end with a certificate. When you enroll in our Graphic Design Course with Placement in Mumbai, you unlock an elite, career-building ecosystem designed to bypass the traditional HR queue."
          customFeatures={[
            {
              id: 1,
              title: "Resume & Behance Optimization",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft ATS-friendly professional resumes tailored for creative roles.",
                "Recruiter-focused LinkedIn, Behance, and Dribbble profile optimization.",
                "Strategic showcasing of your typography, branding, and UI layouts."
              ],
            },
            {
              id: 2,
              title: "Creative Aptitude & Brief Training",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily practice on decoding complex client briefs and design logic.",
                "Full-length mock tests for creative agency screening rounds.",
                "Speed and accuracy enhancement for tight, deadline-driven design tasks."
              ],
            },
            {
              id: 3,
              title: "Interview & Pitch Mastery",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous HR and technical design mock interviews.",
                "Personalized portfolio feedback from senior Art Directors.",
                "Real-world scenario prep for pitching and defending your design choices."
              ],
            },
            {
              id: 4,
              title: "Expert Career Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling tailored to your specific design niche.",
                "Insider insights on the latest visual trends and agency expectations.",
                "Professional salary negotiation tactics to maximize your income."
              ],
            },
            {
              id: 5,
              title: "Elite Hiring Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium design studios, ad agencies, and corporate partners.",
                "Exclusive access to our internal, unlisted creative job portal.",
                "Direct corporate interview referrals to fast-track your hiring."
              ],
            },
            {
              id: 6,
              title: "Live Portfolio Building",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop real-world, commercial capstone projects (Logos, UI, Print).",
                "Guided, mentor-led portfolio curation to highlight your best work.",
                "Build an employer-ready visual showcase proving your Adobe CC mastery."
              ],
            },
          ]}
        />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore 
          {..._this} 
          title="Need to know more?"
          description="Understand the in-depth curriculum and the course through the brochure"
          buttonText="Download Complete Brochure"
        />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
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
      <CoursesLandingFooter courseName="Graphics Designing Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
