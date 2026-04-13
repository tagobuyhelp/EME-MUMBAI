import { CheckCircle } from "lucide-react";

import Image from "next/image";
export default function KeypointSapBasic() {
  const data = [
    {
      name: "Suitable for :",
      id: 1,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_FICO/KeyOne.svg",
      decs: (
        <div className="flex flex-col gap-2">
          <div className="flex items-center  gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p className="leading-4">
              Candidates with a background in IT or Computer Science
            </p>
          </div>
          <div className="flex items-center  gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p className="leading-4">
              Graduates or postgraduates aiming for a career in SAP Basis
            </p>
          </div>
          <div className="flex items-center  gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p className="leading-4">
              Network administrators or system admins looking to switch to SAP
            </p>
          </div>
          <div className="flex items-center  gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p className="leading-4">
              Individuals with knowledge in database, OS, or system management
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Career Scope:",
      id: 2,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_FICO/KeyTwo.svg",
      decs: (
        <div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>SAP Basis Consultant</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>System Administrator</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>SAP Technical Consultant</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>Cloud & Infrastructure Specialist</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>SAP System Support Engineer</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>SAP Landscape Architect</p>
          </div>
        </div>
      ),
    },
    {
      name: "Key Highlights:",
      id: 3,
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_FICO/KeyThree.svg",
      decs: (
        <div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>100% Placement Assistance</p>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>80% Practical Experience</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>Paid Internships</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CheckCircle size={16} className="text-green-600 mt-1" />
            </div>
            <p>Mock Interview</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex w-full h-auto bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
      <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-start py-[10px] px-[10px] md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-[20px] px-[10px] gap-[25px] ">
          {data.map((data) => (
            <div
              key={data.id}
              className="h-auto flex flex-col gap-[10px] bg-gradient-to-b from-[#F9FBFE] to-white border border-[#eaecf0] px-[30px] py-[20px]  lg:h-auto  rounded-xl hover:cursor-pointer"
            >
              <div className="flex items-start pb-2">
                <Image
                  className="w-full h-full"
                  src={data.image}
                  width={30}
                  height={30}
                  alt="team"
                />
              </div>
              <div className="text-[#232D63] font-[700] text-[14px] md:text-[16px] tracking-[-0.2px]">
                {data.name}
              </div>
              <div className="text-[#252525] font-[400] text-[12px] md:text-[14px] leading-[30px] tracking-[-0.2px]">
                {data.decs}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
