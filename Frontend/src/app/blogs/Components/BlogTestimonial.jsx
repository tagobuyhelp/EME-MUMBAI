import CTAButton from "@/components/common/CtaButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { alumniStudents } from "@/data/alumniStudentsData";

export default function BlogTestimonial({ _this }) {
  return (
    <div className="flex flex-col gap-2 text-[15px]  bg-[#F0F3F8] rounded-[14px]">
      <div className="mt-1.5 px-4 text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
        Our Successful Students
      </div>
      <p className="text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
        <strong>“Salary Ranges up to ₹40,000 per month.”</strong>
      </p>
      <Marquee autoFill className=" px-4 pb-2  gap-5">
        {alumniStudents.map((student) => (
          <Card
            key={student.id}
            className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-4 mx-4"
          >
            <Image
              className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
              width={50}
              height={50}
              src={student.img}
              alt={student.title}
            />
            <div className="text-[14px] font-[400] text-center">
              <p className="font-[600]">{student.title}</p>
            </div>
            {student.companyLogo && (
              <Image
                className="object-contain max-h-[35px] w-auto"
                width={80}
                height={40}
                src={student.companyLogo}
                alt={`${student.title} company logo`}
              />
            )}
          </Card>
        ))}
      </Marquee>

      <CTAButton
        name="Enquire Now"
        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
        _this={_this}
      />
    </div>
  );
}
