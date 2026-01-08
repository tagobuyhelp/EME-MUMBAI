"use client"
import Image from "next/image"
import futureGroup from '../../../../public/assets/images/futureGroup.png'
import accenture from '../../../../public/assets/images/accenture.svg'
import wipro from '../../../../public/assets/images/wipro.svg'
import adityaBirla from '../../../../public/assets/images/adityaBirla.svg'
import RUPA from '../../../../public/assets/images/RUPA.png'
import Marquee from "react-fast-marquee";

export default function OurRecuiter() {
  return (
      <div className='w-full max-w-[1380px] flex flex-col mx-auto gap-[5px] py-[40px]  px-[20px] md:px-24'>
          <div className="w-full flex justify-center">
              <div>
              <div className="text-[#232D63] text-xl sm:text-2xl font-bold">
                  Our Students 
                      <span className="text-[#00A2E7] px-3">
                      Working In
                      </span>
                  </div>
              </div>
          </div>
          <div className='w-full flex items-center justify-around flex-nowrap overflow-hidden whitespace-nowrap flex-shrink-0 py-2 lg:py-[10px] space-x-8 '>
          <Marquee pauseOnHover autoFill>
                  <Image
                      className=" h-[48px] w-[120px]  lg:w-[200px]  mx-[10px] lg:mx-[30px]  "
                      width={500}
                      height={500}
                      src={futureGroup}
                      alt="" />
                  <Image
                      className=" h-[48px] w-[120px]  lg:w-[200px]  mx-[10px] lg:mx-[30px]  "
                      width={500}
                      height={500}
                      src={accenture}
                      alt="" />
                  <Image
                      className=" h-[68px] w-[80px]  lg:w-[100px]  mx-[10px] lg:mx-[30px]   "
                      width={500}
                      height={500}
                      src={wipro}
                      alt="" />
                  <Image
                      className=" lg:h-[108px] w-[60px]  lg:w-[150px]  mx-[10px] lg:mx-[30px]   "
                      width={500}
                      height={500}
                      src={adityaBirla}
                      alt="" />
                  <Image
                      className="  w-[100px]  lg:w-[150px]  mx-[10px] lg:mx-[30px]   "
                      width={500}
                      height={500}
                      src={RUPA}
                      alt="" />
              </Marquee>
              
             
          </div>
    </div>
  )
}
