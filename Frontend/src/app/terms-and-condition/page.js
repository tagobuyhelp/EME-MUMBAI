import { AnotherHeader } from '@/components/common/AnotherHeader'
import { Footer } from '@/components/common/Footer'
import Link from 'next/link'
import React from 'react'

const addressUrl = "https://maps.app.goo.gl/29GowbGvjuF3pLYq5";
export default function page() {
  return (
    <> 
      <AnotherHeader/>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-3 md:gap-4 px-4 py-6 md:py-8">
        {/* Terms of Use */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px] mt-2">
          <h2 className="text-[#232D63] text-xl text-center font-semibold p-2">Terms and Condition</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
  {`These Terms of Use govern your access to and use of the website `}
  <a href="https://emeacademy.co.in/" target="_blank" rel="noopener noreferrer" className="text-[#0057E2] underline">https://emeacademy.co.in/</a>
  {` and all services, content, and resources provided by EME Academy Educational & Welfare Trust (hereinafter referred to as "EME Academy", "we", or "our"). By accessing or using our website or services, you agree to be bound by these Terms.`}
</p>
        </section>

        {/* Definitions */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">a) Definitions</h2>
          <ul>
            <li>• {"“User”"} refers to any individual or organization accessing this Site.</li>
            <li>• {"“Site”"} means the website <a href="https://emeacademy.co.in/" target="_blank" rel="noopener noreferrer" className="text-[#0057E2] underline">https://emeacademy.co.in/</a> owned and operated by EME Academy.</li>
            <li>• “Services” include all offerings, courses, content, communication, and materials made available through the Site.</li>
            <li>• “Platform” includes the website, mobile app (if applicable), email/SMS communications, WhatsApp groups, Telegram groups, social media pages (Facebook, Instagram, etc.), or any third-party platform officially used by EME Academy.</li>
          </ul>
        </section>

        {/* Acceptance of Terms */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">b) Acceptance of Terms</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            By using the Site or enrolling in any Service, you acknowledge and agree to these Terms. If you do not accept any part of the Terms, you must refrain from using the Services. Continued usage constitutes binding acceptance of any changes made.
          </p>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Note: We may revise these Terms at any time. Any changes will be effective immediately upon posting. Continued use after changes constitutes your acceptance of the updated Terms.
          </p>
        </section>

        {/* Eligibility & Account Registration */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">c) Eligibility & Account Registration</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Users must be at least 16 years old to access or enrol in courses. There is no upper age limit. Users may be required to register for an account with a valid mobile number and email. OTP verification or email confirmation may be required for account activation.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">d) User Responsibilities</h2>
          <ul>
            <li>• Verify course suitability before enrolment.</li>
            <li>• Respect all copyright and content guidelines.</li>
            <li>• Do not misuse, tamper with, or attempt to disrupt the Platform.</li>
            <li>• Enrol in good faith with the intent to complete and pay for the course.</li>
            <li>• Sign digitally or physically to indicate full agreement with institutional policies.</li>
            <li>• Users to follow various guidelines, notifications posted in the website time to time.</li>
          </ul>
        </section>

        {/* User Conduct & Responsibilities */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">e) User Conduct & Responsibilities</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Users agree not to:
          </p>
          <ul>
            <li>• Use the Site for any unlawful purpose;</li>
            <li>• Attempt to breach or bypass security measures of the Site;</li>
            <li>• Post or transmit harmful content such as viruses, malware, or offensive materials;</li>
            <li>• Infringe upon the rights of others, including intellectual property rights.</li>
          </ul>
        </section>

        {/* Course enrolment & Payment Commitment */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">f) Course enrolment & Payment Commitment</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Enrolling in a course at EME Academy constitutes a binding agreement to complete the program and pay all applicable fees. Non-payment or course withdrawal may attract penalties unless permitted under written institutional policy.
          </p>
        </section>

        {/* Curriculum & Faculty Changes */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">g) Curriculum & Faculty Changes</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            We reserve the right to update curriculum, course content, assessment structures, or assign alternate faculty/trainers at our discretion for betterment, based on academic needs and industry updates. Students will be notified through appropriate channels.
          </p>
        </section>

        {/* Intellectual Property Rights */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">h) Intellectual Property Rights</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            All the materials—videos, documents, presentations, logos, trademarks, UI/UX, and proprietary tools—are protected under copyright and intellectual property laws. Unauthorized use, copying, resale, or redistribution is strictly prohibited.
          </p>
        </section>

        {/* Platform Accessibility & Third-Party Services */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">i) Platform Accessibility & Third-Party Services</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Certain Platform components may be managed or hosted by third-party service providers. EME Academy is not responsible for any service disruption caused by these external parties. Use of such services will be governed by their respective terms.
          </p>
        </section>

        {/* Force Majeure */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">j) Force Majeure</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            EME Academy shall not be liable for delays, failures, or disruptions caused by events beyond our control, including but not limited to: natural disasters, pandemics, government restrictions, internet failures, war, civil unrest, strikes, satellite failures, or other uncontrollable forces.
          </p>
        </section>

        {/* Warranty */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">k) Warranty</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            All services, content, and information on the Site are provided “as is” and “as available”. EME Academy makes no warranties of any kind (express or implied) including but not limited to:
          </p>
          <ul>
            <li>• Warranties of merchantability;</li>
            <li>• Fitness for a particular purpose;</li>
            <li>• Non-infringement;</li>
            <li>• Accuracy, reliability, or availability of the Site or its content.</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">l) Limitation of Liability</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            To the fullest extent permitted by law, EME Academy shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Site or its Services.
          </p>
        </section>

        {/* Territory & Compliance */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">m) Territory & Compliance</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Users accessing the Platform from outside India do so at their own risk. It is their sole responsibility to ensure compliance with local laws. Access from jurisdictions where our services are prohibited is strictly forbidden.
          </p>
        </section>

        {/* Privacy */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">n) Privacy</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            Please refer to our Privacy Policy to understand how we collect, use, and protect your personal information.
          </p>
        </section>

        {/* Governing Law & Jurisdiction */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">o) Governing Law & Jurisdiction</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
          </p>
        </section>

        {/* Contact Us */}
        <section className="flex flex-col gap-3 md:gap-4 text-[#727272] text-[12px] lg:text-[16px]">
          <h2 className="text-[#232D63] text-xl font-semibold">p) Contact Us</h2>
          <p className="text-[#727272] text-[12px] lg:text-[16px]">
            For queries or concerns regarding these Terms, please contact us at:
          </p>
          <p>
            <strong className='text-[#0057E2]'>Address: </strong>
            <Link href={addressUrl} target="_blank" className='flex gap-2 cursor-pointer'>
               EME Academy, 5th Floor, TOWER-1, Globsyn Crystals, 505, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal
            </Link> 
          </p>
          <p>
            <strong className='text-[#0057E2]'>Phone: </strong> 
            <a className='hover:underline cursor-pointer' href="tel:+91-9831284098">9831284098</a> 
            <span>/</span> 
            <span className='hover:underline cursor-pointer'>
              <a href="tel:+91-9093926145">9093926145</a>
            </span>
          </p>
          <p>
            <strong className='text-[#0057E2]'>Email: </strong>
            <a href="mailto:info@emeacademy.co.in" className='hover:underline cursor-pointer'>
              info@emeacademy.co.in
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}