'use client';
import { Calendar, Clock2, Eye } from "lucide-react";
import LeftSection from "./left_section";
import Image from "next/image";
import Cards from "./cards";
import NewsLogo from "../Components/NewsLogo";
import BlogTestimonial from "../Components/BlogTestimonial";
import NewsCard from "../Components/NewsCard";
import CompanyLogo from "../Components/CompanyLogo";
import BlogAdmissionForm from "../Components/BlogAdmissionForm";
import ShareBlog from "../Components/ShareBlog";

import Link from "next/link";
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
export default function PowerBiBlog({
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


            <div className="flex flex-col justify-center gap-4 md:mt-8 md:max-w-[680px]">
                <div className="flex flex-col gap-2">
                    <Image
                        className="w-full rounded-md"
                        width={500}
                        height={500}
                        src="/assets/images/blog/Power_BI_Course _Blog_Features_Image.jpg"
                        alt="Blog Image"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By - <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">Eme Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />08 May 2025</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 8586 views</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="top-7-reasons-to-enroll-in-a-power-bi-course-in-2025" className="text-[18px] font-[700] leading-[24px]">Top 7 Reasons to Enroll in a Power BI Course in 2025</h1>
                    <p>
                        As businesses are growing progressively, they are becoming more and more dependent on
                        data to drive decision-making, and the demand for professionals with robust data analysis
                        skills is on the rise. Power BI, a leading business analytics tool by Microsoft allows users to
                        connect, visualize and share data insights with simple steps. Enrolling in a <Link className="text-[#0057E2] underline" href="https://emeacademy.co.in/power-bi-course-in-kolkata" target="_blank">Power BI course in Kolkata</Link> could be the ideal choice for 2025 if you want to improve your professional
                        prospects and hone your analytical skills.
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this}/>
                    </div>
                    <p>
                        Here are the top 7 reasons why you should consider signing up for this course and obtaining
                        a good institute this year.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="career" className="text-[18px] font-[700] leading-[24px]">1. Give a Boost to your Career:</h2>
                    <p>
                        Power BI is one of the most popular skills in the business world in the present situation. By
                        enrolling in a Power BI course, you will obtain the skills to create powerful data
                        visualizations and dashboards. These skills are in high demand in various sectors.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="effective-curriculum-for-beginners-and-experts" className="text-[18px] font-[700] leading-[24px]">2. Effective Curriculum for Beginners and Experts:</h2>
                    <p>
                        Whether you&#39;re just starting your data journey or you&#39;re an experienced professional a
                        professional institute offers customized training for all skill levels. This course covers
                        everything from the Power BI basics to advanced data modelling. This makes sure that you
                        increase a thorough understanding of all the necessary tools to excel.
                    </p>
                </div>

                {/* News Channel Logo */}

                <NewsLogo />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="hands-on-training-with-real-life-projects" className="text-[18px] font-[700] leading-[24px]">3. Hands-on Training with Real-Life Projects:</h2>
                    <p>
                        One of the most important advantages of joining in Power BI advanced course is the
                        opportunity to work on real-life projects. Here at EME Academy, you will get to learn from
                        practical experience by studying building dashboards, and actual business data, and solving
                        real-world problems.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="get-to-learn-from-industry-experts" className="text-[18px] font-[700] leading-[24px]">4. Get to Learn from Industry Experts:</h2>
                    <p>
                        Learning in a professional institute means you are learning from experienced professionals
                        who have worked in diverse industries and hold detailed knowledge of Power BI and data
                        analytics. Learning from these institutes you will benefit from their real-world insights and
                        expertise, ensuring you receive the most up-to-date and relevant training.
                    </p>
                </div>



                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="various-job-opportunities" className="text-[18px] font-[700] leading-[24px]">5. Various Job Opportunities:</h2>
                    <p>
                        Power BI skills are in high demand across various industries. By completing a Power BI
                        advanced course, you meaningfully improve your chances of getting a high-paying job as a
                        business analyst, data analyst, or business intelligence professional.
                    </p>
                </div>


                <div>
                    <Cards cards={placementCards} id={2} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="flexible-learning-options" className="text-[18px] font-[700] leading-[24px]">6. Flexible Learning Options:</h2>
                    <p>
                        Learning in EME Academy offers flexible learning options that help you to take courses
                        online or in person. Learning at your own speed permits you to obtain new abilities while
                        juggling your personal and professional obligations. You are free to select the study method
                        that works best for your schedule, whether that means studying in a classroom or at home.
                    </p>
                </div>

                {/* News Card  */}

                <NewsCard _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="master-data-visualization" className="text-[18px] font-[700] leading-[24px]">7. Master Data Visualization:</h2>
                    <p>
                        To show data in an understandable and interpretable manner, Power BI users must be able
                        to generate beautiful visuals. You may quickly gain insights by learning how to create
                        interactive dashboards and reports by enrolling in a Power BI course. This is an essential
                        ability that can improve your position in your company.
                    </p>
                </div>


                <CompanyLogo _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="final-thoughts" className="text-[18px] font-[700] leading-[24px]">Final Thoughts</h3>
                    <p>
                        In 2025, as businesses continue to embrace digital transformation, the need for
                        professionals skilled in data analysis tools like Power BI will only increase. Enrolling in a
                        Power BI course in Kolkata at <Link className="text-[#0057E2] underline" href="https://www.google.com/search?num=10&sca_esv=3ece70b1d1e0fb0d&rlz=1C1RXQR_enIN1008IN1008&sxsrf=AHTn8zr-w4E45PEXf0GdlUYBrVaJwREmOg:1743505216187&kgmid=/g/11y6_bpjy4&q=EME+Academy+-+Professional+SAP+%7C+Digital+Marketing+%7C+Web+Development+%7C+Data+Analytics+%7C+Graphic+Designing+Institute&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=e4811c546e9a29cf" target="_blank">EME Academy</Link> will not only equip you with the technical skills
                        required to work with data but also position you as a valuable asset in your organization or
                        job market.
                    </p>
                </div>

                <CTAButton name="Enquire Now"
                    styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                    _this={_this}
                />

            </div>

            {/* Right Section  */}

            <div className="md:sticky md:top-14 md:h-screen bg-white hidden lg:block">
                <div className="mt-8">
                    <div className="w-full">
                        <BlogAdmissionForm {..._this}/>
                    </div>
                    <ShareBlog />
                </div>
            </div>
        </div>
    );
}
