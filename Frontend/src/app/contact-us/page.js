import React from "react";
import { Footer } from "@/components/common/Footer";
import ContactForm from "./ContactForm";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Get in Touch with Us | Contact Us for Help, Questions, and Support",
  description:
    "Have questions or need assistance? Contact us today for friendly help and support. We're here to assist you with any queries or concerns you may have.",
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/contact-us",
  },
};


export default function ContactPageClient() {
    const Courses = "All Course"
    const email_sender = "ALL"
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
    const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
    const BrochureName = "EME-brochure-2024.pdf";
    const _this = {
      SelectCourses,
      Courses,
      email_sender,
      Brochure,
      BrochureName,
    };

  const addressUrl1 = "https://www.google.com/maps/search/?api=1&query=Rupa+Solitaire+Millennium+Business+Park+Mahape+Navi+Mumbai+400710";
  const addressUrl2 = "https://maps.app.goo.gl/HzhGJgQaWtG4G2C5A";

  return (
    <main className="flex flex-col  justify-center items-center w-full min-h-screen ">
      <AnotherHeader />

      <div className="w-full bg-[#FFFFFF] bg-[url('/assets/images/Home/background3.png')] bg-fit bg-top bg-no-repeat p-4 md:p-0">
        <div className="w-full  flex flex-col lg:flex-row  justify-center gap-[50px] items-start pt-0 lg:pt-[80px] py-4 px-[20px] md:px-24  max-w-[1380px] mx-auto">
          <div className="flex flex-col justify-items-end font-normal  mt-6 lg:mt-0 w-full h-auto lg:w-[60%]">
            <div className="flex flex-wrap items-baseline leading-5 gap-2 text-[22px] md:text-[24px] font-semibold text-[#232D63]">
              <span className="flex flex-col items-start md:items-end">
                <span className="text-[22px] md:text-[24px] text-[#232D63] mt-4">
                  We Always Eager to Hear From You!
                </span>
                <Image
                  src="/assets/images/Home/icons/StudentsLineVector.svg"
                  alt="Decorative line"
                  width={80}
                  height={40}
                  className="ml-2 "
                />
              </span>
            </div>

            <div className="flex flex-col justify-start items-start gap-2 text-[12px] md:text-[14px] leading-[20px] lg:leading-[24px] text-[#323232]">
              <div className="flex mt-[10px] hover:underline cursor-pointer">
                <Link href={addressUrl1} target="_blank" className="flex gap-2">
                  <Image
                    width={25}
                    height={25}
                    className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] "
                    src="/assets/images/Web_Development/icons/icons8-india-48.png"
                    alt="Location Icon"
                  />
                  EME Academy Mumbai, 814,815, D-wing, Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai, Maharashtra 400710
                </Link>
              </div>
              <div className="flex mt-[10px] hover:underline cursor-pointer">
                <Link
                  href={addressUrl2}
                  target="_blank"
                  className="flex text-wrap gap-2"
                >
                  <Image
                    className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] "
                    width={25}
                    height={25}
                    src="/assets/images/Web_Development/icons/icons8-uk-48.png"
                    alt="Location Icon"
                  />
                  EME Academy, 275 New north Road, islington, London, N1 7AA,
                  United Kingdom
                </Link>
              </div>
              <li className="flex items-center gap-2 mt-[5px] lg:mt-[15px] ">
                <Image
                  className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                  width={500}
                  height={500}
                  src="/assets/images/CallBlue.svg"
                  alt="call icon"
                />
                <a
                  className="hover:underline cursor-pointer"
                  href="tel:+91-9093926145"
                >
                  9093926145
                </a>{" "}
                <span>/</span>{" "}
                <span className="hover:underline cursor-pointer">
                  <a href="tel:+91-9831284098">9831284098</a>
                </span>
              </li>

              <li className="flex items-center  gap-2 mt-[5px] lg:mt-[15px] hover:underline cursor-pointer">
                <Image
                  className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                  width={500}
                  height={500}
                  src="/assets/images/SMSBlue.svg"
                  alt="call icon"
                />
                <a href="mailto:infomumbai@emeacademy.co.in">infomumbai@emeacademy.co.in</a>
              </li>
            </div>

            <div className="flex flex-col w-full max-w-[1380px] md:flex-row justify-start items-start md:justify-between md:items-center md:gap-[18px] mt-4 md:mt-8">
              <div className="flex flex-row gap-[15px] lg:gap-[20px] pt-4 lg:pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61589298807614"
                  target="_blank"
                >
                  <Image
                    className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/fb-round.svg"
                    alt="EME Academy Mumbai facebook Logo"
                  />
                </a>

                <a href="https://x.com/emeacademyofc" target="_blank">
                  <Image
                    className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/x-round.svg"
                    alt="EME Academy Mumbai facebook Logo"
                  />
                </a>

                <a
                  href="https://www.instagram.com/eme_academy_mumbai/"
                  target="_blank"
                >
                  <Image
                    className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/insta-round.svg"
                    alt="EME Academy Mumbai Instagram Logo"
                  />
                </a>

                <a
                  href="https://www.pinterest.com/hiemeacademy/?invite_code=b612232379204c42a5e74b0e188e7d6d&sender=108578992882025"
                  target="_blank"
                >
                  <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out">
                    <circle cx="17.5" cy="17.7687" r="17.5" fill="#F9F9F9"/>
                    <path d="M17.5 10.2687c-4.14 0-7.5 3.36-7.5 7.5 0 3.18 1.98 5.89 4.77 6.98-.08-.59-.16-1.51.03-2.16.17-.59 1.11-4.7 1.11-4.7s-.28-.56-.28-1.4c0-1.31.76-2.29 1.71-2.29.8 0 1.19.6 1.19 1.33 0 .81-.51 2.02-.78 3.14-.22.94.47 1.7 1.4 1.7 1.68 0 2.97-1.77 2.97-4.32 0-2.26-1.62-3.84-3.94-3.84-2.69 0-4.26 2.02-4.26 4.1 0 .81.31 1.68.7 2.15.08.09.09.18.06.27l-.26 1.07c-.04.17-.14.21-.32.13-1.18-.55-1.92-2.27-1.92-3.66 0-2.98 2.16-5.71 6.23-5.71 3.27 0 5.81 2.33 5.81 5.45 0 3.25-2.05 5.87-4.89 5.87-.96 0-1.85-.5-2.16-1.08l-.59 2.24c-.21.82-.79 1.85-1.17 2.47 1.11.34 2.29.53 3.5.53 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5z" fill="#0057E2"/>
                  </svg>
                </a>

                <a href="https://www.youtube.com/@EMEAcademyMumbai" target="_blank">
                  <Image
                    className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/yt-round.svg"
                    alt="EME Academy Mumbai Youtube Logo"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcYuv-IUJMyKdy0e-T5E5DA"
                  target="_blank"
                >
                  <Image
                    className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/linkedin-round.svg"
                    alt="EME Academy Mumbai LinkedIn Logo"
                  />
                </a>
                <a
                  href="https://www.quora.com/profile/EME-ACADEMY-4"
                  target="_blank"
                >
                  <Image
                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] mr-4 hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/quora-round.svg"
                    alt="EME Academy Mumbai Quora Logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <ContactForm {..._this}/>
          </div>
        </div>
      </div>

      <div className="w-full  bg-[#F4FBFE] mb-6">
        <div className="text-center ">
          <div className="flex flex-wrap justify-center items-baseline leading-5 gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63] mt-4">
                Location
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Decorative line"
                width={80}
                height={40}
                className="ml-"
              />
            </span>
          </div>

          <div className="pt-5 lg:py-10 py-5 px-[20px] md:px-24  max-w-[1380px] mx-auto">
            <iframe
              className="w-full md:shadow-2xl shadow-lg  rounded-md lg:rounded-2xl h-[300px] lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.345914619736!2d73.00392347596766!3d19.135242782073994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c1694f1c0d%3A0x673c4d7e271a067a!2sRupa%20Solitaire%2C%20Millennium%20Business%20Park%2C%20Mahape%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716700000000!5m2!1sen!2sin"
              width="600"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

