import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import FeaturedIn from "@/components/common/FeaturedIn";
import LearningMethodology from "@/components/common/LearningMethodology";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import PlacementSupport from "@/components/common/PlacementSupport";

import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import Faqs from "@/components/common/Faqs";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

const faq = [
  {
    id: 1,
    title: "Is this course for beginners in Mumbai?",
    desc: "Yes! Our Web Designing Training Course in Mumbai is perfect for beginners. Whether you're a student, career switcher, or creative enthusiast, the course starts from scratch and builds up to advanced web design concepts.",
  },
  {
    id: 2,
    title:
      "What is the fee structure for EME Academy Mumbai’s Web Design Course in Mumbai?",
    desc: "The web design course fee in Mumbai at EME Academy Mumbai is structured to be affordable and flexible. The total course fee is ₹65,000, but with a limited-time discount, you can enroll for just ₹55,000. We also offer 0% interest EMI options, making it easier for students and working professionals to join one of the best web designing courses in Mumbai with placement support.",
  },
  {
    id: 3,
    title: "What tools and technologies will I learn in this course?",
    desc: "You'll master top design tools like Figma, Adobe Photoshop, Adobe XD, and Illustrator. This positions this as one of the best Adobe Figma training institutes in Mumbai. You’ll also learn HTML, CSS, JavaScript, and Bootstrap.",
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
    title: "What kind of real-time projects will I work on?",
    desc: "You’ll complete over 10+ portfolio projects, working on real-world scenarios like landing pages, e-commerce designs, mobile-responsive layouts, and interactive UI prototypes. This makes it one of the best web designing courses in Mumbai for practical learners.",
  },
  {
    id: 7,
    title: "Does the course include an internship or hands-on experience?",
    desc: "Yes! This is one of the few web designing courses in Mumbai with placement and internship support. You'll complete a 1-month internship on live client projects to strengthen your skills and portfolio.",
  },
  {
    id: 8,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 9,
    title: "Do I need coding knowledge before joining?",
    desc: "Not at all. Our UI/UX web design training institute in Mumbai offers beginner-friendly learning modules and step-by-step practical training, so no background is required.",
  },
  {
    id: 10,
    title: "How does EME Academy ensure practical learning?",
    desc: "Our curriculum includes live projects, capstone assignments and real-world problem-solving.",
  },
  {
    id: 11,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes. Our web designing training institute in Mumbai is built for working professionals who want to upskill without quitting their jobs.",
  },
  {
    id: 12,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 13,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

export const metadata = {
  title: "Best Web Design Course in Mumbai | UI/UX Training Institute",
  description: "Enroll in the best web design course in Mumbai at EME Academy Mumbai. Master UI/UX, Figma, HTML, CSS, and more with 100% placement assistance.",
  keywords: ["web design course in mumbai", "ui ux design course in mumbai", "best web design institute in mumbai"],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/ui-ux-landing",
  },
};

export default function page() {
  const items = [
    "Live Practical Classes",
    "10+ Portfolio Projects",
    "Global Certifications",
    "Interview Preparation",
    "Dedicated Placement Cell",
    "Free Study Materials",
    "Theory+Practical Examination",
    "1:1 Mentoring",
    "Recorded Sessions & Doubt Clearing",
  ];

  const Courses = "UI UX Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1j5BKuerbf9NBS9fH4pJEkOf8K-BN99jQ/view?usp=sharing";
  const BrochureName = "UI_UX_BROCHURE.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  // Hero data
  const heroData = {
    badgeText: "Certified Web Designer in Just 6 Months!",
    title: "Best Web Design Course in Mumbai",
    description:
      "Learn to create responsive layouts, UI/UX and interactive designs and earn up to ₹8 LPA! Become a certified web designer in just 6 months with EME Academy Mumbai’s professional web designing course, featuring Figma, Adobe Photoshop, HTML, CSS, and Bootstrap, complete with 100% placement assistance and hands-on projects.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Web Design Course",
    subtitle: (
      <>
        Master modern web design through our comprehensive training program.
        This course is ideal for beginners, creatives, freelancers, and
        professionals looking to break into the industry or level up their
        skills to
        <br />
        break into the industry or level up their skills.
      </>
    ),

    courseData: [
      {
        id: 1,
        title: "Web Design",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/webdesignCard.png",
        description:
          "Discover web designing courses in Mumbai for creative careers. EME Academy Mumbai trains freshers and professionals in UI/UX, design tools & modern web technologies.",

        details: [
          {
            label: "Duration",
            value: "6 Months",
          },
          {
            label: "Affordable Fees",
            value: (
              <>
                <span className="line-through text-[#FF0000]">₹65,000</span>{" "}
                ₹55,000 <span className="text-[#00A51E]">after discount</span>
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
          "Join the Leading Web Designing Training Institute in Mumbai!",
        topics: [
          {
            title: "Fundamentals of Web Design",
            points: [
              "Understand the core principles of visual hierarchy, typography, color theory, and layout design.",
              "Learn how to structure web pages with effective spacing, alignment, and design consistency.",
            ],
          },
          {
            title: "HTML5 & CSS3 Mastery",
            points: [
              "Build fully structured, responsive websites using semantic HTML5.",
              "Style layouts with CSS3 including Flexbox, Grid systems & transitions.",
              "Follow best practices for accessibility and browser compatibility.",
            ],
          },
          {
            title: "Responsive & Mobile-First Design",
            points: [
              "Design websites that adapt across mobile, tablet & desktop.",
              "Use media queries and adaptive UI/UX patterns for better experience.",
            ],
          },
          {
            title: "JavaScript for Web Interactivity",
            points: [
              "Learn the basics of adding dynamic features to websites.",
              "Use DOM manipulation, event handling & animations.",
            ],
          },
          {
            title: "UI/UX Design Principles",
            points: [
              "Understand user journey, usability & navigation flow.",
              "Create wireframes and user personas to refine designs.",
            ],
          },
          {
            title: "Design Tools & Prototyping (Figma, Adobe XD & Photoshop)",
            points: [
              "Master UI/UX design with industry-standard tools.",
              "Build prototypes, mockups & interactive components.",
              "Design pixel-perfect interfaces using vector tools & grids.",
            ],
          },
          {
            title: "SEO & Website Optimization",
            points: [
              "Optimize code with proper meta tags and alt attributes.",
              "Improve site performance with compression & minified CSS/JS.",
            ],
          },
          {
            title: "Bootstrap & Framework-Based Design",
            points: [
              "Create sleek, responsive layouts via Bootstrap grid system.",
              "Customize themes using utilities and variables.",
            ],
          },
          {
            title: "Website Hosting & Deployment",
            points: [
              "Learn domain, hosting & FTP basics.",
              "Publish websites using cPanel or third-party platforms.",
            ],
          },
          {
            title: "Portfolio Building & Real-World Projects",
            points: [
              "Work on 10+ professional projects such as UI systems & landing pages.",
              "Create a standout portfolio for job readiness or freelancing.",
            ],
          },
        ],
      },
    ],
  };

  // Tools data
  const toolsData = {
    title: "Tools & Technologies You'll Master with our",
    courseName: "Web Design Course",
    tools: [
      {
        name: "HTML5",
        icon: "/assets/images/Web_Development/icons/courses-tool/html5-icon.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Figma",
        icon: "/assets/images/UI_UX_Landing/figmaLogo.svg",
        color: "bg-purple-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "CSS3",
        icon: "/assets/images/Web_Development/icons/courses-tool/css3-icon.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Photoshop",
        icon: "/assets/images/UI_UX_Landing/photoshopLogo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Adobe XD",
        icon: "/assets/images/UI_UX_Landing/icons8-adobe-xd-96.png",
        color: "bg-pink-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Sass",
        icon: "/assets/images/UI_UX_Landing/sass-logo.png",
        color: "bg-pink-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Bootstrap",
        icon: "/assets/images/Web_Development/icons/courses-tool/bootstrap-icon.svg",
        color: "bg-purple-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "React Js",
        icon: "/assets/images/Web_Development/icons/courses-tool/react-icon.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "WordPress",
        icon: "/assets/images/Web_Development/icons/courses-tool/wordpress-icon.svg",
        color: "bg-slate-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "JavaScript",
        icon: "/assets/images/Web_Development/icons/courses-tool/javascript-icon.svg",
        color: "bg-yellow-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Live Hosting & Server",
        icon: "/assets/images/Web_Development/icons/courses-tool/LiveHostingServer-icon.svg",
        color: "bg-orange-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "PSD to HTML",
        icon: "/assets/images/Web_Development/icons/courses-tool/PSD2HTML-icon.svg",
        color: "bg-green-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
      {
        name: "Mobile Friendly Website",
        icon: "/assets/images/Web_Development/icons/courses-tool/MobileFriendlyWebsite.svg",
        color: "bg-teal-50",
        companyLogoWidth: 50,
        companyLogoHeight: 50,
      },
    ],
  };

  // Career prospects data
  const careerProspectsData = {
    title:
      'Career Prospects & <span class="text-[#f97316]">Future Opportunities</span>',
    subtitle:
      "After completing our Web Designing Training Course in Mumbai, you will explore the roles like:",
    careerRoles: [
      "Web Designer",
      "UI/UX Designer",
      "Frontend Developer",
      "Graphic & Web Designer",
      "E-commerce Web Designer",
      "Freelance Web Designer",
      "Digital Marketing Designer",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹3.5 LPA to ₹8 LPA</strong> (as per industry standard)',
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/UI_UX_Landing/CareerProspectsUI_UX.webp",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Rohan Mondal",
        rating: 5,
        text: `"By far the best UI/UX design course Mumbai has to offer! Got my first internship during the course."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Shreya Banerjee",
        rating: 5,
        text: `"The Figma and Adobe XD sessions were just incredible. Within 3 months, I landed my first freelance UI project! Definitely the best UI/UX design course in Mumbai!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Rishi Ghosh",
        rating: 5,
        text: `"EME Academy Mumbai taught me how to turn wireframes into real user journeys. The trainers are super experienced and guide you patiently through each design concept."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Poulami Mukherjee",
        rating: 5,
        text: `"আমি ভাবিনি UI/UX শেখা এত interesting হতে পারে। Figma শেখার পর আমি নিজের portfolio বানিয়ে ক্লায়েন্ট পেয়েছি! ধন্যবাদ EME Academy Mumbai."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Moinul Rahman",
        rating: 5,
        text: `"Before joining, I was confused between graphic and UI/UX design. This course cleared everything and helped me land a remote internship in just 5 months."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Arindam Mondal",
        rating: 5,
        text: `"User research, wireframing, prototyping—everything was covered step by step. I now work as a junior UX designer in a startup. Best decision ever!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Tina Singh",
        rating: 5,
        text: `"From sketching basic wireframes to building clickable prototypes on Figma, I learned it all at EME. The hands-on projects helped me build a solid portfolio."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Tuhina Ghosh",
        rating: 5,
        text: `"আমার কোনও ডিজাইন ব্যাকগ্রাউন্ড ছিল না, কিন্তু এই কোর্সে এমনভাবে শেখানো হয় যে এখন আমি পুরো একটা অ্যাপের UI ডিজাইন করে ফেলতে পারি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Aditya Mitra",
        rating: 5,
        text: `"This course didn't just teach me design tools—it taught me how to think like a designer. The feedback from mentors was so helpful."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Anshuman Dey",
        rating: 5,
        text: `"I got placed as a UI/UX intern even before completing the course! EME Academy Mumbai’s placement support is genuine and their training is industry-relevant."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  return (
    <main
      className={` flex flex-col justify-start items-center w-full min-h-screen`}
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/UI_UX_Landing/UI_UX_Hero.webp')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>

      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div
        id="CourseCurriculum"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>

      <div
        id="about"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <FeaturedIn {..._this} />
      </div>

      <div id="CourseTool" className="flex w-full justify-center bg-[#F4FBFE]">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>

      <div id="CourseProspects" className="flex w-full p-6">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <LearningMethodology
          {..._this}
          items={items}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/UI_UX_Landing/UI_UX_Learning_Methadology.webp"
        />
      </div>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges up to ₹40,000 per month"
          }
        />
      </div>

      <div id="testimonials" className="flex w-full  bg-white mt-4">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={faq} />
      </div>
      <CoursesLandingFooter courseName="Web Design Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
