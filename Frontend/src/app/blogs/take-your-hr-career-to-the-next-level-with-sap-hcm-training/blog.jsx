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
import { useState } from "react";
import CTAButton from "@/components/common/CtaButton";

const addressUrl = "https://maps.app.goo.gl/29GowbGvjuF3pLYq5";

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

export default function SAP_HCM_Blog({
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
                        src="/assets/images/blog/hcm_course_at_eme_academy.jpg"
                        alt="Blog Image"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By - <span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2">Eme Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />10 May 2025</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 6586 views</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="take-your-hr-career-to-the-next-level-with-sap-hcm-training" className="text-[18px] font-bold leading-6">Take Your HR Career to the Next Level with SAP HCM Training!</h1>
                    <p>
                        As the business world evolves rapidly, HR professionals are increasingly expected to have more than just basic human resources knowledge. As technology is playing an essential role in modern organizations, the demand for HR professionals who are equipped with specialized technical skills has also increased. One such skill that can help me become a game changer in the human resource industry is proficiency in SAP human capital management (HCM).
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <p>
                        Before you look for the <a href="https://emeacademy.co.in/course/sap-hcm" target="_blank" rel="noopener noreferrer" className="text-[#0057E2] underline">SAP HMC training courses in Kolkata</a>, you should know a little more about this course.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="career" className="text-[18px] font-[700] leading-[24px]">What Is the SAP HCM Course?</h2>
                    <p>
                        SAP HCM is a complete suite of software solutions, it is typically made to handle all an organization&#39;s HR
                        requirements, including other policies such as payroll, benefits, hiring, performance management,
                        personnel records, and learning and development. Additionally, providing strong analytics and reporting
                        capabilities aids in streamlining HR procedures, making them more effective and error-free.
                    </p>
                    {/* News Channel Logo */}

                    <NewsLogo />
                    <p>
                        For HR professionals, knowing the significance of SAP HCM can make a significant difference in
                        managing day-to-day operations and strategic planning. Given the scope of SAP&#39;s impact on global
                        business processes, organizations around the world are progressively relying on SAP to manage their HR
                        functions. This has led to an increasing demand for professionals who are skilled in SAP HCM.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h2 id="why-consider-the-sap-hcm-training-course" className="text-[18px] font-[700] leading-[24px]">Why Consider the SAP HCM Training Course?</h2>
                    <h3 className="text-[16px] font-[700] leading-[24px]">Enhance Your Skills</h3>
                    <p>
                        After taking the SAP’s advanced HCM training course, you will gain practical knowledge and experience
                        in HCM solutions. Payrolls, organizational management, talent management, recruitment, and learning
                        management are all covered in these courses. Gaining these abilities is essential and will enable you to
                        perform HR tasks more precisely and effectively.
                    </p>

                    {/* Testimonials  */}
                    <BlogTestimonial _this={_this} />

                    <h3 className="text-[16px] font-[700] leading-[24px]">Various Career Opportunities</h3>
                    <p>
                        The HCM training course is famous and is known for the great demand for SAP specialists. Many big and
                        well-reputed organizations, particularly big ones, use SAP HCM to handle their HR requirements, and
                        they positively look for competent people who are familiar with these systems. You will position yourself
                        as a highly sought-after HR specialist and help yourself to increase your chances of securing lucrative
                        employment prospects in top businesses by taking SAP HCM training courses in Kolkata.
                    </p>
                    <div>
                        <Cards cards={placementCards} id={2} _this={_this} />
                    </div>

                    <h3 className="text-[16px] font-[700] leading-[24px]">Global Recognition</h3>
                    <p>
                        Thousands of industries worldwide utilize SAP, which is regarded as a top enterprise resource planning
                        (ERP) solution. Since many industries use SAP to manage their HR actions, becoming proficient in SAP
                        HCM will enable you to collaborate with companies all over the world. Career advancement and
                        international employment enhancement are made possible by this widespread awareness.
                    </p>


                    {/* News Card  */}

                    <NewsCard _this={_this} />

                    <h3 className="text-[16px] font-[700] leading-[24px]">Stay Updated on The Industry Trend</h3>
                    <p>
                        Being progressive of the curve is very important in the ever-evolving HR industry. You should learn
                        about the latest trends and best modern practices in HR technology with SAP HCM training classes in
                        Kolkata. Gaining proficiency in SAP HCM will put you in a strong position to implement new HR
                        procedures and support businesses in maintaining their competitiveness in a dynamic market.
                    </p>

                    <CompanyLogo _this={_this} />
                    <h2 id="final-thoughts" className="text-[18px] font-[700] leading-[24px]">Final Thoughts</h2>
                    <p>
                        In a competitive job market, professional development is key to advancing your career. With the
                        increasing reliance on technology in the HR field, mastering SAP HCM can significantly boost your career
                        prospects. By enrolling in SAP HCM training courses in Kolkata from <a href={addressUrl} target="_blank" className="text-[#0057E2] underline">
                            EME Academy
                        </a>,you’ll gain the skills
                        needed to optimize HR processes, enhance your value to employers, and unlock exciting job
                        opportunities both locally and globally.
                    </p>
                    <CTAButton name="Enquire Now"
                        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                        _this={_this}
                    />
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
