"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { Autoplay, Navigation } from 'swiper/modules';
// import HeroSliderOne from '../../public/assets/images/HeroSliderOne.png'
// import HeroSliderSix from '../../public/assets/images/HeroSliderSix.png'
// import HeroSliderSeven from '../../public/assets/images/HeroSliderSeven.png'
// import HeroSliderEight from '../../public/assets/images/HeroSliderEight.png'
// import HeroSliderNine from '../../public/assets/images/HeroSliderNine.png'
// import HeroSliderTen from '../../public/assets/images/HeroSliderTen.png'
// import HeroSliderEleven from '../../public/assets/images/HeroSliderEleven.png'
// import HeroSliderTwelve from '../../public/assets/images/HeroSliderTwelve.png'
// import EMENew_no_background from '../../public/assets/images/EMENew_no_background.png'
// import HeroSliderNew from '../../public/assets/images/HeroSliderNew.png'
// import profilePicNewOne from '../../public/assets/images/profilePicNewOne.png'
import profilePicNewTwo from '../../public/assets/images/profilePicNewTwo.png'
import profilePicNewThree from '../../public/assets/images/profilePicNewThree.png'
import profilePicNewFour from '../../public/assets/images/profilePicNewFour.png'
import profilePicNewFive from '../../public/assets/images/profilePicNewFive.png'
import profilePicNewSix from '../../public/assets/images/profilePicNewSix.png'
import profilePicNewSeven from '../../public/assets/images/profilePicNewSeven.png'
import profilePicNewEight from '../../public/assets/images/profilePicNewEight.png'
import profilePicNewOne from '../../public/assets/images/profilePicNewOne.png'

export const HeroSlider = () => {
    const data = [
        
        {
            image: profilePicNewFive,
            decs: '“Where learning knows no bounds.”'
        },
        {
            image: profilePicNewSeven,
            decs: '“Where learning knows no bounds.”'
        },

        {
            image: profilePicNewThree,
            decs: '“Where learning knows no bounds.”'
        },
        {
            image: profilePicNewFour,
            decs: '“Where learning knows no bounds.”'
        },
       
        {
            image: profilePicNewSix,
            decs: '“Where learning knows no bounds.”'
        },
        {
            image: profilePicNewEight,
            decs: '“Where learning knows no bounds.”'
        },
        {
            image: profilePicNewOne,
            decs: '“Where learning knows no bounds.”'
        },
        {
            image: profilePicNewTwo,
            decs: '“Where learning knows no bounds.”'
        },
        
        
    ]
    return (
        <div className='w-full h-full flex justify-end items-center'>
            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}

                modules={[Autoplay, Navigation]}
                className='mySwiper w-full flex items-center mx-auto'
            >


                {
                    data.map((data, index) => (
                        <SwiperSlide key={index} className='swiper-zoom-container' >
                            <div className='w-[400px] lg:max-w-[550px] h-full' >
                                <div className='flex flex-col items-center justify-center gap-1 h-[330px] md:h-auto  relative '>
                                    <Image
                                        className="w-full  h-full object-contain object-top  lg:object-center "
                                        width={500}
                                        height={500}
                                        src={data?.image}
                                        alt="student Img" />
                                    {/* <div className='absolute bottom-[30px] text-[16px] left-[20px] lg:text-[20px] text-left font-[600] text-[#fff] z-[21]'>
                                        {data?.decs}
                                    </div> */}
                                    {/* <div className="w-full  h-full object-cover object-center bg-black/50 absolute z-[20]">

                                    </div> */}
                                </div>

                            </div>

                        </SwiperSlide>
                    ))
                }




            </Swiper>
        </div>
    )
}
