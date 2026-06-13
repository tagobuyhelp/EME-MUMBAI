'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock2, Eye } from "lucide-react";
import LeftSection from "./left_section";
import Image from "next/image";
import Link from "next/link";
import Cards from "./cards";
import NewsLogo from "../Components/NewsLogo";
import BlogTestimonial from "../Components/BlogTestimonial";
import NewsCard from "../Components/NewsCard";
import CompanyLogo from "../Components/CompanyLogo";
import BlogAdmissionForm from "../Components/BlogAdmissionForm";
import ShareBlog from "../Components/ShareBlog";

import CTAButton from "@/components/common/CtaButton";
import { useState } from "react";

const placementCards = [
    {
        id: 1,
        title: "100% Placement Support Program",
        imageSrc: "/assets/images/blog/girl_photo.svg",
        features: [
            "5000+ placed",
            "180+ hiring partners",
            "EMI options available",
            "Highest CTC Upto 10 LPA",
            "Hybrid Mode Class",
        ],
    },
    {
        id: 2,
        title: "Additional Career Benefits",
        imageSrc: "/assets/images/blog/girl_photo.svg",
        features: [
            "5000+ placed",
            "180+ hiring partners",
            "EMI options available",
            "Highest CTC Upto 10 LPA",
            "Hybrid Mode Class",
        ],
    },
];

const dataAnalyticsSalary = [
    {
        experience: "Fresher (0-1 year)",
        salary: "₹3 - 5 LPA",
    },
    {
        experience: "After 2-3 years",
        salary: "₹8 - 15 LPA",
    },
    {
        experience: "Senior / specialized roles",
        salary: "₹20 LPA+",
    },
];

const sapSalary = [
    {
        experience: "SAP certified fresher",
        salary: "₹3.5 - 6 LPA",
    },
    {
        experience: "After 2-3 years",
        salary: "₹8 - 14 LPA",
    },
    {
        experience: "Experienced SAP consultants",
        salary: "₹20 - 35 LPA+",
    },
];

const digitalMarketingSalary = [
    {
        experience: "Entry level (fresher)",
        salary: "₹2.5 - 5 LPA",
    },
    {
        experience: "With 1-2 years of experience",
        salary: "₹5 - 10 LPA",
    },
    {
        experience: "Freelancing (Year 1 onwards)",
        salary: "₹3 - 6 LPA possible",
    },
];

const genAiSalary = [
    {
        experience: "AI + Digital Marketing",
        salary: "₹4 - 8 LPA fresher range",
    },
    {
        experience: "AI Content Creator / Prompt Engineer",
        salary: "₹3 - 6 LPA to start",
    },
    {
        experience: "AI tool trainer / consultant",
        salary: "Emerging role / high growth",
    },
];

const comparisonData = [
    {
        course: "Data Analytics",
        duration: "4-6 months",
        salary: "₹3 - 5 LPA",
        bestFor: "Number-minded, analytical thinkers",
        stream: "Any",
    },
    {
        course: "SAP",
        duration: "3-4 months",
        salary: "₹3.5 - 6 LPA",
        bestFor: "Commerce / finance / ops background",
        stream: "Any (commerce preferred)",
    },
    {
        course: "Digital Marketing",
        duration: "3-4 months",
        salary: "₹2.5 - 5 LPA",
        bestFor: "Creative, communicators, entrepreneurs",
        stream: "Any",
    },
    {
        course: "Generative AI",
        duration: "2-3 months",
        salary: "Varies by combo",
        bestFor: "Everyone - best as an add-on skill",
        stream: "Any",
    },
];

