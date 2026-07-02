import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import AboutAnimationVfxLanding from "./AboutAnimationVfxLanding";
import FeaturedIn from "@/components/common/FeaturedIn";
import LearningMethodology from "@/components/common/LearningMethodology";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import AnimationVfxTalentedStudentsWork from "./AnimationVfxTalentedStudentsWork";
import WhyChooseEMELatest from "@/components/common/WhyChooseEMELatest";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import { Footer } from "@/components/common/Footer";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";

export const metadata = {
  title: "Best Animation & VFX Institute in Mumbai | Animation Course Mumbai",
  description: "Join the best animation and VFX institute in Mumbai at EME Academy Mumbai. Master 2D, 3D animation, and VFX with 100% placement support.",
  keywords: ["best animation institute in mumbai", "animation course mumbai", "vfx institute in mumbai", "2d animation course mumbai", "3d animation course mumbai"],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/animation-vfx-institute-mumbai",
  },
};

const AnimationVfxfaq = [
  {
    id: 1,
    title: "Is this animation course suitable for beginners?",
    desc: "Yes! Our 2D, 3D, Combo courses and VFX are beginner-friendly. We teach you everything from scratch, no prior experience required.",
  },
  {
    id: 2,
    title: "What is the duration and fee of each animation course?",
    desc: (
      <>
        <p>• 2D Animation Course Fee - ₹55,000</p>
        <p>• 3D Animation Course Fee - ₹55,000</p>
        <p>• 2D + 3D Combo Course Fee - <span style={{textDecoration: 'line-through', color: '#FF0000'}}>₹65,000</span> ₹55,000 (Save ₹10,000)</p>
        <p>EMI options available for all courses</p>
      </>
    ),
  },
  {
    id: 3,
    title: "Will I receive a certificate after completion?",
    desc: "Yes. You'll receive an industry-recognized certificate from EME Academy Mumbai along with a showreel-ready portfolio.",
  },
  {
    id: 4,
    title: "What tools and software will I learn?",
    desc: "Adobe Photoshop, Illustrator, Animate, After Effects, Autodesk Maya, Blender, Mocha Pro, and more.",
  },
  {
    id: 5,
    title: "Do you offer placement assistance after course completion?",
    desc: "Yes! We provide 100% placement support, including mock interviews, resume building, job referrals, and internship opportunities.",
  },
  {
    id: 6,
    title: "Can I attend a free demo class?",
    desc: "Yes. Contact us to book your free live demo session and experience our teaching style.",
  },
  {
    id: 7,
    title: "Do I need a high-end laptop to join the course?",
    desc: "No. We provide lab access. For online learners, we'll guide you on budget-friendly system requirements.",
  },
  {
    id: 8,
    title: "I'm already working. Can I still join this course?",
    desc: "Absolutely! We offer flexible batches including weekends and evenings.",
  },
  {
    id: 9,
    title: "What if I miss a class?",
    desc: "All classes are recorded and shared. Plus, you can attend extra doubt-clearing sessions.",
  },
  {
    id: 10,
    title: "How can I enroll?",
    desc: "To enroll, contact us at 8207205867/9831284098 or email at infomumbai@emeacademy.co.in. You can also register online through our website.",
  },
];

