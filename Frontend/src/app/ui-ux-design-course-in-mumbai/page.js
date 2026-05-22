import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import FeaturedIn from "@/components/common/FeaturedIn";
import PlacementSupport from "@/components/common/PlacementSupport";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import Awards from "@/components/common/Awards";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import InfiniteCall from "@/components/InfiniteCall";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";

import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Faqs from "@/components/common/Faqs";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

export const metadata = {
  title: "Best Web Design Course in Mumbai | UI UX Training",
  description:
    "Enroll in the Best Web Design Course in Mumbai. Learn UI/UX, Figma, HTML, CSS & get placement support.",
  keywords: [
    "Best Web Design Course in mumbai",
    "UI UX Design Course in mumbai",
    "Web Designing Institute in mumbai",
    "UI UX Course in mumbai",
    "Figma Course in mumbai",
    "Web Design Course for Beginners mumbai",
    "Responsive Web Design Course mumbai",
    "Frontend Development Course mumbai",
    "Web Design Course with Placement mumbai",
    "Web Design Course with Certificate mumbai",
    "HTML CSS Course mumbai",
    "Adobe XD Course mumbai",
    "Web Design Course for Freshers mumbai",
    "Freelance Web Designer Course mumbai",
    "Web Design Course Fees mumbai",
    "UI UX Design Course with Placement mumbai",
    "Web Design Course Online mumbai",
    "Bootstrap Course mumbai",
    "Web Design Course for Working Professionals",
    "Best UI UX Institute in mumbai"
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/ui-ux-design-course-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "I don't have an IT background and I can't code. Is this course right for me?",
    desc: "Absolutely. You do not need prior programming knowledge. Our Web Design Course for Beginners Mumbai is designed to take you from absolute scratch to a confident digital creator. We cover basic tech literacy first, making it the ultimate Web Design Course for Freshers Mumbai looking to break into the tech industry.",
  },
  {
    id: 2,
    title: "How exactly does your placement support guarantee work?",
    desc: "We don't just teach you how to code; we launch your tech career. Recognized as the Best UI UX Institute in Mumbai, our dedicated placement cell optimizes your technical resume, conducts live-coding mock interviews, and routes your Behance/GitHub portfolio to 50+ hiring tech agencies. This is a complete Web Design Course with Placement Mumbai and UI UX Design Course with Placement Mumbai.",
  },
  {
    id: 3,
    title: "What specific software, tools, and languages will I master?",
    desc: "You will learn the exact stack used by modern tech startups. The curriculum functions as an intensive Figma Course in Mumbai and Adobe XD Course Mumbai for prototyping, seamlessly integrated with a deep-dive HTML CSS Course Mumbai for structural coding.",
  },
  {
    id: 4,
    title: "Will I learn both the visual design and the actual coding part?",
    desc: "Yes. Great websites require both aesthetics and logic. This program combines the deep psychological principles of a UI UX Design Course in Mumbai with the structural execution of a high-level Frontend Development Course Mumbai, making you a highly versatile full-stack web designer.",
  },
  {
    id: 5,
    title: "Do you teach how to make websites work on mobile phones?",
    desc: "100%. Mobile-first design is no longer optional; it is mandatory. You will master fluid grids and media queries in our Responsive Web Design Course Mumbai, and learn to build lightning-fast mobile frameworks through our dedicated Bootstrap Course Mumbai.",
  },
  {
    id: 6,
    title: "Can I take this course if I want to work independently from home?",
    desc: "Yes. Many of our tech students prefer the freedom of remote work. We teach you how to package your web services, pitch to international clients, and build a high-ticket digital portfolio, making this the perfect Freelance Web Designer Course Mumbai.",
  },
  {
    id: 7,
    title: "I currently work a full-time job. Do you offer flexible batch timings?",
    desc: "We do. We specifically engineered our Web Design Course for Working Professionals to adapt to demanding corporate schedules. You can choose flexible weekend classroom batches or opt for our fully interactive Web Design Course Online Mumbai format so you can upskill without quitting your current role.",
  },
  {
    id: 8,
    title: "What is the cost of the program, and are there payment plans?",
    desc: "We believe elite tech education should be accessible to everyone. We maintain highly transparent Web Design Course Fees Mumbai, with the complete 6-month diploma priced at just ₹35,000 after our special discount. We also offer 0% No-Cost EMI options.",
  },
  {
    id: 9,
    title: "Will I get a recognized certificate after completing the training?",
    desc: "Yes. Upon graduation, you will receive a highly respected Web Design Course with Certificate Mumbai. Because EME Academy is MSME, ISO, and #startupindia certified, your credentials instantly validate your expertise to tech recruiters as a graduate of the Best Web Design Course in Mumbai.",
  },
  {
    id: 10,
    title: "Why is EME Academy considered the top web design institute?",
    desc: "Because we teach commercial execution, not just copy-paste tutorials. As the premier Web Designing Institute in Mumbai, we simulate a live tech agency environment. You manage real-world server uploads and client briefs in our UI UX Course in Mumbai, graduating with the exact practical skills that force top-tier tech companies to hire you.",
  },
];

