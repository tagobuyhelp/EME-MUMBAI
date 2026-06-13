import React from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
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
                                "Top 4 Technical Courses After 12th That Can Lead to High-Paying Careers",
                                "Before You Pick a Course: What Actually Matters",
                                "Data Analytics: The Course for People Who Like Numbers",
                                "SAP: The Course That Opens Doors in Large Companies",
                                "Digital Marketing: The Course With Multiple Career Paths",
                                "Generative AI (Gen AI): The Fastest Growing Skill Today",
                                "Quick Comparison of All 4 Technical Courses After 12th",
                                "Which Course Is Right for You? Ask Yourself These 3 Questions",
                                "Frequently Asked Questions",
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
