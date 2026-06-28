"use client";
import React, { useState } from "react";
import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import BottomNavBar from "@/components/BestDataAnalyticsMumbaiLanding/BottomNavBar";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import PodcastHome from "@/components/common/PodcastHome";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Premium Components
import HeroSection from "@/components/BestDataAnalyticsMumbaiLanding/HeroSection";
import SkillsCurriculum from "@/components/BestDataAnalyticsMumbaiLanding/SkillsCurriculum";
import CareerOpportunities from "@/components/BestDataAnalyticsMumbaiLanding/CareerOpportunities";
import WhyChooseUs from "@/components/BestDataAnalyticsMumbaiLanding/WhyChooseUs";
import PlacementSupportSection from "@/components/BestDataAnalyticsMumbaiLanding/PlacementSupportSection";
import PremiumLandingForm from "@/components/BestDataAnalyticsMumbaiLanding/PremiumLandingForm";
import Image from "next/image";

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

const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Nidhi Agarwal",
      rating: 4,
      text: `"Is course ke baad 50% salary hike mili! Data Analytics is a must-have skill in today's time and the instructors at EME Academy Mumbai are just amazing. I believe that their mentorship was a key factor in helping me secure this role as a Data Visualisation Specialist"`,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-1.png",
      role: "Data Visualisation Specialist",
      note: "Placed at Cognizant",
    },
    {
      id: 2,
      name: "Aniket Sharma",
      rating: 4,
      text: `"I had no prior experience in data analytics, but EME Academy Mumbai made it so easy! The Python and SQL modules were explained step by step, and the hands-on projects gave me the confidence to apply for my first Data Analyst job."`,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
      role: "Junior Data Analyst",
      note: "Placed at HSBC",
    },
    {
      id: 3,
      name: "Arindam Banerjee",
      rating: 5,
      text: `"Ami kokhono bhabini Data Analytics amake ei rokom career opportunity debe. EME Academy Mumbai'r guidance ar Power BI & Tableau er practical knowledge amar life-e onek boro change ene diyeche."`,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
      role: "Business Intelligence Analyst",
      note: "Placed at HCL",
    },
    {
      id: 4,
      name: "Rituparna Ghosh",
      rating: 5,
      text: `"Training sesh howar agei interview call peyechilam. Power BI ar SQL niye confidence build korechhi ar akhon ekta top company te BI Analyst er position e kaj korchi."`,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
      role: "BI Analyst",
      note: "Placed at HSBC",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

const FAQData = [
  {
    id: 1,
    title: "Is this for students or working professionals?",
    desc: "Both. Students, freshers and working professionals can join according to their schedule.",
  },
  {
    id: 2,
    title: "Will I get a project I can show in interviews?",
    desc: "Yes, you will complete a capstone project using a real dataset that becomes part of your portfolio.",
  },
  {
    id: 3,
    title: "How can I book a counselling call?",
    desc: "Fill out the form on this page or message us on WhatsApp, and our counsellors will call you.",
  },
  {
    id: 4,
    title: "Is this course suitable for freshers?",
    desc: "Yes. It is specifically designed for students and fresh graduates as well as working professionals.",
  },
  {
    id: 5,
    title: "Do I need coding knowledge?",
    desc: "No. The course starts from the fundamentals and gradually introduces Python.",
  },
];

export default function BestDataAnalyticsClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState("normal");

  const Courses = "Data Analytics Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
  const BrochureName = "data_analytics_brochure.pdf";

  const _this = {
    Courses,
    SelectCourses: [Courses],
    email_sender,
    Brochure,
    BrochureName,
    isModalOpen,
    setIsModalOpen,
    ctaType,
    setCtaType,
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      {/* Old Ad-Driven Header Elements */}
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full">
        <InfiniteCall />
      </div>

      {/* New Premium Design Body */}
      <div id="overview">
        <HeroSection _this={_this} />
      </div>
      
      <div id="career">
        <CareerOpportunities _this={_this} />
      </div>
      <div className="flex w-full flex-col h-full  bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
          _this={_this}
        />
      </div>
      
      <div id="curriculum">
        <SkillsCurriculum _this={_this} />
      </div>
      <div className="flex flex-col justify-center w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <NewsHomeLanding {..._this} />
      </div>
      <div id="highlights">
        <WhyChooseUs _this={_this} />
      </div>

      

      <div id="placement">
        <PlacementSupportSection _this={_this} />
      </div>

      {/* Trust & Alumni Section */}
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8 pt-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone! Salary Ranges from ₹25,000 to ₹60,000 per month"}
        />
      </div>

      <PodcastHome _this={_this} />

      <div id="testimonials" className="flex w-full mt-4 bg-white py-8">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={FAQData} />
      </div>

      {/* Old Ad-Driven Footer Elements */}
      <CoursesLandingFooter courseName="Data Analytics Course" {..._this} />
      <BottomNavBar _this={_this} />

      {/* Admission Form Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed w-fit top-[50%] rounded-3xl p-0 border-none bg-transparent z-[9999]">
          <VisuallyHidden>
            <DialogTitle>Admission Form</DialogTitle>
          </VisuallyHidden>
          <div className="w-full max-w-[400px]">
            <PremiumLandingForm {..._this} />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
