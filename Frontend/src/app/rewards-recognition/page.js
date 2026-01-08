import Image from "next/image";
import { Footer } from "@/components/common/Footer";
import Awards from "@/components/common/Awards";
import { Header } from "@/components/common/Header";
export const metadata = {
  title: "Awards and Recognitions | Celebrating Excellence - EME Academy",
  description:
    "Our latest awards and recognitions honoring outstanding achievements across various fields. Celebrate excellence with us as we highlight remarkable contributions and milestones.",
  alternates: {
    canonical: "https://emeacademy.co.in/rewards-recognition",
  },
};

export default function Rewards() {
  const images = [
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardOne.webp",
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardTwo.webp",
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardThree.webp",
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardFour.webp",
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardFive.webp",
    "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/rewards-recognition/rewardSix.webp",
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen  ">
      <Header />
      <div className="w-full  bg-[#070B23]">
        <div className="w-full  bg-[#070B23] min-h-screen flex flex-col justify-center items-center py-[46px] px-[20px] md:px-24   mx-auto relative">
          <h1 className="text-white text-center text-[36px] lg:text-[54px] font-[700] z-20 py-3 lg:py-5">
            Rewards & Recognition
          </h1>
          <p className="text-white text-[14px] font-[400] text-center w-[95%] lg:w-[75%] z-20">
            At our education platform, we believe in celebrating every milestone
            achieved by our learners. Our rewards section isn&apos;t just a
            showcase of accomplishments; it&apos;s a testament to the dedication
            and hard work of each individual who embarks on a learning journey
            with us.
          </p>
          <div className="w-full h-full  absolute inset-0  z-10">
            <video
              // src="./assets/videos/awards.mp4"
              src="https://eme25.s3.ap-south-1.amazonaws.com/videos/awards.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
              preload="none"
            />
          </div>

          <div className="w-full h-full bg-black/60 absolute inset-0 z-10"></div>
        </div>
      </div>
      <div className="w-full py-5">
        <Awards />
      </div>

      <div className=" w-full min-h-screen bg-[#ffffff] flex flex-col justify-center items-center py-[46px] px-[20px] md:px-24   mx-auto">
        <div className="w-full  max-w-[1380px] bg-[#ffffff] mx-auto flex flex-col items-center pt-[40px] px-[20px] md:px-24">
          <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-center pt-[40px] ">
            <div className="">
              <div className=" text-[#2251FF] text-4xl leading-10 lg:leading-10 lg:text-5xl  font-bold tracking-tighter">
                <div>
                  <span className="text-[#E87D1A]">A</span>ward Gallery
                </div>

                <span>
                  <svg
                    className="w-[150px] lg:w-[274px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="274"
                    height="10"
                    viewBox="0 0 274 10"
                    fill="none"
                  >
                    <path
                      d="M0.401855 8C75.3294 0.323072 179.049 -0.316711 273.402 8"
                      stroke="#E87D1A"
                      strokeWidth="2.24694"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-[30px] py-[40px] justify-items-center">
          {images.map((data, index) => (
            <Image
              key={index}
              className="w-[300px] h-[200px] 2xl:w-[350px] 2xl:h-[250px] object-cover object-center border border-blue-600 hover:cursor-pointer transition-all delay-100 hover:scale-110"
              width={500}
              height={500}
              src={data}
              alt={`Reward ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
