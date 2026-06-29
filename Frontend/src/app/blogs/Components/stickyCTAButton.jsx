

"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import LandingAdmissionForm from "@/components/common/LandingAdmissionForm";

export default function StickyCTAButton({
  Courses,
  email_sender,
  SelectCourses,
  Brochure,
  BrochureName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  return (
    <div className="fixed md:hidden left-0 bottom-0 z-[999] w-full flex justify-center items-center">
      <div className="border rounded-t-[16px] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center  px-4 shadow-lg w-full justify-evenly">
        {/* Phone CTA */}
        <a
          href="tel:+918207205867"
          className="relative flex items-center justify-center p-2"
        >
          <div className="absolute w-10 h-10 bg-blue-500 opacity-40 rounded-full animate-ping"></div>
          <Image
            className="w-[20px] h-[20px] animate-zoom"
            width={400}
            height={400}
            src="/assets/images/PhoneCTA.svg"
            alt="Phone CTA"
            unoptimized
          />
        </a>

        {/* Vertical Divider */}
        <div className="border-l-2 border-white h-8 mx-1" />

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/+918207205867"
          target="_blank"
          className="relative flex items-center justify-center p-2"
        >
          <div className="absolute w-10 h-10 bg-green-500 opacity-40 rounded-full animate-ping"></div>
          <Image
            className="w-[34px] h-[34px] animate-zoom"
            width={400}
            height={400}
            src="/assets/images/icons8-whatsapp.svg"
            alt="WhatsApp icon"
            unoptimized
          />
        </a>

        {/* Vertical Divider */}
        <div className="border-l-2 border-white h-8 mx-1" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="flex items-center bg-transparent hover:bg-transparent gap-2 text-white text-base font-medium px-4 py-2 rounded-lg transition-all"
            >
              Apply Now
            </Button>
          </DialogTrigger>
          <DialogContent className="fixed w-fit top-[50%] rounded-lg">
            <LandingAdmissionForm {..._this} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
