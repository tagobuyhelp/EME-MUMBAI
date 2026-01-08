/* eslint-disable react/prop-types */
import API from "@/api";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import useAuthDataStore from "@/store/authStore";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteBlog = ({ blog, getAllBlogs }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const authData = useAuthDataStore((state) => state.authData);

  const deleteBlog = () => {
    const data = {
      ...blog,
    };
    setTimeout(() => {
      API.blog
        .deleteBlog(authData?.access_token, data)
        .then((response) => {
          if (response) {
            toast.success("Post is deleted");
            getAllBlogs(authData?.access_token);
          }
        })
        .finally(() => {
          setButtonLoading(false);
        });
    }, 500);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className=" bg-red-100 px-2 rounded-sm">
          <Trash2 className="h-4 w-4 text-red-500" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-100 px-4 text-xs rounded-sm">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 px-4 text-xs rounded-sm"
              onClick={deleteBlog}
            >
              {buttonLoading ? (
                <div className="flex items-center gap-1">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading
                </div>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
