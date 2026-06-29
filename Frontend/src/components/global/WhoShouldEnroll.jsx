import React from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Store, Laptop } from 'lucide-react';

const audiences = [
  {
    title: "Students after 12th or Graduation",
    description: "Start your career in digital marketing with zero prior experience",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Working Professionals",
    description: "Upskill, switch careers, or add digital marketing to your current role",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Business Owners & Entrepreneurs",
    description: "Learn to market your own business and reduce agency costs",
    icon: Store,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    title: "Freelancers",
    description: "Build skills to offer digital marketing services and earn independently",
    icon: Laptop,
    color: "bg-green-50 text-green-600 border-green-100",
  }
];

export default function WhoShouldEnroll() {
  return (
    <div className="w-full max-w-[1380px] mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-block bg-blue-50 text-[#0057E2] font-semibold px-3 py-1 rounded-full text-[11px] mb-2">
            Target Audience
          </div>
          <h2 className="text-[24px] md:text-[30px] font-extrabold text-[#232D63] leading-tight mb-2">
            Who Should Enroll in Our <span className="text-[#f97316]">Digital Marketing Course in Mumbai?</span>
          </h2>
          <p className="text-[#727272] text-[13px] md:text-[14px] mb-4">
            Whether you are starting from scratch, looking to scale a business, or switching into a high-growth career, our training adapts to your goals.
          </p>
          <div className="hidden lg:block w-full max-w-[220px] h-[220px] relative mt-2">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-50 transform -rotate-6"></div>
             <div className="absolute inset-0 bg-white border border-gray-100 shadow-md rounded-2xl flex items-center justify-center overflow-hidden">
                <Image 
                  src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Digital_Marketing_Course/MainCourse/DigitalMarketingMainCourseHero.webp" 
                  alt="Students learning digital marketing" 
                  width={300} 
                  height={300}
                  className="object-cover w-full h-full opacity-90"
                />
             </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col p-4 md:p-5 rounded-xl border ${item.color} bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${item.color.split(' ')[0]}`}>
                  <Icon className={`w-5 h-5 ${item.color.split(' ')[1]}`} />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#232D63] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#727272] text-[13px] md:text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
