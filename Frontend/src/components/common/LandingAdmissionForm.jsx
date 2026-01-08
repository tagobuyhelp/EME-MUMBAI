"use client";
import React, { useMemo, useState } from "react";
import API from "@/api";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const admissionSchema = z.object({
  name: z
    .string()
    .min(3, "Please enter a valid full name")
    .regex(/^[A-Za-z]+(?: [A-Za-z]+)+$/, "Please enter a proper full name"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .refine(
      (email) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email),
      "Please enter a proper email address"
    ),
  mobile: z
    .string()
    .regex(/^(\+91-|\+91|0)?\d{10}$/, "Please enter valid mobile number"),
  //   course: z.string().optional(),
  course: z.string().min(1, "Please select a course"),
});

export default function LandingAdmissionForm(_this) {
  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");
  const [admissionResult, setAdmissionResult] = useState(true);
  const [formVisible, setFormVisible] = useState(true);
  const [admissiondata, setAdmissionData] = useState({
    name: "",
    email: "",
    mobile: "",
    // phone_number: "",
    course: _this.SelectCourses?.length > 0 ? "" : _this.Courses,
    email_sender: _this.email_sender,
  });

  const form = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: admissiondata,
  });

  const showValidationToast = (errors) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  // console.log("Admission Form Props:", _this.SelectCourses);
  // Capture UTM params and page URL
  const utmParams = useMemo(() => {
    if (typeof window === "undefined") return {};
    const url = new URL(window.location.href);
    return {
      utm_source: url.searchParams.get("utm_source") || null,
      utm_medium: url.searchParams.get("utm_medium") || null,
      utm_campaign: url.searchParams.get("utm_campaign") || null,
      utm_term: url.searchParams.get("utm_term") || null,
      utm_content: url.searchParams.get("utm_content") || null,
      page_url: url.origin + url.pathname,
    };
  }, []);

  // function validateEmail(email) {
  //     var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //     return emailRegex.test(email);
  // }

  // function validatePhone(phone) {
  //     var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
  //     return phoneRegex.test(phone);
  // }

  const downloadBrochure = () => {
    if (_this?.Brochure) {
      const link = document.createElement("a");
      link.href = _this?.Brochure;
      link.download = _this?.BrochureName || "Brochure.pdf";
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.click();
    } else {
      // toast.error('Brochure not available')
    }
  };

  const handleAdmissionDataSubmit = (data) => {
    setAdmissionData(data);
    // if (
    //     admissiondata.name === "" ||
    //     admissiondata.email === "" ||
    //     admissiondata.mobile === "" || (_this.SelectCourses?.length > 0  && admissiondata.course === "")
    // ) {
    //     return toast.error("All field are required!");
    // }
    // if (!validatePhone(admissiondata.mobile)) {
    //     return toast.error("Please enter valid mobile number.")
    // }
    // if (!validateEmail(admissiondata.email)) {
    //     return toast.error("Please enter valid email.")
    // }

    setFormVisible(false);
    API.admission
      .SendAdmissionData({
        // ...admissiondata,
        ...data,
        email_sender: _this.email_sender,
        ...utmParams,
      })
      .then((response) => {
        if (response) {
          // console.log(response);
          setAdmissionResult(true);
          if (_this.ctaType === "download") {
            setTimeout(() => {
              downloadBrochure();
            }, 2000);
          }
          // router.push('/thank-you');
          router.push(`${cleanPath}/thank-you`);
        } else if (!response) {
          console.log(response);
          setAdmissionResult(false);
        }
      })
      .finally(() => {
        // setAdmissionData({
        //   name: "",
        //   email: "",
        //   mobile: "",
        //   course: "",
        // });
        form.reset();
        setFormVisible(true);
        setAdmissionResult(true);
      });
  };
  return (
    <div className="w-[300px] min-h-[250px] lg:max-w-[300px] lg:min-h-[350px] px-2 md:px-4 py-2 md:py-3 flex flex-col rounded-2xl justify-center items-center gap-[14px] bg-[#ffffff]">
      <div className="w-full flex flex-col justify-start gap-[2px] border-l-4 border-[#0057E2] ">
        <div className="text-[#727272] pl-2 font-[500] text-[12px]">
          Enroll now !!
        </div>
        <div className="text-[#E87D1A] text-[13px] font-[600] pl-2">
          Enroll Today and Start Your Journey!
        </div>
      </div>
      {formVisible ? (
        <form
          // onSubmit={handleAdmissionDataSubmit}
          onSubmit={form.handleSubmit(
            handleAdmissionDataSubmit,
            showValidationToast
          )}
          className="w-full flex flex-col justify-start items-center gap-y-4 lg:gap-y-4.5"
        >
          <input
            type="text"
            placeholder="Enter full name"
            // value={admissiondata.name}
            // onChange={(e) => {
            //     setAdmissionData((prev) => ({
            //         ...prev,
            //         name: e.target.value,
            //     }));
            // }}
            {...form.register("name", {
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/[^a-zA-Z\s]/g, "") // only letters & space
                  .replace(/\s+/g, " ") // single space only
                  .trimStart(); // no leading space
              },
            })}
            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]   px-2 py-[6px] w-full     bg-[#ffffff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500
focus:ring-1 focus:ring-blue-500  transition-colors"
          />
          <input
            type="text"
            placeholder="Email Address"
            // value={admissiondata.email}
            // onChange={(e) => {
            //     setAdmissionData((prev) => ({
            //         ...prev,
            //         email: e.target.value,
            //     }));
            // }}
            {...form.register("email", {
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/\s/g, "") // remove spaces
                  .replace(/[A-Z]/g, (c) => c.toLowerCase()); // lowercase
              },
            })}
            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]    px-2 py-[6px] w-full     bg-[#ffffff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            // value={admissiondata.mobile}
            // onChange={(e) => {
            //     setAdmissionData((prev) => ({
            //         ...prev,
            //         mobile: e.target.value,
            //     }));
            // }}
            inputMode="numeric"
            maxLength={10}
            {...form.register("mobile", {
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/\D/g, "") // remove non-digits
                  .slice(0, 10); // limit to 10 digits
              },
            })}
            className="rounded-[4px] h-9 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] outline outline-1 outline-[#CED4DA]    px-2 py-[6px] w-full     bg-[#ffffff] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
          />
          {(_this.Courses === "All Course" ||
            (_this.SelectCourses && _this.SelectCourses.length > 0)) && (
            <div className="w-full">
              {_this.SelectCourses ? (
                //  <Select
                //     value={admissiondata.course}
                //     onValueChange={(value) => {
                //         setAdmissionData((prev) => ({
                //             ...prev,
                //             course: value,
                //         }));
                //     }}
                // >
                //     <SelectTrigger className="w-full h-9">
                //         <SelectValue placeholder="Select Program" />
                //     </SelectTrigger>
                //     <SelectContent position="popper" side="bottom">
                //         {_this.SelectCourses?.map((course, index) => (
                //             <SelectItem key={index} value={course}>{course}</SelectItem>
                //         ))}
                //     </SelectContent>
                // </Select>
                <Controller
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full h-9">
                        <SelectValue placeholder="Select Program" />
                      </SelectTrigger>
                      <SelectContent position="popper" side="bottom">
                        {_this.SelectCourses.map((course, index) => (
                          <SelectItem key={index} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              ) : (
                ""
              )}
            </div>
          )}
          <div className="flex flex-col space-y-1">
            <div className="flex items-start space-x-1">
              <Checkbox id="terms" className="" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none"
              >
                Accept terms and conditions
              </Label>
            </div>
            <p className="text-sm text-muted-foreground pl-4">
              You agree to our{" "}
              <a
                href="/terms-and-condition"
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-[#fff] text-sm md:text-[15px] font-[600] bg-[#0057E2] hover:bg-[#0057E2]/90 transition-colors rounded-[24px] px-[40px] py-2 md:py-2.5 cursor-pointer"
          >
            Apply Now
          </button>
        </form>
      ) : (
        <div>
          {admissionResult ? (
            <div className="flex flex-col justify-center items-center h-full">
              <Image
                src="/assets/images/AnimationSuccess.gif"
                width={500}
                height={100}
                alt="Success"
              />
              <p className="text-black">Thank You</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full">
              <Image
                src="https://res.cloudinary.com/dcvkhy83l/image/upload/v1718969899/EME%20Academy/Images/x9jvjayk0djbexwgefhp.gif"
                width={500}
                height={100}
                alt="Error"
                className="w-[100px]"
              />
              <p>Something went wrong</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
