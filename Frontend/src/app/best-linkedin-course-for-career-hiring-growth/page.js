import AdmissionHeader from "@/components/common/AdmissionHeader";
import InfiniteCall from "@/components/InfiniteCall";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";
import CoursesLandingFooter from "@/components/global/CoursesLandingFooter";
import CoursesHero from "@/components/global/CoursesHero";
import Faqs from "@/components/common/Faqs";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/common/CtaButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ModulesCarouselSection from "./ModulesCarouselSection";
import { Download } from "lucide-react";
import WhyDifferentFlipCards from "./WhyDifferentFlipCards";
import FeaturedIn from "@/components/common/FeaturedIn";
import Awards from "@/components/common/Awards";
import { CoursesTestimonials } from "@/components/global/CoursesTestimonials";

export const metadata = {
  title: "Best LinkedIn Course for Career & Hiring Growth",
  description:
    "Master LinkedIn from beginner to advance in 24 AI-powered classes. Build your brand, generate leads, attract recruiters and convert connections into real revenue. Enroll in India's most complete LinkedIn course by EME Academy.",
  keywords: [
    "Best LinkedIn Course for Career",
    "LinkedIn Training for HR",
    "LinkedIn Course for Sales Professionals",
    "LinkedIn Marketing Course",
    "LinkedIn Profile Optimization Course",
    "LinkedIn Lead Generation Course",
    "LinkedIn Course for Freelancers",
    "LinkedIn Course for Business Owners",
    "LinkedIn AI Course",
    "LinkedIn Content Strategy Course",
    "LinkedIn Course with Certificate",
    "Sales Navigator Training",
    "Boolean Search Course LinkedIn",
    "LinkedIn Outreach Automation Course",
    "LinkedIn Personal Branding Course",
    "LinkedIn Course for Job Seekers",
    "LinkedIn Social Selling Course",
    "LinkedIn Growth Hacking Course",
    "Online LinkedIn Course India"
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/best-linkedin-course-for-career-hiring-growth",
  },
};

const faqs = [
  {
    id: "faq-1",
    title: "Who is this LinkedIn course designed for?",
    desc: "This program is built for professionals who want to grow on LinkedIn strategically. It is ideal for job seekers, recruiters, HR professionals, founders, freelancers, consultants, and sales teams looking for a practical Best LinkedIn Course for Career and business growth.",
  },
  {
    id: "faq-2",
    title: "Is this suitable for beginners on LinkedIn?",
    desc: "Yes. The course starts with fundamentals like profile setup and optimization, then gradually moves into advanced strategies such as content systems, networking, outreach, and automation. It works well as both a beginner-friendly and advanced Online LinkedIn Course India.",
  },
  {
    id: "faq-3",
    title: "What will I learn inside this LinkedIn training?",
    desc: "You’ll learn profile optimization, personal branding, content strategy, lead generation, outreach automation, and prospecting. Modules include LinkedIn Profile Optimization Course, LinkedIn Lead Generation Course, LinkedIn Content Strategy Course, and LinkedIn Personal Branding Course frameworks.",
  },
  {
    id: "faq-4",
    title: "Does the course include AI tools and automation training?",
    desc: "Yes. This is a practical LinkedIn AI Course where you’ll learn how to use AI for content creation, messaging workflows, outreach personalization, and automation systems to save time and improve results.",
  },
  {
    id: "faq-5",
    title: "Is this course useful for recruiters and HR professionals?",
    desc: "Absolutely. The course includes dedicated strategies for recruiters, making it valuable as LinkedIn Training for HR. You’ll also learn sourcing methods, candidate discovery, and advanced Boolean Search Course LinkedIn techniques.",
  },
  {
    id: "faq-6",
    title: "Will I learn LinkedIn Sales Navigator?",
    desc: "Yes. We cover prospecting workflows, account research, and lead management through hands-on Sales Navigator Training so you can find and engage high-quality prospects efficiently.",
  },
  {
    id: "faq-7",
    title: "Is this course useful for sales professionals and business owners?",
    desc: "Yes. Whether you’re looking for a LinkedIn Course for Sales Professionals or a LinkedIn Course for Business Owners, you’ll learn social selling, authority building, lead generation, and client acquisition systems.",
  },
  {
    id: "faq-8",
    title: "Do I get a certificate after completion?",
    desc: "Yes. After completing the program, you’ll receive a LinkedIn Course with Certificate, which you can showcase on your LinkedIn profile and resume.",
  },
  {
    id: "faq-9",
    title: "How is this different from other LinkedIn courses?",
    desc: "Unlike theory-heavy programs, this course focuses on implementation. You get templates, assignments, workflows, and action plans across content, outreach, branding, and growth strategies.",
  },
  {
    id: "faq-10",
    title: "Can freelancers and job seekers benefit from this course?",
    desc: "Definitely. This course includes strategies tailored for both LinkedIn Course for Freelancers and LinkedIn Course for Job Seekers, helping you attract clients, build credibility, and unlock career opportunities.",
  },
  {
    id: "faq-11",
    title: "Does the course cover content creation on LinkedIn?",
    desc: "Yes. You’ll learn a repeatable posting framework inside the LinkedIn Marketing Course and content modules to help you grow visibility, authority, and engagement consistently.",
  },
  {
    id: "faq-12",
    title: "Will I learn outreach and automation systems?",
    desc: "Yes. The course includes a practical LinkedIn Outreach Automation Course where you’ll learn messaging systems, follow-up workflows, and ethical automation practices.",
  },
];

