import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import PlacementSupport from "@/components/common/PlacementSupport";
import StudentPlaced from "@/components/common/StudentPlaced";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

import Faqs from "@/components/common/Faqs";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import CTAButton from "../../components/common/CtaButton";

export const metadata = {
  title: "Best MERN Stack Course in Mumbai | Full Stack Development Training",
  description: "Join the best MERN stack course in Mumbai at EME Academy Mumbai. Master React, Node.js, Express, and MongoDB with 100% placement support.",
  keywords: ["mern stack course in mumbai", "full stack development training in mumbai", "best mern stack institute in mumbai"],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/best-mern-stack-training-course-in-mumbai",
  },
};

const MernStackfaq = [
  {
    id: 1,
    title: "Is this MERN Stack course suitable for beginners in Mumbai?",
    decs: "Yes, absolutely. This course is beginner-friendly and starts from the fundamentals of front-end and back-end development before moving into full-stack projects and advanced deployment techniques.",
  },
  {
    id: 2,
    title:
      "What is the duration and fee structure of the MERN Stack course in Mumbai?",
    decs: "The full MERN Stack Development Course in Mumbai is 6 months. The regular fee is ₹65,000, but currently offered at a discounted rate of ₹55,000. EMI options with 0% interest are available.",
  },
  {
    id: 3,
    title: "Will I get a certificate after completing the MERN Stack course?",
    decs: "Definitely. You will receive an industry-recognized MERN Stack Developer Certification from EME Academy Mumbai, which is highly valued by IT companies and recruiters across India.",
  },
  {
    id: 4,
    title: "What technologies and tools will I learn in this course?",
    decs: "You will master tools like HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, Postman, JWT, GitHub, MongoDB Atlas, and more—covering everything from front-end UI to secure backend APIs.",
  },
  {
    id: 5,
    title: "Do you provide 100% placement support after the course?",
    decs: "Yes! We offer 100% placement assistance, including resume building, mock interviews, LinkedIn optimization, job portal access, direct referrals, and real-time interview preparation.",
  },
  {
    id: 6,
    title: "Can I attend a demo class before enrolling?",
    decs: "Of course! You can book a free demo class to experience our teaching style, course content, and interact with mentors before enrolling.",
  },
  {
    id: 7,
    title: "Will this MERN Stack course help me with freelance projects?",
    decs: "Yes. Many of our learners work as freelance full-stack developers after completing this course. We focus on real-world project development that you can showcase to clients on GitHub or your portfolio.",
  },
  {
    id: 8,
    title: "Do I need a coding background to join this course?",
    decs: "No prior coding experience is required. Our structured training starts from the basics and gradually builds your skills in full-stack web development, even if you're from a non-tech background.",
  },
  {
    id: 9,
    title: "Can working professionals join this MERN Stack course?",
    decs: "Yes. We offer flexible batch timings—weekday, weekend, and evening classes—to accommodate college students and full-time working professionals.",
  },
  {
    id: 10,
    title: "What happens if I miss a class or need revision?",
    decs: "All sessions are recorded and shared with you for lifetime access. You can also attend doubt-clearing sessions and connect with mentors during live support hours.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    decs: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

const heroData = {
  badgeText:
    "Best Full Stack (MERN) Web Development Course in Mumbai – Become a Certified Full Stack Developer!",
  title: "Best MERN Stack Training Course in Mumbai – 100% Job-Ready Program",
  description:
    "Looking for the Best MERN Stack Course in Mumbai with placement for freshers? EME Academy Mumbai offers hands-on MERN Stack Developer Course Training in Mumbai designed to help you master React, Node.js, Express.js, and MongoDB through real-time projects and 100% placement support.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Course details data
const courseDetailsData = {
  courseName: "MERN Stack Course",
  subtitle:
    "Enroll now and become a certified full-stack developer with placement support!",
  courseData: [
    {
      id: 1,
      title: "MERN Stack Course Details",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mern_Stack_Landing/MernStackCourseDetailsLanding.png",
      description:
        "Get certified with one of the most advanced MERN Stack certification courses in Mumbai, ideal for freshers, working professionals, and aspiring developers who want to build scalable, high-performing web applications from scratch.",
      details: [
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹65,000</span>{" "}
              ₹55,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
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
      hookLine:
        "Become a Certified Full Stack MERN Developer with the Best MERN Stack Training Institute in Mumbai!",
      topics: [
        {
          title: "Frontend Development with React.js",
          points: [
            {
              title: "React.js Fundamentals",
              points: [
                "Introduction to React and JSX",
                "Setting up React environment with Create React App",
                "Understanding components (functional and class-based)",
                "Props and State basics",
                "Component lifecycle methods",
              ],
            },
            {
              title: "State Management & Hooks",
              points: [
                "useState and useEffect for functional components",
                "useRef, useMemo, useCallback",
                "Custom Hooks for reusability",
                "useContext for global state management",
              ],
            },
            {
              title: "React Router & Navigation",
              points: [
                "Setting up React Router DOM",
                "Route parameters and dynamic routing",
                "Navigation menus and route protection",
              ],
            },
            {
              title: "Redux Toolkit (Advanced State Management)",
              points: [
                "Understanding actions, reducers, and store",
                "Connecting Redux to React with react-redux",
                "Redux Thunk for async operations",
                "DevTools for debugging Redux applications",
              ],
            },
            {
              title: "API Integration",
              points: [
                "Consuming REST APIs with Axios and Fetch",
                "Handling asynchronous data with useEffect",
                "Error handling and loading states",
                "Displaying dynamic data in components",
              ],
            },
            {
              title: "UI Enhancements & Component Libraries",
              points: [
                "Responsive design with Bootstrap, Tailwind CSS or Material UI",
                "Building reusable components (modals, cards, forms)",
                "Form handling with Formik and Yup validation",
              ],
            },
          ],
        },
        {
          title: "Backend Development with Node.js & Express.js",
          points: [
            {
              title: "Node.js Essentials",
              points: [
                "Introduction to server-side JavaScript",
                "Working with Node modules and npm",
                "File system, streams, and events",
                "Building your first server with HTTP module",
              ],
            },
            {
              title: "Express.js for Web Development",
              points: [
                "Setting up Express.js environment",
                "Middleware: custom and built-in",
                "Creating RESTful APIs and handling routes",
                "Handling GET, POST, PUT, DELETE requests",
              ],
            },
            {
              title: "Authentication & Security",
              points: [
                "User registration and login systems",
                "Password hashing with bcrypt",
                "JWT (JSON Web Token) authentication",
                "Protecting routes and role-based access control",
                "Input validation and securing endpoints",
              ],
            },
            {
              title: "Error Handling and Logging",
              points: [
                "Centralized error handling middleware",
                "Try-catch with async/await",
                "Logging with Winston or Morgan",
              ],
            },
          ],
        },
        {
          title: "Database Management with MongoDB & Mongoose",
          points: [
            {
              title: "MongoDB Basics",
              points: [
                "Introduction to NoSQL and MongoDB architecture",
                "Setting up MongoDB locally and on Atlas",
                "CRUD operations: insert, read, update, delete",
                "Mongo shell and MongoDB Compass usage",
              ],
            },
            {
              title: "Mongoose ODM",
              points: [
                "Defining schemas and models",
                "Validations and default values",
                "Relational data using population and referencing",
                "Middleware (pre/post hooks)",
              ],
            },
            {
              title: "Advanced MongoDB",
              points: [
                "Aggregation pipeline for data transformation",
                "Indexing and query optimization",
                "Data backup and replication basics",
                "Building relationships in NoSQL (1-to-many, many-to-many)",
              ],
            },
          ],
        },
        {
          title: "Capstone Project: Full MERN Stack Application",
          points: [
            "Build a real-world application (e.g., blogging site, e-commerce platform, admin dashboard)",
            "User authentication and session management",
            "CRUD functionality with role-based permissions",
            "Admin panel with protected routes",
            "Deployment using GitHub, Heroku, and MongoDB Atlas",
            "Final code review and Git workflow",
          ],
        },
      ],
    },
  ],
};

const courseCurriculumData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "MERN Stack Course",
  tools: [
    {
      name: "React Js",
      icon: "/assets/images/Mern_Stack_Landing/icons/react-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50.6,
      companyLogoHeight: 50.34,
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
      name: "Redux",
      icon: "/assets/images/Mern_Stack_Landing/icons/Redux_Logo.svg",
      color: "bg-green-50",
      companyLogoWidth: 59,
      companyLogoHeight: 58,
    },
    {
      name: "Git",
      icon: "/assets/images/Mern_Stack_Landing/icons/Git_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 56,
    },
    {
      name: "GitHub",
      icon: "/assets/images/Mean_Stack_Landing/icons/github-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 89,
      companyLogoHeight: 48,
    },
    {
      name: "VS Code",
      icon: "/assets/images/Mean_Stack_Landing/icons/VsCode_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "Postman",
      icon: "/assets/images/Mean_Stack_Landing/icons/postman-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 76,
      companyLogoHeight: 76,
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
      name: "NPM",
      icon: "/assets/images/Mern_Stack_Landing/icons/Npm_Logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 71,
      companyLogoHeight: 42,
    },
    {
      name: "Heroku",
      icon: "/assets/images/Mern_Stack_Landing/icons/Heroku_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 76,
      companyLogoHeight: 76,
    },
    {
      name: "Netlify",
      icon: "/assets/images/Mern_Stack_Landing/icons/Netlify_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 51.04,
      companyLogoHeight: 51,
    },
    {
      name: "Bootstrap",
      icon: "/assets/images/Mern_Stack_Landing/icons/bootstrap-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 102,
      companyLogoHeight: 36,
    },
  ],
};

// Career prospects data
const careerProspectsData = {
  title:
    'Future Prospects of this <span className="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing the best MERN Stack Developer Course Training in Mumbai at EME Academy Mumbai, you can confidently apply for roles such as:",
  careerRoles: [
    "Full Stack Developer",
    "Frontend React Developer",
    "Web Developer",
    "API Developer",
    "MERN Stack Developer",
    "Backend Node.js Developer",
  ],
  salaryInfo:
    'Average Salary in India: <strong className="font-bold">₹4.5 LPA - ₹12 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mern_Stack_Landing/MernStackCareerProspectsLanding.svg",
  buttonText: "Check Eligibility",
};

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Ayesha Khatun",
      rating: 5,
      text: `"The Full Stack (MERN) course exceeded my expectations! The hands-on projects have made me understand the complex concepts and the career guidance was a huge plus! Thanks to EME Academy Mumbai."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Anjan Roy",
      rating: 5,
      text: `"Mujhe backend development seekhna tha, aur EME Academy Mumbai ne perfect foundation diya. Database projects ne real-world applications kaise kaam karti hain ye samajhne mein madad ki. Ab apna dynamic website bana raha hoon."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Fatima Sheikh",
      rating: 5,
      text: `"MERN Stack course at EME Academy Mumbai was a game-changer! React se lekar backend authentication tak sab kuch detail mein cover kiya hai is course me. GitHub aur cloud deployment training se job search mein competitive edge mila hai mujhe. Highly recommended!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Hassan Ali",
      rating: 5,
      text: `"EME Academy Mumbai-এর Full Stack (MERN) Web Development course এ enroll করার পর mentorship টা আমার খুব ভালো লেগেছে। Debugging help, API integration—সবকিছুতেই instructors অনেক support করেছেন। কোর্স শেষ করার পরই আমার প্রথম freelance project পেয়ে গেছি!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

export default function page() {
  const Courses = "Mern Stack Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
  const BrochureName = "mern_stack_brochure.pdf";
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
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mern_Stack_Landing/MernStackHeroLanding.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
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

      <div id="about" className="flex w-full  bg-[#F4FBFE]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
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
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Mern_Stack_Course/MERNLearningMethodology.png"
        />
      </div>
      <div id="testimonials" className="flex w-full mt-2">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={MernStackfaq} />
      </div>
      <CoursesLandingFooter courseName="Mern Stack Course" {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
