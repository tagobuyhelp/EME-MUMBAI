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
  CheckCircle2 
} from "lucide-react";

export default function PlacementSupport({
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
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

  const features = [
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
            Your Bridge to the Corporate World
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-black text-gray-900 leading-tight"
          >
            Placement Support to <span className="text-[#0057E2]">Secure Your Dream Role</span>
          </motion.h2>

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
                    <feature.icon className={`h-4.5 w-4.5 md:h-5.5 md:w-5.5 ${feature.color}`} />
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
