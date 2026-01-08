"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import LandingAdmissionForm from "../common/LandingAdmissionForm";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const stats = [
  { label: "Positive Feedback", value: 93 },
  { label: "Alumni Placed", value: 80 },
  { label: "Average Salary Hike", value: 55 },
  { label: "Placement Support", value: 99 },
];

const Loader = ({ value }) => {
  const [progress, setProgress] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            setIsAnimated(false);
            return value;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [value, isAnimated]);

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e5e7eb"
          strokeWidth="7"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00A2E7"
          strokeWidth="7"
          fill="none"
          strokeDasharray="282.743"
          strokeDashoffset={282.743 - (282.743 * progress) / 100}
          initial={{ strokeDashoffset: 282.743 }}
          animate={{ strokeDashoffset: 282.743 - (282.743 * progress) / 100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
        {progress}%
      </div>
    </div>
  );
};

export default function CareerPreparation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = "All Course";
  const email_sender = "ALL";
  const SelectCourses = [
    "Data Analytics Course",
    "Sap Course",
    "Digital Marketing Course",
    "HR Management Course",
    "Web Development Course",
    "Data Science Course",
    "Graphics Designing Course",
    "Cyber Security Course",
    "UI UX Course",
    "Animation & VFX Course",
    "Cloud Computing Course",
    "Prompt Engineering with AI Course"
  ];
  const Brochure =
    "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  return (
    <div className="w-full max-w-[1200px] gap-4 md:gap-2 flex flex-col-reverse md:flex-row justify-center items-center py-2 md:py-0 px-4 md:px-6 mx-auto">
      <div className="flex-shrink-0">
        <Image
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/StudentGrowth.png"
          alt="Student Growth"
          width={500}
          height={500}
          className="h-full rounded-xl px-4 md:px-0"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="md:hidden mt-4 w-full md:w-fit flex justify-center md:justify-start bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-full font-semibold text-[12px] md:text-[14px] md:px-[44px]"
            >
              Explore Our Courses
            </Button>
          </DialogTrigger>
          <DialogContent className="fixed w-fit top-[50%] rounded-lg">
            <LandingAdmissionForm {..._this} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 space-y-2 p-3 md:p-6">
        <div className="inline-flex items-center rounded-full border px-3 py-2 text-sm text-[#FD7900] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFF8F1] cursor-pointer">
          <span className="text-xs mr-1">
            <Image
              src="/assets/images/Home/icons/tickIcon.svg"
              width={10}
              height={10}
              alt="Ticked"
              className="h-4 w-4 mr-1"
            />
          </span>{" "}
          Career Building Program
        </div>

        <h2 className="text-[18px] md:text-[24px] font-bold text-gray-800">
          Empowering Learners in Kolkata Through Cutting-Edge Professional
          Training Courses and Career Excellence
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {stats.map((stat, index) => (
            <div key={index} className="p-2 md:p-4 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Loader value={stat.value} />
                <div className="mt-2 text-center text-[12px] font-medium text-nowrap text-gray-700">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
