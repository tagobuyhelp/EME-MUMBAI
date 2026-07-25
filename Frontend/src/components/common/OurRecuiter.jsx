"use client"
import Image from "next/image"
import Marquee from "react-fast-marquee";

const recruiterLogos = [
    { src: "/assets/icons/companies/Infosys_icon.svg", alt: 'Infosys' },
    { src: "/assets/icons/companies/Deloitte2.svg", alt: 'Deloitte' },
    { src: "/assets/icons/companies/AccentureIcon.svg", alt: 'Accenture' },
    { src: "/assets/icons/companies/flipkart.png", alt: 'Flipkart' },
    { src: "/assets/icons/companies/ntt-data.png", alt: 'NTT DATA' },
    { src: "/assets/icons/companies/birlasoft.png", alt: 'Birlasoft' },
    { src: "/assets/icons/companies/hp.png", alt: 'HP' },
    { src: "/assets/icons/companies/maruti-suzuki.png", alt: 'Maruti Suzuki' },
    { src: "/assets/icons/companies/yash-technologies.png", alt: 'YASH Technologies' },
    { src: "/assets/icons/companies/teamlease.png", alt: 'TeamLease' },
    { src: "/assets/icons/companies/m-pokket.png", alt: 'mPokket' },
    { src: "/assets/icons/companies/TCS_icon.svg", alt: 'TCS' },
    { src: "/assets/icons/companies/WiproIcon.svg", alt: 'Wipro' },
    { src: "/assets/icons/companies/capgemini.svg", alt: 'Capgemini' },
    { src: "/assets/icons/companies/CognizantIcon.svg", alt: 'Cognizant' },
    { src: "/assets/icons/companies/genpact.svg", alt: 'Genpact' },
    { src: "/assets/icons/companies/fusion.png", alt: 'Fusion BPO' },
    { src: "/assets/icons/companies/meraqui.png", alt: 'Meraqui' },
];

export default function OurRecuiter() {
    return (
        <div className='w-full max-w-[1380px] mx-auto flex flex-col items-start gap-[5px] py-5 px-[20px] md:px-24'>
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
            <div className='w-full flex items-center justify-around flex-nowrap overflow-hidden whitespace-nowrap flex-shrink-0 py-2 lg:py-[20px]'>
                <Marquee pauseOnHover autoFill speed={35}>
                    {recruiterLogos.map((company, index) => (
                        <div key={index} className="h-[52px] w-[130px] lg:h-[60px] lg:w-[160px] mx-[10px] lg:mx-[16px] flex items-center justify-center bg-white px-3 py-2 rounded-xl border border-gray-200/80 shadow-sm">
                            <img
                                className="max-h-[38px] lg:max-h-[44px] max-w-[110px] lg:max-w-[135px] w-auto h-auto object-contain"
                                src={company.src}
                                alt={company.alt}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
