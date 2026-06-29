import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import RecentPlacementsHero from "./RecentPlacementsHero";
import AllLocation from "@/components/common/all-location";
import AlumniAchievements from "./AlumniAchievements";
import SuccessStories from "./SuccessStories";
import PodcastHome from "@/components/common/PodcastHome";
import Image from "next/image";
import { EventAbout } from "../../components/common/EventAbout";
import Awards from "@/components/common/Awards";
import { Testimonials } from "./Testimonials";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import CertifiedStudent from "./CertifiedStudent";
import FeaturedIn from "@/components/common/FeaturedIn";
import Faqs from "@/components/common/Faqs";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Customer Reviews - Hear What People Say | Testimonials",
  description:
    "Our testimonials from satisfied customers. Read simple, easy-to-understand feedback about our services.",
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/recentplacements",
  },
};

const faqs = [
  {
    id: 1,
    title: "What professional courses does EME Academy Mumbai offer in Mumbai?",
    desc: "We offer job-oriented IT training in Mumbai, including web development, web designing, data analytics, data science, and digital marketing courses, with expert guidance and placement support.",
  },
  {
    id: 2,
    title: "Do I need any technical background to enroll in your IT courses?",
    desc: "No! All our programs including the data analyst course in Mumbai and UI/UX design course are beginner-friendly and perfect for students, freshers, or working professionals looking to upskill.",
  },
  {
    id: 3,
    title:
      "Will I receive an industry-recognized certificate after course completion?",
    desc: "Absolutely! EME Academy Mumbai provides globally valid certifications for all our programs, including the best web development course in Mumbai with placement and advanced digital marketing certification.",
  },
  {
    id: 4,
    title: "What is the course duration and fee structure?",
    desc: "Our course durations range from 4 to 6 months, depending on the program.",
  },
  {
    id: 5,
    title: "Do you offer placement support for all courses?",
    desc: "Yes! We are known as the best institute for digital marketing and web development in Mumbai with placement. Our support includes resume building, interview prep, job referrals, and mock interviews.",
  },
  {
    id: 6,
    title: "Can I get a demo class before joining?",
    desc: "Of course! We offer a free demo session so you can experience our professional web design, data analytics, or digital marketing course before enrolling.",
  },
  {
    id: 7,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning",
  },
  {
    id: 8,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes. Our data analytics training institute in Mumbai is built for working professionals who want to upskill without quitting their jobs.",
  },
  {
    id: 9,
    title: "How does EME Academy Mumbai ensure practical learning?",
    desc: "Our curriculum includes live projects, capstone assignments and real-world problem-solving.",
  },
  {
    id: 10,
    title: "How can I enroll in a course at EME Academy Mumbai?",
    desc: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

export default function RecentPlacements() {
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
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const testimonials = [
    {
      name: "Tuhin Saha",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-1.png",
      rating: 4,
      timeAgo: "1 months ago",
      testimonial:
        "I credit EME Academy Mumbai for the sheer brilliance their curriculum contains. The classes were vital to providing me with the skills I needed to excel in my career. It has been a real confidence booster.",
    },
    {
      name: "Abantika Sarkar",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-2.png",
      rating: 5,
      timeAgo: "5 months ago",
      testimonial:
        "They have an array of hands-on projects for us to daily work on. The flexible batch timing also helped me switch from a different field to SAP development.",
    },
    {
      name: "Debsankar Mandal",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-3.png",
      rating: 4,
      timeAgo: "11 months ago",
      testimonial:
        "All that I learned and acquired at EME Academy Mumbai has been the foundation to my placement at such a reputed firm. The organization helped me thoroughly to secure my dream job.",
    },
    {
      name: "Gourab Shah",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-4.png",
      rating: 4,
      timeAgo: "9 months ago",
      testimonial:
        "My journey with EME Academy Mumbai boosted my confidence and skills. The trainers were always supportive and made sure I understood every concept clearly.",
    },
    {
      name: "Rahul Kumar Gupta",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-5.png",
      rating: 4,
      timeAgo: "8 months ago",
      testimonial:
        "The hands-on projects and practical learning approach helped me shift into my career smoothly. I’m extremely glad I chose EME Academy Mumbai. I highly recommend it!",
    },
    {
      name: "Sahnawaz Saukat",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-6.png",
      rating: 4,
      timeAgo: "10 months ago",
      testimonial:
        "The environment here helped me stay motivated. Learning through real industry projects made a huge difference in understanding the concepts. I’m extremely glad I chose EME Academy Mumbai",
    },
  ];

const studentsMarqueeData = [
  // ===== NEW STUDENTS (FROM ALUMNI) =====
  {
    id: 1,
    img: "/assets/images/Home/hero/ERA_SAHA_DM.webp",
    title: "ERA Saha",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 2,
    img: "/assets/images/Home/hero/Jayita_Halder_HR_Onemed_Billing.webp",
    title: "Jayita Halder",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 3,
    img: "/assets/images/Home/hero/Laiba_Noor_DM_Lead_Height.webp",
    title: "Laiba Noor",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 4,
    img: "/assets/images/Home/hero/Krishna_Das_Ghosh_DM_Lead Height.webp",
    title: "Krishna Das Ghosh",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 5,
    img: "/assets/images/Home/hero/Sreenanda_Ghosh_DM_Lead Height.webp",
    title: "Sreenanda Ghosh",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 6,
    img: "/assets/images/Home/hero/Adrija_Bose_DM_Lead_Height.webp",
    title: "Adrija Bose",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 7,
    img: "/assets/images/Home/hero/Abhishek_Majumder_DM_Lead Height.webp",
    title: "Abhishek Majumder",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 8,
    img: "/assets/images/Home/hero/Amit_Singh_SAP FICO_Hamilton_Reserch_PVT_Ltd.webp",
    title: "Amit Singh",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 9,
    img: "/assets/images/Home/hero/Ankita_Biswas_HR.webp",
    title: "Ankita Biswas",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 10,
    img: "/assets/images/Home/hero/Keya_Sharma_SAP FICO_Hamilton_Reserch_PVT_Ltd.webp",
    title: "Keya Sharma",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },

  // ===== EXISTING STUDENTS =====
  {
    id: 11,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-1.png",
    title: "Tuhin Saha",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 12,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-2.png",
    title: "Abantika Sarkar",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 13,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-3.png",
    title: "Debsankar Mandal",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 14,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-4.png",
    title: "Gourab Shah",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 15,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-5.png",
    title: "Rahul Kumar Gupta",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 16,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-6.png",
    title: "Sahnawaz Saukat",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 17,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-7.png",
    title: "Wahed Hossain",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 18,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-8.png",
    title: "Sandip Singha",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 19,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-9.png",
    title: "Sayandeep Ghosh",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 20,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-10.png",
    title: "Sagar Raja",
    subtitle: "Mumbai, India",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-[#2C278EE5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
];

  const StudentCertifiedData = [
    {
      id: 1,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-1.png",
      title: "Tuhin Saha",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 2,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-2.png",
      title: "Abantika Sarkar",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 3,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-3.png",
      title: "Debsankar Mandal",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 4,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-4.png",
      title: "Gourab Shah",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 5,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-5.png",
      title: "Rahul Kumar Gupta",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 6,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-6.png",
      title: "Sahnawaz Saukat",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 7,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-7.png",
      title: "Wahed Hossain",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 8,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-8.png",
      title: "Sandip Singha",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 9,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-9.png",
      title: "Sayandeep Ghosh",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 10,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-10.png",
      title: "Sagar Raja",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 11,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-11.png",
      title: "Vashanvee Kumari",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 12,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-12.png",
      title: "Ankit Ghosh",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 13,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-13.png",
      title: "Tanmay Dutta",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 14,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-14.png",
      title: "Nuruzzaman Mondal",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 15,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-15.png",
      title: "Sahil Das",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 16,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-16.png",
      title: "Arghya Pal",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 17,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/student-17.png",
      title: "Diganta Debnath",
      subtitle: "Mumbai, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <AnotherHeader />
      <div className="w-full">
        <RecentPlacementsHero students={studentsMarqueeData} />
      </div>

      <div className="flex w-full bg-white ">
        <AlumniAchievements />
      </div>

      <div className="flex w-full bg-white">
        <SuccessStories />
      </div>

      <div id="about" className="flex w-full  bg-white">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          SelectCourses={SelectCourses}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>

      <div className="w-full pb-6 bg-[#f4fbfe]">
        <CertifiedStudent
          {..._this}
          students={StudentCertifiedData}
          title={"Certified Students: Achieving"}
          titleHighlight={"Excellence in Education"}
          subtitle={
            "Discover how certification from EME shapes stronger academic and professional outcomes."
          }
        />
      </div>
      <div className="w-full bg-[#F5F6F9]">
        <Testimonials testimonials={testimonials} />
      </div>

      <div className="w-full pb-6">
        <PodcastHome />
      </div>

      <div className="w-full bg-[#F5F6F9]">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="flex flex-col w-full py-6">
        <div className="relative flex justify-center text-center text-[22px] font-semibold text-[#4B4B4B]">
          Student
          <span className="flex flex-col items-end">
            <span className="text-[22px] text-[#232D63]">Gallery</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>
        <EventAbout />
      </div>

      <div className="w-full">
        <Awards />
      </div>

      <div className="w-full bg-[#F4FBFE]">
        <Faqs faqs={faqs} />
      </div>
      <div className="w-full py-6">
        <TalkToOurCareerExpert {..._this} />
      </div>

      <section className="bg-white pb-10">
        <AllLocation />
      </section>
      <Footer />
    </main>
  );
}
