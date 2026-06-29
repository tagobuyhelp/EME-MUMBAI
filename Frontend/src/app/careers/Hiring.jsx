import React from "react";
import placementco from "../../../public/assets/images/placement-co.svg";
import Image from "next/image";

const jobs = [
  {
    title: "Placement Coordinator",
    icon: placementco,
  },
  {
    title: "Graphic Designer",
    icon: placementco,
  },
  {
    title: "Career Counsellor",
    icon: placementco,
  },
];

export default function Hiring() {
  return (
    <div className=" py-10 px-4 text-center items-center justify-center max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-semibold text-[#4B4B4B]">
        We <span className="text-[#232D63] font-bold">Are Hiring</span>
      </h2>

      <div className="mt-8 flex flex-col md:flex-row justify-center md:gap-2 gap-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white bg-[url('/assets/images/Home/background3.png')] bg-top bg-no-repeat bg-contain w-[350px] md:w-[400px] md:h-[208px] rounded-[20px] pt-[30px] px-[20px] pb-[20px] border hover:shadow-lg transition "
          >
            <div className="text-4xl mb-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src={job.icon}
                alt={`${job.title} icon`}
                className="w-12 h-12 mx-auto transition-transform duration-300 hover:-translate-y-1 "
              />
            </div>

            <h3 className="text-lg font-medium text-[#323232] mb-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              {job.title}
            </h3>

            <a
              href="tel:+918207205867"
              className="bg-[#E9F8FF] text-[#0057E2] w-full h-[51px] py-[7px] rounded-[20px] text-sm font-medium hover:bg-blue-200 transition flex items-center justify-center md:mt-4 duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              View Job Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
