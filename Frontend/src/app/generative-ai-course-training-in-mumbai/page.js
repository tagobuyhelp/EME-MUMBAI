import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";

import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesDetails from "@/components/global/CoursesDetails";
import CertifiedStudent from "../recentplacements/CertifiedStudent";

const GenAIfaq = [
  {
    id: 1,
    title: "I have no prior coding background. Is this a Generative AI Course for Beginners?",
    desc: "Absolutely! We’ve designed our AI Course in Mumbai from the ground up to be completely accessible. Whether you are from a non-tech background or just starting out, this Generative AI Course for Beginners will take you step-by-step from foundational concepts to advanced AI logic.",
  },
  {
    id: 2,
    title: "What makes EME Academy the Best AI Training Institute in Mumbai?",
    desc: "We don't just teach theory; we focus on deep-tech engineering and real-world application. As the Best AI Training Institute in Mumbai, our award-winning curriculum is backed by MSME, ISO, and Startup India. From building live AI portfolios to 100% placement support, we provide the Best Generative AI Course in Mumbai to ensure you graduate job-ready.",
  },
  {
    id: 3,
    title: "Do you offer a Generative AI Course with Placement support for new graduates?",
    desc: "Yes, we do! Our Generative AI Course for Freshers includes 100% dedicated placement assistance. When you enroll in our Generative AI Course with Placement, you get access to top-tier tech mentorship, resume optimization, mock technical interviews, and direct referrals to over 50 premium AI startups and global IT firms.",
  },
  {
    id: 4,
    title: "What are the Generative AI Course Fees in Mumbai, and can I learn remotely?",
    desc: "We believe elite tech education should be accessible. Our highly transparent Generative AI Course Fees in Mumbai are currently discounted to just ₹45,000. Plus, if you prefer the flexibility of learning from home, you can easily join our highly interactive Generative AI Course Online in Mumbai without compromising on the hands-on classroom experience.",
  },
  {
    id: 5,
    title: "Is this just a basic ChatGPT Course in Mumbai, or will I learn advanced prompting?",
    desc: "This goes far beyond a simple ChatGPT Course in Mumbai! You will command advanced AI logic through our intensive Prompt Engineering Course in Mumbai. By the time you graduate, you will have the technical execution skills to defend your prompt choices in interviews, making this the ultimate Prompt Engineer Course in Mumbai.",
  },
  {
    id: 6,
    title: "Will I learn to build actual applications and work with large models?",
    desc: "Definitely. You won't just be a passive user; you will be the one building the technology. Our 6-month track includes an in-depth LLM Course in Mumbai, a specialized LangChain Course in Mumbai, and a comprehensive AI App Development Course in Mumbai so you can architect and deploy real-world enterprise solutions.",
  },
  {
    id: 7,
    title: "Is this a certified program? Will I get a recognized document for my resume?",
    desc: "Yes! Upon successful graduation, you will be awarded an industry-recognized Generative AI Course with Certificate. Our Generative AI Certification Course in Mumbai is highly respected by tech headhunters, giving your LinkedIn profile and resume the elite badge of AI Career Excellence.",
  },
  {
    id: 8,
    title: "I already have a full-time job. Is this Generative AI Course for Working Professionals?",
    desc: "100%! We’ve structured this Generative AI Course for Working Professionals to help you future-proof your corporate skill set. Whether you want to negotiate a premium CTC or pivot your career entirely, mastering applied AI at the top Generative AI Institute in Mumbai gives you the competitive edge you need.",
  },
  {
    id: 9,
    title: "Can this course help me start an independent career or freelance business?",
    desc: "Absolutely. If your goal is to launch high-ticket independent projects, this curriculum serves as an incredible Generative AI Freelancing Course in Mumbai. You’ll learn how to resolve complex model hallucinations and build custom GPTs, perfectly equipping you to become a highly paid Freelance AI Consultant.",
  },
  {
    id: 10,
    title: "Do you cover language processing and data evaluation?",
    desc: "Yes, deep tech requires deep knowledge. Our curriculum features a robust NLP Course in Mumbai where you will master natural language processing, algorithmic challenges, and dataset evaluation. You'll learn the exact skills needed to claim the highest-paying roles in the global tech landscape.",
  },
];

