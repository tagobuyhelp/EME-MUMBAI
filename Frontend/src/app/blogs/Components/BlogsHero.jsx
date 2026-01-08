'use client'
import Image from 'next/image'


export default function BlogsHero() {

    return (

            <div className="w-full  h-[250px] flex flex-col justify-center items-center py-[6px] px-5 md:px-28 mx-auto">
            <div className="flex flex-col  w-full md:w-auto text-center">

                <div className="text-[15px] text-[#E87D1A] font-semibold bg-[#FFF5ED] py-1 px-7 md:py-1 md:px-10 rounded-full w-fit items-center justify-center mx-auto mt-12">
                       Our Blogs
                </div>

                {/* <h1 className="text-[18px] sm:text-[22px] lg:text-[34px] font-extrabold text-[#FFF5ED] leading-tight ">
                  Explore. Learn. Grow.
                </h1> */}
                <div className="flex flex-wrap leading-1 gap-2 text-[22px] md:text-[24px] font-semibold text-[#232D63] items-center justify-center leading-[0.8]">

                    <span className="flex flex-col items-end md:items-end">
                    <span className="text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#FAF9F9] items-center justify-center mt-4">Explore. Learn. Grow.</span>
                    <Image
                        src="/assets/images/Home/icons/StudentsLineVector.svg"
                        alt="Decorative line"
                        width={80}
                        height={40}
                        className="ml-2 "
                    />
                    </span>
                {/* </div> */}
                </div>
            </div>
            </div>

    )
}
