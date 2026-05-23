import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import PlacementSupport from "@/components/common/PlacementSupport";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import CTAButton from "../../components/common/CtaButton";

export const metadata = {
  title: "Best MEAN Stack Course in Mumbai | Full Stack Developer Training",
  description:
    "Join the best MEAN Stack Course in Mumbai and become a certified full stack developer. Learn Angular, Node.js, Express.js, MongoDB, REST APIs, and live projects with expert mentorship and 100% placement support.",
  keywords: ["mean stack course in mumbai", "full stack development training in mumbai", "best mean stack institute in mumbai"],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/best-mean-stack-training-course-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "Is this MEAN Stack course suitable for beginners in Mumbai?",
    decs: "Yes, absolutely. This course is beginner-friendly and starts from the fundamentals of front-end and back-end development before moving into full-stack projects and advanced deployment techniques.",
  },
  {
    id: 2,
    title: "Will I get a certificate after completing the MEAN Stack course?",
    decs: " Definitely. You will receive an industry-recognized MEAN Stack Developer Certification from EME Academy Mumbai, which is highly valued by IT companies and recruiters across India.",
  },
  {
    id: 3,
    title: "What technologies and tools will I learn in this course?",
    decs: "The full MEAN Stack Development Course in Mumbai is 6 months. The regular fee is ₹50,000, but currently offered at a discounted rate of ₹40,000. EMI options with 0% interest are available. You will master tools like HTML5, CSS3, JavaScript, Angular, TypeScript, Node.js, Express.js, MongoDB, Postman, JWT, GitHub, MongoDB Atlas, and more—covering everything from front-end UI to secure backend APIs.",
  },
  {
    id: 4,
    title: "Do you provide 100% placement support after the course?",
    decs: " Yes! We offer 100% placement assistance, including resume building, mock interviews, LinkedIn optimization, job portal access, direct referrals, and real-time interview preparation.",
  },
  {
    id: 5,
    title: "Can I attend a demo class before enrolling?",
    decs: "Of course! You can book a free demo class to experience our teaching style, course content, and interact with mentors before enrolling.",
  },
  {
    id: 6,
    title: "Will this MEAN Stack course help me with freelance projects?",
    decs: "Yes. Many of our learners work as freelance full-stack developers after completing this course. We focus on real-world project development that you can showcase to clients on GitHub or your portfolio.",
  },
  {
    id: 7,
    title: "Do I need a coding background to join this course?",
    decs: "No prior coding experience is required. Our structured training starts from the basics and gradually builds your skills in full-stack web development, even if you’re from a non-tech background.",
  },
  {
    id: 8,
    title: "Can working professionals join this MEAN Stack course?",
    decs: "Yes. We offer flexible batch timings—weekday, weekend, and evening classes—to accommodate college students and full-time working professionals.",
  },
  {
    id: 9,
    title: "What happens if I miss a class or need revision?",
    decs: "All sessions are recorded and shared with you for lifetime access. You can also attend doubt-clearing sessions and connect with mentors during live support hours.",
  },
  {
    id: 10,
    title: "How can I enroll?",
    decs: "To enroll, contact us at 9093926145/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
  {
    id: 11,
    title:
      "What is the duration and fee structure of the MEAN Stack course in Mumbai?",
    decs: "The full MEAN Stack Development Course in Mumbai is 6 months. The regular fee is ₹50,000, but currently offered at a discounted rate of ₹40,000. EMI options with 0% interest are available.",
  },
];

