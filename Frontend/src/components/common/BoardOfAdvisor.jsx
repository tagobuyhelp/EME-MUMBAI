import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BoardOfAdvisor() {
  const advisors = [
    {
      id: 1,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorFour.png",
      name: "Dipankar Das",
      title: "Co-founder & Partner at Haven Consultants Pvt. Ltd",
      linkedin: "https://in.linkedin.com/in/dipankar-das-79747663",
    },
    {
      id: 2,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/masterFacultyTwo.png",
      name: "Saikat Maitra",
      title: "Former Honble Vice Chancellor of MAKAUT, W.B.",
      linkedin:
        "https://in.linkedin.com/in/saikat-maitra-40a90bb5?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      id: 4,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorTwo.png",
      name: "Prodip Mukhopadhyay",
      title: "Former Managing Director Webel & Sr. Advisor - MAKAUT",
      linkedin: "https://www.linkedin.com/in/prodip-mukhopadhyay-9777b62a/",
    },
    {
      id: 6,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorSix.png",
      name: "Imran Khan",
      title: "CEO of CROX",
      linkedin: "https://www.linkedin.com/in/imrankhan07",
    },
    {
      id: 7,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorThreeNewi.png",
      name: "Subhasis Maity",
      title: "Director of NSHM Knowledge Campus",
      linkedin: "https://in.linkedin.com/in/subhasis-maity-9726121b",
    },
    {
      id: 8,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorNine.webp",
      name: "Noor Alam",
      title: "MD & CEO of Startup Pedia",
      linkedin: "https://www.linkedin.com/in/noor-alam-6b144687/",
    },
    {
      id: 9,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorEight.webp",
      name: "Faizan Khan",
      title: "MD & CEO of Onqanet Group of Companies",
      linkedin:
        "https://in.linkedin.com/in/faizan-nawaz-khan-15a43b4b?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      id: 10,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorOneNew.png",
      name: "Suranjan Dasgupta",
      title: "Former Secretary of the Kolkata High Court Bar Association",
      linkedin: "https://in.linkedin.com/in/suranjan-dasgupta-459a17191",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center px-4 md:px-10 py-8 md:py-10">
      {/* Section Title */}
      <div className="mb-6 relative flex justify-center text-center gap-2 text-[22px] font-semibold text-[#4B4B4B]">
        Meet Our Board of
        <span className="flex flex-col items-end">
          <span className="text-[22px] text-[#232D63]">Advisors</span>
          <Image
            src="/assets/images/Home/icons/StudentsLineVector.svg"
            alt="Justicial"
            width={80}
            height={40}
            className="ml-2"
          />
        </span>
      </div>

      {/* Carousel */}
      <div className="relative w-full  overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1280px]"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {advisors.map((advisor) => (
              <CarouselItem
                key={advisor.id}
                className="pl-2 md:pl-4 min-w-0 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="w-full h-auto md:h-[300px] border border-[#EEEEEE] rounded-[8px] p-0 gap-0 shadow-none overflow-hidden flex flex-col">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-70 md:h-48 w-full bg-sky-50 flex-shrink-0">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover md:object-cover object-top"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start flex-1">
                        <div className="flex flex-col justify-between h-full w-[calc(100%-32px)]">
                          <div>
                            <h3 className="font-semibold text-[14px] md:text-[16px] line-clamp-2">
                              {advisor.name}
                            </h3>
                            <p className="text-xs md:text-[13px] text-gray-600 mt-1 line-clamp-3">
                              {advisor.title}
                            </p>
                          </div>
                        </div>
                        {advisor.linkedin && (
                          <a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex-shrink-0 ml-2 self-start"
                          >
                            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black shadow-md rounded-full h-10 w-10 md:h-12 md:w-12" />

          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black shadow-md rounded-full h-10 w-10 md:h-12 md:w-12" />
        </Carousel>
      </div>
    </div>
  );
}
