"use client"
import Image from "next/image"
import ibm from '../../../public/assets/images/common/IBM_icon.svg'
import deloitte from '../../../public/assets/icons/companies/Deloitte2.svg'
import itc from '../../../public/assets/images/common/ITC_icon.svg'
import infosys from '../../../public/assets/icons/companies/Infosys_icon.svg'
import Concentrix from '../../../public/assets/images/common/Concentrix_icon.svg'
import tcs from '../../../public/assets/icons/companies/TCS_icon.svg'

import Marquee from "react-fast-marquee";

export default function OurRecuiter() {
  return (
      <div className='w-full max-w-[1380px] mx-auto flex flex-col items-start gap-[5px] py-5  px-[20px] md:px-24'>
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
          <div className='w-full flex items-center justify-around flex-nowrap overflow-hidden whitespace-nowrap flex-shrink-0 py-2 lg:py-[20px] space-x-8 '>
              <Marquee pauseOnHover autoFill>
                  {/* <Image
                      className=" h-[48px] w-[60px]  lg:w-[200px] mx-[10px] lg:mx-[30px] "
                      width={100}
                      height={100}
                      src={ibm}
                      alt="" /> */}
                  <Image
                      className=" h-[48px] lg:h-100% w-[120px] lg:w-100% mx-[10px] lg:mx-[30px]"
                      width={500}
                      height={500}
                      src={deloitte}
                      alt="" />
                  <Image
                      className=" h-[40px] lg:h-[48px] w-[80px]  lg:w-[150px] mx-[10px] lg:mx-[30px]"
                      width={500}
                      height={500}
                      src={itc}
                      alt="" />
                  <Image
                      className=" h-[48px]  w-[100px]  lg:w-[200px]  mx-[10px] lg:mx-[30px]"
                      width={500}
                      height={500}
                      src={infosys}
                      alt="" />
                  <Image
                      className=" h-[48px]  w-[120px]  lg:w-[200px]  mx-[10px] lg:mx-[30px]"
                      width={500}
                      height={500}
                      src={Concentrix}
                      alt="" />
                    <Image
                      className=" h-[48px]  w-[90px]  lg:w-[200px]  mx-[10px] lg:mx-[30px]"
                      width={500}
                      height={500}
                      src={tcs}
                      alt="" />
              </Marquee>
              
             
          </div>
    </div>
  )
}
