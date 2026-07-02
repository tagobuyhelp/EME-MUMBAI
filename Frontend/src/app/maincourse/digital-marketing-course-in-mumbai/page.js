import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Awards from "@/components/common/Awards";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import { Footer } from "@/components/common/Footer";
import PlacementSupport from "@/components/common/PlacementSupport";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "@/app/recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";
import CourseModules from "@/components/global/CourseModules";
import WhoShouldEnroll from "@/components/global/WhoShouldEnroll";
import WhatYouWillDo from "@/components/global/WhatYouWillDo";

export const metadata = {
  title:
    "Digital Marketing Course in Mumbai | SEO & Ads Training",
  description:
    "Enroll in the Best Digital Marketing Course in Mumbai. Learn SEO, Google Ads, Meta Ads & AI tools with placement support.",
  keywords: [
    "best digital marketing course in Mumbai",
    "digital marketing institute in Mumbai",
    "digital marketing course with placement in Mumbai",
    "advanced digital marketing course in Mumbai",
    "digital marketing course for beginners Mumbai",
    "google ads course in Mumbai",
    "facebook ads course in Mumbai",
    "SEO course in Mumbai",
    "digital marketing course with certificate Mumbai",
    "digital marketing course fees Mumbai",
    "AI digital marketing course Mumbai",
    "social media marketing course Mumbai",
    "digital marketing course for freshers Mumbai",
    "digital marketing course for working professionals Mumbai",
    "PPC course in Mumbai",
    "content marketing course Mumbai",
    "digital marketing freelancing course Mumbai",
    "wordpress course Mumbai",
    "digital marketing course online Mumbai",
    "best digital marketing institute western India",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/maincourse/digital-marketing-course-in-mumbai",
  },
};

// Hero data
const heroData = {
  badgeText: "From Beginner to Job-Ready in Just 6 Months!",
  title: "Best Digital Marketing Course in Mumbai - Learn SEO, Meta Ads & AI Marketing",
  secondSubtitle: "AI-Powered Training + 100% Placement Support in Mumbai",
  description:
    "Stop just consuming content and start monetizing it. Upskill with EME Academy’s Advanced Digital Marketing Course in Mumbai. Master Technical SEO, Google & Meta Ads, AI-powered automation, sales funnels, and WordPress—all in one place. Built strictly around live campaigns and actual performance marketing strategies, we offer the most reliable Digital Marketing Course with Placement in Mumbai. Step out of the classroom, build an undeniable portfolio, and unlock tech-driven marketing roles earning up to ₹10 LPA!",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
  ctaRatingsLabel: "Download Syllabus & Brochure →",
};

const toolsData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "Digital Marketing Course",
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
    'High-Paying Agency Roles <span class="text-[#f97316]">You Will Dominate</span>',
  subtitle:
    "Brands are not looking for average textbook graduates; they want marketers who can execute live campaigns and drive measurable ROI. Whether you are stepping into the industry through our Digital Marketing Course for Freshers Mumbai or scaling up your current salary bracket with our Digital Marketing Course for Working Professionals Mumbai, graduating from the premier Digital Marketing Institute in Mumbai opens the doors to the most lucrative roles in the corporate world.",
  careerRoles: [
    "SEO & Search Visibility Expert: Command local search rankings and master technical SEO.",
    "PPC & Performance Marketing Specialist: Manage brand budgets and maximize conversions.",
    "Social Media & Community Manager: Engineer viral hooks and dominate platform algorithms.",
    "AI-Driven Content Marketer: Scale your output with LLMs and AI automation.",
    "Freelancer / Solo Agency Owner: Design high-converting landing pages and build your agency.",
    "Marketing Automation Specialist: Build WhatsApp sales funnels and CRM integrations.",
  ],
  salaryInfo:
    "Average Salary in India: ₹4 - 12 LPA (As per industry standards.) Backed by a globally recognized Digital Marketing Course with a Certificate in Mumbai, your earning potential is virtually limitless. Don't wait for opportunities—create them.",
  image: "/assets/images/Digital_Marketing_Landing/CareerProspectsDM.webp",
  buttonText: "Download Free Career Guide & Brochure",
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

