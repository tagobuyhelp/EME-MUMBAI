import genpact from "../../public/assets/images/genpact.png";
import itcInfo from "../../public/assets/icons/companies/itcInfo.png";
import Tcs from "../../public/assets/images/TcsLogo.svg";
import ibm from "../../public/assets/images/ibm.png";

import Image from "next/image";
import Marquee from "react-fast-marquee";
function SliderCompany() {
  return (
    <div className="w-full   mx-auto flex flex-col  items-center justify-center gap-y-0">
      <div className="w-full  text-[#042A76] lg:leading-5 text-xl  font-bold flex flex-row  gap-2 justify-center items-center ">
        <div>Our Students are Currently</div>
        <div className="text-[#2251FF] lg:leading-5 lg:text-xl  font-bold">
          <span className="text-[#E87D1A]">W</span>orking In
        </div>
      </div>
      <div className="w-full">
        <Marquee speed={30} autoFill>
          <div className="flex items-center justify-center gap-x-20 mx-10">
            <Image
              className="company-img"
              width={120}
              height={120}
              src={Tcs}
              alt="Tcs"
            />
            <Image
              className="company-img"
              width={120}
              height={70}
              src={genpact}
              alt="genpact"
            />

            <Image
              className="company-img"
              width={120}
              height={120}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/capgemini.png"
              alt="capgemini"
            />
            {/* <Image
                            className='company-img'
                            width={80}
                            height={70}
                            src={ibm}
                            alt='ibm' /> */}
            <Image
              className="company-img mr-5"
              width={120}
              height={120}
              src={itcInfo}
              alt="itcInfo"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default SliderCompany;
