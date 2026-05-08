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


export default function HrBlog({
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
                        src="/assets/images/blog/Executive_HR_Programs_in_Mumbai.png"
                        alt="Blog Image"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By - <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">Eme Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />08 May 2025</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 5586 views</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="executive-hr-programs-in-mumbai-advancing-your-career" className="text-[18px] font-[700] leading-[24px]">Executive HR Programs in Mumbai: Advancing Your Career</h1>
                    <p>
                        HR management has become an essential function for many businesses across all industries. It
                        not just hiring and managing employee, but it is about calculated decision making, taking huge
                        organizational responsibility, development decisions while creating a culture that drives
                        business success. All of these means, HR professionals need to possess advanced skills,
                        knowledge, along with good leadership capabilities to meet the evolving demands of the
                        corporate world.
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <p>
                        For people who are aiming for this course to elevate their career prospects, the executive <Link className="text-[#0057E2] underline" href="https://mumbai.emeacademy.co.in/human-resource-course-in-mumbai" target="_blank">HR
                            courses in Mumbai</Link> offers a perfect opportunity to gain human resource specialized knowledge,
                        build leadership capabilities, and open doors to new career advancements.
                    </p>
                </div>
                {/* News Channel Logo */}

                <NewsLogo />
                <CTAButton name="Enquire Now"
                    styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                    _this={_this}
                />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="why-choose-the-hr-programs" className="text-[18px] font-[700] leading-[24px]">Why Choose the HR Programs?</h2>
                    <p>
                        Indeed, managing an entire organization is not a matter of joke, no matter how small it is! There
                        are so many complex and diverse works and even situations arrive, tackling them progressively,
                        needs proper skill, and a skilled HR can handle this. In the HR training programs, people get to
                        learn how to handle challenges such as employee relations, talent management, and
                        organizational development with ease. The executive HR programs are specially designed to
                        equip working professionals with the expertise needed to step into senior HR roles and make
                        impactful decisions within their organizations.
                    </p>

                    <div>
                        <Cards cards={placementCards} id={1} _this={_this} />
                    </div>

                    <p>
                        In order to guarantee that applicants can instantly use what they have learned in their
                        professional surroundings, these perfectly organized programs emphasize collaborating
                        workshops, real-world case studies, and hands-on learning activities.
                    </p>
                </div>



                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="what-you-could-learn-in-the-hr-course" className="text-[18px] font-[700] leading-[24px]"> What you could learn in the HR course?</h2>
                    <p>
                        In a human resource course, you will learn –
                    </p>
                </div>


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="seamless-recruitment-and-talent-acquisition" className="text-[18px] font-[700] leading-[24px]">1. Seamless Recruitment and Talent Acquisition:</h3>
                    <p>
                        In a professional HR course, you will get to understand the strategies and best practices for
                        sourcing, interviewing, and hiring the right candidates. You will learn how the job description is
                        done, how to take a good interview, learn to select the appropriate candidate for the job role.
                    </p>
                </div>

                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="understand-employee-relations-while-conflict-resolution" className="text-[18px] font-[700] leading-[24px]">2. Understand Employee Relations While Conflict Resolution –</h3>
                    <p>
                        A professional HR know how to create good relations with the employees. So, in the course,
                        you will get to learn how to manage employee relations, resolve any conflicts, and create a
                        positive work environment. This also includes learning about workplace laws, employee rights,
                        and effective communication techniques.
                    </p>
                </div>


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="handle-the-performance-management" className="text-[18px] font-[700] leading-[24px]">3. Handle the Performance Management –</h3>
                    <p>
                        This course helps you gain knowledge about how to evaluate, track, and enhance worker
                        performance. Not only that, these cover establishing objectives, and giving criticism, while
                        carrying out performance evaluations.
                    </p>
                </div>


                {/* <div>
                    <Cards cards={placementCards} id={2} _this={_this}/>
                </div> */}

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="get-training-and-development" className="text-[18px] font-[700] leading-[24px]">4. Get training and Development –</h3>
                    <p>
                        After learning the HR course, you will be able to plan, carry out, and assess training initiatives to
                        support staff development in their positions. You will get opportunities for skill development,
                        career promotion, and leadership training.
                    </p>
                </div>

                {/* News Card  */}

                <NewsCard _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="compensation-and-benefits" className="text-[18px] font-[700] leading-[24px]">5. Compensation and Benefits –</h3>
                    <p>
                        With this course, you will get to learn about payroll administration, benefits plans, compensation
                        structures, and how to guarantee that workers receive fair remuneration while adhering to
                        financial restrictions.
                    </p>
                </div>


                <CompanyLogo _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h3 id="final-words" className="text-[18px] font-[700] leading-[24px]">Final Words</h3>
                    <p>

                        For professionals seeking to accelerate their careers in HR, enrolling in an executive <Link className="text-[#0057E2] underline" href="https://mumbai.emeacademy.co.in/human-resource-course-in-mumbai" target="_blank">HR course in Mumbai</Link> can be a game-changer. With its focus on leadership development, industry-
                        relevant knowledge, and flexible learning options, these programs offer the tools and resources
                        needed to thrive in today&#39;s competitive job market. Whether you&#39;re looking to climb the
                        corporate ladder or gain specialized knowledge, an executive HR program in Mumbai is a step in
                        the right direction to advancing your career.
                    </p>
                </div>
            </div>

            {/* Right Section  */}

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