const DMfaq = [
  {
    id: "1",
    title: "I have zero marketing experience. Is this course right for me?",
    desc: "Absolutely. We don't expect you to know the algorithm on day one. Our Digital Marketing Course for Beginners Mumbai takes you from absolute scratch to advanced campaign execution. We build your foundational knowledge first, making it the ultimate Digital Marketing Course for Freshers Mumbai looking to launch a high-paying career.",
  },
  {
    id: "2",
    title: "Will I learn practical skills or just textbook theory?",
    desc: "We despise outdated textbook theory. As the provider of the Best Digital Marketing Course in Mumbai, we operate like a live marketing agency. You will build actual sales funnels, spend real ad budgets, and analyze live website traffic through our Advanced Digital Marketing Course Mumbai. You graduate with a portfolio, not just notes.",
  },
  {
    id: "3",
    title: "I work a 9-to-5 job. Can I still enroll without quitting?",
    desc: "Yes. We specifically engineered our Digital Marketing Course for Working Professionals Mumbai to adapt to busy corporate schedules. We offer highly flexible weekend batches, evening sessions, and a fully interactive Digital Marketing Course Online Mumbai format so you can upskill seamlessly.",
  },
  {
    id: "4",
    title: "How does your placement assistance actually work?",
    desc: "We measure our success by your offer letters. Recognized for offering the most aggressive Digital Marketing Course with Placement Mumbai has to offer, our dedicated career cell actively optimizes your resume, conducts rigorous mock client pitches, and routes your profile directly to our network of 50+ hiring agencies.",
  },
  {
    id: "5",
    title: "Do you teach paid advertising like Meta and Google Ads?",
    desc: "100%. You won't just learn what a click is; you will learn how to drive high-converting traffic. Our program includes an intensive Google Ads Course in Mumbai and a deep-dive Facebook Ads Course in Mumbai. You will master bidding strategies, retargeting, and audience psychology, making this a complete, high-level PPC Course in Mumbai.",
  },
  {
    id: "6",
    title: "Will I learn how to rank websites on Google?",
    desc: "Yes! Organic traffic is the lifeblood of modern brands. Our curriculum includes a comprehensive SEO Course in Mumbai that goes far beyond basic keywords. You will master technical site health, backlink strategies, and Generative Engine Optimization (GEO) to dominate the search results.",
  },
  {
    id: "7",
    title: "Does this program cover the latest AI marketing tools?",
    desc: "The industry is evolving, and generic marketers are being replaced. This is a premier AI Digital Marketing Course Mumbai. You will learn to leverage Large Language Models (LLMs), AI automation, and advanced prompt engineering to scale your output, perfectly complementing our modern Content Marketing Course Mumbai.",
  },
  {
    id: "8",
    title: "Can I start my own freelance business after graduating?",
    desc: "Definitely. Many of our students choose the entrepreneurial route. We teach you how to build custom client websites from scratch through our WordPress Course Mumbai, and how to package and sell your services, making this the perfect Digital Marketing Freelancing Course Mumbai.",
  },
  {
    id: "9",
    title: "What is the cost of the program, and do you offer EMI?",
    desc: "We believe elite, agency-level education should be accessible. We maintain highly transparent and competitive Digital Marketing Course Fees Mumbai, with options starting at ₹55,000 after discounts. We also provide zero-interest, No-Cost EMI options so you can focus entirely on your campaigns instead of your finances.",
  },
  {
    id: "10",
    title: "Will I receive an industry-recognized certificate?",
    desc: "Yes. You will graduate from the leading Digital Marketing Institute in Mumbai with a prestigious Digital Marketing Course with Certificate Mumbai. Furthermore, we rigorously prepare you to clear official Google, HubSpot, and Meta blueprint certifications, making you an undeniable asset to the Best Digital Marketing Institute in Western India and beyond.",
  },
];

