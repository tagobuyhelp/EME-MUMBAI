import React from 'react'
import Image from "next/image";
import Link from "next/link";

const truncateDescription = (text, words) => {
  if (!text) return "";
  return text.split(" ").splice(0, words).join(" ") + "...";
};

const blogsData = [
  {
    "_id": "data-analyst-mumbai-roadmap",
    "image": "/assets/images/blogs/data_analyst_roadmap.png",
    "title": "How to Become a Data Analyst in Mumbai: Complete 2026 Roadmap",
    "meta_description": "Want a data analyst career in Mumbai? This roadmap covers skills, salary benchmarks, portfolio tips, and a step-by-step plan to land your first job without a CS degree.",
    "url": "blogs/how-to-become-a-data-analyst-in-mumbai-roadmap"
  }
];

export default function StaticBlogList() {
  return (
    <section className="w-full flex flex-col gap-[20px] md:gap-[30px]">
      <p className='w-full text-[20px] md:text-[26px] text-[#4B4B4B] text-center font-[700]'>
        Our <span className='text-[#0057E2]'>latest Blog from EME</span>
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] gap-y-6 justify-items-center ">
        {blogsData.map((blog) => (
          <Link key={blog._id} href={`/${blog.url}`}>
            <div
              className="max-w-[450px] max-h-[480px] w-full border-2 rounded-xl bg-[#ffffff] flex flex-col justify-start items-start gap-[10px] lg:gap-[20px] overflow-hidden p-[10px] pb-[20px] shadow-sm cursor-pointer hover:shadow-md transition-shadow"
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