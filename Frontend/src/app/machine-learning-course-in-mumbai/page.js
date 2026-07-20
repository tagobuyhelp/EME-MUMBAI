import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import WhyStudentsChooseUs from "../ai-ml-landing-course/WhyStudentsChooseUs";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CertifiedStudent from "../recentplacements/CertifiedStudent";

export const metadata = {
  title: "Best Machine Learning & Artificial Intelligence Institute in Mumbai",
  description:
    "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
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
    "Generative AI Course Online mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/machine-learning-course-in-mumbai",
  },
  openGraph: {
    title: "Best Machine Learning & Artificial Intelligence Institute in Mumbai",
    siteName: "EME Academy Mumbai",
    url: "https://mumbai.emeacademy.co.in/machine-learning-course-in-mumbai",
    description: "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
    type: "website",
    images: [
      {
        url: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png",
      },
    ],
    locale: "en_IN",
  },
};

const faqs = [
  {
    id: 1,
    title: "I don't know how to code. Can I still join this program?",
    desc: "Yes! We start from absolute scratch. Our curriculum is expertly structured as an AI Course for Beginners Mumbai to build your tech literacy from the ground up. Whether you are a non-IT student or transitioning careers, it is the perfect Machine Learning Course for Freshers looking to break into the tech industry.",
  },
  {
    id: 2,
    title: "I am currently employed in IT. How can I manage the classes?",
    desc: "We designed the AI Course for Working Professionals Mumbai specifically for demanding corporate schedules. You can opt for our highly flexible AI Course Weekend Batch Mumbai or take advantage of our fully interactive Online AI ML Course Mumbai format to upskill without leaving your current job.",
  },
  {
    id: 3,
    title: "What kind of career and job support do you provide?",
    desc: "We don't just teach you algorithms; we launch your data career. We offer a guaranteed AI ML Course with Placement Mumbai, routing your technical portfolio directly to top tech firms. We also offer tracks featuring an AI ML Course with Internship Mumbai so you can gain hands-on corporate experience before you even graduate.",
  },
  {
    id: 4,
    title: "What specific languages and programming logic will I learn?",
    desc: "You will start by mastering the industry standard in our Python for Machine Learning Course Mumbai. From there, you will learn to build predictive models, predictive analytics, and classification systems through our intensive Supervised Learning Course Mumbai modules.",
  },
  {
    id: 5,
    title: "Does this program cover advanced topics like neural networks?",
    desc: "Absolutely. This isn't just basic data entry; it functions as a complete, high-level Data Science and ML Course Mumbai. You will move beyond basic algorithms to architect complex neural networks and computer vision models in our advanced Deep Learning Course in Mumbai.",
  },
  {
    id: 6,
    title: "What credentials and certifications will I receive?",
    desc: "Upon graduation, you will earn a highly respected, industry-recognized Machine Learning Course with Certificate. To give you a massive competitive edge in the job market, our curriculum also features an exclusive AI ML Course with Power BI Certification to prove your data visualization mastery to recruiters.",
  },
  {
    id: 7,
    title: "What is the cost of the program, and are there payment plans?",
    desc: "We believe elite data education should be highly accessible. We maintain completely transparent Machine Learning Course Fees Mumbai with no hidden charges. To help you focus entirely on your studies, we offer flexible 0% No-Cost EMI payment options.",
  },
  {
    id: 8,
    title: "Why is EME Academy considered the top choice for AI training?",
    desc: "Because we teach commercial tech execution. Widely recognized as the Best AI Institute Western India has to offer, we skip the outdated textbook theory and deliver the exact, hands-on Machine Learning Training Mumbai that modern tech startups and global MNCs demand.",
  },
  {
    id: 9,
    title: "Is this training primarily theoretical or practical?",
    desc: "It is 100% practical. As the premier Machine Learning Institute in Mumbai, we simulate a live corporate tech laboratory. You will train on live datasets, clean messy data, and deploy real-world models under the guidance of senior data scientists.",
  },
  {
    id: 10,
    title: "Will I learn both Artificial Intelligence and Machine Learning?",
    desc: "Yes. This is a comprehensive, dual-track program. We combine the predictive data modeling of the Best Machine Learning Course in Mumbai with the advanced tech applications of a top-tier Artificial Intelligence Course in Mumbai, solidifying our reputation as the absolute Best AI and ML Institute in Mumbai.",
  },
];

