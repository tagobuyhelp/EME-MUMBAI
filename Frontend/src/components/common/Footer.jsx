import Image from "next/image";
import Link from "next/link"



export const Footer = () => {
  const addressUrl = "https://maps.app.goo.gl/MnUFq3bQptnJTR626";
  const addressUrl2 = "https://maps.app.goo.gl/HzhGJgQaWtG4G2C5A";
  return (
    <div className="w-full bg-[#131932]">
      <div className="bg-[#131932] text-[#FFFFFF] w-full 2xl:w-[1380px] mx-auto lg:max-h-[522px] py-[20px] px-[20px] lg:py-[40px] lg:px-[80px]">
        <div className='flex flex-col lg:flex-col justify-between items-start gap-[20px] lg:gap-8'>
          {/* EME logo Description logo done */}
          <div className='flex flex-col lg:flex-col justify-start items-start gap-[20px] lg:gap-5'>
            <div className=" flex flex-col justify-start cursor-pointer">
              <Image
                className=" w-[90px] h-[33px] lg:w-[120px] lg:h-[47px]  "
                width={100}
                height={100}
                src="/assets/images/eme.svg"
                alt="EME Academy Mumbai Logo" />
              <div className='text-[10px] md:text-[10px] text-[#ffffff] font-bold text-nowrap ml-[13px] z-[30]'>
                A <span className='text-[#E87D1A]'>Decade</span> of Excellence
              </div>
            </div>

            <div className='flex flex-col w-full max-w-[1380px] md:flex-row justify-start items-start md:justify-between md:items-center md:gap-[18px]'>
              <div className='flex-1 flex flex-col text-[12px] lg:text-[14px] leading-[18px] font-normal max-w-[864px] h-auto'>
                The #1 Professional Training Institute in Mumbai offering the most
                in-demand career training.
              </div>
              <div className='flex flex-row gap-[15px] lg:gap-[20px] pt-4 lg:pt-1'>
                <a href='https://www.facebook.com/profile.php?id=61589298807614' target='_blank'>
                  <Image
                    className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/fb.svg"
                    alt="EME Academy Mumbai facebook Logo" />
                </a>

                <a href='https://www.instagram.com/eme_academy_mumbai/' target='_blank'>
                  <Image
                    className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/insta.svg"
                    alt="EME Academy Mumbai Instagram Logo" />
                </a>

                <a href='https://www.pinterest.com/hiemeacademy/?invite_code=b612232379204c42a5e74b0e188e7d6d&sender=108578992882025' target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-[26px] h-[26px] lg:w-[36px] lg:h-[36px] hover:scale-105 transition-all ease-out">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a href='https://www.youtube.com/@EMEAcademyMumbai' target='_blank'>
                  <Image
                    className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/yt.svg"
                    alt="EME Academy Mumbai Youtube Logo" />
                </a>
                <a href='https://www.youtube.com/channel/UCcYuv-IUJMyKdy0e-T5E5DA' target='_blank'>
                  <Image
                    className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/linkedin.svg"
                    alt="EME Academy Mumbai LinkedIn Logo" />
                </a>
                <a href='https://www.quora.com/profile/EME-ACADEMY-4' target='_blank'>
                  <Image
                    className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mr-4 hover:scale-105 transition-all ease-out"
                    width={500}
                    height={500}
                    src="/assets/images/icons8-quora.svg"
                    alt="EME Academy Mumbai Quora Logo" />
                </a>
              </div>
            </div>

            {/* <=--------------Line Seprator-------------=>*/}
            <div className='w-full h-[1px] bg-[#FFFFFF33]'></div>

            <div >
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4'>
                {/* <=----------------------------------Quick Links-----------------------------------=> */}
                <div className=' flex flex-col font-normal leading-[20px] lg:leading-[24px] gap-2 lg:gap-[10px]'>
                  <div className='text-[14px] md:text-[16px] font-[700] leading-[10px] md:leading-[14px] text-nowrap text-white'>
                    Quick Links
                  </div>

                  <div className='flex flex-col justify-start items-start gap-[4px] text-[12px] lg:text-[14px] text-white/80 mt-[10px]'>
                    <Link href={"/"}>

                      <div className='hover:underline cursor-pointer'>
                        Home
                      </div>
                    </Link>
                    <Link href={"/about-us"}>
                      <div className='hover:underline cursor-pointer'>

                        About Us

                      </div>
                    </Link>

                    <Link href={"/blogs"}>
                      <div className='hover:underline cursor-pointer'>

                        Blogs

                      </div>
                    </Link>

                    <Link href={"/careers"}>
                      <div className='hover:underline cursor-pointer'>

                        Career

                      </div>
                    </Link>

                    <Link href={"/privacy-policy"}>
                      <div className='hover:underline cursor-pointer '>

                        Privacy Policy

                      </div>
                    </Link>
                    <Link href={"/payment-terms-and-refund-policy"}>
                      <div className='hover:underline cursor-pointer '>

                        Payment and Refund Policy

                      </div>
                    </Link>
                    <Link href={"/terms-and-condition"}>
                      <div className='hover:underline cursor-pointer '>

                        Terms and Condition

                      </div>
                    </Link>
                    <Link href={"/grievance-cell"}>
                      <div className='hover:underline cursor-pointer '>

                        Grievance Cell

                      </div>
                    </Link>


                  </div>
                </div>
                {/* <=----------------------------------Our Courses Links-----------------------------------=> */}
                <div className=' flex flex-col font-normal leading-[20px] lg:leading-[24px] gap-2 lg:gap-[10px]'>
                  <div className='text-[14px] lg:text-[16px] font-[700] leading-[10px] md:leading-[14px] text-nowrap text-white'>
                    Our Courses
                  </div>

                  <div className='flex flex-col justify-start items-start gap-[4px] text-[12px] lg:text-[14px] text-white/80 mt-[10px]'>
                    <Link href={"/data-analytics-course-in-mumbai"}>
                      <div className='hover:underline cursor-pointer'>

                        Data Analytics

                      </div>
                    </Link>
                    <Link href={"/maincourse/sap-training-mumbai"}>

                      <div className='hover:underline cursor-pointer'>
                        SAP Course
                      </div>
                    </Link>
                    <Link href={"/maincourse/web-development"}>
                      <div className='hover:underline cursor-pointer'>

                        Web Development

                      </div>
                    </Link>
                    <Link href={"/maincourse/digital-marketing-course-in-mumbai"}>
                      <div className='hover:underline cursor-pointer'>

                        Digital Marketing

                      </div>
                    </Link>
                    <Link href={"/maincourse/data-science-course-in-mumbai"}>
                      <div className='hover:underline cursor-pointer'>

                        Data Science

                      </div>
                    </Link>

                    <Link href={"/maincourse/graphic-design-course-in-mumbai"}>
                      <div className='hover:underline cursor-pointer '>

                        Graphic Design Course

                      </div>
                    </Link>

                    <Link href={"/cyber-security-course-in-mumbai"}>
                      <div className='hover:underline cursor-pointer '>

                        Cyber Security

                      </div>
                    </Link>

                    <Link href={"/generative-ai-course-training-in-mumbai"}>
                      <div className='hover:underline cursor-pointer '>

                        Prompt Engineering

                      </div>
                    </Link>

                  </div>
                </div>
                {/* <=----------------------------------Contact Us-----------------------------------=> */}
                <div className='flex flex-col justify-items-end font-normal  mt-6 lg:mt-0 w-[299px] h-auto lg:w-[530px]'>
                  <ul className=' space-y-3 lg:space-y-2'>
                    <li className='text-[14px] lg:text-[16px] font-[700] leading-[10px] lg:leading-[18px] text-white'>
                      Contact Us
                    </li>
                    <div className='flex flex-col justify-start items-start gap-2 text-[12px] md:text-[14px] leading-[20px] lg:leading-[24px] text-[#FAF9F9]'>
                      <div className='font-bold text-lg'>EME Academy Mumbai - Digital Marketing | SAP | Web Development | Data Analytics | Graphic Designing Institute</div>
                      <div className='flex mt-[10px] hover:underline cursor-pointer'>

                        <Link href={addressUrl} target="_blank" className='flex gap-2'>
                          <Image
                            width={25}
                            height={25}
                            className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] shrink-0"
                            src="/assets/images/Web_Development/icons/icons8-india-48.png"
                            alt="Location Icon" />8th floor, RUPA SOLITAIRE, MILLENNIUM BUSINESS PARK, 814, D wing, Mahape, Navi Mumbai, Maharashtra 400710
                        </Link>
                      </div>
                      <div className='flex mt-[10px] hover:underline cursor-pointer'>
                        <Link href={addressUrl2} target="_blank" className='flex text-wrap gap-2'>
                          <Image
                            className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] "
                            width={25}
                            height={25}
                            src="/assets/images/Web_Development/icons/icons8-uk-48.png"
                            alt="Location Icon" />EME Academy, 275 New north Road, islington, London, N1 7AA, United Kingdom
                        </Link>
                      </div>
                      <li className='flex items-center gap-2 mt-[5px] lg:mt-[15px] '>
                        <Image
                          className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                          width={500}
                          height={500}
                          src="/assets/icons/call.svg"
                          alt="call icon" />
                        <a className='hover:underline cursor-pointer' href="tel:+91-9831284098">9831284098</a> <span>/</span> <span className='hover:underline cursor-pointer'><a href="tel:+91-9093926145">9093926145</a></span>
                      </li>

                      <li className='flex items-center  gap-2 mt-[5px] lg:mt-[15px] hover:underline cursor-pointer'>

                        <Image
                          className=" w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  "
                          width={500}
                          height={500}
                          src="/assets/icons/sms.svg"
                          alt="call icon" />
                        <a href="mailto:infomumbai@emeacademy.co.in">
                          infomumbai@emeacademy.co.in
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <=----------------------------------Copyright and developed by-----------------------------------=> */}
      <div className='w-full bg-[#ffffff]'>
        <div className='w-full mx-auto 2xl:w-[1380px] flex text-black flex-col md:flex-row justify-center items-center gap-[10px] md:items-center  md:justify-between px-[20px]  lg:px-24  py-[20px]  text-[11px] lg:text-[12px] xl:text-[14px] font-[400] leading-[12px] lg:leading-[16px]'>
          <div className='text-sm lg:text-base'> © 2025 <span className='text-[#00A2E7] font-[600]'>EME Academy Mumbai Educational & Welfare Trust</span>  | All Rights Reserved. </div>
          <div className='text-[12px] lg:text-base'>Developed By <a href="https://mumbai.emeacademy.co.in/" className='text-sm lg:text-lg  font-[600] text-[#00A2E7]'>EME Academy Mumbai Team</a>
          </div>
        </div>
      </div>
    </div>
  )
}