// Hero Section Data
const heroData = {
  badgeText: "Get Job-Ready in Just 8 Months!",
  title: "Learn Animation & VFX – Become a Studio-Ready Professional.",
  description:
    "Master 2D, 3D Animation & VFX with the Best Animation Institute in Mumbai.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

// Courses Data
const courses = [
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/2DAnimationImage.jpg",
      alt: "2D Animation Course",
      width: 613,
      height: 180,
    },
    link: "",
    title: "2D Animation Course",
    description:
      "Start your creative journey with our 2D Animation course for beginners. Learn from Mumbai's top institute and bring characters to life.",
    hookLine:
      "Enroll now and become a certified 2D Animator with placement support!",
    topics: [
      {
        title: "What You’ll Learn:",
        subpoints: [
          "Basics of Graphics: Types, Concepts & Drawing",
          "Elements of Drawing, Perspective & Composition",
          "Still Life Studies, Light & Shadow, Human Anatomy",
          "Character Design & Color Theory",
          "Typography & Law of Design",
          "Introduction to Raster vs Vector Graphics",
          "History & Principles of 2D Animation",
          "Storyboarding & Classical Animation Concepts",
          "Stretch & Squash, Keyframe Animation",
          "Camera Movements in 2D",
          "Character Design using Adobe Illustrator",
          "Lip Sync & Motion Studies",
          "Asset Creation, Library Setup, Backgrounds",
          "Intro to Adobe After Effects & Video/Audio Editing",
        ],
      },
      {
        title: "Tools Covered:",
        subpoints: [
          "Adobe Illustrator (Vector Design)",
          "Adobe Photoshop (Digital Painting, FX, Retouching, Masking)",
          "Adobe Animate",
          "After Effects",
        ],
      },
    ],
    details: [
      {
        icon: "/assets/icons/DurationIcon.svg",
        label: "Duration",
        value: "4 months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: (
          <>
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">Save ₹10,000/-</span>
          </>
        ),
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online & Classroom Sessions Available",
      },
    ],
  },
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/3DAnimationImage.jpg",
      alt: "3D Animation Course",
      width: 613,
      height: 180,
    },
    link: "",
    title: "3D Animation Course",
    description:
      "Join the best 3D animation institute in Mumbai and dive into modeling, rigging, and motion design used in top films and games.",
    hookLine: "Learn from the Best Animation Training Institute in Mumbai!",
    topics: [
      {
        title: "What You’ll Learn:",
        subpoints: [
          "Clay Modeling Concepts & Viewport Navigation",
          "Topology & 3D Object Creation (Maya / Max)",
          "Inorganic & Architectural Modeling",
          "Organic Sculpting with Retopology Techniques",
          "Texturing, Lighting & Rendering Basics",
          "Rigging for Characters",
          "Facial Animation & Expressions",
          "Virtual Camera & Realistic Movement",
          "Particle Systems, Cloth & Hair Simulation",
          "FX & Dynamics: Fire, Smoke, Crowds",
          "Matchmoving & Camera Tracking",
          "Creating Reusable Assets & Render Passes",
          "Advanced Rendering Techniques & Light Bounce",
          "After Effects Integration for VFX & Compositing",
        ],
      },
      {
        title: "Tools Covered:",
        subpoints: [
          "Autodesk Maya",
          "Blender",
          "After Effects",
          "Real-World Plugins",
        ],
      },
    ],
    details: [
      {
        icon: "/assets/icons/DurationIcon.svg",
        label: "Duration",
        value: (
          <>
            6 months{" "}
            <span className="text-[#656565]">
              (5 months training + 1-month internship)
            </span>
          </>
        ),
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: (
          <>
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">Save ₹10,000/-</span>
          </>
        ),
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online & Classroom Sessions Available",
      },
    ],
  },
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/2D3DAnimationImage.jpg",
      alt: "2D + 3D Animation Combo Course",
      width: 613,
      height: 180,
    },
    link: "",
    title: "2D + 3D Animation Combo Course",
    description:
      "Become a complete animation pro with this powerful combo course! Learn both 2D & 3D techniques and build a diverse portfolio.",
    hookLine:
      "Join the Best 2D + 3D Animation Institute in Mumbai with 100% Placement Assistance and Studio-Grade Training.",
    topics: [
      {
        title: "What You’ll Learn:",
        subpoints: [
          "Everything from the 2D Animation Course",
          "Everything from the 3D Animation Course",
          "Integrated Projects blending 2D & 3D pipelines",
          "Short Film Production using combined techniques",
          "Portfolio Development & Studio-Ready Showreels",
        ],
      },
      {
        title: "Tools Covered:",
        subpoints: [
          "Illustrator",
          "Photoshop",
          "Animate",
          "After Effects",
          "Maya",
          "Blender",
          "Nuke (Intro)",
        ],
      },
    ],
    details: [
      {
        icon: "/assets/icons/DurationIcon.svg",
        label: "Duration",
        value: "8 months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: (
          <>
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">(Save ₹10,000/-)</span>
          </>
        ),
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online & Classroom Sessions Available",
      },
    ],
  },
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/VfxImage.jpg",
      alt: "VFX",
      width: 613,
      height: 180,
    },
    link: "",
    title: "VFX",
    description:
      "Build your creative foundation with digital design, classical animation principles, and visual storytelling.",
    hookLine:
      "Join the Best VFX Institute in Mumbai with 100% Placement Assistance and Studio-Grade Training.",
    topics: [
      {
        title: "What You’ll Learn:",
        subpoints: [
          "Digital Design & Typography",
          "2D Animation Principles",
          "Clay Modeling & Character Design",
          "Storyboarding & Script Writing",
          "Cinematography, Color & Light",
          "Audio-Video Editing",
          "Pre-Production Portfolio Development",
          "Maya Modeling & Texturing",
          "Digital Sculpting & Retopology",
          "Lighting & Arnold Rendering",
          "Rigging & 3D Character Animation",
          "Photogrammetry & 3D Printing",
          "FX Dynamics & Simulation",
          "Compositing Basics",
          "3D Portfolio Development",
          "VFX Storytelling & Pre-Visualization",
          "Nuke Compositing",
          "Rotoscopy & Wire Removal",
          "Green Screen Keying",
          "Matte Painting",
          "Matchmoving",
          "Final VFX Showreel Portfolio",
        ],
      },
      {
        title: "Tools Covered:",
        subpoints: [
          "Nuke",
          "Mocha",
          "Photoshop",
          "After Effects",
          "Autodesk Maya",
          "Blender",
          "Arnold",
          "Animate",
          "Illustrator",
        ],
      },
    ],
    details: [
      {
        icon: "/assets/icons/DurationIcon.svg",
        label: "Duration",
        value: "4 months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: (
          <>
            <span className="line-through text-[#FF0000]">₹65,000</span> ₹55,000{" "}
            <span className="text-[#00A51E]">Save ₹10,000/-</span>
          </>
        ),
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online & Classroom Sessions Available",
      },
    ],
  },
];

