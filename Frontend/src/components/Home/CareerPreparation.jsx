"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import LandingAdmissionForm from "../common/LandingAdmissionForm";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Positive Feedback", value: 93, icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Alumni Placed", value: 80, icon: Users, color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Average Salary Hike", value: 55, icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
  { label: "Placement Support", value: 99, icon: Award, color: "text-purple-500", bg: "bg-purple-50" },
];

const Loader = ({ value, color }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setProgress(value);
          clearInterval(timer);
        } else {
          setProgress(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [value, isVisible]);

  return (
    <motion.div 
      onViewportEnter={() => setIsVisible(true)}
      className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
    >
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-gray-100"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className={color}
          initial={{ strokeDasharray: "264 264", strokeDashoffset: 264 }}
          animate={isVisible ? { strokeDashoffset: 264 - (264 * value) / 100 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
};

export default function CareerPreparation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses: [
      "Data Analytics Course", "Sap Course", "Digital Marketing Course",
      "HR Management Course", "Web Development Course", "Data Science Course",
      "Graphics Designing Course", "Cyber Security Course", "UI UX Course",
      "Animation & VFX Course", "Cloud Computing Course", "Prompt Engineering with AI Course"
    ],
    Courses: "All Course",
    email_sender: "ALL",
    Brochure: "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing",
    BrochureName: "EME-brochure-2024.pdf",
    ctaType,
    setCtaType,
  };

  const highlights = [
    "Industry-Standard Curriculum",
    "Hands-on Project Training",
    "100% Placement Assistance",
    "Expert Mentor Guidance"
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
          
          {/* Left: Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[42%] flex items-center"
          >
            <div className="relative w-full z-10 rounded-[24px] overflow-hidden shadow-xl shadow-blue-50 border-2 border-white group">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/StudentGrowth.png"
                alt="Student Growth"
                width={480}
                height={480}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0057E2]/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center gap-3 max-w-[180px]"
            >
              <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xl font-black text-gray-900 leading-none">15k+</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">Alumni</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content Side */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center space-y-4 py-2">
            <div className="space-y-2.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-100 px-3 py-1 text-[10px] md:text-xs text-orange-600 font-bold bg-orange-50/50"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Empowering Career Growth
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
              >
                Building Careers in Mumbai via <span className="text-[#0057E2]">Practical Excellence</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-[13px] md:text-sm leading-relaxed max-w-lg"
              >
                Join Western India&apos;s leading institute. We bridge the gap between academic learning and industry needs with our professional programs.
              </motion.p>
            </div>

            {/* Highlight Bullets */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {highlights.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="flex items-center gap-2"
                >
                  <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-2.5 w-2.5 text-[#0057E2]" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-4 pt-3 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Loader value={stat.value} color={stat.color} />
                  <p className="mt-2 text-[9px] font-black text-gray-500 uppercase tracking-tight text-center leading-normal max-w-[85px] break-words">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => {
                      setCtaType("normal");
                      setIsModalOpen(true);
                    }}
                    size="lg"
                    className="h-11 px-8 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-xs shadow-lg shadow-blue-50 transition-all hover:scale-105"
                  >
                    Start Your Journey
                  </Button>
                </DialogTrigger>
                <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                  <LandingAdmissionForm {..._this} />
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
