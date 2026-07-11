"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FileText, 
  Brain, 
  MessagesSquare, 
  UserCheck, 
  Briefcase, 
  Layout, 
  CheckCircle2,
  Palette
} from "lucide-react";

export default function PlacementSupport({
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
  mode = "default",
  badge,
  title,
  description,
  customFeatures,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const defaultFeatures = [
    {
      id: 1,
      title: "Profile & Brand Building",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "Job-ready professional resumes",
        "Recruiter-focused LinkedIn optimization",
        "Project & skill showcasing"
      ],
    },
    {
      id: 2,
      title: "Cognitive & Aptitude Prep",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily logic & reasoning practice",
        "Full-length aptitude mock tests",
        "Speed & accuracy enhancement"
      ],
    },
    {
      id: 3,
      title: "Interview Confidence",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly HR & technical mocks",
        "Personalized performance feedback",
        "Real-world scenario prep"
      ],
    },
    {
      id: 4,
      title: "Dedicated Career Coaching",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "1-on-1 career counseling",
        "Latest industry trend insights",
        "Professional salary negotiation"
      ],
    },
    {
      id: 5,
      title: "Exclusive Corporate Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Access to 50+ hiring partners",
        "Exclusive job portal access",
        "Direct corporate interview referrals"
      ],
    },
    {
      id: 6,
      title: "Real-World Portfolio",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Real-world capstone projects",
        "Guided mentor-led development",
        "Employer-ready work showcase"
      ],
    },
  ];

  const webDevFeatures = [
    {
      id: 1,
      title: "Resume & LinkedIn Optimization",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "Craft job-ready, ATS-friendly professional resumes",
        "Recruiter-focused LinkedIn profile optimization",
        "Strategic project and technical skill showcasing"
      ],
    },
    {
      id: 2,
      title: "Tech Aptitude Training",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily logic, algorithms, & reasoning practice",
        "Full-length IT aptitude and coding mock tests",
        "Speed and accuracy enhancement for initial hiring rounds"
      ],
    },
    {
      id: 3,
      title: "Interview Mastery",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly rigorous HR and technical mock interviews",
        "Personalized performance feedback from senior developers",
        "Real-world scenarios and live-coding whiteboard prep"
      ],
    },
    {
      id: 4,
      title: "Expert Career Mentorship",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "1-on-1 career counseling tailored to your goals",
        "Insider insights on the latest hiring trends and tech stacks",
        "Professional salary negotiation tactics to maximize your CTC"
      ],
    },
    {
      id: 5,
      title: "Elite Hiring Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Direct pipeline access to 50+ premium tech hiring partners",
        "Exclusive access to our internal, unlisted job portal",
        "Direct corporate interview referrals to fast-track your hiring"
      ],
    },
    {
      id: 6,
      title: "Live Portfolio Building",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Develop real-world, deployable capstone projects",
        "Guided, mentor-led GitHub profile development",
        "Build an employer-ready showcase proving your Frontend and Backend skills"
      ],
    },
  ];

  const digitalMarketingFeatures = [
    {
      id: 1,
      title: "Resume & LinkedIn Optimization",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "Craft job-ready, ATS-friendly professional marketing resumes",
        "Recruiter-focused LinkedIn profile optimization",
        "Strategic campaign, ROI, and skill showcasing"
      ],
    },
    {
      id: 2,
      title: "Analytical Aptitude Training",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily data interpretation & reasoning practice",
        "Full-length analytical mock tests for top-tier agencies",
        "Speed and accuracy enhancement for media buying math"
      ],
    },
    {
      id: 3,
      title: "Interview Mastery",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly rigorous HR and technical marketing mocks",
        "Personalized performance feedback from senior strategists",
        "Real-world client pitch and campaign scenario prep"
      ],
    },
    {
      id: 4,
      title: "Expert Career Mentorship",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "1-on-1 career counseling tailored to your specific niche",
        "Insider insights on the latest algorithm updates & hiring trends",
        "Professional salary negotiation tactics to maximize your CTC"
      ],
    },
    {
      id: 5,
      title: "Elite Hiring Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Access to 50+ premium marketing and agency hiring partners",
        "Exclusive access to our internal, unlisted job portal",
        "Direct corporate interview referrals to fast-track your hiring"
      ],
    },
    {
      id: 6,
      title: "Live Portfolio Building",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Develop real-world, data-backed capstone campaigns",
        "Guided, mentor-led case study development",
        "Build an employer-ready showcase proving your actual ROI generation"
      ],
    },
  ];

  const graphicDesignFeatures = [
    {
      id: 1,
      title: "Creative Portfolio Review",
      icon: Palette,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "1-on-1 sessions with senior art directors to critique your portfolio",
        "Refine your projects to meet elite agency standards",
        "Strategic project selection to showcase your creative range"
      ],
    },
    {
      id: 2,
      title: "Design Aptitude Training",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily practice in visual reasoning and color psychology",
        "Layout logic drills for print and digital media",
        "Speed and accuracy enhancement for deadline-driven design"
      ],
    },
    {
      id: 3,
      title: "Interview Mastery",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly rigorous mock interviews for agency roles",
        "Personalized feedback on design presentation & storytelling",
        "Real-world client pitch scenarios and portfolio walkthroughs"
      ],
    },
    {
      id: 4,
      title: "Expert Design Mentorship",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "Career roadmap planning with industry veterans",
        "Insider insights on global branding and design trends",
        "Professional salary negotiation tactics for creative roles"
      ],
    },
    {
      id: 5,
      title: "Elite Agency Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Access to 50+ premium design studios and ad agencies",
        "Exclusive access to our internal, unlisted design job portal",
        "Direct corporate interview referrals to fast-track your hiring"
      ],
    },
    {
      id: 6,
      title: "Live Client Case Studies",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Develop real-world branding for actual business requirements",
        "Guided, mentor-led execution of commercial design briefs",
        "Build a showcase of work that has been used in live markets"
      ],
    },
  ];

  const sapFeatures = [
    {
      id: 1,
      title: "Resume & LinkedIn Optimization",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "Hand-crafted, ATS-friendly resumes for SAP consultant roles",
        "Strategic LinkedIn profile optimization for MNC visibility",
        "Expert guidance on showcasing module-specific SAP skills"
      ],
    },
    {
      id: 2,
      title: "Analytical Aptitude Training",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily practice in enterprise logic and data interpretation",
        "Full-length aptitude mock tests for top-tier hiring firms",
        "Speed and accuracy enhancement for consultant-level reasoning"
      ],
    },
    {
      id: 3,
      title: "Interview Mastery",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly technical mocks led by active SAP consultants",
        "Personalized performance feedback and scoring",
        "Real-world enterprise scenario and configuration prep"
      ],
    },
    {
      id: 4,
      title: "Expert Career Mentorship",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "1-on-1 counseling tailored to your SAP module specialization",
        "Insider insights on enterprise trends and hiring cycles",
        "Professional salary negotiation tactics to maximize your CTC"
      ],
    },
    {
      id: 5,
      title: "Elite Hiring Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Direct pipeline to our network of 100+ hiring MNCs",
        "Exclusive access to our internal, enterprise job portal",
        "Priority interview referrals for certified SAP consultants"
      ],
    },
    {
      id: 6,
      title: "Live Case Study Execution",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Develop real-world enterprise projects on live SAP servers",
        "Guided, mentor-led execution of complex business scenarios",
        "Build a hands-on portfolio proving your configuration skills"
      ],
    },
  ];

  const dataScienceFeatures = [
    {
      id: 1,
      title: "AI-Optimized Resume & LinkedIn",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      points: [
        "Craft job-ready, ATS-friendly professional Data Science resumes.",
        "Strategic GitHub and Kaggle portfolio optimization.",
        "High-impact technical project and ROI showcasing."
      ],
    },
    {
      id: 2,
      title: "Analytical & Technical Mocks",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      points: [
        "Daily technical reasoning & data logic practice.",
        "Full-length coding mock tests for top-tier tech firms.",
        "Speed and accuracy drills for statistical modeling."
      ],
    },
    {
      id: 3,
      title: "Technical Interview Mastery",
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-50",
      points: [
        "Weekly technical mock interviews led by senior data scientists.",
        "Personalized feedback on statistical modeling & algorithm design.",
        "Prep for live coding, SQL queries, and case study defense."
      ],
    },
    {
      id: 4,
      title: "Expert Career Mentorship",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      points: [
        "1-on-1 career mentoring mapped to analytics & machine learning roles.",
        "Insider insights on AI/ML frameworks, cloud platforms, and big data trends.",
        "Salary negotiation coaching for specialized data roles."
      ],
    },
    {
      id: 5,
      title: "Elite Hiring Network",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      points: [
        "Direct pipeline to 50+ premium product, fintech, and analytics hiring companies.",
        "Exclusive access to our internal job board for junior data roles.",
        "Direct corporate interview referrals to fast-track your hiring."
      ],
    },
    {
      id: 6,
      title: "Live Project Portfolio Building",
      icon: Layout,
      color: "text-pink-500",
      bg: "bg-pink-50",
      points: [
        "Develop enterprise-grade ML models and dashboard visualization projects.",
        "Guided, mentor-led Kaggle case studies and model deployment workflows.",
        "Build a GitHub portfolio demonstrating clean code, EDA, and statistical insights."
      ],
    },
  ];

  const features = customFeatures || (mode === "web-dev" 
    ? webDevFeatures 
    : mode === "digital-marketing"
    ? digitalMarketingFeatures
    : mode === "graphic-design"
    ? graphicDesignFeatures
    : mode === "sap"
    ? sapFeatures
    : mode === "data-science"
    ? dataScienceFeatures
    : defaultFeatures);

  const iconMap = {
    FileText,
    Brain,
    MessagesSquare,
    UserCheck,
    Briefcase,
    Layout,
    CheckCircle2,
    Palette
  };

  return (
    <section className="w-full py-6 md:py-10 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-repeat opacity-[0.08] pointer-events-none" />
      
      <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-6 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 px-3 py-1 text-[10px] md:text-xs text-[#0057E2] font-bold bg-blue-50/50"
          >
            <Briefcase className="h-3.5 w-3.5" />
            {badge || "Your Bridge to the Corporate World"}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-black text-gray-900 leading-tight"
          >
            {title || (
              <>
                Placement Support to <span className="text-[#0057E2]">Secure Your Dream Role</span>
              </>
            )}
          </motion.h2>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4 font-medium"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative h-1 w-16"
          >
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="line"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full p-3 md:p-5 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,87,226,0.08)] transition-all duration-500 group flex flex-col">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-4 mb-2 md:mb-4 text-center sm:text-left">
                  <div className={`h-9 w-9 md:h-11 md:w-11 rounded-lg md:rounded-xl ${feature.bg} flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                    {(() => {
                      const Icon = typeof feature.icon === 'string' ? iconMap[feature.icon] : feature.icon;
                      return <Icon className={`h-4.5 w-4.5 md:h-5.5 md:w-5.5 ${feature.color}`} />;
                    })()}
                  </div>
                  <h3 className="text-xs md:text-base font-black text-gray-800 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-1.5 md:space-y-2.5 flex-1 hidden sm:block">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-2 w-2 md:h-2.5 md:w-2.5 text-[#0057E2]" />
                      </div>
                      <span className="text-[10px] md:text-[13px] text-gray-600 font-medium leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Mobile point summary */}
                <div className="sm:hidden mt-auto">
                  <p className="text-[9px] font-bold text-[#0057E2] uppercase tracking-tighter">
                    {feature.points.length} Key Services
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
   );
 }
