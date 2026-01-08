"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowDown10, ArrowUp10 } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePickerWithRange } from "@/components/ui/date-range-filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdmissionTable({ data, loading, hasMore, onLoadMore }) {
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [filteredData, setFilteredData] = useState(data?.data || []);
  const [sortOrder, setSortOrder] = useState(null);
  const [viewedRows, setViewedRows] = useState({});
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  const allCourses = [
    "All Courses",
    "Sap Course",
    "Web Development Course",
    "Digital Marketing Course",
    "Gaphics Designing Course",
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
  ];

  const formatDate = (dateString) =>
    moment(dateString).format("DD-MM-YYYY, hh:mm:ss A");

  useEffect(() => {
    const storedViewedRows =
      JSON.parse(localStorage.getItem("viewedRows")) || {};
    setViewedRows(storedViewedRows);
  }, []);

  const markAsViewed = (id) => {
    setViewedRows((prev) => {
      const updated = { ...prev, [id]: true };
      localStorage.setItem("viewedRows", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    if (data?.data) {
      let filtered = [...data.data];

      //  Remove duplicates based on name, email, contact_number, and course_name
      const seen = new Set();
      filtered = filtered.filter((student) => {
        const key = `${student.name}-${student.email}-${student.contact_number}-${student.course_name}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      //  Filter by selected course
      if (selectedCourse !== "All Courses") {
        filtered = filtered.filter(
          (student) => student.course_name === selectedCourse
        );
      }

      //  Filter by date range
      if (dateRange.from && dateRange.to) {
        filtered = filtered.filter((student) => {
          const createdAt = moment(student.createdAt);
          return createdAt.isBetween(
            moment(dateRange.from),
            moment(dateRange.to),
            "day",
            "[]"
          );
        });
      }

      //  Sort by createdAt date
      if (sortOrder) {
        filtered.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        });
      }

      setFilteredData(filtered);
    }
  }, [data, selectedCourse, dateRange, sortOrder]);

  const contentRef = useRef();
  const tableRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange || { from: null, to: null });
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between pt-5 px-4 sm:px-8 bg-white">
        <div className="w-full md:w-auto flex justify-between md:justify-center items-center gap-x-1">
          <div className="text-sm text-[#71717A]">
            Last 24 hours admission -
          </div>
          <div className="bg-[#D8ECFF] text-[#0068C9] text-xs font-medium px-2 py-[2px] text-center rounded-[16px]">
            {data?.count_last24HoursRecord}+ Applications
          </div>

          <Select
            className=""
            value={selectedCourse}
            onValueChange={(value) => setSelectedCourse(value)}
          >
            <SelectTrigger className="w-auto h-6 px-2 data-[size=default]:h-8 data-[size=sm]:h-7">
              <SelectValue className="text-sm" placeholder="Select Courses" />
            </SelectTrigger>
            <SelectContent>
              {allCourses.map((course, index) => (
                <SelectItem key={index} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-x-2">
          <DatePickerWithRange onDateChange={handleDateChange} />

          <Button
            onClick={() => reactToPrintFn()}
            variant="outline"
            size="sm"
            className="h-7"
          >
            <Image
              src="/assets/images/print-icon.svg"
              width={13}
              height={13}
              alt="print"
            />
            <p className="text-[#878787]">Print</p>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7">
                <Image
                  src="/assets/images/filter.svg"
                  width={13}
                  height={13}
                  alt="filter"
                />
                <p className="text-[#878787]">Filter</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30">
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                  <ArrowDown10 />
                  <span className="text-xs">Sort by ascending</span>
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

      {/* Table Section */}
      <div
        ref={contentRef}
        className="flex-1 overflow-hidden flex flex-col print:overflow-visible print:max-h-none print:h-auto"
      >
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-3">
          <Table
            ref={tableRef}
            className="rounded-[8px] table-fixed border border-[#e4e4e796] overflow-hidden print:table-auto print:overflow-visible print:w-full"
          >
            <TableHeader className="sticky top-0 h-10 bg-[#F3F3F3] text-xs font-medium z-10">
              <TableRow>
                <TableHead className="border-l border-[#EAECF0] w-[5%]">
                  No.
                </TableHead>
                <TableHead className="border-l border-[#EAECF0] w-[15%]">
                  Name
                </TableHead>
                <TableHead className="border-l border-[#EAECF0] w-[20%]">
                  Email
                </TableHead>
                <TableHead className="border-l border-[#EAECF0] w-[12%]">
                  Mobile Number
                </TableHead>
                <TableHead className="border-l border-[#EAECF0] w-[18%]">
                  Course Name
                </TableHead>
                <TableHead className="border-l border-[#EAECF0] w-[12%]">
                  Date
                </TableHead>
                <TableHead className="text-center border-l border-[#EAECF0] w-[10%] print:hidden">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className=" py-4 text-gray-500"
                  >
                    <div className="flex justify-center">
                      <Loader2 className="text-blue-500 animate-spin" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredData.length > 0 ? (
                filteredData.map((student, index) => (
                  <TableRow
                    key={student._id}
                    style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
                    className={`text-sm text-[#667085] ${
                      viewedRows[student._id] ? "bg-[#f2f5fc]" : ""
                    }`}
                  >
                    <TableCell className="border-l border-[#EAECF0]">
                      {index + 1}
                    </TableCell>
                    <TableCell className="border-l border-[#EAECF0] text-[#101828] font-medium whitespace-normal break-words">
                      {student.name}
                    </TableCell>
                    <TableCell className="border-l border-[#EAECF0] whitespace-normal break-all">
                      {student.email}
                    </TableCell>
                    <TableCell className="border-l border-[#EAECF0]">
                      {student.contact_number}
                    </TableCell>
                    <TableCell className="border-l border-[#EAECF0] whitespace-normal break-words">
                      {student.course_name}
                    </TableCell>
                    <TableCell className="border-l border-[#EAECF0] text-xs whitespace-normal break-words">
                      {formatDate(student.createdAt)}
                    </TableCell>
                    <TableCell className="text-center border-l border-[#EAECF0] print:hidden">
                      <Link
                        href={`/dashboard/admission/${student._id}`}
                        onClick={() => markAsViewed(student._id)}
                      >
                        <Image
                          src={"/assets/images/eye-icon.svg"}
                          width={20}
                          height={20}
                          alt="eye-icon"
                          className="inline-block"
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="py-4 text-gray-500">
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

        {hasMore && (
          <div className="flex justify-center py-3 print:hidden">
            <Button
              onClick={onLoadMore}
              variant="outline"
              size="sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                `Load More (${data?.data?.length} / ${data?.totalRecords})`
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
