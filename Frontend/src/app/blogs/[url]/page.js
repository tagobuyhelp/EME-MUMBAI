import API from "@/api";
import CareerCall from "@/components/common/CareerCall";
import AdmissionForm from "@/components/common/LandingAdmissionForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";


export async function generateMetadata({ params }) {

  try {
    const { url } = params instanceof Promise ? await params : params;
    const response = await API.blog.getBlogDetailsByUrl({ url: url });

    // console.log("Blog details URL param:", url);
    // console.log("URL RESPONSE", response);

    const title = response?.meta_title || "EME Academy Blog";
    const description = response?.meta_description || "EME Academy Blog Post";
    const keywords = response?.meta_keywords || "test keywords, hello, test";

    return {
      title,
      description,
      keywords,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "EME Academy Blog",
      description: "EME Academy Blog Post",
      keywords: "keywords",
    };
  }
}

export default async function Page({ params }) {
  const { url } = params instanceof Promise ? await params : params;
  const response = await API.blog.getBlogDetailsByUrl({ url: url });
  const postData = response;
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString)
      .toLocaleDateString("en-GB", options)
      .replace(",", "");
  };
  const Courses = "All Course";
  const email_sender = "All";
  const _this = {
    Courses,
    email_sender,
  };




  return (
    <>
      <Head>
        <title>{postData?.meta_title || "Blog | EME Academy"}</title>
        <meta
          name="description"
          content={
            postData?.meta_description ||
            "Read the latest blog post on EME Academy."
          }
        />
        {/* <link rel="canonical" href={postData?.url} key="canonical" /> */}
        <meta
          name="keywords"
          content={
            postData?.meta_keywords || "EME Academy, blog, education, learning"
          }
        />
        <meta
          property="og:title"
          content={postData?.meta_title || "Blog | EME Academy"}
        />
        <meta
          property="og:description"
          content={
            postData?.meta_description || "Check out our latest blog post."
          }
        />
        <meta
          property="og:image"
          content={postData?.image || "/default-image.jpg"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://emeacademy.co.in/blogs/${url}`}
        />
        <meta
          name="twitter:title"
          content={postData?.meta_title || "Blog | EME Academy"}
        />
        <meta
          name="twitter:description"
          content={
            postData?.meta_description || "Check out our latest blog post."
          }
        />
        <meta
          name="twitter:image"
          content={postData?.image || "/default-image.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen w-full  flex justify-center items-start bg-white text-black py-10">
        <div className="w-full md:max-w-6xl h-full mx-auto flex flex-col px-5 md:px-0 gap-5">
          <Link
            href="/blogs"
            className="flex items-center justify-start gap-1 hover:underline hover:cursor-pointer transition-all"
          >
            <ArrowLeft />
            <div className="text-sm">EME Academy Blog</div>
          </Link>
          <div className="text-center text-[#0057E2] font-[500] text-[14px]">
            {postData?.author ? `By ${postData?.author}` : ""} •{" "}
            {formatDate(new Date().toISOString())}
          </div>
          <div className="text-lg font-semibold  md:text-xl text-center md:font-bold">
            {postData?.title}
          </div>
          <div className="md:w-[100%] mx-auto">
            {postData?.image && (
              <Image
                className="aspect-video w-full md:max-w-6xl md:h-[441px] object-cover object-center rounded-md"
                width={500}
                height={500}
                src={postData?.image}
                alt={postData?.title || "Blog Image"}
              />
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:sticky md:top-4 md:h-fit bg-white border border-gray-200 mt-2 p-3 rounded-lg shadow-lg">
              <div className="w-full md:w-[40%] ">
                <AdmissionForm {..._this} />
              </div>
              <div className="flex flex-col gap-2 mt-2 font-[600] p-3 ">
                Share this blog
                <div className="flex flex-row gap-2">
                  <div className="bg-[#F6F6F6] rounded-full w-9 h-9 p-2 cursor-pointer hover:bg-[#E4E4E4] transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>

                  <div className="bg-[#F6F6F6] rounded-full w-9 h-9 p-2 cursor-pointer hover:bg-[#E4E4E4] transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <polygon
                        fill="#616161"
                        points="41,6 9.929,42 6.215,42 37.287,6"
                      ></polygon>
                      <polygon
                        fill="#fff"
                        fillRule="evenodd"
                        points="31.143,41 7.82,7 16.777,7 40.1,41"
                        clipRule="evenodd"
                      ></polygon>
                      <path
                        fill="#616161"
                        d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                      ></path>
                    </svg>
                  </div>

                  <div className="bg-[#F6F6F6] rounded-full w-9 h-9 p-2 cursor-pointer hover:bg-[#E4E4E4] transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-sm -tracking-tight text-black flex flex-col gap-5">
              {/* <div className="text-sm">
              {postData?.author ? `By ${postData?.author}` : ""}
            </div> */}
              <p className="text-base">{postData?.short_description}</p>
              <div
                className="prose prose-base "
                dangerouslySetInnerHTML={{ __html: postData?.main_content || "" }}
              />
            </div>
          </div>
          <div className=" w-full  bg-[#ffffff]  ">
            <CareerCall />
          </div>
        </div>
      </div>
    </>
  );
}