export const metadata = {
  title: "Future-Proof Your Career with the Best Generative AI Course in Mumbai – Master LLMs, Prompt Engineering, and AI Tools.",
  description:
    "Our hands-on Generative AI Certification Course Mumbai goes far beyond basic chatbot interactions. You will dive deep into Large Language Models through our intensive LLM Course in Mumbai, command advanced AI logic in our Prompt Engineering Course in Mumbai, and architect real-world solutions via our LangChain Course Mumbai and AI App Development Course Mumbai.",
  keywords: [
    "Best Generative AI Course in mumbai",
    "Generative AI Institute in mumbai",
    "Prompt Engineering Course in mumbai",
    "LLM Course in mumbai",
    "AI Course in mumbai",
    "LangChain Course mumbai",
    "Generative AI Certification Course mumbai",
    "Generative AI Course for Beginners",
    "Generative AI Course with Placement",
    "Prompt Engineer Course mumbai",
    "ChatGPT Course mumbai",
    "Generative AI Course for Freshers",
    "AI App Development Course mumbai",
    "Generative AI Course with Certificate",
    "Generative AI Course Fees mumbai",
    "NLP Course mumbai",
    "Generative AI Course for Working Professionals",
    "Generative AI Freelancing Course mumbai",
    "Best AI Training Institute mumbai",
    "Generative AI Course Online mumbai"
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/generative-ai-course-training-in-mumbai",
  },
};

