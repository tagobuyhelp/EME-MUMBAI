import DMProDetails from "./DMProDetails";
import CareerCall from "@/components/common/CareerCall";
import { Footer } from "@/components/common/Footer";
import OtherDMPro from "./OtherDMPro";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import DigitalProHero from "./DigitalProHero";
import Faqs from "@/components/common/Faqs";
  const faqs = [
    {
      key: 1,
      question: "What makes a digital marketing course the best in Kolkata?",
      answer:
        "The best digital marketing course in Kolkata offers a comprehensive curriculum, industry-experienced instructors, practical hands-on training, and a track record of successful graduates. It should equip you with the latest digital marketing skills and strategies to excel in the competitive market.",
    },
    {
      key: 2,
      question: "Is the placement guaranteed after completing the course?",
      answer:
        "EME Academy provides placement assistance to its students, helping them connect with potential employers. While placement is not guaranteed, the academy strives to support students in securing suitable opportunities.",
    },
    {
      key: 3,
      question: "What are the course fees?",
      answer:
        "Digital marketing course fees in Kolkata can vary depending on the institution, but EME Academy offers competitive fees, just ₹30,000 in total, with an admission fee of ₹15,000 and a course duration of 6 months. To learn more, please get in touch with the academy directly.",
    },
    {
      key: 4,
      question: "How can I enroll in this course?",
      answer:
        "To enroll in a course, visit EME Academy's website, select your desired course, and follow the provided instructions for the application and registration process.",
    },
    {
      key: 5,
      question: "Why EME Academy for Digital Marketing Course?",
      answer:
        "EME Academy stands out for its experienced instructors, comprehensive curriculum, industry-relevant training, and strong track record of successful graduates in the field of digital marketing.",
    },
    {
      key: 6,
      question: "Are there financial assistance offers?",
      answer:
        "EME Academy may provide financial assistance or installment payment plans to help students manage their course fees. To learn about these options, please get in touch with the academy directly.",
    },
  ];
export const metadata = {
  title:
    "Best Digital Marketing Crash Course in Kolkata with Placements - EME Academy",
  description:
    "Get ready to boost your digital marketing skills with our crash course in Kolkata! Master the essentials and propel your career forward.",
  keywords: [
    "Best Digital Marketing Crash Course in Kolkata with Placements",
    "Digital Marketing Crash Course in Kolkata",
    "Best Digital Marketing Crash Course in Kolkata",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/digital-marketing-crash-course-in-kolkata",
  },
};

export default function page() {
  return (
    <main>
      <AnotherHeader />
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <DigitalProHero />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">{/* <DMrecuiters /> */}</div>
      <div className="flex w-full  bg-[#ffffff] ">
        <DMProDetails />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherDMPro />
      </div>
      <div className="flex w-full bg-[#F4FBFE]">
        <Faqs faqs={faqs} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
    </main>
  );
}
