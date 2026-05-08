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
    {
        type: <p>Full Stack <strong>MERN</strong> Web Development Course</p>,
        duration: <p><strong>6 months</strong> (5 months training + 1 month internship)</p>,
        fees: <p>Rs. 50,000 <strong>(Rs. 40,000 after discount)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,
    },
    {
        type: <p>Full Stack <strong>MEAN</strong> Web Development Course</p>,
        duration: <p><strong>6 months</strong> (5 months training + 1 month internship)</p>,
        fees: <p>Rs. 50,000 <strong>(Rs. 40,000 after discount)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,

    },
    {
        type: <p><strong>PHP & MySQL</strong> Development Intensive Course</p>,
        duration: <p><strong>4 months</strong> (3 months training + 1 month internship)</p>,
        fees: <p>₹35,000 <strong>(Limited Time Offer: ₹25,000)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,

    },
    {
        type: <p><strong>WordPress</strong> Development</p>,
        duration: <p><strong>4 months</strong> (3 months training + 1 month internship)</p>,
        fees: <p>Rs.30,000 <strong>(Rs,20,000 after discount)</strong> </p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,

    },
];

export default function WebDevelopmentBlog({
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
                        src="/assets/images/blog/FullStack Development Courses.png"
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
                    <h1 id="your-ultimate-guide-to-full-stack-development-courses-at-eme-academy" className="text-[18px] font-[700] leading-[24px]">Your Ultimate Guide to Full Stack Development Courses at EME Academy</h1>
                    <p>
                        Ready to dive into the dynamic world of web development? Look no further than EME Academy, <strong>the best institute for web development course in Mumbai.</strong>
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <p>
                        The fast-paced tech industry demands a great blend of knowledge and skills - relevant to changing times. EME Academy offers the perfect mix of robust & programs with practical know-how modules integrated. Both beginners and professionals are set to benefit from what EMEM Academy has to offer. It is the absolute best training and mastery of skills, that helps you achieve career goals.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="the-benefits-of-becoming-a-full-stack-developer" className="text-[18px] font-[700] leading-[24px]">The Benefits of Becoming a Full Stack Developer</h1>
                    <p>
                        Full stack development is a versatile and highly sought-after skill in the tech industry. It involves both front-end and back-end development, and thus gives you the ability to build complete web applications from scratch.
                    </p>
                    <p>
                        Mastering full-stack development can be a boon to your career. Most tech-driven sectors see such talents as a valuable addition to their company. You would become capable of handling diverse tasks and solving complex problems. Such talents are considered indispensable in the job market these days - a great asset to any organisation looking to recruit or retain you.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="explore-emes-full-stack-development-courses" className="text-[18px] font-[700] leading-[24px]">Explore EME ‘s Full Stack Development Courses</h1>
                    <p>
                        A massive array is on offer, which students can avail conveniently through online and offline modes. The list of courses include:
                    </p>
                    <h3 className="font-[600] leading-[24px]">Full Stack Web Development Course</h3>
                    <p>
                        Our <strong>full stack web development course in Mumbai</strong> is designed to cover all aspects of web development. From HTML, CSS, and JavaScript to Node.js, Express, and MongoDB, this course ensures you gain a thorough understanding of both front-end and back-end technologies. With hands-on projects and real-world assignments, you will develop the practical skills needed to succeed in the industry.
                    </p>

                    <NewsLogo />

                    <h3 className="font-[600] leading-[24px]">
                        Full Stack Developer Course with Placement
                    </h3>
                    <p>
                        The <strong>full stack developer course in Mumbai with placement</strong> at EME Academy guarantees job support to help you secure a position after graduation. Our dedicated placement cell works with top companies to provide you with the best job opportunities, ensuring a smooth transition from education to employment.
                    </p>
                    <h3 className="font-[600] leading-[24px]">Specialized Training Programs to Enhance Skills Further</h3>
                    <p>
                        The advanced course is specifically designed for professionals looking to move ahead in their careers with updated training modules that touch upon more complex matters.
                    </p>
                </div>

                {/* News Channel Logo */}


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="mean-stack-training" className="text-[18px] font-[700] leading-[24px]">MEAN Stack Training</h1>
                    <p>
                        Our <strong>mean stack training in Mumbai</strong> focuses on MongoDB, Express.js, Angular, and Node.js. This popular stack is used by many companies for its efficiency and scalability. The course includes in-depth training on each component, preparing you to build robust, high-performance web applications.
                    </p>
                    <h3 className="font-[600] leading-[24px]">Flexible and Affordable Full Stack Courses: Learn at your own Pace</h3>
                    <p>
                        At EME Academy, we understand the importance of affordability and flexibility. Our <strong>full stack developer course in Mumbai</strong> are designed to be competitive, offering great value for the comprehensive education you receive. We provide both online and offline learning options, ensuring you can balance your studies with other commitments.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Student Success Stories Success Stories: From EME Academy to Top Tech Firms</h1>
                    <p>
                        Our students’ success is our pride. Graduates from EME Academy have gone on to work with leading companies, thanks to the robust training and support they received. The full stack developer course in Mumbai with placement ensures that you are not just learning, but also applying your knowledge in real-world scenarios. Our alumni network is a testament to the quality education we provide.
                    </p>

                </div>



                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="the-eme-advantage" className="text-[18px] font-[700] leading-[24px]">The EME Advantage</h1>
                    <p>
                        The most sight after EdTech training institute in Eastern India has a lot to offer to its students. There are several reasons why its courses are so prestigious and deemed with hgh regard by industry insiders. Let’s take a look:
                    </p>
                    <h3 className="font-[600] leading-[24px]">Expert Trainers and State-of-the-Art Facilities</h3>
                    <p>
                        EME Academy is recognized as the <strong>full stack developer course in Mumbai</strong> due to our commitment to excellence. Our courses are taught by industry experts who bring real-world experience into the classroom. Our state-of-the-art facilities provide an ideal learning environment, equipped with the latest tools and technologies.
                    </p>
                    <div>
                        <Cards cards={placementCards} id={2} _this={_this}/>
                    </div>
                    <h3 className="font-[600] leading-[24px]">Comprehensive Support and Guidance</h3>
                    <p>
                        Our dedicated support team ensures you have all the resources you need to succeed. From personalized career guidance to mock interviews and portfolio building, we provide comprehensive support to help you achieve your career goals.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Transform your Future: Start your Journey at EME Academy</h1>
                    <p>
                        If you’re looking for the <strong>best web development training institute in Mumbai,</strong> EME Academy is your ideal choice. Our courses, affordable fees, expert trainers, and strong placement support make us the <strong>best web development institute in Mumbai with placement.</strong> Don’t miss out on the opportunity to transform your future. Enroll today and take the first step towards a rewarding career in web development.
                    </p>
                </div>

                {/* News Card  */}

                <NewsCard _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="your-path-to-success-starts-here" className="text-[18px] font-[700] leading-[24px]">Your Path to Success Starts Here</h1>
                    <p>
                        EME Academy is more than just a <strong>web development training institute in Mumbai;</strong> we are your partners in building a successful career. With a focus on practical skills, real-world applications, and strong industry connections, we ensure that you are job-ready upon graduation. Our <strong>full stack training in Mumbai</strong> is designed to provide you with all the tools you need to succeed in the competitive field of web development.
                    </p>
                    <p>
                        For more information and to enroll in our courses, visit the EME Academy Web Development Courses.
                    </p>
                </div>


                <div>
                    <Cards cards={placementCards} id={2} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="student-success-stories" className="text-[18px] font-[700] leading-[24px]">Student Success Stories</h1>
                    <p>
                        The EME Academy alumni have achieved remarkable career advancements, securing positions in leading companies thanks to the robust training and support they received.
                    </p>
                    {/* Company Logo  */}
                    <CompanyLogo _this={_this} />
                    <p>
                        Essential knowledge and practical, real-world application of skills come alive during the course of the full stack training in Mumbai with placement. EME Academy graduates are now thriving in top tech firms, and innovative startups. This reflects the high-quality education and hands-on experience they gained at EME Academy. They were well-trained for the demands and opportunities of the tech industry.
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
