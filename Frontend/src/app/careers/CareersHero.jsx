'use client'
import Image from 'next/image'


export default function CareersHero() {

  return (

    <div className="w-full  h-[250px] flex flex-col justify-center items-center py-[6px] px-5 md:px-28 mx-auto">
     
        <div className="text-[12px] text-[#E87D1A] font-semibold bg-[#FFF5ED] py-1 px-7 md:py-2 md:px-10 rounded-full w-fit items-center justify-center mx-auto ">
          CAREERS
        </div>

        <div className="text-[20px] sm:text-[24px] lg:text-[34px] font-extrabold text-[#FFF5ED] leading-[0.9]">
          <div className="flex flex-wrap leading-none text-[22px] md:text-[24px] font-semibold text-[#FAF9F9] items-center justify-center">
            <span className="flex flex-col items-end md:items-end">
              <span className="text-[20px] sm:text-[24px] lg:text-[34px] font-extrabold text-[#FAF9F9] items-center justify-center mt-4">
                Join EME Academy
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Decorative line"
                width={80}
                height={40}
                className="ml-2"
              />
            </span>
          </div>

          {/* Removed <br /> to eliminate space */}
          Be part of our team of experts.
        </div>
    </div>

  )
}
