"use client";
import { useState } from "react";
import Image from "next/image";
// import CTAButton from "./CTAButton"

import CTAButton from "@/components/common/CtaButton";

export default function AboutAnimationVfxLanding({
  title = (
    <>
      <span className="text-[#232D63]">About </span>
      <span className="text-[#E87D1A]">3D Animation & VFX Courses</span>
    </>
  ),
  tagline = "Master industry-ready skills in animation, visual effects, and creative storytelling.",
  paragraphs = [
    "3D Animation and Visual Effects (VFX) are at the heart of today's entertainment, gaming, advertising, and film industries. From creating lifelike characters to designing breathtaking visual worlds, this field allows you to transform creativity into stunning visuals that captivate audiences.",
    "Our 3D Animation & VFX course is designed to give you hands-on training in:"
  ],
  features = [
    {
      title: "3D Modeling & Texturing",
      description: "Learn to design realistic characters, objects, and environments.",
    },
    {
      title: "Animation Techniques",
      description: "Master character movements, expressions, and storytelling through animation.",
    },
    {
      title: "Lighting & Rendering",
      description: "Understand how to bring depth, realism, and cinematic quality to your projects.",
    },
    {
      title: "Compositing & VFX",
      description: "Discover the art of combining live-action with digital effects for movies, ads, and games.",
    },
  ],
  customThis
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Courses = "Animation & VFX Course";
  const email_sender = "ALL";
  const Brochure =
    "/assets/documents/AllCourseBrochure/EME_Animation_&_VFX.pdf";
  const BrochureName = "animation_and_vfx_brochure.pdf";
  const _this = customThis || {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <div className="w-full overflow-hidden ">
      <div className="">
        <div className="flex flex-col lg:flex-row rounded-[26px] p-6 lg:p-8 relative">
          {/* Left Column - Image */}
          <div className="flex-shrink-0 lg:w-[35%] flex items-center justify-start">
            <div className="relative">
              <Image
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/AboutAVImage.svg"
                alt="3D Animation Character"
                width={700}
                height={650}
                className="rounded-xl object-contain -mx-6 lg:-mx-8"
                priority
              />
              {/* Orange mascot bird in corner */}
              <div className="block md:hidden absolute -top-6 -left-4">
                <Image
                  src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/Owl.svg"
                  alt="Mascot"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 lg:w-[65%] mt-6 md:mt-0">
            <div className="mb-6">
              <h1 className="text-[18px] md:text-[22px] font-bold mb-4">
                {title}
              </h1>
              {tagline && (
                <p className="text-[12px] md:text-[14px] text-[#7F7879] leading-relaxed mb-6">
                  {tagline}
                </p>
              )}
              {paragraphs.map((p, index) => (
                <p key={index} className="text-[12px] md:text-[14px] text-[#2D292D] leading-relaxed mb-6">
                  {p}
                </p>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  </div>
                  <div>
                    <span className="font-bold text-[#2D292D] text-[12px] md:text-[14px]">
                      {feature.title} -
                    </span>
                    <span className="text-[#2D292D] text-[12px] md:text-[14px] ml-1">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div className="flex">
              <CTAButton name="Enquiry Now" className="bg-blue-600 hover:bg-blue-700" />
            </div> */}

            <div className="w-full flex" onClick={() => setIsModalOpen(true)}>
              <CTAButton
                name="Enquire Now"
                styleClasses="bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 text-white rounded-full font-semibold text-[12px] md:text-[14px] md:px-11"
                _this={_this}
              />
            </div>
          </div>

          {/* Bird at right bottom of entire container */}
          <div className="absolute -bottom-2 -right-2 z-10">
            <Image
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/Bird.svg"
              alt="Mascot"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
