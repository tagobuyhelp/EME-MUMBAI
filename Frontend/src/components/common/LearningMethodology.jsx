'use client';
import React from "react";
import { useState } from "react";
import CTAButton from "./CtaButton";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, PlayCircle, BookOpen, Award, Briefcase, Users, ClipboardCheck, ClipboardList, UserRound, Video } from "lucide-react";

 

export default function LearningMethodology ({ Courses, email_sender, Brochure, BrochureName, items, backgroundImage, variant }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);
    const _this = {
      isModalOpen,
      setIsModalOpen,
      Courses,
      email_sender,
      Brochure,
      BrochureName,
      ctaType,
      setCtaType,
    };

    const defaultItems = [
      "Live Practical Classes",
      "Free Study Materials",
      "Global Certifications",
      "15+ Portfolio Projects",
      "Dedicated Placement Cell",
      "Resume & Interview Preparation",
      "Theory+Practical Examination",
      "1:1 Mentoring",
      "Recorded Sessions & Doubt Clearing",
    ];

    const chooseIcon = (text) => {
      const t = (text || "").toLowerCase();
      if (t.includes("live")) return PlayCircle;
      if (t.includes("study") || t.includes("materials")) return BookOpen;
      if (t.includes("cert")) return Award;
      if (t.includes("portfolio")) return Briefcase;
      if (t.includes("placement")) return Users;
      if (t.includes("resume") || t.includes("interview")) return ClipboardCheck;
      if (t.includes("theory") || t.includes("exam")) return ClipboardList;
      if (t.includes("1:1") || t.includes("mentoring")) return UserRound;
      if (t.includes("recorded") || t.includes("doubt")) return Video;
      return CheckCircle2;
    };

    const listItems = ((items && items.length ? items : defaultItems).filter(Boolean)).map((label) => ({
      label,
      Icon: chooseIcon(label),
    }));
  const isCompact = variant === "compact";
  return (
    <section
      className={`w-full relative bg-cover bg-center text-white overflow-hidden ${isCompact ? "py-6 md:py-8" : "py-10 md:py-14"}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/75 via-[#0B1220]/55 to-[#0B1220]/80" />
      <div className="relative w-full max-w-[1200px] mx-auto px-4">
        {isCompact ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
            <div className="flex flex-col items-start text-left gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-[10px] md:text-xs font-black tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-[#00A2E7]" />
                Why Is This Course So Effective?
              </div>
              <h2 className="text-[20px] md:text-[28px] font-black leading-tight">
                Not Just Theory — Real Work Happens Here
              </h2>
              <p className="text-white/85 text-[12px] md:text-[14px] font-medium leading-relaxed max-w-[520px]">
                We run real campaigns in the classroom. Live projects. Learning from industry experts. By the time you finish — your portfolio is ready, and so are you.
              </p>
              <div className="pt-1">
                <CTAButton
                  name="Yes, I'm Ready — Enroll Now →"
                  styleClasses="h-10 md:h-11 px-8 md:px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-[12px] md:text-[14px] shadow-lg shadow-blue-900/30 border-none"
                  _this={_this}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-3 md:p-4">
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {listItems.map(({ label, Icon }, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div className="h-6 w-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-[#00A2E7]" />
                    </div>
                    <div className="text-[11px] md:text-[12px] font-bold leading-snug text-white">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col items-center text-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-1.5 text-[10px] md:text-xs font-black tracking-wide"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#00A2E7]" />
                Why Is This Course So Effective?
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-[22px] md:text-[34px] font-black leading-tight"
              >
                Not Just Theory — Real Work Happens Here
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/85 text-[12px] md:text-[14px] font-medium leading-relaxed max-w-[900px]"
              >
                We run real campaigns in the classroom. Live projects. Learning from industry experts. By the time you finish — your portfolio is ready, and so are you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="pt-1"
              >
                <CTAButton
                  name="Yes, I'm Ready — Enroll Now →"
                  styleClasses="h-11 px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-[12px] md:text-[14px] shadow-lg shadow-blue-900/30 border-none"
                  _this={_this}
                />
              </motion.div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3.5">
                {listItems.map(({ label, Icon }, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="h-7 w-7 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-[#00A2E7]" />
                    </div>
                    <div className="text-[12px] md:text-[13px] font-bold leading-snug text-white">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
