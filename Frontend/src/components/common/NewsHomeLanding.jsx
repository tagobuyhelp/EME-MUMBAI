"use client";

import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CTAButton from "./CtaButton";


export function NewsHomeLanding({
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  const NewsData = [
    {
      id: 1,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/news-new.png",
      channel:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/TOI-logo.png",
      link: "https://timesofindia.indiatimes.com/entertainment/events/eme-academy-empowering-futures-shaping-careers-in-eastern-india/articleshow/117523154.cms",
    },
    {
      id: 2,
      src: "/assets/images/newsOne.webp",
      channel:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/abpnews.png",
      link: "https://bengali.abplive.com/brand-wire/eme-academy-is-guiding-force-for-employment-by-conducting-professional-courses-1045489",
    },
    {
      id: 3,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/TheStatesmanNews.jpeg",
      channel: "/assets/images/The_Statesman.png",
      link: "https://www.thestatesman.com/features/how-kazi-mahasin-azim-went-from-dropout-to-founder-of-one-of-kolkatas-leading-skill-institutes-1503489221.html#",
    },
    {
      id: 4,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/newsFour.webp",
      channel: "/assets/images/republic.svg",
      link: "https://www.republicbharat.com/india/eme-academy-professional-courses-make-bright-future-of-students/",
    },
    {
      id: 5,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Tv9News.png",
      channel: "/assets/icons/TV9Logo.svg",
      link: "https://tv9bangla.com/kolkata/grand-event-was-organized-in-the-heart-of-kolkata-by-the-career-oriented-training-center-eme-academy-1170791.html",
    },
    {
      id: 6,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/PratidinNews.jpeg",
      channel: "/assets/images/Sangbad_Pratidin_Logo.png",
      link: "https://www.sangbadpratidin.in/career/eme-academy-take-new-initiative-to-eliminate-unemployment/",
    },
    {
      id: 7,
      src: "/assets/images/newsThree.webp",
      channel: "/assets/images/kolomT.png",
      link: "https://www.puberkalom.com/eme-academic-special-honors/",
    },
    {
      id: 8,
      src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/statupPedia.jpg",
      channel: "/assets/images/startup_pedia_logo.jpg",
      link: "https://www.linkedin.com/posts/startup-pedia_startup-kolkatastartup-edtech-activity-7295396798280413184-japp/?utm_source=share&utm_medium=member_android&rcm=ACoAACijlzoBUEvFD0HPtgn5Quk1RNa07qDQhr4",
    },
    {
      id: 9,
      src: "/assets/images/newsTwo.webp",
      channel: "/assets/images/Dailyhunt.png",
      link: "http://dhunt.in/SHbMS",
    },
  ];

  return (
    <div
      id="news"
      className="w-full max-w-[1380px] mx-auto flex flex-col items-center py-2 px-2 md:px-10"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-x-2 text-[#042A76] text-[18px] leading-10 lg:text-[22px] font-bold">
        <div>
          In The<span className="text-[#E87D1A]"> News</span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full flex justify-center items-center mt-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-[1280px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {NewsData.map((data) => (
              <CarouselItem
                key={data.id}
                className="pl-3 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-start w-full h-[360px] lg:h-[320px] 
               rounded-xl p-3 bg-white border shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="relative w-full h-[280px] lg:h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src={data.src}
                      alt="News image"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex justify-center items-center w-full h-10 mt-3">
                    <Image
                      src={data.channel}
                      alt="News channel"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Nav Buttons */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white drop-shadow-md border rounded-full p-2 md:p-3">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#2251FF]" />
          </CarouselPrevious>

          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white drop-shadow-md border rounded-full p-2 md:p-3">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#2251FF]" />
          </CarouselNext>
        </Carousel>
      </div>
      <CTAButton
        name="Enquire Now"
        styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none !px-12 !py-1 mt-6"
        _this={_this}
      />
    </div>
  );
}
