import { AnotherHeader } from "@/components/common/AnotherHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "https://emeacademy.co.in/all-landing-pages",
  },
};

export default function page() {
  const allCourses = [
    {
      name: "Landing Page - Data Analytics",
      link: "/best-data-analytics-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/DataAnalyticsLandingCourse.jpg",
    },
    {
      name: "Landing Page - SAP",
      link: "/sap-training-institute",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/saplanidngImage.jpeg",
    },
    {
      name: "Landing Page - Digital  Marketing",
      link: "/digital-marketing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/digitalMarketingBlog.jpg",
    },
    {
      name: "Landing Page - HR Management",
      link: "/best-hr-training-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/HRMLandingImage.png",
    },
    {
      name: "Landing Page - Graphic Design",
      link: "/best-graphic-design-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/graphicsDesignImage.jpg",
    },
    {
      name: "Landing Page - UI/UX Design",
      link: "/ui-ux-landing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/UIUXImage.jpg",
    },
    {
      name: "Landing Page - Animation & VFX",
      link: "/animation-vfx-institute-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AVLandingCardImage.webp",
    },

    {
      name: "Landing Page - Data Science",
      link: "/best-data-science-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/DataScienceLandingCourse.jpg",
    },
    {
      name: "Landing Page - Cyber Security",
      link: "/cyber-security-landing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/CyberSecurityLandingImage.jpg",
    },
    {
      name: "Landing Page - Web Development",
      link: "/web-development",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/webDevBlog.webp",
    },
    {
      name: "Landing Page - AI & ML",
      link: "/ai-ml-landing-course",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AiMLImage.jpg",
    },

    {
      name: "Landing Page - Prompt Engineering with AI Tools",
      link: "/generative-ai",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/generiveAiImage.jpg",
    },

    {
      name: "Landing Page - Cloud Computing",
      link: "/cloud-computing-landing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/cloudComputingImg.jpg",
    },

    {
      name: "Landing Page - Devops",
      link: "/devops-landing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/DevOpsLandingImage.jpg",
    },
    {
      name: "Landing Page - PowerBI",
      link: "/power-bi-landing",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/PowerBILandingCourseOne.jpg",
    },
    {
      name: "Landing Page - MEAN Stack",
      link: "/mean-stack-training-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/MeanStackLandingImage.jpg",
    },
    {
      name: "Landing Page - MERN Stack",
      link: "/best-mern-stack-training-course-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/MernStackLandingImage.jpg",
    },
    {
      name: "Landing Page - PHP MySql",
      link: "/best-php-mysql-training-institute-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/PhpMysqlLandingImage.jpg",
    },
    {
      name: "Landing Page - Wordpress Development",
      link: "/wordpress-training-institute-in-kolkata",
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/WordpressLandingImage.png",
    },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen  ">
      <AnotherHeader />

      <div className=" w-full py-4 lg:py-8 px-[20px] md:px-24  max-w-[1380px] mx-auto flex flex-col gap-y-4">
        <div className="text-xl font-semibold">All Landing Page :</div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-9 ">
          {allCourses.map((course, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-y-2"
            >
              <div className="w-full   rounded-lg overflow-hidden bg-white shadow-md ">
                <div className="relative">
                  <Image
                    className="w-full h-[150px] object-cover object-right-top"
                    width={300}
                    height={150}
                    src={course?.src}
                    alt="course Image"
                  />
                </div>

                <div className="w-full px-3 pt-2 pb-5 flex flex-col gap-y-4  ">
                  <div className="text-[#232D63] font-bold text-base h-[40px]">
                    {course.name}
                  </div>

                  <Link
                    href={course.link}
                    className="w-28 capitalize text-sm bg-blue-600 rounded-sm px-2 flex justify-center items-center py-2 text-white"
                  >
                    Click here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
