import infosys from "../../public/assets/images/infosys.webp";
import itcInfo from "../../public/assets/icons/companies/itcInfo.png";
import deloitte from "../../public/assets/images/deloitte.png";
import ibm from "../../public/assets/images/ibm.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
function StudentWorking() {
  return (
    <div className="w-full  max-w-[1380px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-[40px] py-5 md:py-8  px-[20px] md:px-24 ">
      <div className="w-full md:w-[20%]  text-[#042A76] lg:leading-5 text-xl  font-bold flex flex-row md:flex-col gap-2 justify-center items-center">
        <div>Our Students are</div>
        <div className="text-[#2251FF] lg:leading-5 lg:text-xl  font-bold">
          <span className="text-[#E87D1A]">W</span>orking In
        </div>
      </div>
      <div className="w-full md:w-[80%]  ">
        <Marquee speed={20} autoFill>
          <div className=" flex items-center justify-center gap-x-5 mx-5">
            <Image
              className="company-img"
              width={120}
              height={70}
              src={infosys}
              alt="infosys"
            />
            <Image
              className="company-img"
              width={120}
              height={120}
              src={itcInfo}
              alt="itcInfo"
            />
            <Image
              className="company-img"
              width={120}
              height={120}
              src={deloitte}
              alt="deloitte"
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
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default StudentWorking;
