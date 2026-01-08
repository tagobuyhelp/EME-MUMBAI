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
                                "Top 7 Reasons to Enroll in a Power BI Course in 2025",
                                "Career",
                                "Effective Curriculum for Beginners and Experts",
                                "Hands on Training with Real Life Projects",
                                "Get to Learn from Industry Experts",
                                "Various Job Opportunities",
                                "Flexible Learning Options",
                                "Master Data Visualization",
                                "Final Thoughts",
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
