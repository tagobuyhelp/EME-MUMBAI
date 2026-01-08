import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function PlacementAwardCard() {
    return (
        <Card className="w-full rounded-2xl border p-0 shadow-none">
            <div className="w-full px-4 py-2">
                <div className="w-full flex items-start gap-2 mb-2">
                    <Image width={50} height={50} src="/assets/images/blog/Starbest.svg" alt="star" className="w-6 h-6 mt-1" />
                    <p className="text-xs font-semibold text-[#232D63]">
                        Best <span className="text-[#2251FF]">Placement Institute</span> of the year - 2024
                    </p>
                </div>
                <div className='w-[200px] h-[100px] '>

                    <Image
                        width={500}
                        height={500}
                        src="/assets/images/blog/leaderaward.svg"
                        alt="Leadership Award"
                        className="h-full object-fill w-full"
                    />
                </div>
            </div>
        </Card>

    )
}