export default function TopCoursesBlog({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);

    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        SelectCourses: SelectCourses ? SelectCourses : [],
        email_sender,
        Brochure,
        BrochureName,
        ctaType,
        setCtaType,
    };

    return (
        <div className="w-full flex flex-col md:flex-row max-w-7xl justify-between gap-4 px-4 py-2 mx-auto">
            <div className="hidden lg:block">
                <LeftSection />
            </div>

            <div className="flex flex-col justify-center gap-4 md:mt-8 md:max-w-[680px]">
                <div className="flex flex-col gap-2">
                    <nav className="flex text-xs md:text-sm text-gray-500 gap-1 md:gap-2 items-center mb-1">
                        <Link href="/" className="hover:text-[#0057E2] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blogs" className="hover:text-[#0057E2] transition-colors">Blogs</Link>
                        <span>/</span>
                        <span className="text-gray-800 font-[500] truncate max-w-[200px] md:max-w-[400px]">
                            Top 4 Technical Courses After 12th
                        </span>
                    </nav>
                    <Image
                        className="w-full rounded-md"
                        width={1200}
                        height={514}
                        src="/assets/images/blogs/Top_4_Technical_Courses_After_12th_That_Can_Lead_to_High_Paying_Careers.webp"
                        alt="Top 4 Technical Courses After 12th"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By - <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">EME Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />13 Jun 2026</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 287 views</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="top-4-technical-courses-after-12th-that-can-lead-to-high-paying-careers" className="text-[20px] md:text-[24px] font-[700] leading-tight text-left">
                        Top 4 Technical Courses After 12th That Can Lead to High-Paying Careers
                    </h1>
                    <p>
                        Everyone around you has an opinion. Family says engineering. Friends say MBA. The internet throws 47 different options at you. And somewhere in the middle of all that noise, you're just trying to figure out what will actually get you a good job.
                    </p>
                    <p>
                        Here's what most people don't tell you: a lot of students who land great jobs early don't necessarily have a four-year degree sorted. They picked the right technical courses after 12th - something practical, in-demand, and directly linked to what companies are actually hiring for right now.
                    </p>
                    <p>
                        This post covers exactly 4 of those courses. We'll break down what each one is, what you'll learn, what the salary looks like, and most importantly - which one suits you.
                    </p>
                    <p>
                        If you prefer video over reading, watch this first:
                    </p>

                    {/* Responsive YouTube Embed */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg my-4">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/CvwNePzGLkk"
                            title="4 Technical Courses Explained in Plain English"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <span className="text-[12px] text-gray-500 block text-center mt-2">
                            4 technical courses explained in plain English - in under 6 minutes.
                        </span>
                    </div>

                    <h2 id="before-you-pick-a-course-what-actually-matters" className="text-[18px] font-[700] mt-6">
                        Before You Pick a Course - Know What Actually Matters
                    </h2>
                    <Image
                        className="w-full rounded-md my-2"
                        width={600}
                        height={350}
                        src="/assets/images/blogs/4_thinngs_to_consider_before_choosing_a_technical_course.webp"
                        alt="4 Things to Consider Before Choosing a Technical Course"
                    />
                    <p>
                        When it comes to choosing the right technical courses after 12th, most people focus only on what sounds impressive. Here are the 4 things that actually matter:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Salary potential:</strong> What does a fresher actually earn? Not the best-case number, the realistic one.</li>
                        <li><strong>Job demand:</strong> Are companies actually hiring for this, or is it trending only on LinkedIn?</li>
                        <li><strong>Stream requirement:</strong> Can you do it from any background, or do you need a specific stream?</li>
                        <li><strong>Time to first job:</strong> How long before you can realistically start earning?</li>
                    </ul>
                    <p>
                        All 4 courses below score well on each of these. Let's get into them.
                    </p>

                    <h2 id="data-analytics-the-course-for-people-who-like-numbers" className="text-[18px] font-[700] mt-6">
                        1. Data Analytics - The Course for People Who Like Making Sense of Numbers
                    </h2>
                    <p>
                        Every company today is sitting on a pile of data. Website visits, sales numbers, customer complaints, monthly expenses - it's all tracked. But raw data means nothing on its own. Someone needs to look at it, find the patterns, and tell the team what to do next.
                    </p>
                    <p>
                        That someone is a <strong>Data Analyst</strong>.
                    </p>
                    <h3 className="font-semibold text-black">What You Actually Learn</h3>
                    <p>
                        The core tools are pretty straightforward - Excel (advanced level), SQL for pulling data from databases, and visualization tools like Power BI or Tableau that turn numbers into clean charts and dashboards. You also pick up Python basics in most good programs, which opens a lot of doors later.
                    </p>
                    <p>
                        The real skill isn't the software though. It's thinking clearly about a problem and presenting your findings in a way non-technical people can understand.
                    </p>
                    <h3 className="font-semibold text-black">Who Can Do This Course</h3>
                    <p>
                        This is one of those fields where your stream genuinely doesn't matter much. Science, commerce, even arts students have made successful transitions into data analytics. If you're comfortable with numbers and enjoy problem-solving, you're already halfway there.
                    </p>

                    <h3 className="font-semibold text-black">Salary - What to Realistically Expect</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50%]">Experience Level</TableHead>
                                <TableHead>Salary Range</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataAnalyticsSalary.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{item.experience}</TableCell>
                                    <TableCell>{item.salary}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p>
                        Remote work is common in this field, which is a real advantage if you're not in a metro city.
                    </p>

                    <h3 className="font-semibold text-black">Job Roles You Can Apply For</h3>
                    <p className="italic">Data Analyst, Business Analyst, MIS Analyst, Reporting Analyst, BI Analyst</p>

                    <h3 className="font-semibold text-black">Is This Course Right for You?</h3>
                    <p>
                        If you like working with numbers, enjoy spotting trends, and want a role that exists in literally every industry - healthcare, e-commerce, banking, education - data analytics is one of the most stable and well-paid entry points in tech right now.
                    </p>

                    <Cards cards={placementCards} id={1} _this={_this} />

                    <h2 id="sap-the-course-that-opens-doors-in-large-companies" className="text-[18px] font-[700] mt-6">
                        2. SAP - The Course That Opens Doors in India's Biggest Companies
                    </h2>
                    <p>
                        SAP is a software platform that large companies use to manage their entire operations in one place - finance, procurement, HR, inventory, sales. Think of it as the central nervous system of a big organization.
                    </p>
                    <p>
                        Tata, Mahindra, Reliance, L&T, Wipro - most of India's largest companies run on SAP. And they constantly need people who know how to use it.
                    </p>
                    <h3 className="font-semibold text-black">What You Actually Learn</h3>
                    <p>
                        SAP Course has different modules depending on what function you're working in:
                    </p>
                    <ul className="list-disc pl-5">
                        <li><strong>FICO</strong> - Finance and Controlling (for finance backgrounds)</li>
                        <li><strong>MM</strong> - Materials Management (procurement and inventory)</li>
                        <li><strong>SD</strong> - Sales and Distribution (sales operations)</li>
                        <li><strong>HCM</strong> - Human Capital Management (for HR roles)</li>
                    </ul>
                    <p>
                        Most people start by learning one or two modules based on their interest and background. You also get hands-on practice on a live SAP server, which is what employers actually look for.
                    </p>
                    <h3 className="font-semibold text-black">Who Can Do This Course</h3>
                    <p>
                        SAP is one of the few technical courses that actively welcomes commerce and arts students - not just science. If you have a finance or business background, SAP FICO is a natural fit. If you're from operations or commerce, MM or SD might suit you better.
                    </p>

                    <h3 className="font-semibold text-black">Salary - What to Realistically Expect</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50%]">Experience Level</TableHead>
                                <TableHead>Salary Range</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sapSalary.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{item.experience}</TableCell>
                                    <TableCell>{item.salary}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h3 className="font-semibold text-black">Job Roles You Can Apply For</h3>
                    <p className="italic">SAP Functional Consultant, SAP FICO Analyst, SAP MM Executive, ERP Support Analyst, Business Process Consultant</p>

                    <h3 className="font-semibold text-black">Is This Course Right for You?</h3>
                    <p>
                        If you want a structured corporate career, enjoy understanding how businesses work operationally, and want a skill that's recognized across large companies worldwide - SAP is a very solid choice. Commerce students especially tend to find it very accessible.
                    </p>

                    <h2 id="digital-marketing-the-course-with-multiple-career-paths" className="text-[18px] font-[700] mt-6">
                        3. Digital Marketing - The Course With the Most Career Paths
                    </h2>
                    <p>
                        Digital marketing is broad - intentionally so. It covers how businesses attract customers online through search engines, social media, email, paid ads, and content. And since literally every business now needs an online presence, the demand for people who know this stuff has gone through the roof.
                    </p>
                    <p>
                        What makes this course different from most others is the flexibility. You can go three very different directions after completing it.
                    </p>
                    <h3 className="font-semibold text-black">What You Actually Learn</h3>
                    <p>A good digital marketing course covers:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>SEO (Search Engine Optimization)</strong> - Getting websites to rank on Google</li>
                        <li><strong>Google Ads / PPC</strong> - Running paid search campaigns</li>
                        <li><strong>Social Media Marketing</strong> - Organic and paid strategies on Instagram, LinkedIn</li>
                        <li><strong>Email Marketing</strong> - Campaigns, automation, segmentation</li>
                        <li><strong>Content Marketing</strong> - Blog strategy, copywriting, video scripts</li>
                        <li><strong>Analytics</strong> - Reading Google Analytics, measuring what works</li>
                    </ul>
                    <p>
                        Most quality programs today also integrate AI tools - ChatGPT for content, Canva AI for creatives, AI-based ad targeting - which is a big advantage.
                    </p>
                    <h3 className="font-semibold text-black">Who Can Do This Course</h3>
                    <p>
                        Any stream. Seriously. Digital marketing doesn't require a technical background. Some of the best digital marketers come from humanities or commerce backgrounds because they're strong with language and consumer psychology.
                    </p>

                    <h3 className="font-semibold text-black">Salary - What to Realistically Expect</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50%]">Experience Level</TableHead>
                                <TableHead>Salary Range</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {digitalMarketingSalary.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{item.experience}</TableCell>
                                    <TableCell>{item.salary}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h3 className="font-semibold text-black">Three Career Paths - Pick Your Style</h3>
                    <ul className="list-decimal pl-5 space-y-2">
                        <li><strong>Path 1 - Get a job:</strong> Work as a Digital Marketing Executive, SEO Analyst, or Social Media Manager in a company or agency.</li>
                        <li><strong>Path 2 - Freelance:</strong> Work independently with clients, manage their campaigns and social accounts. You set your rates and your schedule.</li>
                        <li><strong>Path 3 - Start something:</strong> Use your own marketing skills to build and grow a business, brand, or side project.</li>
                    </ul>

                    <h3 className="font-semibold text-black">Is This Course Right for You?</h3>
                    <p>
                        If you're a creative person, enjoy writing, like working with people, or want the freedom to eventually work for yourself - digital marketing is worth serious consideration. It's also one of the fastest fields in terms of getting your first client or job after completing the course.
                    </p>

                    <BlogTestimonial _this={_this} />

                    <h2 id="generative-ai-gen-ai-the-fastest-growing-skill-today" className="text-[18px] font-[700] mt-6">
                        4. Generative AI (Gen AI) - The Newest Skill With the Least Competition
                    </h2>
                    <p>
                        This one deserves special attention - because the timing matters.
                    </p>
                    <p>
                        Generative AI refers to AI systems that can create things: write content, generate images, write code, summarize documents, answer complex questions. Tools like ChatGPT, Midjourney, Gemini, and Claude are all examples of generative AI.
                    </p>
                    <p>
                        Most people have used these tools. Very few people have learned to use them professionally - meaning systematically, reliably, at a quality that businesses are willing to pay for. That gap is the opportunity.
                    </p>
                    <h3 className="font-semibold text-black">What You Actually Learn</h3>
                    <ul className="list-disc pl-5">
                        <li><strong>Prompt engineering:</strong> Writing prompts that get you consistently useful outputs</li>
                        <li><strong>AI tools for content:</strong> Using ChatGPT, Gemini, and others for writing, editing, research</li>
                        <li><strong>AI for images and visuals:</strong> Midjourney, DALL-E, Canva AI</li>
                        <li><strong>AI for productivity:</strong> Automating repetitive tasks, summarizing reports, drafting emails faster</li>
                        <li><strong>AI + your other skill:</strong> Combining Gen AI with digital marketing, data analytics, or any other domain you're learning</li>
                    </ul>

                    <h3 className="font-semibold text-black">Gen AI Is a Multiplier, Not a Replacement</h3>
                    <p>
                        Gen AI Course doesn't replace other skills - it amplifies them.
                    </p>
                    <p>
                        A digital marketer who uses AI can produce better content 3x faster. A data analyst who uses AI can write SQL queries and automate reports more efficiently. A fresher who walks into an interview demonstrating solid AI tool usage immediately stands out from 90% of their competition.
                    </p>
                    <p>
                        Learning Gen AI alongside any other course on this list is probably the smartest career move you can make right now.
                    </p>
                    <h3 className="font-semibold text-black">Who Can Do This Course</h3>
                    <p>
                        Everyone. No exceptions. Arts, commerce, science - doesn't matter. If you can use a smartphone, you can start learning Gen AI tools.
                    </p>

                    <h3 className="font-semibold text-black">Salary and Career Paths</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50%]">Career Combination</TableHead>
                                <TableHead>Expected Salary / Scope</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {genAiSalary.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{item.experience}</TableCell>
                                    <TableCell>{item.salary}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h3 className="font-semibold text-black">Is This Course Right for You?</h3>
                    <p>
                        If you want to stay ahead of the curve, if you're curious about technology without being deeply technical, or if you want to add a powerful layer to any other skill - Gen AI is the answer. There's almost no field it doesn't touch.
                    </p>

                    <h2 id="quick-comparison-of-all-4-technical-courses-after-12th" className="text-[18px] font-[700] mt-6">
                        Quick Comparison of All 4 Technical Courses After 12th
                    </h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Course</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Fresher Salary</TableHead>
                                <TableHead>Best For</TableHead>
                                <TableHead>Stream</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-bold text-black">{item.course}</TableCell>
                                    <TableCell>{item.duration}</TableCell>
                                    <TableCell className="text-[#0057E2] font-[500]">{item.salary}</TableCell>
                                    <TableCell>{item.bestFor}</TableCell>
                                    <TableCell>{item.stream}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h2 id="which-course-is-right-for-you-ask-yourself-these-3-questions" className="text-[18px] font-[700] mt-6">
                        Which Course Is Right for You? Answer These 3 Questions
                    </h2>
                    <p className="font-semibold text-black mb-1">Question 1: Do you prefer working with numbers or words?</p>
                    <p className="pl-4">
                        If numbers, data, and logic interest you - Data Analytics or SAP will feel more natural. If you prefer writing, communication, and creativity - Digital Marketing is probably your path.
                    </p>
                    <p className="font-semibold text-black mb-1 mt-2">Question 2: Do you want a corporate job, or do you want to work independently?</p>
                    <p className="pl-4">
                        If a structured corporate career sounds good - SAP or Data Analytics gives you that stability. If freelancing, side income, or eventually running something appeals to you - Digital Marketing or Gen AI.
                    </p>
                    <p className="font-semibold text-black mb-1 mt-2">Question 3: Do you want to get into a field where there's still less competition?</p>
                    <p className="pl-4">
                        Gen AI, without question. It's new, demand is growing fast, and most people haven't learned it seriously yet. Early movers in this field are already pulling ahead.
                    </p>
                    <p className="mt-4">
                        If you're still unsure, the smartest combo right now is probably: one primary course (Data Analytics, SAP, or Digital Marketing) + Gen AI alongside it.
                    </p>

                    <NewsCard _this={_this} />

                    <h2 id="frequently-asked-questions" className="text-[18px] font-[700] mt-6">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-black">Q.1 Which technical course is best after 12th for getting a job quickly?</p>
                            <p>Among all technical courses after 12th, Data Analytics and Digital Marketing tend to have the shortest path to employment - most students land their first role within 3-6 months of completing a quality program with placement support. SAP also moves quickly, especially for commerce students targeting corporate roles.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black">Q.2 Can arts or commerce students do these technical courses?</p>
                            <p>Yes - all four courses on this list are open to any stream. SAP is actually particularly popular among commerce students because of its finance and business focus. Digital Marketing and Gen AI have no technical prerequisites at all.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black">Q.3 Is it possible to do these courses while still in college?</p>
                            <p>Absolutely. Most reputed institutes offer flexible batch timings - both morning and evening - specifically to accommodate students who are still pursuing their graduation degree. You can complete the course and start building work experience while still in college.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black">Q.4 What is the difference between Data Analytics and Data Science?</p>
                            <p>Data Analytics focuses on interpreting existing data to support business decisions - it's more accessible as an entry point. Data Science goes deeper into machine learning, statistical modeling, and predictive algorithms. For someone starting right after 12th, Data Analytics is usually the better first step.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black">Q.5 Is Generative AI a standalone career or should it be combined with something else?</p>
                            <p>Right now, Gen AI works best as a power-up for another skill. A digital marketer with strong AI fluency, or a data analyst who uses AI tools efficiently, has a significantly stronger profile than someone with just one of those skills. That said, dedicated roles like Prompt Engineer and AI Content Strategist are emerging as standalone positions.</p>
                        </div>
                    </div>

                    <CompanyLogo _this={_this} />

                    <CTAButton name="Enquire Now"
                        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                        _this={_this}
                    />

                    <h2 id="final-thoughts" className="text-[18px] font-[700] mt-6">
                        Final Thoughts
                    </h2>
                    <p>
                        There's no universally "best" course. There's only the course that fits your background, interests, and goals.
                    </p>
                    <p>
                        What is true across the board is that skill-based, job-oriented technical courses after 12th are opening real career doors for students who don't want to wait four years before starting to earn. The four courses covered here - Data Analytics, SAP, Digital Marketing, and Generative AI - are all in active demand, learnable within months, and accessible from any academic background.
                    </p>
                    <p>
                        The key is picking one, going deep, and getting practical experience before you're done learning.
                    </p>
                    <p>
                        If you found this useful, share it with someone still figuring out their direction after 12th. It might save them months of confusion.
                    </p>
                </div>
            </div>

            <div className="md:sticky md:top-14 md:h-screen bg-white hidden lg:block">
                <div className="mt-8">
                    <div className="w-full">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <ShareBlog />
                </div>
            </div>
        </div>
    );
}
