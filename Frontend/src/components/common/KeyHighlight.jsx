import Image from "next/image";
import { CheckCircle } from "lucide-react";
import KeyHigh2 from "../../../public/assets/images/common/KeyHighTwo.svg";

export default function KeyHighlight() {
  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col items-start gap-[40px] py-[40px] px-[20px] md:px-24 ">
      <div className="w-full flex flex-col gap-[20px] bg-gradient-to-b from-[#F9FBFE] to-white border border-[#eaecf0] shadow-md px-[30px] py-[20px] min-h-[220px] lg:min-h-[250px] rounded-xl hover:shadow-lg hover:cursor-pointer">
        <div className="text-[#222A34] flex justify-center font-[700] text-[14px]  md:text-[22px] tracking-[-0.2px]">
          Key <span className="text-[#00A2E7] px-2">Highlights</span>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[26px] text-[13px] lg:text-[16px]">
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
            <div className="flex items-center gap-2 ">
              <div>
                <CheckCircle className="text-[#14CE03] mt-1 lg:mt-1.5" />
              </div>
              <p>Designed for Freshers & Working Professionals</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Program Completion Certificate</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Microsoft Power BI Data Analyst Certification</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>100+ Hiring Partners</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>2000+ Successful Students</p>
            </div>
          </div>
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
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>100% Placement Support</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Corporate Environment</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>ONLINE/OFFLINE CLASSROOM SESSION</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Flexible Batch Timing</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Special Doubt Clearing Sessions</p>
            </div>
          </div>
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
            <div className="flex items-center gap-2">
              <p>
                <CheckCircle className="text-[#14CE03]" />
              </p>
              <p>Endless Interview Support</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03]" />
              </div>
              <p>Updated course curriculum</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>Industry Expert Trainers</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckCircle className="text-[#14CE03] " />
              </div>
              <p>No Cost EMI Options available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
