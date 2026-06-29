import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import Awards from "@/components/common/Awards";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

export const metadata = {
  title: "Best HR Training Course in Mumbai | HR Management Course",
  description: "Enroll in the Best HR Training Course in Mumbai. Learn payroll, recruitment, HR analytics & get placement support.",
  keywords: ["hr training course in mumbai", "human resource course in mumbai", "hr course in mumbai with placement"],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/human-resource-course-in-mumbai",
  },
};
const faqs = [
  {
    id: 1,
    title: "Is this course for beginners in Mumbai?",
    desc: "Yes! Our Human Resource course in Mumbai is ideal for students, fresh graduates, or anyone switching careers. The curriculum starts from the basics and gradually covers advanced HR tools and industry practices.",
  },
  {
    id: 2,
    title: "What is the duration and fee of the HR course?",
    desc: "The course duration is 3 months, including a 1-month internship. The Human Resource course fees in Mumbai at EME Academy Mumbai is ₹20,000 after discount. EMI options are also available.",
  },
  {
    id: 3,
    title: "Will I learn about payroll and compliance like PF, ESI, and tax?",
    desc: "Absolutely! This is a complete Human Resource training course in Mumbai that includes salary structure design, PF/ESI calculations, Form 16, and compliance using real-world Excel-based systems.",
  },
  {
    id: 4,
    title: "Do I get placement support after completing the course?",
    desc: "Absolutely. We offer 100% placement assistance including job referrals, direct interview calls, resume building, and mock interviews.",
  },
  {
    id: 5,
    title: "Will I get trained on modern HR tools and HRMS software?",
    desc: "Yes! You’ll learn Zoho People, KEKA, and applicant tracking systems (ATS) — all the important tools used in today’s HR departments across industries.",
  },
  {
    id: 6,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 7,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes.",
  },
  {
    id: 8,
    title: "Will I receive a certificate after course completion?",
    desc: "Yes, a globally recognised Human Resource certification will be issued by EME Academy Mumbai upon successful completion of the course.",
  },
  {
    id: 9,
    title: "Is this course good for freelancing or consulting in HR?",
    desc: "Yes! We include modules on freelancing as an HR consultant and real-world client case studies to help you start your own independent career if you wish.",
  },
  {
    id: 10,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 11,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

function page() {
  const Courses = "HR Management Course";
  const email_sender = "ALL";
   const Brochure = "https://drive.google.com/file/d/1DPG-VGq7n_6xSFvJ-xmZv9Kr8OtapZpc/view?usp=sharing";
  const BrochureName = "HR_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "HR Management Course",
    description: "Enroll in the HR Training Course at EME Academy Mumbai and learn HRM, Talent Acquisition, Payroll, Compliance, HR Analytics, and AI tools with hands-on training and 100% placement support.",
    provider: {
      "@type": "Organization",
      name: "EME Academy",
      sameAs: "https://mumbai.emeacademy.co.in"
    }
  };

  // Hero data
  const heroData = {
    badgeText: "Learn & Get Hired in 4 Months!",
    title: "Best HR Training Course in Mumbai with Placement Support",
    description:
      "Learn HRM, Talent Acquisition, Payroll, Compliance, HR Analytics, and even AI in HR with expert guidance and hands-on training at EME Academy Mumbai.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  const courseDetailsData = {
    courseName: "HR Management Course",
    subtitle:
      "Advance your career in Human Resource with industry-focused HR training designed for freshers and working professionals.",
    courseData: [
      {
        id: 1,
        title: "Human Resource Course",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRCourseDetailsMain.png",
        description:
          "Master every HR domain from core functions to emerging AI tools used by modern HR professionals.",
        details: [
          {
            label: "Duration",
            value: (
              <span>
                <span className="text-black">4 months</span>
              </span>
            ),
          },
          {
            label: "Affordable Fees",
            value: (
              <>
                <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
                ₹35,000 <span className="text-[#00A51E]">Save ₹5,000/-</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Online and classroom sessions are available.",
          },
          {
            label: "Languages",
            value: "English & Hindi",
          },
        ],
        hookLine:
          "Become job-ready with the best institute for Human Resource in Mumbai!",
        topics: [
          {
            title: "HR Management & Systems",
            points: [
              "Evolution & scope of HRM",
              "Overview of modern HRMS software (Zoho, KEKA)",
              "HR functions: Payroll, Leave, Attendance",
            ],
          },
          {
            title: "Organization & Behavior",
            points: [
              "Org structures and hierarchy",
              "Change management & leadership styles",
              "Team building, motivation models",
            ],
          },
          {
            title: "Talent Acquisition & Hiring",
            points: [
              "Job portals like Naukri & LinkedIn",
              "Effective JD writing & job postings",
              "Resume screening, shortlisting, onboarding",
            ],
          },
          {
            title: "Training, Development & Engagement",
            points: [
              "Induction & onboarding process",
              "Employee engagement strategies",
              "Conflict management, rewards, and retention",
            ],
          },
          {
            title: "Performance & Appraisals",
            points: [
              "Goal setting, KPI design",
              "PMS policies & appraisal formats",
              "Competency mapping techniques",
            ],
          },
          {
            title: "Payroll & Statutory Compliance",
            points: [
              "Salary structure design in Excel",
              "PF, ESI, HRA, income tax calculation (Form 16)",
              "Understanding POSH, labor laws, and termination clauses",
            ],
          },
          {
            title: "HR Analytics & ATS",
            points: [
              "Configure ATS for recruitment",
              "Track candidates & analyze hiring data",
              "Apply HR metrics for decision-making",
            ],
          },
          {
            title: "AI in HR",
            points: [
              "Use AI tools for screening, engagement & training",
              "Automate feedback, surveys, and applicant tracking",
            ],
          },
        ],
      },
    ],
  };

  // Career prospects data
  const careerProspectsData = {
    title:
      'Future Prospects of this <span class="text-[#f97316]">Course in Mumbai</span>',
    subtitle:
      "After completing EME Academy Mumbai’s Human Resource course in Mumbai, you’ll be eligible for various HR roles across top industries:",
    careerRoles: [
      "HR Specialist/Executive",
      "IT Recruiter",
      "Compensation Specialist",
      "HR Recruiter",
      "Benefits Specialist",
      "Labor Relations Officer",
      "HR Manager",
      "Job Analysis Specialist",
      "Training and Development Manager",
      "Training and Development Specialist",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹5 - 12 LPA</strong> (as per industry standard)',
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRCareerProspectsImageMain.png",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Poulami Sarkar",
        rating: 5,
        text: `"I enrolled in the HR course with zero background in recruitment. Today, I confidently manage talent acquisition using LinkedIn and Zoho platforms. This is definitely the best Human Resource course in Mumbai."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Sanchita Dey",
        rating: 5,
        text: `"আমি ভাবিনি HRMS software শেখা এত সহজ হবে! এখন আমি Zoho আর KEKA ব্যবহার করে চাকরির প্রক্রিয়া ম্যানেজ করতে পারি। Thanks EME Academy Mumbai!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Rajat Paul",
        rating: 5,
        text: `"EME Academy Mumbai’s HR course helped me crack my first job as a Junior HR Executive. The payroll module and mock interviews were really informative!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Aditya Banerjee",
        rating: 5,
        text: `"Loved the real-life case studies and hands-on training in PF, ESI, and compliance. This is truly the best institute for Human Resource in Mumbai with placement."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Meghna Gupta",
        rating: 5,
        text: `"The instructors made complex topics like performance appraisals and competency mapping super easy to understand. Got placed at a top MNC!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Shubham Sinha",
        rating: 5,
        text: `"The recruitment portal training (especially Naukri and LinkedIn sourcing) made me job-ready before the course even ended. Highly recommended!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Soma Ghosh",
        rating: 5,
        text: `"I now work as an HR Assistant thanks to the Human Resource course in Mumbai with placement at EME Academy Mumbai. Their support is unmatched."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Vikram Das",
        rating: 5,
        text: `"The POSH, Payroll, and ATS modules were taught in such a simple way. I even helped my company digitize their HR process after this course!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Tanaya Bose",
        rating: 5,
        text: `"The best part was learning AI tools in HR. I now use ChatGPT and automation tools for screening and onboarding. Truly futuristic training!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Afreen Jahan",
        rating: 5,
        text: `"I got into freelancing as an HR consultant after completing the course. EME gave me both skills and the confidence to start my own thing."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  return (
    <main
      className={`flex flex-col justify-start items-center w-full min-h-screen`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRMaincourseHero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div id="CourseCurriculum" className="flex w-full  bg-white">
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>
      <div id="CourseProspects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="about" className="flex w-full  bg-[#F4FBFE]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <WhyChooseEMECard
          {..._this}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRMainWhyChoose.png"
        />
      </div>{" "}
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent  {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={"750+ Students placed last year alone!"}
        />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this}/>
      </div>
      <div id="testimonials" className="flex w-full">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>
      <div className="w-full bg-[#F4FBFE]">
        <Faqs faqs={faqs} />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}

export default page;
