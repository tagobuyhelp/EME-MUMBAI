import { AnotherHeader } from '@/components/common/AnotherHeader'
import { Footer } from '@/components/common/Footer'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <> 

    <AnotherHeader/>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-6 md:py-8">
          {/* Course Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px] mt-2">
            <h2 className="text-[#232D63] text-xl text-center font-semibold p-2">Payment Terms and Refund Policy</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Thank you for choosing EME Academy for your learning and career growth. We value your trust and aim to provide a smooth and transparent experience. Please read our updated Payment Terms and Refund Policy below:
            </p>
          </section>

          {/* Certification Training */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold">1. Payment Terms</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(a) </strong>Full payment of the course fee is required at the time of registration, unless a written agreement has been made with EME Academy for a flexible payment option.
            </p>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(b) </strong> For programs that offer a trial period, access to the course content (including the trial window) will be provided only after the full course fee is paid.
            </p>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(c) </strong> All payments must be made through official EME Academy payment channels only. EMI or instalment options are available for select programs and subject to approval.
            </p>
          </section>

          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">2. Refund Policy</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">We appreciate that circumstances may change after registration. EME Academy offers a flexible refund policy:</p>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(a) Eligibility</strong>
            <ul>
                <li>• Students are eligible to apply for a full refund within 3 working days from the date of registration. Refund will be made after a deduction of Rs. 3000/- as processing fee.</li>
            </ul>
            </p>

            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(b) Refund Approval</strong>
            <ul>
                <li>•	All refund requests must be submitted in writing to <Link className="text-[#0057E2] underline" href="mailto:infomumbai@emeacademy.co.in" target="_blank">infomumbai@emeacademy.co.in</Link> within the 3-day window.</li>
                <li>•	Refunds are subject to internal review and approval. EME Academy may deduct applicable processing fees or bank charges, as per internal policy.</li>
            </ul>
            </p>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(c) Refund Timeline</strong>
            <ul>
                <li>•	Approved refunds will be <strong>initiated within 5–7 business days</strong> of confirmation.</li>
                <li>•	The refund will be credited to the candidate only.</li>
            </ul>
            </p>
            <p className="text-[#727272] text-[12px] lg:text-[16px]">
            <strong>(d) Non-Refundable Conditions</strong>
            <ul>
                <li>•	No refunds will be granted after <strong>the 3-day trial period,</strong> regardless of course participation or attendance.</li>
                {/* <li>•	Courses once accessed beyond the trial duration are considered fully enrolled and non-refundable.</li> */}
            </ul>
            </p>
          </section>

          {/* <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">3. Important Notes</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]   ">
            <ul>
                <li>•	Refunds are not applicable to students who have downloaded significant content or completed assignments during the trial period.</li>
                <li>•	EMI or loan-based enrolments may have different cancellation and refund terms as per the financier’s policy.</li>
            </ul>
            </p>
          </section> */}

          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
            <h2 className="text-[#232D63] text-xl font-semibold   ">3. Contact Us</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px]   ">
            For any questions, refund requests, or payment-related assistance, please contact us at:
            </p>
          </section>
          <p>
          <strong className='text-[#0057E2]'>Email: </strong><a href="mailto:infomumbai@emeacademy.co.in" className='hover:underline cursor-pointer'>
                           infomumbai@emeacademy.co.in
                        </a>
          </p>
          <p>
            <strong className='text-[#0057E2]'>Phone:</strong> <a className='hover:underline cursor-pointer' href="tel:+91-8207205867">8207205867</a> <span>/</span> <span className='hover:underline cursor-pointer'><a href="tel:+91-9831284098">9831284098</a></span>
          </p>
        </div>
        <Footer />
    </>
  )
}
