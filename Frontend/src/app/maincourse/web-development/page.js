import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import FeaturedIn from "@/components/common/FeaturedIn";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Awards from "@/components/common/Awards";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import PlacementSupport from "@/components/common/PlacementSupport";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CertifiedStudent from "@/app/recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";

export const metadata = {
  title:
    "Best Web Development Course in Mumbai with Placement",
  description:
    "Join The best Web Development Course in Mumbai with placement. Learn MERN, MEAN, PHP, WordPress & build real projects.",
  keywords: [
    "best web development course in Mumbai",
    "web development course in Mumbai",
    "website development course in Mumbai",
    "full stack development course in Mumbai",
    "MERN stack course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/maincourse/web-development",
  },
};

const webdevfaq = [
  {
    id: "1",
    title: "Can I enroll in this program with no coding background?",
    desc: "Yes. We’ve designed our Web Development Course for Beginners in Mumbai to transform you from scratch to a hire-ready developer. We assume zero knowledge. HTML, CSS, and JavaScript build your fundamental logic before you advance to complex backend architectures, making this the ultimate Web Development Course for Freshers Mumbai.",
  },
  {
    id: "2",
    title: "How does the placement support actually work?",
    desc: "Students getting a job offer is the only success metric we have. The most aggressive Web Development Course with Placement in Mumbai, we don’t simply hand you an e-certificate. Our placement cell hyper-optimizes your GitHub portfolio, conducts technical mock interviews, and routes your profile directly to our network of 50+ hiring tech companies till you’re placed.",
  },
  {
    id: "3",
    title: "Should I do the MERN or MEAN stack?",
    desc: "Both are equally powerful and highly paid! If you want to build dynamic user-facing interfaces using React, go with our MERN Stack Course in Mumbai. If you prefer the robust, enterprise-level framework of Angular, go with our MEAN Stack Course in Mumbai. Our career counselors will help you choose the exact path based on your goals in your free demo.",
  },
  {
    id: "4",
    title: "I have a full-time 9-to-5. Can I take this course?",
    desc: "Yes. We specifically engineered our Web Development Course for Working Professionals Mumbai to slot around busy office hours. Highly flexible weekend batches, evening sessions, and a fully interactive Web Development Course Online Mumbai format ensure you can switch to tech without leaving your job.",
  },
  {
    id: "5",
    title: "Do you teach React and Node.js in-depth?",
    desc: "100%. We don’t just skim the surface. Our full-stack track includes a comprehensive, deep-dive React JS Course in Mumbai for frontend mastery and an intensive Node JS Course in Mumbai for backend execution, ensuring you master the modern JavaScript ecosystem that top MNCs demand.",
  },
  {
    id: "6",
    title: "Can I specialize in just Frontend or Backend instead of Full Stack?",
    desc: "Yes! While we highly recommend the complete Full Stack Development Course in Mumbai for maximum salary potential, you can choose to hyper-specialize. You can enroll purely in our Frontend Development Course Mumbai to focus on UI/UX and React, or our Backend Development Course Mumbai to master server logic and databases.",
  },
  {
    id: "7",
    title: "Are PHP and WordPress still relevant for getting hired?",
    desc: "More than ever. Over 40% of the internet is powered by WordPress! Our specialized PHP MySQL Course in Mumbai and WordPress Development Course Mumbai are extremely popular for students who want to dominate the freelance market, start their own digital agencies, or work in fast-paced e-commerce companies.",
  },
  {
    id: "8",
    title: "What are the course fees, and do you offer EMI?",
    desc: "We believe elite tech education should be accessible. Our Web Development Course Fees Mumbai are fully transparent, starting at ₹55,000 after discounts. We also provide zero-interest, No-Cost EMI options so you can focus entirely on your coding projects instead of financial stress.",
  },
  {
    id: "9",
    title: "Will I get a recognized certificate when I finish?",
    desc: "Yes. Upon graduation, you will receive an industry-recognized Web Development Course with Certificate Mumbai. More importantly, because we are certified by MSME, ISO, and #startupindia, your credentials carry significant weight when placed on your resume and LinkedIn profile.",
  },
  {
    id: "10",
    title: "What makes you the best institute for Web Development?",
    desc: "We just can’t stand the thought of teaching outdated textbook theory. Why? Because as the Best Full Stack Institute in Western India, we’re a tech agency, not a training center. You learn from living, breathing developers, create a live portfolio of deployable applications, and graduate with the practical execution skills that force recruiters to take you seriously.",
  },
];

