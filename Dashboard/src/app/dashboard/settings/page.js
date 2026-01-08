"use client";
import API from "@/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAuthDataStore from "@/store/authStore";
import { Eye, EyeOff, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import EmailChange from "./email-change";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/app/components/common/Navbar";

export default function Setting() {
  const [showPassword, setShowPassword] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const authData = useAuthDataStore((state) => state.authData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  // ++++++++++ Passsword update api call ++++++++++

  const onUpdatePassword = (data) => {
    const formdata = {
      ...data,
      token: authData?.access_token,
    };
    setButtonLoading(true);
    API.auth
      .UpdatePassword(formdata)
      .then((response) => {
        if (response) {
          toast.success("Password updated.", {
            description: "Password changed successfully.",
          });
        }
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <main className="w-full h-full overflow-y-hidden flex flex-col ">
      <Navbar title={"Account Settings"} />

      <div className="w-full h-[calc(100%-50px)] flex bg-[#FBFBFB] flex-col gap-y-3 py-5 px-4 sm:px-8 overflow-y-scroll overscroll-y-contain eme-scroll">
        <div className="w-full flex items-center ">
          <div className="text-sm text-[#71717A]">
            <span className="text-sm font-medium text-[#101828] leading-7">
              Account -
            </span>{" "}
            Manage Your Account Settings
          </div>
        </div>

        <Tabs
          defaultValue="password"
          className="w-full  flex flex-col md:flex-row   bg-white rounded-lg border px-2 md:px-4 py-4 border-[#EEEEEE]  md:gap-4"
        >
          <TabsList className="md:w-[20%] bg-white flex flex-col justify-start rounded-none items-start gap-y-2 h-full md:border-r-2 md:pr-4">
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="email">Email Update</TabsTrigger>
          </TabsList>

          {/* Password Update */}
          <TabsContent className="md:w-[80%]" value="password">
            <Card className="w-full flex flex-col shadow-none border  bg-[#FBFBFB] py-2  md:py-4">
              <CardHeader className="py-2 border-b border-[#e4e4e796]">
                <CardTitle className="text-[#1E1E1E] text-base font-semibold  w-full  pb-2">
                  Change Password
                </CardTitle>
              </CardHeader>

              <CardContent className="w-full ">
                <form
                  className="w-full py-2 md:py-4 flex flex-col  gap-6"
                  onSubmit={handleSubmit(onUpdatePassword)}
                >
                  <div className="w-full max-w-sm  flex flex-col gap-y-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-[#4A4A4B]">
                        Old Password*
                      </Label>
                    </div>
                    <div className="flex flex-col w-full items-start relative ">
                      <Input
                        id="old_password"
                        type={showPassword ? "password" : "text"}
                        className="h-11 placeholder:text-sm placeholder:text-[#A6A6A6]"
                        placeholder="Enter your Password"
                        {...register("old_password", { required: true })}
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
                    </div>
                  </div>

                  <div className="w-full max-w-sm  flex flex-col gap-y-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-[#4A4A4B]">
                        New Password*
                      </Label>
                    </div>
                    <div className="flex flex-col w-full items-start relative ">
                      <Input
                        id="new_password"
                        type={showPassword ? "password" : "text"}
                        className="h-11 placeholder:text-sm placeholder:text-[#A6A6A6]"
                        placeholder="Enter your Password"
                        {...register("new_password", { required: true })}
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
                    </div>
                  </div>

                  <div className="w-full max-w-sm  flex flex-col gap-y-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-[#4A4A4B]">
                        Confirm Password*
                      </Label>
                    </div>
                    <div className="flex flex-col w-full items-start relative ">
                      <Input
                        id="confirm_password"
                        type={showPassword ? "password" : "text"}
                        className="h-11 placeholder:text-sm placeholder:text-[#A6A6A6]"
                        placeholder="Enter your Password"
                        {...register("confirm_password", { required: true })}
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
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-28 bg-[#41A3FF] rounded-[8px] hover:bg-blue-600 transition-all max-w-sm h-11"
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
                      "Update"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Email Update */}
          <TabsContent className="md:w-[80%]" value="email">
            <Card className="w-full flex flex-col shadow-none border  bg-[#FBFBFB]   py-4">
              <CardHeader className="py-2 border-b border-[#e4e4e796]">
                <CardTitle className="text-[#1E1E1E] text-base font-semibold  w-full ">
                  Change Email
                </CardTitle>
                <CardDescription>
                  Manage your account email address
                </CardDescription>
              </CardHeader>

              <CardContent className="w-full p-4 flex flex-col  gap-2 ">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Your current email</AlertTitle>
                  <AlertDescription className="text-muted-foreground">
                    This is the email address associated with your account. To
                    change it, click the edit button.
                  </AlertDescription>
                </Alert>
                <EmailChange authData={authData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
