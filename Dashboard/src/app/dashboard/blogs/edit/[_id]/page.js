"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImagePlus, Eye, Loader2 } from "lucide-react";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RichTextEditor } from "./rich-text-editor";
import { BlogPreviewModal } from "./preview-modal";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";


const EditBlogPost = () => {
  const router = useRouter();
  const authData = useAuthDataStore((state) => state.authData);
  const params = useParams();
  const _id = params._id;
  const [imagePreview, setImagePreview] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    url: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    short_description: "",
    main_content: "",
    image_file: null,
  });
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getPostDetails = async () => {
      API.blog
        .getBlogDetails({ _id })
        .then((response) => {
          if (response) {
            setPostData(response);
            setFormData({
              title: response.title,
              author: response.author,
              url: response.url,
              meta_title: response.meta_title,
              meta_description: response.meta_description,
              meta_keywords: response.meta_keywords,
              short_description: response.short_description,
              main_content: response.main_content,
              // image_file: response.image,
            });
          }
        })
        .finally(() => {});
    };

    getPostDetails();
  }, [_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        toast.error("Image size should not exceed 500 KB.");
        return;
      }
      setFormData((prevState) => ({
        ...prevState,
        image_file: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      url: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      short_description: "",
      main_content: "",
      image_file: null,
    });
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    setIsSubmitting(true);
    API.blog
      .updateBlog(authData?.access_token, data, _id)
      .then((response) => {
        if (response) {
          toast.success("Blog updated successfully!");
          resetForm();
          router.push("/dashboard/blogs");
        }
      })
      .finally(setIsSubmitting(false));
  };

  return (
    <>
      <Card className="w-full mx-auto shadow-none border bg-[#FBFBFB]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b py-3">
          <CardTitle className="text-[#18181B] text-base font-semibold flex items-center gap-2">
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
            Edit Blog Post
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPreviewOpen(true)}
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image_file">Featured Image*</Label>
              <div className="flex items-center gap-4">
                <div className="relative w-full h-40 border-2 border-dashed rounded-lg flex flex-col  gap-y-4 items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      width={200}
                      height={200}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <ImagePlus className="w-10 h-10 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Drag and drop or click to upload
                        <br />
                        Recommended size: 500 KB
                      </div>
                    </>
                  )}

                  <input
                    type="file"
                    id="image_file"
                    name="image_file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <Label htmlFor="title" className="text-[#4A4A4B]">
                Title*
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter blog post title"
                value={formData.title}
                className="h-11"
                onChange={handleInputChange}
              />
            </div>

            {/* Author */}
            <div className="space-y-1">
              <Label htmlFor="author" className="text-[#4A4A4B]">
                Author*
              </Label>
              <Input
                id="author"
                name="author"
                placeholder="Enter author name"
                className="h-11"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            {/* Url */}
            <div className="space-y-1">
              <Label htmlFor="author" className="text-[#4A4A4B]">
                Url*
              </Label>
              <Input
                id="url"
                name="url"
                placeholder="Enter your url"
                className="h-11"
                value={formData.url}
                onChange={handleInputChange}
              />
            </div>

            {/* Meta Title */}
            <div className="space-y-1">
              <Label htmlFor="meta_title" className="text-[#4A4A4B]">
                Meta Title*
              </Label>
              <Input
                id="meta_title"
                name="meta_title"
                placeholder="Enter SEO meta title"
                className="h-11"
                value={formData.meta_title}
                onChange={handleInputChange}
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-1">
              <Label htmlFor="meta_description" className="text-[#4A4A4B]">
                Meta Description*
              </Label>
              <Textarea
                id="meta_description"
                name="meta_description"
                placeholder="Enter SEO meta description"
                className="h-11"
                value={formData.meta_description}
                onChange={handleInputChange}
              />
            </div>

            {/* Meta Keywords */}
            <div className="space-y-1">
              <Label htmlFor="meta_description" className="text-[#4A4A4B]">
                Meta Keywords*
              </Label>
              <Textarea
                id="meta_keywords"
                name="meta_keywords"
                placeholder="Enter SEO meta keywords"
                className="h-11"
                value={formData.meta_keywords}
                onChange={handleInputChange}
              />
            </div>

            {/* Short Description */}
            <div className="space-y-1">
              <Label htmlFor="short_description" className="text-[#4A4A4B]">
                Short Description*
              </Label>
              <Textarea
                id="short_description"
                name="short_description"
                placeholder="Enter a brief description of the blog post"
                className="h-11"
                value={formData.short_description}
                onChange={handleInputChange}
              />
            </div>

            {/* Main Content */}
            <div className="space-y-1">
              <Label htmlFor="main_content" className="text-[#4A4A4B]">
                Main Content*
              </Label>
              <RichTextEditor
                name="main_content"
                initialContent={formData.main_content}
                onChange={(content) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    main_content: content,
                  }))
                }
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#41A3FF] text-sm px-4 hover:bg-[#41A3FF]/90 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  "Edit Blog Post"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <BlogPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={formData.title}
        author={formData.author}
        shortDescription={formData.short_description}
        content={formData.main_content}
        imageUrl={imagePreview}
      />
    </>
  );
};

export default EditBlogPost;