// Tools Data
const toolsData = {
  title: "Tools & Technologies You'll Master with our",
  courseName: "Animation & VFX Course",
  tools: [
    {
      name: "Photoshop",
      icon: "/assets/images/Animation_VFX_Landing/icons/photoshop-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Illustrator",
      icon: "/assets/images/Animation_VFX_Landing/icons/illustrator-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "After Effects",
      icon: "/assets/images/Animation_VFX_Landing/icons/after-effects-logo.svg",
      color: "bg-purple-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Premier Pro",
      icon: "/assets/images/Animation_VFX_Landing/icons/premier-pro-logo.svg",
      color: "bg-purple-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Adobe Animate",
      icon: "/assets/images/Animation_VFX_Landing/icons/animate-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Adobe Audition",
      icon: "/assets/images/Animation_VFX_Landing/icons/audition-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "CorelDRAW",
      icon: "/assets/images/Animation_VFX_Landing/icons/coreldraw-logo.svg",
      color: "bg-yellow-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Automaya",
      icon: "/assets/images/Animation_VFX_Landing/icons/automaya-logo.svg",
      color: "bg-yellow-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Autodesk 3ds Max",
      icon: "/assets/images/Animation_VFX_Landing/icons/3ds-max-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Cinema 4D",
      icon: "/assets/images/Animation_VFX_Landing/icons/cinema-4d-logo.svg",
      color: "bg-gray-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Blender",
      icon: "/assets/images/Animation_VFX_Landing/icons/blender-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "ZBrush",
      icon: "/assets/images/Animation_VFX_Landing/icons/zbrush-logo.svg",
      color: "bg-gray-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Houdini",
      icon: "/assets/images/Animation_VFX_Landing/icons/houdini-logo.svg",
      color: "bg-gray-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Nuke",
      icon: "/assets/images/Animation_VFX_Landing/icons/nuke-logo.svg",
      color: "bg-gray-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Mocha Pro",
      icon: "/assets/images/Animation_VFX_Landing/icons/mocha-pro-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "PFTRACK",
      icon: "/assets/images/Animation_VFX_Landing/icons/pftrack-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "DaVinci Resolve",
      icon: "/assets/images/Animation_VFX_Landing/icons/davinci-resolve-logo.svg",
      color: "bg-black",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "UNITY",
      icon: "/assets/images/Animation_VFX_Landing/icons/unity-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "TOON BOON HARMONY",
      icon: "/assets/images/Animation_VFX_Landing/icons/toon-boon-logo.svg",
      color: "bg-black",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Substance Painter",
      icon: "/assets/images/Animation_VFX_Landing/icons/substance-painter-logo.svg",
      color: "bg-orange-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Unreal Engine",
      icon: "/assets/images/Animation_VFX_Landing/icons/unreal-engine-logo.svg",
      color: "bg-black",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
    {
      name: "Arnold Renderer",
      icon: "/assets/images/Animation_VFX_Landing/icons/arnold-renderer-logo.svg",
      color: "bg-blue-50",
      companyLogoWidth: 50,
      companyLogoHeight: 50,
    },
  ],
};

// Career Prospects Data
const careerProspectsData = {
  title:
    'Future Prospects of this <span class="text-[#f97316]">Course in Mumbai</span>',
  subtitle:
    "After completing our Animation & VFX Course in Mumbai, you will unlock diverse career opportunities:",
  careerRoles: [
    "2D Animator",
    "3D Animator",
    "CG Title Artist",
    "Storyboard Artist",
    "Character Designer",
    "Graphic & Concept Artist",
    "Motion Graphics Designer",
    "Post-Production Assistant",
  ],
  salaryInfo:
    'Average Salary in India: <strong class="font-bold">₹3.6 LPA - ₹12 LPA</strong> (as per industry standard)',
  image:
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AVCareerProspectImage.svg",
  buttonText: "Check Eligibility",
};

// Testimonials Data
const testimonialsData = {
  TestimonialsData: [
    {
      name: "Poulomi Sarkar",
      rating: 5,
      text: "“The 2D animation course at EME Academy Mumbai taught me everything from sketching to storyboarding. Now I create animated explainer videos for clients across India!”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Abhishek Roy",
      rating: 4,
      text: "“I started with zero knowledge in 3D and ended up animating characters in Maya at EME Academy Mumbai. The instructors were super patient and helpful.”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Rhea Das",
      rating: 5,
      text: "“The combo course at EME Academy Mumbai gave me a strong foundation in both 2D and 3D. I've now got a complete portfolio and freelance clients from Behance and Fiverr.”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Fatima Naskar",
      rating: 5,
      text: "“Loved the way each concept was broken down for beginners at EME Academy Mumbai. The Photoshop + Illustrator training helped me land my first internship!”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Puja Banerjee",
      rating: 5,
      text: "“I always loved drawing, but had no clue how to turn it into a profession. The 2D Animation course at EME Academy Mumbai gave me a clear path. From storyboarding to character design, I now work as a junior animator at a media agency. Highly recommended!”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Arjun Mehta",
      rating: 5,
      text: "“As someone from a non-design background, I was intimidated by 3D software. But the hands-on mentorship and project-based training at EME Academy Mumbai helped me master Maya, rigging, and character animation. I recently got hired by a game development studio in Hyderabad!”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Nisha Karim",
      rating: 5,
      text: "“I enrolled in the 2D+3D combo program at EME Academy Mumbai, and it gave me a strong foundation in both pipelines. The transition from Illustrator to Maya and After Effects was seamless, and now I freelance for clients across YouTube and ad agencies. The placement help was a big bonus.”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Dev Shah",
      rating: 5,
      text: "“I joined EME Academy Mumbai while finishing college, and within 6 months, I had a complete animation portfolio ready. The instructors are passionate, and they push you to experiment. I recently got selected for an internship at a VFX studio in Bangalore!”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Sayani Ray",
      rating: 5,
      text: "“আমি শুধু ছবি আঁকতে ভালোবাসতাম, কিন্তু কখনো ভাবিনি এটা দিয়ে ক্যারিয়ার বানাতে পারব। EME-র 2D অ্যানিমেশন কোর্স আমাকে সেই দিশা দেখিয়েছে। এখন আমি একজন মিডিয়া প্রোডাকশন হাউজে কাজ করছি।”",
      src: "/assets/images/Data_Analytics_Landing/icons/MainIcon.png",
    },
    {
      name: "Amit Ghosh",
      rating: 5,
      text: "“Animation শেখা এত সহজ আর মজার হতে পারে ভাবতেই পারিনি। আমি 3D অ্যানিমেশন কোর্সে ভর্তি হয়েছিলাম, কারণ VFX নিয়ে কাজ করতে চাই। ক্লাসে যা শেখানো হয়, সবই প্র্যাক্টিক্যাল। রিগিং, স্কাল্পটিং, ক্যামেরা ট্র্যাকিং – সব শিখে আমি এখন একটা ছোট স্টুডিওতে জব করছি!”",
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
  const Courses = "Animation & VFX Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
  const BrochureName = "animation_and_vfx_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

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

  return (
    <main
      className={` flex flex-col justify-start items-center w-full min-h-screen `}
    >
      <AdmissionHeader _this={_this} />
      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AnimationVfxHeroImage.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero {...heroData} {..._this} />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={"Animation & VFX Course"}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div className="flex justify-center bg-[#ffffff]">
        <CourseDetailsGrid
          title="Explore Our Industry-Focused "
          subtitle="Animation & VFX Courses in Mumbai"
          description="At EME Academy Mumbai, we provide specialized Animation & VFX courses designed to equip you with the knowledge and skills <br />needed to become a job-ready."
          brochureInfo={{
            Courses: "Animation & VFX Course",
            email_sender: "ALL",
            Brochure: Brochure,
            BrochureName: BrochureName,
          }}
          courses={courses}
          thisObject={_this}
        />
      </div>
      <div
        id="About"
        className="flex w-full  bg-[#EDF9FF] md:bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AboutAvImageBg.jpg')] md:bg-cover md:bg-no-repeat"
      >
        <AboutAnimationVfxLanding />
      </div>
      <div id="about" className="flex w-full  bg-[#FFFFFF]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div id="CourseTool" className="flex w-full  bg-[#FFFFFF] mt-6">
        <CoursesCurriculum {...toolsData} {..._this} />
      </div>
      <div className="flex w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/TalentedStudentImageBg.png')] bg-cover bg-no-repeat">
        <AnimationVfxTalentedStudentsWork />
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
      <div id="CourseProspects" className="flex w-full bg-white">
        <CoursesCareerProsoects {...careerProspectsData} {..._this} />
      </div>
      <div id="" className="flex w-full bg-[#ffffff] py-4">
        <LearningMethodology
          {..._this}
          items={items}
          backgroundImage="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/LearningMethodologyImageBg.png"
        />
      </div>
      <div id="" className="flex w-full p-6">
        <TalkToOurCareerExpert {..._this} />
      </div>
      <div id="" className="flex w-full bg-[#F4FBFE] p-6">
        <WhyChooseEMELatest
          name="3D Animation & VFX"
          image="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/WhyChooseEmeImage.png"
          thisObject={_this}
        />
      </div>
      <div id="testimonials" className="flex w-full mt-2">
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
      <div className="w-full bg-[#F4FBFE] mt-6">
        <Faqs faqs={AnimationVfxfaq} />
      </div>
     <CoursesLandingFooter  courseName="Animation & VFX Course"  {..._this} />
      <StickyCTAButton {..._this} />
    </main>
  );
}
