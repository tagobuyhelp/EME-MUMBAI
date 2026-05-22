import InfiniteCall from "@/components/InfiniteCall";
import FeaturedIn from "@/components/common/FeaturedIn";
import LearningMethodology from "@/components/common/LearningMethodology";
import NeedToKnowMore from "@/components/common/NeedToKnowMore";
import TalkToOurCareerExpert from "@/components/common/TalkToOurCareerExpert";
import Awards from "@/components/common/Awards";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import WhyChooseEMELatest from "@/components/common/WhyChooseEMELatest";
import AnimationVfxTalentedStudentsWork from "../animation-vfx-institute-mumbai/AnimationVfxTalentedStudentsWork";
import AboutAnimationVfxLanding from "../animation-vfx-institute-mumbai/AboutAnimationVfxLanding";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import StudentsWorkingInCompanies from "@/components/common/student-working-in-companies";
import Faqs from "@/components/common/Faqs";
import CoursesHero from "@/components/global/CoursesHero";
import CourseDetailsGrid from "@/components/common/CourseDetailsGrid";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";
import CoursesCareerProsoects from "@/components/global/CoursesCareerProsoects";
import CertifiedStudent from "../recentplacements/CertifiedStudent";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CoursesCurriculum from "@/components/global/CoursesCurriculum";

export const metadata = {
  title: "Animation Course in Mumbai | 2D, 3D & VFX Training Institute",
  description:
    "Enroll in EME Academy’s industry-focused Animation Course in Mumbai and learn 2D Animation, 3D Animation, VFX, Motion Graphics, Maya, Blender, and After Effects with practical training, portfolio projects, and placement support.",
  keywords: [
    "VFX Course in Mumbai",
    "3D Animation Course in Mumbai",
    "2D Animation Course in Mumbai",
    "Best Animation Institute in Mumbai",
    "Animation and VFX Course",
    "2D and 3D Animation Combo Course",
    "Animation Course for Beginners",
    "VFX Training Institute Mumbai",
    "Character Animation Course",
    "Motion Graphics Course Mumbai",
    "Animation Course with Placement",
    "Animation Course with Internship",
    "Animation Course Fees Mumbai",
    "Maya Animation Course",
    "After Effects Training Mumbai",
    "Blender 3D Course Mumbai",
    "Animation Course Online Mumbai",
    "Storyboard Artist Course",
    "Animation Institute with EMI",
    "Best Animation Institute Western India"
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/best-animation-and-vfx-institute-in-mumbai",
  },
};

const AnimationVfxfaq = [
  {
    id: 1,
    title: "What is the difference between a 2D and 3D Animation Course?",
    desc: "A 2D Animation Course in Mumbai focuses on flat, two-dimensional art often used in mobile games and broadcast media. A 3D Animation Course in Mumbai involves creating depth, volume, and realistic movement using software like Maya and Blender. For those who want to be versatile, we recommend our 2D and 3D Animation Combo Course.",
  },
  {
    id: 2,
    title: "What specific software will I learn during the VFX Training?",
    desc: "Our VFX Training Institute Mumbai program is strictly industry-aligned. You will gain professional-level mastery in After Effects Training Mumbai for compositing, as well as our comprehensive Maya Animation Course and Blender 3D Course Mumbai for high-end modeling and simulation.",
  },
  {
    id: 3,
    title: "Why is Mumbai the best city for an Animation and VFX Course?",
    desc: "Mumbai is the primary hub of India's film and media industry. Being at the Best Animation Institute in Mumbai puts you in direct proximity to major production houses, providing networking opportunities that aren't available elsewhere.",
  },
  {
    id: 4,
    title: "Does the academy provide an Animation Course with Placement?",
    desc: "Yes. Every professional program we offer is an Animation Course with Placement. We assist you in building a high-end showreel and connect you with top studios in Mumbai for interviews. Additionally, we offer an Animation Course with Internship to ensure you have real-world studio experience before you graduate.",
  },
  {
    id: 5,
    title: "What are the career prospects after a VFX Course in Mumbai?",
    desc: "Graduates can pursue diverse roles such as VFX Compositor, Character Animation Course specialist, Motion Graphics Course Mumbai artist, or even a Lead 3D Artist. With Mumbai's booming OTT and film sectors, the demand for skilled artists is at an all-time high.",
  },
  {
    id: 6,
    title: "Are there any flexible payment options for the courses?",
    desc: "We believe financial constraints shouldn't stop talent. We are an Animation Institute with EMI facility, allowing you to pay your Animation Course Fees Mumbai in manageable monthly installments.",
  },
  {
    id: 7,
    title: "Do you offer an Animation Course Online Mumbai for distant students?",
    desc: "Yes. Our Animation Course Online Mumbai delivers the same rigorous curriculum and 1:1 mentoring as our physical campus, ensuring you get world-class training regardless of your location.",
  },
  {
    id: 8,
    title: "How do you compare with other institutes in the region?",
    desc: "We are recognized as the Best Animation Institute Western India because of our \"Studio-First\" approach. Unlike traditional schools, we focus on 15+ professional portfolio projects and live industry exposure rather than just theoretical exams.",
  },
];

