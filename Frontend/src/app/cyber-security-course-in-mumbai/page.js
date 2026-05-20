import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import WhyChooseEMECard from "@/components/common/WhyChooseEMECard";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import PlacementSupport from "@/components/common/PlacementSupport";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import { Footer } from "@/components/common/Footer";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CoursesDetails from "@/components/global/CoursesDetails";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CertifiedStudent from "../recentplacements/CertifiedStudent";

export const metadata = {
  title: "Best Cyber Security Course in Mumbai with placement",
  description:
    "Join cyber security course in Mumbai at best cyber security institute in Mumbai with affordable cyber security course fees in Mumbai and expert training.",
  keywords: [
    "Best Cyber Security Course in Mumbai",
    "Cyber Security Institute in Mumbai",
    "Ethical Hacking Course in Mumbai",
    "Penetration Testing Course Mumbai",
    "Cyber Security Training in Mumbai",
    "Ethical Hacking Course for Beginners",
    "Network Security Course mumbai",
    "Web Application Security Course",
    "Malware Analysis Course mumbai",
    "Cyber Forensics Course mumbai",
    "Cyber Security Course with Placement",
    "Cyber Security Course with Internship",
    "Cyber Security Course with Certificate",
    "Kali Linux Training mumbai",
    "Bug Bounty Course mumbai",
    "Cyber Security Analyst Course",
    "Cyber Security Course Fees mumbai",
    "Online Cyber Security Course mumbai",
    "Best Cyber Security Institute western India",
    "Cyber Security Course for Freshers"
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/cyber-security-course-in-mumbai",
  },
};

const faq = [
  {
    id: 1,
    title: "Who can join this Cyber Security Course in Mumbai?",
    desc: "Anyone interested in cyber security can join this course, including students, freshers, graduates, working professionals, and IT enthusiasts. This program is also suitable as an Ethical Hacking Course for Beginners.",
  },
  {
    id: 2,
    title: "Is this a beginner-friendly cyber security course?",
    desc: "Yes, our training starts from basic concepts and gradually moves to advanced topics like Ethical Hacking, Penetration Testing, Web Application Security, and Malware Analysis.",
  },
  {
    id: 3,
    title: "Do you provide placement assistance after the course?",
    desc: "Yes, we offer complete placement support, including resume building, mock interviews, career guidance, and job assistance through our Cyber Security Course with Placement program.",
  },
  {
    id: 4,
    title: "Will I get a certificate after completing the course?",
    desc: "Yes, students receive an industry-recognised Cyber Security Course with Certificate after completing the training program.",
  },
  {
    id: 5,
    title: "Is internship support available?",
    desc: "Yes, we provide internship opportunities and practical exposure through live projects as part of our Cyber Security Course with Internship.",
  },
  {
    id: 6,
    title: "What topics are covered in the course?",
    desc: "The course includes Ethical Hacking, Penetration Testing, Network Security, Web Application Security, Kali Linux Training, Vulnerability Assessment, Malware Analysis, Cyber Forensics, and Bug Bounty concepts.",
  },
  {
    id: 7,
    title: "Do you offer online classes?",
    desc: "Yes, we provide both classroom and Online Cyber Security Course Mumbai training options for flexible learning.",
  },
];

const heroData = {
  badgeText: "Learn, Hack & Build Your Cyber Security Career in 6 Months",
  title:
    "Best Cyber Security Course in Mumbai – Master Ethical Hacking, Penetration Testing & Network Security",
  description:
    "Join the best Cyber Security Course in Mumbai and learn Ethical Hacking, Penetration Testing, Web Application Security, Malware Analysis, Cyber Forensics, and Network Security through professional training. Work with real-world Cyber Security tools, including Kali Linux, Burp Suite, Metasploit, and Wireshark, while building the skills required for high-demand Cyber Security careers, internships, freelancing, and placement opportunities.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
  ctaRatingsLabel: "Download Brochure →",
};

