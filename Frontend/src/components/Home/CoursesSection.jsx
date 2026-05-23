"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LandingAdmissionForm from "../common/LandingAdmissionForm";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import CTAButton from "../common/CtaButton";

export default function CoursesSection() {
  // Course categories
  const categories = [
    { id: "all", name: "All Courses" },
    { id: "data-science", name: "Data Analytics" },
    { id: "sap", name: "SAP" },
    { id: "digital-marketing", name: "Digital Marketing" },
    { id: "web-development", name: "Web Development" },
    { id: "hr", name: "HR Management" },
    { id: "others", name: "Professional" },
  ];

  // Course data
  const allCourses = [
    {
      id: 1,
      title: "Data Analytics",
      category: "data-science",
      image: "/assets/images/Home/courses/data-analytics-course-dashboard-training.webp",
      rating: 4.9,
      reviews: "1.2k",
      duration: "6 Months",
      originalPrice: 45000,
      discountedPrice: 35000,
      saving: "22% OFF",
      languages: ["Bengali", "English", "Hindi"],
      popular: true,
      popularText: "Most Popular",
      link: "/data-analytics-course-in-mumbai",
      description: "Master Excel, SQL, Python, and Power BI with real-world projects.",
      features: ["100% Placement Support", "Industry Projects", "Expert Mentors"]
    },
    {
      id: 2,
      title: "SAP Training",
      category: "sap",
      image: "/assets/images/Home/courses/sap-training-course-erp-learning.webp",
      rating: 4.9,
      reviews: "1.5k",
      duration: "4 Months",
      originalPrice: 40000,
      discountedPrice: 35000,
      saving: "12% OFF",
      languages: ["Bengali", "English", "Hindi"],
      popular: true,
      popularText: "MNC Favorite",
      link: "/maincourse/sap-training-mumbai",
      description: "Comprehensive SAP FICO, MM, SD training with S/4 HANA curriculum.",
      features: ["Global Certification", "Live Server Access", "MNC Hired Students"]
    },
    {
      id: 3,
      title: "Digital Marketing",
      category: "digital-marketing",
      image: "/assets/images/Home/courses/digital-marketing-course-analytics-training.webp",
      rating: 4.9,
      reviews: "433",
      duration: "4 Months",
      originalPrice: 35000,
      discountedPrice: 30000,
      saving: "14% OFF",
      languages: ["Bengali", "English", "Hindi"],
      popular: true,
      popularText: "Trending",
      link: "/maincourse/digital-marketing-course-in-mumbai",
      description: "Advanced SEO, SEM, Social Media, and Content Marketing with AI tools.",
      features: ["Live Ad Campaigns", "AI Marketing Tools", "Agency Experience"]
    },
    {
      id: 4,
      title: "HR Management",
      category: "hr",
      image: "/assets/images/Home/courses/hr-management-course-interview-training.webp",
      rating: 4.9,
      reviews: "179",
      duration: "4 Months",
      originalPrice: 40000,
      discountedPrice: 35000,
      saving: "12% OFF",
      popular: true,
      popularText: "Strategic Learning",
      link: "/human-resource-course-in-mumbai",
      description: "Master Payroll, Recruitment, Compliance, and Strategic HR Management.",
      features: ["Practical Payroll", "Corporate HR Skills", "Mock Interviews"]
    },
    {
      id: 5,
      title: "Web Development",
      category: "web-development",
      image: "/assets/images/Home/courses/web-development-course-full-stack-training.webp",
      rating: 4.8,
      reviews: "300",
      duration: "6 Months",
      originalPrice: 50000,
      discountedPrice: 40000,
      saving: "20% OFF",
      popular: true,
      popularText: "Job Ready",
      link: "/maincourse/web-development",
      description: "Full Stack Development using MERN stack - MongoDB, Express, React, Node.",
      features: ["Real-world Apps", "GitHub Portfolio", "Agile Training"]
    },
    {
      id: 6,
      title: "Data Science",
      category: "data-science",
      image: "/assets/images/Home/courses/data-science-course-ai-machine-learning-training.webp",
      rating: 4.9,
      reviews: "280",
      duration: "6 Months",
      originalPrice: 50000,
      discountedPrice: 40000,
      saving: "20% OFF",
      popular: true,
      popularText: "Elite Tech",
      link: "/maincourse/data-science-course-in-mumbai",
      description: "Advanced Machine Learning, Deep Learning, and AI with Python.",
      features: ["Capstone Projects", "Statistical Analysis", "Research Support"]
    },
    {
      id: 7,
      title: "Graphic Designing",
      category: "others",
      image: "/assets/images/Home/courses/graphic-design-course-creative-training.webp",
      rating: 4.8,
      reviews: "150",
      duration: "4 Months",
      originalPrice: 30000,
      discountedPrice: 25000,
      saving: "16% OFF",
      popular: true,
      popularText: "Creative Excellence",
      link: "/maincourse/graphic-design-course-in-mumbai",
      description: "Master Photoshop, Illustrator, InDesign for professional visual communication.",
      features: ["Creative Portfolio", "Design Principles", "Freelancing Tips"]
    },
    {
      id: 8,
      title: "Business Accounting",
      category: "others",
      image: "/assets/images/Home/courses/business-accounting-course-gst-finance-training.webp",
      rating: 4.7,
      reviews: "120",
      duration: "3 Months",
      originalPrice: 25000,
      discountedPrice: 20000,
      saving: "20% OFF",
      popular: true,
      popularText: "Practical Finance",
      link: "/maincourse/business-accounting-course-in-mumbai",
      description: "Practical Tally Prime, GST, Income Tax, and Financial Accounting.",
      features: ["GST Filing", "Taxation Skills", "Tally Certification"]
    },
    {
      id: 9,
      title: "LinkedIn Course",
      category: "others",
      image: "/assets/images/linkedin/linkedin-course-hero-career-growth-engagement.webp",
      rating: 4.9,
      reviews: "95",
      duration: "3 Months",
      originalPrice: 30000,
      discountedPrice: 25000,
      saving: "16% OFF",
      popular: true,
      popularText: "Career Growth",
      link: "/best-linkedin-course-for-career-hiring-growth",
      description: "Master LinkedIn for career growth, personal branding, and lead generation.",
      features: ["Personal Branding", "Lead Generation", "Career Growth Strategies"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const filteredCourses = activeCategory === "all" 
    ? allCourses 
    : allCourses.filter(course => course.category === activeCategory);

  const displayedCourses = filteredCourses.slice(0, visibleCourses);
  const canLoadMore = visibleCourses < filteredCourses.length;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="w-full py-12 md:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="container max-w-[1240px] mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-blue-100 px-3 py-1 text-sm text-[#0057E2] font-semibold bg-blue-50/50 mb-4"
          >
            Explore Courses
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight mb-4"
          >
            Unlock Your Career Potential with <br className="hidden md:block" />
            <span className="text-[#0057E2] relative inline-block">
              Expert-Led Training
              
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl text-base md:text-lg mb-8"
          >
            Master in-demand skills with Mumbai&apos;s leading IT training
            institute. Join 5,000+ successful alumni who have transformed their
            careers through our job-ready curriculum and dedicated placement
            support.
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleCourses(6);
                }}
                className={cn(
                  "px-5 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 border-2",
                  activeCategory === category.id
                    ? "bg-[#0057E2] text-white border-[#0057E2] shadow-[0_8px_20px_rgba(0,87,226,0.25)]"
                    : "bg-white text-gray-500 hover:text-[#0057E2] border-gray-100 hover:border-[#0057E2]/20"
                )}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Courses Display */}
        <div className="relative">
          {isMobile ? (
            <div className="px-2">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {displayedCourses.map((course) => (
                    <CarouselItem key={course.id} className="pl-4 basis-[88%] sm:basis-[70%]">
                      <div className="py-4">
                        <CourseCard course={course} formatPrice={formatPrice} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-4">
                  <CarouselPrevious className="static h-12 w-12 border-2 border-blue-50 text-blue-600 bg-white hover:bg-blue-50 shadow-sm translate-y-0" />
                  <CarouselNext className="static h-12 w-12 border-2 border-blue-50 text-blue-600 bg-white hover:bg-blue-50 shadow-sm translate-y-0" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: idx * 0.05,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    <CourseCard course={course} formatPrice={formatPrice} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Load More */}
        {canLoadMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setVisibleCourses(prev => prev + 3)}
              variant="outline"
              className="px-10 py-6 rounded-xl border-2 border-blue-100 text-blue-600 font-bold hover:bg-blue-50 transition-colors"
            >
              View More Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function CourseCard({ course, formatPrice }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  
  const _this = {
    isModalOpen,
    setIsModalOpen,
    ctaType,
    setCtaType,
    SelectCourses: [course.title],
    Courses: course.title,
    email_sender: "ALL",
    Brochure: "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing",
    BrochureName: "EME-brochure-2024.pdf"
  };

  return (
    <Card className="group h-full flex flex-col rounded-[24px] overflow-hidden border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,87,226,0.1)] transition-all duration-500 relative p-0 gap-0">
      {/* Card Header/Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {course.popular && (
          <div className="absolute top-3 left-3 z-10 bg-[#0057E2] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
            {course.popularText}
          </div>
        )}
        <Image
          src={course.image}
          alt={course.title}
          fill
          className=" transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-[#0057E2] uppercase tracking-widest">{course.category.replace('-', ' ')}</span>
            <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#0057E2] transition-colors duration-300 leading-tight">
              {course.title}
            </h3>
          </div>
          <div className="flex items-center bg-yellow-50 px-1.5 py-0.5 rounded-lg border border-yellow-100">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-xs font-bold text-gray-700">{course.rating}</span>
          </div>
        </div>

        <p className="text-[13px] text-gray-500 line-clamp-2 mb-3 leading-snug">
          {course.description}
        </p>

        {/* Course Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.features?.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-[9px] font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
              {feature}
            </span>
          ))}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <Image src="/assets/icons/DurationIcon.svg" alt="icon" width={14} height={14} />
              </div>
              <span className="text-[11px] font-semibold text-gray-600">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-gray-400">Reviews:</span>
              <span className="text-[11px] font-bold text-gray-700">{course.reviews}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-dashed border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Course Fee</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-[#0057E2] tracking-tight">{formatPrice(course.discountedPrice)}</span>
                  <span className="text-[11px] text-gray-400 line-through decoration-red-400/50">{formatPrice(course.originalPrice)}</span>
                </div>
              </div>
              <div className="bg-green-50 text-green-600 px-2 py-1 rounded-lg border border-green-100">
                <span className="text-[10px] font-black italic">{course.saving}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full py-2.5 px-3 rounded-xl text-[11px] font-bold text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#0057E2]/30 transition-all duration-300">
                Brochure
              </button>
            </DialogTrigger>
            <DialogContent className="fixed w-fit top-[50%] rounded-lg">
              <LandingAdmissionForm {..._this} />
            </DialogContent>
          </Dialog>
          
          <Link href={course.link} className="w-full">
            <button className="w-full h-full py-2.5 px-3 rounded-xl text-[11px] font-bold text-white bg-[#0057E2] hover:bg-[#0047C2] shadow-lg shadow-blue-100 flex items-center justify-center gap-1.5 transition-all duration-300 group/btn">
              Explore <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
