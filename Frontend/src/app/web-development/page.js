import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import FeaturedIn from "@/components/common/FeaturedIn";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import { alumniStudents } from "@/data/alumniStudentsData";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/web-development",
  },
};

export default function page() {
  const Courses = "Web Development Course";
  const SelectCourses = [
    "Full Stack (MERN)",
    "Full Stack (MEAN)",
    "PHP & MySQL",
    "WordPress",
  ];
  const email_sender = "ALL";
  const Brochure =
  "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
  const BrochureName = "web-dev-brochure.pdf";
  const _this = {
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
  };
  const Prospect = [
    "Applications Developer",
    "UI Developer",
    "Game Developer",
    "Multimedia Programmer",
    "Multimedia Specialist",
    "SEO Specialist",
    "UX Researcher & Designer",
    "Web Developer",
    "Web Designer & Developer",
    "Software Developer",
    "Web Content Manager",
  ];

  

  const webdevfaq = [
    {
      id: "1",
      title:
        "What is the duration and fee structure for web development courses?",
      desc: "The MERN, MEAN, PHP & MySQL, and WordPress courses range from 4 to 6 months. Fees are affordable, with instalment options available.",
    },
    {
      id: "2",
      title: "What are the eligibility criteria for these courses?",
      desc: "Anyone interested in web development can join. No prior coding experience is required for WordPress Web Development, but basic programming knowledge is helpful for MERN, MEAN, and PHP & MySQL courses.",
    },
    {
      id: "3",
      title: "Will I receive a certification upon course completion?",
      desc: "Yes, a globally recognised certification is awarded after completing the course.",
    },
    {
      id: "4",
      title: "Is there an internship included in the courses?",
      desc: "Yes, we provide internships for Full Stack Web Development, PHP & MySQL, and WordPress courses to give students real-world project experience.",
    },
    {
      id: "5",
      title: "Does EME Academy provide online classes?",
      desc: "Yes, we offer both online and offline training with live instructor-led sessions and recorded materials.",
    },
    {
      id: "6",
      title: "Will I get placement support after the course?",
      desc: "Absolutely! We provide 100% placement support, resume-building assistance, and mock interview preparation.",
    },
    {
      id: "7",
      title: "Do I need prior experience for the MERN Stack course?",
      desc: "No prior experience is needed! Basic knowledge of HTML, CSS, and JavaScript is helpful, but our beginner-friendly training covers everything.",
    },
    {
      id: "8",
      title: "Do you provide placement assistance?",
      desc: "Yes, we offer 100% placement support, including resume building, mock interviews, and job referrals to top tech companies.",
    },
    {
      id: "9",
      title: "How does EME Academy ensure practical learning?",
      desc: "Our curriculum includes live projects, capstone assignments and real-world problem-solving.",
    },
    {
      id: "10",
      title: "What technologies and programming languages will I learn?",
      desc: "You’ll gain expertise in HTML, CSS, JavaScript, React, Node.js, MongoDB, PHP, MySQL, and WordPress.",
    },
    {
      id: "11",
      title: "What are the course fees, and are there any discounts?",
      desc: (
        <>
          <p>Yes, there are</p>
          <p>
            Full Stack (MERN)Web Development Course Fee - Rs.50,000 (Rs 40,000
            after discount){" "}
          </p>
          <p>
            Full Stack (MEAN)Web Development Course Fee - Rs.50,000 (Rs 40,000
            after discount)
          </p>
          <p>PHP & MySQL Course Fee - Rs.35,000 (Rs. 25,000 after discount) </p>
          <p>
            WordPress Development Course Fee - Rs. 30,000 (Rs. 20,000 after
            discount)
          </p>
        </>
      ),
    },
    {
      id: "12",
      title: " What kind of projects will I work on?",
      desc: (
        <>
          <p>Students work on real-world projects, including:</p>
          <p>
            Full Stack Web Development: MERN & MEAN Stack, Full-stack
            applications, admin panels, and dynamic websites
          </p>
          <p>
            PHP & MySQL: CMS, eCommerce sites, and database-driven applications
          </p>
          <p>WordPress: Custom websites, blogs, and eCommerce sites</p>
        </>
      ),
    },
    {
      id: "13",
      title: "Can I get a demo class before enrolling?",
      desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
    },
    {
      id: "14",
      title: "How can I enroll?",
      desc: (
        <>
          <p>
            To enroll, contact us at 9093926145/9831284098 or email at
            infomumbai@emeacademy.co.in. You can also register online through our
            website.
          </p>
        </>
      ),
    },
  ];

  const courses = [
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MERNBanner2.svg",
        alt: "Full Stack (MERN) Web Development Course in Mumbai",
        width: 437,
        height: 180,
      },
      // link: "/best-mern-stack-development-course-in-kolkata",
      imageBgColor: "#0F2633",
      title: "Full Stack (MERN) Web Development Course in Mumbai",
      description: "MERN Stack - MongoDB, Express.js, React.js, Node.js",
      hookLine:
        "Enroll now and become a certified full stack developer with placement support!",
      descriptionAlert:
        "Discover the Best Full Stack Web Development Course in Mumbai with EME Academy Mumbai, designed to make you industry-ready. Master the MERN stack (MongoDB, Express.js, React, Node.js) and build dynamic applications from the scratch.",
      topics: [
        "Frontend Development with React.js: Component-based architecture, state management, and API integration.",
        "Backend Development with Node.js & Express.js: RESTful API creation, authentication, and database management.",
        "MongoDB Database: CRUD operations, schema modeling with Mongoose, and aggregation framework.",
        "Version Control & Deployment: GitHub, deployment strategies, and cloud hosting.",
      ],
      accordionItems: [
        {
          value: "mongo",
          trigger: "MongoDB (Database)",
          content: (
            <p>
              <br />• NoSQL database fundamentals.
              <br />• CRUD Operations with MongoDB.
              <br />• Mongoose for schema modeling.
              <br />• Aggregation Framework.
            </p>
          ),
        },
        {
          value: "express",
          trigger: "Express.js",
          content: (
            <p>
              <br />• Building RESTful APIs.
              <br />• Middleware and routing.
              <br />• Authentication with JWT.
              <br />• Error Handling and security best practices.
            </p>
          ),
        },
        {
          value: "react",
          trigger: "React.js",
          content: (
            <p>
              <br />• React components and state management.
              <br />• React hooks and context API.
              <br />• React Router for navigation.
              <br />• Integrating REST APIs.
              <br />• Redux For State Management.
            </p>
          ),
        },
        {
          value: "node",
          trigger: "Node.js",
          content: (
            <p>
              <br />• File System and Modules in Node.js
              <br />• Working with APIs and third-party packages.
              <br />• WebSockets for real-time applications.
            </p>
          ),
        },
      ],
      details: [
        {
          icon: "/assets/icons/DurationIcon.svg",
          label: "Duration",
          value: "6 months",
        },
        {
          icon: "/assets/icons/BudgetIcon.svg",
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹50,000</span>{" "}
              ₹40,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          icon: "/assets/icons/TrainingIcon.svg",
          label: "Mode of Training",
          value: "Online & Classroom Sessions Available",
        },
      ],
    },
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MEAN2.svg",
        alt: "Full Stack (MEAN) Web Development Course in Mumbai",
        width: 613,
        height: 180,
      },
      // link: "/best-mern-stack-development-course-in-kolkata",
      imageBgColor: "#01363E",
      title: "Full Stack (MEAN) Web Development Course in Mumbai",
      description: "MEAN Stack - MongoDB, Express.js, Angular.js, Node.js",
      hookLine: "Learn from the Best MEAN Stack Training Institute in Mumbai!",
      descriptionAlert:
        "Master the MEAN Stack (MongoDB, Express.js, Angular, Node.js) with EME Academy Mumbai’s Best Full Stack Development Course in Mumbai with Placement. Gain practical coding experience with real-world projects.",
      topics: [
        "Frontend with Angular: TypeScript, two-way data binding, and modular design.",
        "Backend with Node.js & Express.js: Robust server-side applications.",
        "MongoDB Integration: Real-time applications and dynamic data handling.",
        "Advanced Security & Cloud Deployment: API security, authentication, and more.",
      ],
      accordionItems: [],
      details: [
        {
          icon: "/assets/icons/DurationIcon.svg",
          label: "Duration",
          value: "6 months",
        },
        {
          icon: "/assets/icons/BudgetIcon.svg",
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹50,000</span>{" "}
              ₹40,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          icon: "/assets/icons/TrainingIcon.svg",
          label: "Mode of Training",
          value: "Online & Classroom Sessions Available",
        },
      ],
    },
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/PHP2.svg",
        alt: "PHP & MySQL Development Intensive Course in Mumbai",
        width: 613,
        height: 180,
      },
      // link: "/wordpress-development-training-institute-in-kolkata",
      imageBgColor: "#1F77A2",
      title: "PHP & MySQL Development Intensive Course in Mumbai",
      hookLine:
        "Join the Top PHP MySQL Training Institute in Mumbai with Placement Support.",
      descriptionAlert:
        "Enhance your programming skills with the Best PHP & MySQL Course Training in Mumbai. Learn backend development, database management, and server-side scripting.",
      topics: [
        "PHP fundamentals, functions, arrays, and control structures.",
        "Creating MySQL Databases and handling database operations.",
        "Administering databases and managing user roles.",
        "Real-world web applications with PHP and MySQL.",
      ],
      accordionItems: [],
      details: [
        {
          icon: "/assets/icons/DurationIcon.svg",
          label: "Duration",
          value: "4 months",
        },
        {
          icon: "/assets/icons/BudgetIcon.svg",
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
              ₹35,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          icon: "/assets/icons/TrainingIcon.svg",
          label: "Mode of Training",
          value: "Online & Classroom Sessions Available",
        },
      ],
    },
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/WordPress2.svg",
        alt: "WordPress Development",
        width: 613,
        height: 180,
      },
      // link: "/wordpress-development-training-institute-in-kolkata",
      imageBgColor: "#22769B",
      title: "WordPress Development",
      hookLine:
        "Join the Best WordPress Training Institute in Mumbai with Placement Support.",
      descriptionAlert:
        "Become a professional WordPress developer with our Best WordPress Developer Course in Mumbai. Gain hands-on experience in website creation, customization, and plugin management.",
      topics: [
        "Introduction to WordPress, Themes, and Plugins.",
        "Managing Pages, Posts, Widgets, and Menus.",
        "WordPress Security, Custom Post Types, and WooCommerce.",
        "Hands-on website building and SEO optimization.",
      ],
      accordionItems: [],
      details: [
        {
          icon: "/assets/icons/DurationIcon.svg",
          label: "Duration",
          value: "4 months",
        },
        {
          icon: "/assets/icons/BudgetIcon.svg",
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
              ₹35,000 <span className="text-[#00A51E]">after discount</span>
            </>
          ),
        },
        {
          icon: "/assets/icons/TrainingIcon.svg",
          label: "Mode of Training",
          value: "Online & Classroom Sessions Available",
        },
      ],
    },
  ];

  const toolsData = {
    title: "Tools & Technologies You'll Master with our",
    courseName: "Web Development Course",
    tools: [
      {
        name: "HTML5",
        icon: "/assets/images/Web_Development/icons/courses-tool/html5-icon.svg",
        color: "bg-orange-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "CSS3",
        icon: "/assets/images/Web_Development/icons/courses-tool/css3-icon.svg",
        color: "bg-blue-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Bootstrap",
        icon: "/assets/images/Web_Development/icons/courses-tool/bootstrap-icon.svg",
        color: "bg-purple-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Mongo DB",
        icon: "/assets/images/Web_Development/icons/courses-tool/mongoDb.png",
        color: "bg-green-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Express Js",
        icon: "/assets/images/Web_Development/icons/courses-tool/expressjs.png",
        color: "bg-gray-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "React Js",
        icon: "/assets/images/Web_Development/icons/courses-tool/react-icon.svg",
        color: "bg-cyan-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Node Js",
        icon: "/assets/images/Web_Development/icons/courses-tool/nodejs.png",
        color: "bg-green-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Tailwind CSS",
        icon: "/assets/images/Web_Development/icons/courses-tool/tailwindcss-icon.svg",
        color: "bg-sky-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Live Hosting / Server",
        icon: "/assets/images/Web_Development/icons/courses-tool/LiveHostingServer-icon.svg",
        color: "bg-yellow-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "WordPress",
        icon: "/assets/images/Web_Development/icons/courses-tool/wordpress-icon.svg",
        color: "bg-gray-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Javascript",
        icon: "/assets/images/Web_Development/icons/courses-tool/javascript-icon.svg",
        color: "bg-yellow-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "PSD 2 HTML",
        icon: "/assets/images/Web_Development/icons/courses-tool/PSD2HTML-icon.svg",
        color: "bg-pink-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "PHP",
        icon: "/assets/images/Web_Development/icons/courses-tool/php-icon.svg",
        color: "bg-indigo-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "GitHub",
        icon: "/assets/images/Web_Development/icons/courses-tool/github-icon.svg",
        color: "bg-gray-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "MySQL",
        icon: "/assets/images/Web_Development/icons/courses-tool/MySql-icon.svg",
        color: "bg-blue-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Laravel",
        icon: "/assets/images/Web_Development/icons/courses-tool/laravel-icon.svg",
        color: "bg-red-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "API",
        icon: "/assets/images/Web_Development/icons/courses-tool/API-icon.svg",
        color: "bg-gray-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
      {
        name: "Mobile Friendly Website",
        icon: "/assets/images/Web_Development/icons/courses-tool/MobileFriendlyWebsite.svg",
        color: "bg-green-50",
        companyLogoWidth: 120,
        companyLogoHeight: 60,
      },
    ],
  };

  const careerProspectsData = {
    title:
      'Career Prospects & <span class="text-[#f97316]">Future Opportunities</span>',
    subtitle:
      "After completing our Web Development Course in Mumbai, you will unlock diverse career opportunities:",
    careerRoles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "PHP Developer",
      "WordPress Developer",
      "UI/UX Designer",
      "MERN/MEAN Stack Developer",
      "Web Developer & Designer",
    ],
    salaryInfo:
      "As the industry evolves with <strong>AI, Web3,</strong> and <strong>Progressive Web Apps (PWAs)</strong>, developers will have endless opportunities to innovate and build cutting-edge digital solutions — ensuring a future-proof and rewarding career in web development.",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/CareerProspectsImage.svg",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Ayesha Khatun",
        rating: 5,
        text: `"The Full Stack (MERN) course exceeded my expectations! The hands-on projects have made me understand the complex concepts and the career guidance was a huge plus!"`,
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
        name: "Jayanta Mukherjee",
        rating: 5,
        text: `"I was from a non-tech background and therefore, was unsure about the MEAN Stack course. But EME Academy Mumbai has made Angular and backend development super easy for me. The live coding sessions have given me the confidence to build my first full-stack app!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Fatima Sheikh",
        rating: 5,
        text: `"MERN Stack course at EME Academy Mumbai was a game-changer! React se lekar backend authentication tak sab kuch detail mein cover kiya hai is course me. GitHub aur cloud deployment training se job search mein competitive edge mila hai mujhe. Highly recommended!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Hassan Ali",
        rating: 5,
        text: `"EME Academy-এর Full Stack (MERN) Web Development course এ enroll করার পর mentorship টা আমার খুব ভালো লেগেছে। Debugging help, API integration—সবকিছুতেই instructors অনেক support করেছেন। কোর্স শেষ করার পরই আমার প্রথম freelance project পেয়ে গেছি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Ananya Paul",
        rating: 5,
        text: `"This course didn’t just teach me PHP and MySQL, but also showed me how to integrate them into full-scale projects. Now, I can say that I’m ready to apply for backend development jobs!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Rohit Roy",
        rating: 5,
        text: `"I always thought website development was complicated until I joined EME Academy Mumbai’s WordPress course. Now, I can build and customize professional websites without coding!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Neha Das",
        rating: 5,
        text: `"EME Academy Mumbai’s Full Stack courses are beginner-friendly and career-focused. I took the MEAN Stack course and learned how to build scalable apps, boosting my confidence for real-world projects."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Vikram Pandey",
        rating: 5,
        text: `"MEAN Stack course choose korechilam karon Angular niye kaj korte cheyechilam, ar ami khub khushi! Course ta real-world projects ar industry best practices diye filled chilo. Ekhn ami confidently full-stack developer roles e apply korte parchi!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Amit Ghosh",
        rating: 5,
        text: `"The PHP & MySQL course made coding very easy! The instructors explained concepts clearly, and the hands-on assignments have helped me to manage the databases effortlessly."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  const heroData = {
    badgeText: "Get Job-Ready in Just 6 Months!",
    title: "Best Web Development Course in Mumbai",
    description:
      "Explore Full Stack Web Development with MERN, MEAN, PHP & MySQL, and WordPress. Earn up to ₹12 LPA with the best course in Mumbai, designed to launch your tech career.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  return (
    <main
      className={` flex flex-col justify-start  items-center w-full min-h-screen`}
    >
      <AdmissionHeader _this={_this} />

      <div id="home" className="w-full">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/HeroSection.webp')] xs:h-[460px] md:h-[555px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>

      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-size-[90px_50px] 2xl:bg-size-[100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
          SelectCourses={SelectCourses || []}
        />
      </div>

      <div className="flex justify-center bg-[#ffffff]">
        <CourseDetailsGrid
          title="Our Web Development"
          subtitle="Courses"
          brochureInfo={{
            Courses: "Web Development Course",
            email_sender: "ALL",
            Brochure:
              "/assets/documents/AllCourseBrochure/web_development_brochure.pdf",
            BrochureName: "web-dev-brochure.pdf",
          }}
          courses={courses}
          thisObject={_this}
        />
      </div>

      <div id="about" className="w-full bg-[#F4FBFE]">
        <FeaturedIn {..._this} />
      </div>
      <div id="CourseCurriculum" className="w-full">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>
      <div className="w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>

      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹25,000 to ₹60,000 per month"
          }
        />
      </div>
      <div className="flex flex-col justify-center gap-2 items-center w-full bg-[#F4FBFE] p-4 md:p-2">
        <PlacementSupport {..._this} />
      </div>

      <div className="w-full py-4 px-6">
        <TalkToOurCareerExpert {..._this} />
      </div>

      <div
        id="testimonials"
        className="flex w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% px-6"
      >
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div
        id="CourseProspects"
        className="flex justify-center w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/CareerProspectsImage.svg')] bg-center bg-[length:90%] bg-no-repeat md:bg-none md:bg-[#F4FBFE]"
      >
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>

      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="w-full bg-gradient-to-r bg-[#F4FBFE] mt-6">
        <Faqs faqs={webdevfaq} />
      </div>
      <CoursesLandingFooter courseName="Web Development Course" {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