const courseDetailsData = {
  courseName: "Explore The Best Cyber Security Course in Mumbai",
  subtitle:
    "Strengthen your growth with our professional Cyber Security Training in Mumbai at EME Academy, providing you with a secure future.",
  courseData: [
    {
      id: 1,
      title: "Cyber Security Analyst Course",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CyberSecurityCourseMain.png",
      description:
        "Join our leading Cyber Security Institute in Mumbai and master Ethical Hacking, Network Security, Penetration Testing, Malware Analysis, and Cyber Forensics through hands-on training. This comprehensive Cyber Security Analyst Course covers everything from beginner fundamentals to advanced security practices, making it the ideal Ethical Hacking Course for Beginners with professionals looking to upskill.\n\nWhether you want to become a Cyber Security Analyst, Ethical Hacker, Penetration Tester, Security Consultant, or Bug Bounty Hunter, this course is designed to prepare you for real-world challenges and high-paying job roles.",
      details: [
        {
          label: "Duration",
          value: "6 Months",
        },
        {
          label: "Fees",
          value: (
            <>
              <span className="line-through text-[#FF0000]">₹45,000</span>{" "}
              ₹35,000 <span className="text-[#00A51E]">Save ₹10,000/-</span>
            </>
          ),
        },
        {
          label: "Mode of Training",
          value: "Online & Classroom Sessions Available",
        },
        {
          label: "Language",
          value: "English & Hindi",
        },
      ],
      hookLine:
        "Become job-ready with the best cyber security course in Mumbai with placement support!",
      topics: [
        {
          title: "Ethical Hacking",
          points: [
            "Introduction to Ethical Hacking & Hacker Types",
            "Footprinting, Scanning, Vulnerability Analysis",
            "System Hacking, Sniffing, DoS Attacks",
            "SQL Injection, XSS, Web Server & Cloud Hacking",
            "Android & IoT Security",
            "Cryptography, Honeypots, and Firewalls",
          ],
        },
        {
          title: "Penetration Testing",
          points: [
            "Kali Linux Training, Password Attacks, AD Exploits",
            "Linux/Windows Penetration",
            "Lateral Movement, CTF Simulations",
            "Final Assessment & Report Writing",
          ],
        },
        {
          title: "Network Security",
          points: [
            "OSI & TCP/IP Models, IP Subnetting",
            "Routing, Switching, VLAN, NAT, firewalls, VPNs",
            "IDS/IPS tools, wireless, network automation",
            "Cloud Networking & Security Tools",
          ],
        },
        {
          title: "Web Application Security",
          points: [
            "Burp Suite, OWASP Top 10 Vulnerabilities",
            "Session Hijacking, Webshells, URL Redirects",
            "Manual & Automated Vulnerability Testing",
            "Bug Bounty concepts & practices",
          ],
        },
      ],
    },
  ],
};

// Tools data
const toolsData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "Cyber Security Course",
  tools: [
    {
      name: "Burp Suite",
      icon: "/assets/images/Cyber_Security/icons/burp-suite-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 123,
      companyLogoHeight: 29,
    },
    {
      name: "Wireshark",
      icon: "/assets/images/Cyber_Security/icons/wireshark-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 129,
      companyLogoHeight: 36,
    },
    {
      name: "Metasploit",
      icon: "/assets/images/Cyber_Security/icons/metasploit-logo.svg",
      color: "bg-green-50",
      companyLogoWidth: 135,
      companyLogoHeight: 30,
    },
    {
      name: "Nmap",
      icon: "/assets/images/Cyber_Security/icons/nmap-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 71,
      companyLogoHeight: 57,
    },
    {
      name: "Kali Linux",
      icon: "/assets/images/Cyber_Security/icons/kali-linux-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 86,
      companyLogoHeight: 64,
    },
    {
      name: "Hydra",
      icon: "/assets/images/Cyber_Security/icons/hydra-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 74,
      companyLogoHeight: 70,
    },
    {
      name: "SQLMap",
      icon: "/assets/images/Cyber_Security/icons/sqlmap-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 83,
      companyLogoHeight: 43,
    },
    {
      name: "Nessus",
      icon: "/assets/images/Cyber_Security/icons/nessus-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 111,
      companyLogoHeight: 36,
    },
    {
      name: "OWASP ZAP",
      icon: "/assets/images/Cyber_Security/icons/owasp-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 103,
      companyLogoHeight: 41.2,
    },
    {
      name: "Aircrack-ng",
      icon: "/assets/images/Cyber_Security/icons/aircrack-ng-Logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 102,
      companyLogoHeight: 50,
    },
    {
      name: "Hashcat",
      icon: "/assets/images/Cyber_Security/icons/hashcat-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 59,
      companyLogoHeight: 59,
    },
    {
      name: "Cisco Packet Tracer",
      icon: "/assets/images/Cyber_Security/icons/cisco-packet-tracer-logo.svg",
      color: "bg-yellow-50",
      companyLogoWidth: 58,
      companyLogoHeight: 63.13,
    },
  ],
};

