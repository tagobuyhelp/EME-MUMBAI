import callIcon from '../../public/assets/images/call2.svg'
import whatsapp from '../../public/assets/images/WhatsAppIcon.svg'
import Image from 'next/image'
export default function Chat() {
    return (
        <>
            <div className="hidden md:inline fixed right-[5px] bottom-[10px] lg:right-[20px] lg:bottom-[20px] z-[99999]">
                <div className=" flex flex-col gap-[10px] items-end group ">
                    <div className="">
                        <div className=' group-hover:flex flex-col    py-[0px] justify-center items-center rounded-xl'>
                            <div className="flex flex-col gap-[9px] justify-center items-center">
                                {/* WhatsApp Button */}
                                <a href="https://wa.me/+918207205867" target="_blank"
                                className="relative group cursor-pointer z-[999] flex rounded-full items-center gap-[10px] justify-center">
                                    <div className="animate-pulse-circle absolute w-[35px] h-[35px] bg-green-500 opacity-40 rounded-full"></div>
                                    <Image className="w-[40px] h-[40px] animate-zoom" width={400} height={400} src={whatsapp} alt="WhatsApp icon" unoptimized />
                                </a>

                                {/* Call Button */}
                                <a href="tel:+918207205867"
                                className="relative group cursor-pointer z-[999] flex rounded-full items-center gap-[10px] justify-center">
                                    <div className="animate-pulse-circle absolute w-[35px] h-[35px] bg-blue-500 opacity-40 rounded-full"></div>
                                    <Image className="w-[40px] h-[40px] animate-zoom" width={400} height={400} src={callIcon} alt="Call icon" unoptimized />
                                </a>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}
