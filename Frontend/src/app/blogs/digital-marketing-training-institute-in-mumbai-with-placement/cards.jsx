import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";
import { useState } from "react";

export default function Cards({ cards, id, _this }) {
  
  // Find the specific card based on the passed id
  const card = cards.find((item) => item.id === id);

  if (!card) return null; // Return nothing if card not found

  return (
    <div className="w-full px-4 md:px-0">
      <div className="w-full bg-[url('/assets/images/blog/card_background.svg')] bg-fill bg-center h-auto md:h-[273px] flex flex-col md:flex-row items-center pt-4 sm:py-6 px-4 md:px-6 rounded-2xl lg:rounded-3xl">
        {/* Left Content */}
        <div className="text-white flex flex-col gap-3 w-full md:w-[70%] justify-start">
          <h2 className="text-[18px] md:text-[22px] font-bold text-left">
            {card.title}
          </h2>
          <ul className="text-[12px] md:text-[14px] text-white gap-2 grid grid-cols-1 md:grid-cols-2">
            {card.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2 justify-start">
                <Image src="/assets/images/blog/tickicon.svg" width={16} height={16} alt="Tick_icon" /> {item}
              </li>
            ))}
          </ul>
          <div className=" flex w-full">
            <CTAButton name="Apply Now"
              styleClasses="text-[#232D63] text-sm leading-5 bg-[#ffffff] !px-5 !py-2 rounded-md"
              _this={_this}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end ">
          <Image
            className="w-[250px] h-[200px] lg:w-[250px] lg:h-full"
            width={250}
            height={250}
            src={card.imageSrc}
            alt="Placement Program"
          />
        </div>
      </div>
    </div>
  );
}
