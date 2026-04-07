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
  title: "Best Cyber Security Course in Kolkata with placement",
  description:
    "Join cyber security course in kolkata at best cyber security institute in kolkata with affordable cyber security course fees in kolkata and expert training.",
  keywords: [
    "cyber security course in kolkata",
    "cyber security course in kolkata fees",
    "best cyber security institute in kolkata",
    "cyber security course fees in kolkata",
    "best cyber security courses in kolkata",
    "cyber crime courses in kolkata",
    "cyber forensics courses in kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/cyber-security-course-in-kolkata",
  },
};

const faq = [
  {
    id: 1,
    title: "Is this course for beginners in Kolkata?",
    desc: "Yes! Our Cyber Security Course in Kolkata is beginner-friendly. We have a structured learning approach that makes complex concepts like ethical hacking, penetration testing, and cryptography easy to grasp.",
  },
  {
    id: 2,
    title: "What is the duration and fee of the Cyber Security course?",
    desc: "The cyber security course fees is ₹30,000 after discount. It’s duration is 6 months (5 months of intensive training + 1-month internship).",
  },
  {
    id: 3,
    title: "Will I get hands-on experience with real-world hacking tools?",
    desc: "Absolutely. This is one of the best cyber security courses in Kolkata with practical labs. You’ll work on tools like Kali Linux, Burp Suite, Nmap, Wireshark, Metasploit, and more.",
  },
  {
    id: 4,
    title: "Do I get placement support after completing the course?",
    desc: "Yes! EME Academy provides 100% placement assistance, including job referrals, resume building, mock interviews, and access to our hiring partners network. Our course is designed for real-world job readiness.",
  },
  {
    id: 5,
    title: "What kind of certification will I receive?",
    desc: "After successful completion, you will receive a globally recognized certification from EME Academy.",
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
    title: "What if I miss a class or need revision?",
    desc: "All sessions are recorded and shared with you. You’ll also have access to extra doubt-clearing classes to stay on track with your learning.",
  },
  {
    id: 9,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 9093926145/9831284098 or email at info@emeacademy.co.in. You can also register online through our website.",
  },
];

const heroData = {
  badgeText: "Learn & Get Hired in 6 Months!",
  title:
    "Best Cyber Security Course in Kolkata – Master Ethical Hacking, Networking, and Penetration Testing",
  description:
    "Join EME Academy, the best cyber security institute in Kolkata, and learn Ethical Hacking, Web Application & Network Penetration Testing, Malware Analysis, and Cryptography. This course includes internship, certification, and access to real-world tools and trains the students for MNCs or to launch a freelance career in ethical hacking or cyber forensics.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

const courseDetailsData = {
  courseName: "Cyber Security Course",
  subtitle:
    "Advance your career with our comprehensive Cyber Security training in Kolkata, designed for freshers and professionals.",
  courseData: [
    {
      id: 1,
      title: "Cyber Security Course",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CyberSecurityCourseMain.png",
      description:
        "Join EME Academy, the best cyber security institute in Kolkata, and learn Ethical Hacking, Web Application & Network Penetration Testing, Malware Analysis, and Cryptography. This course includes internship, certification, and access to real-world tools and trains the students for MNCs or to launch a freelance career in ethical hacking or cyber forensics.",
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
        "Become job-ready with the best cyber security course in Kolkata with placement support!",
      topics: [
        {
          title: "Ethical Hacking",
          points: [
            "Introduction to Ethical Hacking & Hacker Types",
            "Footprinting, Scanning, Vulnerability Analysis",
            "Malware Analysis, Sniffing, DoS Attacks",
            "SQL Injection, XSS, Web Server & Cloud Hacking",
            "Android & IoT Security",
            "Cryptography, Honeypots, and Firewalls",
          ],
        },
        {
          title: "Networking",
          points: [
            "OSI & TCP/IP Models, IP Subnetting",
            "Routing, Switching, VLAN, NAT, SNMP",
            "DHCP, IPv6, Wireless, Network Automation",
            "Cloud Networking & Security Tools",
          ],
        },
        {
          title: "Web Application Penetration Testing (WAPT)",
          points: [
            "Burp Suite, XSS, CSRF, Injection Attacks",
            "Session Hijacking, Webshells, URL Redirects",
            "Manual & Automated Vulnerability Testing",
            "OWASP Top 10 Vulnerabilities",
          ],
        },
        {
          title: "Network Penetration Testing (NPT)",
          points: [
            "Kali Linux, Password Attacks, AD Exploits",
            "Linux/Windows Penetration",
            "Lateral Movement, CTF Simulations",
            "Final Assessment Report Writing",
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
  title:
    'Future Prospects of this <span class="text-[#f97316]">Course in Kolkata</span>',
  subtitle:
    "After completing EME Academy’s Cyber Security course in Kolkata, you'll be equipped to take up roles in both print and digital media across diverse industries:",
  careerRoles: [
    "Cyber Security Analyst",
    "Ethical Hacker",
    "Penetration Tester",
    "Security Consultant",
    "Cyber Forensics Analyst",
    "Cyber Security Engineer",
    "Freelance Illustrator",
    "Security Architect",
    "Network Security Specialist/Engineer",
    "Security Systems Administrator",
    "Information Security Analyst",
  ],
  salaryInfo:
    'Average Salary in India: <strong class="font-bold">₹5 - 12 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Cyber_Security/CSCareerProspectsImage.svg",
  buttonText: "Check Eligibility",
};

// Testimonials data
const testimonialsData = {
  TestimonialsData: [
    {
      id: 1,
      name: "Pratik Saha",
      rating: 5,
      text: `"Never thought I could understand ethical hacking so easily. EME Academy truly offers the best cyber security course in Kolkata!"`,
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
      text: `"এই কোর্সটা করে আমি Ethical Hacking আর Penetration Testing শিখে এখন এক কোম্পানিতে Cyber Analyst হিসেব কাজ করছি। Kolkata-র বেস্ট Cyber Security কোর্স!"`,
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
      text: `"I was skeptical at first, but this is honestly the best cyber security institute in Kolkata. Great for placement and freelancing too."`,
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
      className={`flex flex-col justify-start items-center w-full min-h-screen`}
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
      <StickyCTAButton Courses="Cyber Security Course" />
    </main>
  );
}
