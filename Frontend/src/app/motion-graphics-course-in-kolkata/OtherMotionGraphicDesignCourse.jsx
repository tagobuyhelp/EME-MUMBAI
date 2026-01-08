
import Link from 'next/link'
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import studentIcon from "../../../public/assets/images/SAP_Course/common/cards/student.svg";
import employeeIcon from "../../../public/assets/images/SAP_Course/common/cards/employee.svg";
import durationIcon from "../../../public/assets/images/SAP_Course/common/cards/duration.svg";
import assistanceIcon from "../../../public/assets/images/SAP_Course/common/cards/assistance.svg";


export default function OtherMotionGraphicDesignCourse() {
    const courses = [
        {
            name: 'Graphic Designing',
            decs_name: 'Graphic Designing',
            id: 1,
            student: '80% Students',
            student2: 'Hired by MNCs',
            job: '1000+',
            job2: 'Employment Generated',
            duration: '6 Months',
            time: '',
            assistance: '100%',
            assistance2: 'Assistance',
            decsTwo: 'Certification Assistance',
            decsThree: 'Cutting-edge Curriculum.',
            link: '/graphic-design-course-in-kolkata',
        },
    ]
    return (
        <div className='w-full  max-w-[1380px] mx-auto flex flex-col justify-center items-center pt-[40px] px-[20px] md:px-24'>
            <div className='text-[#232D63] text-[16px] lg:text-[18px] font-[700] text-center  text-4xl leading-loose tracking-tighter'>
            Graphic Design <span className="text-[#00A2E7] px-1">Other Courses</span>
            </div>
            <div className='flex lg:-w-full text-center text-[#727272]   font-medium leading-[20px] text-[14px] md:text-[16px]'>
            Both beginners and advanced professionals stand to gain from our courses.
            </div>

            {/* <=--------------------------------Swiper for Mobile view or less then laptop view *----------------------------=>*/}


            <div className=' w-full h-full flex lg:hidden flex-col justify-center items-center'>
                <div className='w-full  flex  py-[20px] overflow-hidden'>
                    <div
                    >
                        {
                            courses.map((course) => (
                                <div key={course.id} className='swiper-zoom-container'>

                                    {/*<=--------------------------New Slider code---------------------------=>  */}

                                    <div className='w-[416px] lg:w-[350px] h-[430px] border-[1.5px] rounded-lg overflow-hidden bg-white z-[20]'>
                                        <div className='flex flex-row items-center justify-start py-2.5 px-4'>
                                            <div className='relative bg-[#e3f5fd] rounded-md box-border text-center text-[14px] text-[#00a2e7]  py-2 px-4'>
                                                {course.name}
                                            </div>
                                        </div>

                                        <div className='flex w-full flex-col  gap-[22px] pt-[5px] pb-[20px] '>
                                            <div className='text-[14px]  text-[#232d63] text-left font-[600] px-[22px]'>
                                                {course.decs_name}
                                            </div>

                                            <div className='flex w-full px-[22px] gap-[40px] items-center justify-between '>
                                                <div className='w-1/2 flex items-center justify-start gap-[6px] pl-2'>

                                                    <Image className="object-cover" src={durationIcon} alt="student-icon" />
                                                    <div className='flex flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                        <div className='font-[600] text-[13px]'>
                                                            {course.duration}
                                                        </div>
                                                        {/* <div className="text-wrap">
                                                                                                        {course.time}
                                                                                                    </div> */}
                                                    </div>
                                                </div>
                                                <div className='w-1/2 flex items-center justify-start gap-[4px]'>

                                                    <Image className="object-cover" src={studentIcon} alt="student-icon" />
                                                    <div className='flex flex-col text-[10px] font-[400] leading-[14px]  text-[#121112]'>
                                                        <div className='font-[600] text-[13px]'>
                                                            {course.student}
                                                        </div>
                                                        <div className="text-wrap">
                                                            {course.student2}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex w-full px-[22px] gap-[40px] items-center justify-between '>
                                                <div className='w-1/2 flex items-center justify-start pl-2'>
                                                    {/* <=----------- done code the background lightblue only take the vector.svg from figma---------------------=>*/}
                                                    <Image className="object-cover" src={employeeIcon} alt="employee-icon" />
                                                    <div className='flex flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                        <div className='font-[600] text-[13px]'>
                                                            {course.job}
                                                        </div>
                                                        <div className="text-wrap">
                                                            {course.job2}
                                                        </div>
                                                    </div>
                                                    {/* <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                                                            {course.job}
                                                                                        </div> */}
                                                </div>
                                                <div className='w-1/2 flex items-center justify-start gap-[5px]'>
                                                    {/* <=----------- done code the background lightblue only take the vector.svg from figma---------------------=>*/}
                                                    <Image className="object-cover" src={assistanceIcon} alt="student-icon" />
                                                    <div className='flex flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                        <div className='font-[600] text-[13px]'>
                                                            {course.assistance}
                                                        </div>
                                                        <div className="text-wrap">
                                                            {course.assistance2}
                                                        </div>
                                                    </div>
                                                    {/* <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                                                            {course.assistance}
                                                                                        </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}

                                        <div className='w-[90%] h-[1px] bg-[#585858] mx-auto'></div>

                                        {/*<=-------------------------------------------Pointed Discription------------------------------------------=>  */}

                                        <div className='flex flex-col px-[22px] py-[20px] justify-start items-start gap-[10px]'>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    Industry <span className="font-[700]">“Co-Op”</span> programme
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    {course.decsTwo}
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center gap-[5px]'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                        <g clip-path="url(#clip0_159_1663)">
                                                            <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_159_1663">
                                                                <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                    {course.decsThree}
                                                </div>
                                            </div>

                                        </div>
                                        {/*<=-------------------------------------------Explore Now Button------------------------------------------=>  */}

                                        <div className='w-full flex justify-center item-center '>
                                            <Link href={course.link} className='flex justify-center items-center p-[8px] '>
                                                <div className='w-full rounded-lg border-[1px] border-[#0057e2] flex flex-row items-center py-2.5 px-20 gap-2.5 text-center text-[14px] text-[#0057e2] font-[600]   '>
                                                    Explore Now
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="SVG">
                                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M13.4344 8.09997L7.71681 2.38317L8.28321 1.81677L14.9656 8.49997L8.28321 15.1832L7.71681 14.6176L13.4344 8.89997H1.60001V8.09997H13.4344Z" fill="#0057E2" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='w-full pb-[20px] flex justify-center gap-[5px]'>
                    <div className="swiper-button-next-custom_course border border-[#00A2E7] text-[#00A2E7] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px] cursor-pointer">
                        <ArrowLeft size={20} />
                    </div>
                    <div className="swiper-button-prev-custom_course border border-[#00A2E7] text-[#00A2E7] rounded-full w-[50px] h-[50px] flex justify-center items-center p-[5px] cursor-pointer">
                        <ArrowRight size={20} />
                    </div>
                </div>

            </div>


            {/* <=--------------------------------Laptop View Cards *----------------------------=>*/}

            <div className='hidden w-full h-full  lg:flex  lg:flex-col lg:justify-center lg:items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-1 justify-items-center gap-[20px] py-[40px]'>
                    {
                        courses.map((course) => (
                            <div key={course.id} className='w-[416px] h-[423px] lg:w-[350px] border-[1.5px] rounded-lg overflow-hidden bg-white z-[20]'>
                                <div className='flex flex-row items-center justify-start py-2.5 px-4'>
                                    <div className='relative bg-[#e3f5fd] rounded-md box-border text-center text-[12px] text-[#00a2e7]  py-2 px-3'>
                                        {course.name}
                                    </div>
                                </div>

                                <div className='flex w-full flex-col  gap-[22px] pt-[5px] pb-[20px] '>
                                    <div className='text-[16px]  text-[#232d63] text-left font-[600] px-[22px] lg:w-[361px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                        {course.decs_name}
                                    </div>

                                    {/* Made alignment chenge here */}

                                    <div className='flex w-full px-[18px] gap-[83px] items-center justify-between '>
                                        <div className='w-1/2 flex items-center justify-center gap-[5px]'>


                                            <Image className="object-cover" src={durationIcon} alt="student-icon" />
                                            <div className='fle flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                <div className='font-[600] text-[13px]'>
                                                    {course.duration}
                                                </div>
                                                {/* <div className="text-wrap">
                                                                                        {course.time}
                                                                                    </div> */}
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex items-center justify-center gap-[5px]'>


                                            <Image className="object-cover" src={studentIcon} alt="student-icon" />
                                            <div className='flex flex-col text-[10px] font-[400] leading-[14px]  text-[#121112]'>
                                                <div className='font-[600] text-[13px]'>
                                                    {course.student}
                                                </div>
                                                <div className="text-wrap">
                                                    {course.student2}
                                                </div>
                                            </div>
                                            {/* <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                                                    {course.student}
                                                                                </div> */}
                                        </div>
                                    </div>

                                    <div className='flex w-full px-[22px] gap-[40px] items-center justify-between '>
                                        <div className='w-1/2 flex items-center justify-center gap-[5px]'>
                                            <Image className="object-cover" src={employeeIcon} alt="employee-icon" />
                                            <div className='fle flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                <div className='font-[600] text-[13px]'>
                                                    {course.job}
                                                </div>
                                                <div className="text-wrap">
                                                    {course.job2}
                                                </div>
                                            </div>
                                            {/* <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                                                    {course.job}
                                                                                </div> */}
                                        </div>
                                        <div className='w-1/2 flex items-center justify-center gap-[5px]'>
                                            <Image className="object-cover" src={assistanceIcon} alt="student-icon" />
                                            <div className='fle flex-col text-[10px] font-[400] leading-[14px]  text-[#121112] '>
                                                <div className='font-[600] text-[13px]'>
                                                    {course.assistance}
                                                </div>
                                                <div className="text-wrap">
                                                    {course.assistance2}
                                                </div>
                                            </div>
                                            {/* <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                                                                    {course.assistance}
                                                                                </div> */}
                                        </div>
                                    </div>
                                </div>

                                {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}

                                <div className='w-[90%] h-[1px] bg-[#585858] mx-auto'></div>

                                {/*<=-------------------------------------------Pointed Discription------------------------------------------=>  */}

                                <div className='flex flex-col px-[22px] py-[20px] justify-start items-start gap-[10px]'>
                                    <div className='flex justify-center items-center gap-[5px]'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                <g clip-path="url(#clip0_159_1663)">
                                                    <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_159_1663">
                                                        <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                            Industry <span className="font-[700]">“Co-Op”</span> programme
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-[5px]'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                <g clip-path="url(#clip0_159_1663)">
                                                    <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_159_1663">
                                                        <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                            {course.decsTwo}
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-[5px]'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 9 12" fill="none">
                                                <g clip-path="url(#clip0_159_1663)">
                                                    <path d="M8.51752 5.09916C9.16083 5.5072 9.16083 6.4928 8.51752 6.90084L1.50507 11.3487C0.842695 11.7688 -3.5694e-08 11.2644 0 10.4478L3.88841e-07 1.55217C4.24536e-07 0.735585 0.842695 0.231203 1.50507 0.651333L8.51752 5.09916Z" fill="#0057E2" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_159_1663">
                                                        <rect width="9" height="11" fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='text-[13px] font-[400] leading-[14px]  text-[#121112] text-wrap'>
                                            {course.decsThree}
                                        </div>
                                    </div>

                                </div>
                                {/*<=-------------------------------------------Explore Now Button------------------------------------------=>  */}

                                <div className='w-full flex justify-center item-center '>
                                    <Link href={course.link} className='flex justify-center items-center p-[8px]'>
                                        <div className='w-full rounded-lg border-[1px] border-[#0057e2] flex flex-row items-center py-2.5 px-20 gap-2.5 text-center text-[14px] text-[#0057e2] font-[600]   hover:bg-[#0057e2] hover:text-white'>
                                            Explore Now
                                            <ArrowRight size={18} />
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        ))
                    }


                </div>
            </div>


        </div>
    )
}
