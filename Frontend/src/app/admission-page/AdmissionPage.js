"use client";

import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import MainAdmissionForm from "./MainAdmissionForm";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <main className="w-full flex flex-col items-center ">
      <AnotherHeader />

      <div className="w-full flex justify-center py-12 px-4 bg-white ">
        <div className="w-full max-w-4xl border border-gray-300 shadow-lg rounded-lg px-6 md:px-8 py-8">
          {/* HEADER */}
          <div className="w-full flex items-center justify-between mb-4 mt-0 md:mt-6">
            {/* LEFT LOGO */}
            <Image
              src="/assets/icons/EasternIndiaNoOneLogo.png"
              alt="Left Logo"
              width={110}
              height={110}
              className="object-contain w-16 h-16 md:w-auto md:h-20 object-contain"
            />

            {/* TITLE */}
            <h1 className="flex-1 text-[#00A2E7] font-700 text-lg md:text-[29px] font-bold uppercase text-center leading-[32px] md:leading-[40px] pr-2 md:pr-0">
              Admission Form
            </h1>

            {/* RIGHT LOGO */}
            <Image
              src="/assets/icons/EMEDEcadeOfExcellenceLogo.svg"
              alt="Right Logo"
              width={110}
              height={110}
              className="w-16 h-16 md:w-auto md:h-18 object-contain"
            />
          </div>

          <MainAdmissionForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