// Career prospects data
const careerProspectsData = {
  title: "Career Opportunities With The Best Cyber Security Course in Mumbai",
  subtitle:
    "Build a successful future in the rapidly growing cybersecurity industry with our industry-oriented Cyber Security Training in Mumbai. After completing this program, students, freshers, and working professionals can explore high-paying job opportunities in IT companies, MNCs, startups, banks, government sectors, and Cyber Security firms across India and abroad.",
  description:
    "Our practical-based training program covers Ethical Hacking, Penetration Testing, Network Security, Malware Analysis, Web Application Security, Cyber Forensics, and Kali Linux Training to help you become job-ready from day one. This Cyber Security Course with Placement is specially designed for beginners as well as professionals who want to build a strong career in ethical hacking and information security.",
  careerRoles: [
    "Cyber Security Analyst",
    "Ethical Hacker",
    "Penetration Tester",
    "Security Consultant",
    "Information Security Analyst",
    "Cyber Security Engineer",
    "SOC Analyst",
    "Network Security Specialist / Engineer",
    "Security Systems Administrator",
    "Security Architect",
    "Web Application Security Tester",
    "Malware Analyst",
    "Cyber Forensics Analyst",
    "Bug Bounty Hunter",
  ],
  salaryInfo:
    'Average Salary in India: <strong class="font-bold">₹5 - 12 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CSCareerProspectsImage.svg",
  name: "Download Brochure",
};

