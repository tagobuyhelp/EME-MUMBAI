import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import CareersHero from "./CareersHero";
import Hiring from "./Hiring";

export default function Careers() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen bg-[#ffffff] ">
      <AnotherHeader />
      <div className="w-full bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/CareerHeroBg.png')] xs:h-[400px] md:h-[330px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <CareersHero />
      </div>

      <div id="hiring" className="flex w-full  bg-[#F4FBFE] mb-8 ">
        <Hiring />
      </div>

      <Footer />
    </main>
  );
}
