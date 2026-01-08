"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import { useForm } from "react-hook-form";
import { getEncodedUserAgent } from "@/utilities";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function LoginForm() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const setAuthData = useAuthDataStore((state) => state.setAuthData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  // ****************************** Login Submit Form Api Call *************************
  const loginSubmit = async (data) => {
    setButtonLoading(true);
    const formData = {
      ...data,
      device: getEncodedUserAgent(),
    };
    API.auth
      .Login(formData)
      .then((response) => {
        if (response) {
          setAuthData(response);
          router.push("/dashboard");
          toast.success("Sign in Successfully");
        }
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(loginSubmit)}
      className={
        "w-full h-full flex flex-col items-center justify-center gap-6 "
      }
    >
      <div className="w-full flex flex-col items-center justify-center gap-0 text-center">
        <h1 className="text-2xl font-semibold text-[#202224]">Admin Login</h1>
        <p className="text-balance text-sm text-[#757575]">
          Please enter your email and password to continue
        </p>
      </div>
      <div className="w-full  flex flex-col items-center justify-center gap-y-5 pt-2 px-4">
        <div className="w-full max-w-sm  flex flex-col gap-y-2">
          <Label htmlFor="email" className="text-[#4A4A4B]">
            Enter Email*
          </Label>
          <div>
            <Input
              id="email"
              type="email"
              className="placeholder:text-xs h-11 placeholder:text-[#A6A6A6]"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="mt-1 text-[12px] text-meta-1 text-red-500 flex items-center gap-1">
                Email Id is required.
              </span>
            )}
          </div>
        </div>
        <div className="w-full max-w-sm  flex flex-col gap-y-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-[#4A4A4B]">
              Password*
            </Label>
            <Dialog>
              <DialogTrigger className="ml-auto text-xs text-[#0057E2]">Forgot your password?</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-base'>Forgot your password?</DialogTitle>
                  <DialogDescription className='text-sm'>
                
                      Connect with our technical team for assistance.
                  
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col w-full items-start relative ">
            <Input
              id="password"
              type={showPassword ? "password" : "text"}
              className="h-11 placeholder:text-xs placeholder:text-[#A6A6A6]"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            <div className="text-gray-600 absolute right-3 top-2.5 cursor-pointer">
              {showPassword ? (
                <Eye
                  onClick={handleClick}
                  className="w-5 text-[#C0C0C0] transition-all"
                />
              ) : (
                <EyeOff
                  onClick={handleClick}
                  className="w-5 text-[#C0C0C0] transition-all"
                />
              )}
            </div>
            {errors.password && (
              <span className="mt-1 text-[12px] text-meta-1 text-red-500 flex items-center gap-1">
                Password is required.
              </span>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#0057E2] rounded-full hover:bg-blue-600 transition-all max-w-sm h-11"
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
            "Log in"
          )}
        </Button>
      </div>
    </form>
  );
}
