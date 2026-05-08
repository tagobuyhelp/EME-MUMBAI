import SapHero from "./SapHero";
import SAPCourseDetails from "./SAPCourseDetails";
import WhatSAPExpect from "./WhatSAPExpect";
import SAPCareerProspects from "./SAPCareerProspects";
import Testimonials from "./SAPTestimonials";
import CareerCall from "@/components/common/CareerCall";
import KeyHighlight from "@/components/common/KeyHighlight";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";
import Faqs from "@/components/common/Faqs";
import { AnotherHeader } from "@/components/common/AnotherHeader";
import InfiniteCall from "@/components/InfiniteCall";

export const metadata = {
  title:
    "SAP Training in Mumbai | Best SAP Training institute in Mumbai with Placement - EME Academy Mumbai",
  description:
    "EME Academy Mumbai, is one of the best SAP training institute in Mumbai with 100% placement support. SAP training in Mumbai with placement provided by sap-certified experts and real-time working professionals with a handful of years of experience in real-time sap projects.",
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/maincourse/sap-training-mumbai",
  },
};

const sapfaq = [
  {
    id: 1,
    title: "Why should I choose EME Academy for SAP training?",
    desc: "EME Academy Mumbai is recognized for its expert faculty, hands-on SAP training with real-world projects, and strong track record of successful placements in reputable companies."
  },
  {
    id: 2,
    title: "What SAP modules does EME Academy offer training in?",
    desc: "EME Academy provides comprehensive training in essential SAP modules such as SAP FI, SAP MM, SAP SD, SAP HR, and more, ensuring a holistic learning experience."
  },
  {
    id: 3,
    title: "Can I access SAP software during my training at EME Academy?  ",
    desc: "Yes, students at EME Academy have access to SAP software for hands-on practice, essential for mastering SAP applications and gaining practical skills."
  },
  {
    id: 4,
    title: "What makes the faculty at EME Academy qualified to teach SAP courses? ",
    desc: "The faculty members at EME Academy are industry professionals with extensive experience in SAP implementation and consulting, providing valuable insights and mentorship."
  },
  {
    id: 5,
    title: "How flexible are the training schedules at EME Academy? ",
    desc: "EME Academy offers flexible training schedules to accommodate both full-time students and working professionals, ensuring accessibility and convenience."
  },
]

