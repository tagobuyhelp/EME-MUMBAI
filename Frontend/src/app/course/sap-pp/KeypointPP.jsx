
import { CheckCircle } from "lucide-react";

import Image from 'next/image'
import KeyHigh1 from "../../../../public/assets/images/common/KeyHighOne.svg";
import KeyHigh2 from "../../../../public/assets/images/common/KeyHighTwo.svg";
import KeyHigh3 from "../../../../public/assets/images/common/KeyHighThree.svg";

export default function KeypointPP() {
    const data = [
        {
            name: 'Suitable for :',
            id: 1,
            image: KeyHigh1,
            decs: <div>
                <div className='flex items-start justify-center  gap-2'>
                    <div className='w-6 h-6'>
                        <CheckCircle size={16} className='text-green-600 mt-1' />
                    </div>
                    <p>Business knowledge in the area of Production Planning & Manufacturing</p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <div className='w-6 h-6'>
                        <CheckCircle size={16} className='text-green-600 mt-1' />
                    </div>
                    <p>Any graduate or post graduate with production/plant experience.</p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <div className='w-6 h-6'>
                        <CheckCircle size={16} className='text-green-600 mt-1' />
                    </div>
                    <p>Any fresher/experience civil engineer/Mechanical engineer or production engineer.</p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <div className='w-6 h-6'>
                        <CheckCircle size={16} className='text-green-600 mt-1' />
                    </div>
                    <p>1-3 years domain experience in production planning/manufacturing required.</p>
                </div>
            </div>
        },
        {
            name: 'Career Scope:',
            id: 2,
            image: KeyHigh2,
            decs: <div>

                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Consultant</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Senior Consultants</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Assistant managers</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Senior managers</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Business analysts</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Inventory Managers</p>
                </div>

            </div>
        },
        {
            name: 'Key Highlights:',
            id: 3,
            image: KeyHigh3,
            decs: <div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>100% Job Opportunities</p>
                </div>

                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>80% Practical Experience</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Paid Internships</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Affordable price</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Mock Interview</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <CheckCircle size={16} className='text-green-600 mt-1' /></div>
                    <p>Easy monthly installment</p>
                </div>
            </div>
        },
    ]
    return (
        <div className="flex w-full h-auto bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
            <div className='w-full  max-w-[1380px] mx-auto flex flex-col items-start py-[10px] px-[10px] md:px-24'>
                <div className='grid grid-cols-1 lg:grid-cols-3 py-[20px] px-[10px] gap-[25px] '>
                    {
                        data.map((data) => (
                            <div key={data.id} className="h-auto flex flex-col gap-[10px] bg-gradient-to-b from-[#F9FBFE] to-white border border-[#eaecf0] px-[30px] py-[20px]  lg:h-auto  rounded-xl hover:cursor-pointer">
                                <div className='flex items-start pb-2'>
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
                                <div className="text-[#252525] font-[400] text-[12px] md:text-[14px] leading-[30px] tracking-[-0.9 px]">
                                    {data.decs}
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
