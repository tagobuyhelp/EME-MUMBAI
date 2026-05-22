import FeaturedIn from "@/components/common/FeaturedIn";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Awards from "@/components/common/Awards";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import { Footer } from "@/components/common/Footer";
import PlacementSupport from "@/components/common/PlacementSupport";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "@/app/recentplacements/CertifiedStudent";
import { alumniStudents } from "@/data/alumniStudentsData";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";

export const metadata = {
  title: "Data Science Course in Mumbai | AI & ML Training",
  description:
    "Enroll in the Best Data Science Course in Mumbai. Learn Python, AI, Machine Learning & SQL with placement support.",
  keywords: [
    "Best Data Science Course in mumbai",
    "Data Science Institute in mumbai",
    "Data Science Course with Placement mumbai",
    "Data Science Course for Beginners mumbai",
    "Data Science Course for Freshers mumbai",
    "Python Course for Data Science mumbai",
    "Machine Learning Course mumbai",
    "Data Science Course with Certificate mumbai",
    "Data Science Course Fees mumbai",
    "Advanced Data Science Course mumbai",
    "Data Scientist Course mumbai",
    "SQL Course for Data Science mumbai",
    "Data Science Course Online mumbai",
    "Data Science Course for Working Professionals mumbai",
    "Tableau Course mumbai",
    "Data Engineer Course mumbai",
    "NLP Course mumbai",
    "Data Science and AI Course mumbai",
    "Best Data Science Institute western India",
    "Data Science Diploma Course mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/maincourse/data-science-course-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "I have no coding or tech background. Can I still join this program?",
    desc: "Absolutely. We engineered our Data Science Course for Beginners Mumbai to take you from absolute zero to enterprise-ready. It's the perfect Data Science Course for Freshers Mumbai because we build your foundational logic in programming and statistics before advancing into complex predictive modeling and AI.",
  },
  {
    id: 2,
    title: "How exactly does your placement guarantee work?",
    desc: "We didn't win \"Best Placement Institute of the Year\" by accident. Recognized as the Best Data Science Institute in Western India, our Data Science Course with Placement Mumbai includes a dedicated career cell that optimizes your GitHub portfolio, conducts grueling technical mock interviews, and routes your profile directly to our 50+ corporate hiring partners until you secure an offer.",
  },
  {
    id: 3,
    title: "What specific tools and languages will I learn?",
    desc: "You will master the exact tech stack that MNCs demand. Our curriculum acts as a comprehensive Python Course for Data Science Mumbai, an advanced SQL Course for Data Science Mumbai, and a highly visual Tableau Course Mumbai, ensuring you can query, manipulate, and visualize massive datasets effortlessly.",
  },
  {
    id: 4,
    title: "I am currently working full-time. Can I manage this course?",
    desc: "Yes! We specifically designed our Data Science Course for Working Professionals Mumbai to fit around demanding corporate schedules. We offer highly flexible weekend classroom batches and a fully interactive Data Science Course Online Mumbai format so you can pivot into the AI sector without quitting your current job.",
  },
  {
    id: 5,
    title: "Does this diploma cover Artificial Intelligence and Machine Learning?",
    desc: "100%. This is an elite Data Science and AI Course Mumbai. You will go far beyond basic data analysis by taking our rigorous Machine Learning Course Mumbai and cutting-edge NLP Course Mumbai, learning exactly how to build self-learning algorithms, neural networks, and text-generation models.",
  },
  {
    id: 6,
    title: "What makes this diploma different from basic online tutorials?",
    desc: "Basic tutorials teach passive theory; we teach live execution. Our Data Science Diploma Course Mumbai is an Advanced Data Science Course Mumbai designed to simulate a real corporate environment. It’s a complete Data Scientist Course Mumbai built around live corporate datasets, ensuring you graduate with tangible, deployable capstone projects.",
  },
  {
    id: 7,
    title: "Will this course help me if I want to become a Data Engineer?",
    desc: "Yes. A top-tier data scientist must understand how data pipelines work. Our modules include foundational training that rivals a dedicated Data Engineer Course Mumbai, teaching you how to architect robust data infrastructure, manage cloud environments, and deploy models into production.",
  },
  {
    id: 8,
    title: "What are the fees, and do you offer EMI options?",
    desc: "We believe elite tech education should be accessible, which is why we maintain highly transparent and competitive Data Science Course Fees Mumbai. Our comprehensive diploma is currently available at a discounted rate of ₹40,000. More importantly, we offer zero-interest, No-Cost EMI options so you can focus entirely on mastering algorithms rather than stressing over upfront costs.",
  },
  {
    id: 9,
    title: "Will I receive an industry-recognized certificate?",
    desc: "Yes. Upon graduation, you will receive an official Data Science Course with Certificate Mumbai. Because EME Academy is an award-winning, MSME, and ISO-certified institution, your credentials carry serious weight when placed on your resume and LinkedIn profile.",
  },
  {
    id: 10,
    title: "Why is EME Academy considered the top data institute in Mumbai?",
    desc: "We refuse to teach outdated textbook theory. As the premier Data Science Institute in Mumbai, your classes are led by active industry experts who bring real corporate case studies into the classroom. You practice on live servers and graduate with the practical, hands-on execution skills that force top-tier companies to hire you.",
  },
];

