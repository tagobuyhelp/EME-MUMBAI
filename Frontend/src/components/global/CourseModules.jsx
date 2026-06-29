import React from 'react';
import Link from 'next/link';
import { Search, MousePointerClick, ThumbsUp, FileText, TrendingUp, Mail, Bot, BarChart, Globe, Handshake, ArrowRight } from 'lucide-react';

const modules = [
  {
    title: "Search Engine Optimization",
    slug: "/seo-course-in-mumbai",
    description: "Master technical SEO, on-page optimization, and off-page strategies to rank on Google.",
    icon: Search,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Google Ads / PPC",
    slug: "/google-ads-course-mumbai",
    description: "Learn to build high-converting search, display, and video campaigns with live budgets.",
    icon: MousePointerClick,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Social Media Marketing",
    slug: "/social-media-marketing-course-mumbai",
    description: "Create viral content, manage communities, and master Meta algorithms for organic growth.",
    icon: ThumbsUp,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Content Marketing",
    slug: "/content-marketing-course-mumbai",
    description: "Build compelling content strategies that attract, engage, and convert your target audience.",
    icon: FileText,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Performance Marketing",
    slug: "/performance-marketing-course-mumbai",
    description: "Optimize ad spend and scale campaigns with advanced tracking and data-driven decisions.",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Email Marketing",
    slug: "/email-marketing-course-mumbai",
    description: "Design automated email funnels that nurture leads and drive repeat sales.",
    icon: Mail,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "AI in Digital Marketing",
    slug: "/ai-digital-marketing-course-mumbai",
    description: "Leverage ChatGPT, Claude, and other AI tools to automate tasks and scale output.",
    icon: Bot,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Google Analytics / GA4",
    slug: "/google-analytics-course-mumbai",
    description: "Analyze website traffic, understand user behavior, and generate actionable reports.",
    icon: BarChart,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "WordPress Basics",
    slug: "/wordpress-course-mumbai",
    description: "Build stunning, SEO-friendly websites and landing pages without coding.",
    icon: Globe,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Affiliate Marketing",
    slug: "/affiliate-marketing-course-mumbai",
    description: "Learn how to build passive income streams by promoting partner products.",
    icon: Handshake,
    color: "bg-cyan-50 text-cyan-600",
  }
];

export default function CourseModules() {
  return (
    <div className="w-full max-w-[1380px] mx-auto px-4 py-6 md:py-8">
      <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto">
        <h2 className="text-[24px] md:text-[30px] font-extrabold text-[#232D63] leading-tight mb-2">
          Explore Our Digital Marketing <span className="text-[#f97316]">Course Modules</span>
        </h2>
        <p className="text-[#727272] text-[13px] md:text-[14px]">
          Dive deep into every core aspect of digital marketing. From driving traffic to automating sales, master the skills that top agencies demand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {modules.map((mod, index) => {
          const Icon = mod.icon;
          return (
            <Link href={mod.slug} key={index} className="group block h-full">
              <div className="flex flex-col h-full bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${mod.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#232D63] mb-2 group-hover:text-[#0057E2] transition-colors">
                  {mod.title}
                </h3>
                <p className="text-[#727272] text-[13px] leading-relaxed flex-grow">
                  {mod.description}
                </p>
                <div className="mt-4 flex items-center text-[#0057E2] font-semibold text-[13px] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Explore Module <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
