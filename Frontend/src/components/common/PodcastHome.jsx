"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CTAButton from "./CtaButton"

export default function PodcastHome() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ctaType, setCtaType] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(null);
  const Courses = "All Course";
  const email_sender = "ALL";
  const SelectCourses = [
    "Data Analytics Course",
    "Sap Course",
    "Digital Marketing Course",
    "HR Management Course",
    "Web Development Course",
    "Data Science Course",
    "Graphics Designing Course",
    "Cyber Security Course",
    "UI UX Course",
    "Animation & VFX Course",
    "Cloud Computing Course",
    "Prompt Engineering with AI Course"
  ];
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
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
  
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  const podcasts = [
    // placement stories (new + existing) grouped first
    { id: 30, url: "https://youtube.com/shorts/QXA9pK8gFeE?feature=share", thumbnail: "https://drive.google.com/uc?export=view&id=1LRl7vGqed34w-Ko6hBiUR7z0M2gNCwpj" },
    { id: 31, url: "https://youtube.com/shorts/kvFY72-Qu4o?feature=share", thumbnail: "https://drive.google.com/uc?export=view&id=1nfG1kEUpBT1tkQX59x21SJoOG1g6bNQU" },
    { id: 32, url: "https://youtube.com/shorts/gmWrTlQbpGg?feature=share", thumbnail: "https://drive.google.com/uc?export=view&id=1WO2PVva0o67aD-Jp0yQ2uw8XIryqUrMQ" },
    { id: 33, url: "https://youtube.com/shorts/X8pClskwMHM?feature=share", thumbnail: "https://drive.google.com/uc?export=view&id=1Ud-mPO0ajJBPQS4Cy8TI_XR7XgntrNPs" }, 
    { id: 34, url: "https://youtu.be/8TzFhh_oFRY", thumbnail: "/assets/images/podcast/Sap_changed_my_life_Student_podcast_reels.jpg" },

    { id: 1, url: "https://youtube.com/shorts/PKl38kk51rY?si=Of2sFvT3vfXHDjXj", thumbnail: "https://drive.google.com/uc?export=view&id=1jjPiTXYZva7oeeDvO9o9k1FlX_xU_KdI" }, 
    { id: 2, url: "https://youtube.com/shorts/UF_NvyKnYck?si=ELBGYQSvbpSr25yQ", thumbnail: "https://drive.google.com/uc?export=view&id=1MJOZZ24Gt4_e2XhGssDGkacMqfldNRvB" }, 
    { id: 3, url: "https://youtube.com/shorts/7dW5JDEIq6o?si=nfy0rz3jA-ErXmd1", thumbnail: "https://drive.google.com/uc?export=view&id=1Q8MgozmovntML6XDW6VtVjWnq9j_Tmsq" },
    { id: 5, url: "https://youtu.be/4zjqEMlJuZg?si=c7uwtoiRog4WMX2S", thumbnail: "https://drive.google.com/uc?export=view&id=1omXWhAsvXQv8xS33FGq356GozDGQgAvv" },
    // class reviews
    { id: 6, url: "https://youtube.com/shorts/_A05DRkLnWI?si=9YqPpLCPkFg36m5x", thumbnail: "https://drive.google.com/uc?export=view&id=1XrXV4Z7rNqOGRmvRUvJIcaO_E17MymWj" },
    { id: 7, url: "https://youtube.com/shorts/YjjleqeTx5Q?si=k1FkT7Zr_o--s7SC", thumbnail: "https://drive.google.com/uc?export=view&id=1OBFh63dI5KIqaI6FNCQvjVoI56pNSmsK" },
    { id: 8, url: "https://youtube.com/shorts/UxqspHzf2vg?si=NT0Gw3VXC2AZEDjZ", thumbnail: "https://drive.google.com/uc?export=view&id=1T7r7moQUv9waoQMcn5J_FP06-o3tchAL" },
    { id: 9, url: "https://youtube.com/shorts/Jvsn874KMnA?si=ry4z5i1GALE9BNx5", thumbnail: "https://drive.google.com/uc?export=view&id=1UVubo4fw0TJsA209XgDjEW41FnXkhj9y" },
    { id: 10, url: "https://youtube.com/shorts/Q7vB1SIQHCA?si=yF-5BVJ2YkYfhrWN", thumbnail: "https://drive.google.com/uc?export=view&id=171sz21Gbso8UyW0ro87qBmFLUb3KTbU4" },
    //other reviews
    { id: 11, url: "https://youtu.be/-auuH1rJQOA", thumbnail: "https://drive.google.com/uc?export=view&id=1aPL8czAsZ1-t93D-C66x17s9aFycxlUU" },
    { id: 12, url: "https://youtu.be/6kLeD6PFGIg", thumbnail: "https://drive.google.com/uc?export=view&id=1tyl6rtX-A4aO0LEBdUcwZFWkYNehko8x" },
    { id: 13, url: "https://youtube.com/shorts/YqZ_1RTB_xY?si=btkt3BPinXVobMQP", thumbnail: "https://drive.google.com/uc?export=view&id=1olNhIYoDgtg89UbQlMgo146dj2-4DVoY" },
    { id: 14, url: "https://youtube.com/shorts/IYmmjcFKHKU", thumbnail: "https://drive.google.com/uc?export=view&id=17WBR3iiu-9IWZbrCiUfwl4IPYWQhwBgY" },
    { id: 15, url: "https://youtube.com/shorts/u9JQi5O_a10?si=WaWopQ3hF0vF_N3i", thumbnail: "https://drive.google.com/uc?export=view&id=1dS9Qve277FE15y6m4DqPE7U9W2wD0bYg" }, 
    { id: 16, url: "https://youtube.com/shorts/I1EDGvBOLIo", thumbnail: "https://drive.google.com/uc?export=view&id=1tdi4z1764POupQiMzFXxZH9JIP2Dd81s" },
    { id: 17, url: "https://youtube.com/shorts/KBTWLBCVcEU?si=8XzA1nfZRRMuwJre", thumbnail: "https://drive.google.com/uc?export=view&id=1GgwJwrVezn8PgHMkqipFn8mIrPrUaGPG" },
    { id: 18, url: "https://youtube.com/shorts/dX2KH5Qu6r8", thumbnail: "https://drive.google.com/uc?export=view&id=14VOqcEWeS_NYOV9p7GkQ4mz5sDSFbMGS" },
    { id: 19, url: "https://youtube.com/shorts/PXI2xJfgw-0", thumbnail: "https://drive.google.com/uc?export=view&id=1ja1wd8ozjG42bbRmXFf46rgwhtANrika" },
    { id: 20, url: "https://youtube.com/shorts/ocY4Y_B5QAs", thumbnail: "https://drive.google.com/uc?export=view&id=15ERtDb3orEOAM0f-L7c2A7AqtmYGghrW" },
    { id: 21, url: "https://youtube.com/shorts/OreF0S2pA1A?si=tRDVjBDq22fHMhBs", thumbnail: "https://drive.google.com/uc?export=view&id=1E7fxjnS7-st0KrYWMYxYEzhi4mLCbeta" },
    { id: 22, url: "https://youtube.com/shorts/YGwgMZKfpz0", thumbnail: "https://drive.google.com/uc?export=view&id=18jpGhO1-1S0vY6GtqygPkTCOdmVS2GNC" },
    { id: 23, url: "https://youtube.com/shorts/zLKcpFJSA9g", thumbnail: "https://drive.google.com/uc?export=view&id=110Z4MPQ0ykxnF4XMTtQFgTjPBUB2sGyK" },
    { id: 24, url: "https://youtube.com/shorts/UBJpLpovmak", thumbnail: "https://drive.google.com/uc?export=view&id=1bk9Uu-rkizFG8vnhBv-8RWftE6mebn9s" },
    { id: 25, url: "https://youtube.com/shorts/iesabPcSdV4", thumbnail: "https://drive.google.com/uc?export=view&id=1-jO56CGNbmqB78kpiVbxlXZBH2YXgzy1" },
    { id: 26, url: "https://youtube.com/shorts/e1HwT7zsqYM", thumbnail: "https://drive.google.com/uc?export=view&id=1XCeyk4bF1kywKVkUdrTNg8Hw3-xoeEbw" },
    { id: 27, url: "https://youtube.com/shorts/Q8XQeIYD9jk", thumbnail: "https://drive.google.com/uc?export=view&id=16f2bPanh3dWyxQfDZBT5JI8Q7w44Hgg-" },
    { id: 28, url: "https://youtube.com/shorts/hjKZhr50Fg4", thumbnail: "https://drive.google.com/uc?export=view&id=1x0BI6rm2B98zhciGsJmPJVgPyp5NVhfG" },
    { id: 29, url: "https://youtube.com/shorts/p6GqgAphYLE", thumbnail: "https://drive.google.com/uc?export=view&id=1LqwK4iiZJa5MA435xYrzPVtJXqZ-RUGC" },  
];


  const getYouTubeId = (url) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  //usemeemo concept to add idCode to each podcast
  const podcastWithThumbnails = podcasts.map((item) => {
    return {
      ...item,
      idCode: getYouTubeId(item.url),

    };
  });


  // console.log(podcastWithThumbnails);

  return (
    <section
      id="podcast"
      className="w-full max-w-[1380px] mx-auto flex flex-col items-center px-4 md:px-12 lg:px-20 py-12"
    >
      {/* Title */}
      <div className="text-center max-w-2xl mb-8">
        <h2 className="flex flex-col items-center text-[#4B4B4B] text-lg md:text-2xl font-bold">
          <span>What Our Students Say</span>
          <Image
            src="/assets/images/Home/icons/StudentsLineVector.svg"
            alt="decorative line"
            width={80}
            height={10}
            className="mt-1"
          />
        </h2>
        <p className="text-[#454545] text-sm md:text-base mt-3 leading-relaxed">
          Many of our learners began their journey with zero knowledge and
          graduate as skilled professionals with real-world portfolios and MNC job offers.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start", loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className="flex gap-6 py-5">
          {podcastWithThumbnails.map((podcast, index) => {
            const isActive = activeIndex === index;

            return (
              <CarouselItem
                key={index}
                className="flex-shrink-0 basis-[85%] sm:basis-[60%] md:basis-[55%] lg:basis-[22%] flex justify-center"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="relative w-full max-w-[280px] md:max-w-[300px] rounded-xl overflow-hidden border border-[#121112] shadow-[4px_4px_0_#B5D8FF] bg-black outline-none"
                  onClick={() => {
                    setActiveIndex((prev) => {
                      const next = prev === index ? null : index;
                      if (next !== null) plugin.current?.stop?.();
                      else plugin.current?.reset?.();
                      return next;
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex((prev) => {
                        const next = prev === index ? null : index;
                        if (next !== null) plugin.current?.stop?.();
                        else plugin.current?.reset?.();
                        return next;
                      });
                    }
                  }}
                >
                  <div className="relative w-full aspect-[9/16]">
                    <Image
                      src={podcast.thumbnail}
                      alt={`podcast-${index}`}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 300px, 260px"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`h-12 w-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`}
                      >
                        <div className="ml-0.5 h-0 w-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-[#0057E2]" />
                      </div>
                    </div>

                    <div className={`absolute inset-0 ${isActive ? "block" : "hidden"}`}>
                      {isActive && podcast.idCode ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${podcast.idCode}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
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
                    <div className="text-white/85 text-[11px] font-semibold truncate">
                      Tap to play
                    </div>
                    <a
                      href={podcast.url}
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

        <CarouselPrevious className="absolute -left-3 md:-left-8 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all" />
        <CarouselNext className="absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all" />
      </Carousel>
      <CTAButton name="Book a Free Demo"
        styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-lg"
        _this={_this}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </section>
  )
}
