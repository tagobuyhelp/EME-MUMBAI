"use client";
import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import { useEffect, useState } from "react";
import API from "@/api";
import { Skeleton } from "@/components/ui/skeleton";
import BlogList from "./Components/BlogList";
import Head from "next/head";
import StaticBlogList from "./Components/static-blog-list";
import BlogsHero from "./Components/BlogsHero";
import Image from "next/image";

export default function Blogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // ************** get blogs API CALL *******************

  useEffect(() => {
    const getAllBlogs = () => {
      setLoading(true);
      API.blog
        .getAllBlogs()
        .then((response) => {
          if (response) {
            setBlogs(response);
            console.log(response);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getAllBlogs();
  }, []);

  const BlogSkeleton = () => (
    <div className="w-full max-w-[450px] max-h-[450px] rounded-xl bg-[#ffffff] flex flex-col justify-start items-start gap-[10px] lg:gap-[20px] overflow-hidden p-[10px] pb-[20px]">
      <Skeleton className="w-full h-[200px] rounded-xl" />
      <Skeleton className="w-3/4 h-6 rounded-md" />
      <Skeleton className="w-full h-16 rounded-md" />
      <Skeleton className="w-24 h-4 rounded-md" />
    </div>
  );
  return (
    <>
      <Head>
        <title>Explore Our Blogs | Simple Tips and Stories</title>
        <meta
          name="description"
          content="Easy-to-read tips, stories, and advice on our blog. Join us for interesting topics and helpful information for everyday life."
        />
        <meta
          property="og:title"
          content="Explore Our Blogs | Simple Tips and Stories"
        />
        <meta
          property="og:description"
          content="Easy-to-read tips, stories, and advice on our blog. Join us for interesting topics and helpful information for everyday life."
        />
      </Head>

      <main className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <AnotherHeader />

        <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/CareerHeroBg.png')] xs:h-[400px] md:h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
          <BlogsHero />
        </div>

        <div className="flex w-full py-[70px] max-w-[1380px] px-[20px] md:px-24">
          <StaticBlogList />
        </div>

        <div className="flex flex-col w-full py-6 max-w-[1380px] px-[20px] md:px-24 gap-[20px] md:gap-[30px]">
          <div className="flex flex-wrap justify-center items-baseline gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
            Thoughts, Tips,
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#0057E2]">
                and Tools for Success
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Decorative line"
                width={80}
                height={40}
                className="ml-2"
              />
            </span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] gap-y-6 justify-items-center">
            {loading ? (
              Array(4)
                .fill(0)
                .map((_, index) => <BlogSkeleton key={`skeleton-${index}`} />)
            ) : blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogList key={index || `blog-${blog.slug}`} blog={blog} />
              ))
            ) : (
              <div className="w-full col-span-3 text-center text-gray-500">
                No blogs found.
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
