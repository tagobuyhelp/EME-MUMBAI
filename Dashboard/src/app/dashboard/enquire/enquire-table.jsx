import React, { useEffect, useRef, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Loader2, ArrowDown10, ArrowUp10, Eye } from "lucide-react"
import Image from "next/image"
import moment from "moment"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useReactToPrint } from "react-to-print"
// import { useDownloadExcel } from "react-export-table-to-excel"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DatePickerWithRange } from "@/components/ui/date-range-filter"

export default function EnquireTable({ data, loading, onLoadMore, hasMore, totalItems, last24HoursRecordCount }) {
    const [selectedCourse, setSelectedCourse] = useState("All Courses")
    const [selectedTiming, setSelectedTiming] = useState("All Timings")
    const [selectedSource, setSelectedSource] = useState("All Sources")
    const [sortOrder, setSortOrder] = useState(null)
    const [dateRange, setDateRange] = useState({ from: null, to: null })
    const [filteredData, setFilteredData] = useState(data || [])




    const formatDate = (dateString) => {
        return moment(dateString).format("DD-MM-YYYY, hh:mm:ss A")
    }

    const getDisplayedUrl = (student) => {
        return student?.url && String(student.url).trim() !== "" ? student.url : "-";
    }

    const getDisplayedSource = (student) => {
        const displayedUrl = getDisplayedUrl(student);
        if (student?.source && String(student.source).trim() !== "") return student.source;
        if (displayedUrl !== "-") return "organic";
        return "-";
    }

    const getDisplayedTiming = (student) => {
        return student?.timing && String(student.timing).trim() !== "" ? student.timing : "-";
    }

    const allCourses = [
        "All Courses",
        "Sap Course",
        "Web Development Course",
        "Digital Marketing Course",
        "Graphics Designing Course",
        "Cyber Security Course",
        "Cloud Computing Course",
        "DevOps Course",
        "Power BI Course",
        "AI & ML Course",
        "Prompt Engineering with AI Course",
        "Entrepreneurship Course",
        "HR Management Course",
        "Mainframe Bootcamp Course",
        "Business Accounting Course",
        "UI UX Course",
        "Data Analytics Course",
        "Data Science Course",
    ]

    const allTimings = [
        "All Timings",
        "Immediately",
        "Within 1 month",
        "2–3 months",
        "Just exploring",
        "Not Provided",
    ]

    const allSources = [
        "All Sources",
        "organic",
        "utm",
        "facebook",
        "google",
        "instagram",
        "youtube",
        "whatsapp",
        "other",
        "-",
    ]

    useEffect(() => {
        if (data) {
            let filtered = data

            // Remove duplicates based on multiple fields

            filtered = filtered.reduce((acc, current) => {
                const isDuplicate = acc.find(item =>
                    item.name === current.name &&
                    item.email === current.email &&
                    item.phone_number === current.phone_number &&
                    item.course === current.course
                );

                if (!isDuplicate) {
                    acc.push(current);
                }
                return acc;
            }, []);

            // Filter by course
            if (selectedCourse !== "All Courses") {
                filtered = filtered.filter((student) => student.course === selectedCourse)
            }

            if (selectedTiming !== "All Timings") {
                filtered = filtered.filter((student) => {
                    const timing = getDisplayedTiming(student);
                    if (selectedTiming === "Not Provided") return timing === "-";
                    return timing === selectedTiming;
                })
            }

            if (selectedSource !== "All Sources") {
                filtered = filtered.filter((student) => {
                    const source = String(getDisplayedSource(student)).toLowerCase();
                    const selected = String(selectedSource).toLowerCase();
                    if (selected === "other") {
                        return !["organic", "utm", "facebook", "google", "instagram", "youtube", "whatsapp", "-"].includes(source);
                    }
                    return source === selected;
                })
            }

            // Filter by date range
            if (dateRange.from && dateRange.to) {
                filtered = filtered.filter((student) => {
                    const createdAt = moment(student.createdAt)
                    return createdAt.isBetween(moment(dateRange.from), moment(dateRange.to), "day", "[]")
                })
            }

            // Sort data
            if (sortOrder) {
                filtered.sort((a, b) => {
                    const dateA = new Date(a.createdAt)
                    const dateB = new Date(b.createdAt)
                    return sortOrder === "asc" ? dateA - dateB : dateB - dateA
                })
            }

            setFilteredData(filtered)
        }
    }, [data, selectedCourse, selectedTiming, selectedSource, dateRange, sortOrder])
    const contentRef = useRef()
    const tableRef = useRef(null)
    const reactToPrintFn = useReactToPrint({ contentRef })

    // const { onDownload } = useDownloadExcel({
    //     currentTableRef: tableRef.current,
    //     filename: "Enquiries",
    //     sheet: "Enquiries",
    //     fileExtension: "xls",
    // })

    const handleDateChange = (newDateRange) => {
        setDateRange(newDateRange || { from: null, to: null })
    }
    console.log(data, filteredData)
    return (
        <div className="w-full h-full flex flex-col">
            {/* Fixed Header Section */}
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between pt-5 px-4 sm:px-8 bg-white">
                <div className="w-full md:w-auto flex justify-between md:justify-center items-center gap-x-1">
                    <div className="text-sm text-[#71717A]">Last 24 hours enquiry -</div>
                    <div className="bg-[#D8ECFF] text-[#0068C9] text-xs font-medium px-2 py-[2px] text-center rounded-[16px]">
                        {last24HoursRecordCount}+ Enquiries
                    </div>
                    <Select value={selectedCourse} onValueChange={(value) => setSelectedCourse(value)}>
                        <SelectTrigger className="w-auto h-6 px-2 data-[size=default]:h-8 data-[size=sm]:h-7">
                            <SelectValue className="text-sm " placeholder="Select Courses" />
                        </SelectTrigger>
                        <SelectContent>
                            {allCourses.map((course, index) => (
                                <SelectItem key={index} value={course}>
                                    {course}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={selectedTiming} onValueChange={(value) => setSelectedTiming(value)}>
                        <SelectTrigger className="w-auto h-6 px-2 data-[size=default]:h-8 data-[size=sm]:h-7">
                            <SelectValue className="text-sm " placeholder="Timing" />
                        </SelectTrigger>
                        <SelectContent>
                            {allTimings.map((t, index) => (
                                <SelectItem key={index} value={t}>
                                    {t}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={selectedSource} onValueChange={(value) => setSelectedSource(value)}>
                        <SelectTrigger className="w-auto h-6 px-2 data-[size=default]:h-8 data-[size=sm]:h-7">
                            <SelectValue className="text-sm " placeholder="Source" />
                        </SelectTrigger>
                        <SelectContent>
                            {allSources.map((s, index) => (
                                <SelectItem key={index} value={s}>
                                    {s}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center gap-x-2">
                    <DatePickerWithRange onDateChange={handleDateChange} />
                    {/* <Button onClick={onDownload} variant="outline" size="sm" className="h-7">
                        <Upload className="text-[#878787]" />
                        <p className="text-[#878787] ">Export Excel</p>
                    </Button> */}
                    <Button onClick={() => reactToPrintFn()} variant="outline" size="sm" className="h-7">
                        <Image src="/assets/images/print-icon.svg" width={13} height={13} alt="filter" />
                        <p className="text-[#878787] ">Print</p>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-7">
                                <Image src="/assets/images/filter.svg" width={13} height={13} alt="filter" />
                                <p className="text-[#878787] ">Filter</p>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-30">
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                                    <ArrowDown10 />
                                    <span className="text-xs">Sort by ascending </span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                                    <ArrowUp10 />
                                    <span className="text-xs">Sort by descending</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Scrollable Table Section */}
            <div ref={contentRef} className="flex-1 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-3">
                    <Table
                        ref={tableRef}
                        className="rounded-[8px] table-fixed border border-[#e4e4e796] overflow-hidden"
                    >
                        <TableHeader className="sticky top-0 h-10 px-2 bg-[#F3F3F3] text-xs text-left align-middle font-medium z-10">
                            <TableRow>
                                <TableHead className="border-l border-[#EAECF0] w-[4%]">No.</TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[14%]">Name</TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[10%]">Date</TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[11%]">
                                    Mobile Number
                                </TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[18%]">Email</TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[18%]">Course</TableHead>
                            <TableHead className="border-l border-[#EAECF0] w-[12%]">Timing</TableHead>
                                <TableHead className="border-l border-[#EAECF0] w-[10%]">Source</TableHead>
                                <TableHead className="text-center border-l border-[#EAECF0] w-[9%] print:hidden">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {loading && filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={9}
                                        className="w-full text-center py-2 text-gray-500"
                                    >
                                        <div className="flex justify-center">
                                            <Loader2 className="text-blue-500 animate-spin" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : filteredData && filteredData.length > 0 ? (
                                filteredData.map((student, index) => {
                                    const displayedUrl = getDisplayedUrl(student);
                                    const displayedSource = getDisplayedSource(student);
                                    const displayedTiming = getDisplayedTiming(student);

                                    return (
                                        <TableRow
                                            key={`${student._id}-${index}`}
                                            className="text-sm text-[#667085]"
                                        >
                                            <TableCell className="py-1 border-l border-[#EAECF0]">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] text-[#101828] font-medium whitespace-normal wrap-break-word">
                                                {student.name}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] text-xs whitespace-normal wrap-break-word">
                                                {formatDate(student.createdAt)}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] whitespace-normal wrap-break-word">
                                                {student.phone_number}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] whitespace-normal wrap-break-word">
                                                {student.email}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] whitespace-normal wrap-break-word">
                                                {student.course}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] whitespace-normal wrap-break-word">
                                                {displayedTiming}
                                            </TableCell>
                                            <TableCell className="border-l border-[#EAECF0] whitespace-normal wrap-break-word">
                                                {displayedSource}
                                            </TableCell>
                                            <TableCell className="text-center border-l border-[#EAECF0] w-[9%] print:hidden">
                                                <div className="w-full flex items-center justify-center gap-x-3">
                                                    <a href={`tel:+${student.phone_number}`} aria-label="Call">
                                                        <Image
                                                            src={"/assets/images/call-icon.svg"}
                                                            width={16}
                                                            height={16}
                                                            className="w-4 h-4"
                                                            alt="call-icon"
                                                        />
                                                    </a>
                                                    <a href={`mailto:${student.email}`} aria-label="Mail">
                                                        <Image
                                                            src={"/assets/images/mail-icon.svg"}
                                                            width={16}
                                                            height={16}
                                                            className="w-4 h-4"
                                                            alt="mail-icon"
                                                        />
                                                    </a>
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <span
                                                                role="button"
                                                                aria-label="View details"
                                                                title="View details"
                                                                className="cursor-pointer inline-flex items-center justify-center rounded-md p-1 hover:bg-muted"
                                                            >
                                                                <Eye className="w-4 h-4" />
                                                            </span>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-[560px]">
                                                            <DialogHeader>
                                                                <DialogTitle>Enquiry Details</DialogTitle>
                                                            </DialogHeader>
                                                            <div className="grid grid-cols-3 gap-3 text-sm">
                                                                <div className="font-medium">Name</div>
                                                                <div className="col-span-2 break-words">{student.name}</div>

                                                                <div className="font-medium">Email</div>
                                                                <div className="col-span-2 break-words">
                                                                    <a href={`mailto:${student.email}`} className="text-blue-600 hover:underline">{student.email}</a>
                                                                </div>

                                                                <div className="font-medium">Phone</div>
                                                                <div className="col-span-2 break-words">
                                                                    <a href={`tel:+${student.phone_number}`} className="text-blue-600 hover:underline">{student.phone_number}</a>
                                                                </div>

                                                                <div className="font-medium">Course</div>
                                                                <div className="col-span-2 break-words">{student.course}</div>

                                                                <div className="font-medium">Timing</div>
                                                                <div className="col-span-2 break-words">{displayedTiming}</div>

                                                                <div className="font-medium">Source</div>
                                                                <div className="col-span-2 break-words">{displayedSource}</div>

                                                                <div className="font-medium">URL</div>
                                                                <div className="col-span-2 break-words">
                                                                    {displayedUrl !== "-" ? (
                                                                        <a href={displayedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                                            {displayedUrl}
                                                                        </a>
                                                                    ) : (
                                                                        <span>-</span>
                                                                    )}
                                                                </div>

                                                                <div className="font-medium">Created At</div>
                                                                <div className="col-span-2 break-words">{formatDate(student.createdAt)}</div>

                                                                <div className="font-medium">Updated At</div>
                                                                <div className="col-span-2 break-words">{formatDate(student.updatedAt)}</div>

                                                                <div className="font-medium">Record ID</div>
                                                                <div className="col-span-2 break-words">{student._id}</div>
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={9} className="w-full py-4 text-gray-500">
                                        <div className="flex flex-col justify-center items-center">
                                            <Image
                                                src="/assets/images/empty-box.png"
                                                width={60}
                                                height={60}
                                                alt="empty-box"
                                            />
                                            <p>No data found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>


                {/* Fixed Load More Button */}
                {hasMore && (
                    <div className="flex justify-center py-2 print:hidden">
                        <Button onClick={onLoadMore} variant="outline" size="sm" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                `Load More (${filteredData?.length} / ${totalItems})`
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
