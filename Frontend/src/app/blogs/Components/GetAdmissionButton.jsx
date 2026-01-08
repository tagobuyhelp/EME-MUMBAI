'use client'
import React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CourseData from '@/data/course.json'


function GetAdmissionButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Courses = CourseData?.AllCourse
    const email_sender = "ALL"
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        email_sender,
    };
    return (
        <>
            
            <div className=" px-[20px] py-[12px] rounded-lg bg-[#232D63] hover:bg-[#232D63]/95 transition-colors flex justify-start items-center gap-1 group text-white text-sm font-bold cursor-pointer" onClick={() => { setIsModalOpen(true) }}>

                Get Admission
                <div className="group-hover:translate-x-1 transition-all">
                    <ArrowRight className="text-white " />
                </div>
            </div>
      </>
      
  )
}

export default GetAdmissionButton