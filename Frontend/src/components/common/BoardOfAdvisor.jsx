"use client";
import Image from "next/image";
import { Linkedin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function BoardOfAdvisor() {
  const advisors = [
    {
      id: 1,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorFour.png",
      name: "Dipankar Das",
      title: "Co-founder & Partner at Haven Consultants Pvt. Ltd",
      linkedin: "https://in.linkedin.com/in/dipankar-das-79747663",
    },
    {
      id: 2,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/masterFacultyTwo.png",
      name: "Saikat Maitra",
      title: "Former Honble Vice Chancellor of MAKAUT, W.B.",
      linkedin: "https://in.linkedin.com/in/saikat-maitra-40a90bb5?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      id: 4,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorTwo.png",
      name: "Prodip Mukhopadhyay",
      title: "Former Managing Director Webel & Sr. Advisor - MAKAUT",
      linkedin: "https://www.linkedin.com/in/prodip-mukhopadhyay-9777b62a/",
    },
    {
      id: 6,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorSix.png",
      name: "Imran Khan",
      title: "CEO of CROX",
      linkedin: "https://www.linkedin.com/in/imrankhan07",
    },
    {
      id: 7,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorThreeNewi.png",
      name: "Subhasis Maity",
      title: "Director of NSHM Knowledge Campus",
      linkedin: "https://in.linkedin.com/in/subhasis-maity-9726121b",
    },
    {
      id: 8,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorNine.webp",
      name: "Noor Alam",
      title: "MD & CEO of Startup Pedia",
      linkedin: "https://www.linkedin.com/in/noor-alam-6b144687/",
    },
    {
      id: 9,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorEight.webp",
      name: "Faizan Khan",
      title: "MD & CEO of Onqanet Group of Companies",
      linkedin: "https://in.linkedin.com/in/faizan-nawaz-khan-15a43b4b?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      id: 10,
      image: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Advisor/advisorOneNew.png",
      name: "Suranjan Dasgupta",
      title: "Former Secretary of the Kolkata High Court Bar Association",
      linkedin: "https://in.linkedin.com/in/suranjan-dasgupta-459a17191",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 px-3 py-1 text-[10px] md:text-xs text-[#0057E2] font-bold bg-blue-50/50"
          >
            <Users className="h-3.5 w-3.5" />
            Guidance & Excellence
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-black text-gray-900 leading-tight"
          >
            Meet Our Board of <span className="text-[#0057E2]">Advisors</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative h-1.5 w-20"
          >
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="line"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {advisors.map((advisor, index) => (
                <CarouselItem
                  key={advisor.id}
                  className="pl-3 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full py-2 md:py-4"
                  >
                    <Card className="h-full flex flex-col rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,87,226,0.08)] transition-all duration-500 group/card p-0 gap-0">
                      {/* Image Container */}
                      <div className="relative aspect-[1/1] overflow-hidden bg-sky-50 m-0">
                        <Image
                          src={advisor.image}
                          alt={advisor.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-105 object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                        
                        {/* LinkedIn Overlay */}
                        {advisor.linkedin && (
                          <a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 z-20 h-8 w-8 bg-white/90 backdrop-blur-md rounded-lg flex items-center justify-center text-[#0077b5] shadow-lg translate-y-1 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 hover:bg-[#0077b5] hover:text-white"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col flex-1 bg-white">
                        <h3 className="text-sm md:text-base font-black text-gray-900 group-hover/card:text-[#0057E2] transition-colors duration-300 line-clamp-1">
                          {advisor.name}
                        </h3>
                        <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1 leading-snug flex-1 line-clamp-2">
                          {advisor.title}
                        </p>
                        
                        <div className="mt-3 pt-3 border-t border-gray-50">
                          <div className="flex items-center gap-1.5 text-[9px] font-black text-[#0057E2] uppercase tracking-tighter">
                            Advisor <span className="h-1 w-1 rounded-full bg-blue-200" /> EME Academy Mumbai
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center gap-3 mt-6 lg:mt-0 lg:block">
              <CarouselPrevious className="static lg:absolute lg:-left-5 lg:top-1/2 lg:-translate-y-1/2 h-10 w-10 border-2 border-blue-50 text-blue-600 bg-white hover:bg-blue-50 shadow-sm translate-y-0" />
              <CarouselNext className="static lg:absolute lg:-right-5 lg:top-1/2 lg:-translate-y-1/2 h-10 w-10 border-2 border-blue-50 text-blue-600 bg-white hover:bg-blue-50 shadow-sm translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
   );
 }
