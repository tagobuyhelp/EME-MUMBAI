import { Card } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CTAButton from "../../components/common/CtaButton";
import RecentPlacedLogo from "../../../public/assets/images/RecentPlacedLogo.png";

export default function RecentPlaced() {
  const students1 = [
    {
      id: 1,
      name: "Aitrik Banerjee",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AitrikBanerjee.webp",
      companyLogo: "/assets/images/concentrix2.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 2,
      name: "Rahul Rana",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileTwo2.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 3,
      name: "Subham Sambui",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Subham_Sambui.jpg",
      companyLogo: "/assets/images/Oxford.jpg",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
  ];

  const students2 = [
    {
      id: 4,
      name: "Probhat Routh",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileFour2.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 5,
      name: "Rahul Singh",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileThree.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 6,
      name: "Avick Chakraborty",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Avick_Chakraborty.jpg",
      companyLogo: "/assets/images/Oxford.jpg",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
  ];

  return (
    <main className="w-full">
      <div className="w-full max-w-[1160px] flex flex-col gap-3 text-[15px] mx-auto rounded-[14px] py-4 md:py-6">
        <div className="text-center mb-2">
          <div className="flex flex-wrap justify-center items-baseline leading-1 gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
            Our
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63]">
                Recent Placements
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Decorative line"
                width={80}
                height={40}
                className="ml-2"
              />
            </span>
          </div>
        </div>

        {/* First Marquee */}
        <Marquee autoFill className="px-4 pb-2 gap-5">
          {students1.map((student) => (
            <Card
              key={student.id}
              className="w-[200px] md:w-[210px] md:h-[180px] rounded-[18px] border bg-white flex flex-col justify-start items-center gap-0 p-0 mx-4 overflow-hidden"
            >
              {/* Top 1/3 Blue Background with EME Logo */}
              <div className="bg-[#009EF7] w-full h-[80px] flex justify-center items-center relative">
                <div className="bg-[#009EF7] w-full h-[80px] flex justify-center items-start pt-2 relative">
                  <Image
                    src={RecentPlacedLogo}
                    alt="EME Logo"
                    width={50}
                    height={20}
                  />
                </div>
                <div className="absolute bottom-[-25px] w-full flex justify-center">
                  <Image
                    className="rounded-full border-2 border-white w-[70px] h-[70px] object-cover object-right-top"
                    width={100}
                    height={100}
                    src={student.profileImage}
                    alt={student.name}
                  />
                </div>
              </div>

              {/* Bottom 2/3 White Section */}
              <div className="pt-[35px] pb-4 px-2 flex flex-col items-center gap-2">
                <p className="text-[14px] font-[600] text-center">
                  {student.name}
                </p>
                <Image
                  width={student.companyLogoWidth || 80}
                  height={student.companyLogoHeight || 80}
                  src={student.companyLogo}
                  alt={`${student.name}'s company`}
                />
              </div>
            </Card>
          ))}
        </Marquee>

        {/* Second Marquee (moving in opposite direction) */}
        <Marquee autoFill direction="right" className="px-4 pb-2 gap-5">
          {students2.map((student) => (
            <Card
              key={student.id}
              className="w-[200px] md:w-[210px] md:h-[180px] rounded-[18px] border bg-white flex flex-col justify-start items-center gap-0 p-0 mx-4 overflow-hidden"
            >
              {/* Top 1/3 Blue Background with EME Logo */}
              <div className="bg-[#009EF7] w-full h-[80px] flex justify-center items-center relative">
                <div className="bg-[#009EF7] w-full h-[80px] flex justify-center items-start pt-2 relative">
                  <Image
                    src={RecentPlacedLogo}
                    alt="EME Logo"
                    width={50}
                    height={20}
                  />
                </div>
                <div className="absolute bottom-[-25px] w-full flex justify-center">
                  <Image
                    className="rounded-full border-2 border-white w-[70px] h-[70px] object-cover object-right-top"
                    width={100}
                    height={100}
                    src={student.profileImage}
                    alt={student.name}
                  />
                </div>
              </div>

              {/* Bottom 2/3 White Section */}
              <div className="pt-[35px] pb-4 px-2 flex flex-col items-center gap-2">
                <p className="text-[14px] font-[600] text-center">
                  {student.name}
                </p>
                <Image
                  width={student.companyLogoWidth || 80}
                  height={student.companyLogoHeight || 80}
                  src={student.companyLogo}
                  alt={`${student.name}'s company`}
                />
              </div>
            </Card>
          ))}
        </Marquee>

        {/* cta btn */}
        <div className="flex justify-center bg-[#fff]">
          <CTAButton name="Book A Free Demo Class" />
        </div>
      </div>
    </main>
  );
}
