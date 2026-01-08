"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

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
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2 } from "lucide-react"



const chartConfig = {
    admissions: {
        label: "Admission",
        color: "#01A1E5",
    },
    enquiries: {
        label: "Enquire",
        color: "#8FDEFF",
    },
}


export function AreachartAdmissionEnquiryData({ allDashboardData }) {


    const [timeRange, setTimeRange] = React.useState("30d")
    const chartData = allDashboardData?.chartData2 || []
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        if (allDashboardData?.chartData2) {
            setIsLoading(false)
        }
    }, [allDashboardData?.chartData2])

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date(chartData[chartData.length - 1].date)
        let daysToSubtract = 7
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })

    return (
        <Card className='w-full rounded-[6px] border border-[#EEEEEE] bg-white shadow-none'>
            <CardHeader className="w-full  flex items-center justify-between space-y-0 border-b py-5 sm:flex-row">
                <div className=" ">
                    <CardTitle className="text-sm font-medium text-[#18181B]">Admission & Enquires</CardTitle>
                </div>
                <div className="text-xs flex gap-x-2">
                    <div className="flex items-center gap-1">
                        <p className="w-2 h-2 bg-[#8FDEFF] ">

                        </p>
                        Enquire
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="w-2 h-2 bg-[#01A1E5] ">

                        </p>
                        Admission
                    </div>
                </div>
                <div>

                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger
                            className="w-auto h-7 rounded-lg sm:ml-auto"
                            aria-label="Select a value"
                        >
                            <SelectValue placeholder="Last 3 months" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">

                            <SelectItem value="30d" className="rounded-lg">
                                Last 30 days
                            </SelectItem>
                            <SelectItem value="7d" className="rounded-lg">
                                Last 7 days
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 ">
                {isLoading ? (
                    <div className="flex items-center justify-center p-6 h-[300px]">
                        <Loader2 className="h-8 w-8 text-blue-400 animate-spin " />
                    </div>
                ) : (
                    <ChartContainer config={chartConfig} className="w-full">
                        <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={filteredData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="fillEnquiries" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#01A1E5" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#01A1E5" stopOpacity={0.1} />
                                    </linearGradient>
                                    <linearGradient id="fillAdmissions" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8FDEFF" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#8FDEFF" stopOpacity={0.6} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={10}
                                    minTickGap={25}
                                    tickFormatter={(value) => {
                                        const date = new Date(value)
                                        return date.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                    />
                                   
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                            }}
                                            indicator="dot"
                                        />
                                    }
                                />
                                <Area
                                    dataKey="enquiries"
                                    type="natural"
                                    fill="url(#fillEnquiries)"
                                    fillOpacity={0.3}
                                    stroke="#8FDEFF"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="admissions"
                                    type="natural"
                                    fill="url(#fillAdmissions)"
                                    fillOpacity={0.3}
                                    stroke="#01A1E5"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    )
}

