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
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";

import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";

export const metadata = {
  title: "",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "https://emeacademy.co.in/data-science-course-in-kolkata",
  },
};

const faq = [
  {
    id: 1,
    title: "Is this course for beginners in Kolkata?",
    desc: "Yes! Our Diploma in Advanced Data Science Course in Kolkata is perfect for beginners. Whether you're a student, career switcher, or creative enthusiast, the course starts from scratch and builds up to advanced data science concepts.",
  },
  {
    id: 2,
    title:
      "What is the EME Academy’s Advanced Data Science Course Fees in Kolkata?",
    desc: "Our data science course fees start from ₹50,000, currently offered at a discounted price of ₹40,000. EMI and installment plans are also available.",
  },
  {
    id: 3,
    title: "What practical skills will I gain from this course?",
    desc: "You’ll work on real-world projects involving Python, Machine Learning, Tableau, NLP, SQL, and more, using actual datasets for hands-on data science learning.",
  },
  {
    id: 4,
    title: "Do I get placement support after completing the course?",
    desc: "Absolutely. We offer 100% placement assistance including job referrals, direct interview calls, resume building, and mock interviews.",
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
    title: "What kind of certification will I receive?",
    desc: "After successful completion, you will receive a globally recognized certification from EME Academy.",
  },
  {
    id: 8,
    title: "Can I get a demo class before enrolling?",
    desc: "Yes! We offer a free demo session to help you understand our teaching approach.",
  },
  {
    id: 9,
    title: "Do I need coding knowledge before joining?",
    desc: "No prior coding or technical background is needed. This beginner-friendly data science training in Kolkata starts from the basics and builds your expertise step by step.",
  },
  {
    id: 10,
    title: "I’m working full-time. Can I still join this course?",
    desc: "Yes, we provide flexible batches including weekend and evening classes. Our data science training institute in Kolkata is built for working professionals who want to upskill without quitting their jobs.",
  },
  {
    id: 11,
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 12,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 9093926145/9831284098 or email at info@emeacademy.co.in. You can also register online through our website.",
  },
];

