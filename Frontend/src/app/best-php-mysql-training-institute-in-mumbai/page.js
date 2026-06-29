import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import PlacementSupport from "@/components/common/PlacementSupport";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

export const metadata = {
  title: "Best Php & Mysql Course Training in Mumbai With Placement",
  description:
    "Join best PHP training institute in Mumbai offering Top 10 Php MySQL training in Mumbai, PHP MySQL Full Stack Course In Mumbai with expert guidance.",
  keywords: [
    "Top PHP training institute in Mumbai",
    "best PHP training institute in Mumbai",
    "Php & mysql course training in Mumbai fees",
    "PHP MySql Training institute in Mumbai",
    "Top 10 Php MySQL training in Mumbai",
    "PHP MySQL Full Stack Course In Mumbai",
    "Best php & mysql course training in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/best-php-mysql-training-institute-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "Is this PHP & MySQL course suitable for beginners in Mumbai?",
    decs: "Yes, absolutely! This course is perfect for beginners. We start from the fundamentals of programming like syntax, variables, and loops in PHP and gradually move toward database management and full website integration using MySQL. No prior coding experience is needed.",
  },
  {
    id: 2,
    title:
      "What is the duration and fee structure of the PHP MySQL course in Mumbai?",
    decs: "The full PHP & MySQL Development Intensive Course runs for 4 months. The regular course fee is ₹35,000, but we're currently offering it at ₹25,000 as part of a limited-time promotion at EME Academy Mumbai. EMI options with 0% interest are available.",
  },
  {
    id: 3,
    title: "Will I get a certificate after completing the PHP & MySQL course?",
    decs: "Definitely! You will receive an industry-recognized PHP & MySQL Developer Certificate from EME Academy Mumbai. This certification adds great value to your resume and is accepted by recruiters and IT companies across India.",
  },
  {
    id: 4,
    title: "What technologies and tools will I learn in this course?",
    decs: "You'll get hands-on experience with tools like PHP 8+, MySQL, phpMyAdmin, Apache, XAMPP, GitHub, VS Code, HTML, CSS, and JavaScript (basics). We also teach you how to secure your code using best practices like prepared statements and form validation.",
  },
  {
    id: 5,
    title: "Do you provide 100% placement support after the course?",
    decs: "Yes! We provide complete placement assistance. This includes resume building, LinkedIn profile optimization, aptitude training, mock interviews (technical + HR), direct job referrals, and exclusive access to our career portal with 50+ hiring partners.",
  },
  {
    id: 6,
    title: "Can I attend a free demo class before enrolling?",
    decs: "Of course! We encourage all students to attend a free live demo class to experience our teaching method, meet your mentor, and preview the course content before enrolling.",
  },
  {
    id: 7,
    title: "Will this PHP course help me with freelance or part-time projects?",
    decs: "Yes. We focus heavily on real-world project development. You'll build dynamic websites, admin panels, and contact forms that can be added to your freelance portfolio or GitHub profile. Many of our learners take up freelance web development projects after completing the course.",
  },
  {
    id: 8,
    title: "Do I need a tech or programming background to join this course?",
    decs: "No prior tech background is required. Even if you come from a non-technical stream like arts or commerce, our step-by-step training will help you learn PHP & MySQL from scratch and become job-ready.",
  },
  {
    id: 9,
    title: "Can working professionals and college students join this course?",
    decs: "Yes, we offer flexible batch timings (weekday, weekend, and evening classes) to suit working professionals and students. You can also switch between online and classroom sessions based on availability.",
  },
  {
    id: 10,
    title: "What if I miss a class or need revision?",
    decs: "No worries! All live sessions are recorded and shared with you for lifetime access. You can also attend live doubt-clearing sessions and message your mentors anytime for support.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    decs: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

// Hero data
const heroData = {
  badgeText: "Become a Certified PHP Developer in Just 4 Months!",
  title:
    "Best PHP Training Institute in Mumbai – Get Certified with EME Academy Mumbai",
  description:
    "Join EME Academy Mumbai, the leading PHP & MySQL training institute in Mumbai, and master full-stack development with dynamic website building skills, secure database integration, and job-ready projects.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Course details data
const courseDetailsData = {
  courseName: "PHP & MySQL Full Stack Course",
  subtitle:
    "Enroll now and become a certified PHP & MySQL developer with placement support!",
  courseData: [
    {
      id: 1,
      title: "PHP & MySql Development Intensive Course Details",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Php_MySql_Landing/PhpMySqlLandingCourseDetails.png",
      description:
        "Get certified with one of the most comprehensive PHP & MySQL courses in Mumbai. Learn full-stack development with hands-on projects, dynamic web apps, and job-ready skills at EME Academy Mumbai.",
      details: [
        {
          label: "Duration",
          value: (
            <span>
              <span className="text-black">4 months</span>
            </span>
          ),
        },
        {
          label: "Affordable Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
              ₹35,000 <span className="text-[#00A51E]">Save ₹5,000/-</span>
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
        "Join the Top PHP MySQL Training Institute in Mumbai with Placement Support.",
      topics: [
        {
          title: "Module 1: PHP Development (Basics to Advanced)",
          points: [
            {
              title: "Introduction to PHP",
              points: [
                "What is PHP and how it works",
                "Installing XAMPP/WAMP",
                "Writing your first PHP script",
              ],
            },
            {
              title: "PHP Syntax and Fundamentals",
              points: [
                "PHP tags and code structure",
                "Variables and Data Types",
                "Operators (Arithmetic, Logical, Assignment, etc.)",
              ],
            },
            {
              title: "Control Structures",
              points: [
                "Conditional Statements: if, else, elseif, switch",
                "Looping: while, do...while, for, foreach",
              ],
            },
            {
              title: "Working with Functions",
              points: [
                "Defining and calling functions",
                "Function parameters and return values",
                "Built-in vs user-defined functions",
              ],
            },
            {
              title: "Arrays in PHP",
              points: [
                "Indexed and Associative Arrays",
                "Multidimensional Arrays",
                "Array functions: sort, explode, implode, etc.",
              ],
            },
            {
              title: "Form Handling with PHP",
              points: [
                "GET vs POST methods",
                "HTML form creation and data submission",
                "Validating and sanitizing user input",
                "Handling file uploads securely",
              ],
            },
          ],
        },
        {
          title: "Module 2: MySQL Database Management",
          points: [
            {
              title: "Introduction to MySQL & phpMyAdmin",
              points: [
                "Setting up MySQL using XAMPP",
                "Creating databases and tables using GUI and SQL",
              ],
            },
            {
              title: "CRUD Operations with SQL",
              points: [
                "SELECT: Retrieve data from tables",
                "INSERT: Add new records",
                "UPDATE: Modify existing records",
                "DELETE: Remove data",
              ],
            },
            {
              title: "Advanced SQL Concepts",
              points: [
                "Joins (INNER, LEFT, RIGHT)",
                "Group By, Order By, Limit",
                "Using WHERE clause with conditions",
              ],
            },
            {
              title: "MySQL Data Types & Constraints",
              points: [
                "VARCHAR, INT, DATE, ENUM, TEXT, etc.",
                "Primary key, Auto Increment, Foreign key",
              ],
            },
            {
              title: "User & Permission Management",
              points: [
                "Creating MySQL users and assigning roles",
                "Securing access via privileges",
              ],
            },
          ],
        },
        {
          title: "Module 3: Integrating PHP with MySQL",
          points: [
            {
              title: "Connecting PHP with MySQL",
              points: [
                "Using MySQLi and PDO extensions",
                "Establishing database connections in scripts",
              ],
            },
            {
              title: "Executing SQL Queries in PHP",
              points: [
                "Inserting, updating, and retrieving data via PHP",
                "Displaying data dynamically using loops",
              ],
            },
            {
              title: "Form Handling with MySQL Integration",
              points: [
                "Storing user form data into database",
                "Fetching and showing data in HTML tables",
                "Creating user login and registration systems",
              ],
            },
            {
              title: "Security Essentials",
              points: [
                "Using Prepared Statements to prevent SQL Injection",
                "Password hashing using password_hash() and password_verify()",
                "Session-based authentication and access control",
              ],
            },
            {
              title: "Project Work",
              points: [
                "Build a dynamic Contact Form (with DB storage)",
                "Create a CRUD-based Admin Panel",
                "Develop a Mini CMS or Blog system using PHP & MySQL",
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Course curriculum data
const courseCurriculumData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "PHP & MySQL Full Stack Course",
  tools: [
    {
      name: "PHP 8+",
      icon: "/assets/images/Php_MySql_Landing/icons/Php8_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50.6,
      companyLogoHeight: 50.34,
    },
    {
      name: "MySQL",
      icon: "/assets/images/Php_MySql_Landing/icons/MySQL-Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "Apache",
      icon: "/assets/images/Php_MySql_Landing/icons/Apache_Logo.svg",
      color: "bg-green-50",
      companyLogoWidth: 59,
      companyLogoHeight: 58,
    },
    {
      name: "phpMyAdmin",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Php_MySql_Landing/icons/PhpMyAdmin_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 56,
    },
    {
      name: "XAMPP",
      icon: "/assets/images/Php_MySql_Landing/icons/Xampp_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 136,
      companyLogoHeight: 38.86,
    },
    {
      name: "HTML",
      icon: "/assets/images/Mean_Stack_Landing/icons/html5_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50.6,
      companyLogoHeight: 50.34,
    },
    {
      name: "CSS",
      icon: "/assets/images/Mean_Stack_Landing/icons/css3-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "JavaScript (Basic)",
      icon: "/assets/images/Web_Development/icons/courses-tool/javascript-icon.svg",
      color: "bg-green-50",
      companyLogoWidth: 59,
      companyLogoHeight: 58,
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
      icon: "/assets/images/Mern_Stack_Landing/icons/VsCode_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
  ],
};

// Career prospects data
const careerProspectsData = {
  title:
    'Future Prospects of this <span className="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing the best PHP & MySQL Full Stack Course at EME Academy Mumbai, you can confidently apply for roles such as:",
  careerRoles: [
    "PHP Developer",
    "Backend Developer",
    "MySQL Database Developer",
    "Web Application Developer",
    "Full stack Web Developer (PHP)",
  ],
  salaryInfo:
    'Average Salary in India: <strong className="font-bold">₹3.5 LPA - ₹6 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Php_MySql_Landing/PhpMySqlLandingCareerProspects.svg",
  buttonText: "Check Eligibility",
};

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Ananya Paul",
      rating: 5,
      text: `"This course didn’t just teach me PHP and MySQL, but also showed me how to integrate them into full-scale projects. Now, I can say that I’m ready to apply for backend development jobs at EME Academy Mumbai!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Amit Ghosh",
      rating: 5,
      text: `"The PHP & MySQL course made coding very easy! The instructors explained concepts clearly, and the hands-on assignments have helped me to manage the databases effortlessly."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Ankita Rakshit",
      rating: 5,
      text: `"I was very confused about coding before joining. PHP sounded tough to me. But the way the EME sir explained everything line by line, it became so clear. I built my first login system in just 3 weeks! I feel so confident now."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Rohit Sharma",
      rating: 5,
      text: `"HTML CSS আগেই জানতাম, কিন্তু ডেটাবেস নিয়ে কাজ করিনি। এখন আমি পুরো ডায়নামিক ওয়েবসাইট বানাতে পারি। আমাদের ক্লাসে যেই প্রজেক্ট বানালাম, ওটাই আমার ইন্টার্নশিপে কাজে লেগেছে।"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 5,
      name: "Rakesh Dubey",
      rating: 5,
      text: `"I never knew what SQL injection was before. Now I use prepared statements and validate every form input. I work from home and do small projects for clients. Thanks to EME Academy Mumbai for showing me the practical side."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 6,
      name: "Subhojit Das",
      rating: 5,
      text: `"This is not just another course. They actually make you do everything—form handling, database connection, error fixing. Our trainer gave real industry examples and made us build mini-projects weekly."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 7,
      name: "Amiya Panja",
      rating: 5,
      text: `"I loved the internship month. I worked with a live website and got to fix real bugs. That experience made my resume strong. Now I’m working in a company as a junior dev."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

export default function page() {
  const Courses = "PHP & MySQL Course";
  const email_sender = "info@emeacademy.com";
  const Brochure =
    "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
  const BrochureName = "php_mysql_brochure.pdf";
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
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Php_MySql_Landing/PhpMySqlHeroLanding.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
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
            "750+ Students placed last year alone! Salary Ranges from ₹25,000 to ₹50,000 per month"
          }
        />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Php_MySql_Course/PhpMysqlearningMethodology.png"
        />
      </div>{" "}
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
        <Faqs faqs={faq} />
      </div>
      <CoursesLandingFooter courseName="PHP & MySQL Course" {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
