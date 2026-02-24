import { Card } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function StudentPlaced({ subtitle }) {
  // Create an array of student data
  const students = [
    {
      id: 1,
      name: "Aniket Shome",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Aniket_Shome.png",
      companyLogo: "/assets/images/Home/lead-height-logo.png",
      companyLogoWidth: 90,
      companyLogoHeight: 90,
    },
    {
      id: 3,
      name: "Nuruzzaman Mondal",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Nuruzzaman_Mondal.jpg",
      companyLogo: "/assets/images/Home/mervice.png",
      companyLogoWidth: 40,
      companyLogoHeight: 40,
    },
    {
      id: 4,
      name: "Sukanya Ghosh",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Sukanya_Ghosh.png",
      companyLogo: "/assets/images/Home/lead-height-logo.png",
      companyLogoWidth: 90,
      companyLogoHeight: 90,
    },
    {
      id: 5,
      name: "Souvik Mondal",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_thirteen.jpg",
      companyLogo: "/assets/images/Home/mpokket.png",
      companyLogoWidth: 90,
      companyLogoHeight: 60,
    },
    {
      id: 6,
      name: "Koushik Mondal",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_seventeen.png",
      companyLogo: "/assets/images/Home/mpokket.png",
      companyLogoWidth: 90,
      companyLogoHeight: 60,
    },
    {
      id: 7,
      name: "Aitrik Banerjee",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AitrikBanerjee.webp",
      companyLogo: "/assets/images/concentrix2.png",
      companyLogoWidth: 60,
      companyLogoHeight: 90,
    },
    {
      id: 8,
      name: "Rahul Rana",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileTwo2.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 9,
      name: "Subham Sambui",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Subham_Sambui.jpg",
      companyLogo: "/assets/images/Oxford.jpg",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 10,
      name: "Probhat Routh",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileFour2.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 11,
      name: "Rahul Singh",
      profileImage:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileThree.png",
      companyLogo: "/assets/images/Home/TCSLogo.png",
      companyLogoWidth: 80,
      companyLogoHeight: 80,
    },
    {
      id: 12,
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
          <div className="flex flex-wrap justify-center items-baseline  gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
            Our Students are
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63]">
                Working In
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
          <p className="text-[14px]">
            750+ Students placed last year alone! {subtitle}
          </p>
        </div>

        <Marquee autoFill direction="right" className="px-4 pb-2 gap-2">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex flex-col items-center px-3 w-[220px]"
            >
              {/* Image Container */}
              <div className="relative w-full max-w-[200px] h-[180px] rounded-[12px] overflow-hidden">
                <Image
                  className="object-cover object-top rounded-[12px]"
                  fill
                  src={student.profileImage || "/placeholder.svg"}
                  alt={`${student.name} profile`}
                />
              </div>

              {/* Info Card */}
              <Card className="w-full max-w-[160px] -mt-8 bg-white/90 backdrop-blur-sm py-1 shadow-sm">
                <div className="flex flex-col items-center justify-center p-1 gap-1">
                  <p className="text-[14px] font-semibold text-center">
                    {student.name}
                  </p>
                  <div className="flex items-center justify-center">
                    <Image
                      width={student.companyLogoWidth}
                      height={student.companyLogoHeight}
                      src={student.companyLogo || "/placeholder.svg"}
                      alt="Company logo"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Marquee>
      </div>
    </main>
  );
}
