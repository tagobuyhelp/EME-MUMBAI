import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenText, NotebookPen, PenSquare } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BlogDashboard() {
  const blogOptions = [
    {
      title: "All Blogs",
      icon: (
        <Image
          width={50}
          height={50}
          className="w-7 h-7"
          src={"/assets/images/all_blog.svg"}
          alt="all_blog"
        />
      ),
      href: "/dashboard/blogs/all-blogs",
      description: "View and manage all blog posts",
      button: "View",
    },
    {
      title: "Write Blog",
      icon: (
        <Image
          width={50}
          height={50}
          className="w-7 h-7"
          src={"/assets/images/write_blog.svg"}
          alt="write_blog"
        />
      ),
      href: "/dashboard/blogs/create-blog",
      description: "Create a new blog post",
      button: "Write Blog",
    },
  ];

  return (
    <div className="container mx-auto md:py-8">
      <h1 className="text-xl font-bold text-[#18181B] text-center pb-4 md:mb-8">
        Blog Options
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
        {blogOptions.map((option) => (
          <Link
            href={option.href}
            key={option.title}
            className="h-[190px] 2xl:h-[200px] w-full md:w-[50%] lg:w-[32%]"
          >
            <Card className="shadow-none h-full w-full  hover:shadow-md bg-white border border-[#EEEEEE] rounded-lg p-0 transition-shadow cursor-pointer ">
              <CardContent className="w-full h-full text-center flex flex-col justify-center items-center gap-y-4">
                <div className=" w-12 h-12  bg-white border border-[#eeeeee] rounded-md flex items-center justify-center ">
                  {option.icon}
                </div>
                <div>
                  <h2 className="text-base text-[#101828] font-semibold ">
                    {option.title}
                  </h2>
                  <p className="text-[#696969] text-sm">{option.description}</p>
                </div>

                <Button className="bg-[#41A3FF] text-sm w-[45%] hover:bg-[#41A3FF]/90">
                  <Link href={option.href} key={option.title}>
                    {option?.button}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
