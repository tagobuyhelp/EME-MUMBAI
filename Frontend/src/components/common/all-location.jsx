import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

export default function AllLocation() {
  const cards2 = [
    {
      id: 1,
      title: "India Classroom",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/indian_classroom.png",
      flagIcon: "/assets/images/Web_Development/icons/icons8-india-48.png",
    },
    {
      id: 2,
      title: "London, UK. Classroom",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/uk_classroom.png",
      flagIcon: "/assets/images/Web_Development/icons/icons8-uk-48.png",
    },
  ];
  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-2 md:gap-4 px-6 justify-center items-center ">
      <div className="flex justify-center md:justify-start items-baseline md:gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B] ">
        Our Classrooms
        <span className="flex flex-col items-end">
          <span className="text-[18px] md:text-[22px] text-[#232D63]">
            – Kolkata & London
          </span>
          <Image
            src="/assets/images/Home/icons/StudentsLineVector.svg"
            alt="Justicial"
            width={60}
            height={30}
            className="md:ml-2"
          />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards2.map((card) => (
          <Card
            key={card.id}
            className=" h-[150px] p-0 w-full md:h-[250px] rounded-[16px] overflow-hidden relative shadow-none  border-none"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />

            {/* Text overlay container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]">
              <h3 className="flex gap-2 justify-center items-center text-[14px] md:text-xl font-bold mb-2">
                <span>
                  <Image
                    width={25}
                    height={25}
                    className=" w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] "
                    src={card.flagIcon}
                    alt="Location Icon"
                  />
                </span>
                {card.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
