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
  alternates: {
    canonical: "https://emeacademy.co.in/best-linkedin-course-for-career-hiring-growth",
  },
};

const faqs = [
  {
    id: "faq-1",
    title: "Q: Is this course suitable for complete beginners or do I need LinkedIn experience?",
    desc: "A: It is designed for everyone from beginner to advanced (50 to 5,000+ connections). It starts with foundations in Module 1 and progresses to advanced AI automation by Module 6. You only need a LinkedIn account and a willingness to implement.",
  },
  {
    id: "faq-2",
    title: "Q: How is this different from free LinkedIn tips on YouTube or Google?",
    desc: "A: Unlike scattered free tactics, this is a structured, sequenced system with accountability, live feedback, and real deliverables (like a personalized DM library and CRM sheet) that YouTube doesn't provide.",
  },
  {
    id: "faq-3",
    title: "Q: Are the classes live or pre-recorded? What if I miss one?",
    desc: "A: All 24 classes are live 2-hour sessions conducted online. If you miss a class, recordings are provided so you can stay caught up.",
  },
  {
    id: "faq-4",
    title: "Q: How much time do I need to commit every week?",
    desc: "A: Plan for 3–4 hours per week. This includes 2 hours for the live class and 1–2 hours for the practical task. It is designed to be manageable for busy professionals with full-time jobs.",
  },
  {
    id: "faq-5",
    title: "Q: I've never used AI tools before. Will I be able to keep up?",
    desc: "A: Yes. No prior AI experience is required. The course introduces tools like ChatGPT, Claude, and Canva AI gradually with guided walkthroughs and a ready-to-use prompt library.",
  },
  {
    id: "faq-6",
    title: "Q: Do I need LinkedIn Premium or Sales Navigator to join?",
    desc: "A: No. A free account is sufficient. While Sales Navigator is covered in Module 5, the course teaches you how to simulate its features using free filters.",
  },
  {
    id: "faq-7",
    title: "Q: Will I have access to the materials after the course ends?",
    desc: "A: Yes. You keep all templates, prompt libraries, CRM sheets, and frameworks forever. Recordings are also available for a limited time after the cohort ends.",
  },
  {
    id: "faq-8",
    title: "Q: I'm in HR. Is this course relevant for me or is it built for sales people?",
    desc: "A: It is highly relevant. There is a dedicated HR learning track covering employer branding, talent outreach, and AI-driven screening. There are also specific tracks for Sales, Marketing, Freelancers, and Lead Gen.",
  },
  {
    id: "faq-9",
    title: "Q: How soon can I expect to see real results on LinkedIn?",
    desc: "A: Many students see profile improvements within 2 weeks. Content traction usually grows by Month 2–3. Results compound over the full 6-month program.",
  },
  {
    id: "faq-10",
    title: "Q: What exactly will I walk away with at the end?",
    desc: "A: Tangible assets: an optimized profile, 30-day content calendar, DM script library, CRM pipeline, lead funnel blueprint, and a Certificate of Completion.",
  },
  {
    id: "faq-11",
    title: "Q: Is there a group or community for students?",
    desc: "A: Yes. Enrolled students join a dedicated peer community to share work, ask questions, and network with other professionals.",
  },
  {
    id: "faq-12",
    title: "Q: What do I need to do to earn the certificate?",
    desc: "A: You must score 60% or above based on: Attendance (30%), Weekly Tasks (30%), Mid-Course Assignment (10%), and a Final Project/Presentation (30%).",
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

  const programStats = [
    "24+ LIVE CLASSES",
    "6 POWER MODULES",
    "5 ROLE TRACKS",
    "48HRS OF LEARNING",
    "AI PROMPTS & TOOLS",
  ];

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
    "Your LinkedIn profile exists, but no one reaches out — no recruiters, no leads, no clients",
    "You stare at a blank page every time you try to write a LinkedIn post and give up",
    "Your connection requests go ignored or never go anywhere meaningful",
    "You've heard \"use AI\" but have no idea how to actually apply it to LinkedIn",
    "Your posts get 3 likes (all family) while others seem to go viral effortlessly",
    "You're in HR or Sales but your LinkedIn doesn't attract the right candidates or clients",
    "You run a placement institute but companies won't take your calls seriously",
    "You're a freelancer or founder with skills, but no consistent lead flow from LinkedIn",
    "Recruiters can't find you because your profile has zero search visibility",
    "You have no system to track conversations, follow-ups or your pipeline — it's all chaos",
    "You're posting inconsistently because you don't have a strategy or content calendar",
    "You know LinkedIn is powerful but can't figure out how to turn it into real results",
  ];

  const whatYouBuild = [
    {
      title: "01 — A Fully Optimized LinkedIn Profile",
      desc: "Headlines, About section, banner, SEO keywords and visual brand — all working together to attract the right people 24/7.",
    },
    {
      title: "02 — 30-Day AI-Powered Content Calendar",
      desc: "A ready-to-publish content plan with AI prompts, post templates, hooks and Canva visual assets.",
    },
    {
      title: "03 — Reusable AI Prompt Library",
      desc: "10+ battle-tested AI prompts to write posts, outreach messages, job descriptions, proposals, and content outlines in minutes.",
    },
    {
      title: "04 — Target Company & Recruiter Database",
      desc: "A structured list of 20–50 companies, recruiters, or ideal clients, built using Boolean search, LinkedIn filters and intent signals.",
    },
    {
      title: "05 — DM Script & Outreach Library",
      desc: "Role-specific messaging scripts for HR, Sales, Founders and Freelancers — like connection requests, follow-ups and pitch sequences.",
    },
    {
      title: "06 — CRM Pipeline & Tracking Sheet",
      desc: "A Google Sheet CRM to track every conversation, follow-up touchpoint and lead status. No more losing leads in the chat pile.",
    },
    {
      title: "07 — Lead Funnel & Conversion Blueprint",
      desc: "A complete funnel from awareness to close, including lead magnets, webinar frameworks, DM nurture sequences and KPI dashboards.",
    },
    {
      title: "08 — 90-Day Post-Program Growth Plan",
      desc: "A personalized roadmap to keep growing after the course ends, with weekly actions, KPIs, and your LinkedIn strategy on autopilot.",
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
      title: "MOD 01: Foundation, Profile Authority & AI Positioning",
      meta: "Classes 1–4 · Month 1",
      bullets: [
        "• LinkedIn ecosystem, algorithm & market realities",
        "• High-converting headline & About section frameworks",
        "• SEO keywords, banner & visual branding",
        "• Persona clarity & positioning statement",
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
      title: "1. Deliverables After Every Single Module",
      desc: "You don't just learn, you build. Every module ends with real assets: content calendars, CRM sheets, DM libraries, funnels and playbooks you keep forever.",
    },
    {
      title: "2. AI Engineered Classes",
      desc: "Every class has an AI insight, an AI tool and an AI-powered task. You'll leave with a personal AI workflow that makes your LinkedIn 10x more efficient.",
    },
    {
      title: "3. Practical Task After Every Class",
      desc: "No passive watching. After every 2-hour class, you complete a real task that reinforces the lesson — like profile rewrites, outreach sends, content creation and more.",
    },
    {
      title: "4. Beginner to Advanced in One Journey",
      desc: "Whether you've never posted on LinkedIn or have 5,000 connections, this program meets you where you are and takes you to mastery across all 6 modules.",
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
    <main className={` flex flex-col justify-start items-center w-full min-h-screen `}>
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
            badgeText={"Learn & Get Hired in 6 Months!"}
            title={"Master LinkedIn. Generate Real Results."}
            description={
              "The most complete LinkedIn course built for HR, Sales, Marketing, Freelancers & Business Owners, powered by AI at every step. Go from invisible to irresistible."
            }
            googleRating={"4.8"}
            justdialRating={""}
            showRatings={false}
            showCertifications={true}
            showBottomCtaCard={true}
            ctaPrimaryLabel={
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] leading-none relative top-[1px]">rocket_launch</span>
                Enrol now
              </span>
            }
            ctaSecondaryLabel={
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] leading-none relative top-[1px]">menu_book</span>
                Curriculum
              </span>
            }
            ctaSecondaryHref={"#CourseCurriculum"}
            heroStats={[
              { materialIcon: "school", value: "24+ LIVE CLASSES" },
              { materialIcon: "view_module", value: "6 POWER MODULES" },
              { materialIcon: "account_tree", value: "5 ROLE TRACKS" },
              { materialIcon: "schedule", value: "48HRS OF LEARNING" },
              { materialIcon: "smart_toy", value: "AI PROMPTS & TOOLS" },
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
              What you&apos;ll <span className="text-[#E87D1A]">build</span> inside this program
            </h2>
          </div>
          <div className="text-gray-600">
            Not theory. Not slides. Real systems, assets and workflows you keep forever.
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
              Our Flagship <span className="text-[#E87D1A]">LinkedIn Program</span>
            </div>
            <div className="w-fit rounded-full border border-[#E6F3FA] bg-white px-4 py-1.5 text-[#232D63] font-semibold text-[12px] md:text-[14px]">
              6 Modules. 24 Classes. Zero Fluff.
            </div>
          </div>
          <div className="text-gray-600">
            Every class is 2 hours. Every class has a practical task. Every module ends with deliverables.
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
              <span className="text-[#E87D1A]">AI-Powered</span> Throughout
            </div>
            <div className="text-[#232D63] font-semibold">AI isn&apos;t a bonus. It&apos;s baked into every single class.</div>
          </div>
          <div className="text-gray-600">
            You&apos;ll learn to use the best AI tools available to write faster, prospect smarter, automate follow-ups and scale your LinkedIn presence — ethically and effectively.
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
              Why different from <span className="text-[#E87D1A]">everything else?</span>
            </div>
            <div className="text-gray-600">Most LinkedIn courses give you generic advice. This one builds you an actual system.</div>
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