const heroData = {
  badgeText: "Become a Certified MEAN Stack Developer in Just 6 Months!",
  title: "Best MEAN Stack Training Course in Mumbai – 100% Job-Ready Program",
  description:
    "Join EME Academy Mumbai’s MEAN Stack Course in Mumbai with 100% Placement Support. Learn Angular, Node.js, Express.js & MongoDB through live projects, expert mentorship, and industry-backed curriculum. Earn your MEAN Stack Developer Certification and launch a high-growth tech career.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

const courseDetailsData = {
  courseName: "MEAN Stack Course",
  subtitle:
    "Become a certified MEAN Stack Developer with EME Academy Mumbai’s 100% Job-Ready Training Program in Mumbai. Learn Angular, Node.js, Express.js & MongoDB with live projects, expert mentorship, and placement support.",
  courseData: [
    {
      id: 1,
      title: "Professional Diploma in MEAN Stack Development",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mean_Stack_Landing/MeanStackCourseDetailsLanding.png",
      description:
        "Master the complete MEAN (MongoDB, Express.js, Angular, Node.js) Stack and become a full-stack developer ready for modern web applications. This course focuses on real-world projects, deployment, and building a strong career foundation in backend and frontend development.",
      details: [
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹50,000</span>{" "}
              ₹40,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Online and classroom sessions are available.",
        },
        {
          label: "Languages",
          value: "English & Hindi",
        },
      ],
      hookLine: "Learn from the Best MEAN Stack Training Institute in Mumbai!",
      topics: [
        {
          title: "Front-End Development with Angular",
          points: [
            "Introduction to Angular and Single Page Applications (SPAs)",
            "Setting up Angular CLI and project structure",
            "TypeScript fundamentals for Angular",
            "Components, templates, and lifecycle hooks",
            "Data binding: one-way and two-way",
            "Creating and using Angular services",
            "Implementing built-in and custom pipes",
            "Using structural and attribute directives (ngIf, ngFor, ngClass, ngStyle)",
            "Form handling (template-driven and reactive forms)",
            "Routing and navigation (lazy loading, route guards)",
            "HTTP client module for API communication",
            "Consuming REST APIs and handling observables",
            "Modular architecture and feature modules",
            "Project: Build a dynamic multi-page frontend using Angular",
          ],
        },
        {
          title: "Back-End Development with Node.js & Express.js",
          points: [
            "Introduction to Node.js environment and npm",
            "Asynchronous JavaScript with callbacks, promises, and async/await",
            "Building an Express.js server from scratch",
            "Creating RESTful APIs and understanding HTTP methods",
            "Setting up routing and middleware functions",
            "Data validation using Joi or custom middleware",
            "Authentication and authorization with JWT (JSON Web Tokens)",
            "Password encryption with bcrypt",
            "Error handling and logging strategies",
            "File uploads using Multer",
            "Email notifications with NodeMailer",
            "Cloud deployment using services like Heroku, Render, or Vercel",
            "Project: Build a secure REST API for a blog/eCommerce platform",
          ],
        },
        {
          title: "Database & MongoDB Integration",
          points: [
            "Introduction to NoSQL and MongoDB database concepts",
            "Installing MongoDB and using MongoDB Compass",
            "CRUD operations: Create, Read, Update, Delete",
            "Schema design using Mongoose ODM",
            "Defining models and relationships between collections",
            "Querying nested data and array manipulation",
            "Database indexing and performance tuning",
            "Working with MongoDB Atlas (cloud database)",
            "Environment configuration with dotenv",
            "Data backup, restoration, and connection pooling",
            "Project: Integrate MongoDB with Express APIs for real-time data access",
          ],
        },
        {
          title: "Full Stack Integration & Deployment",
          points: [
            "Connecting Angular front-end with Express APIs",
            "CORS configuration and cross-origin communication",
            "Handling user login and protected routes with JWT",
            "Role-based access control (Admin/User)",
            "UI enhancements based on backend responses",
            "Deployment best practices for full-stack applications",
            "Using Git & GitHub for version control and collaboration",
            "CI/CD concepts and deploying to platforms like Netlify & Render",
            "Final Capstone Project: Build and deploy a fully-functional eCommerce or blog platform using the complete MEAN Stack",
          ],
        },
      ],
    },
  ],
};

const courseCurriculumData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "MEAN Stack Course",
  tools: [
    {
      name: "HTML / HTML5",
      icon: "/assets/images/Mean_Stack_Landing/icons/html5_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50.6,
      companyLogoHeight: 50.34,
    },
    {
      name: "CSS / CSS3",
      icon: "/assets/images/Mean_Stack_Landing/icons/css3-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "JavaScript",
      icon: "/assets/images/Web_Development/icons/courses-tool/javascript-icon.svg",
      color: "bg-green-50",
      companyLogoWidth: 59,
      companyLogoHeight: 58,
    },
    {
      name: "Angular",
      icon: "/assets/images/Mean_Stack_Landing/icons/angular-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 56,
    },
    {
      name: "Node.js",
      icon: "/assets/images/Mean_Stack_Landing/icons/node-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 136,
      companyLogoHeight: 38.86,
    },
    {
      name: "Express.js",
      icon: "/assets/images/Mean_Stack_Landing/icons/express-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 151,
      companyLogoHeight: 50,
    },
    {
      name: "MongoDB",
      icon: "/assets/images/Mean_Stack_Landing/icons/mongodb-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 89,
      companyLogoHeight: 48,
    },
    {
      name: "GitHub",
      icon: "/assets/images/Mean_Stack_Landing/icons/github-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 89,
      companyLogoHeight: 48,
    },
    {
      name: "JWT",
      icon: "/assets/images/Mean_Stack_Landing/icons/jwt-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 51.04,
      companyLogoHeight: 51,
    },
    {
      name: "REST APIs",
      icon: "/assets/images/Mean_Stack_Landing/icons/rest-api-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 102,
      companyLogoHeight: 36,
    },
    {
      name: "Postman",
      icon: "/assets/images/Mean_Stack_Landing/icons/postman-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 76,
      companyLogoHeight: 76,
    },
    {
      name: "MongoDB Atlas",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mean_Stack_Landing/icons/mongodb-atlas-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 71,
      companyLogoHeight: 42,
    },
  ],
};