export default function page() {
    const Courses = "Sap Course";
    const email_sender = "SAP";
    const Brochure = "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
    const BrochureName = "sap_brochure.pdf";
    const _this = {
      Courses,
      email_sender,
      Brochure,
      BrochureName,
    };

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen bg-[#ffffff]">
      <AnotherHeader />

      <div id="home" className="w-full ">
        <InfiniteCall />
      </div>

      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100% ">
        <SapHero {..._this}/>
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <KeyHighlight />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <SAPCourseDetails {..._this}/>
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-[100%] h-[1px] bg-[#EEEEEE] mx-auto mt-4"></div>

      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPExpect />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        {/* gradient added here in the div */}
        <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100% ">
          <SAPCareerProspects />
        </div>
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <Testimonials />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <Faqs faqs={sapfaq} />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>

      <div>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-4">
          {/* Course Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              Join our SAP Course in Mumbai to Grow Your Professional Career
            </h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
              Do you wish to enhance your career prospects with specialized
              skills? Join EME Academy for our{" "}
              <strong>SAP training in Mumbai</strong> today and unlock a bunch
              of opportunities for your upcoming future. As organizations are
              relying deeply on SAP software for enterprise management, the
              demand for certified professionals is increasing. Enroll in our
              courses to gain comprehensive knowledge and hands-on experience in
              various SAP modules.
            </p>
            <p>
              With our professional{" "}
              <strong>SAP training institute in Mumbai</strong>, you will be
              prepared with the expertise needed to manage business operations
              efficiently. Our courses are suitable for all skill levels,
              whether you&apos;re a novice or want to focus on areas like SAP
              FICO, MM, or SD.
            </p>
            <p>
              Here, we provide SAP courses in Mumbai with a comprehensive
              curriculum designed by industry experts. Take the step towards
              securing your successful career in SAP today and position yourself
              as a valuable asset to any organisation.
            </p>
          </section>

          {/* Certification Training */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">
              SAP Training Institute in Mumbai with Practical-Focused Placement
              Support
            </h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]   ">
              Are you looking for the best SAP training institute in Mumbai
              with practical, focused placement support? If yes, we are here to
              help you! We are EME Academy, a professional{" "}
              <strong>
                SAP training institute in Mumbai with placement offers
              </strong>
              , hands-on experience, and expert guidance to help you master SAP
              modules properly. With a strong focus on industrial relevant
              skills, our{" "}
              <strong>SAP training in Mumbai with placement</strong> helps you
              to gain both theoretical knowledge and practical experience. Here,
              we will provide personalized placement assistance to help you find
              your dream job in top companies. Enroll today at the leading SAP
              training institute in Mumbai and start a mega career in the world
              of SAP!
            </p>
          </section>

          {/* Key Highlights */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">
              What We Offer in Our SAP Training in Mumbai
            </h2>
            <p>
              <strong>Training with experts - </strong> Learn from industry
              professionals with years of training in SAP.
            </p>
            <p>
              <strong>Comprehensive modules - </strong> Covering various SAP
              modules such as SAP MM, SAP SD, SAP Fico, and more.
            </p>
            <p>
              <strong>Hands-on experience - </strong> Get practical training to
              enhance your problem-solving skills and real-world application
              with us.
            </p>
            <p>
              <strong>Placements support -</strong> Strong assistance for job
              placements with top companies.
            </p>
            <p>
              <strong>Flexible course time - </strong> Start your SAP course at
              your own pace as we provide weekend and weekday classes for our
              students.
            </p>
            <p>
              <strong>Certification -</strong> We provide recognised SAP
              certification to boost your career.
            </p>
            <p>
              Join our <strong>best SAP training institute in Mumbai</strong>{" "}
              today for a better future.
            </p>
          </section>

          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">
              Reasons to Choose EME Academy Mumbai
            </h2>
            <p>
              If you are planning to get a successful career in SAP, then join
              EME Academy! We stand out as a leading{" "}
              <strong>SAP learning institute in Mumbai</strong>, offering
              top-notch training with practical exposure. Here’s why you should
              choose us -
            </p>
            <p>
              <strong>Industry-experienced trainers - </strong> With years of
              practical experience and knowledge, our professional instructors
              guarantee top-notch instruction for our students.
            </p>
            <p>
              <strong>Comprehensive SAP courses - </strong> Here, we offer years
              of practical experience and knowledge. Our professional
              instructors guarantee top-notch instruction for our students.
            </p>
            <p>
              <strong>Practical-focused training - </strong> Complete case
              studies and actual projects, and you can acquire practical
              knowledge that will prepare you for the workforce.
            </p>
            <p>
              <strong>Placement assistance - </strong> Being the{" "}
              <strong>best SAP training in Mumbai</strong>, we offer committed
              placement assistance to help you land a position in prestigious
              organizations.
            </p>
            <p>
              <strong>Flexible learning option - </strong> We provide weekend
              and weekday batches to accommodate your schedule
            </p>
            <p>
              <strong>Quality infrastructure - </strong> Access cutting-edge SAP
              technologies and contemporary laboratories for an improved
              educational experience.Get access to cutting-edge SAP technologies
              and contemporary laboratories for an improved educational
              experience.
            </p>

            <p>Choose EME Academy Mumbai for a bright future in the SAP career!</p>
          </section>

          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">
              Features of Our SAP Course in Mumbai
            </h2>
            <p>
              <strong>Learn from expert trainers -</strong> Enroll in our
              <strong> SAP course in Mumbai</strong> and learn from
              experienced professionals with in-depth SAP knowledge.
            </p>
            <p>
              <strong>Hands-on expertise - </strong> Here, we provide practical
              insights through live projects and real-time case studies.
            </p>
            <p>
              <strong>Placement assistance - </strong> We dedicatedly support
              our students for better placement.
            </p>
            <p>
              <strong>Industry-Relevant Modules - </strong> Advance your career
              by learning from the most well-liked SAP modules.
            </p>
            <p>
              Join our <strong>SAP learning institute in Mumbai</strong> and
              excel in your career!
            </p>
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-[#232D63] text-xl font-semibold   ">FAQs</h2>
            <div className="flex flex-col gap-2 text-[#727272] text-[12px] lg:text-[16px]">
              <h3 className="font-semibold">
                1. Which is the best institute in Mumbai to learn the SAP
                course?
              </h3>
              <p>
                There are plenty of institutes where you can learn the SAP
                course in Mumbai! EME Academy Mumbai is one of the best SAP learning
                institutes in Mumbai, providing hands-on experience, expert
                trainers, and a strong industry connection.
              </p>

              <h3 className="font-semibold">
                2. Why choose the SAP training institute at Mumbai?
              </h3>
              <p>
                If you are planning to have a great career in the future, then
                the SAP course is an effective way. Well-reputed institutes
                provide customized learning experiences, focusing on real-world
                applications and industry-specific modules, ensuring that you
                get both theoretical knowledge and practical expertise and
                preparing you for a successful SAP career.
              </p>

              <h3 className="font-semibold">
                3. What are the career opportunities after learning SAP course?
              </h3>
              <p>
                It is an amazing course for career growth; after completing SAP
                training, career opportunities include roles such as SAP
                analyst, SAP consultant, SAP project manager, and SAP developer.
                Professionals can work in various industries like IT,
                manufacturing, and finance, helping organizations optimize their
                SAP systems.
              </p>

              <h3 className="font-semibold">
                4. Does EME Academy provide any effective placement?{" "}
              </h3>
              <p>
                Yes, the SAP training institute in Mumbai with placement
                ensures that students receive dedicated job support. We support
                you in finding employment following the conclusion of your
                degree, from resume construction to interview preparation and
                networking with top employers. Your chances of getting a
                well-paying SAP job are increased by our robust placement
                network in Mumbai.
              </p>

              <h3 className="font-semibold">
                5. How long will the course take to learn?{" "}
              </h3>
              <p>
                Depending on the module you select, the SAP course in Mumbai
                normally lasts anywhere from six weeks to six months. At EME
                Academy Mumbai, we offer flexible courses that are customized to your
                schedule and professional objectives, whether you&apos;re
                pursuing a particular module or the full SAP suite.{" "}
              </p>

              <h3 className="font-semibold">
                6. Is it possible to do the SAP course on the weekend?
              </h3>
              <p>
                Yes, here at EME Academy, our professionals can enroll in
                flexible weekend batches for our SAP course in Mumbai. You can
                enroll in our weekend sessions whenever it&apos;s convenient for
                you because we recognize how important flexibility is. For
                people with hectic schedules, this makes our SAP training
                center in Mumbai ideal.
              </p>

              <h3 className="font-semibold">
                7. Is this course important for professional growth?
              </h3>
              <p>
                That depends on your wish! If you wish to learn SAP course then
                it will give effective opportunity to your career. Given the
                growing demand for SAP experts, enrolling in a course at a
                respectable SAP learning institute in Mumbai will improve your
                job prospects by equipping you with the knowledge and skills you
                need to succeed in prestigious organizations.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
