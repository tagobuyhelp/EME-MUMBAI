"use client";
import CTAButton from "@/components/common/CtaButton";
import Image from "next/image";
import { useState } from "react";

function GDStudentWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Courses = "Graphics Designing Course";
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
  const BrochureName = "graphic_design_brochure.pdf";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Left Column - Tools */}
        <div className="bg-white w-full px-2 py-4 md:p-6">
          <h2 className=" text-center text-[18px] md:text-[22px] font-semibold mb-2 md:mb-6">
            <span className="text-[#232D63]"> Student Work at</span>{" "}
            <span className="text-[#E87D1A]">EME Academy Mumbai</span>
            <div className="text-[#7F7879] text-[12px] font-normal">
              <p>
                Explore creative projects made by EME Academy Mumbai students during
                their training.
              </p>
            </div>
          </h2>

          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-3">
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDPlantr.png"
                alt="Student Work"
                width={400}
                height={300}
                className="rounded-md object-cover h-full w-full  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="col-start-1 row-start-2 transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDManWalking.png"
                alt="Student Work"
                width={400}
                height={300}
                className="rounded-md  object-cover h-full w-full  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              />
            </div>
            <div
              className="row-span-2 col-start-2 row-start-1 transition-transform duration-300 hover:-translate-y-1
               "
            >
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDPorsche.png"
                alt="Student Work"
                width={400}
                height={600}
                className="rounded-md object-cover h-full w-full  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="col-start-3 row-start-1 transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDOxone.png"
                alt="Student Work"
                width={400}
                height={300}
                className="rounded-md object-cover h-full w-full  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="col-start-3 transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDLandmark.png"
                alt="Student Work"
                width={400}
                height={300}
                className="rounded-md object-cover h-full w-full  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              />
            </div>
          </div>

          {/* mobile view */}
          <div className="md:hidden grid grid-cols-2 grid-rows-4 gap-4">
            {/* Full width - GDPlantr */}
            <div className="col-span-2  transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDPlantr.png"
                alt="Student Work"
                width={358}
                height={200}
                className="rounded-[10px] border border-gray-300 w-full h-[200px] object-cover "
              />
            </div>

            {/* Half width - GDManWalking */}
            <div className="col-start-1 row-start-2  transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDManWalking.png"
                alt="Student Work"
                width={175}
                height={200}
                className="rounded-[10px] border border-gray-300 w-full h-[200px] object-cover"
              />
            </div>

            {/* Half width - GDPorsche */}
            <div className="col-start-2 row-start-2  transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDPorsche.png"
                alt="Student Work"
                width={175}
                height={200}
                className="rounded-[10px] border border-gray-300 w-full h-[200px] object-cover"
              />
            </div>

            {/* Full width - GDOxone */}
            <div className="col-span-2 col-start-1 row-start-3  transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDOxone.png"
                alt="Student Work"
                width={358}
                height={200}
                className="rounded-[10px] border border-gray-300 w-full h-[200px] object-cover"
              />
            </div>

            {/* Full width - GDLandmark */}
            <div className="col-span-2 col-start-1 row-start-4  transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Graphic_Designing/GDLandmark.png"
                alt="Student Work"
                width={358}
                height={202}
                className="rounded-[10px] border border-gray-300 w-full h-[202px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <CTAButton
        name="Apply Today →"
        styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full !px-12 border-none"
        _this={_this}
      />
    </div>
  );
}

export default GDStudentWork;
