"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe, Mail, Phone } from "lucide-react";

export default function ThankYou() {
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState(() => {
    try {
      const saved =
        typeof window !== "undefined"
          ? localStorage.getItem("admissionFormData")
          : null;
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const isAdmissionPage =
    pathname.includes("admission") || pathname.includes("admission-page");

  const logos = [
    "/assets/images/blog/republic.svg",
    "/assets/images/blog/dailyhunt.svg",
    "/assets/images/blog/klam.svg",
    "/assets/images/blog/abpnews 1.svg",
  ];

  return (
    <main className="w-full min-h-[100dvh] bg-[url('/assets/images/thank-you/thankYouBg.png')] bg-cover bg-center bg-no-repeat px-5 py-10 flex flex-col">
      <div id="print-area" className="hidden print:block">
        <div
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: "40px 10px",
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0">
            <tr>
              <td align="center">
                <div
                  style={{
                    position: "relative",
                    maxWidth: "800px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #d1d1d1",
                    borderRadius: "10px",
                    padding: "30px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  {/* WATERMARK */}
                  <img
                    src="/assets/images/DownloadAdmissionForm/DownloadedPdfWaterMark.png"
                    alt="Watermark"
                    style={{
                      position: "absolute",
                      inset: 0,
                      margin: "auto",
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  />

                  {/* TOP LETTERHEAD WRAPPER */}
                  <div
                    style={{
                      marginLeft: "-30px",
                      marginRight: "-30px",
                      marginTop: "-30px",
                    }}
                  >
                    <img
                      src="/assets/icons/AdmissionFormLetterHeadTop.png"
                      alt="Top Design"
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "url('/assets/icons/AdmissionPageWaterMark.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "420px",
                      opacity: 0.08,
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />

                  {/* CONTENT */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* HEADER */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src="/assets/icons/EasternIndiaNoOneLogo.png"
                        alt="Left Logo"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "contain",
                        }}
                      />

                      <h1
                        style={{
                          flex: 1,
                          textAlign: "center",
                          color: "#00A2E7",
                          textTransform: "uppercase",
                          fontSize: "26px",
                          fontWeight: "700",
                          margin: 0,
                        }}
                      >
                        Admission Form
                      </h1>

                      <img
                        src="/assets/icons/EMEDEcadeOfExcellenceLogo.svg"
                        alt="Right Logo"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* DETAILS TABLE */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      {formData && (
                        <>
                          {[
                            ["Name", formData.name],
                            [
                              "Date of Birth",
                              formData.date_of_birth?.slice(0, 10),
                            ],
                            ["Age", formData.age],
                            ["Gender", formData.gender],
                            ["Location", formData.location],
                            ["Blood Group", formData.blood_group],
                            ["Contact Number", formData.contact_number],
                            ["Email", formData.email],
                            ["Address", formData.permanent_address],
                            ["Course Name", formData.course_name],
                            ["Course Fee", formData.course_fee],
                            ["Course Duration", formData.course_duration],
                            ["Guardian Name", formData.guardian_name],
                            ["Guardian Contact", formData.guardian_contact],
                            [
                              "Academic Qualification",
                              formData.academic_qualification,
                            ],
                          ].map(([label, value], idx) => (
                            <tr key={idx}>
                              <td
                                style={{
                                  padding: "10px 0",
                                  fontSize: "15px",
                                  color: "#444",
                                  borderBottom: "1px solid #eaeaea",
                                }}
                              >
                                <strong>{label}:</strong> {value || "-"}
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </table>

                    {/* FOOTER */}
                    <div
                      style={{
                        marginTop: "30px",
                        backgroundColor: "#00A2E7",
                        borderRadius: "0 0 8px 8px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#ffffff",
                        fontSize: "13px",

                        /* KEY PART */
                        width: "calc(100% + 60px)",
                        marginLeft: "-30px",
                        marginRight: "-30px",
                        padding: "14px 30px",
                        marginBottom: "-30px",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <Phone className="w-4 h-4" /> 9093926145 / 9831284098
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <Globe className="w-4 h-4" /> emeacademy.co.in
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <Mail className="w-4 h-4" /> infomumbai@emeacademy.co.in
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* Top content */}
      <div className="flex flex-col items-center text-center gap-6 flex-grow h-full justify-center">
        <Image
          src="/assets/images/AnimationSuccess.gif"
          width={150}
          height={150}
          alt="successGif"
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />

        <h1
          className="text-[#0057E2] font-extrabold leading-[45px] md:leading-[60px]
          text-[32px] md:text-[60px] text-center"
        >
          {isAdmissionPage
            ? "Thank You for taking admission!!"
            : "Thank You for registering!!"}
        </h1>

        <div className="max-w-[90%] md:max-w-[70%]">
          <p className="text-black text-[18px] md:text-[24px] font-medium">
            Eastern <span className="text-[#E87D1A]">India’s No. 1</span>{" "}
            Professional Training Institute
          </p>
          <p className="text-black text-[16px] md:text-[19px] mt-3">
            We&apos;ll get back to you in the next 24 hours.
          </p>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          {isAdmissionPage ? (
            <button
              onClick={() => window.print()}
              className="text-[12px] md:text-[18px] font-semibold text-[#FAFAFA] bg-[#0057E2] px-4 md:px-6 py-2 md:py-2 rounded-md hover:bg-[#004CA3] transition-all cursor-pointer"
            >
              Print Application
            </button>
          ) : (
            <button
              onClick={() => router.back()}
              className="text-[12px] md:text-[18px] font-semibold text-[#FAFAFA] bg-[#0057E2] px-2 md:px-6 py-2 md:py-2 rounded-md hover:bg-[#004CA3] transition-all cursor-pointer"
            >
              Back to Previous Page
            </button>
          )}

          <a
            href="https://wa.me/+919093926145"
            target="_blank"
            className="flex items-center gap-2 text-[#60D568] bg-white px-6 py-2 rounded-md border-2 border-[#0057E2]"
          >
            <Image
              width={36}
              height={36}
              src="/assets/images/icons8-whatsapp.svg"
              alt="WhatsApp"
              className="w-[24px] h-[24px] md:w-[34px] md:h-[34px]"
            />
            <span className="text-[14px] md:text-[20px] font-bold">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Bottom: Featured In */}
      <div className="mt-10">
        <div className="relative flex justify-center text-[22px] md:text-[26px] font-bold text-[#232D63]">
          Featured
          <span className="flex flex-col ml-2">
            <span>In</span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="FeaturedIn"
              width={80}
              height={40}
              className="-ml-5"
            />
          </span>
        </div>

        <Marquee autoFill className="mt-4">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="h-[50px] md:h-[60px] rounded-xl border bg-white flex items-center justify-center mx-3 px-4"
            >
              <Image
                src={logo}
                alt={`Logo-${index}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </Card>
          ))}
        </Marquee>
      </div>
    </main>
  );
}
