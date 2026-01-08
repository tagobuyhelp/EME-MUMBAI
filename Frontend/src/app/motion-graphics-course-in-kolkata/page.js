import CareerCall from "@/components/common/CareerCall";
import { Footer } from "@/components/common/Footer";
import MotionGraphicsHero from "./MotionGraphicsHero";
import MotionGraphicsCourseDetails from "./MotionGraphicsCourseDetails";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import KeyHighlight from "@/components/common/KeyHighlight";
import OtherMotionGraphicDesignCourse from "./OtherMotionGraphicDesignCourse";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";

export const metadata = {
  title:
    "Graphic Design Courses | Best Graphic Design institute in kolkata - EME Academy",
  description:
    "Want to learn graphic design from top graphic design institutes in kolkata? EME Academy offers you the best graphic design courses in kolkata. Call now!",
  keywords: [
    "graphic design courses in kolkata ",
    "graphic design institutes in kolkata",
    "best graphic design courses in kolkata",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/motion-graphics-course-in-kolkata",
  },
};

export default function page() {
  const Courses = "Motion Graphics Course";
  const email_sender = "ALL";
  const Brochure =
  "https://drive.google.com/file/d/1fRDSPLTi1f0if-MaWydc1QpU87pxa3y1/view?usp=sharing";
  const BrochureName = "Motion_Graphics_brochure.pdf";
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
        <MotionGraphicsHero {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeyHighlight />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <MotionGraphicsCourseDetails {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherMotionGraphicDesignCourse />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
