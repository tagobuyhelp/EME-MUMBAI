"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const landingCompanies = [
  { src: "/assets/icons/companies/Infosys_icon.svg", alt: "Infosys" },
  { src: "/assets/icons/companies/Deloitte2.svg", alt: "Deloitte" },
  { src: "/assets/icons/companies/AccentureIcon.svg", alt: "Accenture" },
  { src: "/assets/icons/companies/flipkart.png", alt: "Flipkart" },
  { src: "/assets/icons/companies/ntt-data.png", alt: "NTT DATA" },
  { src: "/assets/icons/companies/birlasoft.png", alt: "Birlasoft" },
  { src: "/assets/icons/companies/hp.png", alt: "HP" },
  { src: "/assets/icons/companies/maruti-suzuki.png", alt: "Maruti Suzuki" },
  { src: "/assets/icons/companies/yash-technologies.png", alt: "YASH Technologies" },
  { src: "/assets/icons/companies/teamlease.png", alt: "TeamLease" },
  { src: "/assets/icons/companies/m-pokket.png", alt: "mPokket" },
  { src: "/assets/icons/companies/TCS_icon.svg", alt: "TCS" },
  { src: "/assets/icons/companies/WiproIcon.svg", alt: "Wipro" },
  { src: "/assets/icons/companies/capgemini.svg", alt: "Capgemini" },
  { src: "/assets/icons/companies/CognizantIcon.svg", alt: "Cognizant" },
  { src: "/assets/icons/companies/genpact.svg", alt: "Genpact" },
  { src: "/assets/icons/companies/fusion.png", alt: "Fusion BPO" },
  { src: "/assets/icons/companies/meraqui.png", alt: "Meraqui" },
];

export default function SliderLandingCompany() {
  return (
    <div className="w-full relative z-20">
      <h1 className="text-center font-semibold text-[#393939] text-xl">
        Our students are working in
      </h1>
      <div className="w-full flex items-center justify-around flex-nowrap mx-auto overflow-hidden whitespace-nowrap flex-shrink-0 group py-6">
        <Marquee pauseOnHover autoFill speed={35}>
          {landingCompanies.map((company, index) => (
            <div key={index} className="px-6 py-3 bg-white border border-[#D0D0D0] rounded-lg shadow-sm mx-4 flex items-center justify-center h-20 w-40">
              <Image
                className="h-12 w-auto max-w-full object-contain"
                width={160}
                height={50}
                src={company.src}
                alt={company.alt}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
