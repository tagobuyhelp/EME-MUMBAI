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
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

export const metadata = {
  title: "WordPress Course In Mumbai With 100% Practical Projects",
  description:
    "Join Best wordpress developer course in mumbai at wordpress training institute in mumbai with 100% practical projects and expert development training.",
  keywords: [
    "Best wordpress developer course in mumbai",
    "wordpress training institute in mumbai",
    "WordPress Course In Mumbai With 100% Practical Projects",
    "Wordpress Development Training Institute in Mumbai",
    "Best wordpress developer course in mumbai fees",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/wordpress-training-institute-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title:
      "Is this WordPress Developer Course suitable for beginners in Mumbai?",
    decs: "Yes, absolutely. The course is designed from the ground up—starting with the basics of CMS and PHP. Even students without any technical background can learn WordPress comfortably.",
  },
  {
    id: 2,
    title:
      "What is the duration and fee structure of the WordPress Development Course?",
    decs: "The course lasts for 4 months. The original fee is ₹65,000, but after discount, it is ₹55,000. EMI options are available with 0% interest.",
  },
  {
    id: 3,
    title: "Will I get a certificate after completing the course?",
    decs: "Yes. You will receive an industry-recognized WordPress Developer Certificate from EME Academy, which adds great value to your resume and freelance profile.",
  },
  {
    id: 4,
    title: "What tools and technologies will I learn?",
    decs: "You will learn WordPress, PHP basics, Elementor, WooCommerce, cPanel, Google Analytics, SEO plugins like RankMath and Yoast, FTP clients, and Local server setup tools.",
  },
  {
    id: 5,
    title: "Do you offer 100% placement support?",
    decs: "Yes. We provide resume building, LinkedIn profile optimization, mock interviews, job portal guidance, and real client internship referrals.",
  },
  {
    id: 6,
    title: "Is there a free demo class?",
    decs: "Definitely. You can book a free demo class online or by calling our support team. You'll experience our teaching approach and get your questions answered.",
  },
  {
    id: 7,
    title: "Will I be able to freelance after this course?",
    decs: "Yes. You'll complete real-world projects and build your portfolio, which helps in getting freelance clients via Fiverr, Upwork, or local businesses.",
  },
  {
    id: 8,
    title: "Do I need any prior coding knowledge?",
    decs: "No. We start from the basics, making it perfect for beginners, non-tech students, and entrepreneurs.",
  },
  {
    id: 9,
    title: "Are flexible batch timings available?",
    decs: "Yes. We offer weekday and weekend batches (morning & evening) to suit students and working professionals.",
  },
  {
    id: 10,
    title: "What if I miss a class or need revision?",
    decs: "All classes are recorded and given to you with lifetime access. We also provide live doubt-clearing sessions and personal mentorship.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    decs: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

// Hero data
const heroData = {
  badgeText: "Build Stunning Websites with WordPress in Just 4 Months!",
  title: "Best WordPress Developer Course in Mumbai – 100% Practical Projects",
  description:
    "Join EME Academy Mumbai, the most trusted WordPress training institute in Mumbai. Learn everything from scratch (WordPress setup, theme customization, plugin development, SEO, and eCommerce integration) through real-world projects guided by industry experts.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Course details data
const courseDetailsData = {
  courseName: "WordPress Development Full Stack Course",
  subtitle:
    "Enroll now and become a certified WordPress developer with hands-on projects!",
  courseData: [
    {
      id: 1,
      title: "WordPress Development Course Details",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Landing/WordpressDevelopmentLandingCourseDetails.png",
      description:
        "Get certified with one of the most practical WordPress courses in Mumbai. Learn theme development, plugin creation, SEO, WooCommerce integration, and more through real-world projects.",
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
        "Join the Best WordPress Training Institute in Mumbai with Placement Support.",
      topics: [
        {
          title: "Introduction to WordPress",
          points: [
            "Overview of WordPress and CMS",
            "Installing WordPress locally and on live servers",
            "Understanding WordPress file structure and dashboard",
          ],
        },
        {
          title: "Basic PHP for WordPress",
          points: [
            "Variables, loops, arrays, and functions",
            "Integrating PHP logic with WordPress templates",
          ],
        },
        {
          title: "Theme Development & Customization",
          points: [
            "Creating child themes",
            "Editing headers, footers, and templates",
            "Adding navigation menus, widgets, and sidebars",
          ],
        },
        {
          title: "Plugin Development",
          points: [
            "Structure of WordPress plugins",
            "Creating custom shortcodes, widgets, and admin settings",
            "Using hooks and filters effectively",
          ],
        },
        {
          title: "SEO Optimization & Analytics",
          points: [
            "Meta tags, keywords, permalinks",
            "SEO plugins: RankMath, Yoast",
            "Google Analytics integration",
          ],
        },
        {
          title: "E-commerce with WooCommerce",
          points: [
            "Installing and setting up WooCommerce",
            "Product listings, payment gateways, cart & checkout pages",
            "Coupon codes, shipping, and tax settings",
          ],
        },
        {
          title: "Website Security & Backup",
          points: [
            "Setting up SSL, Captcha, and firewall",
            "Backup plugins and restore strategies",
          ],
        },
        {
          title: "Hosting & Deployment",
          points: [
            "Domain registration, cPanel, and FTP",
            "Website migration and optimization",
          ],
        },
      ],
    },
  ],
};

// Tools & Technologies data
const courseCurriculumData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "WordPress Development Full Stack Course",
  tools: [
    {
      name: "WordPress",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Landing/icons/WordPress_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50.6,
      companyLogoHeight: 50.34,
    },
    {
      name: "Elementor",
      icon: "/assets/images/Wordpress_Development_Landing/icons/Elementor_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "WooCommerce",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Landing/icons/woocommerce_logo.svg",
      color: "bg-green-50",
      companyLogoWidth: 59,
      companyLogoHeight: 58,
    },
    {
      name: "PHP",
      icon: "/assets/images/Wordpress_Development_Landing/icons/php_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 56,
    },
    {
      name: "MySQL",
      icon: "/assets/images/Php_MySql_Landing/icons/MySQL-Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 139,
      companyLogoHeight: 56,
    },
    {
      name: "cPanel",
      icon: "/assets/images/Wordpress_Development_Landing/icons/cpanel_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 136,
      companyLogoHeight: 38.86,
    },
    {
      name: "RankMath",
      icon: "/assets/images/Wordpress_Development_Landing/icons/rank_math_logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 151,
      companyLogoHeight: 50,
    },
    {
      name: "Yoast SEO",
      icon: "/assets/images/Wordpress_Development_Landing/icons/Yoast_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 89,
      companyLogoHeight: 48,
    },
    {
      name: "Google Analytics",
      icon: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Landing/icons/Logo_Google_Analytics.svg",
      color: "bg-blue-50",
      companyLogoWidth: 89,
      companyLogoHeight: 48,
    },
    {
      name: "Local by Flywheel",
      icon: "/assets/images/Wordpress_Development_Landing/icons/Local-by-Flywheel.svg",
      color: "bg-blue-50",
      companyLogoWidth: 51.04,
      companyLogoHeight: 51,
    },
    {
      name: "FTP Clients",
      icon: "/assets/images/Wordpress_Development_Landing/icons/Ftp_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 102,
      companyLogoHeight: 36,
    },
    {
      name: "Page Builders",
      icon: "/assets/images/Wordpress_Development_Landing/icons/Page_Builder_Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 102,
      companyLogoHeight: 36,
    },
  ],
};

// Career prospects data
const careerProspectsData = {
  title:
    'Future Prospects of this <span class="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing the best WordPress developer course in Mumbai at EME Academy Mumbai, you can confidently apply for roles such as:",
  careerRoles: [
    "Wordpress Developer",
    "Website Administrator",
    "Freelance Web Developer",
    "E-commerce Site Manager",
    "Theme & Plugin Developer",
  ],
  salaryInfo:
    'Average Salary in India: <strong class="font-bold">₹3.5 LPA - ₹8 LPA</strong> (as per industry standard)',
  image:
    "/assets/images/Wordpress_Development_Landing/WordpressDevelopmentLandingCareerProspects.svg",
  buttonText: "Check Eligibility",
};

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Rohit Pal",
      rating: 5,
      text: `"আমি ভাবতাম website বানানো খুব কঠিন। কিন্তু EME Academy Mumbai-তে ভর্তি হওয়ার পর বুঝলাম—ভালো শেখালে সবকিছু সহজ হয়। এখন আমি freelancer হয়ে WordPress site বানাচ্ছি।"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Amrit Ghosh",
      rating: 5,
      text: `"The WordPress course helped me learn everything step by step. I knew nothing before. Now I create custom plugins and manage WooCommerce stores for clients!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Ankita Bhaduri",
      rating: 5,
      text: `"I got a job within 1 month after completing the course. The live projects and interview preparation gave me the confidence I needed."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Ankita Chakraborty",
      rating: 5,
      text: `"Coding নিয়ে আমার কোনও ধারণা ছিল না। কিন্তু এখানে সব কিছু খুব সহজ ভাষায় শেখানো হয়। SEO, plugin, WooCommerce, সব কিছু শিখেছি।"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 5,
      name: "Rakesh Chakraborty",
      rating: 5,
      text: `"This course is really practical. We worked on real client websites during training. That helped me build a strong portfolio for freelance work."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 6,
      name: "Rinki Manna",
      rating: 5,
      text: `"The teachers are so patient. They cleared all my doubts, even small ones. I never felt shy to ask anything. Loved the environment!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 7,
      name: "Ria Panja",
      rating: 5,
      text: `"EME Academy Mumbai’s WordPress course changed my career. I was doing a data entry job. Now I’m working as a junior WordPress developer in a tech company."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 8,
      name: "Elina Roy",
      rating: 5,
      text: `"I loved learning with Elementor and RankMath. I used to build websites just for fun, but now I charge ₹10,000+ per project!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

export default function page() {
  const Courses = "Wordpress Development Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
  const BrochureName = "wordpress_development_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main
      className={` flex flex-col justify-start items-center w-full min-h-screen `}
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Landing/WordpressHeroLanding.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
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
          students={alumniStudents}
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
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Wordpress_Development_Course/WordpressLearningMethodology.png"
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
        <Faqs faqs={faq} />
      </div>
      <CoursesLandingFooter courseName="Wordpress Development Course" {..._this} />

      <StickyCTAButton {..._this} />
    </main>
  );
}
