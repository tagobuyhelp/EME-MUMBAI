import AdmissionHeader from "@/components/common/AdmissionHeader";
import { Inter } from "next/font/google";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import FeaturedIn from "@/components/common/FeaturedIn";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import LearningMethodology from "@/components/common/LearningMethodology";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import PlacementSupport from "@/components/common/PlacementSupport";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CertifiedStudent from "../recentplacements/CertifiedStudent";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/digital-marketing",
  },
};

const DMfaq = [
  {
    id: 1,
    title: "Is this course for beginners in Mumbai?",
    desc: "Yes! All our courses are perfect for beginners.",
  },
  {
    id: 2,
    title:
      "What is the duration and fee structure for digital marketing courses?",
    desc: (
      <>
        <p>
          Our digital marketing courses in Mumbai range from 4 to 6 months,
          including internship. The course fees are mentioned below:
        </p>
        <p>● Advanced Digital Marketing (Facebook & Google Ads)- ₹55,000</p>
        <p>● Master Digital Marketing with AI- ₹55,000</p>
      </>
    ),
  },
  {
    id: 3,
    title: "Do I get placement support after completing the course?",
    desc: "Absolutely. We offer 100% placement assistance including job referrals, direct interview calls, resume building, and mock interviews.",
  },
  {
    id: 4,
    title: "What kind of certification will I receive?",
    desc: "After successful completion, you will receive a globally recognized certification from EME Academy Mumbai.",
  },
  {
    id: 5,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 6,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes. Our digital marketing training institute in Mumbai is built for working professionals who want to upskill without quitting their jobs.",
  },
  {
    id: 7,
    title: "Will I learn advanced tools and strategies during the course?",
    desc: "Yes. As part of our advanced digital marketing training institute in Mumbai, you’ll get hands-on experience with ChatGPT, SEMrush, Meta Ads, Google Ads, Mailchimp, WordPress, and more.",
  },
  {
    id: 8,
    title: "Will I learn to run real-world campaigns and ads?",
    desc: "Definitely! Our curriculum includes practical training where you’ll run live Facebook and Google ads, analyze results, and optimize campaigns for real clients.",
  },
  {
    id: 9,
    title: "Can I work on freelance projects after this course?",
    desc: "Yes! Our digital marketing course in Mumbai with placement also covers freelancing strategies. We’ll help you build a client-ready portfolio and pitch confidently.",
  },
  {
    id: 10,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

const inter = Inter({ subsets: ["latin"] });
const items = [
  "Live Practical Classes",
  "Free Study Materials",
  "Global Certifications",
  "15+ Portfolio Projects",
  "Dedicated Placement Cell",
  "Resume & Interview Preparation",
  "Theory+Practical Examination",
  "1:1 Mentoring",
  "Recorded Sessions & Doubt Clearing",
];

export default function page() {
  const Courses = "Digital Marketing Course";
  const SelectCourses = [
    "Advanced Digital Marketing (Facebook & Google Ads)",
    "Master Digital Marketing with AI",
  ];
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1UkM4UILziWhL-n7secspw-j4K3lFoaXP/view?usp=sharing";
  const BrochureName = "digital_marketing-brochure.pdf";
  const _this = {
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const heroData = {
    badgeText: "From Beginner to Job-Ready in Just 6 Months!",
    title:
      "Best Digital Marketing Course in Mumbai - Master SEO, Google Ads & AI Tools",
    description:
      "Upskill with EME Academy Mumbai’s Advanced and AI-Powered Digital Marketing Course in Mumbai. Learn Google Ads, Facebook Ads, Sales Funnels, AI-powered automation, SEO, WhatsApp Marketing, WordPress, and more – all in one place and earn up to ₹10 LPA!",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  const courses = [
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Digital_Marketing_Course/MainCourse/AdVDMCard1.png",
        alt: "Advanced Digital Marketing",
        width: 613,
        height: 180,
      },
      link: "/advanced-digital-marketing-certificate-course-in-mumbai",
      imageBgColor: "#005CE2",
      title: "Advanced Digital Marketing (Facebook & Google Ads)",
      description:
        "Master the art of running high-converting ad campaigns on Facebook, Instagram, and Google. Learn targeting, bidding, optimization, and retargeting strategies used by top marketers.",
      descriptionAlert:
        "Our comprehensive advanced digital marketing course in Mumbai covers all aspects, including Google Ads, Facebook Ads, and advanced strategies. Learn to drive conversions, optimize ROI, and grow your digital marketing skills with hands-on projects and industry-relevant tools.",
      hookLine:
        "Enroll now and become a certified digital marketing expert with Facebook & Google Ads mastery!",
      topics: [
        {
          title: "Fundamentals of Digital Marketing",
          subpoints: [
            "Understand key marketing concepts, channels, and strategies.",
            "Learn the difference between organic and paid marketing.",
          ],
        },
        {
          title: "Facebook & Instagram Ads",
          subpoints: [
            "Learn to create high-performing ad campaigns on Meta platforms.",
            "Use custom audiences, lookalike audiences, and pixel tracking.",
          ],
        },
        {
          title: "Google Ads",
          subpoints: [
            "Master Google Ads Manager to create search and display campaigns.",
            "Run YouTube ads and optimize video ad performance.",
          ],
        },
        {
          title: "Winning Campaign Creation & Optimization",
          subpoints: [
            "Structure campaigns for maximum ROI.",
            "Use A/B testing, landing pages, and budget management.",
          ],
        },
        {
          title: "Advanced Audience Targeting",
          subpoints: [
            "Segment and target audiences based on interests, behaviors, and demographics.",
            "Leverage remarketing techniques to re-engage lost users.",
          ],
        },
        {
          title: "Keyword Research & Ad Copywriting",
          subpoints: [
            "Use tools like SEMrush to find high-performing keywords.",
            "Write compelling headlines and CTAs to boost CTR.",
          ],
        },
        {
          title: "Retargeting & Pixel Tracking",
          subpoints: [
            "Implement Facebook Pixel and Google Tag Manager.",
            "Track conversions and behavior flow for smarter decisions.",
          ],
        },
        {
          title: "Smart Bidding Strategies",
          subpoints: [
            "Use automated and manual bidding for better cost control.",
            "Learn about CPC, CPM, and CPA models.",
          ],
        },
        {
          title: "YouTube Growth",
          subpoints: [
            "Promote channels and increase views using in-stream and bumper ads.",
            "Analyze audience retention and engagement metrics.",
          ],
        },
        {
          title: "Conversion Tracking",
          subpoints: [
            "Set up goals and events in Google Analytics.",
            "Optimize conversions by measuring ad performance effectively.",
          ],
        },
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
              <span className="line-through text-[#FF0000]">₹65,000</span>{" "}
              ₹55,000 <span className="text-[#00A51E]">after discount</span>
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
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Digital_Marketing_Course/MainCourse/AIDMCard2.png",
        alt: "Master Digital Marketing with AI",
        width: 613,
        height: 180,
      },
      link: "/diploma-in-advance-digital-marketing-courses-in-mumbai",
      imageBgColor: "#04142E",
      title: "Master Digital Marketing with AI",
      description:
        "Explore the future of digital marketing with advanced AI tools, automation, SEO, funnel building, and content strategies. Perfect for professionals, freelancers, and business owners.",
      descriptionAlert:
        "Transform your marketing approach with AI-powered tools and strategies at the best digital marketing institute in Mumbai — the EME Academy Mumbai. This course covers SEO, sales funnel optimization, and content marketing, ideal for entrepreneurs, freelancers, and professionals looking to scale their digital marketing efforts.",
      hookLine:
        "Enroll now and become a certified digital marketing expert with AI-powered skills!",
      topics: [
        {
          title: "AI-Driven Digital Marketing Fundamentals",
          subpoints: [
            "Understand how AI is transforming digital marketing.",
            "Get introduced to key AI tools and their applications.",
          ],
        },
        {
          title: "Building a Web Presence",
          subpoints: [
            "Learn to build landing pages, blogs, and microsites.",
            "Use WordPress and custom design templates.",
          ],
        },
        {
          title: "E-commerce Fundamentals",
          subpoints: [
            "Set up online stores using WooCommerce and Shopify.",
            "Learn product listings, payment gateways, and funnel analytics.",
          ],
        },
        {
          title: "Search Engine Optimization (SEO)",
          subpoints: [
            "Learn technical SEO, on-page/off-page strategies, and local SEO.",
            "Use tools like Google Search Console and Ahrefs.",
          ],
        },
        {
          title: "Sales Funnel & Conversion Strategy",
          subpoints: [
            "Understand customer journeys and build high-converting funnels.",
            "Use lead magnets, email sequences, and exit-intent popups.",
          ],
        },
        {
          title: "Advanced Copywriting & Content Marketing",
          subpoints: [
            "Master persuasive writing for blogs, ads, and landing pages.",
            "Build a content calendar and learn content repurposing.",
          ],
        },
        {
          title: "WhatsApp & Email Marketing Automation",
          subpoints: [
            "Automate campaigns using tools like Mailchimp and WhatsApp API.",
            "Build subscriber lists and segment audiences effectively.",
          ],
        },
        {
          title: "Video Sales Letters (VSLs)",
          subpoints: [
            "Script and produce engaging marketing videos.",
            "Understand voiceovers, visuals, and call-to-action placement.",
          ],
        },
        {
          title: "Online Reputation Management (ORM)",
          subpoints: [
            "Manage reviews, ratings, and brand mentions.",
            "Learn crisis handling and review responses.",
          ],
        },
        {
          title: "AI Tools for Marketing",
          subpoints: [
            "Use ChatGPT for ad copy, content generation, and customer support.",
            "Leverage AI for campaign optimization and audience insights.",
          ],
        },
        {
          title: "Google My Business (GMB) & Local Marketing",
          subpoints: [
            "Optimize listings, post updates, and collect reviews.",
            "Rank locally for location-specific queries.",
          ],
        },
        {
          title: "WordPress for Marketers",
          subpoints: [
            "Design, edit, and maintain SEO-friendly websites.",
            "Use plugins for speed, security, and form integrations.",
          ],
        },
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
              <span className="line-through text-[#FF0000]">₹65,000</span>{" "}
              ₹55,000 <span className="text-[#00A51E]">after discount</span>
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
    courseName: "Prompt Engineering with AI Course",
    tools: [
      {
        name: "Facebook Ads",
        icon: "/assets/images/Digital_Marketing_Landing/icons/facebook-ads-logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Canva",
        icon: "/assets/images/Digital_Marketing_Landing/icons/canva-logo.png",
        color: "bg-pink-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Hootsuite",
        icon: "/assets/images/Digital_Marketing_Landing/icons/hootsuite-ads.png",
        color: "bg-gray-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "ahrefs",
        icon: "/assets/images/Digital_Marketing_Landing/icons/ahers-logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "BuzzSumo",
        icon: "/assets/images/Digital_Marketing_Landing/icons/buzzsumo-logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "LinkedIn",
        icon: "/assets/images/Digital_Marketing_Landing/icons/LinkedIn-logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Reddit",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Reddit-Logo.png",
        color: "bg-orange-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Google Ads",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Google_Ads_logo.png",
        color: "bg-yellow-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Piktochart",
        icon: "/assets/images/Digital_Marketing_Landing/icons/piktochart-logo.png",
        color: "bg-green-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Instagram",
        icon: "/assets/images/Digital_Marketing_Landing/icons/instagram.png",
        color: "bg-pink-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "OpenAI",
        icon: "/assets/images/Digital_Marketing_Landing/icons/OpenAI_Logo.png",
        color: "bg-gray-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "SEMrush",
        icon: "/assets/images/Digital_Marketing_Landing/icons/semrush-logo.png",
        color: "bg-orange-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "SpinRewriter",
        icon: "/assets/images/Digital_Marketing_Landing/icons/spinrewriter-logo.png",
        color: "bg-yellow-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Meta",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Meta-Logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "MOZ",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Moz_logo.png",
        color: "bg-indigo-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Majestic SEO",
        icon: "/assets/images/Digital_Marketing_Landing/icons/majesticseo-logo.png",
        color: "bg-green-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "WordPress",
        icon: "/assets/images/Digital_Marketing_Landing/icons/WordPress-logo.png",
        color: "bg-gray-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Google Trends",
        icon: "/assets/images/Digital_Marketing_Landing/icons/google-trends-logo.png",
        color: "bg-yellow-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Google Analytics",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Google-Analytics-Logo.png",
        color: "bg-orange-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Yoast",
        icon: "/assets/images/Digital_Marketing_Landing/icons/yoast-logo.png",
        color: "bg-green-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "ChatGPT",
        icon: "/assets/images/Digital_Marketing_Landing/icons/ChatGpt-logo.png",
        color: "bg-gray-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Mailchimp",
        icon: "/assets/images/Digital_Marketing_Landing/icons/mailchimp-logo.png",
        color: "bg-yellow-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Jetpack",
        icon: "/assets/images/Digital_Marketing_Landing/icons/jetpack-logo.png",
        color: "bg-green-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "WPForms",
        icon: "/assets/images/Digital_Marketing_Landing/icons/WPForms-Logo.png",
        color: "bg-blue-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Filmora",
        icon: "/assets/images/Digital_Marketing_Landing/icons/filmora-logo.png",
        color: "bg-gray-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Grammarly",
        icon: "/assets/images/Digital_Marketing_Landing/icons/grammarly-logo.png",
        color: "bg-green-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
      {
        name: "Quora",
        icon: "/assets/images/Digital_Marketing_Landing/icons/Quora-Logo.png",
        color: "bg-red-50",
        companyLogoWidth: 140,
        companyLogoHeight: 60,
      },
    ],
  };

  const careerProspectsData = {
    title:
      'Career Prospects & <span class="text-[#f97316]">Future Opportunities</span>',
    subtitle:
      "After completing our Digital Marketing Course in Mumbai, you will unlock diverse career opportunities:",
    careerRoles: [
      "Digital Marketing Executive",
      "DEO/PPC Specialist",
      "Social Media Manager",
      "Content Marketer",
      "Marketing Automation Specialist",
      "Freelancer/ Entrepreneur",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹4 - 12 LPA</strong> (as per industry standard)',
    image: "/assets/images/Digital_Marketing_Landing/CareerProspectsDM.webp",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Arindam Chatterjee",
        rating: 5,
        text: `"This course helped me understand digital marketing from scratch. The lessons are easy to follow, and the practical exercises are very useful. The faculty is really good here!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Amit",
        rating: 5,
        text: `"এই কোর্সে যোগ দেওয়ার আগে, আমি Digital Marketing সম্পর্কে কিছুই জানতাম না। কিন্তু Advanced Digital Marketing with Facebook & Google Ads কোর্সটি করে আমি এখন নিজের ব্যবসার জন্য সফলভাবে অ্যাড ক্যাম্পেইন চালাতে পারছি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Sourav Banerjee",
        rating: 5,
        text: `"I learned so much about social media marketing and SEO. This is really the best institute for digital marketing in Mumbai. The instructors at EME Academy Mumbai are really genius. They explained everything clearly and made it simple to apply in real life."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Sneha Kaur",
        rating: 5,
        text: `"Facebook & Google Ads নিয়ে আগে অনেক কনফিউশন ছিল, কিন্তু কোর্সের পর আমি এখন নিজের ক্লায়েন্টদের জন্য সফল ক্যাম্পেইন চালাচ্ছি। Advanced Digital Marketing with Facebook & Google Ads আমার ক্যারিয়ারের টার্নিং পয়েন্ট!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Sayantika Ghosh",
        rating: 5,
        text: `"Great course for beginners! The step-by-step guidance helped me build my own digital marketing strategies. Highly recommended."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Farhan Mallik",
        rating: 5,
        text: `"এই কোর্সের Winning Campaign Creation এবং Audience Targeting সেকশনগুলো আমার জন্য সবচেয়ে উপকারী ছিল। এখন আমি পেশাদার লেভেলের অ্যাড রান করতে পারি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Ritwik",
        rating: 5,
        text: `"The course covers everything, from content creation to ads. I feel more confident about starting my career in digital marketing now."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Ritika Paul",
        rating: 5,
        text: `"ইন্টার্নশিপের সময় আমি রিয়েল প্রোজেক্টে কাজ করেছি, যা আমার আত্মবিশ্বাস অনেক বাড়িয়ে দিয়েছে। Advanced Digital Marketing with Facebook & Google Ads কোর্সটি সত্যিই জীবন পরিবর্তনকারী!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Debanjana Mukherjee",
        rating: 5,
        text: `"I love how interactive the classes are at EME Academy Mumbai. This is really the best institute for digital marketing in Mumbai. The real-world examples make it easier to understand the concepts."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Avijit",
        rating: 5,
        text: `"ইন্টার্নশিপের সময় আমি রিয়েল প্রোজেক্টে কাজ করেছি, যা আমার আত্মবিশ্বাস অনেক বাড়িয়ে দিয়েছে। Advanced Digital Marketing with Facebook & Google Ads কোর্সটি সত্যিই জীবন পরিবর্তনকারী!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 11,
        name: "Bishal Sengupta",
        rating: 5,
        text: `"Pixel Tracking, Retargeting এবং Bidding Strategy-এর মতো অ্যাডভান্সড টেকনিক শিখে এখন আমি কম খরচে ভালো রেজাল্ট আনতে পারছি। এটি মুম্বাইয়ের সেরা Digital Marketing কোর্স!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 12,
        name: "Priyanka Bhattacharya",
        rating: 5,
        text: `"I had zero knowledge of digital marketing, but now I can run social media campaigns on my own. The trainers are very supportive. Mumbai's best digital marketing institute."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 13,
        name: "Kunal",
        rating: 5,
        text: `"এই কোর্সের AI-Powered Marketing Automation মডিউলটি আমাকে সময় বাঁচাতে ও মার্কেটিং আরও এফেক্টিভ করতে শিখিয়েছে। Master Digital Marketing with AI কোর্সটি করে আমি এখন একটি মাল্টিন্যাশনাল কোম্পানির জন্য কাজ করছি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 14,
        name: "Tanvi",
        rating: 5,
        text: `"AI-ভিত্তিক মার্কেটিং কিভাবে কাজ করে, তা জানতাম না। কিন্তু Master Digital Marketing with AI কোর্সটি করে আমি এখন Automation, ChatGPT এবং AI Tools ব্যবহার করে সহজেই কনটেন্ট তৈরি করতে পারছি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 15,
        name: "Somali",
        rating: 5,
        text: `"Affordable and worth every penny! I got clarity on SEO, PPC, and content marketing, which I always found confusing before."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 16,
        name: "Swagata Roy",
        rating: 5,
        text: `"This course gave me the skills to start freelancing. I have already completed my first few projects."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 17,
        name: "Rajesh Tiwari",
        rating: 5,
        text: `"E-commerce Marketing ও Advanced Funnel Building শিখে আমি আমার অনলাইন বিজনেস ৩ গুণ স্কেল করতে পেরেছি! Master Digital Marketing with AI আমার ক্যারিয়ারে বিশাল প্রভাব ফেলেছে।"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 18,
        name: "Tuli Dey",
        rating: 5,
        text: `"ই কোর্সটি AI এবং Digital Marketing-এর মধ্যে পারফেক্ট ব্যালান্স তৈরি করেছে। Master Digital Marketing with AI এর ইন্টার্নশিপ প্রোগ্রামে কাজ করার অভিজ্ঞতা আমাকে অনেক বড় সুযোগ এনে দিয়েছে।"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  const alumniStudents = [
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
      className={`${inter.className} flex flex-col justify-start items-center w-full min-h-screen`}
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('/assets/images/Digital_Marketing_Landing/DMHero.webp')] xs:h-[460px] md:h-[555px] bg-cover bg-center bg-no-repeat">
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

      <div id="CourseCurriculum" className="flex justify-center bg-[#ffffff]">
        <CourseDetailsGrid
          title="Explore the Best Digital Marketing"
          subtitle="Course in Mumbai"
          brochureInfo={{
            Courses: "Digital Marketing Course",
            email_sender: "ALL",
            Brochure:
              "/assets/documents/AllCourseBrochure/Digital_Marketing_Brochure.pdf",
            BrochureName: "digital_marketing-brochure.pdf",
          }}
          courses={courses}
          thisObject={_this}
        />
      </div>
      <div
        id="about"
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <FeaturedIn {..._this} />
      </div>
      <div id="CourseTool" className="flex justify-center bg-[#ffffff]">
        <CoursesCurriculum {...toolsData} {..._this} />
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

      <div id="CourseProspects" className="flex w-full p-6">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>

      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <LearningMethodology
          {..._this}
          items={items}
          backgroundImage="/assets/images/Digital_Marketing_Landing/DMLearningMethodology.webp"
        />
      </div>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>

      <div id="testimonials" className="flex w-full  bg-white">
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
        <Faqs faqs={DMfaq} />
      </div>
      <CoursesLandingFooter courseName="Digital Marketing Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
