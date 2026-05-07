"use client";
import React, { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import API from "@/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Handshake, PhoneCall, ShieldCheck } from "lucide-react";

const schema = z.object({
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
  mobile: z.string().regex(/^(\+91-|\+91|0)?\d{10}$/, "Please enter valid mobile number"),
  course: z.string().min(1, "Please select a program"),
  timing: z.string().min(1, "Please select when you want to start"),
});

export default function DMFinalSupportSection({ _this }) {
  const router = useRouter();
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");
  const [submitting, setSubmitting] = useState(false);

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

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      course: "",
      timing: "",
    },
  });

  const showValidationToast = (errors) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) toast.error(firstError.message);
  };

  const onSubmit = async (data) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const email_sender = _this?.email_sender || "ALL";
      await API.admission.SendAdmissionData({
        ...data,
        email_sender,
        ...utmParams,
      });
      router.push(`${cleanPath}/thank-you`);
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      form.reset();
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#0B1B44] via-[#0B1636] to-[#0B1220] text-white py-12 md:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-[22px] md:text-[40px] font-black leading-tight">
            One Step — And Your Life Can{" "}
            <span className="text-[#E87D1A]">Get Better</span>
          </h2>
          <p className="text-white/80 text-[12px] md:text-[14px] font-medium max-w-[920px]">
            You are in the right place. We reached out because we understand where you are — and you already want to see yourself somewhere better. So don&apos;t hold back.
          </p>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-7">
            <div className="text-[12px] md:text-[13px] font-semibold text-white/80 tracking-wide">
              {"Don't feel uncomfortable — this one step can make your life better. We reached out to you because we understand where you are. And you already want to see yourself in the right place — so don't hold back."}
            </div>
            <div className="mt-4 text-[12px] md:text-[13px] font-semibold text-white/75 leading-relaxed">
              Rest assured. We will support you throughout your career journey. We may be meeting you for the first time — but ask the people who have already done this course with us.{" "}
              <span className="text-[#E87D1A] font-black">They can&apos;t all be wrong.</span>
            </div>
            <div className="mt-4 text-[12px] md:text-[13px] font-semibold text-white/75 leading-relaxed">
              No one in Mumbai will give you a better option — whether you are a parent wanting to set your child&apos;s career, or a graduate looking for the right direction.
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E87D1A] text-[#0B1220] flex items-center justify-center shrink-0">
                <Handshake className="h-5 w-5" />
              </div>
              <div className="text-left leading-tight">
                <div className="font-black text-[13px] md:text-[14px]">EME Academy Team</div>
                <div className="text-white/70 text-[11px] md:text-[12px] font-semibold">
                  Mumbai&apos;s #1 Career Support Institute
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white text-[#0B1220] p-5 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E9FFF2] text-[#0A7A33] px-3 py-1 text-[10px] font-black">
              <ShieldCheck className="h-4 w-4" />
              You are not alone — many people start right here
            </div>

            <div className="mt-3 text-[#232D63] text-[18px] md:text-[22px] font-black leading-tight">
              Rest Easy — We Are With You
            </div>
            <p className="mt-2 text-[#4B4B4B] text-[12px] md:text-[13px] font-medium leading-relaxed">
              Fill the form — our team will connect with you, understand your situation, and guide you to the best option. No pressure. No rush.
            </p>

            <form
              onSubmit={form.handleSubmit(onSubmit, showValidationToast)}
              className="mt-5 flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Enter full name"
                {...form.register("name", {
                  onChange: (e) => {
                    e.target.value = e.target.value
                      .replace(/[^a-zA-Z\s]/g, "")
                      .replace(/\s+/g, " ")
                      .trimStart();
                  },
                })}
                className="w-full h-10 rounded-lg border border-[#E6ECF2] bg-[#F8FAFC] px-3 text-[12px] md:text-[13px] font-medium outline-none focus:ring-2 focus:ring-[#0057E2]/30"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                inputMode="numeric"
                maxLength={10}
                {...form.register("mobile", {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  },
                })}
                className="w-full h-10 rounded-lg border border-[#E6ECF2] bg-[#F8FAFC] px-3 text-[12px] md:text-[13px] font-medium outline-none focus:ring-2 focus:ring-[#0057E2]/30"
              />
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
                className="w-full h-10 rounded-lg border border-[#E6ECF2] bg-[#F8FAFC] px-3 text-[12px] md:text-[13px] font-medium outline-none focus:ring-2 focus:ring-[#0057E2]/30"
              />

              <Controller
                control={form.control}
                name="course"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-10 rounded-lg border border-[#E6ECF2] bg-[#F8FAFC] text-[12px] md:text-[13px]">
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent position="popper" side="bottom">
                      <SelectItem value="Advanced Digital Marketing (Facebook & Google Ads) — ₹30,000">
                        Advanced Digital Marketing (Facebook & Google Ads) — ₹30,000
                      </SelectItem>
                      <SelectItem value="Master Digital Marketing with AI — ₹35,000">
                        Master Digital Marketing with AI — ₹35,000
                      </SelectItem>
                      <SelectItem value="Both — Tell me more">Both — Tell me more</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <Controller
                control={form.control}
                name="timing"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full h-10 rounded-lg border border-[#E6ECF2] bg-[#F8FAFC] text-[12px] md:text-[13px]">
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent position="popper" side="bottom">
                      <SelectItem value="Immediately">Immediately</SelectItem>
                      <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                      <SelectItem value="2–3 months">2–3 months</SelectItem>
                      <SelectItem value="Just exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 h-11 rounded-xl bg-[#0B2B66] hover:bg-[#08224F] text-white text-[12px] md:text-[13px] font-black disabled:opacity-60"
              >
                Yes, I Want to Start →
              </button>
            </form>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] md:text-[12px] font-semibold text-[#4B4B4B]">
              <PhoneCall className="h-4 w-4 text-[#E87D1A]" />
              <span>Prefer to talk directly? Call:</span>
              <a href="tel:9831284098" className="text-[#0057E2] font-black">
                9831284098
              </a>
              <span>·</span>
              <a
                href="https://wa.me/919831284098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0057E2] font-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

