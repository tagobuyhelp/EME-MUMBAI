import CareerCall from "@/components/common/CareerCall";
import { Footer } from "@/components/common/Footer";
import GraphicsDesignHero from "./GraphicsDesignHero";
import GraphicsDesignCourseDetails from "./GraphicsDesignCourseDetails";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import KeyHighlight from "@/components/common/KeyHighlight";
import OtherGraphicDesignCourse from "./OtherGraphicDesignCourse";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";

export const metadata = {
  title:
    "Graphic Design Courses | Best Graphic Design institute in Mumbai - EME Academy Mumbai",
  description:
    "Want to learn graphic design from top graphic design institutes in Mumbai? EME Academy Mumbai offers you the best graphic design courses in Mumbai. Call now!",
  keywords: [
    "graphic design courses in Mumbai ",
    "graphic design institutes in Mumbai",
    "best graphic design courses in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/graphic-design-course-in-mumbai",
  },
};

export default function page() {
  const Courses = "Graphics Designing Course";
  const email_sender = "ALL";
  const Brochure =
    "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
    const BrochureName = "Graphic_Design_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <AnotherHeader />
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <GraphicsDesignHero {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeyHighlight />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <GraphicsDesignCourseDetails {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherGraphicDesignCourse />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
       <StickyCTAButton {..._this} />
    </main>
  );
}
