import { AnotherHeader } from '@/components/common/AnotherHeader'
import { Footer } from '@/components/common/Footer'
import React from 'react'

export default function page() {
  return (
    <> 

    <AnotherHeader/>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-6 md:py-8 h-full min-h-[50vh]">
          {/* Course Overview */}
          <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px] mt-2">
            <h2 className="text-[#232D63] text-xl text-center font-semibold p-2">GRIEVANCE CELL</h2>
            <p className="text-[#727272] text-[12px] lg:text-[16px] text-center">
            We take the grievances of our candidates very seriously and have established a Grievance Cell to address all complaints within <strong>48 hours</strong> through mediation. The decision of the Cell shall be binding on all parties, including the Office Management.
            </p>
          </section>
          <p className='text-[#000000] text-[12px] lg:text-[16px] text-center'>
          All complaints may be directed to the Mediator at <a href="mailto:grievance@emeacademy.co.in" className='hover:underline cursor-pointer text-[#232D63]'>
          grievance@emeacademy.co.in
                        </a>
          </p>
        </div>
        <Footer />
    </>
  )
}
