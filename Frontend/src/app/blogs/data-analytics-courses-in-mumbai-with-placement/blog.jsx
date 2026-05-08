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
const comparison = [
    {
        "category": "Flexibility",
        "online": "More Flexible and available anytime",
        "offline": "Restricted to fixed schedules and locations"
    },
    {
        "category": "Cost",
        "online": "Low fee as compared to offline courses",
        "offline": "High costs are charged due to infrastructure facilities"
    },
    {
        "category": "Interaction",
        "online": "Less real-time interactions",
        "offline": "Real-time training is provided for better understanding"
    },
    {
        "category": "Hands-on Training",
        "online": "Accessible through virtual labs and recorded lectures",
        "offline": "Accessible through virtual labs and recorded lectures"
    },
    {
        "category": "Placement Support",
        "online": "Depending on the platform",
        "offline": "Varies from institution to institution"
    }
]



export default function DataAnalyticsBlog({
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
        <div className="w-full  flex flex-col md:flex-row max-w-7xl justify-between gap-4 px-4 py-2 mx-auto">
            <div className="hidden lg:block">
                <LeftSection />
            </div>


            <div className="flex flex-col justify-center gap-4 md:mt-8 md:max-w-[680px]">
                <div className="flex flex-col gap-2">
                    <Image
                        className="w-full rounded-md"
                        width={500}
                        height={500}
                        src="/assets/images/blog/dataanalytics.jpg"
                        alt="Blog Image"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[14px] text-[#2D292D] font-[500] text-left">
                            <span>By -<span className="text-[#0057E2] border-r-2 border-[#BABABA] pr-2"> Eme Academy</span></span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Calendar size={14} />08 Mar 2025</span>
                            <span className="flex gap-2 items-center border-r-2 border-[#BABABA] pr-2"><Clock2 size={14} /> 10 min</span>
                            <span className="flex gap-2 items-center pr-2"><Eye size={14} /> 586 views</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">

                    <h1 id="best-data-analytics-course" className="text-[18px] font-[700] leading-[24px]">
                        Best Data Analytics Course
                    </h1>
                    <p>
                        Master data capabilities through the best data analytics courses in Mumbai.
                        In a modern data-driven environment, people need to master analytics abilities to make smart decisions,
                        strengthen business approaches, and discover essential information.
                        The appropriate course provides learners at every skill level with training in data visualization,
                        statistical analysis, machine learning, and other relevant subjects.
                    </p>
                    <div className="w-full mx-auto flex justify-center  lg:hidden  ">
                        <BlogAdmissionForm {..._this} />
                    </div>
                    <p>
                        Expert data analytics skills enable you to read complex information while using modern tools that boost your professional opportunities across industries,
                        including finance, healthcare and marketing.
                        Embark on your data expert training through a data analyst course in
                        Mumbai now to maintain leadership in today&apos;s rapidly developing digital environment.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="introduction-to-data-analytics" className="text-[18px] font-[700] leading-[24px]">
                        Introduction to Data Analytics
                    </h1>
                    <p>
                        The majority of modern businesses include substantial data streams, yet the unprocessed information lacks clear
                        meaning in its current form. Organizations use data analytics to extract valuable insights from
                        raw data, which leaders apply to make strategic business choices.
                        The data analyst extracts raw data before restructuring it into a format that leads to data analysis for better comprehension.
                    </p>
                    <p>
                        Following data interpretation, the data analyst will submit their analytical findings to the organization,
                        which will enable the company to determine its future actions. Through data analytics,
                        organizations convert historical information into meaningful patterns that help forecast future behaviours,
                        thus improving decision-making over blind guesses.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={1} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="why-pursue-data-analytics-benefits-of-becoming-a-data-analyst" className="text-[18px] font-[700] leading-[24px]">
                        Why Pursue Data Analytics? Benefits of Becoming a Data Analyst
                    </h1>
                    <p>
                        Entering data analytics gives you access to essential roles that enable you to implement data-based choices for performance improvement
                        through the identification of key insights. The field applies to finance, healthcare, and marketing,
                        as well as various other areas that provide rewarding pay alongside secure work and potential advancement.
                        The mastery of analytical skills enables you to remain connected to current data-driven business operations.
                    </p>
                    <p>
                        Here are the top benefits of studying from the best institute for data analyst courses in Mumbai.
                    </p>
                </div>
                {/* News Logo  */}
                <NewsLogo />

                <div className="flex flex-col text-[14px] font-[300] leading-[26px]">
                    <h3 className="text-[16px] font-[400]">1. Access to various industries</h3>
                    <p>
                        An analyst&apos;s role allows entry into almost every industry sector for employment.
                        Data analysts contribute value to many businesses and organizations, which means you can select employment that suits your interests.
                        A data analyst career in video game companies becomes possible for people who like playing video games.
                        The same goal can be achieved by reading about people who choose to work as data analysts in publishing companies.
                    </p>
                </div>
                <div className="flex flex-col text-[14px] font-[300] leading-[26px]">
                    <h3 className="text-[16px] font-[400]">2. Remote working options</h3>
                    <p>
                        Data analysts can select this occupation because numerous businesses allow their analysts to work remotely from home.
                        The schedule for remote work depends on each hiring organization,
                        but you will need to work from home during certain specified days or periods.
                        When you want to work remotely as a data analyst, you can consider freelance work.
                    </p>
                </div>
                <div className="flex flex-col text-[14px] font-[300] leading-[26px]">
                    <h3 className="text-[16px] font-[400]">3. Increased career opportunities</h3>
                    <p>
                        Career opportunities in the field of data analysis have increased substantially, making it a practical reason to become one.
                        The future demands for data analysts will expand because organizations continue to require their expertise for business development analysis.
                    </p>
                </div>
                {/* Testimonials  */}
                <BlogTestimonial _this={_this} />

                <div className="flex flex-col text-[14px] font-[300] leading-[26px]">
                    <h3 className="text-[16px] font-[400]">4. Skills development</h3>
                    <p>
                        The enjoyment of becoming a data analyst rises when you possess problem-solving thinking abilities,
                        given that the main objective of data analysts focuses on troubleshooting.
                        Besides critical thinking abilities and problem-solving competencies,
                        you will gain valuable skills that will be transferable to different career positions.
                    </p>
                </div>


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="discover-top-data-analytics-courses-in-mumbai" className="text-[18px] font-[700] leading-[24px]">
                        Discover Top Data Analytics Courses in Mumbai
                    </h1>
                    <p>
                        In Mumbai, students can access reputable data analytics training programs that teach needed abilities for dynamic field success.
                        The following list contains leading institutions that deliver complete data analytics programs:
                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">EME</h1>
                    <p>
                        The EME Academy stands as an acknowledged academic institution that provides diverse data analytics courses in Mumbai with placement.
                        The curriculum provides in-depth Python as well as Machine Learning education combined with SQL, Tableau Power BI and Data Visualization skills.
                        Through their program, students get access to relevant industrial internships and lifetime career resource support which includes
                        interview training and continuous professional development sessions. Students gain a better educational experience through the blended learning format,
                        which combines online sessions with problem-solving activities using recorded videos.
                    </p>
                </div>

                <div>
                    <Cards cards={placementCards} id={2} _this={_this} />
                </div>

                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">ExcelR</h1>
                    <p>
                        ExcelR began operations in 2014 and has become one of the top training organizations focused on data analytics.
                        The training includes complete coverage of data collection, followed by exploration, predictive model development, and data visualization.
                        ExcelR&apos;s learning programs operate through dual platforms, allowing students to choose either distance study or classroom-based education.
                        The training program delivers practical work with technical tools, including Python, R, SQL, and Tableau.
                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">DataMites</h1>
                    <p>
                        DataMites, the best data analytics institute in Mumbai, provides an IABAC-accredited Certified Data Analyst program at its Mumbai location. Students in the six-month program get more than 200 learning hours of education that includes fundamental concepts about data analysis and the CRISP-DM model along with univariate methods while learning Excel, MySQL, Tableau, and Power BI.
                    </p>
                </div>


                {/* News Card  */}
                <NewsCard _this={_this} />


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 className="text-[18px] font-[700] leading-[24px]">Edvancer</h1>
                    <p>
                        Through its Certified Data Analytics Specialist course, Edvancer provides students with practical
                        skills in data analytics while teaching them to work with visualized data.
                        The instruction delves into predictive modelling together with data visualization and
                        teaches data analysis skills through the study of SQL, R, and Tableau.
                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">Calcutta Business School</h1>
                    <p>
                        Calcutta Business School delivers an All India Council for Technical Education
                        approved Post Graduate Diploma in Management (PGDM) that emphasizes data analytics education.
                        The program obtains its approval from the
                        All India Council for Technical Education (AICTE) while delivering both management principles
                        basics and focused data analytics education to students.
                    </p>
                </div>

                {/* Company Logo  */}
                <CompanyLogo _this={_this}/>
                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="data-analytics-course-fee" className="text-[18px] font-[700] leading-[24px]">
                        Data Analytics Course Fee
                    </h1>
                    <p>
                        Data Analytics programs charge different amounts of fees based on the educational institution
                        choice and training length selection and whether the instruction is synchronous or synchronized.
                        The data analyst course fee in Mumbai and Indian educational institutions span from ₹10,000 to ₹2,50,000.
                        Students need to pay ₹10,000 to ₹30,000 for short-term certification from FITA Academy,
                        but Full courses at ExcelR and DataMites and Analytics Educator fall under ₹40,000 to ₹70,000.
                    </p>
                    <p>
                        The total costs of premium programs at Handson School of Data Science reach amounts as high as ₹2,50,000.
                        People can access online courses, which tend to charge lower tuition costs than physical training programs.
                        Course prices depend on how deep the curriculum goes,
                        how skilled the faculty members are, and how well the placement services function, so students must carefully pick their training.
                    </p>
                    <h1 className="text-[18px] font-[700] leading-[24px]">Online Vs Offline: Which Course To Pursue</h1>
                    <p>
                        In modern times, learners have started moving to online means of education.
                        Here, you can have an overview of which means is better for data analytics training in Mumbai or anywhere.
                    </p>
                </div>


                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Course Fees Structure</h2>
                    <div className="border rounded-[16px] overflow-hidden">
                        <Table>
                            <TableHeader className="bg-[#00A2E7] [&_tr]:border-b-0">
                                <TableRow className="">
                                    <TableHead className="text-white border-r">.</TableHead>
                                    <TableHead className="text-white border-r">Online</TableHead>
                                    <TableHead className="text-white">Offline </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {comparison?.map((course, index) => (
                                    <TableRow key={index} className="">
                                        <TableCell className="border-r-2">{course.category}</TableCell>
                                        <TableCell className="border-r-2">{course.online}</TableCell>
                                        <TableCell>{course.offline}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>


                <div className="flex flex-col gap-4 text-[14px] font-[300] leading-[26px]">
                    <h1 id="conclusion" className="text-[18px] font-[700] leading-[24px]">
                        Conclusion
                    </h1>
                    <p>
                        Mumbai delivers a selection of prestigious Data Analytics programs that match individual learning necessities together with financial capabilities.
                        Students can find high-quality data-driven courses at three leading educational institutions: EME, DataMites and Analytics Educator.
                        The Hands-on School of Data Science provides an extensive industry-oriented data science course featuring premium pricing.
                        Affordable education delivers students a solid introduction to foundational learning.

                    </p>
                    <p>
                        Online analytical programs provide adaptable study schedules yet physical classroom classes offer laboratory contact and stronger networking opportunities.
                        Individual needs should guide decision-making since distance learners opt for online classes, but traditional students benefit more from offline courses.
                        A comprehensive investigation of curriculum and reviews leads to successful decisions.
                    </p>
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
