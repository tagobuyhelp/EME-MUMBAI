"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ModulesCarouselSection({ modules }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const modulesWithImages = useMemo(() => {
    const images = [
      { src: "/assets/images/linkedin/linkedin-profile-optimization-ai-positioning.webp", alt: "Module 01" },
      { src: "/assets/images/linkedin/linkedin-networking-connection-building-professional.webp", alt: "Module 02" },
      { src: "/assets/images/linkedin/linkedin-content-strategy-ai-branding-creation.webp", alt: "Module 03" },
      { src: "/assets/images/linkedin/linkedin-analytics-growth-hacking-dashboard.webp", alt: "Module 04" },
      { src: "/assets/images/linkedin/linkedin-lead-generation-sales-funnel-conversion.webp", alt: "Module 05" },
      { src: "/assets/images/linkedin/linkedin-ai-automation-monetization-strategy.webp", alt: "Module 06" },
    ];

    return (modules || []).map((m, idx) => ({
      ...m,
      imageSrc: images[idx]?.src,
      imageAlt: images[idx]?.alt || m?.title || "Module",
    }));
  }, [modules]);

  const selected = modulesWithImages[selectedIndex] || modulesWithImages[0];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5">
        <div className="relative">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4 py-1 items-stretch">
              {modulesWithImages.map((m, idx) => {
                const isActive = idx === selectedIndex;
                const previewLines = [
                  ...(m?.bullets || []).slice(0, 2),
                  ...(m?.extra || []).slice(0, 1),
                ].filter(Boolean);
                return (
                  <CarouselItem
                    key={m.key}
                    className="pl-4 basis-[92%] sm:basis-[72%] md:basis-[58%] lg:basis-full h-full"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full h-full min-h-[320px] text-left rounded-2xl border shadow-sm overflow-hidden transition-all flex flex-col ${
                        isActive
                          ? "border-[#0057E2] bg-white"
                          : "border-[#EEEEEE] bg-white hover:bg-[#F9FAFB] hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="w-full h-[160px] md:h-[200px] border-b border-[#EEEEEE] relative overflow-hidden">
                        {m.imageSrc ? (
                          <>
                            <Image
                              src={m.imageSrc}
                              alt={m.imageAlt}
                              fill
                              sizes="(min-width: 1024px) 420px, 90vw"
                              className="object-cover"
                            />
                            <div
                              className={`absolute inset-0 ${
                                isActive
                                  ? "bg-[linear-gradient(135deg,#0057E260_0%,#E87D1A26_100%)]"
                                  : "bg-[linear-gradient(135deg,#0B1B4466_0%,#0B1B441A_100%)]"
                              }`}
                            />
                          </>
                        ) : null}
                      </div>

                      <div className="p-4 flex-1">
                        <div className="text-[#232D63] font-extrabold text-[13px] md:text-[14px] leading-snug line-clamp-2">
                          {m.title}
                        </div>
                        <div className="text-[#4B4B4B] text-[12px] md:text-[13px] font-medium mt-1">
                          {m.meta}
                        </div>
                        {previewLines.length > 0 ? (
                          <div className="mt-3 flex flex-col gap-1.5">
                            {previewLines.map((t) => (
                              <div
                                key={`${m.key}-${t}`}
                                className="text-[#667085] text-[12px] leading-[18px] line-clamp-1"
                              >
                                {t}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div className="p-4 pt-0">
                        {isActive ? (
                          <div className="h-[3px] w-full bg-[#0057E2]" />
                        ) : (
                          <div className="h-[3px] w-full bg-transparent" />
                        )}
                      </div>
                    </button>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>

      <div className="lg:col-span-7">
        <Card className="w-full rounded-2xl border border-[#DDDDDD] bg-white shadow-sm p-5 md:p-6">
          {selected ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#F4FBFE] border border-[#E6F3FA] flex items-center justify-center shrink-0 overflow-hidden">
                  {selected.imageSrc ? (
                    <Image
                      src={selected.imageSrc}
                      alt={selected.imageAlt}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <div className="text-[#232D63] font-extrabold text-[14px] md:text-[18px] leading-snug">
                    {selected.title}
                  </div>
                  <div className="text-[#4B4B4B] text-[12px] md:text-[14px] font-medium mt-1">
                    {selected.meta}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {selected.bullets.map((b) => (
                  <div key={b} className="text-[#4B4B4B] text-[12px] md:text-[14px] leading-[22px]">
                    {b}
                  </div>
                ))}
              </div>

              {selected.extra.length > 0 ? (
                <div className="pt-1 flex flex-col gap-2">
                  {selected.extra.map((x) => (
                    <div key={x} className="text-[#4B4B4B] text-[12px] md:text-[14px] leading-[22px]">
                      {x}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
