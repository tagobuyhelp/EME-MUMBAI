import MADetails from "./MADetails";
import CareerCall from "@/components/common/CareerCall";
import MarketingAdvancedDigialHero from "./MarketingAdvancedDigialHero";
import OtherMarketingAdvancedDigital from "./OtherMarketingAdvancedDigital";
import { Footer } from "@/components/common/Footer";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import Faqs from "@/components/common/Faqs";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";

  const faq = [
    {
      id: 1,
      question: "What makes a digital marketing course the best in Kolkata?",
      answer:
        "The best digital marketing course in Kolkata offers a comprehensive curriculum, industry-experienced instructors, practical hands-on training, and a track record of successful graduates. It should equip you with the latest digital marketing skills and strategies to excel in the competitive market.",
    },
    {
      id: 2,
      question: "Is the placement guaranteed after completing the course?",
      answer:
        "EME Academy provides placement assistance to its students, helping them connect with potential employers. While placement is not guaranteed, the academy strives to support students in securing suitable opportunities.",
    },
    {
      id: 3,
      question: "What are the course fees?",
      answer:
        "Digital marketing course fees in Kolkata can vary depending on the institution, but EME Academy offers competitive fees, just ₹30,000 in total, with an admission fee of ₹15,000 and, a course duration of 6 months, To learn more, please get in touch with the academy directly.",
    },
    {
      id: 4,
      question: "How can I enroll in this course?",
      answer:
        "To enroll in a course, visit EME Academy's website, select your desired course, and follow the provided instructions for the application and registration process.",
    },
    {
      id: 5,
      question: "Why EME Academy for Digital Marketing Course?",
      answer:
        "EME Academy stands out for its experienced instructors, comprehensive curriculum, industry-relevant training, and strong track record of successful graduates in the field of digital marketing.",
    },
    {
      id: 6,
      question: "Are there financial assistance offers?",
      answer:
        "EME Academy may provide financial assistance or installment payment plans to help students manage their course fees. To learn about these options, please get in touch with the academy directly.",
    },
  ];
  
export const metadata = {
  title:
    "Advanced Digital Marketing course | kolkata's #1 Advanced Digital Marketing Training institute - - EME Academy",
  description:
    "Learn advanced digital marketing skills with our course in kolkata. Master the latest strategies and techniques to excel in the digital marketing field. Enroll now!",
  keywords: [
    "Advanced Digital Marketing course in kolkata",
    "Advanced Digital Marketing Training institute in kolkata",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/advanced-digital-marketing-certificate-course-in-kolkata",
  },
};

export default function page() {
  const Courses = "Digital Marketing Course";
  const email_sender = "ALL";
  const Brochure =
  "https://drive.google.com/file/d/1OBoQINuYhA4obQ9kzOED0Y7C9NhoNTtp/view?usp=sharing";
  const BrochureName = "digital_marketing_brochure.pdf";
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
        <MarketingAdvancedDigialHero {..._this}/>
      </div>
 
      <div className="flex w-full  bg-[#ffffff] ">
        <MADetails {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherMarketingAdvancedDigital />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <Faqs faqs={faq} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
