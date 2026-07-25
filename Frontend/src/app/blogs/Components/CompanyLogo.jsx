import CTAButton from "@/components/common/CtaButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const blogCompanies = [
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

export default function CompanyLogo({ _this }) {
  return (
    <>
      <div className="flex flex-col gap-2 text-[14px] bg-[#F0F3F8] rounded-[14px] py-2">
        <div className="px-4 text-[#232D63] text-center py-1 text-[13px] md:text-[15px] font-[700]">
          Our Students are Currently Working In
        </div>
        <Marquee autoFill speed={35} className="px-4 pb-2">
          {blogCompanies.map((company, index) => (
            <div key={index} className="rounded-[10px] border border-gray-200/80 bg-white flex items-center justify-center py-1.5 px-3 mx-2 h-[48px] w-[130px] shadow-sm">
              <img
                className="max-h-[36px] max-w-[110px] w-auto h-auto object-contain"
                src={company.src}
                alt={company.alt}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <CTAButton
        name="Enquire Now"
        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
        _this={_this}
      />
    </>
  );
}