function page() {
  const Courses = "Data Science Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1daAKWMX1Ovz6q4U-N2b-Pa_lvtalNkAt/view?usp=sharing";
  const BrochureName = "data_science_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  // Hero data
  const heroData = {
    badgeText: "Learn & Get Hired in 6 Months!",
    title: "Best Data Science Course in Kolkata",
    description:
      "Master Python, R, SQL, Tableau, Machine Learning & AI with the best data science institute in Kolkata and earn up to ₹35 LPA! Work on real-time datasets, build capstone projects, and access 100% placement support.",
    googleRating: "4.8/5",
    justdialRating: "4.8/5",
  };

  // Course details data
  const courseDetailsData = {
    courseName: "Data Science Course",
    subtitle:
      "Advance your tech career with our Diploma in Advanced Data Science, designed for freshers, career changers, and IT professionals.",
    courseData: [
      {
        id: 1,
        title: "Diploma in Advanced Data Science",
        image:
          "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSCourseDetailsMain.png",
        description:
          "This course is your gateway into data science. Gain hands-on experience with Python, SQL, Tableau, and Machine Learning from experts and master real-world projects to be placement-ready in 6 months.",
        details: [
          {
            label: "Duration",
            value: "6 months",
          },
          {
            label: "Affordable Fees",
            value: (
              <>
                <span className="line-through text-[#FF0000]">₹50,000</span>{" "}
                ₹40,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
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
          "Become a Certified Data Scientist with the Best Data Science Training Institute in Kolkata!",
        topics: [
          {
            title: "Introduction to Data Science",
            points: [
              "Understand what Data Science is and why it matters",
              "Explore real-world applications and career scope",
            ],
          },
          {
            title: "Excel & SQL for Data Handling",
            points: [
              "Advanced Excel functions, data cleaning, pivot tables.",
              "Write SQL queries for data extraction and reporting",
            ],
          },
          {
            title: "Python Programming for Data Science",
            points: [
              "Work with NumPy, Pandas, Seaborn, Matplotlib.",
              "Automate analytics tasks and handle large data sets.",
            ],
          },
          {
            title: "Data Visualization with Tableau & Power BI",
            points: [
              "Create interactive dashboards for business insights.",
              "Storytelling with visual data and real-time analytics.",
            ],
          },
          {
            title: "Statistics & Predictive Analytics",
            points: [
              "Learn hypothesis testing, regression, probability.",
              "Forecast trends with data modeling techniques.",
            ],
          },
          {
            title: "Machine Learning Algorithms",
            points: [
              "Supervised & Unsupervised learning.",
              "Build predictive models, decision trees, KNN, SVM",
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
          {
            title: "Big Data & Cloud (AWS, GCP)",
            points: [
              "Learn cloud tools and scalable storage solutions.",
              "Get introduced to distributed data processing.",
            ],
          },
          {
            title: "Natural Language Processing (NLP)",
            points: [
              "Process textual data, sentiment analysis, chatbots",
              "Learn tokenization, stemming, and word embeddings",
            ],
          },
          {
            title: "Deep Learning & AI",
            points: [
              "Work with neural networks, TensorFlow basics.",
              "Learn model tuning and image/text classification.",
            ],
          },
          {
            title: "Business Intelligence & Reporting",
            points: [
              "Convert raw data into decision-making dashboards",
              "Automate reports for stakeholders and clients.",
            ],
          },
        ],
      },
    ],
  };

  // Tools data
  const toolsData = {
    title: "Tools & Technologies You'll Master with our",
    courseName: "Data Science Course",
    tools: [
      {
        name: "Python",
        icon: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 50.6,
        companyLogoHeight: 50.34,
      },
      {
        name: "Pandas",
        icon: "/assets/images/Data_Science/icons/pandas-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 139,
        companyLogoHeight: 56,
      },
      {
        name: "Excel (Basic & Advanced)",
        icon: "/assets/images/Data_Analytics_Landing/icons/icons8-excel.svg",
        color: "bg-green-50",
        companyLogoWidth: 59,
        companyLogoHeight: 58,
      },
      {
        name: "NumPy",
        icon: "/assets/images/Data_Science/icons/numpy-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 123,
        companyLogoHeight: 56,
      },
      {
        name: "Seaborn",
        icon: "/assets/images/Data_Science/icons/seaborn-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 136,
        companyLogoHeight: 38.86,
      },
      {
        name: "Matplotlib",
        icon: "/assets/images/Data_Science/icons/matplotlib-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 151,
        companyLogoHeight: 50,
      },
      {
        name: "Scikit Learn",
        icon: "/assets/images/Data_Science/icons/learn-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 89,
        companyLogoHeight: 48,
      },
      {
        name: "Statsmodels",
        icon: "/assets/images/Data_Science/icons/statsmodels-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 51.04,
        companyLogoHeight: 51,
      },
      {
        name: "Spacy",
        icon: "/assets/images/Data_Science/icons/spacy-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 102,
        companyLogoHeight: 36,
      },
      {
        name: "MySQL",
        icon: "/assets/images/Data_Analytics_Landing/icons/mysql-Logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 76,
        companyLogoHeight: 76,
      },
      {
        name: "AWS",
        icon: "/assets/images/Data_Science/icons/aws-logo.svg",
        color: "bg-orange-50",
        companyLogoWidth: 71,
        companyLogoHeight: 42,
      },
      {
        name: "Llama Index",
        icon: "/assets/images/Data_Science/icons/lalma-logo.svg",
        color: "bg-yellow-50",
        companyLogoWidth: 58,
        companyLogoHeight: 58,
      },
      {
        name: "Kafka",
        icon: "/assets/images/Data_Science/icons/kafka-logo.svg",
        color: "bg-green-50",
        companyLogoWidth: 86,
        companyLogoHeight: 44,
      },
      {
        name: "HBASE",
        icon: "/assets/images/Data_Science/icons/hbase-logo.svg",
        color: "bg-green-50",
        companyLogoWidth: 142,
        companyLogoHeight: 36,
      },
      {
        name: "Hadoop",
        icon: "/assets/images/Data_Science/icons/hadoop-logo.svg",
        color: "bg-blue-50",
        companyLogoWidth: 155,
        companyLogoHeight: 40,
      },
    ],
  };

  // Career prospects data
  const careerProspectsData = {
    title:
      'Future Prospect of a <span class="text-[#f97316]">Data Analyst in Kolkata</span>',
    subtitle:
      "After completing the Data Science course in Kolkata with placement from EME Academy, you'll be ready for these job roles:",
    careerRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Analyst",
      "NLP Expert",
      "Data Engineer",
      "Data Science Consultant",
    ],
    salaryInfo:
      'Average Salary in India: <strong class="font-bold">₹6 - 35 LPA</strong> (as per industry standard)',
    image:
      "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSCareerProspectsImageMain.svg",
    buttonText: "Check Eligibility",
  };

  // Testimonials data
  const testimonialsData = {
    TestimonialsData: [
      {
        id: 1,
        name: "Soumya Mondal",
        rating: 5,
        text: `"The trainers at EME Academy are truly experts. Their deep understanding of machine learning algorithms helped me transition from a beginner to a professional. The curriculum is well-organized, and the real-world projects made learning fun and practical!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 2,
        name: "Ritwika Dey",
        rating: 5,
        text: `"I had zero experience in coding before joining this data science course in Kolkata, but the trainers at EME Academy broke everything down step-by-step. The Python and SQL modules were so well-structured, I was able to work on projects with confidence!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 3,
        name: "Debashish Dasgupta",
        rating: 5,
        text: `"This is the best data science course in Kolkata. It has equipped me with not just theoretical knowledge but real-world applications. The trainers are very approachable and always ready to clear any doubts."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 4,
        name: "Taniya Ghosh",
        rating: 5,
        text: `"আমি কখনো ভাবিনি Data Science এতটা সহজ হতে পারে। EME Academy’র ট্রেইনারদের অসাধারণ গাইডেন্স এবং Python, SQL শেখানোর পদ্ধতি আমাকে Industry-Ready করে তুলেছে। এই কোর্সটি সত্যিই আমার ক্যারিয়ার পাল্টে দিয়েছে!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 5,
        name: "Souvik Das",
        rating: 5,
        text: `"I always wanted to learn AI and machine learning but didn’t know where to start. At EME Academy, I have learned just everything from data cleaning to predictive analytics."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 6,
        name: "Laboni Mukherjee",
        rating: 5,
        text: `"আমি আগে কখনো deep learning বা AI tools সম্পর্কে জানতাম না, কিন্তু EME Academy-র প্রশিক্ষকদের সহায়তায় আমি এখন এই সব বিষয়ে দক্ষ। তারা প্রতিটি বিষয় খুব সুন্দরভাবে বুঝিয়ে দিয়েছেন!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 7,
        name: "Arjun Singh",
        rating: 4,
        text: `"The trainers were great at breaking down complex topics into simple steps. The hands-on projects made me job-ready!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 8,
        name: "Sandeep Verma",
        rating: 4,
        text: `"The course exceeded my expectations. The Python and SQL training was top-notch, and the internship really helped me build confidence."`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 9,
        name: "Simran Kaur",
        rating: 5,
        text: `"This course has given me a solid foundation in Python and machine learning. I feel ready to tackle any data science challenge!"`,
        src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
      },
      {
        id: 10,
        name: "Farhan Mallik",
        rating: 5,
        text: `"I have loved the practical approach of this course. It gave me real-world data problems to solve. This has made the learning process quite engaging for me."`,
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
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSMaincourseHero.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
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
      <div id="CourseTool" className="flex w-full  bg-[#F4FBFE] mt-6">
        <CoursesCurriculum {...toolsData} {..._this} />
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
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSMainWhyChoose.png"
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
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
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
        <Faqs faqs={faq} />
      </div>
      <Footer />
      <StickyCTAButton Courses="Data Science Course" />
    </main>
  );
}

export default page;
