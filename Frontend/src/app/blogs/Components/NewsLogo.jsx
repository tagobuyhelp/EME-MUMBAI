import { Card } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";


export default function NewsLogo() {
    return (
        <div className="flex flex-col gap-2 text-[15px]  bg-[#F0F3F8] rounded-[14px]">
            <div className="px-4 text-[#232D63] text-[13px] text-center py-2 md:text-[15px] font-[700]">News Channels we featured</div>
            <Marquee autoFill className="px-4 pb-2">
                <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4">
                    <Image
                        className=""
                        width={80}
                        height={80}
                        src="/assets/images/blog/republic.svg"
                        alt="Full Stack Development"
                    />
                </Card>
                <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4">
                    <Image
                        className=""
                        width={80}
                        height={80}
                        src="/assets/images/blog/dailyhunt.svg"
                        alt="Full Stack Development"
                    />
                </Card>
                <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4">
                    <Image
                        className=""
                        width={80}
                        height={80}
                        src="/assets/images/blog/klam.svg"
                        alt="Full Stack Development"
                    />
                </Card>
                <Card className="rounded-[8px] border bg-white flex flex-col justify-center items-center gap-2 py-2 px-4 mx-4">
                    <Image
                        className=""
                        width={80}
                        height={80}
                        src="/assets/images/blog/abpnews 1.svg"
                        alt="Full Stack Development"
                    />
                </Card>
            </Marquee>
        </div>
    )
}
