import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';
import Certification from '../Components/Certification';
import PlacementAwardCard from '../Components/PlacementAwardCard';

export default function LeftSection() {
    return (
        <div className="space-y-2 md:sticky md:top-10 md:h-screen bg-white">
            {/* Back Button */}
            <Button
                onClick={() => {
                    window.history.back();
                }}
                variant="ghost" className="flex items-center gap-1 hover:bg-[#ffffff]">
                <ChevronLeft size={18} /> <span className="text-sm font-semibold">Back</span>
            </Button>
            <Certification />

            {/* Table of Content with Scroll */}
            <Card className="rounded-2xl border">
                <CardContent className="px-4 py-2">
                    <CardTitle className="text-sm text-[#656565] font-semibold mb-2">
                        Table of Contents
                    </CardTitle>
                    <ScrollArea className="h-40">
                        <ul className="space-y-3 text-sm text-[#7F7F7F]">
                            {[
                                "How to Become a Data Analyst in Mumbai: Complete 2026 Roadmap",
                                "1. The Data Analytics Job Market in Mumbai (2026)",
                                "2. Data Analyst Role vs Data Scientist: What is the Difference?",
                                "3. Why Most Beginners Struggle to Land Data Analyst Jobs in Mumbai",
                                "4. The 3-Tier Data Analyst Skills Framework",
                                "5. Tier 1: Core Technical Data Analyst Skills",
                                "6. Tier 2: Real-World Data Analytics Projects",
                                "7. Tier 3: The Data Analytics Portfolio and Interview",
                                "8. Data Analyst Salary in Mumbai: 2026 Benchmarks",
                                "9. How to Start Your Data Analytics Career (From Scratch)",
                                "10. Common Mistakes That Sabotage Data Analytics Careers",
                                "11. What to Look for in a Data Analytics Certification Course",
                                "12. Frequently Asked Questions",
                                "13. Conclusion",
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
    )
}
