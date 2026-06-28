"use client";
import React, { useMemo, useState } from "react";
import API from "@/api";
import Image from "next/image";
import { motion } from "framer-motion";
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
import { User, Mail, Phone, BookOpen, Send } from "lucide-react";

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
});

export default function PremiumLandingForm(_this) {
  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");
  const [admissionResult, setAdmissionResult] = useState(true);
  const [formVisible, setFormVisible] = useState(true);
  const [admissiondata, setAdmissionData] = useState({
    name: "",
    email: "",
    mobile: "",
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

  const downloadBrochure = () => {
    if (_this?.Brochure) {
      const link = document.createElement("a");
      link.href = _this?.Brochure;
      link.download = _this?.BrochureName || "Brochure.pdf";
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.click();
    }
  };

  const handleAdmissionDataSubmit = (data) => {
    setAdmissionData(data);

    setFormVisible(false);
    API.admission
      .SendAdmissionData({
        ...data,
        course: _this.Courses,
        email_sender: _this.email_sender,
        ...utmParams,
      })
      .then((response) => {
        if (response) {
          setAdmissionResult(true);
          if (_this.ctaType === "download") {
            setTimeout(() => {
              downloadBrochure();
            }, 2000);
          }
          router.push(`${cleanPath}/thank-you`);
        } else if (!response) {
          setAdmissionResult(false);
        }
      })
      .finally(() => {
        form.reset();
        setFormVisible(true);
        setAdmissionResult(true);
      });
  };

  return (
    <div className="w-[320px] sm:w-[380px] bg-white rounded-3xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden shadow-2xl border border-slate-100">
      {/* Premium Header Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#2E5BFF]" />
      
      <div className="flex flex-col gap-3 mt-1">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-[#00A2E7]/20">
              <Image 
                src="/assets/images/influencer_avatar.png" 
                alt="Career Expert" 
                width={56} 
                height={56}
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col bg-[#F4FBFE] px-3.5 py-2.5 rounded-2xl rounded-tl-sm border border-[#00A2E7]/10">
            <span className="text-[10px] font-bold text-[#00A2E7] leading-none mb-1 uppercase tracking-wider">Career Expert</span>
            <motion.span 
              animate={{ 
                y: [0, -2, 0],
                color: ["#232D63", "#00A2E7", "#232D63"]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[13px] font-black leading-tight inline-block"
            >
              Hi! Ready to boost your career?
            </motion.span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 mt-2">
          <h3 className="text-[22px] font-black text-[#232D63] leading-tight">
            Book Free Counselling
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Fill the form below and I'll get back to you shortly.
          </p>
        </div>
      </div>

      {formVisible ? (
        <form
          onSubmit={form.handleSubmit(handleAdmissionDataSubmit, showValidationToast)}
          className="flex flex-col gap-4"
        >
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              {...form.register("name", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/[^a-zA-Z\s]/g, "")
                    .replace(/\s+/g, " ")
                    .trimStart();
                },
              })}
              className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A2E7]/50 focus:border-[#00A2E7] transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Email Address"
              {...form.register("email", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\s/g, "")
                    .replace(/[A-Z]/g, (c) => c.toLowerCase());
                },
              })}
              className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A2E7]/50 focus:border-[#00A2E7] transition-all"
            />
          </div>

          {/* Mobile Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              inputMode="numeric"
              maxLength={10}
              {...form.register("mobile", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                },
              })}
              className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A2E7]/50 focus:border-[#00A2E7] transition-all"
            />
          </div>


          {/* Terms & Conditions */}
          <div className="flex flex-col space-y-1.5 mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-0.5 border-slate-300 data-[state=checked]:bg-[#00A2E7] data-[state=checked]:border-[#00A2E7]" />
              <Label htmlFor="terms" className="text-xs font-medium leading-tight text-slate-600">
                I accept the terms and conditions and privacy policy.
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#2E5BFF] hover:bg-[#1C46D1] text-white font-bold py-3.5 rounded-xl shadow-[0_8px_20px_rgba(46,91,255,0.15)] transition-all flex items-center justify-center gap-2"
          >
            Submit Application <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-6">
          {admissionResult ? (
            <>
              <Image
                src="/assets/images/AnimationSuccess.gif"
                width={120}
                height={120}
                alt="Success"
                className="mb-4"
              />
              <h4 className="text-xl font-bold text-emerald-600">Thank You!</h4>
              <p className="text-sm text-slate-500 text-center mt-2">
                We will get back to you shortly.
              </p>
            </>
          ) : (
            <>
              <Image
                src="https://res.cloudinary.com/dcvkhy83l/image/upload/v1718969899/EME%20Academy/Images/x9jvjayk0djbexwgefhp.gif"
                width={120}
                height={120}
                alt="Error"
                className="mb-4"
              />
              <h4 className="text-xl font-bold text-rose-600">Oops!</h4>
              <p className="text-sm text-slate-500 text-center mt-2">
                Something went wrong. Please try again.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
