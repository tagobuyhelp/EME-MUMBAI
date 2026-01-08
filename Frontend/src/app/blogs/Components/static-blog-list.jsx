import React from 'react'
import Image from "next/image";
import Link from "next/link";

const truncateDescription = (text, words) => {
  if (!text) return "";
  return text.split(" ").splice(0, words).join(" ") + "...";
};
const blogsData = [

  {
    "_id": "1",
    "image": "/assets/images/blog/digital_marketing_hero.jpg",
    "title": "The Ultimate Guide to Finding the Best Digital Marketing Course in Kolkata : Fees, Career Scope & Placement Opportunities",
    "meta_description": "It is critical to master the art of online marketing in today’s day and age. Imperative to career growth, it is one of the most highly demanded skills. Businesses are increasingly shifting....",
    "url": "blogs/digital-marketing-training-institute-in-kolkata-with-placement"
  },

  {
    "_id": "2",
    "image": "/assets/images/blog/Web_Development_Career.svg",
    "title": "Your Ultimate Guide to Web Development Courses at EME Academy",
    "meta_description": "EME Academy aims to impart essential skills and knowledge known to be crucial for success in the tech industry. The courses are tailored to meet the unique needs of both amateurs and professionals.",
    "url": "blogs/best-institute-for-web-development-course-in-kolkata"
  },
  {
    "_id": "3",
    "image": "/assets/images/blog/dataanalytics.jpg",
    "title": "Best Data Analytics Course in Kolkata",
    "meta_description": "Master data capabilities through the best data analytics courses in Kolkata. In a modern data-driven environment, people need to master analytics abilities to make smart decisions....",
    "url": "blogs/data-analytics-courses-in-kolkata-with-placement"
  },
  {
    "_id": "4",
    "image": "/assets/images/blog/FullStack Development Courses.png",
    "title": "Kickstart Your Career with Full Stack Development: Discover Premier Courses at EME Academy",
    "meta_description": "Mastering full-stack development can be a boon to your career. Most tech-driven sectors see such talents as a valuable addition to their company. You would become capable of handling diverse tasks and solving complex problems. Such talents are considered indispensable in the job market these days - a great asset to any organisation looking to recruit or retain you.",
    "url": "blogs/full-stack-development-course-in-kolkata"
  },
  {
    "_id": "5",
    "image": "/assets/images/blog/Power_BI_Course _Blog_Features_Image.jpg",
    "title": "Top 7 Benefits of Learning Power BI for Career Growth - EME Academy",
    "meta_description": "Want to grow your career in data analytics? Discover 7 reasons to take a Power BI course in Kolkata 2025 and gain in-demand skills!",
    "url": "blogs/7-reasons-to-enroll-in-a-power-bi-course"
  },
  {
    "_id": "6",
    "image": "/assets/images/blog/hcm_course_at_eme_academy.jpg",
    "title": "Take Your HR Career to the Next Level with SAP HCM Training",
    "meta_description": "Excel in your HR career with our SAP HCM course in EME Academy. Gain essential skills and knowledge to excel in human resources management today!",
    "url": "blogs/take-your-hr-career-to-the-next-level-with-sap-hcm-training"
  },
  {
    "_id": "7",
    "image": "/assets/images/blog/Executive_HR_Programs_in_Kolkata.png",
    "title": "Advance Your Career with Executive HR Programs in Kolkata | EME Academy",
    "meta_description": "Explore EME Academy’s executive HR courses in Kolkata designed for working professionals. Learn recruitment, employee relations, performance management, and leadership skills to thrive in top HR roles.",
    "url": "blogs/executive-human-resources-programs"
  },
  {
    "_id": "8",
    "image": "/assets/images/blog/SAP_MM_Course_In_Kolkata.jpeg",
    "title": "Top 5 Benefits of SAP MM for Revolutionising Supply Chain Management Process",
    "meta_description": "Top 5 benefits of SAP MM in transforming supply chain management, enhancing efficiency, transparency, and overall operational success.",
    "url": "blogs/sap-mm-courses-in-kolkata"
  },

];
export default function StaticBlogList() {
  return (
    <section className="w-full flex flex-col gap-[20px] md:gap-[30px]">
    <p className='w-full text-[20px] md:text-[26px] text-[#4B4B4B] text-center font-[700]'>Our <span className='text-[#0057E2]'>latest Blog from EME</span></p>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] gap-y-6 justify-items-center ">

      {blogsData.map((blog) => (
        <Link key={blog._id} href={`/${blog.url}`}>
          <div
            className="max-w-[450px] max-h-[480px] w-full border-2 rounded-xl bg-[#ffffff] flex flex-col justify-start items-start gap-[10px] lg:gap-[20px] overflow-hidden p-[10px] pb-[20px] shadow-sm"
          >
            <div className="w-full relative">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full h-[200px] rounded-xl object-cover"
              />
            </div>
            <div className="text-[#191719] text-[18px] lg:text-xl lg:leading-[25px] lg:h-[70px] font-[400] line-clamp-3">
              {blog.title}
            </div>
            <div className="text-[#191719] text-[14px] lg:text-[15px] font-[300] lg:leading-[25px] lg:h-[70px] line-clamp-3">
              {truncateDescription(blog.meta_description, 25)}
            </div>
            <div className="text-[#00A2E7] text-[14px] lg:text-[16px] font-[500]">
              Read more
            </div>
          </div>
        </Link>
      ))}
    </div>
    </section>
  )
}