export default function page() {
  const Courses = "LinkedIn Course";
  const SelectCourses = [];
  const email_sender = "ALL";
  const Brochure = "";
  const BrochureName = "";
  const headerNavItems = [
    { to: "home", label: "Overview" },
    { to: "core-topics", label: "Core Topics" },
    { to: "deliverables", label: "Outcomes" },
    { to: "CourseCurriculum", label: "Curriculum" },
    { to: "CourseTool", label: "AI Tools" },
    { to: "why-different", label: "Why EME" },
    { to: "certificate", label: "Certificate" },
    { to: "about", label: "Featured In" },
    { to: "testimonials", label: "Testimonials" },
    { to: "awards", label: "Awards" },
    { to: "faqs", label: "FAQs" },
  ];

  const _this = {
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const coreTopics = [
    "• LinkedIn Algorithm",
    "• Sales Navigator",
    "• Boolean Search",
    "• DM Scripts",
    "• Outreach Automation",
    "• Employer Branding",
    "• Social Selling",
    "• Growth Hacking",
    "• Certificate of Completion",
    "• Profile Optimization",
    "• AI Content Creation",
  ];
  const coreTopicMaterialIcons = [
    "auto_graph",         // LinkedIn Algorithm
    "workspaces",         // Sales Navigator
    "saved_search",       // Boolean Search
    "forum",              // DM Scripts
    "sync_alt",           // Outreach Automation
    "workspace_premium",  // Employer Branding
    "group",              // Social Selling
    "rocket_launch",      // Growth Hacking
    "verified",           // Certificate of Completion
    "tune",               // Profile Optimization
    "smart_toy",          // AI Content Creation
  ];

  const struggles = [
    "Your LinkedIn profile looks inactive even though you’re highly skilled",
    "You post regularly but barely get views, likes or engagement",
    "Recruiters visit your profile but never message you back",
    "Your LinkedIn profile doesn’t attract quality job opportunities",
    "You’re in HR but struggling to find the right candidates quickly",
    "Your sales outreach gets ignored by potential clients",
    "You send connection requests, but nobody responds",
    "Your competitors generate leads from LinkedIn, while you don’t",
    "You want to build a personal brand, but don’t know where to start",
    "Your LinkedIn content gets lost without visibility or reach",
    "You run a business, but LinkedIn isn’t bringing leads or conversions",
    "You’re a freelancer struggling to get high-paying international clients",
    "You don’t know how to use LinkedIn AI tools effectively",
    "Your profile doesn’t rank in LinkedIn search results",
    "You’re applying for jobs daily, but getting zero interview calls",
    "You have no strategy for LinkedIn networking or outreach",
    "You struggle to write professional LinkedIn posts consistently",
    "Your team doesn’t know how to use Sales Navigator properly",
    "You want to grow on LinkedIn but don’t understand the algorithm",
    "You know LinkedIn is powerful, but you’re not using it to its full potential",
  ];

  const whatYouBuild = [
    {
      title: "01 — A Fully Optimized LinkedIn Profile",
      desc: "Build a recruiter-ready profile with headline optimization, SEO keywords, banners, featured sections & positioning strategies from our LinkedIn Profile Optimization Course and LinkedIn Personal Branding Course.",
    },
    {
      title: "02 — 30-Day AI-Powered Content Calendar",
      desc: "Create a complete content strategy with AI prompts, viral hooks, post templates & engagement systems from the LinkedIn Content Strategy Course and LinkedIn AI Course.",
    },
    {
      title: "03 — Reusable AI Prompt Library",
      desc: "Access high-converting AI prompts for LinkedIn posts, outreach messages, hiring, lead generation & branding workflows used in our LinkedIn Growth Hacking Course.",
    },
    {
      title: "04 — Target Company & Recruiter Database",
      desc: "Build a targeted recruiter & client database using advanced filters, intent signals & techniques taught inside the Boolean Search Course LinkedIn and Sales Navigator Training modules.",
    },
    {
      title: "05 — DM Script & Outreach Library",
      desc: "Get proven outreach templates for HRs, founders, freelancers & sales teams through the LinkedIn Outreach Automation Course and LinkedIn Social Selling Course.",
    },
    {
      title: "06 — CRM Pipeline & Tracking Sheet",
      desc: "Track leads, conversations, follow-ups & hiring pipelines with easy CRM systems designed for the LinkedIn Lead Generation Course and LinkedIn Course for Sales Professionals.",
    },
    {
      title: "07 — Lead Funnel & Conversion Blueprint",
      desc: "Build a LinkedIn funnel for personal branding, lead generation & conversions with frameworks from the LinkedIn Marketing Course and LinkedIn Course for Business Owners.",
    },
    {
      title: "08 — 90-Day Post-Program Growth Plan",
      desc: "Get a step-by-step roadmap for networking, job search, client acquisition & profile growth with the Best LinkedIn Course for Career, LinkedIn Course for Freelancers and LinkedIn Course for Job Seekers.",
    },
  ];
  const whatYouBuildMaterialIcons = [
    "badge",
    "calendar_month",
    "psychology",
    "travel_explore",
    "chat",
    "table_view",
    "conversion_path",
    "timeline",
  ];

  const modules = [
    {
      key: "mod-01",
      title: "MOD 01: LinkedIn Foundation, Profile Authority & AI Positioning",
      meta: "Classes 1–4 • Month 1",
      bullets: [
        "• Understanding LinkedIn algorithm, reach & growth strategy",
        "• Build a high-converting profile with the LinkedIn Profile Optimization Course framework",
        "• Headline, About section, featured section & SEO optimization",
        "• AI-powered personal branding strategies from the LinkedIn AI Course",
        "• Profile positioning for recruiters, clients & business growth",
        "• Visual branding, banners & authority-building systems",
      ],
      extra: [],
    },
    {
      key: "mod-02",
      title: "MOD 02: Networking, Relationships & Pipeline Building",
      meta: "Classes 5–8 · Month 2",
      bullets: [
        "• Boolean search & advanced LinkedIn filters",
        "• Connection messaging & personalized outreach",
        "• 3-step follow-up strategy that actually works",
        "• LinkedIn CRM & pipeline tracking system",
      ],
      extra: [],
    },
    {
      key: "mod-03",
      title: "MOD 03: Content Strategy, AI Execution & Branding",
      meta: "Classes 9–12 · Month 3",
      bullets: [
        "• Content pillars & authority positioning psychology",
        "• 30-day content calendar with AI scheduling",
        "• Carousels, video scripts & Canva visual design",
        "• LinkedIn Newsletter & long-form thought leadership",
      ],
      extra: [
        "Generate headlines, About sections & ICP personas using prompts",
        "Auto-generate outreach templates, CRM scheduling & follow-up flows",
        "Prompt frameworks for posts, carousels, newsletters & full content calendars",
      ],
    },
    {
      key: "mod-04",
      title: "MOD 04: Growth Hacking, Analytics & Algorithm Mastery",
      meta: "Classes 13–16 · Month 4",
      bullets: ["• LinkedIn KPIs, analytics & performance dashboards"],
      extra: [],
    },
    {
      key: "mod-05",
      title: "MOD 05: Lead Generation Systems, Conversion & Sales",
      meta: "Classes 17–20 · Month 5",
      bullets: ["• Lead funnel architecture: Awareness → Conversion"],
      extra: [],
    },
    {
      key: "mod-06",
      title: "MOD 06: AI Automation, Monetization & Final Strategy",
      meta: "Classes 21–24 · Month 6",
      bullets: [
        "• Ethical AI automation: Zapier, Make & LinkedIn flows",
        "• Growth hacking tactics: engagement loops, DM funnels",
        "• LinkedIn algorithm decoded + post optimization",
        "• Comment mining & micro-community building",
        "• Sales Navigator deep-dive & ICP segmentation",
        "• Interview, hiring & placement conversion systems",
        "• Lead magnets, webinars & DM nurture sequences",
        "• Video content creation at scale with AI tools",
        "• Monetize LinkedIn: proposals, services & deal closing",
        "• Final project: Full LinkedIn Lead Gen Strategy",
      ],
      extra: [
        "AI schedulers, analytics tools & AI-powered post optimization",
        "Lead discovery, qualification scoring & lead magnet content generation",
        "End-to-end automation setup, AI video editors & proposal generators",
      ],
    },
  ];

  const aiTools = [
    { name: "ChatGPT", iconSrc: "/assets/images/Digital_Marketing_Landing/icons/ChatGpt-logo.png", width: 140, height: 60 },
    { name: "Claude AI", iconSrc: "/assets/images/tools/Claude_Logo_2023-s1280.png", width: 140, height: 60 },
    { name: "Jasper", iconSrc: "/assets/images/tools/Jasper-Logo.png", width: 140, height: 60 },
    { name: "Canva", iconSrc: "/assets/images/Digital_Marketing_Landing/icons/canva-logo.png", width: 140, height: 60 },
    { name: "Pictory", iconSrc: "/assets/images/tools/pictory.webp", width: 140, height: 60 },
    { name: "Synthesia", iconSrc: "/assets/images/tools/synthesia.png", width: 140, height: 60 },
    { name: "Descript", iconSrc: "/assets/images/tools/descript.webp", width: 140, height: 60 },
    { name: "Shield Analytics", iconSrc: "/assets/images/tools/Shield_Analytics.png", width: 140, height: 60 },
    { name: "Sales Navigator", iconSrc: "/assets/images/Digital_Marketing_Landing/icons/LinkedIn-logo.png", width: 140, height: 60 },
    { name: "Zapier", iconSrc: "/assets/images/tools/Zapier_logo.png", width: 140, height: 60 },
    { name: "Make", iconSrc: "/assets/images/tools/make.png", width: 140, height: 60 },
    { name: "HubSpot", iconSrc: "/assets/images/tools/HubSpot_Logo.png", width: 140, height: 60 },
    { name: "Taplio", iconSrc: "/assets/images/tools/taplio.png", width: 140, height: 60 },
    { name: "AuthoredUp", iconSrc: "/assets/images/tools/authoredUp.avif", width: 140, height: 60 },
    { name: "Buffer", iconSrc: "/assets/images/tools/Buffer-Logo.png", width: 140, height: 60 },
    { name: "DALL·E", iconSrc: "/assets/images/Digital_Marketing_Landing/icons/OpenAI_Logo.png", width: 140, height: 60 },
  ];

  const whyDifferent = [
    {
      title: "1. Action Templates in Every Module",
      desc: "Get ready-to-use templates, scripts, and workflows inside this Best LinkedIn Course for Career so you can implement faster without starting from scratch.",
    },
    {
      title: "2. AI + LinkedIn Practical Training",
      desc: "Learn smarter with our hands-on LinkedIn AI Course, covering automation, content systems, and prospecting tools for faster growth.",
    },
    {
      title: "3. Real Assignments & Weekly Tasks",
      desc: "Every lesson includes practical exercises from LinkedIn Profile Optimization Course, LinkedIn Content Strategy Course, and outreach modules to build real skills.",
    },
    {
      title: "4. Career to Business Growth Path",
      desc: "Whether you need LinkedIn Training for HR, a LinkedIn Course for Sales Professionals, or a LinkedIn Course for Business Owners, this program supports every stage of growth.",
    },
  ];

  const testimonialsData = {
    title: "Student",
    titleHighlight: "Testimonials",
    subtitle: "Real feedback from learners who built systems, not just skills.",
    TestimonialsData: [
      {
        id: 1,
        name: "Sahil Das",
        rating: 5,
        text: "My profile finally looks professional. After the optimization + keyword part, recruiters started viewing and replying more consistently.",
        src: "/assets/images/Home/hero/Sahil_Das.webp",
        role: "Job Seeker",
      },
      {
        id: 2,
        name: "Laiba Noor",
        rating: 5,
        text: "The AI prompt library + 30-day calendar made posting easy. I stopped overthinking and started publishing consistently with a clear strategy.",
        src: "/assets/images/Home/hero/Laiba_Noor_DM_Lead_Height.webp",
        role: "Marketing",
      },
      {
        id: 3,
        name: "Ankita Biswas",
        rating: 5,
        text: "The DM scripts + CRM tracking sheet changed everything. My outreach became structured and my follow-ups started converting into calls.",
        src: "/assets/images/Home/hero/Ankita_Biswas_HR.webp",
        role: "Sales",
      },
      {
        id: 4,
        name: "Sayan Mujumder",
        rating: 5,
        text: "Sales Navigator + Boolean search modules were super practical. I can now build targeted lists and run outreach with a real pipeline.",
        src: "/assets/images/Home/hero/Sayan_Mujumder_Gowebbo_&_co.webp",
        role: "Lead Gen",
      },
    ],
  };

  return (
    <main className="flex flex-col justify-start items-center w-full min-h-screen">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <AdmissionHeader _this={_this} navItems={headerNavItems} />
      <div id="home" className="w-full">
        <InfiniteCall />
      </div>

      <div className="w-full relative bg-contain bg-no-repeat bg-[#0B1B44] bg-[url('/assets/images/linkedin/linkedin-course-hero-career-growth-engagement.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0057E245_0%,transparent_55%),linear-gradient(90deg,#0B1B44E6_0%,#0B1B44B3_45%,#0B1B44CC_100%),radial-gradient(circle_at_bottom,#E87D1A33_0%,transparent_55%)]" />
        <div className="relative z-10">
          <CoursesHero
            {..._this}
            badgeText={"Learn & Grow Your Career with LinkedIn in 6 Months!"}
            title={"Master LinkedIn. Build Your Brand. Generate Real Opportunities."}
            description={
              "The most advanced Best LinkedIn Course for Career growth designed for professionals, HR teams, freelancers, marketers, sales experts & business owners. Learn AI-powered LinkedIn strategies to grow visibility, generate leads, build authority & unlock career opportunities."
            }
            googleRating={"4.8"}
            justdialRating={""}
            showRatings={false}
            showCertifications={true}
            showBottomCtaCard={true}
            ctaPrimaryLabel={
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] leading-none relative top-[1px]">rocket_launch</span>
                Enrol Now
              </span>
            }
            ctaSecondaryLabel={
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] leading-none relative top-[1px]">menu_book</span>
                View Curriculum
              </span>
            }
            ctaSecondaryHref={"#CourseCurriculum"}
            heroStats={[
              { materialIcon: "school", value: "24+ Live Interactive Sessions" },
              { materialIcon: "view_module", value: "6 Industry-Focused Power Modules" },
              { materialIcon: "account_tree", value: "5 Career & Business Growth Tracks" },
              { materialIcon: "schedule", value: "48+ Hours of Practical Learning" },
              { materialIcon: "smart_toy", value: "AI Prompts, Automation & LinkedIn Tools" },
            ]}
          />
        </div>
      </div>

      <div id="core-topics" className="w-full bg-white">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-6 py-8 md:py-12 px-[20px] md:px-28">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-[#0057E2]" />
            <h2 className="text-[#232D63] text-[18px] md:text-[22px] font-bold">
              Core <span className="text-[#E87D1A]">Topics</span>
            </h2>
          </div>
          <div className="flex gap-2 overflow-x-auto md:flex-wrap md:gap-2 pb-2 snap-x">
            {coreTopics.map((topic, idx) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-600 bg-white whitespace-nowrap snap-start"
              >
                <span className="material-symbols-outlined mr-2 text-[#0057E2] text-[16px] leading-none relative top-[1px]">
                  {coreTopicMaterialIcons[idx % coreTopicMaterialIcons.length]}
                </span>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F4FBFE] bg-[url('/assets/images/linkedin/linkedin-course-problems-section-light-background.webp')] bg-cover bg-center bg-no-repeat">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-4 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white border border-[#E6F3FA] flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-[#E87D1A]" />
            </div>
            <h2 className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              Struggling <span className="text-[#E87D1A]">With Any of These?</span>
            </h2>
          </div>
        </div>
        <div className="w-full pb-10 md:pb-14">
          <Marquee speed={30} gradient={false} autoFill>
            <div className="flex gap-4 pr-4 px-4">
              {struggles.map((item) => (
                <Card
                  key={item}
                  className="rounded-2xl border shadow-sm px-4 py-3 w-[320px] md:w-[420px]"
                >
                  <div className="text-sm text-gray-600">{item}</div>
                </Card>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="w-full max-w-[1380px] mx-auto pb-10 md:pb-14 px-[20px] md:px-28">
          <div className="rounded-2xl border border-[#E6F3FA] bg-white px-4 py-3 inline-flex">
            <div className="text-[#232D63] font-semibold">👉 Then program is exactly for you.</div>
          </div>
        </div>
      </div>

      <div id="deliverables" className="w-full bg-white">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-6 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-[#E87D1A]" />
            <h2 className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              Real LinkedIn <span className="text-[#E87D1A]">Assets You’ll Build During Training</span>
            </h2>
          </div>
          <div className="text-gray-600 font-medium">
            Go beyond theory with practical LinkedIn systems, automation workflows and proven growth strategies used by professionals & businesses.
          </div>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x pb-2">
            {whatYouBuild.map((item, idx) => {
              const match = /^(\d{2})\s+—\s+([\s\S]+)$/.exec(item.title);
              const number = match?.[1] || String(idx + 1).padStart(2, "0");
              const cardTitle = match?.[2] || item.title;
              const materialIcon = whatYouBuildMaterialIcons[idx % whatYouBuildMaterialIcons.length];

              return (
                <Card
                  key={item.title}
                  className="relative rounded-2xl border border-[#E6F3FA] bg-[linear-gradient(135deg,#ffffff_0%,#F4FBFE_100%)] shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#BFD6FF] min-w-[280px] md:min-w-0 snap-start"
                >
                  <span className="absolute right-5 top-5 material-symbols-outlined text-[32px] text-[#0057E2]/55 leading-none">
                    {materialIcon}
                  </span>
                  <div className="inline-flex w-fit items-center rounded-full border border-[#E6F3FA] bg-white px-2.5 py-1 text-xs font-bold text-[#667085] mb-3">
                    {number}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-[#232D63]">{cardTitle}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div id="CourseCurriculum" className="w-full bg-[#F4FBFE]">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-4 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex flex-col gap-2">
            <div className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              Our Flagship <span className="text-[#E87D1A]">LinkedIn Growth Program</span>
            </div>
            <div className="w-fit rounded-full border border-[#E6F3FA] bg-white px-4 py-1.5 text-[#232D63] font-semibold text-[12px] md:text-[14px]">
              6 Power Modules. 24 Live Classes. Practical Learning.
            </div>
          </div>
          <div className="text-gray-600">
            Every session is focused on practical LinkedIn growth strategies, AI tools, lead generation systems, personal branding & career acceleration with hands-on implementation tasks.
          </div>
          <ModulesCarouselSection modules={modules} />

          <div className="pt-2">
            <Button variant="outline" className="rounded-md gap-2">
              <Download size={16} />
              Download Detailed Syllabus
            </Button>
          </div>
        </div>
      </div>

      <div id="CourseTool" className="w-full bg-white">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-4 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex flex-col gap-2">
            <div className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              AI Meets <span className="text-[#E87D1A]">LinkedIn Growth</span>
            </div>
            <div className="w-fit rounded-full border border-[#E6F3FA] bg-[#F4FBFE] px-4 py-1 text-[#0057E2] font-semibold text-[12px] md:text-[14px]">
              Turn effort into results with smarter systems.
            </div>
          </div>
          <div className="text-gray-600">
            Master profile optimization, lead generation, and content strategy with this complete LinkedIn Marketing Course. Learn Sales Navigator, outreach automation, and personal branding inside a hands-on LinkedIn AI Course designed for career and business growth.
          </div>
          <Marquee speed={28} gradient={false} autoFill>
            <div className="flex gap-6 pr-6">
              {aiTools.map((tool) => (
                <Card key={tool.name} className="rounded-2xl border shadow-sm p-4 flex items-center justify-center min-h-[64px] min-w-[180px]">
                  {tool.iconSrc ? (
                    <Image
                      src={tool.iconSrc}
                      alt={tool.name}
                      width={tool.width || 140}
                      height={tool.height || 60}
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <div className="text-sm font-semibold text-[#232D63] text-center">{tool.name}</div>
                  )}
                </Card>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      <div id="why-different" className="w-full bg-[#F4FBFE]">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-4 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex flex-col gap-2">
            <div className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              What Makes This <span className="text-[#E87D1A]">Course Stand Out?</span>
            </div>
            <div className="text-gray-600">More than theory; get frameworks, tools, and real execution systems.</div>
          </div>
          <WhyDifferentFlipCards items={whyDifferent} />
        </div>
      </div>

      <div id="certificate" className="w-full bg-white">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-4 py-10 md:py-14 px-[20px] md:px-28">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-[#0057E2]" />
            <div className="text-[#232D63] text-[18px] md:text-[26px] font-bold">
              Earn Your <span className="text-[#E87D1A]">Certificate</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#E6F3FA] bg-white shadow-sm p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-[#232D63]">
                    <div>Attendance &amp; Participation</div>
                    <div className="text-[#4B4B4B]">30%</div>
                  </div>
                  <div className="w-full h-2 bg-[#EEF2F6] rounded-full overflow-hidden">
                    <div className="h-2 bg-[#232D63] rounded-full w-[30%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-[#232D63]">
                    <div>Weekly Task Submissions</div>
                    <div className="text-[#4B4B4B]">30%</div>
                  </div>
                  <div className="w-full h-2 bg-[#EEF2F6] rounded-full overflow-hidden">
                    <div className="h-2 bg-[#232D63] rounded-full w-[30%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-[#232D63]">
                    <div>Mid-Course Assignment</div>
                    <div className="text-[#4B4B4B]">10%</div>
                  </div>
                  <div className="w-full h-2 bg-[#EEF2F6] rounded-full overflow-hidden">
                    <div className="h-2 bg-[#232D63] rounded-full w-[10%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-[#232D63]">
                    <div>Final Project &amp; Presentation</div>
                    <div className="text-[#4B4B4B]">30%</div>
                  </div>
                  <div className="w-full h-2 bg-[#EEF2F6] rounded-full overflow-hidden">
                    <div className="h-2 bg-[#232D63] rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#232D63] text-white shadow-lg p-6 flex flex-col justify-between gap-4 overflow-hidden relative bg-[url('/assets/images/linkedin/certificate-course-completion-background-premium.webp')] bg-cover bg-center bg-no-repeat">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B1B44E6_0%,#0B1B44B3_55%,#0B1B44E6_100%),radial-gradient(circle_at_top,#0057E240_0%,transparent_55%),radial-gradient(circle_at_bottom,#E87D1A2E_0%,transparent_55%)]" />
              <span className="material-symbols-outlined absolute -top-6 -right-6 text-[120px] text-white/10 leading-none">
                workspace_premium
              </span>
              <div className="relative z-10">
                <div className="text-xl font-semibold mb-2">🎓 Earn Your Certificate</div>
                <div className="text-sm text-white/80 leading-[22px]">
                  Score 60% or above to earn your certificate. Issued by EME Academy 🎓
                </div>
              </div>
              <div className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px] leading-none relative top-[1px]">
                  verified
                </span>
                Certificate issued upon successful completion.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 md:py-14 px-[20px] md:px-28">
        <div className="w-full max-w-[1380px] mx-auto">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-12 text-center text-white rounded-3xl border border-white/10 bg-[#0B1B44] bg-[url('/assets/images/linkedin/linkedin-course-cta-background-growth-dark-premium.webp')] bg-cover bg-center bg-no-repeat shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B1B44E6_0%,#0B1B44B3_55%,#0B1B44E6_100%),radial-gradient(circle_at_top,#0057E240_0%,transparent_55%),radial-gradient(circle_at_bottom,#E87D1A2E_0%,transparent_55%)]" />
            <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm bg-[#E87D1A]/15 text-[#FFD7B8] font-medium mb-4 border border-[#E87D1A]/25">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87D1A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E87D1A]" />
              </span>
              Limited Seats — New Cohort Open
            </div>
            <div className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              YOUR LINKEDIN. TRANSFORMED.
            </div>
            <div className="text-lg text-white/70 max-w-xl mx-auto mb-6">
              Join the program that builds your LinkedIn into a machine.
            </div>
            <div className="flex justify-center">
              <CTAButton
                name="👉 Enroll Now & Secure Your Spot"
                styleClasses="px-8 py-3 rounded-xl bg-[#E87D1A] text-white text-base font-semibold hover:bg-[#d97318] transition shadow-lg border-none"
                _this={_this}
              />
            </div>
            <div className="text-sm text-white/60 mt-4">
              Questions? Reach out to EME Academy directly.
            </div>
            <div className="text-sm text-white/60">
              Certificate issued upon successful completion.
            </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="w-full bg-white">
        <FeaturedIn {..._this} />
      </div>

      <div className="w-full bg-white">
        <CoursesTestimonials {...testimonialsData} />
      </div>

      <div id="awards" className="w-full bg-white">
        <Awards />
      </div>

      <div id="faqs" className="w-full bg-white">
        <Faqs faqs={faqs} />
      </div>

      <CoursesLandingFooter courseName="LinkedIn Course" {..._this} />
      <StickyCTAButton Courses="LinkedIn Course" />
    </main>
  );
}
