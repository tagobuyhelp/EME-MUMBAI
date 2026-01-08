"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Clock,
  Users,
  Globe,
  ArrowRight,
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
  useCarousel,
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
    { id: "web-development", name: "Web Development" },
    { id: "digital-marketing", name: "Digital Marketing" },
    { id: "designing", name: "Designing" },
    { id: "ai", name: "Gen AI Course" },
    { id: "others", name: "Others" },
  ];

  // Course data
  const allCourses = [
    {
      id: 1,
      title: "Data Analytics",
      category: "data-science",
      image: "/assets/images/Home/courses/DataAnalytics.png",
      rating: 4.9,
      reviews: "1200",
      duration: "6 Months",
      originalPrice: 45000,
      discountedPrice: 35000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      popular: true,
      popularText: "Popular",
      link: "/data-analytics-course-in-kolkata",
    },
    {
      id: 2,
      title: "SAP",
      category: "sap",
      image: "/assets/images/Home/courses/SAP.png",
      rating: 4.9,
      reviews: 1500,
      duration: "4 Months",
      originalPrice: 40000,
      discountedPrice: 35000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      popular: true,
      popularText: "Trending",
      link: "/maincourse/sap-training-kolkata",
    },
    {
      id: 3,
      title: "Digital Marketing",
      category: "digital-marketing",
      image: "/assets/images/Home/courses/DigitalMarketing.png",
      rating: 4.9,
      reviews: 433,
      duration: "4 Months",
      originalPrice: 35000,
      discountedPrice: 30000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      popular: false,
      link: "/maincourse/digital-marketing-course-in-kolkata",
    },
    {
      id: 4,
      title: "HR",
      category: "others",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HRCourse.jpg",
      rating: 4.9,
      reviews: 179,
      duration: "4 Months ",
      originalPrice: 40000,
      discountedPrice: 35000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/human-resource-course-in-kolkata",
    },
    {
      id: 5,
      title: "Web Development",
      category: "web-development",
      image: "/assets/images/Home/courses/WebDev.png",
      rating: 4.8,
      reviews: 300,
      duration: "6 Months",
      originalPrice: 50000,
      discountedPrice: 40000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/maincourse/web-development",
    },
    {
      id: 6,
      title: "Data Science",
      category: "data-science",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/DataScienceLandingCourse.jpg",
      rating: 4.9,
      reviews: 280,
      duration: "6 Months",
      originalPrice: 50000,
      discountedPrice: 40000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/data-science-course-in-kolkata",
    },
    {
      id: 7,
      title: "Graphic Designing",
      category: "designing",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/graphicCourse.jpg",
      rating: 4.8,
      reviews: 320,
      duration: "6 Months",
      originalPrice: 40000,
      discountedPrice: 30000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/maincourse/graphic-design",
    },
    {
      id: 8,
      title: "Cyber Security",
      category: "others",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/cyberSecurityCourse.jpg",
      rating: 4.9,
      reviews: 176,
      duration: "6 Months",
      originalPrice: 45000,
      discountedPrice: 35000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/cyber-security-course-in-kolkata",
    },
    {
      id: 9,
      title: "Web Designing (UI/UX)",
      category: "designing",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/uiuxCourse.jpg",
      rating: 4.9,
      reviews: 175,
      duration: "6 Months",
      originalPrice: 45000,
      discountedPrice: 35000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/ui-ux-design-course-in-kolkata",
    },
    {
      id: 10,
      title: "Generative AI",
      category: "ai",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AIMLCourse.jpg",
      rating: 4.9,
      reviews: 177,
      duration: "6 Months",
      originalPrice: 55000,
      discountedPrice: 45000,
      saving: "after discount",
      languages: ["Bengali", "English", "Hindi"],
      link: "/generative-ai-course-training-in-kolkata",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCourses, setVisibleCourses] = useState(6);
  const categoryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Filter courses based on active category
  const filteredCourses =
    activeCategory === "all"
      ? allCourses
      : allCourses.filter((course) => course.category === activeCategory);

  // Visible courses based on load more functionality
  const displayedCourses = filteredCourses.slice(0, visibleCourses);

  // Check if we can load more courses
  const canLoadMore = visibleCourses < filteredCourses.length;

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleCourses(6); // Reset visible courses when changing category
  };

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCourses((prev) => Math.min(prev + 3, filteredCourses.length));
  };

  // Handle category scroll
  const scroll = (direction) => {
    if (categoryRef.current) {
      const { current } = categoryRef;
      const scrollAmount = direction === "left" ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check scroll possibility
  const checkScroll = () => {
    if (categoryRef.current) {
      const { current } = categoryRef;
      setCanScrollLeft(current.scrollLeft > 0);
      setCanScrollRight(
        current.scrollLeft < current.scrollWidth - current.clientWidth - 10
      );
    }
  };

  // Add scroll event listener for categories
  useEffect(() => {
    const { current } = categoryRef;
    if (current) {
      current.addEventListener("scroll", checkScroll);
      // Check on mount
      checkScroll();

      // Check on window resize
      window.addEventListener("resize", checkScroll);

      return () => {
        current.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  // Auto-scroll for mobile carousel
  useEffect(() => {
    if (isMobile && autoScroll && carouselRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollNext();
        }
      }, 5000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isMobile, autoScroll]);

  // Format price to INR
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full h-full max-w-[1380px] mx-auto flex flex-col items-center px-4 py-4 md:py-8">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="flex flex-wrap justify-center items-baseline gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
          Explore Our Professional
          <span className="flex flex-col items-end">
            <span className="text-[18px] md:text-[22px] text-[#232D63]">
              Training Courses in Kolkata
            </span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Decorative line"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>
        <p className="text-[14px] mt-2">
          Get Certified with Kolkata&apos;s Leading IT Training Institute
          Offering In-Demand Skills and Placement Support.
        </p>
      </div>

      {/* Categories Navigation */}
      <div className="hidden md:inline relative mb-8">
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        <div
          ref={categoryRef}
          className="flex overflow-x-auto scrollbar-hide gap-2 py-2 px-2"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            scrollPadding: "0 2rem",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "outline" : "default"}
              className={cn(
                "whitespace-nowrap bg-white hover:bg-white/95 text-[#0057E2] rounded-full",
                activeCategory === category.id
                  ? ""
                  : "text-[#0057E2] hover:text-[#0057E2]/90"
              )}
              onClick={() => handleCategoryChange(category.id)}
              style={{ scrollSnapAlign: "start" }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Mobile Carousel View */}
      {isMobile ? (
        <div className="w-full">
          <Carousel className="w-full relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between z-10">
              <CarouselPrevious className="static transform-none bg-white shadow-lg hover:bg-gray-50" />
              <CarouselNext className=" static transform-none bg-white shadow-lg hover:bg-gray-50" />
            </div>

            <CarouselContent>
              {displayedCourses.map((course) => (
                <CarouselItem key={course.id}>
                  <CourseCard course={course} formatPrice={formatPrice} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Load More Button for Mobile */}
          {canLoadMore && (
            <div className="flex justify-center mt-8">
              <Button
                variant=""
                onClick={handleLoadMore}
                className="px-8 border-primary text-primary bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-[8px] cursor-pointer"
              >
                Load more
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Grid View */
        <div className="w-full md:max-w-[1150px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                formatPrice={formatPrice}
              />
            ))}
          </div>

          {/* Load More Button for Desktop */}
          {canLoadMore && (
            <div className="flex justify-center mt-8">
              <Button
                variant=""
                onClick={handleLoadMore}
                className="px-8 border-primary text-primary bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-[8px] cursor-pointer"
              >
                Load more
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Extracted CourseCard component for reuse
function CourseCard({ course, formatPrice }) {
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
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
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
    <Card className="h-full p-0 gap-0 rounded-lg overflow-hidden border-[1px] border-[#E3E3E3]">
      <div className="relative">
        {course.popular && (
          <div className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
            {course.popularText}
          </div>
        )}
        <div className="aspect-video relative overflow-hidden p-2">
          <Image
            width={500}
            height={500}
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-full object-cover transition-transform rounded-[8px] hover:scale-105 duration-300"
          />
        </div>
      </div>

      <div className="px-4 py-2 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] text-[#232D63] font-bold">
            {course.title}
          </h3>
          <div className="flex items-center">
            <span className="font-medium">{course.rating}</span>
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-xs text-muted-foreground ml-1">
              ({course.reviews}+ reviews)
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Course Details */}
        <div className="space-y-3 text-sm">
          {/* Duration */}
          <div className="flex items-start gap-2">
            {/* <Clock className="h-4 w-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" /> */}
            <Image
              src="/assets/icons/DurationIcon.svg"
              alt="Duration"
              width={38}
              height={38}
            />
            <div>
              <span className="text-[#727272] text-[12px] font-medium">
                Duration
              </span>
              <div className="text-[14px] text-[#121112] font-[400]">
                {course.duration}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-start gap-2">
            <Image
              src="/assets/icons/BudgetIcon.svg"
              alt="Duration"
              width={38}
              height={38}
            />
            <div>
              <span className="text-[#727272] text-[12px] font-medium">
                Affordable Fee
              </span>
              <div>
                <span className="line-through text-red-600 text-muted-foreground mr-2">
                  {formatPrice(course.originalPrice)}
                </span>
                <span className="font-bold text-primary">
                  {formatPrice(course.discountedPrice)}
                </span>
                <span className="text-green-600 ml-2 text-xs">
                  {course.saving}
                </span>
              </div>
            </div>
          </div>

          {/* Mode of Training */}
          <div className="flex items-start gap-2">
            <Image
              src="/assets/icons/TrainingIcon.svg"
              alt="Duration"
              width={38}
              height={38}
            />
            <div>
              <span className="text-[#727272] text-[12px] font-medium">
                Mode of Training
              </span>
              <div className="text-muted-foreground">
                Online & Classroom Sessions Available
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-start gap-2">
            <Image
              src="/assets/images/Home/icons/LanguageIcon1.svg"
              alt="Duration"
              width={38}
              height={38}
            />
            <div>
              <span className="text-[#727272] text-[12px] font-medium">
                Languages
              </span>
              <div className="text-muted-foreground">
                {course.languages.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center gap-2 p-4">
        <Dialog>
          <DialogTrigger asChild>
            {/* <Button className="w-fit bg-[#ffffff] hover:bg-white/90 border border-[#0057E2] text-sm text-black h-9">
              <div className="bg-gradient-to-r from-[#042A76] to-[#2251FF] bg-clip-text text-transparent cursor-pointer">
                Download Brochure
              </div>
            </Button> */}
            <CTAButton name="Download Brochure"
                styleClasses="w-fit bg-[#ffffff] hover:bg-white/90 border border-[#0057E2] text-sm text-black h-9 bg-gradient-to-r from-[#042A76] to-[#2251FF] bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-r hover:from-[#042A76] hover:to-[#2251FF] hover:bg-clip-text hover:text-transparent"
                _this={_this}
            />
          </DialogTrigger>
          <DialogContent className="fixed w-fit top-[50%] rounded-lg">
            <LandingAdmissionForm {..._this} />
          </DialogContent>
        </Dialog>
        <Link
          href={course.link}
          className=" flex flex-row gap-1 justify-center"
        >
          <Button className="w-fit h-9 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-[8px] font-semibold text-sm md:text-[14px]">
            Explore Now
            <ArrowRight className="h-4 w-4" size={20} />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
