

function Featured() {
    return (
        <div className="w-full h-auto  max-w-[1380px] mx-auto  py-5 md:py-[70px]  px-[20px] md:px-24 ">
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-[40px] ">
                <div className="w-full md:w-1/2  flex gap-x-2 text-[#042A76] text-3xl lg:leading-10 lg:text-5xl  font-bold  justify-center md:justify-start">
                    <div><span className="text-[#E87D1A]">F</span>eatured
                        <span><svg className="w-[122px] md:w-[156px]" xmlns="http://www.w3.org/2000/svg" width="156" height="10" viewBox="0 0 156 10" fill="none">
                            <path d="M0.28125 8C42.9554 0.323072 102.028 -0.316711 155.765 8" stroke="#E87D1A" strokeWidth="2.24694" />
                        </svg></span></div>
                    <span className='  text-[#2251FF] lg:leading-10 lg:text-5xl  font-bold '>In

                    </span>


                </div>
                <div className="w-full md:w-1/2 text-base text-center md:text-start font-medium">
                    We take pride in our exceptional achievements and high student success rate. Check out our achievements below.
                </div>
            </div>

        </div>
    )
}

export default Featured