// Career prospects data
const careerProspectsData = {
  title:
    'Future Prospects of this <span className="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing this MEAN Stack Developer Certification Course, you’ll be ready for exciting roles like:",
  careerRoles: [
    "MEAN Stack Developer",
    "Angular Developer",
    "Backend Developer (Node.js)",
    "API Integration Engineer",
    "Full Stack JavaScript Developer",
  ],
  salaryInfo:
    'Average Salary in India: <strong className="font-bold">₹5 LPA - ₹12 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mean_Stack_Landing/MeanStackCareerPropectsLanding.svg",
  buttonText: "Check Eligibility",
};

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Jayanta Mukherjee",
      rating: 5,
      text: `"I was from a non-tech background and therefore, was unsure about the MEAN Stack course. But EME Academy Mumbai has made Angular and backend development super easy for me. The live coding sessions have given me the confidence to build my first full-stack app!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Neha Das",
      rating: 5,
      text: `"EME Academy Mumbai’s Full Stack courses are beginner-friendly and career-focused. I took the MEAN Stack course and learned how to build scalable apps, boosting my confidence for real-world projects."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Vikram Pandey",
      rating: 5,
      text: `"MEAN Stack course choose korechilam karon Angular niye kaj korte cheyechilam, ar ami khub khushi! Course ta real-world projects ar industry best practices diye filled chilo. Ekhn ami confidently full-stack developer roles e apply korte parchi!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Fatima Sheikh",
      rating: 5,
      text: `"The best MEAN Stack development course in Mumbai! I landed my job after project presentation week!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 5,
      name: "Sanjana Paul",
      rating: 5,
      text: `"Honestly, I was scared at first because I had no tech background. But the mentors at EME Academy Mumbai explained everything so clearly—starting from how the web works to building full Angular projects. Now I can proudly say I'm a certified MEAN stack developer!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 6,
      name: "Sayantan Ghosh",
      rating: 5,
      text: `"আমি আগে শুধু একটু HTML জানতাম। JavaScript, Node.js, MongoDB—সব কিছু নতুন ছিল। কিন্তু EME Academy Mumbai-তে ক্লাসগুলো এত সুন্দর ভাবে হয় যে ভয় পাইনি। এখন আমার নিজের GitHub আছে আর একটা full stack project বানিয়েছি!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 7,
      name: "Fatema Rahman",
      rating: 5,
      text: `"What I liked most about this course is the practical approach. Every week we had assignments, and the best part—live projects! We built a task manager app with Angular frontend and MongoDB backend. That really boosted my confidence for interviews."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 8,
      name: "Arpan Mukherjee",
      rating: 5,
      text: `"আমি MBA করার পর বুঝলাম coding শেখা দরকার। EME Academy Mumbai-র MEAN Stack course এ ভর্তি হই। ২ মাসের মধ্যে আমি একটা e-commerce site বানাতে শিখে যাই! এখন আমি নিজের agency শুরু করেছি!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 9,
      name: "Rik Mukherjee",
      rating: 5,
      text: `"I’m a college student and couldn’t travel to Mumbai. The online classes, recordings, and project feedback really worked for me. আমি MongoDB আর Express.js দিয়ে একটা blog app তৈরি করেছি – যেটা এখন আমার resume-র highlight!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 10,
      name: "Tanaya Sen",
      rating: 5,
      text: `"EME Academy Mumbai truly cares about each student. When I was struggling with APIs, one of the mentors even did a 1-on-1 session. এখন আমি confidently REST API বানাতে পারি এবং GitHub এ upload করি। Course শেষে internship ও পেয়েছি!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

export default function page() {
  const Courses = "Mean Stack Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
  const BrochureName = "mean_stack_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
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

  return (
    <main
      className={` flex flex-col justify-start items-center w-full min-h-screen `}
    >
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mean_Stack_Landing/MeanStackHeroLanding.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] mt-2 bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
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
      <div id="CourseProspects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="about" className="flex w-full  bg-[#ffffff]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹30,000 to ₹50,000 per month"
          }
        />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mean_Stack_Course/MEANLearningMethodology.png"
        />
      </div>
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div id="testimonials" className="flex w-full mt-2">
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
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
