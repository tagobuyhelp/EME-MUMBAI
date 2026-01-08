import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


export default function FaqHome({ faqs = [] }) {


  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-2 items-center py-5 md:py-10 px-5 md:px-24">
      <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-x-10">
        <div className='relative flex justify-center text-center gap-2 text-[22px] font-semibold text-[#4B4B4B]'>
          <span className='flex flex-col items-end'>
            <span className='text-[22px] text-[#232D63]'>FAQ&apos;s</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={50}
              height={30}
              className="ml-2"
            />

          </span>
        </div>
        <div className="w-full mx-auto mt-4">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id || faq.key}
                value={faq.id}
                className="bg-[#ffffff] w-full border border-[#DDDDDD] rounded-[10px] px-3 md:px-6 md:py-2
                                    [&[data-state=open]]:bg-[#F9F9F9] transition-colors duration-200"
              >
                <AccordionTrigger className="font-semibold text-[12px] py-1 md:py-2 text-start md:text-lg text-[#232D63]
                                         hover:no-underline [&>svg]:text-[#000000] [&[data-state=open]>svg]:bg-[#FFFFFF] [&[data-state=open]>svg]:text-[#000000] [&[data-state=open]>svg]:rounded-lg [&[data-state=open]>svg]:w-7 [&[data-state=open]>svg]:h-7 [&[data-state=open]>svg]:border [&[data-state=open]>svg]:border-[#D8DADC]">
                  {faq.title || faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-normal text-[12px] lg:text-sm text-[#4B4B4B] leading-[22px]">
                  {faq.desc || faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>


    </div>


  )
}
