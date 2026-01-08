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
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const blogAdmissionSchema = z.object({
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

export default function BlogAdmissionForm(_this) {
  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");
  const [admissionResult, setAdmissionResult] = useState(true);
  const [formVisible, setFormVisible] = useState(true);
  const [admissiondata, setAdmissionData] = useState({
    name: "",
    email: "",
    // phone_number: "",
    mobile: "",
    course: _this.SelectCourses?.length > 0 ? "" : _this.Courses,
    email_sender: _this.email_sender,
  });

  const form = useForm({
    resolver: zodResolver(blogAdmissionSchema),
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
  //   //Validates the email address
  //   var emailRegex =
  //     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   return emailRegex.test(email);
  // }

  // function validatePhone(phone) {
  //   //Validates the phone number
  //   var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
  //   return phoneRegex.test(phone);
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
    //   admissiondata.name === "" ||
    //   admissiondata.email === "" ||
    //   admissiondata.mobile === "" ||
    //   admissiondata.course === "" ||
    //   admissiondata.mobile === "" ||
    //   (_this.SelectCourses?.length > 0 && admissiondata.course === "")
    // ) {
    //   return toast.error("All field are required!", {
    //     duration: 2000,
    //   });
    // }
    // if (!validatePhone(admissiondata.mobile)) {
    //   return toast.error("Please enter valid mobile number.");
    // }
    // if (!validateEmail(admissiondata.email)) {
    //   return toast.error("Please enter valid email.");
    // }

    setFormVisible(false);
    API.admission
      .SendAdmissionData({
        ...data,
        // ...admissiondata,
        email_sender: _this.email_sender,
        ...utmParams,
      })
      .then((response) => {
        if (response) {
          // console.log(response);
          setAdmissionResult(true);
          // if (_this.ctaType === "download") {
          setTimeout(() => {
            downloadBrochure();
          }, 2000);
          // }
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
    <div className="min-w-[300px]:w-[280px] w-[320px] sm:w-[350px] lg:w-[280px] min-h-[250px] px-3 py-3 sm:px-4  sm:py-5 flex flex-col bg-[url('/assets/images/SAP_Course/common/CareerCall.svg')] bg-cover bg-center rounded-2xl justify-start items-center">
      <div className="w-full border rounded-[8px] bg-[#ffffff]">
        <div className="flex flex-col  text-[14px] font-[600] text-[#232D63]  px-4 pt-2 text-start leading-4">
          Get in Touch
          <p className="text-[12px] text-[#2251FF] font-[500]">
            Talk to Our Career Expert
          </p>
        </div>

        {formVisible ? (
          <form
            // onSubmit={handleAdmissionDataSubmit}
            onSubmit={form.handleSubmit(
              handleAdmissionDataSubmit,
              showValidationToast
            )}
            className="w-full flex flex-col justify-start items-center gap-y-2 px-4 py-2"
          >
            <input
              type="text"
              placeholder="Name"
              // value={admissiondata.name}
              // onChange={(e) => {
              //   setAdmissionData((prev) => ({
              //     ...prev,
              //     name: e.target.value,
              //   }));
              // }}
              {...form.register("name", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/[^a-zA-Z\s]/g, "") // only letters & space
                    .replace(/\s+/g, " ") // single space only
                    .trimStart(); // no leading space
                },
              })}
              className="rounded-[4px] h-9 text-[#000] border-[0.4px] border-[#F3F3F3] bg-[#F7F7F7]   px-2 py-[6px] w-full  placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
            />
            <input
              type="text"
              placeholder="Email Address"
              // value={admissiondata.email}
              // onChange={(e) => {
              //   setAdmissionData((prev) => ({
              //     ...prev,
              //     email: e.target.value,
              //   }));
              // }}
              {...form.register("email", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\s/g, "") // remove spaces
                    .replace(/[A-Z]/g, (c) => c.toLowerCase()); // lowercase
                },
              })}
              className="rounded-[4px] h-9 text-[#000] border-[0.4px] border-[#F3F3F3]  px-2 py-[6px] w-full  bg-[#F7F7F7] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              // value={admissiondata.mobile}
              // onChange={(e) => {
              //   setAdmissionData((prev) => ({
              //     ...prev,
              //     mobile: e.target.value,
              //   }));
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
              className="rounded-[4px] h-9 border-[0.4px] border-[#F3F3F3] text-[#000]  px-2 py-[6px] w-full bg-[#F7F7F7] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors"
            />
            {(_this.Courses === "All Course" ||
              (_this.SelectCourses && _this.SelectCourses.length > 0)) && (
              <div className="w-full">
                {_this.SelectCourses ? (
                  // <Select
                  //   value={admissiondata.course}
                  //   onValueChange={(value) => {
                  //     setAdmissionData((prev) => ({
                  //       ...prev,
                  //       course: value,
                  //     }));
                  //   }}
                  // >
                  //   <SelectTrigger className="rounded-[4px] h-9 border-[0.4px] border-[#F3F3F3] text-[#000]  px-2 py-[6px] w-full bg-[#F7F7F7] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors">
                  //     <SelectValue placeholder="Select Program" />
                  //   </SelectTrigger>
                  //   <SelectContent position="popper" side="bottom">
                  //     {_this.SelectCourses?.map((course, index) => (
                  //       <SelectItem key={index} value={course}>
                  //         {course}
                  //       </SelectItem>
                  //     ))}
                  //   </SelectContent>
                  // </Select>
                  <Controller
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="rounded-[4px] h-9 border-[0.4px] border-[#F3F3F3] text-[#000]  px-2 py-[6px] w-full bg-[#F7F7F7] placeholder:text-[#666] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400]  focus:outline-none focus:placeholder:text-blue-500  focus:ring-1 focus:ring-blue-500  transition-colors">
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
            <button
              type="submit"
              className="w-full text-[#fff] text-[15px] font-[700] bg-[#00A2E7] hover:bg-[#00A2E7]/90 transition-colors rounded-md px-[40px] py-2"
            >
              Submit
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
                <p className="text-black">Message sent successfully</p>
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
      <div className="w-full text-[#fff] text-[14px] lg:text-[16px] font-[700] flex flex-col gap-2 mt-2">
        100% Placement support program
        <ul className="text-[#fff] text-[12px] lg:text-[14px] font-[400] flex flex-col gap-1">
          <li className="flex items-center gap-2">
            <Image
              src="/assets/images/blog/tickicon.svg"
              width={16}
              height={16}
              alt="Tick_icon"
            />{" "}
            5000+ placed
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/images/blog/tickicon.svg"
              width={16}
              height={16}
              alt="Tick_icon"
            />{" "}
            180+ hiring partners
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/images/blog/tickicon.svg"
              width={16}
              height={16}
              alt="Tick_icon"
            />{" "}
            EMI options available
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/images/blog/tickicon.svg"
              width={16}
              height={16}
              alt="Tick_icon"
            />{" "}
            Highest CTC Upto 10 LPA
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/images/blog/tickicon.svg"
              width={16}
              height={16}
              alt="Tick_icon"
            />{" "}
            Hybrid Mode Class
          </li>
        </ul>
      </div>
    </div>
  );
}
