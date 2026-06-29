import React from 'react';
import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

const outcomes = [
  "Plan and execute full SEO campaigns for any website",
  "Run Google Ads and Meta Ads with live budgets",
  "Create and manage social media content calendars and paid campaigns",
  "Build WordPress websites and optimize them for search",
  "Use AI tools like ChatGPT/Claude to scale content and automate tasks",
  "Analyze campaign performance using GA4 and generate reports",
  "Build a job-ready portfolio with real project case studies",
  "Start freelancing or apply for digital marketing jobs confidently",
  "Promote your own business online and generate leads without an agency",
  "Set up and manage e-commerce marketing campaigns independently",
  "Build and run WhatsApp and email marketing funnels for any brand",
  "Create high-converting landing pages and sales funnels from scratch",
];

export default function WhatYouWillDo() {
  return (
    <div className="w-full bg-[#F4FBFE] py-6 md:py-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-[24px] md:text-[30px] font-extrabold text-[#232D63] leading-tight mb-2">
            What You Will Be Able to Do <span className="text-[#f97316]">After the Digital Marketing Course</span>
          </h2>
          <p className="text-[#727272] text-[13px] md:text-[14px] max-w-2xl mx-auto">
            You will graduate not just with a certificate, but with the practical capability to execute high-ROI marketing strategies independently.
          </p>
        </div>

        <Card className="bg-white border-0 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-2xl p-5 md:p-6 lg:p-8 overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-[#4B4B4B] text-[13px] md:text-[14px] font-medium leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