const heroData = {
  badgeText: "Launch Your Creative Career in 8–12 Months",
  title: "Best Animation & VFX Institute in Mumbai for 2D, 3D & Motion Design",
  description:
    "Join the Best Animation Institute in Mumbai for a complete Animation and VFX Course covering VFX Course in Mumbai, 3D Animation Course in Mumbai, and 2D Animation Course in Mumbai. Learn Maya, Blender, After Effects, character animation, and motion graphics through beginner-friendly training, live projects, portfolio building, internship opportunities, and career support.",
  googleRating: "4.8/5",
  justdialRating: "4.8/5",
};

const courses = [
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/2DAnimationImage.jpg",
      alt: "2D Animation Course",
      width: 613,
      height: 180,
    },
    title: "2D Animation Course",
    description:
      "Build strong creative foundations with our beginner-friendly 2D Animation Course in Mumbai. Learn drawing principles, storyboarding, character design, and digital animation workflows to start your animation career confidently.",
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
        title: "Tools Covered at EME Academy Mumbai:",
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
        value: "4 Months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: "₹30,000 Affordable EMI Options Available",
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online + Classroom",
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
    title: "3D Animation Course",
    description:
      "Master modelling, rigging, texturing, lighting, and animation in our hands-on 3D Animation Course in Mumbai. Train on industry tools like Maya and Blender while building a studio-ready portfolio.",
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
        value: "6 Months + Internship",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: "₹40,000 Flexible Payment Plans",
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online + Classroom",
      },
    ],
  },
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/2D3DAnimationImage.jpg",
      alt: "2D and 3D Animation Combo Course",
      width: 613,
      height: 180,
    },
    title: "2D and 3D Animation Combo Course",
    description:
      "Get complete production training with our 2D and 3D Animation Combo Course. Ideal for learners who want broader career opportunities in film, gaming, advertising, and content creation.",
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
        value: "8 Months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: "₹55,000 Limited-Time Offer Available",
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online + Classroom",
      },
    ],
  },
  {
    image: {
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/VfxImage.jpg",
      alt: "VFX Course",
      width: 613,
      height: 180,
    },
    title: "VFX Course",
    description:
      "Step into compositing, visual effects, tracking, chroma, and cinematic workflows with our practical VFX Course in Mumbai. Perfect for aspiring artists looking to work in films, OTT, and post-production studios.",
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
        value: "4 Months",
      },
      {
        icon: "/assets/icons/BudgetIcon.svg",
        label: "Affordable Fees",
        value: "₹40,000 EMI Available",
      },
      {
        icon: "/assets/icons/TrainingIcon.svg",
        label: "Mode of Training",
        value: "Online + Classroom",
      },
    ],
  },
];

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