export default function page() {
  const Courses = "Prompt Engineering with AI Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1LPlfsCPoEtHbV4Zif5j6pp1OyG-oE7cN/view?usp=sharing";
  const BrochureName = "GenerativeAI_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  // Hero data
  const heroData = {
    badgeText: "Master Generative AI in Just 6 Months",
    title: "Future-Proof Your Career with the Best Generative AI Course in Mumbai – Master LLMs, Prompt Engineering, and AI Tools.",
    description:
      "Dive deep into Large Language Models, LangChain, and advanced Prompt Engineering. Graduate with an elite AI app portfolio and get 100% placement support to lead the AI revolution.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Explore Our Advanced Generative AI Course in Mumbai",
    subtitle:
      "Dive into real-world application building and enterprise-level tools with the most comprehensive, job-ready AI curriculum designed for both complete beginners and seasoned IT professionals.",
    courseData: [
      {
        id: 1,
        title: "Master Generative AI & Applied LLMs",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/GeneAI/GenAICard.png",
        description:
          "Get certified with the most advanced Generative AI Certification Course Mumbai has to offer. This is not just a basic ChatGPT Course Mumbai; this is deep-tech engineering.",
        details: [
          { label: "Duration", value: "6 Months" },
          {
            label: "Transparent Generative AI Course Fees Mumbai",
            value: (
              <>
                Affordable Fees at <span className="line-through text-[#FF0000]">₹55,000</span>{" "}
                ₹45,000 <span className="text-[#00A51E]">(after discount)</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Highly interactive Generative AI Course Online Mumbai and immersive classroom sessions available.",
          },
          {
            label: "Languages",
            value: "English, Hindi & Marathi",
          },
        ],
        hookLine:
          "Become job-ready with the best generative AI certification course in Mumbai with hands-on tools and real-world application!",
        topics: [
          {
            title: "Generative AI Fundamentals",
            points: [
              "Introduction to Generative AI and its real-world applications.",
              "Core concepts of probability and statistics used in GenAI.",
              "Overview of generative models including GANs and autoencoders.",
              "Deep learning foundations and attention mechanisms.",
              "Large Language Models (LLMs): Understanding LLM architecture and design.",
            ],
          },
          {
            title: "Prompt Engineering Mastery",
            points: [
              "ChatGPT-based prompt writing for accurate and creative outputs.",
              "Techniques: Zero-shot, Few-shot, Persona, Chain-of-thought prompting.",
              "Prompt injections, constraints, delimiters, and adversarial prompting.",
            ],
          },
          {
            title: "Mastering LLMs",
            points: [
              "Comparison of top LLMs like Google FLAN, Falcon, LaMDA, and Poe.",
              "Introduction to image, video, and audio AI models.",
            ],
          },
          {
            title: "Customizing LLMs with Enterprise Data",
            points: [
              "Techniques like fine-tuning, RLHF, embeddings, and vector search.",
              "Integrating Knowledge Graphs and semantic search engines.",
              "Using domain-specific customization strategies.",
            ],
          },
          {
            title: "Enterprise Architecture & GenAI",
            points: [
              "AI’s role in modern enterprise architecture.",
              "Detailed breakdown of transformer and attention architectures.",
              "Use-case-driven model workflows for industrial GenAI adoption.",
            ],
          },
          {
            title: "ModelOps & AI Deployment",
            points: [
              "Industrializing GenAI with ModelOps practices.",
              "Recalibration, retraining, and model maintenance cycles.",
              "Deployment examples: Search engine AI, chatbot workflows, domain apps.",
            ],
          },
          {
            title: "LangChain for Advanced AI App Development",
            points: [
              "Using LangChain for building multi-LLM workflows.",
              "Text chunking, memory management, and real-time document retrieval.",
              "Live projects on conversational QA, summarization, and embedding search.",
            ],
          },
          {
            title: "Exploring Open-Source & Non-Microsoft LLMs",
            points: [
              "Overview of Cohere, AI21, Alpaca & other non-Microsoft models.",
              "Generative tools across text, image, video, and audio domains.",
              "Comparative analysis: Strengths and best-use cases.",
            ],
          },
          {
            title: "Responsible AI & Ethics",
            points: [
              "Environmental concerns in AI model training.",
              "Addressing bias, fairness & inclusivity in LLMs.",
              "Legal issues: Copyright, licensing & IP.",
            ],
          },
        ],
      },
    ],
  };

  // Tools data
  const toolsData = {
    title: "Tools & Technologies You'll Master with our",
    courseName: "Generative AI Course",
    tools: [
      {
        name: "Python",
        icon: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50.6,
        companyLogoHeight: 50.34,
      },
      {
        name: "Keras",
        icon: "/assets/images/GeneAI/kerasIcon.png",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "TensorFlow",
        icon: "/assets/images/GeneAI/TensorFlowIcon.png",
        color: "bg-blue-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "NLTK",
        icon: "/assets/images/GeneAI/NLTK_Icon.png",
        color: "bg-orange-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "BERT",
        icon: "/assets/images/GeneAI/BERT_Icon.png",
        color: "bg-yellow-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "Hugging Face",
        icon: "/assets/images/GeneAI/huggingfaceIcon.png",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "LangChain",
        icon: "/assets/images/GeneAI/langchain-Icon.png",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "ChatGPT",
        icon: "/assets/images/Data_Analytics_Landing/icons/chatgpt-logo.svg",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "DALL-E 2",
        icon: "/assets/images/GeneAI/ChatGPT_Dalle2Icon.png",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "NLP",
        icon: "/assets/images/GeneAI/NLP_Icon.png",
        color: "bg-blue-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "LLM",
        icon: "/assets/images/GeneAI/LLM_Icon.png",
        color: "bg-green-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "Prompt Engineering",
        icon: "/assets/images/GeneAI/prompt_engineering_Icon.png",
        color: "bg-blue-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "Generative AI",
        icon: "/assets/images/GeneAI/Generative_AI_Icon.png",
        color: "bg-orange-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
      {
        name: "Generative AI on Cloud",
        icon: "/assets/images/GeneAI/Generative_Cloud_Icon.png",
        color: "bg-yellow-50",
        companyLogoWidth: 75,
        companyLogoHeight: 50,
      },
    ],
  };

  // Career prospects data
  const careerProspectsData = {
    title:
      'Elite Career <span style="color: #0057E2;">Prospects</span> in <span style="color: #f97316;">Generative AI</span> & Prompt Engineering',
    subtitle:
      "After mastering applied AI at EME Academy, you won't just be a passive user of technology—you will be the one building it. Whether you are launching your journey through our Generative AI Course for Freshers or future-proofing your corporate skill set, graduating from the Generative AI Institute in Mumbai equips you to claim the highest-paying, most in-demand roles in the global tech landscape.",
    careerRoles: [
      "Certified Prompt Engineer",
      "Generative AI App Developer",
      "AI Product Manager",
      "NLP & AI Engineer",
      "Freelance AI Consultant",
      "AI Research Assistant",
    ],
    salaryInfo:
      "Average Salary in India: ₹6 LPA - ₹12 LPA (as per industry standard)",
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/GeneAI/GenerativeAI.svg",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Sayantika Ghosh",
        rating: 5,
        text: `"I never thought I’d understand terms like transformers or GANs, but EME Academy Mumbai made it super clear. The trainers explained everything step-by-step. Easily the best generative AI course in Mumbai!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Arpan Das",
        rating: 5,
        text: `"Before joining, I was just using ChatGPT for fun. Now I can design full AI workflows using LangChain! EME Academy Mumbai's generative AI certification truly changed my career path."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Tithi Roy",
        rating: 5,
        text: `"This course helped me get started with prompt engineering. Within weeks, I was building my own AI chatbot with custom data. It’s practical, hands-on, and super engaging."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Sayan Pal",
        rating: 5,
        text: `"আমি ভেবেছিলাম LLM আর GAN শেখা অনেক কঠিন হবে, কিন্তু EME Academy Mumbai সবকিছু এত সহজ করে বুঝিয়েছে যে এখন আমি নিজেই AI-based content তৈরি করতে পারি!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Neha Bhattacharjee",
        rating: 5,
        text: `"I had zero background in coding, but the way EME teaches Generative AI is just brilliant. I built my first AI-powered portfolio project in just 2 months!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Ritvik Sharma",
        rating: 5,
        text: `"The industrialization module gave me clarity on how companies use GenAI in real-world scenarios. Now I feel confident applying for AI consultant roles."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Nabanita Sengupta",
        rating: 5,
        text: `"I created an entire AI-based video ad using the tools we learned in class—Runway and ElevenLabs were so cool! This is the most exciting course I’ve ever taken."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Tushar Jain",
        rating: 5,
        text: `"Thanks to this course, I now freelance as an AI Prompt Writer. The ChatGPT prompting section was a game-changer for me!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Ritika Kaur",
        rating: 5,
        text: `"This isn't just a theory class. We actually built apps using LangChain and integrated real AI models. I’ve already added 3 projects to my resume."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Debayan Chatterjee",
        rating: 5,
        text: `"The 'Responsible AI' session was something I didn’t expect but truly valued. It showed me how important ethics are in this field. Hats off to the EME Academy Mumbai trainers!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
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
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/GeneAI/generativeAI_hero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
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
        className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%"
      >
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>

      <div id="CourseTool" className="flex w-full  bg-[#F4FBFE] mt-6">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>

      <div id="CourseProspects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="about" className="flex w-full  bg-[#F4FBFE]">
        <FeaturedIn {..._this} />
      </div>

      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Analytics/DAMainWhyChoose.png"
        />
      </div>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert
          {..._this}
          title='Stop Watching the AI Revolution. Start Leading It. <span style="color: #FF7A00;">Talk to an AI Career Expert!</span>'
          description="Ready to transition into advanced AI engineering? Connect with our veteran industry mentors to build your personalized learning map."
          buttonText="Download Full AI Syllabus & Brochure →"
        />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport
          {..._this}
          badge="AI Career Excellence"
          title="100% Dedicated Placement Support to Launch Your AI Engineering Career"
          customFeatures={[
            {
              id: 1,
              title: "Resume, LinkedIn & GitHub",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft ATS-optimized resumes tailored for NLP and AI developer roles.",
                "Strategic LinkedIn and GitHub profile optimization for tech headhunters.",
                "Highlight your mastery of LLMs, Python integration, and AI toolchains."
              ],
            },
            {
              id: 2,
              title: "Algorithmic & Logic Training",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily logic, algorithmic challenges, and dataset evaluation practice.",
                "Full-length aptitude mock exams for top-tier tech and AI startups.",
                "Speed and accuracy enhancement for competitive technical screening rounds."
              ],
            },
            {
              id: 3,
              title: "Technical Interview Mastery",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous mock interviews focusing on model deployment and NLP logic.",
                "Personalized whiteboard and live AI-architecture challenge feedback.",
                "Real-world scenario prep for defending your prompt engineering choices."
              ],
            },
            {
              id: 4,
              title: "Expert Tech Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling with senior AI developers and Data Scientists.",
                "Insider insights on the latest LLM advancements and autonomous AI agents.",
                "Professional salary negotiation tactics to maximize your premium tech CTC."
              ],
            },
            {
              id: 5,
              title: "Elite Tech Hiring Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium AI startups, global IT firms, and tech partners.",
                "Exclusive access to our internal, unlisted AI developer job portal.",
                "Direct corporate interview referrals to fast-track your tech onboarding."
              ],
            },
            {
              id: 6,
              title: "Live AI Portfolio Building",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop real-world capstone projects (Custom GPTs, LangChain apps).",
                "Guided, mentor-led resolution of complex model hallucinations and API bugs.",
                "Build an employer-ready digital showcase proving your generative AI mastery."
              ],
            },
          ]}
        />
      </div>

      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone!"}
        />
      </div>

      <div id="" className="flex w-full p-6">
        <NeedToKnowMore
          {..._this}
          title="Ready to Build the Next AI Breakthrough?"
          description="Stop hesitating and start engineering. Download our complete syllabus to explore our hands-on LLM and LangChain modules, review our highly transparent Generative AI Course Fees Mumbai, and discover exactly how earning an industry-recognized Generative AI Course with Certificate can fast-track your journey into top-tier tech startups and global AI labs."
          buttonText="Download Complete AI Brochure"
        />
      </div>

      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>
      <div id="testimonials" className="flex w-full  bg-white">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={GenAIfaq} />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
