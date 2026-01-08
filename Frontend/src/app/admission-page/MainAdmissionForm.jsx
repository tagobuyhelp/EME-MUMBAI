"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import API from "@/api";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

function MainAdmissionForm() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [age, setAge] = useState(null);
  const [openCourseGroups, setOpenCourseGroups] = useState({});
  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        date_of_birth: null,
        age: "",
        gender: "",
        location: "",
        blood_group: "",
        contact_number: "",
        email: "",
        // nationality: "",
        permanent_address: "",
        course_name: "",
        course_fee: "",
        course_duration: "",
        guardian_name: "",
        guardian_contact: "",
        academic_qualification: "",
        terms: false,
      });
      setDateOfBirth(null);
      setAge(null);
    }
  }, [reset, isSubmitSuccessful]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    if (dateOfBirth) {
      const calculatedAge = calculateAge(dateOfBirth);
      setAge(calculatedAge);
      setValue("age", calculatedAge.toString());
    }
  }, [dateOfBirth, setValue]);

  const submitForm = async (data) => {
    setButtonLoading(true);
    try {
      const response = await API.admission.sendMainAdmissionFormData(data);

      if (response) {
        toast.success("Thank you for submiiting the form ");
        reset({
          name: "",
          date_of_birth: null,
          age: "",
          gender: "",
          location: "",
          blood_group: "",
          contact_number: "",
          email: "",
          // nationality: "",
          permanent_address: "",
          course_name: "",
          course_fee: "",
          course_duration: "",
          guardian_name: "",
          guardian_contact: "",
          academic_qualification: "",
          terms: false,
        });
        setDateOfBirth(null);
        setAge(null);
        console.log(response);
        localStorage.setItem("admissionFormData", JSON.stringify(response));
        router.push(`${cleanPath}/thank-you`);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setButtonLoading(false);
    }
  };

  // const allCourses = [
  //   "Not Sure Yet",
  //   "Data Analytics Course",
  //   "Sap Course",
  //   "Digital Marketing Course",
  //   "HR Management Course",
  //   "Web Development Course",
  //   "Data Science Course",
  //   "Graphics Designing Course",
  //   "Cyber Security Course",
  //   "Web Design Course(UI UX)",
  //   "Cloud Computing Course",
  //   "DevOps Course",
  //   "Power BI Course",
  //   "AI & ML Course",
  //   "Prompt Engineering with AI Course",
  //   "Entrepreneurship Course",
  //   "Mainframe Bootcamp Course",
  //   "Business Accounting Course",
  //   "Animation & VFX Course",
  // ];

  const allCourses = [
  {
    name: "Not Sure Yet",
  },
  {
    name: "Data Analytics Course",
  },
  {
    name: "Sap Course",
    subcourses: [
      "SAP ABAP",
      "SAP FICO",
      "SAP MM",
      "SAP SD",
      "SAP HCM",
      "SAP PP",
      "SAP Success Factor",
      "SAP Basis",
      "SAP Analytics",
    ],
  },
  {
    name: "Digital Marketing Course",
    subcourses: [
      "Advanced Digital Marketing (Facebook & Google Ads)",
      "Master Digital Marketing with AI",
    ],
  },
  {
    name: "HR Management Course",
  },
  {
    name: "Web Development Course",
    subcourses: [
      "Full Stack (MERN) Web Development Course",
      "Full Stack (MEAN) Web Development Course",
      "PHP & MySQL Development Intensive Course",
      "WordPress Development",
    ],
  },
  {
    name: "Data Science Course",
  },
  {
    name: "Graphics Designing Course",
    subcourses: [
      "Graphic Design",
      "Motion Graphic",
    ],
  },
  {
    name: "Cyber Security Course",
  },
  {
    name: "Web Design Course(UI UX)",
  },
  {
    name: "Cloud Computing Course",
  },
  {
    name: "DevOps Course",
  },
  {
    name: "Power BI Course",
  },
  {
    name: "AI & ML Course",
  },
  {
    name: "Prompt Engineering with AI Course",
  },
  {
    name: "Entrepreneurship Course",
  },
  {
    name: "Mainframe Bootcamp Course",
  },
  {
    name: "Business Accounting Course",
  },
  {
    name: "Animation & VFX Course",
  },
];

  
  const bloodGroups = [
    "Not Sure (Yet)",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  const genders = ["Male", "Female", "Others"];

  return (
    <form
      className="w-full flex flex-col gap-[20px] relative"
      onSubmit={handleSubmit(submitForm)}
    >
      {/* Top SVG */}
      <div className="absolute -top-28 md:-top-38 -mx-6 md:-mx-8 w-[calc(100%+48px)] md:w-[calc(100%+64px)] z-0">
        <Image
          src="/assets/icons/AdmissionFormLetterHeadTop.png"
          alt="Top Design"
          width={1800}
          height={200}
          className="w-full h-auto object-cover rounded-t-lg"
        />
      </div>
      {/* Watermark */}
      <div className="absolute flex w-full h-full justify-center items-center z-0">
        <Image
          src="/assets/icons/AdmissionPageWaterMark.svg"
          width={500}
          height={500}
          alt="Watermark"
          className="w-100 h-100 md:w-150 md:h-150 object-contain"
        />
      </div>

      <div className="w-full flex flex-col gap-y-2 z-10">
        <Label htmlFor="name" className="text-[#4A4A4B]">
          Applicant Name*
        </Label>
        <Input
          id="name"
          type="text"
          className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
          placeholder="Enter Applicant Name"
          {...register("name", { required: "Applicant Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="date_of_birth" className="text-[#4A4A4B]">
            Date of birth*
          </Label>
          <Controller
            name="date_of_birth"
            control={control}
            rules={{ required: "Date of birth is required" }}
            render={({ field }) => (
              <DatePicker
                startYear={1900}
                endYear={new Date().getFullYear()}
                onChange={(date) => {
                  setDateOfBirth(date);
                  field.onChange(date);
                }}
                value={field.value}
              />
            )}
          />
          {errors.date_of_birth && (
            <span className="text-red-500 text-sm">
              {errors.date_of_birth.message}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="age" className="text-[#4A4A4B]">
            Age
          </Label>
          <Input
            id="age"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Age"
            value={age !== null ? age.toString() : ""}
            readOnly
            {...register("age")}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="location" className="text-[#4A4A4B]">
            District / City*
          </Label>
          <Input
            id="location"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter district or city"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <span className="text-red-500 text-sm">
              {errors.location.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="gender" className="text-[#4A4A4B]">
            Gender*
          </Label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full h-11">
                  <SelectValue placeholder="Select Your Gender" />
                </SelectTrigger>
                <SelectContent>
                  {genders.map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.gender && (
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="blood_group" className="text-[#4A4A4B]">
            Blood Group*
          </Label>
          <Controller
            name="blood_group"
            control={control}
            rules={{ required: "Blood group is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full h-11">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.blood_group && (
            <span className="text-red-500 text-sm">
              {errors.blood_group.message}
            </span>
          )}
        </div>
        {/* <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="nationality" className="text-[#4A4A4B]">
            Nationality
          </Label>
          <Input
            id="nationality"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter your Nationality"
            {...register("nationality")}
          />
        </div> */}
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="contact_number" className="text-[#4A4A4B]">
            Contact Number*
          </Label>
          <Input
            id="contact_number"
            type="tel"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Your Contact No"
            {...register("contact_number", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit Contact Number.",
              },
            })}
          />
          {errors.contact_number && (
            <span className="text-red-500 text-sm">
              {errors.contact_number.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="email" className="text-[#4A4A4B]">
            Email ID*
          </Label>
          <Input
            id="email"
            type="email"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Email ID"
            {...register("email", {
              required: "Email ID is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid Email ID",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="w-full flex gap-2 flex-col z-10">
        <Label htmlFor="permanent_address" className="text-[#4A4A4B]">
          Permanent Address
        </Label>
        <textarea
          id="permanent_address"
          placeholder="Enter your address"
          className="rounded-[4px] h-20 shadow-[0px_1px_2px_0px_rgba(10,10,10,0.10)] text-[#000] border border-input bg-background px-2 py-[6px] w-full placeholder:text-[#A6A6A6] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:font-[400] focus:outline-none focus:placeholder:text-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          {...register("permanent_address")}
        ></textarea>
      </div>

      <div className="w-full flex flex-col gap-y-2 z-10">
        <Label htmlFor="course_name" className="text-[#4A4A4B]">
          Course Name*
        </Label>
        <Controller
          name="course_name"
          control={control}
          rules={{ required: "Course name is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full h-11">
                <SelectValue className="text-sm" placeholder="Select Courses" />
              </SelectTrigger>
              {/* <SelectContent>
                {allCourses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent> */}
              <SelectContent>
                {allCourses.map((course) => {
                  
                  if (typeof course === "string") {
                    return (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    );
                  }

                  const courseName = course.name;

                  if (course.subcourses && course.subcourses.length > 0) {
                    const isOpen = !!openCourseGroups[courseName];

                    return (
                      <div key={courseName} className="px-2 py-1">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenCourseGroups((s) => ({
                              ...s,
                              [courseName]: !s[courseName],
                            }))
                          }
                          className="w-full flex items-center justify-between text-sm font-medium text-[#111827] hover:bg-gray-50 py-1 rounded"
                        >
                          <span className="text-sm">{courseName}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="mt-1 pl-4 border-l border-gray-100">
                            {course.subcourses.map((sub) => (
                              <SelectItem key={`${courseName}-${sub}`} value={sub}>
                                {sub}
                              </SelectItem>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <SelectItem key={courseName} value={courseName}>
                      {courseName}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
        />
        {errors.course_name && (
          <span className="text-red-500 text-sm">
            {errors.course_name.message}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-[20px] z-10">
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="course_fee" className="text-[#4A4A4B]">
            Course Fee
          </Label>
          <Input
            id="course_fee"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Your Course Fee"
            {...register("course_fee")}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="course_duration" className="text-[#4A4A4B]">
            Course Duration
          </Label>
          <Input
            id="course_duration"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Course Duration"
            {...register("course_duration")}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="guardian_name" className="text-[#4A4A4B]">
            Guardian&apos;s Name*
          </Label>
          <Input
            id="guardian_name"
            type="text"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Guardian's Name"
            {...register("guardian_name", {
              required: "Guardian name is required",
            })}
          />
          {errors.guardian_name && (
            <span className="text-red-500 text-sm">
              {errors.guardian_name.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Label htmlFor="guardian_contact" className="text-[#4A4A4B]">
            Guardian Contact*
          </Label>
          <Input
            id="guardian_contact"
            type="tel"
            className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
            placeholder="Enter Guardian Contact Number"
            {...register("guardian_contact", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit Contact Number.",
              },
            })}
          />
          {errors.guardian_contact && (
            <span className="text-red-500 text-sm">
              {errors.guardian_contact.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-2 z-10">
        <Label htmlFor="academic_qualification" className="text-[#4A4A4B]">
          Academic Qualification
        </Label>
        <Input
          id="academic_qualification"
          type="text"
          className="placeholder:text-sm h-11 placeholder:text-[#A6A6A6]"
          placeholder="Enter Academic Qualification"
          {...register("academic_qualification")}
        />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center pb-0 md:pb-6 z-10">
        <div className="w-full ">
          <div className="gap-2 flex items-start md:items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 mt-1 md:mt-0"
              {...register("terms", {
                required: "You must agree to the Terms & Conditions",
              })}
            />
            <label
              htmlFor="terms"
              className="text-[#4A4A4B] text-sm font-medium leading-5"
            >
              Please agree to the
              <Link
                href="/terms-and-condition"
                className="text-blue-500 hover:underline"
              >
                {" "}
                Terms & Conditions Policy
              </Link>
              .
            </label>
          </div>
          {errors.terms && (
            <span className="text-red-500 text-sm">{errors.terms.message}</span>
          )}
        </div>

        <div className="flex items-center mt-6 md:mt-0">
          <Button
            className="bg-[#004CA3] py-2.5 px-20 rounded-md flex justify-center items-center text-white text-sm leading-4 font-medium hover:bg-[#004CA3]/90"
            type="submit"
            disabled={buttonLoading}
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
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute -bottom-8 -mx-6 md:-mx-8 w-[calc(100%+48px)] md:w-[calc(100%+64px)] z-0">
        <Image
          src="/assets/icons/AdmissionFormLetterHeadBottom.png"
          alt="Bottom Design"
          width={1800}
          height={200}
          className="w-full h-auto object-cover rounded-b-lg"
        />
      </div>
    </form>
  );
}

export default MainAdmissionForm;