const careerProspectsData = {
  title: "Career Horizons: Why Pursue an Animation Course in Mumbai?",
  subtitle: "Graduating from the Best Animation Institute in Mumbai opens doors to a thriving ecosystem of film studios, advertising agencies, and gaming houses.",
  description: "Completing an Animation and VFX Course is just the beginning. Whether you are a parent securing your child's future in a creative field or a graduate seeking a high-growth career, Mumbai provides the ultimate launchpad. By choosing the Best Animation Institute Western India, you gain the skills required to command top roles in the industry.",
  careerRoles: [
    (
      <span>
        <strong>2D Animator:</strong> Master the fluid art of traditional and digital movement. Our 2D Animation Course in Mumbai prepares you to create expressive characters and immersive storytelling for television, web series, and advertising.
      </span>
    ),
    (
      <span>
        <strong>3D Animator:</strong> Step into the third dimension by bringing complex models to life. Through our 3D Animation Course in Mumbai, you’ll learn the industry-standard mechanics of weight, timing, and performance used in global blockbuster films.
      </span>
    ),
    (
      <span>
        <strong>CG Title Artist:</strong> Combine typography with cinematic flair. As part of our Motion Graphics Course Mumbai, you will learn to design high-end opening sequences and dynamic title cards that capture an audience's attention instantly.
      </span>
    ),
    (
      <span>
        <strong>Storyboard Artist:</strong> Become the visual architect of a production. Our Storyboard Artist Course trains you to translate scripts into sequential frames, a vital skill for pre-visualisation in Mumbai’s bustling film and ad industries.
      </span>
    ),
    (
      <span>
        <strong>Character Designer:</strong> Develop the &quot;soul&quot; of a project. This role focuses on the Character Animation Course fundamentals, where you’ll design unique, market-ready personalities from initial sketch to final digital render.
      </span>
    ),
    (
      <span>
        <strong>Graphic & Concept Artist:</strong> Define the visual DNA of a world. Whether you are taking an Animation Course for Beginners or a professional module, you’ll learn to create the environments and assets that set the tone for entire productions.
      </span>
    ),
    (
      <span>
        <strong>Motion Graphics Designer:</strong> Specialising in After Effects Training Mumbai, you will create sophisticated visual content for corporate branding and social media, blending design principles with advanced animation techniques.
      </span>
    ),
    (
      <span>
        <strong>Post-Production Assistant:</strong> The final gatekeeper of quality. By joining the Best Animation Institute in Mumbai, you’ll learn how to seamlessly integrate assets, clean up frames, and support the final output of world-class Animation and VFX Course projects.
      </span>
    ),
  ],
  salaryInfo: "Average Salary in India: ₹3.6 LPA - ₹12 LPA (as per industry standard)",
  image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AVCareerProspectImage.svg",
  buttonText: "Check Eligibility",
};

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
      text: "“I enrolled in the 2D+3D combo program at EME Academy Mumbai, and it gave me a strong foundation in both pipelines. The transition from Illustrator to Maya and After Effects was seamless, and now I freelance for clients across YouTube and ad agencies. The placement help at EME Academy Mumbai was a big bonus.”",
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
      text: "“Animation শেখা এত সহজ আর মজার হতে পারে ভাবতেই পারিনি। আমি 3D অ্যানিমেশন কোর্সে ভর্তি হয়েছিলাম, কারণ VFX নিয়ে কাজ করতে চাই। ক্লাসে যা শেখানো হয়, সবই প্র্যাক্টিক্যাল। রিগিং, স্কাল্পটিং, ক্যামেরা ট্র্যাকিং – সব শিখে আমি এখন একটা ছোট স্টুডিওতে জব করছি! Thanks EME Academy Mumbai.”",
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
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 2,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-2.png",
    title: "Nuruzzaman Mondal",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 3,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-3.png",
    title: "Vaishnavi",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 4,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-4.png",
    title: "Aniket Shome",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 5,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-5.png",
    title: "Supratim Sen",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 6,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-6.png",
    title: "Souvik Mondal",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
    titleStyle: "text-base font-medium",
    subtitleStyle: "font-light leading-tight text-sm",
  },
  {
    id: 7,
    img: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/RecentPlacements/alumni-7.png",
    title: "Koushik Mondal",
    subtitle: "Mumbai, India",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#202027e5] via-[#39339300] to-transparent",
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
    "Live Practical Studio Sessions",
    "Industry-Leading Study Materials",
    "Global Industry Certifications",
    "15+ Professional Portfolio Projects",
    "Dedicated Career Placement Cell",
    "Strategic Resume & Interview Prep",
    "Rigorous Theory & Practical Exams",
    "Personalized 1:1 Mentoring",
    "Recorded Sessions & Rapid Doubt Clearing",
  ];

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <AnotherHeader />
      <div id="home" className="w-full">
        <InfiniteCall />
      </div>
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AnimationVfxHeroImage.png')] xs:h-[460px] md:h-[490px] bg-cover bg-center bg-no-repeat">
        <CoursesHero
          {...heroData}
          {..._this}
          showCertifications={true}
          showBottomCtaCard={true}
        />
      </div>
      <div className="flex w-full flex-col h-full max-h-[600px] bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <StudentsWorkingInCompanies
          courses={"Animation & VFX Course"}
          brochure={Brochure}
          brochureName={BrochureName}
        />
      </div>
      <div className="flex justify-center bg-[#ffffff] w-full">
        <CourseDetailsGrid
          title="Explore Career-Focused "
          subtitle="Animation & VFX Programs in Mumbai"
          description="Choose from beginner to advanced programs designed to help you master animation, VFX, motion design, and production workflows with practical learning, portfolio projects, and placement support from the Best Animation Institute in Mumbai."
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
        className="flex w-full bg-[#EDF9FF] md:bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AboutAvImageBg.svg')] md:bg-cover md:bg-no-repeat"
      >
        <AboutAnimationVfxLanding
          title={
            <>
              <span className="text-[#232D63]">Creative Career With </span>
              <span className="text-[#E87D1A]">3D Animation And VFX Course</span>
            </>
          }
          tagline="Unlock professional-grade skills in 3D modelling, cinematic VFX, and digital storytelling."
          paragraphs={[
            "Our Animation and VFX Course is meticulously crafted to turn your passion into a high-paying profession. Whether you are looking for a 2D Animation Course in Mumbai to master the basics or a specialised 3D Animation Course in Mumbai, we provide the tools and mentorship to help you succeed in global gaming, advertising, and film industries.",
            "We aim to be recognised as the Best Animation Institute Western India, offering a curriculum that stays ahead of industry trends.",
            "Our program is more than just software training; it’s a deep dive into the art of digital creation:"
          ]}
          features={[
            {
              title: "Foundation & Storytelling",
              description: "Start from the ground up with our Storyboard Artist Course, learning to visualize narratives before they hit the screen.",
            },
            {
              title: "The Power of 2D & 3D",
              description: "Our 2D and 3D Animation Combo Course gives you the versatility studios crave, covering everything from classic motion to a dedicated Maya Animation Course and Blender 3D Course Mumbai.",
            },
            {
              title: "Advanced VFX & Compositing",
              description: "Become a wizard of the \"unseen\" with After Effects Training Mumbai and specialized VFX Training Institute Mumbai modules that teach you to blend reality with digital effects.",
            },
            {
              title: "Character & Motion",
              description: "Bring life to your creations through a comprehensive Character Animation Course and a high-impact Motion Graphics Course Mumbai.",
            }
          ]}
          customThis={_this}
        />
      </div>
      <div id="about" className="flex w-full bg-[#FFFFFF]">
        <FeaturedIn
          Courses={Courses}
          email_sender={email_sender}
          Brochure={Brochure}
          BrochureName={BrochureName}
        />
      </div>
      <div id="CourseTool" className="flex w-full bg-[#FFFFFF] mt-6">
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
          badgeText="How Does This Course Shape the Future?"
          headline="Beyond Theory, Industry-Standard Execution"
          description="By the time you complete your Animation and VFX Course, you won't just have a degree; you’ll have a professional-grade showreel ready for the global market. Whether you are pursuing a 3D Animation Course in Mumbai or specialized After Effects Training Mumbai, our focus remains on real-world application and creative mastery."
          ctaName="Yes, I’m Ready – Enrol Now →"
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
          title="Why Choose Our Animation And VFX Course in Mumbai?"
          description="Selecting the right training partner is the most critical step in your creative journey. We have established ourselves as the Best Animation Institute in Mumbai by aligning our curriculum with the specific demands of the modern film and gaming industries. Whether you are beginning your journey with an Animation Course for Beginners or specializing in advanced CGI, our commitment is to your professional success."
          customFeatures={[
            {
              id: 1,
              iconSrc: "/assets/icons/Icon2.svg",
               title: "Industry-Certified Mentors",
               desc: "Learn directly from veterans who have worked on global projects. Our trainers bring the latest techniques from the field into our VFX Training Institute Mumbai classrooms.",
               bgColor: "bg-[#E0F5FF]",
             },
             {
               id: 2,
               iconSrc: "/assets/icons/Icon4.svg",
               title: "Comprehensive Placement Ecosystem",
               desc: "We provide an Animation Course with Placement that goes beyond just interviews. We offer a dedicated network within Mumbai's top production houses to kickstart your career.",
               bgColor: "bg-[#E0F5FF]",
             },
             {
               id: 3,
               iconSrc: "/assets/icons/Icon5.png",
               title: "Adaptable Learning Schedules",
               desc: "We cater to students and working professionals alike with flexible weekday and weekend batches, as well as a robust Animation Course Online Mumbai for remote learners.",
               bgColor: "bg-[#E0F5FF]",
             },
             {
               id: 4,
               iconSrc: "/assets/icons/Icon1.svg",
               title: "Capstone Projects & Practical Mastery",
               desc: "Our Animation and VFX Course culminates in high-end projects that demonstrate your ability to handle complex studio workflows, from a Maya Animation Course to final compositing.",
               bgColor: "bg-[#E0F5FF]",
             },
             {
               id: 5,
               iconSrc: "/assets/icons/Icon6.png",
               title: "Lifetime Career Support",
               desc: "Our relationship doesn't end at graduation. As the Best Animation Institute Western India, we provide ongoing guidance, portfolio reviews, and networking opportunities throughout your career.",
               bgColor: "bg-[#E0F5FF]",
             },
             {
               id: 6,
               iconSrc: "/assets/icons/Icon3.svg",
               title: "Accessible Financial Solutions",
               desc: "We maintain competitive Animation Course Fees Mumbai and offer an Animation Institute with EMI facility to ensure that top-tier education is financially within your reach.",
               bgColor: "bg-[#E0F5FF]",
             },
           ]}
        />
      </div>
      <div id="testimonials" className="flex w-full mt-2">
        <CoursesTestimonials {...testimonialsData} />
      </div>
      <div id="awards" className="flex w-full bg-white">
        <Awards />
      </div>
      <div id="" className="flex w-full p-6">
        <NeedToKnowMore {..._this} />
      </div>
      <div className="flex flex-col justify-center w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <NewsHomeLanding {..._this} />
      </div>
      <div className="w-full bg-[#F4FBFE] mt-6">
        <Faqs faqs={AnimationVfxfaq} />
      </div>
      <CoursesLandingFooter courseName="Animation & VFX Course" />
      <StickyCTAButton {..._this} />
    </main>
  );
}
