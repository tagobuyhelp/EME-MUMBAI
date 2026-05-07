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
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/common/CtaButton";
import DMShortsCarousel from "./DMShortsCarousel";
import DMFinalSupportSection from "./DMFinalSupportSection";

export const metadata = {
    title: "Best Digital Marketing Course in Mumbai | EME Academy Mumbai",
    description: "Looking for the best digital marketing course in Mumbai? EME Academy Mumbai offers advanced digital marketing training with placement assistance.",
    keywords: ["digital marketing course in Mumbai", "best digital marketing institute in Mumbai", "digital marketing training Mumbai"],
    alternates: {
        canonical: "https://mumbai.emeacademy.co.in/digital-marketing-course",
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
                <p>● Advanced Digital Marketing (Facebook & Google Ads)- ₹30,000</p>
                <p>● Master Digital Marketing with AI- ₹40,000</p>
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
        desc: "After successful completion, you will receive a globally recognized certification from EME Academy.",
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
        desc: "To enroll, contact us at 9093926145/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
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
        "Advanced Digital Marketing (Facebook & Google Ads) - ₹30,000",
        "Master Digital Marketing with AI - ₹40,000",
        "Both - Tell me more"
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
        formVariant: "timing",
    };

    const heroData = {
        badgeText: "Mumbai's #1 Digital Marketing Institute — 10+ Years",
        title: (
            <>
                One Right Step — <br />
                And Your Career
                Can Be Set
            </>
        ),
        description:
            "No coding needed. Job-ready in 4–6 months. Google Ads, Meta Ads, SEO & AI Tools — all in one place.",
        googleRating: "4.8/5",
        justdialRating: "4.8/5",
        heroStats: [
            { iconSrc: "/assets/icons/PlacementIcon.svg", iconAlt: "Placement", value: "750+ Placed", label: "Last year alone" },
            { iconSrc: "/assets/icons/BudgetIcon.svg", iconAlt: "Salary", value: "₹25K–₹60K/mo", label: "Average starting salary" },
            { iconSrc: "/assets/icons/DurationIcon.svg", iconAlt: "Weekend batches", value: "Weekend Batches", label: "For working professionals" },
            { iconSrc: "/assets/icons/EMIIcon.svg", iconAlt: "EMI", value: "0% EMI", label: "From ₹2,500/month" },
        ],
    };

    const courses = [
        {
            image: {
                src: "/assets/images/Digital_Marketing_Landing/images/performance-marketing-course-social-media-ads-training.webp",
                alt: "Advanced Digital Marketing",
                width: 613,
                height: 180,
            },
            link: "/advanced-digital-marketing-certificate-course-in-mumbai",
            imageBgColor: "#005CE2",
            badgeText: "Facebook & Google Ads",
            title: "Advanced Digital Marketing Course",
            subtitle: "Advanced Digital Marketing (Facebook & Google Ads)",
            description:
                "Learn to run ads on Facebook and Google that actually convert. Real campaigns, real budgets, real results — taught by instructors who have worked in the industry.",
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
                            <span className="line-through text-[#FF0000]">₹35,000</span>{" "}
                            ₹30,000 <span className="text-[#00A51E]">after discount</span>
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
                src: "/assets/images/Digital_Marketing_Landing/images/ai-digital-marketing-course-social-media-automation-training.webp",
                alt: "Master Digital Marketing with AI",
                width: 613,
                height: 180,
            },
            link: "/diploma-in-advance-digital-marketing-courses-in-mumbai",
            imageBgColor: "#04142E",
            badgeText: "AI TRANSFORMING DIGITAL MARKETING",
            title: "Master Digital Marketing with AI",
            description:
                "ChatGPT, AI automation, and full-funnel strategy — the exact skills employers are looking for in 2025–26. Perfect for freelancers, professionals, and business owners.",
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
                            <span className="line-through text-[#FF0000]">₹45,000</span>{" "}
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
        title: "Complete the Course. Set Your Career.",
        subtitle: "Whether You're a Parent or a Graduate — These Paths Are Yours.",
        careerRoles: [
            "Digital Marketing Executive",
            "SEO/PPC Specialist",
            "Social Media Manager",
            "Content Marketer",
            "Marketing Automation Specialist",
            "Freelancer / Entrepreneur",
        ],
        salaryInfo:
            'Avg salary: <strong class="font-bold">₹25K–₹60K/month</strong>',
        image: "/assets/images/Digital_Marketing_Landing/CareerProspectsDM.webp",
        buttonText: "Check Eligibility",
    };

    // Testimonials data
    const testimonialsData = {
        title: "Hear It From People Who've",
        titleHighlight: "Already Done This",
        subtitle: "They Can't All Be Wrong — See For Yourself.",
        TestimonialsData: [
            {
                id: 1,
                name: "Arjun Banerjee",
                rating: 5,
                text: `"Honestly, I was very hesitant. I thought maybe it wasn't for me. But EME never made me feel that way. They guided me step by step — and 4 months later, I had a job."`,
                role: "Digital Marketing Executive, Salt Lake",
                note: "Placed within 6 weeks of completing the course",
                src: "/assets/images/Digital_Marketing_Landing/images/digital-marketing-placement-success-corporate-professional.webp",
            },
            {
                id: 2,
                name: "Somali",
                rating: 5,
                text: `"My mother suggested EME. I wasn't serious at first. Then I thought — let's try once. Today my mother is happy. I am happy. That says it all."`,
                role: "Freelance Digital Marketer",
                note: "Now earning ₹35,000/month — as a freelancer",
                src: "/assets/images/Digital_Marketing_Landing/images/freelance-digital-marketing-success-work-from-home.webp",
            },
            {
                id: 3,
                name: "Swagata Roy",
                rating: 5,
                text: `"I was scared — would learning something new at this stage even work? But the faculty was so patient. I never felt left behind. And now? Career switch complete."`,
                role: "Freelancer",
                note: "3 freelance clients — while still employed",
                src: "/assets/images/Digital_Marketing_Landing/images/career-switch-success-digital-marketing-freelancer.webp",
            },
        ],
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
            subtitle: "Kolkata, India",
            overlay:
                "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
            titleStyle: "text-base font-medium",
            subtitleStyle: "font-light leading-tight text-sm",
        },
        {
            id: 3,
            img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
            title: "Vaishnavi",
            subtitle: "Kolkata, India",
            overlay:
                "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
            titleStyle: "text-base font-medium",
            subtitleStyle: "font-light leading-tight text-sm",
        },
        {
            id: 4,
            img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
            title: "Aniket Shome",
            subtitle: "Kolkata, India",
            overlay:
                "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
            titleStyle: "text-base font-medium",
            subtitleStyle: "font-light leading-tight text-sm",
        },
        {
            id: 5,
            img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
            title: "Supratim Sen",
            subtitle: "Kolkata, India",
            overlay:
                "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
            titleStyle: "text-base font-medium",
            subtitleStyle: "font-light leading-tight text-sm",
        },
        {
            id: 6,
            img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
            title: "Souvik Mondal",
            subtitle: "Kolkata, India",
            overlay:
                "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
            titleStyle: "text-base font-medium",
            subtitleStyle: "font-light leading-tight text-sm",
        },
        {
            id: 7,
            img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
            title: "Koushik Mondal",
            subtitle: "Kolkata, India",
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
            <div className="w-full bg-[#0B1220] text-white border-y border-white/10 overflow-hidden group">
                <style>{`
                  @keyframes dmTicker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
                <div className="w-full overflow-hidden">
                    <div
                        className="flex w-max group-hover:[animation-play-state:paused]"
                        style={{ animation: "dmTicker 22s linear infinite" }}
                    >
                        <div className="flex items-center gap-8 px-4 py-2 whitespace-nowrap">
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#E87D1A]" /> Only 12 Seats Left in This Batch — Apply Before It&apos;s Full
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> Call Us Now: +91 9093926145
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> 750+ Students Placed · Salary ₹25K–₹60K/month
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> 0% Interest EMI · No Coding Required · Weekend Batches Available
                            </span>
                        </div>
                        <div className="flex items-center gap-8 px-4 py-2 whitespace-nowrap" aria-hidden="true">
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#E87D1A]" /> Only 12 Seats Left in This Batch — Apply Before It&apos;s Full
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> Call Us Now: +91 9093926145
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> 750+ Students Placed · Salary ₹25K–₹60K/month
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00A2E7]" /> 0% Interest EMI · No Coding Required · Weekend Batches Available
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <AdmissionHeader _this={_this} />
            <div id="home" className="w-full ">
                <InfiniteCall />
            </div>

            <div className="w-full bg-[url('/assets/images/Digital_Marketing_Landing/images/best-digital-marketing-training-mumbai-hero-bg-3.webp')] xs:h-[380px] sm:h-[420px] md:h-[555px] bg-cover bg-center bg-no-repeat">
                <CoursesHero {...heroData} {..._this} />
            </div>

            <div className="flex w-full flex-col h-full max-h-[700px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
                <StudentsWorkingInCompanies
                    courses={Courses}
                    brochure={Brochure}
                    brochureName={BrochureName}
                    SelectCourses={SelectCourses || []}
                    formVariant={_this.formVariant}
                />
            </div>

            <div id="CourseCurriculum" className="flex justify-center bg-[#ffffff]">
                <section className="w-full max-w-[1200px] mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h2 className="text-[#232D63] text-2xl md:text-4xl font-black leading-tight">
                            Courses That Actually Change{" "}
                            <span className="text-[#0057E2]">Careers</span>
                        </h2>
                        <p className="text-[#4B4B4B] text-[12px] md:text-[14px] font-medium max-w-[760px]">
                            One Course. One Decision. Everything Can Change.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-10 w-full">
                        <div className="md:hidden overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex gap-4 snap-x snap-mandatory pr-4">
                                {courses.map((course, index) => {
                                    const ctaThis = {
                                        ..._this,
                                        SelectCourses: [course.subtitle || course.title],
                                    };

                                    return (
                                        <div
                                            key={`${course.title}-${index}`}
                                            className="snap-start shrink-0 w-[88%] max-w-[420px] rounded-3xl overflow-hidden border border-[#EEF2F7] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col"
                                        >
                                            <div
                                                className="relative h-[210px]"
                                                style={{ backgroundColor: course.imageBgColor }}
                                            >
                                                <Image
                                                    src={course.image.src}
                                                    alt={course.image.alt}
                                                    fill
                                                    sizes="88vw"
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                                <div className="absolute top-3 left-3">
                                                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black tracking-wide text-[#04142E]">
                                                        {course.badgeText}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-4 flex flex-col flex-1">
                                                <div className="text-[#232D63] text-lg font-black leading-tight">
                                                    {course.title}
                                                </div>
                                                {course.subtitle && (
                                                    <div className="mt-1 text-[#0057E2] text-[12px] font-bold">
                                                        {course.subtitle}
                                                    </div>
                                                )}
                                                <div className="mt-2 text-[#4B4B4B] text-[12px] font-medium leading-relaxed">
                                                    {course.description}
                                                </div>

                                                <div className="mt-4 grid gap-2.5">
                                                    {course.details.map((detail, dIndex) => (
                                                        <div key={dIndex} className="flex items-start gap-3">
                                                            <div className="h-9 w-9 rounded-xl bg-[#F4FBFE] border border-[#E6F3FA] flex items-center justify-center shrink-0">
                                                                <Image
                                                                    src={detail.icon}
                                                                    alt={detail.label}
                                                                    width={18}
                                                                    height={18}
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div className="text-[12px] leading-snug">
                                                                <div className="font-bold text-[#232D63]">
                                                                    {detail.label}
                                                                </div>
                                                                <div className="text-[#4B4B4B] font-medium">
                                                                    {detail.value}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
                                                    <CTAButton
                                                        name="Apply Now"
                                                        styleClasses="w-full bg-[#0057E2] hover:bg-[#0047C2]  text-white rounded-xl font-bold text-[12px] px-4 h-10 border-none"
                                                        _this={ctaThis}
                                                    />
                                                    <Link href={course.link} className="w-full" target="_blank">
                                                        <span className="w-full h-10 px-4 inline-flex items-center justify-center rounded-xl border border-[#0057E2] text-[#0057E2] font-bold text-[12px] hover:bg-[#0057E2]/10">
                                                            Course Details
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="hidden md:grid grid-cols-2 gap-6 w-full max-w-[1160px] mx-auto">
                            {courses.map((course, index) => {
                                const ctaThis = {
                                    ..._this,
                                    SelectCourses: [course.subtitle || course.title],
                                };

                                return (
                                    <div
                                        key={`${course.title}-${index}`}
                                        className="rounded-3xl overflow-hidden border border-[#EEF2F7] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col w-full"
                                    >
                                        <div
                                            className="relative h-[290px] md:h-[350px] lg:h-[380px]"
                                            style={{ backgroundColor: course.imageBgColor }}
                                        >
                                            <Image
                                                src={course.image.src}
                                                alt={course.image.alt}
                                                fill
                                                sizes="600px"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black tracking-wide text-[#04142E]">
                                                    {course.badgeText}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5 md:p-6 flex flex-col flex-1">
                                            <div className="text-[#232D63] text-xl md:text-2xl font-black leading-tight">
                                                {course.title}
                                            </div>
                                            {course.subtitle && (
                                                <div className="mt-1 text-[#0057E2] text-[12px] md:text-[13px] font-bold">
                                                    {course.subtitle}
                                                </div>
                                            )}
                                            <div className="mt-3 text-[#4B4B4B] text-[12px] md:text-[13px] font-medium leading-relaxed">
                                                {course.description}
                                            </div>

                                            <div className="mt-5 grid gap-3">
                                                {course.details.map((detail, dIndex) => (
                                                    <div key={dIndex} className="flex items-start gap-3">
                                                        <div className="h-9 w-9 rounded-xl bg-[#F4FBFE] border border-[#E6F3FA] flex items-center justify-center shrink-0">
                                                            <Image
                                                                src={detail.icon}
                                                                alt={detail.label}
                                                                width={18}
                                                                height={18}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        <div className="text-[12px] md:text-[13px] leading-snug">
                                                            <div className="font-bold text-[#232D63]">
                                                                {detail.label}
                                                            </div>
                                                            <div className="text-[#4B4B4B] font-medium">
                                                                {detail.value}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                                                <CTAButton
                                                    name="Apply Now"
                                                    styleClasses="w-full sm:w-auto bg-[#0057E2] hover:bg-[#0047C2] text-white hover:text-white rounded-xl font-bold text-[12px] md:text-[13px] px-6 h-11 border-none"
                                                    _this={ctaThis}
                                                />
                                                <Link href={course.link} className="w-full sm:w-auto" target="_blank">
                                                    <span className="w-full h-11 px-6 inline-flex items-center justify-center rounded-xl border border-[#0057E2] text-[#0057E2] font-bold text-[12px] md:text-[13px] hover:bg-[#0057E2]/10">
                                                        Course Details
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
            <div
                id="about"
                className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
            >
                <FeaturedIn {..._this} />
            </div>
            <div className="w-full bg-white">
                <DMShortsCarousel
                    _this={_this}
                    title="👤 Real Students. Real Results. Koi Farzi Nahi."
                    subtitle="They Started Exactly  Where You Are Today. Last year akele 750+ placements. Salary ₹25,000–₹60,000/month — aur yeh sirf starting hai."
                    videos={[
                        "https://www.youtube.com/shorts/ZqHbDgX30Ps",
                        "https://www.youtube.com/shorts/qC06mvJiyL0",
                        "https://www.youtube.com/shorts/5vtXeeSxmcc",
                        "https://www.youtube.com/shorts/37JLYYEBquU",
                        "https://www.youtube.com/shorts/UF_NvyKnYck",
                        "https://www.youtube.com/shorts/7dW5JDEIq6o",
                        "https://www.youtube.com/shorts/TbTxV6hjaJ4",
                    ]}
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
                    variant="compact"
                />
            </div>
            
            <div id="testimonials" className="flex w-full bg-white">
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
            
            <DMFinalSupportSection _this={_this} />
            <CoursesLandingFooter courseName="Digital Marketing Course"  {..._this} />
            <StickyCTAButton {..._this} />
        </main>
    );
}
