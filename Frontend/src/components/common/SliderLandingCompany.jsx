"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import ibm from "../../../public/assets/images/ibm.png";
import itc from "../../../public/assets/images/itc.png";
import concentrix from "../../../public/assets/images/concentrix.png";
import deloitte from "../../../public/assets/images/deloitte.png";
import infosys from "../../../public/assets/images/infosys.webp";

export default function SliderLandingCompany() {
  return (
    <div className=" w-full relative z-20">
      <h1 className="text-center font-semibold text-[#393939] text-xl ">
        Our students are working in
      </h1>
      <div className="w-full flex items-center justify-around flex-nowrap mx-auto overflow-hidden whitespace-nowrap flex-shrink-0 group py-10 space-x-8 md:space-x-16 ">
        <Marquee pauseOnHover autoFill>
          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F] rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className=" h-14 w-auto xl:w-auto xl:h-24  mx-[10px] lg:mx-[30px]  "
              width={500}
              height={500}
              src={deloitte}
              alt="deloitte LOGO"
            />
          </div>
          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F] rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className=" h-14 w-auto xl:w-32 xl:h-24 mx-[10px] lg:mx-[30px] "
              width={500}
              height={500}
              src={ibm}
              alt="IBM LOGO"
            />
          </div>
          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F]  rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className="h-14 w-auto  xl:h-24 mx-[10px] lg:mx-[30px] "
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/dabur.png"
              alt="Dabour LOGO"
            />
          </div>
          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F] rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className="h-14 w-auto xl:w-auto xl:h-24 mx-[10px] lg:mx-[30px] "
              width={500}
              height={500}
              src={infosys}
              alt="Infosys logo"
            />
          </div>

          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F] rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className=" h-14 w-auto xl:w-auto xl:h-24 mx-[10px] lg:mx-[30px] "
              width={500}
              height={500}
              src={itc}
              alt="ITC LOGO"
            />
          </div>

          <div className="px-10 py-5 bg-white  border-2 border-[#9F9F9F] rounded-md shadow-sm 2xl:shadow-lg shadow-[rgba(0,0,0,0.25)] mx-5">
            <Image
              className=" h-14 w-auto xl:w-auto xl:h-24 mx-[10px] lg:mx-[30px] "
              width={500}
              height={500}
              src={concentrix}
              alt="concentrix logo"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