const heroData = {
  badgeText: "Learn & Get Hired in 6 Months!",
  title: "Launch Your Tech Career with the Best Data Science Course in Mumbai",
  description:
    "Master Python, R, SQL, Tableau, Machine Learning & AI with the premier Data Science Institute in Mumbai. Advance your tech career with our intensive Advanced Data Science Course in Mumbai. Whether you are looking for a highly structured Data Science Course for Beginners in Mumbai or you are an IT professional looking to pivot into AI, this comprehensive diploma is designed to make you undeniably hirable.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
  ctaRatingsLabel: "Download Brochure →",

  
};

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
      name: "Hadoop",
      icon: "/assets/images/Data_Science/icons/hadoop-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 155,
      companyLogoHeight: 40,
    },
  ],
};

const careerProspectsData = {
  title:
    'Elite Career <span style="color: #0057E2;">Prospects</span> & <span style="color: #f97316;">High-Paying</span> Job Roles',
  subtitle:
    "After completing the premier Data Science Course with Placement Mumbai relies on, you won't just be applying for jobs—top tech companies will be hunting for you. Whether you are launching your first career through our Data Science Course for Freshers Mumbai or scaling your current salary bracket via our Data Science Course for Working Professionals Mumbai, graduating from EME Academy unlocks the most lucrative titles in the tech industry.",
  careerRoles: [
    "Data Scientist & AI Specialist",
    "Machine Learning Engineer",
    "Business Intelligence (BI) Analyst",
    "Data Engineer",
    "Natural Language Processing (NLP) Expert",
    "Advanced Data Analyst",
  ],
  salaryInfo:
    "Average Salary in India: ₹6 - 35 LPA (As per industry standards.) Backed by a globally recognized Data Science Course with a Certificate in Mumbai, your earning potential is virtually limitless. Don't wait for the future—build it.",
  image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSCareerProspectsImageMain.svg",
  buttonText: "Download Free Career Guide & Brochure",
};

