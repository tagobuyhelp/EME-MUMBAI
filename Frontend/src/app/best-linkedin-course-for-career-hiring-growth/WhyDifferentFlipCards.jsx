"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";

export default function WhyDifferentFlipCards({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = useCallback((idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }, []);

  const icons = ["inventory_2", "bolt", "task_alt", "trending_up"];
  const backgroundImages = [
    { src: "/assets/images/SAP_Course/common/cards/employee.svg", alt: "Deliverables" },
    { src: "/assets/images/SAP_Course/common/cards/assistance.svg", alt: "AI Engineered" },
    { src: "/assets/images/SAP_Course/common/cards/duration.svg", alt: "Practical Task" },
    { src: "/assets/images/SAP_Course/common/cards/student.svg", alt: "Beginner to Advanced" },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x pb-2">
      {(items || []).map((item, idx) => {
        const isFlipped = activeIndex === idx;
        const icon = icons[idx % icons.length];
        const bg = backgroundImages[idx % backgroundImages.length];

        return (
          <button
            key={item.title}
            type="button"
            onClick={() => handleToggle(idx)}
            aria-pressed={isFlipped}
            className="group relative h-56 w-full text-left [perspective:1200px] min-w-[280px] md:min-w-0 snap-start"
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-2xl border border-[#E6F3FA] bg-white shadow-sm p-6 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
                <Image
                  src={bg.src}
                  alt={bg.alt}
                  width={180}
                  height={180}
                  className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.12] select-none"
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="material-symbols-outlined text-[#0057E2] text-[28px] leading-none relative top-[1px]">
                    {icon}
                  </span>
                  <span className="text-xs font-bold text-[#667085] rounded-full border border-[#E6F3FA] px-2.5 py-1 bg-[#F4FBFE]">
                    Hover / Tap
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-[#232D63] text-[16px] font-extrabold leading-snug">
                    {item.title}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#BFD6FF] bg-[linear-gradient(135deg,#ffffff_0%,#F4FBFE_100%)] shadow-md p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col overflow-hidden">
                <Image
                  src={bg.src}
                  alt={bg.alt}
                  width={180}
                  height={180}
                  className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.16] select-none"
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="material-symbols-outlined text-[#E87D1A] text-[28px] leading-none relative top-[1px]">
                    info
                  </span>
                  <span className="text-xs font-bold text-[#232D63] rounded-full border border-[#E6F3FA] px-2.5 py-1 bg-white">
                    Details
                  </span>
                </div>
                <div className="relative z-10 mt-3 text-sm text-gray-600 leading-[22px]">
                  {item.desc}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
