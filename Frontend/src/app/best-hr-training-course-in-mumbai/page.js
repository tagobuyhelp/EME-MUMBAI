import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import FeaturedIn from "@/components/common/FeaturedIn";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CertifiedStudent from "../recentplacements/CertifiedStudent";

export const metadata = {
  title: "Best HR Course in Mumbai | 100% Placement Support",
  description: "Master Payroll, Talent Acquisition, Compliance, and HR Analytics with the Best HR Training Institute in Mumbai. Get 100% placement support and launch your corporate career today!",
  keywords: [
    "Best HR Course in mumbai",
    "Human Resource Course in mumbai",
    "HR Training Institute in mumbai",
    "HR Course with Placement mumbai",
    "HRM Course in mumbai",
    "HR Course for Beginners mumbai",
    "Talent Acquisition Course mumbai",
    "Payroll Training Course mumbai",
    "HR Course for Freshers mumbai",
    "HR Management Course mumbai",
    "HR Course with Certificate mumbai",
    "HRMS Software Training mumbai",
    "HR Recruiter Course mumbai",
    "HR Compliance Course mumbai",
    "HR Analytics Course mumbai",
    "AI in HR Course mumbai",
    "HR Course Fees mumbai",
    "HR Course for Working Professionals mumbai",
    "HR Course Online mumbai",
    "Best Human Resource Institute mumbai"
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/best-hr-training-course-in-mumbai",
  },
};

const faqs = [
  {
    id: 1,
    title: "I have zero corporate experience. Is this course right for me?",
    desc: "Absolutely. We built our HR Course for Beginners Mumbai to take you from an absolute scratch to a highly capable corporate executive. We cover foundational business communication and operational logic first, making it the ultimate HR Course for Freshers in Mumbai looking to launch a stable, high-paying career.",
  },
  {
    id: 2,
    title: "How exactly does your placement support work?",
    desc: "We don't just hand you a certificate and wish you luck. As the Best Human Resource Institute Mumbai relies on, our HR Course with Placement Mumbai features a dedicated career cell that optimizes your executive resume, conducts rigorous mock corporate interviews, and routes your profile directly to our network of 50+ hiring MNCs and startups.",
  },
  {
    id: 3,
    title: "Will I learn how to calculate salaries and handle legal labor laws?",
    desc: "Yes. Administrative theory is useless without execution. Our curriculum includes an intensive Payroll Training Course Mumbai, where you will process live salary structures, alongside a rigorous HR Compliance Course Mumbai to ensure you can confidently navigate PF, ESI, and corporate labor laws.",
  },
  {
    id: 4,
    title: "Does the curriculum cover modern hiring and headhunting?",
    desc: "100%. Finding top-tier talent is a highly paid skill. This program serves as a comprehensive Talent Acquisition Course Mumbai and an advanced HR Recruiter Course Mumbai, teaching you how to source, interview, and onboard elite candidates efficiently.",
  },
  {
    id: 5,
    title: "Do you teach modern HR technology, or just outdated textbook methods?",
    desc: "We only teach what modern corporations actually use. You will receive hands-on HRMS Software Training in Mumbai to manage employee data systems. Furthermore, we are one of the only institutes to feature a dedicated AI in HR Course Mumbai module, teaching you how to automate recruitment and onboarding using cutting-edge artificial intelligence.",
  },
  {
    id: 6,
    title: "I want to move into management. Will I learn how to use workforce data?",
    desc: "Yes, data-driven decision-making is the future of leadership. Our curriculum includes a highly specialized HR Analytics Course in Mumbai, teaching you how to measure employee performance, retention rates, and workforce efficiency, making this a truly elite Human Resource Course in Mumbai.",
  },
  {
    id: 7,
    title: "I currently work full-time. Do you have flexible batch timings?",
    desc: "We do. We specifically engineered our HR Course for Working Professionals in Mumbai to adapt to demanding corporate schedules. You can choose highly flexible weekend classroom batches or opt for our fully interactive HR Course Online Mumbai format so you can upskill without interrupting your current career.",
  },
  {
    id: 8,
    title: "What is the cost of the program, and do you offer payment plans?",
    desc: "We believe elite corporate education should be accessible, which is why we maintain highly transparent HR Course Fees Mumbai. Better yet, we offer zero-interest, No-Cost EMI options so you can focus entirely on mastering your HR Management Course Mumbai rather than stressing over upfront costs.",
  },
  {
    id: 9,
    title: "Will I get a recognized certificate after completing the training?",
    desc: "Yes. Upon graduation, you will receive a highly respected HR Course with a Certificate Mumbai. Because EME Academy is MSME, ISO, and #startupindia certified, your credentials carry severe weight and instantly validate your expertise as a graduate of the Best HR Course in Mumbai.",
  },
  {
    id: 10,
    title: "Why is EME Academy considered the top HR institute in the city?",
    desc: "Because we teach corporate execution, not classroom theory. As the premier HR Training Institute in Mumbai, we simulate a live corporate environment. You manage real-world case studies in our HRM Course in Mumbai, graduating with the exact practical, operational skills that force top-tier companies to hire you on the spot.",
  },
];

