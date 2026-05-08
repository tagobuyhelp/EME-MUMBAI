import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Certification from '../Components/Certification';
import PlacementAwardCard from '../Components/PlacementAwardCard';
export default function LeftSection() {
    return (
        <div className=" md:sticky md:top-14 md:h-screen bg-white">
            <div className='space-y-2 '>
                {/* Back Button */}
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    variant="ghost" className="flex  items-center gap-1 hover:bg-[#ffffff] py-0">
                    <ChevronLeft size={18} /> <span className="text-sm font-semibold">Back</span>
                </button>
                <Certification />

                {/* Table of Content with Scroll */}
                <Card className="rounded-2xl border p-0 gap-0 shadow-none">
                    <CardContent className="px-4 py-2">
                        <CardTitle className="text-sm text-[#656565] font-semibold mb-2">
                            Table of Contents
                        </CardTitle>
                        <ScrollArea className="h-40">
                            <ul className="space-y-2 text-sm text-[#7F7F7F]">
                                {[
                                    "Best Digital Marketing Course in Mumbai",
                                    "Introduction",
                                    "In this guide, we will cover",
                                    "Why is Digital Marketing the Future?",
                                    "Why Choose EME Academy for a Digital Marketing Course in Mumbai?",
                                    "Digital Marketing Course Details at EME Academy",
                                    "Digital Marketing Course Fees in Mumbai (EME Academy)",
                                    "Success Stories from EME Academy",
                                    "Conclusion",
                                    "Frequently Asked Questions (FAQs)",
                                ].map((item) => {
                                    // Create slug from title
                                    const slug = item
                                        .toLowerCase()
                                        .replace(/[^a-zA-Z0-9 ]/g, '')
                                        .replace(/\s+/g, '-');

                                    return (
                                        <li
                                            key={item}
                                            onClick={() => {
                                                const element = document.getElementById(slug);
                                                if (element) {
                                                    element.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start'
                                                    });
                                                }
                                            }}
                                            className="hover:text-foreground cursor-pointer transition-colors"
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Placement Award Card */}
                <PlacementAwardCard />
            </div>

        </div>
    )
}
