"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, ResponsiveContainer } from "recharts"
import { AlertTriangle, Loader2 } from 'lucide-react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function BarchartAdmissionEnquiryData({ allDashboardData }) {
    const [chartData, setChartData] = useState([])
    const [error, setError] = useState(null)
    const [selectedYear, setSelectedYear] = useState("")
    const [availableYears, setAvailableYears] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!allDashboardData) {
            return;
        }

        try {
            const { admissionsByYear, enquiriesByYear } = allDashboardData
            const years = new Set([
                ...Object.keys(admissionsByYear),
                ...Object.keys(enquiriesByYear)
            ])

            const sortedYears = Array.from(years).sort((a, b) => b - a)
            setAvailableYears(sortedYears)

            if (sortedYears.length > 0) {
                setSelectedYear(sortedYears[0])
            }
        } catch (err) {
            setError("Unable to process years data. Please try again later.")
        }
    }, [allDashboardData])

    useEffect(() => {
        if (!allDashboardData || !selectedYear) {
            return; 
        }

        setIsLoading(true)
        setError(null)

        try {
            const { admissionsByYear, enquiriesByYear } = allDashboardData

            const admissionsData = admissionsByYear[selectedYear]?.monthly || []
            const enquiriesData = enquiriesByYear[selectedYear]?.monthly || []

            const combinedData = months.map((month) => {
                const admissionCount = admissionsData.find(d => d.month === month)?.count || 0
                const enquiryCount = enquiriesData.find(d => d.month === month)?.count || 0
                return {
                    month: month.slice(0, 3),
                    admissions: admissionCount,
                    enquiries: enquiryCount
                }
            })

            setChartData(combinedData)
        } catch (err) {
            setError("Unable to process chart data. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }, [allDashboardData, selectedYear])

    const chartConfig = {
        admissions: {
            label: "Admission ",
            color: "#01A1E5",
        },
        enquiries: {
            label: "Enquire ",
            color: "#8FDEFF",
        },
    }

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center p-6 h-[300px]">
                    <Loader2 className="h-8 w-8 text-blue-400 animate-spin " />
                </div>
            )
        }

        if (error) {
            return (
                <div className="flex items-center justify-center p-6 h-[300px]">
                    <div className="text-center text-red-500">
                        <AlertTriangle className="mx-auto mb-2 h-8 w-8" />
                        <p>{error}</p>
                    </div>
                </div>
            )
        }

        if (chartData.length === 0) {
            return (
                <div className="flex items-center justify-center p-6 h-[300px]">
                    <p className="text-gray-500">No data available for the selected year.</p>
                </div>
            )
        }

        return (
            <ChartContainer config={chartConfig} className="w-full h-full ">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={chartData}
                        margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                        barGap={2}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            fontSize={12}
                            stroke="#888"
                        />
                        <YAxis hide={true} />
                        <ReferenceLine y={100} strokeDasharray="3 3" stroke="#888" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar
                            dataKey="admissions"
                            fill="#01A1E5"
                            radius={[4, 4, 4, 4]}
                            barSize={10}
                        />
                        <Bar
                            dataKey="enquiries"
                            fill="#8FDEFF"
                            radius={[4, 4, 4, 4]}
                            barSize={10}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
        )
    }

    return (
        <Card className="w-full rounded-[6px] border border-[#EEEEEE] bg-white shadow-none p-0">
            <CardHeader className="flex flex-row items-center justify-between mt-10">
                <CardTitle className="text-sm font-medium text-[#18181B]">Admission & Enquires</CardTitle>
                {availableYears.length > 0 && (
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger className="w-[90px] h-7">
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableYears.map((year) => (
                                <SelectItem key={year} value={year}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </CardHeader>   
            <CardContent className='w-full h-full py-6'>
                {renderContent()}
            </CardContent>
        </Card>
    )
}

