import Image from "next/image";
import { CheckCircle } from "lucide-react";
import KeyHigh2 from "../../../public/assets/images/common/KeyHighTwo.svg";

export default function KeyHighlight({ mode }) {
  const isSap = mode === "sap";
  const isAiml = mode === "aiml";

  const sapPoints = {
    col1: [
      "Tailored SAP Course for Working Professionals & Freshers",
      "Globally Recognized SAP Course with Certificate",
      "Rigorous Preparation for SAP Global Certification",
      "Direct Hiring Pipeline to 100+ Top MNCs",
      "12,000+ Successful Alumni Nationwide",
    ],
    col2: [
      "Elite SAP Course with Placement in Mumbai",
      "Live-Server, Agency-Style Corporate Environment",
      "Flexible Formats: In-Class or SAP Course Online Mumbai",
      "Adaptive Batch Formats (Weekend & Evening Available)",
      "1-on-1 Dedicated Mentor Doubt-Clearing Sessions",
    ],
    col3: [
      "Relentless Resume Building & Interview Preparation",
      "Industry-Vetted Curriculum (Including S/4 HANA integration)",
      "Taught by Active Corporate Experts (SAP Consultant Course level)",
      "Transparent SAP Course Fees in Mumbai with No-Cost EMI Options",
    ],
  };

  const aimlPoints = {
    col1: [
      "Designed for Beginners, Freshers & Working Professionals",
      "Hands-On Training with Real AI Projects",
      "Industry-Focused Generative AI Curriculum",
      "Certification After Successful Completion",
      "ChatGPT, LLMs, NLP & Prompt Engineering",
      "2000+ Successful Students",
    ],
    col2: [
      "100+ Placement Support & Interview Preparation",
      "Resume Building & Portfolio Guidance",
      "Mock Interviews with Industry Experts",
      "100+ Hiring & Industry Connections",
      "Career Support for Freelancing & Jobs",
      "Flexible Batch Online & Offline Classrooms",
    ],
    col3: [
      "Build AI Apps Using Modern Tools",
      "Portfolio-Ready AI Projects",
      "Prepare for Real AI Job Roles",
      "Industry Expert Mentors & Trainers",
      "Regular Doubt-Clearing & Mentorship Sessions",
      "Latest AI Trends-Based Curriculum",
      "No Cost EMI Options Available",
    ],
  };

  const defaultPoints = {
    col1: [
      "Designed for Freshers & Working Professionals",
      "Program Completion Certificate",
      "Microsoft Power BI Data Analyst Certification",
      "100+ Hiring Partners",
      "2000+ Successful Students",
    ],
    col2: [
      "100% Placement Assistance",
      "Corporate Environment",
      "ONLINE/OFFLINE CLASSROOM SESSION",
      "Flexible Batch Timing",
      "Special Doubt Clearing Sessions",
    ],
    col3: [
      "Endless Interview Support",
      "Updated course curriculum",
      "Industry Expert Trainers",
      "No Cost EMI Options available",
    ],
  };

  const points = isSap ? sapPoints : (isAiml ? aimlPoints : defaultPoints);

  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col items-start gap-[40px] py-[40px] px-[20px] md:px-24 ">
      <div className="w-full flex flex-col gap-[20px] bg-gradient-to-b from-[#F9FBFE] to-white border border-[#eaecf0] shadow-md px-[30px] py-[20px] min-h-[220px] lg:min-h-[250px] rounded-xl hover:shadow-lg hover:cursor-pointer">
        <div className="text-[#222A34] flex flex-col items-center justify-center font-[700] text-[20px] md:text-[32px] tracking-[-0.2px] text-center">
          {isSap ? (
            <>
              Key Highlights of <span className="text-[#00A2E7]">Our SAP Program</span>
              <p className="text-[14px] md:text-[16px] text-[#727272] font-normal mt-2 max-w-[800px]">
                See exactly why ambitious learners and top recruiters consider us the Best SAP Institute in Western India. We don't just provide lessons; we build corporate-ready consultants.
              </p>
            </>
          ) : isAiml ? (
            <>
              Why <span className="text-[#00A2E7] px-2">Students Choose Us?</span>
            </>
          ) : (
            <>
              Key <span className="text-[#00A2E7] px-2">Highlights</span>
            </>
          )}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[26px] text-[13px] lg:text-[16px] mt-4">
          {/* Column 1 */}
          <div className="text-[#252525] font-[500] leading-[20px] lg:leading-[32px] text-[14px]">
            <div className="flex items-start pb-4">
              <Image
                className="w-[90%] h-[90%] rounded-[18px]"
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/EventTwo.webp"
                width={400}
                height={300}
                alt="team"
              />
            </div>
            {isSap && <h4 className="font-bold text-[#232D63] mb-2 uppercase text-xs tracking-wider">Credentials & Network</h4>}
            {points.col1.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#14CE03] flex-shrink-0" />
                <p>{p}</p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="text-[#252525] font-[500]  leading-[20px] lg:leading-[32px] text-[14px] ">
            <div className="flex items-start pb-4">
              <Image
                className="w-[90%] h-[90%]"
                src={KeyHigh2}
                width={20}
                height={20}
                alt="team"
              />
            </div>
            {isSap && <h4 className="font-bold text-[#232D63] mb-2 uppercase text-xs tracking-wider">Ecosystem & Placements</h4>}
            {points.col2.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#14CE03] flex-shrink-0" />
                <p>{p}</p>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="text-[#252525] font-[500]  leading-[20px] lg:leading-[32px] text-[14px]">
            <div className="flex items-start pb-4">
              <Image
                className="w-[90%] h-[90%] rounded-[18px]"
                src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/EventSix.webp"
                width={400}
                height={300}
                alt="team"
              />
            </div>
            {isSap && <h4 className="font-bold text-[#232D63] mb-2 uppercase text-xs tracking-wider">Support & Excellence</h4>}
            {points.col3.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#14CE03] flex-shrink-0" />
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
