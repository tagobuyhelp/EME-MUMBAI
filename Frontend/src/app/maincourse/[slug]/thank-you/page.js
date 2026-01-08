"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  const logos = [
    "/assets/images/blog/republic.svg",
    "/assets/images/blog/dailyhunt.svg",
    "/assets/images/blog/klam.svg",
    "/assets/images/blog/abpnews 1.svg",
  ];

  return (
  <main className="w-full min-h-[100dvh] bg-[url('/assets/images/thank-you/thankYouBg.png')] bg-cover bg-center bg-no-repeat px-5 py-10 flex flex-col">
  
  {/* Top content */}
  <div className="flex flex-col items-center text-center gap-6 flex-grow h-full justify-center">
    
    <Image
      src="/assets/images/AnimationSuccess.gif"
      width={150}
      height={150}
      alt="successGif"
      className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
    />

    <h1 className="text-[#0057E2] font-extrabold leading-tight text-[32px] md:text-[60px]">
      Thank You for registering!!
    </h1>

    <div className="max-w-[90%] md:max-w-[70%]">
      <p className="text-black text-[18px] md:text-[24px] font-medium">
        Eastern <span className="text-[#E87D1A]">India’s No. 1</span> Professional Training Institute
      </p>
      <p className="text-black text-[16px] md:text-[19px] mt-3">
        We&apos;ll get back to you in the next 24 hours.
      </p>
    </div>

    <div className="flex gap-4 mt-4 flex-wrap justify-center">
      <button
        onClick={() => router.back()}
        className="text-[14px] md:text-[18px] font-semibold text-white bg-[#0057E2] px-4 md:px-6 py-2 rounded-md"
      >
        Back to Previous Page
      </button>

      <a
        href="https://wa.me/+919093926145"
        target="_blank"
        className="flex items-center gap-2 text-[#60D568] bg-white px-6 py-2 rounded-md border-2 border-[#0057E2]"
      >
        <Image
          width={36}
          height={36}
          src="/assets/images/icons8-whatsapp.svg"
          alt="WhatsApp"
          className="w-[24px] h-[24px] md:w-[34px] md:h-[34px]"
        />
        <span className="text-[14px] md:text-[20px] font-bold">WhatsApp</span>
      </a>
    </div>
  </div>

  {/* Bottom: Featured In */}
  <div className="mt-10">
    <div className="relative flex justify-center text-[22px] md:text-[26px] font-bold text-[#232D63]">
      Featured
      <span className="flex flex-col ml-2">
        <span>In</span>
        <Image
          src="/assets/images/Home/icons/StudentsLineVector.svg"
          alt="FeaturedIn"
          width={80}
          height={40}
          className="-ml-5"
        />
      </span>
    </div>

    <Marquee autoFill className="mt-4">
      {logos.map((logo, index) => (
        <Card key={index} className="h-[50px] md:h-[60px] rounded-xl border bg-white flex items-center justify-center mx-3 px-4">
          <Image
            src={logo}
            alt={`Logo-${index}`}
            width={120}
            height={60}
            className="object-contain"
          />
        </Card>
      ))}
    </Marquee>
  </div>
</main>

  );
}
