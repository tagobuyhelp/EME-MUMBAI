import { Header } from "@/components/common/Header";
import HomeAbout from "./HomeAbout";
import { Footer } from "@/components/common/Footer";
import FoundersMessage from "./FoundersMessage";
import Cards from "./cards";
import FeaturedIn from "@/components/common/FeaturedIn";
import Awards from "@/components/common/Awards";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import AllLocation from "@/components/common/all-location";
import WhyEMEAcademy from "@/components/common/WhyEMEAcademy";
export const metadata = {
  title: "About EME Academy Mumbai | Professional Training Institute in Mumbai",
  description:
    "EME Academy Mumbai is a trusted Professional Training Institute in Mumbai offering practical, industry-focused training in SAP, Digital Marketing, Data Analytics, and more.",
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/about-us",
  },
};

export default function About() {
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
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
  const _this = {
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  const cards = [
    {
      id: 1,
      title: "Card One",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/card1.png",
    },
    {
      id: 2,
      title: "Card Two",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/card2.png",
    },
    {
      id: 3,
      title: "Card Three",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/card3.png",
    },
  ];

  return (
    <main className="flex flex-col gap-6 justify-center items-center w-full min-h-screen">
      <Header />
      <HomeAbout />
      <div className="flex flex-col justify-center items-center w-full bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <Cards />
      </div>
      <div className="flex w-full justify-center items-center bg-[#ffffff] md:p-6">
        <WhyEMEAcademy 
          badge="Beyond the Syllabus"
          title={<>Why <span className="text-[#0057E2]">Choose</span> EME Academy?</>}
          mode="about"
        />
      </div>
      <div className="flex w-full bg-[#F4FBFE] bg-[url('/assets/images/Home/background1.png')] bg-fit bg-top md:bg-right bg-no-repeat">
        <FoundersMessage />
      </div>

      <div className="w-full py-5">
        <Awards />
      </div>
      <div className="max-w-[1300px] flex flex-wrap gap-4 px-6 justify-center items-center ">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="w-[290px] h-[200px] p-0 md:w-[390px] shadow-none border-none md:h-[240px] rounded-[16px] overflow-hidden shadow-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={430}
              height={250}
              className="w-full h-full object-cover"
            />
          </Card>
        ))}
      </div>
      <div className="w-full bg-gradient-to-r from-[#fff] from-0% to-white to-100%">
        <FeaturedIn {..._this} />
      </div>

      <AllLocation />
      <Footer />
    </main>
  );
}
