import Image from "next/image";
import { Card } from "../ui/card";

function Awards() {
  return (
    <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-center py-4 lg:py-6 px-5 md:px-24">
      <div className="w-full flex flex-col items-center text-center gap-2 mb-5 md:mb-7">
        <h2 className="text-[#232D63] text-[24px] md:text-[34px] font-extrabold leading-tight">
          We Don't Just Talk — <span className="text-[#0057E2]">We Have Proof</span>
        </h2>
        <p className="text-[#454545] text-[14px] md:text-[18px] font-medium max-w-[800px]">
          The Tech Industry Noticed. So Should You.
        </p>
      </div>
      <div className="w-full h-auto md:h-[350px]   bg-white  shadow-xl  rounded-xl flex flex-col md:flex-row gap-4 items-center overflow-hidden">
        <div className="md:w-[40%]  h-[50%] md:h-full flex flex-col justify-center gap-y-2 md:gap-y-4 px-4 md:px-6 py-2 items-center ">
          <div className="flex flex-row gap-2 md:justify-start justify-center items-center md:items-start w-full">
            <Image
              width={150}
              height={120}
              src="/assets/images/blog/Starbest.svg"
              alt="star"
              className="w-15 h-15 md:w-30 md:h-30"
            />
            <div className=" text-[#232D63] leading-8 text-[20px] lg:text-[22px] font-bold text-start">
              Proudly Recognized as an
              <span className="text-[#E87D1A]"> Award-Winning Academy</span>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="8"
                  viewBox="0 0 158 9"
                  fill="none"
                >
                  <path
                    d="M0.905273 7.68164C43.721 0.00471247 102.989 -0.63507 156.905 7.68164"
                    stroke="#E87D1A"
                    strokeWidth="2.24694"
                  />
                </svg>
              </span>
            </div>
          </div>
          <Card className="w-full border border-[#EEEEEE] rounded-[10px] flex flex-row justify-between items-center gap-4 md:gap-4 p-0 shadow-none ">
            <Image
              className="w-[110px] md:w-[170px] rounded-md object-cover object-center  z-20"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardFour.webp"
              alt="student Img"
            />

            <p className="text-[12px] md:text-[16px] font-semibold text-[#232D63] md:leading-[24px]">
              Best Placement Institute of the Year - 2024
            </p>
          </Card>
        </div>

        <div className="w-full md:w-[60%] h-[50%] md:h-[90%] p-2 md:pr-10">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full rounded-lg object-cover   md:object-cover object-center md:object-center  relative z-10"
              width={500}
              height={500}
              src="/assets/images/Home/reward.webp"
              alt="student Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
