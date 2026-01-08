import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function Certification() {
    return (
        <Card className="rounded-2xl border p-0 gap-0 shadow-none">
            <div className="px-4 py-2 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                    <Image
                        width={20}
                        height={20}
                        src="/assets/images/blog/tick.svg"
                        alt="certified"
                        className="w-4 h-4"
                    />
                    Certified by
                </div>
                <div className="flex items-center justify-between ">
                    <Image width={48} height={48} src="/assets/images/blog/MSME.svg" alt="MSME" className="w-12 h-12" />
                    <Image width={48} height={32} src="/assets/images/blog/ISO.svg" alt="ISO" className="w-12 h-8" />
                    <Image width={64} height={50} src="/assets/images/blog/startupindia.svg" alt="Startup India" className="w-16 h-10" />
                </div>
            </div>
        </Card>
    )
}
