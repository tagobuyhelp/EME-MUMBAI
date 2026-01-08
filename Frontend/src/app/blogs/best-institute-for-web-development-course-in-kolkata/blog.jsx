'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
const courses = [
    {
        type: <p>Full Stack <strong>MERN</strong> Web Development Course</p>,
        duration: <p><strong>6 months</strong> (5 months training + 1 month internship)</p>,
        fees: <p>₹50,000 <strong>(₹40,000 after discount)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,
    },
    {
        type: <p>Full Stack <strong>MEAN</strong> Web Development Course</p>,
        duration: <p><strong>6 months</strong> (5 months training + 1 month internship)</p>,
        fees: <p>₹50,000 <strong>(₹40,000 after discount)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,

    },
    {
        type: <p><strong>PHP & MySQL</strong> Development Intensive Course</p>,
        duration: <p><strong>4 months</strong> (3 months training + 1 month internship)</p>,
        fees: <p>₹40,000 <strong>(Limited Time Offer: ₹35,000)</strong></p>,
        mode: <p><strong>Online & Classroom</strong> options available</p>,

    },
    {
        type: <p><strong>WordPress</strong> Development</p>,
        duration: <p><strong>4 months</strong> (3 months training + 1 month internship)</p>,
        fees: <p>₹40,000 <strong>(₹35,000 after discount)</strong> </p>,
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
                        src="/assets/images/blog/Web_Development_Career.svg"
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
                    <h1 id="your-ultimate-guide-to-web-development-courses-at-eme-academy" className="text-[18px] font-[700] leading-[24px]">Your Ultimate Guide to Web Development Courses at EME Academy</h1>
                    <p>
                        Itching to learn more about the exciting subject of web development? It would be best to start at EME Academy.
                        Voted the best web development school in Kolkata for a number of years running, it is well renowned
                        for providing courses that give students job-relevant skills
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <p>
                        EME Academy aims to impart essential skills and knowledge known to be crucial for success in the tech industry.
                        The courses are tailored to meet the unique needs of both amateurs and professionals. Looking to make a name in the.
                        EME Academy provides the high-quality training you need to meet your professional goals.
                        The comprehensive training given is exactly what you need to hone your skills further.
                    </p>
                    <p>
                        EME Academy provides an unparalleled learning experience. Additionally, our strong industry connections and
                        placement support help you transition smoothly into a rewarding career.
                        EME Academy would help transform your passion for web development into a successful profession.
                        It is the best institute for web development course in Kolkata.
                    </p>
                    <p></p>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="course-offerings" className="text-[18px] font-[700] leading-[24px]">Course Offerings</h1>
                    <p>
                        The curriculum is updated every quarter and consists of all fundamental and advanced topics, from basic HTML and CSS to advanced JavaScript frameworks and back-end technologies.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this}/>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Full-Stack Web Development Course</h1>
                    <p>
                        Meticulously designed to make you proficient in both front-end and back-end development, this one enables you to learn to build dynamic, responsive websites using a wide range of technologies including HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
                    </p>
                    <p>
                        From managing server-side logic to creating user interfaces., the course assists you in acquiring the necessary skills. Many practical projects and real-world exercises are included in it; to help students apply what they learn. This method strengthens the learning while also creating a strong portfolio that students may present to prospective employers.
                    </p>
                </div>

                {/* News Channel Logo */}

                <NewsLogo />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Web Development Course Overview</h1>
                    <p>
                        The web development courses offered by EME Academy have been tailored to meet a wide range of student needs. Each and every detail is covered in the web development course Kolkata, from fundamental HTML and CSS to complex JavaScript frameworks. The curriculum is regularly updated to stay in sync with the latest industry trends, ensuring that you receive the most current and relevant education possible.
                    </p>
                    <p>
                        With a focus on practical, hands-on learning experiences that enable you to apply what you learn in real-world circumstances, EME Academy is dedicated to providing its students with a cutting-edge education. Irrespective of previous skill levels, the courses will help anyone reach newer heights of success in the cutthroat industry of web development.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Full-Stack WordPress Development Course</h1>
                    <p>
                        Students will learn how to create custom themes and plugins, manage WordPress sites, and optimize them for performance and security. For those interested in specialising, the Full-Stack WordPress Development Course offers in-depth knowledge of one of the most popular content management systems.
                    </p>
                    <p>
                        Students get to work on real-world projects. They teach how to handle various WordPress functionalities and troubleshoot common issues. Perfect for those looking to focus on WordPress development, the course is great for leveraging past and current skills as one would be able to build, customise, and maintain WordPress sites with ease.
                    </p>
                </div>



                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Carving a Successful Future</h1>
                    <p>
                        The most extensive curriculum, under the guidance of knowledgeable teachers, and a strong support network can all be found at EME Academy, thetop web development school in Kolkata..
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Expert Instructors and Advanced Facilities</h1>
                    <p>
                        The most extensive curriculum, under the guidance of knowledgeable teachers, and a strong support network can all be found at EME Academy, thetop web development school in Kolkata..
                    </p>
                    <p>
                        The academy boasts of modern infrastructure and cutting-edge tech to help disseminate content with the help of adaptive learning methodologies in interactive settings. The institute leverages its cutting-edge tech-enabled infrastructure and its seasoned faculty to offer the perfect study setting to its students, thus positioning them for professional success.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={2} _this={_this}/>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Affordable and Flexible Learning</h1>
                    <p>
                        EME Academy offers online and offline modules for all of their courses, at very affordable prices. Their aim is to make quality education accessible to all. Every EME Academy student gets great value and a comprehensive education without compromising on quality thanks to the web development course fees in Kolkata.
                    </p>
                    <p>
                        The unique learning needs of the diverse group of students are met well through the flexible class schedules and hybrid medium. Students are able to juggle multiple responsibilities while pacing their studies at their convenience.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Excellent Placement</h1>
                    <p>
                        EME Academy has an extremely robust and well-maintained placement support system. It sets it apart from other EdTech training institutes. We have strong connections with leading companies, ensuring our graduates secure top job opportunities immediately after completing their courses.
                    </p>
                    <p>
                        The Academy’s dedicated placement cell offers personalized assistance, including resume building, interview preparation, and career counseling. Graduates get to experience a smooth transition from education to employment. No wonder EME Academy is the best choice for aspiring web developers.
                    </p>
                </div>


                {/* News Card  */}

                <NewsCard _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Curriculum Highlights</h1>
                    <p>
                        Aspiring web developers can master both front-end and back-end development with EME Academy programs, meticulously designed to impart practical skills. Today&apos;s tech-driven landscape demands a workforce with hands-on experience.

                    </p>
                    <p>
                        EME Academy is your gateway to becoming a proficient full-stack developer. For amateurs and professionals alike.
                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">Front-End Development</h1>
                    <p>
                        In the web design and development course in Kolkata, students will learn the fundamentals of front-end development. One goes through HTML, CSS, and JavaScript, and popular frameworks like React and Angular. Additionally, user experience (UX) and user interface (UI) design is also taught, in order to create visually appealing and user-friendly websites.

                    </p>
                    <p>
                        Front-end development expertise lets you transform ideas into reality, by building stunning, interactive websites.

                    </p>
                </div>


                <div className="p-4">
                    <h2 id="course-fees-structure" className="text-xl font-semibold mb-4">Course Fees Structure</h2>
                    <div className="border rounded-[16px] overflow-hidden">
                        <Table>
                            <TableHeader className="bg-[#00A2E7] [&_tr]:border-b-0">
                                <TableRow className="">
                                    <TableHead className="text-white border-r">Course Type</TableHead>
                                    <TableHead className="text-white border-r">Duration</TableHead>
                                    <TableHead className="text-white border-r">Fees</TableHead>
                                    <TableHead className="text-white">Mode of Training</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {courses?.map((course, index) => (
                                    <TableRow key={index} className="">
                                        <TableCell className="border-r-2">{course.type}</TableCell>
                                        <TableCell className="border-r-2">{course.duration}</TableCell>
                                        <TableCell className="border-r-2">{course.fees}</TableCell>
                                        <TableCell>{course.mode}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <CTAButton name="Enquire Now"
                    styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                    _this={_this}
                />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Back-End Development</h1>
                    <p>
                        Back-end development curriculum covers server-side programming, databases, and APIs, as well as Node.js, Express, and MongoDB, in order to create robust back-end systems. The trainers ensure that graduates can handle all aspects of web development, as a professional full-stack developer.
                    </p>
                    <p>
                        To master the backbone of websites, enrol in the program and learn how to build the future of the web.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">WordPress Specialization</h1>
                    <p>
                        The web design and development course in Kolkata also includes a specialized track for WordPress development. Students learn to create custom themes and plugins, optimise WordPress sites for performance, and ensure their security. Professionals looking to leverage WordPress in their web development career stand to benefit a lot from this specialisation. They learn how to craft powerful, customised websites for their clients.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={2} _this={_this}/>
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="student-success-stories" className="text-[18px] font-[700] leading-[24px]">Student Success Stories</h1>
                    <p>
                        The EME Academy alumni have achieved remarkable career advancements, securing positions in leading companies thanks to the robust training and support they received.
                    </p>
                    <p>
                        Essential knowledge and practical, real-world application of skills come alive during the course of the web development course in Kolkata with placement. EME Academy graduates are now thriving in top tech firms, and innovative startups. This reflects the high-quality education and hands-on experience they gained at EME Academy. They were well-trained for the demands and opportunities of the tech industry.
                    </p>
                </div>

                {/* Company Logo  */}
                <CompanyLogo _this={_this} />

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="join-the-best-web-development-training-in-kolkata" className="text-[18px] font-[700] leading-[24px]">Join the Best Web Development Training in Kolkata</h1>
                    <p>
                        If you’re looking for the best web development training institute in Kolkata, EME Academy is your ideal choice. Our courses, affordable fees, expert trainers, and strong placement support make us the best web development institute in Kolkata.
                    </p>
                    <p>
                        EME Academy helps students access abundant opportunities and a rewarding web development career.
                    </p>
                    <p>
                        EME Academy: Your Path to Success Starts Here
                        EME Academy web design training institute Kolkata is the perfect launchpad for your career in tech. Priority is given to practical skills and real-world applications, ensuring that every graduate is fully prepared for the job market.
                    </p>
                    <p>
                        The strong industry connections help in networking while the new-age curriculum is designed to bridge the gap between theory and practice. Thus, students gain hands-on experience. that sets them apart from the competition.


                    </p>
                    <p>
                        At EME Academy, expert instructors guide you through hands-on training. So by the time they are about to graduate, each student has thorough theoretical knowledge, and ample experience, and also enjoys a sharp competitive edge in the job market.

                    </p>
                    <p>
                        This is all thanks to the EME Academy&apos;s comprehensive offering of personalised career counseling, resume building, and interview preparation facilities.

                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">Online Vs Offline: Which Course To Pursue</h1>
                    <p>
                        In modern times, learners have started moving to online means of education.
                        Here, you can have an overview of which means is better for data analytics training in Kolkata or anywhere.
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
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <ShareBlog />
                </div>
            </div>
        </div>
    );
}
