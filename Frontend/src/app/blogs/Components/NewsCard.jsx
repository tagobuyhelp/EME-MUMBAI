
import CTAButton from '@/components/common/CtaButton';
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function NewsCard({_this}) {
    return (
        <div className="flex flex-col gap-2 text-[15px]  bg-[#F0F3F8] rounded-[14px]">
            <div className="px-4 text-[#232D63] text-center py-2 text-[13px] md:text-[15px] font-[700]">In The News</div>
            <Marquee autoFill className="px-4 pb-2">
                <Card className="w-[200px] md:w-[198px] rounded-[12px] border bg-white flex flex-col justify-start gap-2 p-4 mx-4">
                    <div className="flex flex-row justify-between gap-2 text-[10px] text-[#787878] font-[500]">
                        <Image
                            className="rounded-full"
                            width={50}
                            height={50}
                            src="/assets/images/blog/republic.svg"
                            alt="Full Stack Development"
                        />
                        17 jan 2022
                    </div>
                    <div className="text-[11px] font-[300] flex justify-start text-start">
                        करियर के लिए प्रोफेशनल कोर्स की चिंता खत्म, EME Academy ने स्‍टूडेंट्स को दी नई दिशा
                        दिन बदल रहे
                    </div>
                </Card>
                <Card className="w-[200px] md:w-[198px] rounded-[12px] border bg-white flex flex-col justify-start gap-2 p-4 mx-4">
                    <div className="flex flex-row justify-between gap-2 text-[10px] text-[#787878] font-[500]">
                        <Image
                            className="rounded-full"
                            width={50}
                            height={50}
                            src="/assets/images/blog/dailyhunt.svg"
                            alt="Full Stack Development"
                        />
                        17 jan 2022
                    </div>
                    <div className="text-[11px] font-[300] flex justify-start text-start">
                        City of Joy Navigates the Future of Education, Skills, and Employment in the Post-AI Era
                    </div>
                </Card>
                <Card className="w-[200px] md:w-[198px] rounded-[12px] border bg-white flex flex-col justify-start gap-2 p-4 mx-4">
                    <div className="flex flex-row justify-between gap-2 text-[10px] text-[#787878] font-[500]">
                        <Image
                            className="rounded-full"
                            width={50}
                            height={50}
                            src="/assets/images/blog/klam.svg"
                            alt="Full Stack Development"
                        />
                        17 jan 2022
                    </div>
                    <div className="text-[11px] font-[300] flex justify-start text-start">
                        City of Joy Navigates the Future of Education, Skills, and Employment in the Post-AI Era
                    </div>
                </Card>

            </Marquee>
            <CTAButton name="Enquire Now"
                styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
                _this={_this}
            />
        </div>
    )
}
