'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock2, Eye } from "lucide-react";
import LeftSection from "./left_section";
import Image from "next/image";
import Cards from "./cards";
import BlogTestimonial from "../Components/BlogTestimonial";
import NewsLogo from "../Components/NewsLogo";
import NewsCard from "../Components/NewsCard";
import CompanyLogo from "../Components/CompanyLogo";
import BlogAdmissionForm from "../Components/BlogAdmissionForm";
import ShareBlog from "../Components/ShareBlog";

import { useState } from "react";
import CTAButton from "@/components/common/CtaButton";

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
const courses = [
    { type: "Basic Digital Marketing Course", duration: "4 months", fees: "35,000" },
    { type: "Advanced Digital Marketing", duration: "4 months", fees: "35,000" },
    { type: "Diploma in Advanced Marketing with AI", duration: "6 months", fees: "45,000" },
];

export default function DigitalMarketing({
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName}) {
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


            <div className="w-full flex flex-col justify-center gap-4 md:mt-8 md:max-w-[680px]">
                <div className="w-full flex flex-col gap-2">
                    <Image
                        className="w-full  rounded-md"
                        width={500}
                        height={500}
                        src="/assets/images/blog/digital_marketing_hero.jpg"
                        alt="Blog Image"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By - <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">Eme Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />08 Mar 2025</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 586 views</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    {/* <h1 className="text-[18px] font-[700] leading-[24px]">Best Digital Marketing Course in Mumbai</h1> */}
                    <h1 id="best-digital-marketing-course-in-kolkata" className="text-[18px] font-[700] leading-[24px]">
                        The Ultimate Guide to Finding the Best Digital Marketing Course in Mumbai : Fees, Career Scope & Placement Opportunities
                    </h1>
                    <p>
                        It is critical to master the art of online marketing in today’s day and age. Imperative to career growth, it is one of the most highly demanded skills. Businesses are increasingly shifting online and trying to join the bandwagon of uber cool new age products.
                    </p>
                </div>
                <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                    <BlogAdmissionForm {..._this} />
                </div>
                <div className="w-full flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="introduction" className="text-[18px] font-[700] leading-[24px]">
                        Introduction
                    </h1>
                    <p>
                        The world has gone completely digital in a worldwide, and so has the marketing behind any industry. Every business, whether it is a startup looking to build brand awareness or a multinational corporation striving for customer engagement, they all need an online presence to survive in today’s competitive landscape. This has made digital marketing one of the most sought after career options, offering lucrative job opportunities, freelance potential, and even the ability to start your own agency.
                    </p>

                    <p>
                        If you&apos;re looking for a digital marketing course in Mumbai, you’re making a wise career decision. With businesses shifting to online platforms, the demand for skilled digital marketers is at an all time high. From SEO and social media marketing to paid advertising and analytics, companies need professionals who can drive results.
                    </p>
                    <p>
                        Mumbai, a city known for its growing digital ecosystem, offers numerous opportunities for digital marketing enthusiasts. Whether you’re a student, working professional, or entrepreneur, learning digital marketing can help you land a high-paying job, grow a business, or even work as a freelancer.

                    </p>
                    <p>
                        If you’re wondering which is the best digital marketing institute in Mumbai, look no further than EME Academy. Offering hands-on training, expert guidance, and placement assistance, EME Academy is your gateway to a successful digital marketing career.

                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this}/>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    {/* <h1 className="text-[18px] font-[700] leading-[24px]">In this guide, we will cover:</h1> */}
                    <h1 id="in-this-guide-we-will-cover" className="text-[18px] font-[700] leading-[24px]">
                        In this guide, we will cover:
                    </h1>
                    <ul>
                        <li>✅ Why digital marketing is the future
                        </li>
                        <li>✅ Success stories of EME Academy students</li>
                        <li>
                            ✅ What makes EME Academy the top choice for digital marketing training

                        </li>
                        <li>
                            ✅ Course details, curriculum, and training options

                        </li>
                        <li>
                            ✅ Digital marketing course fees in Mumbai

                        </li>
                        <li>
                            ✅ Career opportunities and placement assistance

                        </li>
                        <li>
                            ✅ The benefits of learning digital marketing in Mumbai

                        </li>
                        <li></li>
                    </ul>
                </div>


                {/* News Channel Logo */}

                <NewsLogo />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    {/* <h1 className="text-[18px] font-[700] leading-[24px]">Why is Digital Marketing the Future?</h1> */}
                    <h1 id="why-is-digital-marketing-the-future" className="text-[18px] font-[700] leading-[24px]">
                        Why is Digital Marketing the Future?
                    </h1>
                    <p>
                        Before diving into the course details, let’s explore why digital marketing is one of the most lucrative career paths today.
                    </p>
                    <h3 className="text-[18px] font-[700] leading-[24px]">High Demand for Digital Marketers</h3>
                    <p>
                        The digital marketing industry is experiencing exponential growth. Businesses of all sizes—startups, multinational corporations, and local brands—need digital marketing professionals to enhance their online presence.

                    </p>
                    <p>
                        According to a LinkedIn report, digital marketing is among the top 10 most in-demand skills globally, with thousands of job openings in India alone.

                    </p>
                    <h3 className="text-[18px] font-[700] leading-[24px]">Multiple Career Opportunities</h3>
                    <p>
                        A digital marketing training institute in Mumbai with placement opens doors to diverse career paths, such as:
                    </p>

                    <ul>
                        <li>✔ SEO Specialist
                        </li>
                        <li>
                            ✔ Social Media Manager

                        </li>
                        <li>
                            ✔ Digital Marketing Manager
                        </li>
                        <li>
                            ✔ Google Ads Expert

                        </li>
                        <li>
                            ✔ Content Marketer

                        </li>
                        <li>
                            ✔ Email Marketing Specialist

                        </li>
                        <li>
                            ✔ E-commerce Marketing Expert

                        </li>
                        <li>
                            ✔ Web Analyst
                        </li>
                    </ul>
                    <p>
                        Each of these roles offers competitive salaries, career growth, and job security.
                    </p>

                </div>


                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />

                <div className="flex flex-col text-[14px] font-[300] leading-[26px]">
                    <h3 className="text-[16px] font-[400]">Freelance & Remote Work Options</h3>
                    <p>
                        Unlike traditional jobs, digital marketing offers freelance opportunities and work-from-home flexibility.
                        Many professionals work remotely with international clients, earning a great income without location constraints.
                    </p>
                    <h3 className="text-[16px] font-[400]">Opportunity to Start Your Own Business</h3>
                    <p>
                        With expertise in SEO, social media, and paid advertising, you can launch your own digital marketing agency or e-commerce business, offering services to clients worldwide.
                    </p>
                    <p>
                        With these compelling reasons, investing in a digital marketing certificate course in Mumbai can be the best career decision you make!
                    </p>
                </div>




                <div>
                    <Cards cards={placementCards} id={2} _this={_this}/>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="why-choose-eme-academy-for-a-digital-marketing-course-in-kolkata" className="text-[18px] font-[700] leading-[24px]">
                        Why Choose EME Academy for a Digital Marketing Course in Mumbai?
                    </h1>
                    <p>
                        If you’re searching for the best institute for digital marketing in Mumbai, EME Academy stands out due to its comprehensive training, expert faculty, and strong placement support.
                    </p>
                    <h3 className="text-[18px] font-[700] leading-[24px]">What Makes EME Academy the Best?</h3>
                    <ul>
                        <li>Industry-Certified Trainers – Learn from professionals with hands-on experience.</li>
                        <li>100% Placement Assistance – We help you land jobs in top companies.</li>
                        <li>Hands-On Project Training – Work on live digital marketing campaigns.</li>
                        <li>Updated Curriculum – Covers the latest industry tools and trends.</li>
                        <li>Flexible Learning Modes – Choose from online or offline courses.</li>
                        <li>Affordable Fees & EMI Options – Budget-friendly pricing with installment plans.</li>
                    </ul>
                    <p>
                        If you’re looking for the best digital marketing course in Mumbai with placement, EME Academy provides career-oriented, practical training to help you land your dream job.
                    </p>
                </div>

                {/* News Card  */}

                <NewsCard _this={_this} />


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    {/* <h1 className="text-[18px] font-[700] leading-[24px]">Digital Marketing Course Details at EME Academy</h1> */}
                    <h1 id="digital-marketing-course-details-at-eme-academy" className="text-[18px] font-[700] leading-[24px]">
                        Digital Marketing Course Details at EME Academy
                    </h1>
                    <p>
                        EME Academy offers a structured digital marketing training in Mumbai, covering all aspects of online marketing.
                    </p>
                    <h3 className="text-[18px] font-[700] leading-[24px]">Course Modules & Topics Covered</h3>
                    <ul>
                        <li>SEO (Search Engine Optimization) – Learn how to rank websites on Google.</li>
                        <li>Google Ads & PPC (Pay-Per-Click Advertising) – Master paid ads for business growth.</li>
                        <li>Social Media Marketing (SMM) – Build a strong presence on Facebook, Instagram & LinkedIn.</li>
                        <li>Content Marketing & Blogging – Create engaging blogs, articles & video scripts.</li>
                        <li>Email Marketing & Automation – Learn how to boost conversions with targeted emails.</li>
                        <li>Affiliate Marketing & Drop shipping – Monetize online platforms for passive income.</li>
                        <li>E-commerce Marketing – Grow and scale online stores with expert strategies.</li>
                        <li>Web Analytics & Reporting – Measure campaign performance and optimize strategies.</li>
                    </ul>

                    <h3 className="text-[18px] font-[700] leading-[24px]">Additional Training</h3>
                    <ul>
                        <li>YouTube Marketing – Monetize your channel with effective content strategies.</li>
                        <li>Influencer Marketing – Learn how to collaborate with top influencers.</li>
                        <li>App Store Optimization (ASO) – Boost visibility for mobile applications.</li>
                        <li>AI in Digital Marketing – Use artificial intelligence for automation & personalization.</li>
                    </ul>
                    <p>
                        This advanced digital marketing certificate course in Mumbai provides real-world exposure through live projects and industry case studies.
                    </p>
                </div>

                {/* Company Logo  */}
                <CompanyLogo _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">

                    <h1 id="digital-marketing-course-fees-in-kolkata-eme-academy" className="text-[18px] font-[700] leading-[24px]">
                        Digital Marketing Course Fees in Mumbai (EME Academy)
                    </h1>
                    <p>
                        EME Academy offers some of the most affordable digital marketing course fees in Mumbai, making high-quality training accessible to students, working professionals, and business owners.
                    </p>
                    <h3 className="text-[18px] font-[700] leading-[24px]">Course Fees Structure :</h3>
                    <p>
                        EME Academy’s digital marketing course in Mumbai and course fees are structured to provide maximum ROI while keeping training affordable and job-oriented.
                    </p>


                    <div className="sm:p-4">
                        <div className="border rounded-[16px] overflow-hidden">
                            <Table>
                                <TableHeader className="bg-[#00A2E7] [&_tr]:border-b-0">
                                    <TableRow className="">
                                        <TableHead className="text-white border-r">Course Type</TableHead>
                                        <TableHead className="text-white border-r">Duration</TableHead>
                                        <TableHead className="text-white">Fees</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses?.map((course, index) => (
                                        <TableRow key={index} className="">
                                            <TableCell className="border-r-2">{course.type}</TableCell>
                                            <TableCell className="border-r-2">{course.duration}</TableCell>
                                            <TableCell>{course.fees}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Career Opportunities & Salary Trends After Digital Marketing Training</h1>
                    <p>High-Paying Job Roles</p>
                    <p>After completing your digital marketing training institute in kolkata with placement, you can apply for high-paying jobs, such as:</p>
                    <ul>
                        <li>SEO Specialist – ₹3-6 LPA</li>
                        <li>Google Ads Expert – ₹4-8 LPA</li>
                        <li>Social Media Manager – ₹5-10 LPA</li>
                        <li>Content Marketer – ₹3-6 LPA</li>
                        <li>E-commerce Marketing Manager – ₹6-12 LPA</li>
                    </ul>
                    <p>With experience, digital marketers can earn ₹15 LPA - ₹25 LPA or even more!</p>
                </div>



                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Online vs. Offline Digital Marketing Course in Mumbai</h1>
                    <p>EME Academy provides both online and offline digital marketing courses, giving students the flexibility to learn in their preferred format.</p>
                    <h2>Online Digital Marketing Course in Mumbai</h2>
                    <ul>
                        <li>Learn from home, access recorded sessions, and get digital study materials.</li>
                        <li>Best for working professionals, students, and freelancers.</li>
                    </ul>
                    <h2>Offline Digital Marketing Course in Mumbai</h2>
                    <ul>
                        <li>Interactive classroom sessions with face-to-face mentorship.</li>
                        <li>Hands-on learning through live projects and case studies.</li>
                    </ul>
                    <p>Both courses provide industry-recognized certifications and placement support.</p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="success-stories-from-eme-academy" className="text-[18px] font-[700] leading-[24px]">
                        Success Stories from EME Academy
                    </h1>
                    <h2>Amit Roy – From Fresher to Digital Marketing Manager</h2>
                    <p>Amit enrolled in our digital marketing training in Mumbai with zero experience. After completing the course, he landed a ₹6 LPA job as a Social Media Manager.</p>
                    <h2>Priya Sharma – Started Her Own Freelance Business</h2>
                    <p>Priya took our online digital marketing course in Mumbai and now earns ₹1.2 lakh per month as a freelance SEO consultant.</p>
                    <h2>Rahul Das – Career Switch from Sales to Digital Marketing</h2>
                    <p>Rahul worked in sales but wanted a career change. After our advanced digital marketing certificate course in Mumbai, he secured a ₹7 LPA role in Google Ads management.</p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="conclusion" className="text-[18px] font-[700] leading-[24px]">
                        Conclusion
                    </h1>
                    <p>
                        The demand for digital marketing professionals is at an all-time high, making it an ideal career choice for students, job seekers, and entrepreneurs. With businesses investing heavily in online marketing, skilled digital marketers enjoy high salaries, career growth, and flexible work opportunities. Whether you want to secure a corporate job, build your own agency, or work as a freelancer, a strong foundation in digital marketing is key to success.

                    </p>
                    <p>
                        EME Academy definitely stands out as the best institute for digital marketing in Mumbai, offering expert-led training, real-world projects, and 100% placement support. With affordable course fees, flexible learning options, and an industry-focused curriculum, EME Academy ensures you gain the practical skills and confidence to excel in the digital world.
                    </p>
                    <p>
                        If you&apos;re ready to take control of your career and master the art of digital marketing, now is the perfect time to enroll. Don’t miss the opportunity to learn from industry experts and gain hands-on experience that will set you apart from the competition.
                    </p>
                    <p>
                        Want to Build a High-Income Career in Digital Marketing?
                        Join EME Academy today and become a Certified Digital Marketing Expert!
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="frequently-asked-questions-faqs" className="text-[18px] font-[700] leading-[24px]">
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <h2>Is digital marketing a good career option?</h2>
                    <p>Yes! Digital marketing offers high salaries, career growth, and work flexibility.</p>
                    <h2>Can I do a digital marketing course after 12th?</h2>
                    <p>Yes! Students, graduates, and working professionals can enroll.</p>
                    <h2>Does EME Academy offer placement support?</h2>
                    <p>Yes! We provide 100% job placement assistance in top companies.</p>
                    <p>Ready to start your digital marketing journey? <a>Contact EME Academy now!</a></p>
                </div>

                <CTAButton name="Enquire Now"
                    styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                    _this={_this}
                />
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
