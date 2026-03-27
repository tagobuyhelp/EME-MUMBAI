"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CTAButton from "@/components/common/CtaButton";

const getYouTubeId = (url) => {
  const patterns = [
    /youtube\.com\/shorts\/([0-9A-Za-z_-]{11})/i,
    /youtu\.be\/([0-9A-Za-z_-]{11})/i,
    /v=([0-9A-Za-z_-]{11})/i,
    /\/embed\/([0-9A-Za-z_-]{11})/i,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
};

const getYouTubeThumb = (id) => {
  if (!id) return "/assets/images/Home/reward.webp";
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
};

export default function DMShortsCarousel({ _this, videos, title, subtitle }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const items = React.useMemo(() => {
    const fallback = [
      "https://www.youtube.com/shorts/ZqHbDgX30Ps",
      "https://www.youtube.com/shorts/qC06mvJiyL0",
      "https://www.youtube.com/shorts/5vtXeeSxmcc",
      "https://www.youtube.com/shorts/37JLYYEBquU",
      "https://www.youtube.com/shorts/UF_NvyKnYck",
      "https://www.youtube.com/shorts/7dW5JDEIq6o",
      "https://www.youtube.com/shorts/TbTxV6hjaJ4",
    ];
    const list = (videos?.length ? videos : fallback).filter(Boolean);
    return list.map((url, index) => {
      const id = getYouTubeId(url);
      return {
        id: `${id || "video"}-${index}`,
        url,
        youtubeId: id,
        thumbnail: getYouTubeThumb(id),
      };
    });
  }, [videos]);

  return (
    <section className="w-full py-10 md:py-14 bg-white overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-[#232D63] text-[20px] md:text-[32px] font-black leading-tight">
            {title || "Watch Real Student Stories"}
          </h2>
          <p className="text-[#4B4B4B] text-[12px] md:text-[14px] font-medium max-w-[820px]">
            {subtitle || "Quick reels from learners who joined, learned, and started seeing results."}
          </p>
        </div>

        <div className="mt-7 md:mt-10 relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="flex gap-3 md:gap-6 py-4">
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <CarouselItem
                    key={item.id}
                    className="basis-[84%] sm:basis-[56%] md:basis-[40%] lg:basis-[24%] flex justify-center"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[260px] rounded-2xl overflow-hidden border border-[#EEF2F7] shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-black group outline-none"
                      onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveIndex((prev) => (prev === index ? null : index));
                        }
                      }}
                    >
                      <div className="relative w-full aspect-[9/16]">
                        <Image
                          src={item.thumbnail}
                          alt="Student story"
                          fill
                          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 320px, 260px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/35 transition-opacity duration-300 group-hover:opacity-0" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`h-12 w-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0" : "group-hover:opacity-0"}`}
                          >
                            <div className="ml-0.5 h-0 w-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-[#0057E2]" />
                          </div>
                        </div>

                        <div className={`absolute inset-0 ${isActive ? "block" : "hidden"}`}>
                          {isActive && item.youtubeId ? (
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              frameBorder="0"
                              title="YouTube video player"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div
                        className={`absolute bottom-3 left-3 right-3 ${isActive ? "hidden" : "flex"} justify-between items-center gap-3`}
                      >
                        <div className="text-white/80 text-[11px] font-semibold truncate">
                          Tap to play
                        </div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-[11px] font-bold underline underline-offset-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          YouTube
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md hover:bg-gray-100" />
            <CarouselNext className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>

        <div className="mt-8 flex justify-center">
          <CTAButton
            name="I Can Do This Too →"
            styleClasses="h-11 px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-xs md:text-sm shadow-lg shadow-blue-50 border-none"
            _this={_this}
          />
        </div>
      </div>
    </section>
  );
}