export default function page() {
  const Courses = "HR Management Course";
  const email_sender = "ALL";
   const Brochure = "https://drive.google.com/file/d/1DPG-VGq7n_6xSFvJ-xmZv9Kr8OtapZpc/view?usp=sharing";
  const BrochureName = "hrm_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  // Hero data
  const heroData = {
    badgeText: "Learn & Get Hired in Just 4 Months!",
    title: "Step Up as a Corporate Leader with the Best HR Course in Mumbai",
    description:
      "Master Payroll, Talent Acquisition, Compliance, and HR Analytics with the Best HR Training Institute in Mumbai. Get 100% placement support and launch your corporate career today!",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
    ctaRatingsLabel: "Download Syllabus & Brochure →",
  };

  const courseDetailsData = {
    courseName: "Explore Our Complete HR Management Course in Mumbai",
    subtitle:
      "Advance your career in corporate operations with industry-focused, practical training. Whether you are stepping into the corporate world and need a foundational HR Course for Beginners Mumbai, or you are upgrading your skills to secure a management role, this intensive curriculum is designed to make you an indispensable asset to any organization.",
    courseData: [
      {
        id: 1,
        title: "Certified Human Resource Course in Mumbai",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRCourseDetailsMain.png",
        description:
          "From statutory compliance to emerging AI recruitment tools, this 4-month track guarantees you graduate 100% placement-ready.",
        details: [
          {
            label: "Duration",
            value: "4 Months",
          },
          {
            label: "Transparent HR Course Fees Mumbai",
            value: (
              <>
                Affordable Fees at <span className="line-through text-[#FF0000]">₹40,000</span>{" "}
                ₹35,000 <span className="text-[#00A51E]">(Save ₹5,000/- Special Discount)</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Flexible HR Course Online Mumbai and immersive classroom sessions available.",
          },
          {
            label: "Languages",
            value: "English, Hindi",
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
      'Elite Career <span style="color: #0057E2;">Prospects</span> & <span style="color: #f97316;">High-Paying</span> Corporate HR Roles',
    subtitle:
      "After completing the premier HR Management Course in Mumbai, you won't just be participating in the corporate world—you will be running it. Whether you are launching your career via our HR Course for Freshers Mumbai or stepping into leadership as an experienced professional, graduating from the Best Human Resource Institute in Mumbai makes you highly eligible for impact-driven roles across top MNCs and global startups.",
    careerRoles: [
      "HR Manager & Executive Specialist",
      "IT & Corporate HR Recruiter",
      "Compensation & Benefits Specialist",
      "Labor Relations & Compliance Officer",
      "Job Analysis & HR Analytics Specialist",
      "Training & Development Manager",
    ],
    salaryInfo:
      "Average Salary in India: ₹5 - 12 LPA (as per industry standard)",
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

  const alumniStudentsMumbai = [
      {
        id: 1,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-1.png",
        title: "Sukanya Ghosh",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 2,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-2.png",
        title: "Nuruzzaman Mondal",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 3,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
        title: "Vaishnavi",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 4,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
        title: "Aniket Shome",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 5,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
        title: "Supratim Sen",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 6,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
        title: "Souvik Mondal",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
      {
        id: 7,
        img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
        title: "Koushik Mondal",
        subtitle: "Mumbai, India",
        overlay:
          "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
        titleStyle: "text-base font-medium",
        subtitleStyle: "font-light leading-tight text-sm",
      },
  ];

  return (
    <main
      className={`flex flex-col justify-start items-center w-full min-h-screen`}
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HR_Management/HRMaincourseHero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
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
        <TalkToOurCareerExpert
          {..._this}
          title='Stop Guessing. Start Leading. <span style="color: #FF7A00;">Talk to a Corporate HR Career Expert!</span>'
          description="Climbing the corporate ladder requires strategy, not just luck. Connect with our veteran HR advisors for a free 1-on-1 career mapping session."
          buttonText="Download Full Syllabus & Brochure →"
        />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport
          {..._this}
          badge="Corporate Career Excellence"
          title="100% Dedicated Placement Support to Secure Your HR Leadership Role"
          customFeatures={[
            {
              id: 1,
              title: "Executive Resume & LinkedIn",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft ATS-optimized resumes tailored specifically for HR management roles.",
                "Strategic LinkedIn profile optimization to attract corporate headhunters.",
                "Highlight your core competencies in talent acquisition and payroll execution."
              ],
            },
            {
              id: 2,
              title: "Corporate Aptitude Training",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily logic, reasoning, and Situational Judgment Test (SJT) practice.",
                "Full-length aptitude mock exams for top-tier corporate firms.",
                "Speed and accuracy enhancement for competitive executive screening rounds."
              ],
            },
            {
              id: 3,
              title: "HR Interview Mastery",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous mock interviews focusing on complex HR scenarios.",
                "Personalized performance feedback from veteran HR Directors.",
                "Real-world scenario prep for compliance defense and conflict resolution."
              ],
            },
            {
              id: 4,
              title: "Expert Corporate Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling aligned with your specific HR niche (e.g., Payroll vs. Talent).",
                "Insider insights on the latest corporate hiring and AI recruitment trends.",
                "Professional salary negotiation tactics to maximize your own CTC."
              ],
            },
            {
              id: 5,
              title: "Elite Corporate Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium MNCs, global startups, and corporate hiring partners.",
                "Exclusive access to our internal, unlisted corporate HR job portal.",
                "Direct executive interview referrals to fast-track your onboarding."
              ],
            },
            {
              id: 6,
              title: "Real-World HR Case Studies",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop real-world capstone projects (live payroll setups, recruitment drives).",
                "Guided, mentor-led resolution of complex statutory compliance audits.",
                "Build an employer-ready showcase proving your HR operational mastery."
              ],
            },
          ]}
        />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore
          {..._this}
          title="Ready to Command the Corporate Workforce?"
          description="discover exactly how earning an industry-recognized HR Course with Certificate Mumbai can fast-track your journey into top-tier corporate management."
          buttonText="Download Complete Brochure"
        />
      </div>
      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudentsMumbai}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹40,000 to ₹70,000 per month"
          }
        />
      </div>
      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
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
      <CoursesLandingFooter courseName="Human Resource Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