export default function page() {
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
    title: "Architect the Digital World with the Best Web Design Course in Mumbai",
    description:
      "Train with the premier Web Designing Institute in Mumbai and master custom layouts, UI/UX prototyping on Figma, and responsive development. Graduate with an elite portfolio and get 100% placement support to secure high-paying tech roles up to ₹8 LPA.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
    ctaRatingsLabel: "Download Syllabus & Brochure →",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Explore Our Web Design Course in Mumbai",
    subtitle:
      "Master the architecture of the modern web through our comprehensive, agency-grade training program. Whether you are a creative looking for a structured Web Design Course for Beginners in Mumbai, or an IT professional leveling up your skills to break into high-end tech firms, this curriculum bridges the gap between visual aesthetics and flawless digital execution.",
    courseData: [
      {
        id: 1,
        title: "Advanced Web & UI/UX Design",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/webdesignCard.png",
        description:
          "Stop relying on basic tutorials and enroll in the premier UI UX Design Course in Mumbai. EME Academy transforms freshers and professionals into elite digital architects. Gain hands-on mastery over modern web technologies through an intensive Frontend Development Course Mumbai curriculum. You will execute pixel-perfect layouts via our HTML CSS Course Mumbai, build mobile-first frameworks in our Bootstrap Course Mumbai, and design stunning, user-centric prototypes through our integrated Adobe XD Course Mumbai. Build an undeniable portfolio and step into top tech studios with absolute confidence.",
        details: [
          {
            label: "Duration",
            value: "6 Months",
          },
          {
            label: "Transparent Web Design Course Fees Mumbai",
            value: (
              <>
                Affordable Fees at <span className="line-through text-[#FF0000]">₹45,000</span>{" "}
                ₹35,000 <span className="text-[#00A51E]">(after discount)</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Flexible Web Design Course Online Mumbai and immersive classroom sessions available.",
          },
          {
            label: "Languages",
            value: "English, Hindi",
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
      'Career Prospects & <span style="color: #0057E2;">High-Paying</span> <span style="color: #f97316;">Tech Roles</span>',
    subtitle:
      "After mastering your craft at EME Academy, you won't just be building standard pages—you will be architecting high-converting digital products. Whether you are launching your tech journey through our Web Design Course for Freshers Mumbai or upgrading your agency skills as an IT professional, graduating from the Best UI UX Institute in Mumbai equips you to dominate the digital landscape.",
    careerRoles: [
      "UI/UX Designer",
      "Frontend Developer",
      "Senior Web Designer",
      "Freelance Web Designer",
      "E-commerce Web Designer",
      "Graphic & Digital Marketing Designer",
    ],
    salaryInfo:
      "Average Salary in India: ₹3.5 LPA to ₹8 LPA (as per industry standard)",
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
        text: `"আমার কোনও ডিজাইন ব্যাকগ্রাউন্ড ছিল না, কিন্তু এই কোর্সে এমনভাবে শেখানো হয় যে এখন আমি পুরো একটা অ্যাপের UI ডিজাইন করে ফেলতে পারি! Thanks EME Academy Mumbai."`,
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
        text: `"I got placed as a UI/UX intern even before completing the course! EME’s placement support is genuine and their training is industry-relevant."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/UI_UX_Landing/UI_UX_Hero.webp')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>

      <div
        id="CourseCurriculum"
        className="flex w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>

      <div id="CourseTool" className="flex w-full justify-center bg-[#F4FBFE]">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>
      <div id="CourseProspects" className="flex w-full p-6">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>

      <div
        id="about"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <FeaturedIn {..._this} />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport
          {..._this}
          badge="Tech Career Excellence"
          title="100% Dedicated Placement Support to Launch Your UI/UX Career"
          customFeatures={[
            {
              id: 1,
              title: "Resume, LinkedIn & Behance",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft ATS-optimized resumes tailored for frontend and UI/UX roles.",
                "Strategic LinkedIn and Behance profile optimization for tech recruiters.",
                "Highlight your mastery of responsive layouts and interactive prototyping."
              ],
            },
            {
              id: 2,
              title: "Technical Design Aptitude",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily logic, wireframing challenges, and UI/UX audit practice.",
                "Full-length aptitude mock exams for top-tier IT and design firms.",
                "Speed and accuracy enhancement for competitive live-coding rounds."
              ],
            },
            {
              id: 3,
              title: "Technical Interview Mastery",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous mock interviews focusing on design rationale.",
                "Personalized whiteboard and live UI-challenge feedback.",
                "Real-world scenario prep for portfolio defense and client pitching."
              ],
            },
            {
              id: 4,
              title: "Expert Tech Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling with senior frontend developers and UI leads.",
                "Insider insights on the latest web architecture and design systems.",
                "Professional salary negotiation tactics to maximize your tech CTC."
              ],
            },
            {
              id: 5,
              title: "Elite Tech Hiring Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium tech startups, digital agencies, and IT partners.",
                "Exclusive access to our internal, unlisted developer job portal.",
                "Direct technical interview referrals to fast-track your onboarding."
              ],
            },
            {
              id: 6,
              title: "Live Portfolio Building",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop real-world capstone projects (Figma prototypes, Bootstrap sites).",
                "Guided, mentor-led resolution of complex UX flows and HTML/CSS bugs.",
                "Build an employer-ready digital showcase proving your web mastery."
              ],
            },
          ]}
        />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone!"}
        />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/WDWhyChooseEME.webp"
        />
      </div>
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert
          {..._this}
          title='Stop Guessing. Start Building. <span style="color: #FF7A00;">Talk to a Web & UI/UX Career Expert!</span>'
          description="Breaking into the Mumbai tech scene requires a strategic portfolio, not just basic coding tutorials. Connect with our veteran UI/UX advisors for a free 1-on-1 career mapping session."
          buttonText="Download Full Syllabus & Brochure →"
        />
      </div>

      <div id="testimonials" className="flex w-full  bg-white">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore
          {..._this}
          title="Ready to Architect the Modern Web?"
          description="Stop hesitating and start coding. Download our complete syllabus to explore our hands-on UI/UX and Frontend development modules."
          buttonText="Download Complete Tech Brochure"
        />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={faq} />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
