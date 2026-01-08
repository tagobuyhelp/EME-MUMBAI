import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import LearningMethodology from "@/components/common/LearningMethodology";
import PlacementSupport from "@/components/common/PlacementSupport";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import Faqs from "@/components/common/Faqs";

import CertifiedStudent from "../recentplacements/CertifiedStudent";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://emeacademy.co.in/data-analytics-landing",
  },
};

export default function page() {
  const items = [
    "Live Practical Classes",
    "Free Study Materials",
    "Global Certifications",
    "15+ Portfolio Projects",
    "Dedicated Placement Cell",
    "Resume & Interview Preparation",
    "Theory+Practical Examination",
    "1:1 Mentoring",
    "Recorded Sessions & Doubt Clearing",
  ];

  const Courses = "Data Analytics Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
  const BrochureName = "data_analytics_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const DataAnalyticsfaq = [
    {
      id: 1,
      title: "Does EME Academy provide online classes?",
      desc: "Yes, we offer both online and offline training with live instructor-led sessions and recorded materials.",
    },
    {
      id: 2,
      title: "Will I get placement support after the course?",
      desc: "Absolutely! We provide 100% placement support, resume-building assistance, and mock interview preparation.",
    },
    {
      id: 3,
      title: "Do I need prior experience for the Data Analytics Course?",
      desc: "No! Our Data Analytics Course in Kolkata is designed for both beginners and professionals. We start with the basics of SQL, Python, and Excel, making it easy for learners from non-technical backgrounds to grasp complex concepts.",
    },
    {
      id: 4,
      title: "Can I get a demo class before enrolling?",
      desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
    },
    {
      id: 5,
      title: "Will I receive a certification upon course completion?",
      desc: "Yes, a globally recognised certification is awarded after completing the course.",
    },
    {
      id: 6,
      title: "How does EME Academy ensure practical learning?",
      desc: "Our curriculum includes live projects, capstone assignments and real-world problem-solving.",
    },
    {
      id: 7,
      title: "What types of real-world projects will I work on?",
      desc: "You’ll work on live projects and real-world datasets covering Business Analytics, Sales Forecasting, Customer Segmentation, Financial Data Analysis and Predictive Modeling using Machine Learning.",
    },
    {
      id: 8,
      title: "Is there an internship included in the course?",
      desc: "Yes! Our Data Analytics Course in Kolkata includes a 1-month internship where you’ll work on real-world projects and apply the concepts learned during training. This internship boosts your confidence and prepares you for job roles.",
    },
    {
      id: 9,
      title: "Can I pursue this course while working a full-time job?",
      desc: "Yes! We offer flexible learning options that include both weekend and evening batches, making it easier for working professionals to upskill without disrupting their current job.",
    },
    {
      id: 10,
      title: "What happens if I miss a class?",
      desc: "No worries! We provide recorded sessions of all classes so that you can catch up on missed lessons at your convenience. Additionally, you can attend extra doubt-clearing sessions to stay on track.",
    },
    {
      id: 11,
      title: "How can I enroll?",
      desc: "To enroll, contact us at 9093926145/9831284098 or email at info@emeacademy.co.in. You can also register online through our website.",
    },
  ];

  // Hero data
  const heroData = {
    badgeText: "Learn & Get Hired in 6 Months!",
    title:
      "Best Data Analytics Course in Kolkata– Become a Certified Data Analyst.",
    description:
      "Gain knowledge of Python, SQL, Excel, Tableau, Power BI with our Data Analytics Course in Kolkata and earn up to ₹12 LPA! We bridge theory with real-world application to empower you to solve business problems using industry tools.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Data Analytics Courses",
    subtitle:
      "Discover the skills, tools, and expert guidance you need to become a job-ready data analyst.",
    courseData: [
      {
        id: 1,
        title: "Data Analytics Course",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Analytics/DataAnalyticsCoursesMain.jpg",
        description:
          "Discover data analytics courses in Kolkata for careers. EME Academy trains freshers and professionals in data tools and techniques.",
        details: [
          {
            label: "Duration",
            value: "6 months",
          },
          {
            label: "Affordable Fees",
            value: (
              <>
                <span className="line-through text-[#FF0000]">₹45,000</span>{" "}
                ₹35,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
              </>
            ),
          },
          {
            label: "Mode of Training",
            value: "Online and classroom sessions are available.",
          },
          {
            label: "Languages",
            value: "Bengali, English & Hindi",
          },
        ],
        hookLine:
          "Become a Certified Data Analyst with the Best Data Analytics Training Institute in Kolkata!",
        topics: [
          {
            title: "Introduction to Data Analytics",
            points: [
              "Learn the importance of data in today's business decisions.",
              "Understand key analytics concepts, terminology, and industry use cases.",
            ],
          },
          {
            title: "Excel & SQL for Data Analysis",
            points: [
              "Clean, manipulate, and query data for business insights.",
            ],
          },
          {
            title: "Python for Data Analytics",
            points: [
              "Use Pandas, NumPy, and Matplotlib for data management and analysis.",
            ],
          },
          {
            title: "Data Visualization with Power BI & Tableau",
            points: ["Create stunning dashboards and visual reports."],
          },
          {
            title: "Statistics & Predictive Analytics",
            points: [
              "Learn hypothesis testing, regression, and trend analysis.",
            ],
          },
          {
            title: "Machine Learning Basics",
            points: [
              "Explore predictive modeling and data-driven decision-making.",
            ],
          },
          {
            title: "Data Cleaning & Pre-processing",
            points: ["Prepare raw data for effective analysis."],
          },
          {
            title: "Business Intelligence & Cloud Tools",
            points: [
              "Handle large datasets and utilize cloud platforms efficiently.",
            ],
          },
        ],
      },
    ],
  };

  // Tools data
  const toolsData = {
    title: "Tools & Technologies You'll Master with our",
    courseName: "Data Analytics Courses",
    tools: [
      {
        name: "Excel (Basic & Advanced)",
        icon: "/assets/images/Data_Analytics_Landing/icons/icons8-excel.svg",
        color: "bg-green-50",
        companyLogoWidth: 59,
        companyLogoHeight: 58,
      },
      {
        name: "MySQL",
        icon: "/assets/images/Data_Analytics_Landing/icons/mysql-Logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 80,
        companyLogoHeight: 80,
      },
      {
        name: "Tableau",
        icon: "/assets/images/Data_Analytics_Landing/icons/Tableau.svg",
        color: "bg-orange-50",
        companyLogoWidth: 59,
        companyLogoHeight: 57.8,
      },
      {
        name: "Power BI",
        icon: "/assets/images/Data_Analytics_Landing/icons/icons8-power-bi-logo.svg",
        color: "bg-yellow-50",
        companyLogoWidth: 52,
        companyLogoHeight: 52,
      },
      {
        name: "Business Statistics",
        icon: "/assets/images/Data_Analytics_Landing/icons/bar-chart-logo.svg",
        color: "bg-green-50",
        companyLogoWidth: 49,
        companyLogoHeight: 49,
      },
      {
        name: "Python",
        icon: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50.6,
        companyLogoHeight: 50.34,
      },
      {
        name: "Large Language Models (LLM & ChatGPT)",
        icon: "/assets/images/Data_Analytics_Landing/icons/chatgpt-logo.svg",
        color: "bg-green-50",
        companyLogoWidth: 46,
        companyLogoHeight: 46,
      },
      {
        name: "SAS (Self Paced)",
        icon: "/assets/images/Data_Analytics_Landing/icons/SAS-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 45,
        companyLogoHeight: 45,
      },
    ],
  };

  // Career prospects data
  const careerProspectsData = {
    title:
      'Future Prospect of a <span class="text-[#f97316]">Data Analyst in Kolkata</span>',
    subtitle:
      "After completing our Data Analytics Course in Kolkata, you will explore the roles like",
    careerRoles: [
      "Data Analyst",
      "Marketing Analyst",
      "Data Visualization Specialist",
      "Machine Learning Associate",
      "Business Intelligence Analyst",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹4-12 LPA</strong> (as per industry standard)',
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Analytics/CareerProspectsImageMain.png",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Nidhi Agarwal",
        rating: 4,
        text: `"Is course ke baad 50% salary hike mili! Data Analytics is a must-have skill in today's time and the instructors at EME Academy are just amazing. I believe that their mentorship was a key factor in helping me secure this role as a Data Visualisation Specialist"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Aniket Sharma",
        rating: 3,
        text: `"I had no prior experience in data analytics, but EME Academy made it so easy! The Python and SQL modules were explained step by step, and the hands-on projects gave me the confidence to apply for my first Data Analyst job."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Arindam Banerjee",
        rating: 5,
        text: `"Ami kokhono bhabini Data Analytics amake ei rokom career opportunity debe. EME Academy'r guidance ar Power BI & Tableau er practical knowledge amar life-e onek boro change ene diyeche."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Rituparna Ghosh",
        rating: 4,
        text: `"Training sesh howar agei interview call peyechilam. Power BI ar SQL niye confidence build korechhi ar akhon ekta top company te BI Analyst er position e kaj korchi."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
    ],
    title: "Students",
    titleHighlight: "Testimonials",
  };

  const alumniStudents = [
    {
      id: 1,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-1.png",
      title: "Sukanya Ghosh",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 2,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-2.png",
      title: "Nuruzzaman Mondal",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 3,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
      title: "Vaishnavi",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 4,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
      title: "Aniket Shome",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 5,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
      title: "Supratim Sen",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 6,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
      title: "Souvik Mondal",
      subtitle: "Kolkata, India",
      overlay:
        "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
      titleStyle: "text-base font-medium",
      subtitleStyle: "font-light leading-tight text-sm",
    },
    {
      id: 7,
      img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
      title: "Koushik Mondal",
      subtitle: "Kolkata, India",
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
      <AdmissionHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Analytics/DataAnalyticsMaincourseHero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>

      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={"Data Analytics Course"}
          brochure={"/assets/documents/AllCourseBrochure/data_analitics.pdf"}
          brochureName={"data_analitics_brochure.pdf"}
        />
      </div>

      <div id="CourseCurriculum" className="flex w-full  bg-white">
        <CoursesDetails {...courseDetailsData} {..._this} />
      </div>

      <div id="about" className="flex w-full  bg-[#F4FBFE]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>

      <div id="CourseTool" className="flex w-full  bg-white">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>

      <div id="CourseProspects" className="flex w-full bg-[#F4FBFE]">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] ">
        <LearningMethodology
          {..._this}
          items={items}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Analytics_Landing/DALearningMethodology2.png"
        />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport {..._this} />
      </div>

      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹25,000 to ₹60,000 per month"
          }
        />
      </div>

      <div id="testimonials" className="flex w-full mt-4">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div id="awards" className="flex w-full  bg-white">
        <Awards />
      </div>

      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>

      <div className="flex flex-col justify-center w-full  bg-gradient-to-r from-[#fff] from-0% to-white to-100% ">
        <NewsHomeLanding {..._this} />
      </div>

      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <Faqs faqs={DataAnalyticsfaq} />
      </div>
      <CoursesLandingFooter courseName="Data Analytics Course"  {..._this}/>
      <StickyCTAButton {..._this} />
    </main>
  );
}