const placementFeatures = [
  {
    id: 1,
    title: "Resume & LinkedIn",
    icon: "FileText",
    color: "text-blue-500",
    bg: "bg-blue-50",
    points: [
      "ATS-friendly Cyber Security resumes for freshers & professionals",
      "LinkedIn optimization for recruiters hiring in Mumbai",
      "Showcase ethical hacking, SOC & penetration testing projects",
      "Build a strong profile for internships and placements for students joining the Best Cyber Security Course in Mumbai"
    ],
  },
  {
    id: 2,
    title: "Aptitude Training",
    icon: "Brain",
    color: "text-purple-500",
    bg: "bg-purple-50",
    points: [
      "Daily logical reasoning & analytical problem-solving sessions",
      "Practice tests designed for IT & Cyber Security job roles",
      "Improve speed, accuracy & technical aptitude confidence",
      "Special preparation for fresher placement drives under the Cyber Security Course for Freshers program"
    ],
  },
  {
    id: 3,
    title: "Interview Mastery",
    icon: "MessagesSquare",
    color: "text-orange-500",
    bg: "bg-orange-50",
    points: [
      "HR & technical mock interviews by industry experts",
      "Hands-on interview preparation for SOC Analyst & Security Analyst roles in the Cyber Security Analyst Course",
      "Real-world Ethical Hacking Course in Mumbai and Penetration Testing Course Mumbai scenarios",
      "Personalized feedback to crack top company interviews"
    ],
  },
  {
    id: 4,
    title: "Expert Mentorship",
    icon: "UserCheck",
    color: "text-green-500",
    bg: "bg-green-50",
    points: [
      "1-on-1 mentorship from certified Cyber Security professionals at a leading Cyber Security Institute in Mumbai",
      "Career guidance for ethical hacking & Cyber Security domains",
      "Industry insights on Malware Analysis Course Mumbai, Network Security Course Mumbai, & Cyber Forensics Course Mumbai",
      "Salary negotiation and career growth support"
    ],
  },
  {
    id: 5,
    title: "Hiring Network",
    icon: "Briefcase",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    points: [
      "Placement assistance through our Cyber Security Course with Placement program",
      "Internship opportunities included in the Cyber Security Course with Internship",
      "Direct interview referrals for eligible candidates",
      "Access to exclusive Cyber Security job updates in Mumbai"
    ],
  },
  {
    id: 6,
    title: "Portfolio Building",
    icon: "Layout",
    color: "text-pink-500",
    bg: "bg-pink-50",
    points: [
      "Real-world projects in Web Application Security Course & penetration testing",
      "Hands-on Kali Linux Training Mumbai and Bug Bounty Course Mumbai practice",
      "Guided capstone projects for employer-ready portfolios",
      "Practical learning with Cyber Security Training in Mumbai modules",
      "Certification preparation for the Cyber Security Course with Certificate"
    ],
  },
];

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Pratik Saha",
      rating: 5,
      text: `"Never thought I could understand ethical hacking so easily. EME Academy Mumbai truly offers the best cyber security course in Mumbai!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 2,
      name: "Tanaya Chakraborty",
      rating: 5,
      text: `"I cracked my first bug bounty project just two months into the course. The live labs and support are next level!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 3,
      name: "Arjun Ghosh",
      rating: 5,
      text: `"EME Academy made complex topics like SQL injection and sniffing feel simple. The trainers are fantastic and very practical."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 4,
      name: "Adnan Rahman",
      rating: 5,
      text: `"এই কোর্সটা করে আমি Ethical Hacking আর Penetration Testing শিখে এখন এক কোম্পানিতে Cyber Analyst হিসেব কাজ করছি। Mumbai-র বেস্ট Cyber Security কোর্স!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 5,
      name: "Reshma Paul",
      rating: 5,
      text: `"I joined as a complete beginner, and now I’m conducting full penetration tests for clients. The hands-on labs were a game changer."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 6,
      name: "Aritra Banerjee",
      rating: 5,
      text: `"Thanks to the instructors, I landed a junior security analyst job within weeks of completing the course. It’s truly job-focused."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 7,
      name: "Namrata Sen",
      rating: 5,
      text: `"CTF challenges, real-world attack simulations, and Burp Suite mastery. All under one roof!!! Highly recommended!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 8,
      name: "Subham Mondal",
      rating: 5,
      text: `"কোর্সের শেষে internship করতে গিয়ে আমি একটা ransomware case trace করতে পারি। Amazing real-time exposure!"`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 9,
      name: "Shreya Mitra",
      rating: 5,
      text: `"I was skeptical at first, but this is honestly the best cyber security institute in Mumbai. Great for placement and freelancing too."`,
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      id: 10,
      name: "Shayan Das",
      rating: 5,
      text: `"From packet sniffing to cloud hacking. I’ve learned so much! Plus, the portfolio projects helped me stand out during interviews."`,
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

export default function page() {
  const Courses = "Cyber Security Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/12unAJeiGAC5wL2EF8Q4PkNbrd7VsyEnj/view?usp=sharing";
  const BrochureName = "Cyber_Security_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main
      className="flex flex-col justify-start items-center w-full min-h-screen"
    >
      <AnotherHeader />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CyberSecurityHero.png')] xs:h-[460px] md:h-[580px] bg-cover bg-center bg-no-repeat">
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
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CSWhyChoose.png"
          title="Why Choose Our Cyber Security Training in Mumbai?"
          description="Our training methodology combines live projects, real-world cyber attack simulations, expert mentorship, and placement-focused learning to help you build a successful career in Cyber Security. Whether you are enrolling in an Ethical Hacking Course in Mumbai, a Penetration Testing Course Mumbai, or an Online Cyber Security Course Mumbai, our goal is to provide hands-on skills that match current industry requirements."
        />
      </div>{" "}
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div className="flex w-full bg-[#f5f9fc] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <PlacementSupport 
          {..._this}
          title="Placement Support to Strengthen Your Dream of Cyber Security Analyst"
          customFeatures={placementFeatures}
        />
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
      <div id="testimonials" className="flex w-full my-8">
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
