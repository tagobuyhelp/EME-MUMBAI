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
import { alumniStudents } from "@/data/alumniStudentsData";

const GenAIfaq = [
  {
    id: 1,
    title: "Is this course for beginners in Kolkata?",
    desc: "Yes! Our Generative AI course in Kolkata is beginner-friendly. We start from the basics and build up to advanced tools like LLMs, GANs, and LangChain.",
  },
  {
    id: 2,
    title:
      "What is the duration and fee structure of the Generative AI course in Kolkata?",
    desc: "The course is 6 months long (including internship). The generative AI course fees in Kolkata at EME Academy is ₹40,000, currently offered at a discounted fee of ₹30,000.",
  },
  {
    id: 3,
    title:
      "Will I receive a certificate after completing this Generative AI course?",
    desc: "Absolutely. Upon completion, you’ll receive a globally recognized generative AI certification from EME Academy, positioning you as an AI-ready professional in a booming tech industry.",
  },
  {
    id: 4,
    title: "What tools and models will I work with during the course?",
    desc: "You’ll get hands-on experience with ChatGPT, GPT-4, Midjourney, Stable Diffusion, LangChain, DALL·E, ElevenLabs, and more.",
  },
  {
    id: 5,
    title: "Do you offer placement support after the course?",
    desc: "Yes! EME Academy offers 100% placement assistance with resume building, mock interviews, job referrals, and portfolio development to help you land your first job in the AI space.",
  },
  {
    id: 6,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 7,
    title: "Will this course help me with freelancing opportunities?",
    desc: "Yes. Many of our students have started working as freelance AI content creators, automation consultants, and prompt engineers. Our projects and case studies are real-world and client-ready.",
  },
  {
    id: 8,
    title: "Do I need a coding background to take this course?",
    desc: "No prior coding experience is required. We teach everything from scratch, including Python for AI, prompt engineering, and how to use no-code AI tools.",
  },
  {
    id: 9,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes.",
  },
  {
    id: 10,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 9093926145/9831284098 or email at info@emeacademy.co.in. You can also register online through our website.",
  },
];

export const metadata = {
  title: "Generative AI Course Training in kolkata- EME Academy",
  description:
    "Enroll in EME Academy's artificial intelligence course training in kolkata. Master cutting-edge AI technologies with expert-led training, practical projects, and industry-focused curriculum to advance your career",
  keywords: [
    "generative ai course training in kolkata",
    "artificial intelligence course training in kolkata",
    "generative ai training in kolkata",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/generative-ai-course-training-in-kolkata",
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
    title:
      "Best Generative AI Course in Kolkata – Master LLMs, Prompt Engineering, and AI Tools.",
    description:
      "Learn from experts at EME Academy – the best generative AI training institute in Kolkata. Our hands-on course covers Large Language Models (LLMs), Prompt Engineering, LangChain, AI app building, and much more.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Generative AI Course",
    subtitle:
      "Become job-ready with the best generative AI certification course in Kolkata with hands-on tools and real-world application!",
    courseData: [
      {
        id: 1,
        title: "Generative AI Course",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/GeneAI/GenAICard.png",
        description:
          "Get certified with one of the most advanced generative AI certification courses in Kolkata, covering everything from GPT to LangChain and model customization.",
        details: [
          { label: "Duration", value: "6 Months" },
          {
            label: "Affordable Fees",
            value: (
              <>
                <span className="line-through text-[#FF0000]">₹55,000</span>{" "}
                ₹45,000 <span className="text-[#00A51E]">after discount</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Online and classroom sessions are available.",
          },
          {
            label: "Languages",
            value: "Bengali, English & Hindi",
          },
        ],
        hookLine:
          "Become job-ready with the best generative AI certification course in Kolkata with hands-on tools and real-world application!",
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
      'Future Prospect of a <span class="text-[#f97316]">Prompt Engineering with AI Course</span>',
    subtitle:
      "After completing the generative AI course in Kolkata, you'll be ready for exciting roles like:",
    careerRoles: [
      "AI Engineer",
      "Prompt Engineer",
      "Generative AI App Developer",
      "AI Product Manager",
      "AI Research Assistant",
      "Freelance AI Consultant",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹6 LPA - ₹12 LPA</strong> (as per industry standard)',
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
        text: `"I never thought I’d understand terms like transformers or GANs, but EME Academy made it super clear. The trainers explained everything step-by-step. Easily the best generative AI course in Kolkata!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Arpan Das",
        rating: 5,
        text: `"Before joining, I was just using ChatGPT for fun. Now I can design full AI workflows using LangChain! EME Academy's generative AI certification truly changed my career path."`,
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
        text: `"আমি ভেবেছিলাম LLM আর GAN শেখা অনেক কঠিন হবে, কিন্তু EME Academy সবকিছু এত সহজ করে বুঝিয়েছে যে এখন আমি নিজেই AI-based content তৈরি করতে পারি!"`,
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
        text: `"The 'Responsible AI' session was something I didn’t expect but truly valued. It showed me how important ethics are in this field. Hats off to the EME Academy trainers!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/GeneAI/generativeAI_hero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
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
        <TalkToOurCareerExpert {..._this} />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>

      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone!"}
        />
      </div>

      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
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