const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Soumya Mondal",
      rating: 5,
      text: `"The trainers at EME Academy Mumbai are truly experts. Their deep understanding of machine learning algorithms helped me transition from a beginner to a professional. The curriculum is well-organized, and the real-world projects made learning fun and practical!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Ritwika Dey",
      rating: 5,
      text: `"I had zero experience in coding before joining this data science course in Mumbai, but the trainers at EME Academy Mumbai broke everything down step-by-step. The Python and SQL modules were so well-structured, I was able to work on projects with confidence!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Debashish Dasgupta",
      rating: 5,
      text: `"This is the best data science course in Mumbai. It has equipped me with not just theoretical knowledge but real-world applications. The trainers at EME Academy Mumbai are very approachable and always ready to clear any doubts."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
  ],
  title: "Students",
  titleHighlight: "Testimonials",
};

function page() {
  const Courses = "Data Science Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1daAKWMX1Ovz6q4U-N2b-Pa_lvtalNkAt/view?usp=sharing";
  const BrochureName = "data_science_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const courses = [
    {
      image: {
        src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Data_Science/DSCourseDetailsMain.png",
        alt: "Best Data Science Course in Mumbai",
        width: 613,
        height: 180,
      },
      link: "/maincourse/data-science-course-in-mumbai",
      imageBgColor: "#005CE2",
      title: "Explore Our Data Science Diploma Course in Mumbai",
      description: "Advanced Data Science Course in Mumbai",
      hookLine: "Master the full data stack. From raw data to AI-driven insights.",
      descriptionAlert:
        "Advance your tech career with our intensive Advanced Data Science Course in Mumbai. Whether you are looking for a highly structured Data Science Course for Beginners in Mumbai or you are an IT professional looking to pivot into AI, this comprehensive diploma is designed to make you undeniably hirable.",
      details: [
        {
          icon: "/assets/icons/DurationIcon.svg",
          label: "Duration",
          value: "6 Months",
        },
        {
          icon: "/assets/icons/BudgetIcon.svg",
          label: "Transparent Data Science Course Fees Mumbai",
          value: (
            <>
              Affordable Fees at <span className="line-through text-[#FF0000]">₹50,000</span> ₹40,000{" "}
              <span className="text-[#00A51E]">(Save ₹10,000/- Special Discount)</span>
            </>
          ),
        },
        {
          icon: "/assets/icons/TrainingIcon.svg",
          label: "Mode of Training",
          value: "Flexible Online and Classroom Sessions Available",
        },
        {
          icon: "/assets/icons/LanguageIcon.svg",
          label: "Languages",
          value: "English, Hindi",
        },
      ],
      topics: [
        {
          title: "Foundations & Data Handling",
          subpoints: [
            "Introduction to Data Science & Career Roadmap.",
            "Advanced Excel & SQL for Data Extraction.",
          ],
        },
        {
          title: "Python for Data Science",
          subpoints: [
            "NumPy, Pandas, Matplotlib, and Seaborn.",
            "Automating analytics and handling large datasets.",
          ],
        },
        {
          title: "Machine Learning & Statistics",
          subpoints: [
            "Supervised & Unsupervised Learning algorithms.",
            "Statistical modeling & predictive analytics.",
          ],
        },
        {
          title: "Advanced AI & Deep Learning",
          subpoints: [
            "NLP, neural networks, and TensorFlow basics.",
            "Generative AI & LLM integration fundamentals.",
          ],
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/images/Data_Science/DataScienceHeroBG.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} theme="dark" />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={Courses}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>

      <CourseDetailsGrid
        title="Explore Our Data Science Diploma Course in"
        subtitle="Mumbai"
        description="Advance your tech career with our intensive Advanced Data Science Course in Mumbai. Whether you are looking for a highly structured Data Science Course for Beginners in Mumbai or you are an IT professional looking to pivot into AI, this comprehensive diploma is designed to make you undeniably hirable."
        courses={courses}
        thisObject={_this}
      />

      <div id="CourseTool" className="flex w-full  bg-[#F4FBFE] mt-6">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>

      <div id="prospects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>

      <div id="about" className="flex w-full  bg-[#F4FBFE]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>

      <section className="w-full max-w-[1140px] mx-auto py-12 px-6 bg-white border border-gray-100 rounded-[30px] shadow-sm my-10 flex flex-col gap-6">
        <h2 className="text-[#232D63] text-xl font-semibold">
          The EME Advantage: Why We Are the Best Data Science Institute in Western India
        </h2>
        <p>
          Breaking into the data ecosystem requires more than just knowing Python. You need hands-on exposure, technical portfolio depth, and aggressive industry backing. Here is exactly why ambitious professionals choose EME Academy for the most High-ROI Data Science Course in Mumbai.
        </p>
        <p>
          <strong>100% Project-Driven Learning -</strong> We despise outdated textbook theory. You will build actual predictive models, analyze live datasets, and execute complex algorithms through our Advanced Data Science training in Mumbai.
        </p>
        <p>
          <strong>Advanced AI & Generative AI Modules -</strong> Stay ahead of the curve. Master the latest LLMs and AI automation tools to scale your analytics and dominate the modern tech landscape.
        </p>
        <p>
          <strong>Strategic Portfolio Building -</strong> Graduate with a track record of live case studies, Kaggle rankings, and GitHub repositories that prove to employers you are workforce-ready from day one.
        </p>
        <p>
          <strong>Elite Career Support -</strong> Recognized for offering the most aggressive Data Science Course with Placement Mumbai relies on, we route your profile directly to our network of top-tier tech firms.
        </p>
      </section>

      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert 
          {..._this} 
          buttonText="Download Full Syllabus & Brochure →" 
          title='Stop Guessing. <span style="color: #0057E2;">Start Engineering.</span> Talk to a <span style="color: #f97316;">Data Science</span> Career Expert!'
          description="Whether you are looking for a highly flexible Data Science Course Online Mumbai format or intense weekend classroom training, we will help you map out the exact path to hit your salary goals and secure your future in tech."
        />
      </div>

      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport 
          {..._this} 
          mode="data-science"
          badge="Career Excellence"
          title="100% Dedicated Placement Support to Secure Your AI Career"
          description="We don't just teach you how to code; we teach you how to get hired. As the premier Data Science Institute in Mumbai, our commitment to your success doesn't end with a certificate. When you enroll in our Data Science Course with Placement in Mumbai, you unlock an elite, career-building ecosystem designed to bypass the traditional HR queue."
          customFeatures={[
            {
              id: 1,
              title: "Resume & GitHub Optimization",
              icon: "FileText",
              color: "text-blue-500",
              bg: "bg-blue-50",
              points: [
                "Craft ATS-optimized, data-heavy professional resumes.",
                "Recruiter-focused LinkedIn profile optimization.",
                "Strategic GitHub repository and technical skill showcasing."
              ],
            },
            {
              id: 2,
              title: "Analytical Aptitude Training",
              icon: "Brain",
              color: "text-purple-500",
              bg: "bg-purple-50",
              points: [
                "Daily logic, probability, and statistical reasoning practice.",
                "Full-length aptitude mock tests for top-tier IT firms.",
                "Speed and accuracy enhancement for initial screening rounds."
              ],
            },
            {
              id: 3,
              title: "Technical Interview Master",
              icon: "MessagesSquare",
              color: "text-orange-500",
              bg: "bg-orange-50",
              points: [
                "Weekly rigorous HR and live-coding technical mocks.",
                "Personalized performance feedback from senior data scientists.",
                "Real-world whiteboard scenarios and algorithm problem-solving."
              ],
            },
            {
              id: 4,
              title: "Expert Career Mentorship",
              icon: "UserCheck",
              color: "text-green-500",
              bg: "bg-green-50",
              points: [
                "1-on-1 career counseling tailored to your desired tech stack.",
                "Insider insights on the latest AI and enterprise hiring trends.",
                "Professional salary negotiation tactics to maximize your CTC."
              ],
            },
            {
              id: 5,
              title: "Elite Hiring Network",
              icon: "Briefcase",
              color: "text-indigo-500",
              bg: "bg-indigo-50",
              points: [
                "Access to 50+ premium tech and corporate hiring partners.",
                "Exclusive access to our internal, unlisted job portal.",
                "Direct corporate interview referrals to fast-track your hiring."
              ],
            },
            {
              id: 6,
              title: "Live Portfolio Building",
              icon: "Layout",
              color: "text-pink-500",
              bg: "bg-pink-50",
              points: [
                "Develop real-world, predictive modeling capstone projects.",
                "Guided, mentor-led Tableau dashboard development.",
                "Build an employer-ready showcase proving your data manipulation skills."
              ],
            },
          ]}
        />
      </div>

      <div id="" className="flex w-full p-6">
        <NeedToKnowMore 
          {..._this} 
          buttonText="Download Complete Brochure" 
          title="Ready to Build an Elite Career in Data Science?"
          description="Review our transparent Data Science Course Fees Mumbai, and see exactly how earning a globally recognized Data Science Course with Certificate Mumbai can fast-track your journey into top-tier tech giants."
        />
      </div>

      <div className="flex flex-col w-full bg-[#F4FBFE] px-6 pb-8">
        <CertifiedStudent
          {..._this}
          students={alumniStudents}
          title={"Our Alumni "}
          titleHighlight={"Leading the World"}
          subtitle={
            "750+ Students placed last year alone! Salary Ranges from ₹50,000 to ₹1,20,000 per month"
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
      <StickyCTAButton {..._this} />
    </main>
  );
}

export default page;
