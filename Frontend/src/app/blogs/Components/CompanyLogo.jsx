import CTAButton from "@/components/common/CtaButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function CompanyLogo({ _this }) {
  return (
    <>
      <div className="flex flex-col gap-2 text-[14px]  bg-[#F0F3F8] rounded-[14px]">
        <div className="px-4 text-[#232D63] text-center py-2 text-[13px] md:text-[15px] font-[700]">
          Our Students are Currently Working In
        </div>
        <Marquee autoFill className=" px-4 pb-2  gap-5">
          <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-8  mx-4 h-[50px]">
            <Image
              className=""
              width={40}
              height={40}
              src="/assets/images/ibm.png"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4 h-[50px]">
            <Image
              className=""
              width={80}
              height={80}
              src="/assets/images/TcsLogo.svg"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-8 mx-4 h-[50px]">
            <Image
              className=""
              width={60}
              height={60}
              src="/assets/images/genpact.png"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-8 mx-4 h-[50px]">
            <Image
              className=""
              width={50}
              height={50}
              src="/assets/icons/companies/itcInfo.png"
              alt="Full Stack Development"
            />
          </Card>

          <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4 h-[50px]">
            <Image
              className=""
              width={80}
              height={80}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/capgemini.png"
              alt="Full Stack Development"
            />
          </Card>
        </Marquee>
      </div>
      <CTAButton
        name="Enquire Now"
        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
        _this={_this}
      />
    </>
  );
}
