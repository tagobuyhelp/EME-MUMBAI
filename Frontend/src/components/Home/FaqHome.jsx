"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FaqHome({ faqs = [] }) {
  return (
    <section className="w-full py-10 md:py-16 bg-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 px-4 py-1.5 text-xs md:text-sm text-[#0057E2] font-bold bg-blue-50/50"
            >
              <HelpCircle className="h-4 w-4" />
              Got Questions?
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black text-gray-900 leading-tight"
            >
              Frequently Asked <span className="text-[#0057E2]">Questions</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-2 w-20"
            >
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="line"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id || faq.key || index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 5) }}
                >
                  <AccordionItem
                    value={faq.id || `item-${index}`}
                    className="border border-gray-100 rounded-2xl px-4 md:px-6 bg-gray-50/30 overflow-hidden transition-all duration-300 [&[data-state=open]]:bg-white [&[data-state=open]]:border-[#0057E2]/20 [&[data-state=open]]:shadow-lg [&[data-state=open]]:shadow-blue-50/50"
                  >
                    <AccordionTrigger className="text-sm md:text-base font-bold text-gray-800 py-4 hover:no-underline hover:text-[#0057E2] transition-colors text-left gap-4">
                      {faq.title || faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-[13px] md:text-sm leading-relaxed pb-5 pt-1">
                      {faq.desc || faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