const courses = [
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Digital_Marketing_Course/MainCourse/AdVDMCard1.png",
      alt: "Advanced Digital Marketing (Facebook & Google Ads)",
      width: 613,
      height: 180,
    },
    link: "/advanced-digital-marketing-certificate-course-in-mumbai",
    imageBgColor: "#005CE2",
    title: "Advanced Digital Marketing (Facebook & Google Ads)",
    description: "The Ultimate PPC Course in Mumbai & Social Media Marketing Course Mumbai",
    hookLine: "Stop wasting ad spend. Master Meta & Google Ads for massive ROI.",
    descriptionAlert:
      "Master the exact Meta Ads strategies, audience targeting, and Google PPC bidding systems that drive massive ROI. Go beyond the basics by learning how to craft viral short-form video hooks and optimize technical website health. This intensive track serves as a complete Facebook Ads Course in Mumbai and Google Ads Course in Mumbai.",
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
            <span className="text-[#00A51E]">Save ₹10,000/-</span>
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
    description: "Premier AI Digital Marketing Course Mumbai & Content Marketing Course Mumbai",
    hookLine: "Future-proof your career with AI-powered marketing and SEO.",
    descriptionAlert:
      "Learn to seamlessly integrate Large Language Models (LLMs), AI humanizer tools, and advanced prompt engineering to scale your content output. This track includes an elite SEO Course in Mumbai covering foundational rankings to cutting-edge Generative Engine Optimization (GEO). It is the perfect Digital Marketing Freelancing Course Mumbai for those looking to build a solo agency.",
    topics: [
      {
        title: "AI-Driven Digital Marketing Fundamentals",
        subpoints: [
          "Understand how AI is transforming digital marketing.",
          "Get introduced to key AI tools and their applications.",
        ],
      },
      {
        title: "Search Engine Optimization (SEO)",
        subpoints: [
          "Technical SEO, on-page/off-page, and local SEO.",
          "Generative Engine Optimization (GEO) fundamentals.",
        ],
      },
      {
        title: "AI Tools for Marketing",
        subpoints: [
          "Use ChatGPT for ad copy, content, and customer support.",
          "Leverage LLMs for campaign optimization.",
        ],
      },
      {
        title: "Freelance Domination",
        subpoints: [
          "Build high-converting landing pages.",
          "Package and sell your services as a solo agency.",
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
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">Save ₹10,000/-</span>
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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Digital Marketing Course",
    description: "Enroll in the Digital Marketing Course in Mumbai at EME Academy and master SEO, Google Ads, Meta Ads, AI tools, and WordPress with hands-on live campaign training. Includes placement support and industry-recognized certification.",
    provider: {
      "@type": "Organization",
      name: "EME Academy",
      sameAs: "https://mumbai.emeacademy.co.in"
    }
  };

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <AnotherHeader />

      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Digital_Marketing_Course/MainCourse/DigitalMarketingMainCourseHero.webp')] xs:h-[460px] md:h-[555px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          title="EME Academy Alumni Are Placed at India's Top Companies"
          brochure={Brochure}
          brochureName={BrochureName}
          SelectCourses={SelectCourses || []}
        />
      </div>
      <div className="flex justify-center bg-[#ffffff]">
        <CourseDetailsGrid
          title="Choose Your Arsenal: Specialized Digital Marketing"
          subtitle="Courses in Mumbai"
          description="Don't just learn outdated theory. Learn the exact technical frameworks, high-converting ad strategies, and automation tactics used by top-tier marketing agencies. Whether you want to master performance marketing or future-proof your career with artificial intelligence, we have the ultimate blueprint."
          brochureInfo={{
            Courses: "Digital Marketing Course",
            email_sender: "info@emeacademy.com",
            Brochure:
              "/assets/documents/AllCourseBrochure/Digital_Marketing_Brochure.pdf",
            BrochureName: "digital_marketing-brochure.pdf",
          }}
          courses={courses}
          thisObject={_this}
        />
      </div>

      {/* NEW: Explore Our Digital Marketing Course Modules */}
      <div className="flex justify-center bg-[#ffffff]">
        <CourseModules />
      </div>

      {/* NEW: Who Should Enroll */}
      <div className="flex justify-center bg-white border-t border-gray-100">
        <WhoShouldEnroll />
      </div>

      <div className="flex justify-center bg-[#ffffff]">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>
      <div id="CourseProspects" className="flex w-full p-6">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <FeaturedIn {..._this} />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport 
          {..._this} 
          mode="digital-marketing"
          badge="Career Excellence"
          title="100% Dedicated Placement Support to Launch Your Agency Career"
          description="We don't just teach you how to run ads; we teach you how to get hired. As the premier Digital Marketing Institute in Mumbai, our commitment to your success doesn't end with a certificate. When you enroll in our Digital Marketing Course with Placement in Mumbai, you unlock an elite, career-building ecosystem designed to bypass the traditional HR queue and place you directly in front of top agency directors and corporate recruiters."
          customFeatures={[
            {
              id: 1,
              title: "Resume & LinkedIn Optimization",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft job-ready, ATS-friendly professional marketing resumes.",
                "Recruiter-focused LinkedIn profile optimization.",
                "Strategic campaign, ROI, and skill showcasing."
              ],
            },
            {
              id: 2,
              title: "Analytical Aptitude Training",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily data interpretation & reasoning practice.",
                "Full-length analytical mock tests for top-tier agencies.",
                "Speed and accuracy enhancement for media buying math."
              ],
            },
            {
              id: 3,
              title: "Interview Mastery",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous HR and technical marketing mocks.",
                "Personalized performance feedback from senior strategists.",
                "Real-world client pitch and campaign scenario prep."
              ],
            },
            {
              id: 4,
              title: "Expert Career Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling tailored to your specific niche.",
                "Insider insights on the latest algorithm updates & hiring trends.",
                "Professional salary negotiation tactics to maximize your CTC."
              ],
            },
            {
              id: 5,
              title: "Elite Hiring Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium marketing and agency hiring partners.",
                "Exclusive access to our internal, unlisted job portal.",
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
                "Develop real-world, data-backed capstone campaigns.",
                "Guided, mentor-led case study development.",
                "Build an employer-ready showcase proving your actual ROI generation."
              ],
            },
          ]}
        />
      </div>

      {/* NEW: What You Will Be Able to Do */}
      <WhatYouWillDo />

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
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="/assets/images/Digital_Marketing_Landing/DMLearningMethodology.webp"
        />
      </div>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert 
          {..._this} 
          buttonText="Download Detailed Brochure →" 
          title="Stop Guessing. Start Executing. Talk to a Career Expert!"
          description="Whether you need a flexible Digital Marketing Course Online Mumbai format or intense classroom training, we will help you map out the exact path to hit your salary goals with the Best Digital Marketing Institute in Western India."
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
          buttonText="Download Complete Brochure" 
          title="Ready to Build a Marketing Career?"
          description="Review our transparent Digital Marketing Course Fees Mumbai, and see exactly how our globally recognized Digital Marketing Course with Certificate Mumbai can fast-track your journey into top-tier MNCs."
        />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>
      <div className="w-full bg-gradient-to-r bg-[#F4FBFE] mt-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-8">
          {/* DM Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              The EME Advantage: Why We Are the Best Digital Marketing Institute in Western India
            </h2>
            <p>
              Breaking into the digital ecosystem requires more than just reading blog posts. You need hands-on exposure, agency-level infrastructure, and aggressive industry backing. Here is exactly why ambitious professionals choose EME Academy for the most High-ROI Digital Marketing Course in Mumbai.
            </p>
            <p>
              <strong>100% Agency-Style Execution -</strong> We despise outdated textbook theory. You will build actual sales funnels, spend real ad budgets, and analyze live website traffic through our Advanced Digital Marketing Course Mumbai.
            </p>
            <p>
              <strong>Advanced AI Integration -</strong> Master the latest LLMs and AI automation tools to scale content, optimize bidding, and dominate the modern marketing landscape through our AI Digital Marketing Course Mumbai.
            </p>
            <p>
              <strong>Strategic Portfolio Building -</strong> Graduate with a track record of live case studies, sales funnels, and ranking reports that prove to employers you are workforce-ready from day one.
            </p>
            <p>
              <strong>Unrivaled Placement Assistance -</strong> Recognized for offering the most aggressive Digital Marketing Course with Placement Mumbai relies on, we route your profile directly to our network of 50+ hiring agencies.
            </p>
          </section>

          {/* Recognized Section */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              Recognized by Experts, Proven by Results
            </h2>
            <p>
              Excellence That Speaks for Itself. Celebrated nationwide for educational excellence, EME Academy was crowned as the <strong>Best Placement Institute of the Year – 2024</strong> (Leadership Award presented by India News Business & NewsX). We are proud to be certified by <strong>MSME | ISO | #startupindia</strong>, ensuring your credentials carry global weight.
            </p>
          </section>

          <Faqs faqs={DMfaq} />
        </div>
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
