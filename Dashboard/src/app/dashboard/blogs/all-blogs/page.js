"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import { DeleteBlog } from "./delete-blog";
import { BlogPreviewModal } from "./preview-model";

export default function AllBlogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const authData = useAuthDataStore((state) => state.authData);


 

  // ************** Delete blogs API CALL *******************

  const getAllBlogs = () => {
    setLoading(true);
    API.blog
      .getAllBlogs(authData?.access_token)
      .then((response) => {
        if (response) {
          setBlogs(response);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
     getAllBlogs();
   }, [authData?.access_token]);

  const truncateDescription = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "....."
      : text;
  };


  return (
    <main className="container mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Link
            href={"/dashboard/blogs"}
            className="bg-white p-2 border rounded-md"
          >
            <Image
              src={"/assets/images/back-icon.svg"}
              className="w-4 h-3"
              width={100}
              height={100}
              alt="back-icon"
            />
          </Link>
          <h1 className=" font-medium text-[#28262B]">Blogs list</h1>
        </div>
        <Link href="/dashboard/blogs/create-blog">
          <Button className="bg-[#41A3FF] text-sm px-4 hover:bg-[#41A3FF]/90">
            Create New Blog
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg  ">
        <Table className="table-fixed w-full">
          <TableHeader className="h-10 px-2 bg-[#F3F3F3] text-xs text-left align-middle font-medium">
            <TableRow>
              <TableHead className="border-l border-[#EAECF0] w-[30%]">
                Title
              </TableHead>
              <TableHead className="border-l border-[#EAECF0] w-[40%]">
                Short Description
              </TableHead>
              <TableHead className="border-l border-[#EAECF0] text-center w-[10%]">
                Image
              </TableHead>
              <TableHead className="border-l border-[#EAECF0] text-center w-[10%]">
                Author
              </TableHead>
              <TableHead className="border-l border-[#EAECF0] text-center w-[10%]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="w-full text-center py-4 text-gray-500"
                >
                  <div className="flex justify-center">
                    <Loader2 className="text-blue-500 animate-spin" />
                  </div>
                </TableCell>
              </TableRow>
            ) : blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <TableRow key={blog?._id}>
                  <TableCell className="font-medium text-[#667085] text-sm border-l border-[#EAECF0] w-[30%] truncate">
                    {blog?.title}
                  </TableCell>
                  <TableCell className="border-l text-sm text-[#667085] border-[#EAECF0] w-[40%] truncate">
                    {truncateDescription(blog?.meta_description, 20)}
                  </TableCell>
                  <TableCell className="border-l border-[#EAECF0] w-[10%] text-center">
                    <Image
                      src={blog?.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="w-20 h-12 object-cover rounded mx-auto"
                    />
                  </TableCell>
                  <TableCell className="text-sm text-[#667085] border-l border-[#EAECF0] w-[10%] text-center">
                    {blog?.author}
                  </TableCell>
                  <TableCell className="border-l border-[#EAECF0] w-[10%] text-center">
                    <div className="flex gap-1 justify-center">
                      <BlogPreviewModal blog={blog} />
                      <Button variant="ghost" className="bg-green-100" asChild>
                        <Link href={`/dashboard/blogs/edit/${blog?._id}`}>
                          <Pencil className="h-4 w-4 text-green-500" />
                        </Link>
                      </Button>
                      <DeleteBlog blog={blog} getAllBlogs={getAllBlogs} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="w-full py-4 text-gray-500">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src="/assets/images/empty-box.png"
                      width={60}
                      height={60}
                      alt="empty-box"
                    />
                    <p>No Blog found</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
