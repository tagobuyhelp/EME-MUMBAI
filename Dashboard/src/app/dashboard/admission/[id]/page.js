"use client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, ChevronLeft, Printer, Loader2 } from "lucide-react";
import Link from "next/link";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";

export function AdmissionDetailPage() {
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState({});
  const authData = useAuthDataStore((state) => state.authData);
  const { id } = useParams();

  useEffect(() => {
    const getStudentDetails = () => {
      setLoading(true);
      API.admission
        .getStudentDetails({ token: authData.access_token, student_id: id })
        .then((response) => {
          if (response) {
            setStudentData(response);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (authData?.access_token && id) {
      getStudentDetails();
    }
  }, [id, authData?.access_token]);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <main className="w-full  flex flex-col font-poppins h-full overflow-y-hidden">
      <div className="w-full h-[65px] bg-white border border-b border-[#EEEEEE] flex items-center justify-start pl-8">
        <p className="text-[#3C3C3C] text-base font-semibold">
          Admission Details
        </p>
      </div>
      <div className="bg-[#FBFBFB] px-8 py-6  overflow-y-scroll overscroll-y-contain eme-scroll">
        <Card className="py-6 bg-white rounded-[6px] border border-[#EEEEEE] shadow-none">
          <section className="px-5 flex justify-between items-center border-b border-[#DFDFDF] pb-4">
            <div className="flex items-center gap-x-4">
              <Link
                href={"/dashboard/admission"}
                className="text-black  bg-white rounded-[8px] border border-[#D8DADC] px-1 cursor-pointer"
              >
                <ChevronLeft className="w-5" />
              </Link>
              <h1 className="text-base font-semibold text-[#18181B]">
                Student details
              </h1>
              <Button
                onClick={() => reactToPrintFn()}
                className="flex items-center gap-1 h-7  bg-[#F4F4F4] border border-[#D1D1D1] text-[#464646] text-xs rounded-md hover:bg-white"
              >
                <Printer className="w-4" />
                <p>Print</p>
              </Button>
            </div>
            <div className="flex items-center gap-x-4 ">
              <Button className="flex items-center justify-center bg-[#41A3FF] text-white gap-x-1 rounded-[6px] px-6 py-3 hover:bg-blue-500">
                <Phone className="h-4 w-4" />
                Make call
              </Button>
              <Button className="flex items-center justify-center bg-[#41A3FF] text-white gap-x-1 text-sm rounded-[6px] px-6 py-3 hover:bg-blue-500">
                <Mail className=" h-4 w-4" />
                Sent Mail
              </Button>
            </div>
          </section>

          {loading && (
            <div className="w-full h-[300px] flex justify-center items-center ">
              <Loader2 className="text-blue-500 animate-spin" />
            </div>
          )}

          {!loading && (
            <div ref={contentRef} className="flex justify-center py-10 print:px-[32px] ">
              <div className="relative w-full max-w-[800px] bg-white border border-[#D1D1D1] rounded-[10px] px-8 pb-10 overflow-hidden ">
                {/*FULL WATERMARK */}
                  <Image
                    src="/assets/images/DownloadAdmissionForm/DownloadedPdfWaterMark.png"
                    alt="Watermark"
                    width={420}
                    height={100}
                    className="absolute inset-0 m-auto w-full z-0 pointer-events-none"
                  />

                {/* TOP LETTERHEAD */}
                <Image
                  src="/assets/icons/AdmissionFormLetterHeadTop.svg"
                  alt="Top Design"
                  height={100}
                  width={100}
                  className="absolute top-0 left-0 w-[calc(100%+64px)] "
                />

                {/* WATERMARK */}
                <Image
                  src="/assets/icons/AdmissionPageWaterMark.svg"
                  alt="Watermark"
                  height={100}
                  width={100}
                  className="absolute inset-0 m-auto w-[420px] print:opacity-[0.08] pointer-events-none " 
                />

                {/* CONTENT */}
                <div className="relative z-10 mt-16">
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-6">
                    <Image
                      src="/assets/icons/EasternIndiaNoOneLogo.png"
                      alt="Eastern India No One Logo"
                      height={100}
                      width={100}
                      className="w-[70px] h-[70px] object-contain"
                    />

                    <h1 className="hidden print:block flex-1 text-center text-[#00A2E7] text-[26px] font-bold uppercase">
                      Student Details
                    </h1>

                    <Image
                      src="/assets/icons/EMEDEcadeOfExcellenceLogo.svg"
                      alt="EME Decade Of Excellence Logo"
                      height={100}
                      width={100}
                      className="w-[90px] h-[90px] object-contain"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex flex-col gap-3 text-[15px] text-[#444]">
                    {[
                      ["Name", studentData.name],
                      [
                        "Date of Birth",
                        studentData.date_of_birth?.slice(0, 10),
                      ],
                      ["Age", studentData.age],
                      ["Gender", studentData.gender],
                      ["Location", studentData.location],
                      ["Blood Group", studentData.blood_group],
                      ["Contact Number", studentData.contact_number],
                      ["Email", studentData.email],
                      ["Address", studentData.permanent_address],
                      ["Course Name", studentData.course_name],
                      ["Course Fee", studentData.course_fee],
                      ["Course Duration", studentData.course_duration],
                      [
                        "Guardian Name",
                        studentData.guardian_name ||
                          studentData.father_name ||
                          studentData.mother_name ||
                          "-",
                      ],
                      ["Guardian Contact", studentData.guardian_contact],
                      [
                        "Academic Qualification",
                        studentData.academic_qualification,
                      ],
                    ].map(([label, value], idx) => (
                      <div key={idx} className="border-b border-[#EAEAEA] pb-2">
                        <span className="font-semibold">{label}:</span>{" "}
                        {value || "-"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}

export default AdmissionDetailPage;