export default function page() {
  const Courses = "AI & ML Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1LPlfsCPoEtHbV4Zif5j6pp1OyG-oE7cN/view?usp=sharing";
  const BrochureName = "ai-ml-brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  // Hero data
  const heroData = {
    badgeText: "Western India's No. 1 AI & ML Institute",
    title: "Best Machine Learning & Artificial Intelligence Institute in Mumbai",
    description:
      "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
    googleRating: "4.5/5",
    justdialRating: "4.5/5",
    ctaRatingsLabel: "Download Syllabus & Brochure →",
  };

  const courseDetailsData = {
    courseName: "Explore Our Complete AI & ML Course in Mumbai",
    subtitle:
      "Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.",
    courseData: [
      {
        id: 1,
        title: "Certified Machine Learning & Artificial Intelligence Course in Mumbai",
        image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AiMLImage.jpg",
        description:
          "From mathematical models and foundational Python programming to advanced neural architectures and deep learning applications, this 6-month track guarantees you graduate 100% placement assistance-ready.",
        details: [
          {
            label: "Duration",
            value: "6 Months",
          },
          {
            label: "Transparent AI ML Course Fees Mumbai",
            value: (
              <>
                Affordable Fees at <span className="line-through text-[#FF0000]">₹65,000</span>{" "}
                ₹55,000 <span className="text-[#00A51E]">(Save ₹10,000/- Special Discount)</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Flexible AI Course Online Mumbai and immersive classroom sessions available.",
          },
          {
            label: "Languages",
            value: "English, Hindi",
          },
        ],
        hookLine: "Become job-ready with the best institute for Machine Learning in Mumbai!",
        topics: [
          {
            title: "Foundation of AI and ML",
            points: [
              "Introduction to artificial intelligence & machine learning",
              "Math, statistics, and probability modeling",
              "Data preprocessing and cleansing workflows",
            ],
          },
          {
            title: "Python Programming for AI/ML",
            points: [
              "Python syntax, functions, and object-oriented logic",
              "NumPy & Pandas for dataset manipulation",
              "Matplotlib & Seaborn for predictive data visualization",
            ],
          },
          {
            title: "AI Automation & Deep Learning Concepts",
            points: [
              "Neural networks architecture and backward propagation",
              "TensorFlow, Keras, and PyTorch frameworks",
              "Computer Vision models and Convolutional Neural Networks (CNNs)",
            ],
          },
          {
            title: "Professional Guidance",
            points: [
              "Regular interactive doubt-clearing sessions",
              "Industry case studies and design challenges",
              "Senior Data Scientist mentorship",
            ],
          },
          {
            title: "Real-World Projects & Future Trends",
            points: [
              "Large Language Models (LLMs) & prompt engineering",
              "Supervised & unsupervised model deployments",
              "AI App Development with LangChain workflows",
            ],
          },
          {
            title: "Capstone Training & Career Preparation",
            points: [
              "Design and deploy an end-to-end AI Capstone application",
              "Technical resume optimization & GitHub portfolio mapping",
              "Mock whiteboard coding & algorithm interviews",
            ],
          },
        ],
      },
    ],
  };

  const careerProspectsData = {
    title:
      'Elite Career <span style="color: #0057E2;">Prospects</span> & <span style="color: #f97316;">High-Paying</span> AI & ML Roles',
    subtitle:
      "After completing the premier Machine Learning & Artificial Intelligence Course in Mumbai, you won't just be entering the tech sector—you will be leading it. Whether you are launching your career via our AI Course for Freshers Mumbai or stepping into advanced engineering roles, graduating from the Best AI and ML Institute in Mumbai makes you highly eligible for impact-driven roles across top MNCs and global startups.",
    careerRoles: [
      "Machine Learning Engineer",
      "AI Consultant & Analyst",
      "Data Science Specialist",
      "Business Intelligence Developer",
      "AI Product Manager",
      "AI Developer & Researcher",
    ],
    salaryInfo: "Average Salary in India: ₹6 - 15 LPA (as per industry standard)",
    image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AiMLImage.jpg",
    buttonText: "Check Eligibility",
  };

  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Sayantika Ghosh",
        rating: 5,
        text: `"I never thought I’d understand terms like transformers or GANs, but EME Academy made it super clear. The trainers explained everything step-by-step. Easily the best machine learning course in Mumbai!"`,
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

  const alumniStudentsMumbai = [
    {
      id: 1,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-1.png",
      title: "Sukanya Ghosh",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 2,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-2.png",
      title: "Nuruzzaman Mondal",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 3,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
      title: "Vaishnavi",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 4,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
      title: "Aniket Shome",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 5,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
      title: "Supratim Sen",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 6,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
      title: "Souvik Mondal",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 7,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
      title: "Koushik Mondal",
      subtitle: "Mumbai, India",
      overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
  ];

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full">
        <InfiniteCall />
      </div>
      {/* Premium AI/ML custom-generated hero backdrop with dark overlay */}
      <div className="relative w-full bg-[url('/assets/images/GeneAI/aiml_hero_bg.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
        <div className="relative z-10 w-full">
          <CoursesHero {...heroData} {..._this} />
        </div>
      </div>
      <div className="flex w-full flex-col h-full bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div id="CourseCurriculum" className="flex w-full bg-white">
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>
      <div id="CourseProspects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="about" className="flex w-full bg-[#F4FBFE]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div id="WhyChooseUs" className="flex w-full bg-[#ffffff]">
        <WhyStudentsChooseUs />
      </div>
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert
          {..._this}
          title='Stop Guessing. Start Scaling. <span style="color: #FF7A00;">Talk to an AI Career Expert!</span>'
          description="Developing elite AI and ML models requires roadmap execution. Connect with our expert data scientists for a free 1-on-1 career mapping session."
          buttonText="Download Full Syllabus & Brochure →"
        />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport
          {..._this}
          badge="AI & ML Career Excellence"
          title="100% Dedicated Placement Support to Secure Your AI Leadership Role"
          customFeatures={[
            {
              id: 1,
              title: "Portfolio Projects & GitHub",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Build 10+ deployment-ready AI models on real corporate datasets.",
                "Strategic GitHub profile optimization to stand out to global recruiters.",
                "Highlight prompt engineering, fine-tuning, and neural net designs."
              ],
            },
            {
              id: 2,
              title: "Aptitude & Logical Reasoning",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Regular logic, math modeling, and predictive logic training.",
                "Full-length screening test practice for leading tech firms.",
                "Solve complex coding challenges and data structure algorithms."
              ],
            },
            {
              id: 3,
              title: "Technical Mock Interviews",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly white-board interviews focused on live ML architectures.",
                "Detailed reviews from senior Data Scientists and ML directors.",
                "Behavioral prep to explain AI models and training pipeline choices."
              ],
            },
            {
              id: 4,
              title: "Expert Career Guidance",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career mapping focused on specific AI domains (Computer Vision, NLP).",
                "Insights into emerging AI trends like RAG, Agents, and LLM Ops.",
                "Tactics for tech salary negotiation to maximize your starter CTC."
              ],
            },
            {
              id: 5,
              title: "Premium Hiring Connections",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Direct referrals to 100+ Hiring and Industry connections.",
                "Exclusive access to internal, unlisted AI & Data Science jobs.",
                "Regular campus drives and fast-track recruitment opportunities."
              ],
            },
            {
              id: 6,
              title: "Capstone Training & Demos",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop an end-to-end deployed AI agent or machine learning web app.",
                "Deploy models on AWS/Google Cloud for live production testing.",
                "Guided audit of pipeline efficiency and accuracy matrices."
              ],
            },
          ]}
        />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore
          {..._this}
          title="Ready to Command the AI Revolution?"
          description="Discover exactly how earning an industry-recognized Machine Learning Course with Certificate Mumbai can fast-track your journey into top-tier AI engineering."
          buttonText="Download Complete Brochure"
        />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle="750+ Students placed last year alone! Salary Ranges up to ₹40,000 per month"
        />
      </div>
      <div className="flex flex-col justify-center w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <NewsHomeLanding {..._this} />
      </div>
      <div id="testimonials" className="flex w-full">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full bg-white">
        <Awards />
      </div>
      <div className="w-full bg-[#F4FBFE]">
        <Faqs faqs={faqs} />
      </div>
      <CoursesLandingFooter courseName="AI & ML Course" {..._this} />
      <StickyCTAButton {..._this} />
    </main>
  );
}
