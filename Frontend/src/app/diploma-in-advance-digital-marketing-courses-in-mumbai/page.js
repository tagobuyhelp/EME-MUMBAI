
import DDMDetails from "./DDMDetails";
import CareerCall from "@/components/common/CareerCall";
import { Footer } from "@/components/common/Footer";
import DiplomaDMHero from "./DiplomaDMHero";
import OtherDiplomaDMCourse from "./OtherDiplomaDMCourse";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import Faqs from "@/components/common/Faqs";
import StickyCTAButton from "../blogs/Components/stickyCTAButton";

const faqs = [
  {
    key: 1,
    question: "What makes a digital marketing course the best in Mumbai?",
    answer:
      "The best digital marketing course in Mumbai offers a comprehensive curriculum, industry-experienced instructors, practical hands-on training, and a track record of successful graduates. It should equip you with the latest digital marketing skills and strategies to excel in the competitive market.",
  },
  {
    key: 2,
    question: "Is the placement guaranteed after completing the course?",
    answer:
      "EME Academy Mumbai provides placement assistance to its students, helping them connect with potential employers. While placement is not guaranteed, the academy strives to support students in securing suitable opportunities.",
  },
  {
    key: 3,
    question: "What are the course fees?",
    answer:
      "Digital marketing course fees in Mumbai can vary depending on the institution, but EME Academy Mumbai offers competitive fees, just ₹30,000 in total, with an admission fee of ₹15,000 and a course duration of 6 months. To learn more, please get in touch with the academy directly.",
  },
  {
    key: 4,
    question: "How can I enroll in this course?",
    answer:
      "To enroll in a course, visit EME Academy Mumbai's website, select your desired course, and follow the provided instructions for the application and registration process.",
  },
  {
    key: 5,
    question: "Why EME Academy for Digital Marketing Course?",
    answer:
      "EME Academy Mumbai stands out for its experienced instructors, comprehensive curriculum, industry-relevant training, and strong track record of successful graduates in the field of digital marketing.",
  },
  {
    key: 6,
    question: "Are there financial assistance offers?",
    answer:
      "EME Academy may provide financial assistance or installment payment plans to help students manage their course fees. To learn about these options, please get in touch with the academy directly.",
  },
];

export const metadata = {
  title: "Master Digital Marketing with AI Course in Mumbai | Certification Program",
  description:
    "Enroll in the best Digital Marketing with AI Course in Mumbai and learn SEO, Google Ads, social media marketing, AI tools, content marketing, and more with practical training and placement assistance.",
  keywords: [
    "Online Advance Digital Marketing Course in Mumbai",
    "AI in Digital Marketing Course in Mumbai",
    "best digital marketing course in Mumbai",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/diploma-in-advance-digital-marketing-courses-in-mumbai",
  },
};

export default function page() {
  const Courses = "Digital Marketing Course";
  const email_sender = "ALL";
  const Brochure =
  "https://drive.google.com/file/d/1UkM4UILziWhL-n7secspw-j4K3lFoaXP/view?usp=sharing";
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
        <DiplomaDMHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">{/* <DMrecuiters /> */}</div>
      <div className="flex w-full  bg-[#ffffff] ">
        <DDMDetails {..._this}/>
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherDiplomaDMCourse />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <Faqs faqs={faqs} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