const courses = [
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MERNBanner2.svg",
      alt: "MERN Stack Course in Mumbai",
      width: 437,
      height: 180,
    },
    link: "/best-mern-stack-development-course-in-mumbai",
    imageBgColor: "#0F2633",
    title: "MERN Stack Course in Mumbai",
    description: "Master MongoDB, Express.js, React.js, and Node.js",
    hookLine:
      "Deep dive into modern web architecture with our intensive React & Node JS Course.",
    descriptionAlert:
      "This track includes intensive, hands-on modules acting as a complete React JS Course in Mumbai and Node JS Course in Mumbai. Build scalable, single-page applications from scratch.",
    topics: [
      "Frontend Development with React.js: Component-based architecture, state management, and API integration.",
      "Backend Development with Node.js & Express.js: RESTful API creation, authentication, and database management.",
      "MongoDB Database: CRUD operations, schema modeling with Mongoose, and aggregation framework.",
      "Version Control & Deployment: GitHub, deployment strategies, and cloud hosting.",
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
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">after discount</span>
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
      alt: "MEAN Stack Course in Mumbai",
      width: 613,
      height: 180,
    },
    link: "/best-mean-stack-training-course-in-mumbai",
    imageBgColor: "#01363E",
    title: "MEAN Stack Course in Mumbai",
    description: "Master MongoDB, Express.js, Angular.js, and Node.js",
    hookLine: "The ultimate enterprise-level stack for high-performance apps.",
    descriptionAlert:
      "Learn how to engineer heavy-duty, data-driven applications used by top MNCs. Become a highly sought-after backend and frontend problem solver.",
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
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">after discount</span>
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
      alt: "PHP MySQL Course in Mumbai",
      width: 613,
      height: 180,
    },
    link: "/php-mysql-training-institute-in-mumbai",
    imageBgColor: "#1F77A2",
    title: "PHP MySQL Course in Mumbai",
    description: "Intensive Backend Architecture & Database Management",
    hookLine:
      "Power the web's backend with server-side scripting and secure databases.",
    descriptionAlert:
      "Master server-side scripting, relational databases, dynamic content delivery, and secure authentication to build bulletproof web applications.",
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
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">after discount</span>
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
      alt: "WordPress Development Course Mumbai",
      width: 613,
      height: 180,
    },
    link: "/wordpress-development-training-institute-in-mumbai",
    imageBgColor: "#22769B",
    title: "WordPress Development Course Mumbai",
    description: "Advanced CMS & Custom E-Commerce Development",
    hookLine: "Dominate the freelance and agency market with custom WordPress.",
    descriptionAlert:
      "Go far beyond drag-and-drop page builders. Learn custom theme creation, advanced plugin architecture, and full-scale WooCommerce integration.",
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
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">after discount</span>
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
    'High-Paying Tech Roles <span class="text-[#f97316]">You Will Dominate</span>',
  subtitle:
    "MNCs and startups are hunting for specialized problem-solvers. Whether you are a fresher or a working professional, graduating from Mumbai's premier institute unlocks the industry's most lucrative titles.",
  careerRoles: [
    "Frontend Developer & UI Engineer: Master client-side logic and pixel-perfect interfaces.",
    "Backend Architect: Command server-side operations and database management.",
    "Full Stack Developer: Handle both client and server-side operations seamlessly.",
    "MERN / MEAN Stack Specialist: Master modern tech ecosystems and frameworks.",
    "PHP & WordPress Developer: Dominate freelance, agency, and e-commerce markets.",
  ],
  salaryInfo:
    "Future-Proof Your Income: As the landscape evolves with AI and Web3, our recognized certification ensures you have the foundation to innovate and command top-tier salaries.",
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/CareerProspectsImage.svg",
  buttonText: "Download Free Career Guide & Brochure",
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
      text: `"Mujhe backend development seekhna tha, aur EME Academy ne perfect foundation diya. Database projects ne real-world applications kaise kaam karti hain ye samajhne mein madad ki. Ab apna dynamic website bana raha hoon."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Jayanta Mukherjee",
      rating: 5,
      text: `"I was from a non-tech background and therefore, was unsure about the MEAN Stack course. But EME Academy has made Angular and backend development super easy for me. The live coding sessions have given me the confidence to build my first full-stack app!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Fatima Sheikh",
      rating: 5,
      text: `"MERN Stack course at EME Academy was a game-changer! React se lekar backend authentication tak sab kuch detail mein cover kiya hai is course me. GitHub aur cloud deployment training se job search mein competitive edge mila hai mujhe. Highly recommended!"`,
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
  title: "Launch Your Tech Career with the Best Web Development Course in Mumbai",
  description:
    "Stop getting stuck in \"tutorial hell\" and start building real, deployable applications. Dive into our comprehensive Full Stack Development Course in Mumbai and master MERN, MEAN, PHP & MySQL, and WordPress from scratch. Designed to turn absolute beginners into highly paid programmers, we offer the most reliable Web Development Course with Placement in Mumbai. Build a live portfolio and unlock elite tech roles, earning up to ₹12 LPA!",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
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

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <AnotherHeader />

      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/WebDevMainHero.png')] xs:h-[460px] md:h-[555px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
          SelectCourses={SelectCourses || []}
        />
      </div>
      <div className="flex justify-center bg-[#ffffff]">
        <CourseDetailsGrid
          title="Choose Your Stack: Specialized Web Development"
          subtitle="Courses in Mumbai"
          description="Don't settle for basic HTML and CSS. To secure high-paying tech roles, you need to master modern frameworks and full-stack architectures. Choose the exact Full Stack Web Development Course Mumbai IT companies are hiring for, and start building live, deployable applications."
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
      <div className="w-full bg-[#F4FBFE]">
        <FeaturedIn {..._this} />
      </div>

      <div className="flex bg-white">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} mode="web-dev" />
      </div>
      <div className="w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/webDevCard.png"
        />
      </div>
      <div
        id="CourseProspects"
        className="flex justify-center w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/CareerProspectsImage.svg')] bg-center bg-[length:90%] bg-no-repeat md:bg-none md:bg-[#F4FBFE]"
      >
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges up to ₹40,000 per month."
          }
        />
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

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>

      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>
      <div className="w-full bg-gradient-to-r bg-[#F4FBFE] mt-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-8">
          {/* Web Dev Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              The EME Advantage: Why We Are the Best Web Development Institute in Western India
            </h2>
            <p>
              Breaking into the tech ecosystem requires more than just watching video tutorials. You need hands-on exposure, agency-level mentorship, and aggressive placement backing. Here is exactly why ambitious developers choose EME Academy for the most Practical Web Development Course in Mumbai.
            </p>
            <p>
              <strong>Mentorship from Active Developers -</strong> We skip the academic lectures. Your training is led by industry veterans who bring real-world coding projects, enterprise-level architecture, and insider tech knowledge straight into the classroom.
            </p>
            <p>
              <strong>Comprehensive, High-Demand Stacks -</strong> We don't just offer generic overviews. Whether you want to specialize with our MERN Stack Course in Mumbai, or master enterprise architecture through our MEAN Stack track, our curriculum is laser-focused on the exact technologies MNCs are hiring for right now.
            </p>
            <p>
              <strong>Execution-First, Portfolio Training -</strong> Say goodbye to theoretical fluff. We focus entirely on live corporate case studies and actual deployable applications. You will acquire the tangible, hands-on execution skills that prove to employers you are workforce-ready from day one.
            </p>
            <p>
              <strong>Unrivaled Placement Assistance -</strong> As the leading provider of a Web Development Course with Placement Mumbai relies on, we don't just train you—we launch you. Our dedicated placement cell aggressively leverages our vast corporate network to land you high-paying roles in prestigious organizations.
            </p>
            <p>
              <strong>Flexible Learning for Busy Professionals -</strong> Upskill without putting your life on hold. We offer highly adaptable weekend and weekday batches, making this the perfect Web Development Course for Working Professionals in Mumbai.
            </p>
          </section>

          {/* Recognized Section */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              Recognized by Experts, Proven by Results
            </h2>
            <h3 className="text-[#0057E2] font-bold">
              Excellence That Speaks for Itself.
            </h3>
            <p className="font-bold text-gray-800">
              Celebrated Nationwide for Educational Excellence
            </p>
            <div className="bg-white p-4 border-l-4 border-[#0057E2] shadow-sm italic">
              Crowned as the Best Placement Institute of the Year – 2024 (Leadership Award presented by India News Business & NewsX)
            </div>
            <p>
              Graduate from the Best Web Development Institute in Mumbai and join an elite league of professionals.
            </p>
          </section>

          <Faqs faqs={webdevfaq} />
        </div>
      </div>
      <Footer />
      <StickyCTAButton Courses="Web Development Course" />
    </main>
  );
}
