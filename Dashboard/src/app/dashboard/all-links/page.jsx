
import Navbar from "@/app/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="w-full h-full flex flex-col ">
      <Navbar title={""} />

      <div className="flex bg-[#FBFBFB] flex-col gap-y-3 py-5 px-4 sm:px-8 h-[calc(100%-50px)]">
        <div className="w-full flex items-center ">
          <div className="text-sm text-[#71717A]">
            <span className="text-sm font-medium text-[#101828] leading-7">
              All link -
            </span>{" "}
            Find all important links here
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row bg-white rounded-[6px] border border-[#EEEEEE] px-5 py-5 gap-4 ">
          <Card className="w-[250px] h-[130px] bg-[#FAFAFA] p-4  shadow-none border rounded-lg border-[#EEEEEE] flex flex-col items-center justify-center">
                <p className="text-[#101828] text-[14px] font-[600] p-2">All Landing page link</p>
                <Link className="w-full flex justify-center text-[#41A3FF] text-sm font-medium " href="https://emeacademy.co.in/all-landing-pages" target="_blank">
                <Button className="bg-[#41A3FF] text-white hover:bg-[#41A3FF] rounded-lg py-2 px-4 mt-2">
                view all pages
                </Button>
                </Link>

          </Card>
          <Card className="w-[250px] h-[130px] bg-[#FAFAFA] p-4  shadow-none border rounded-lg border-[#EEEEEE] flex flex-col items-center justify-center">
          <p className="text-[#101828] text-[14px] font-[600] p-2">Payment and Refund Policy</p>
                <Link className="w-full flex justify-center text-[#41A3FF] text-sm font-medium " href="https://emeacademy.co.in/payment-terms-and-refund-policy" target="_blank">
                <Button className="bg-[#41A3FF] text-white hover:bg-[#41A3FF] rounded-lg py-2 px-4 mt-2">
                view page
                </Button>
                </Link>
          </Card>
          <Card className="w-[250px] h-[130px] bg-[#FAFAFA] p-4  shadow-none border rounded-lg border-[#EEEEEE] flex flex-col items-center justify-center">
          <p className="text-[#101828] text-[14px] font-[600] p-2">Grievance Cell</p>
                <Link className="w-full flex justify-center text-[#41A3FF] text-sm font-medium " href="https://emeacademy.co.in/grievance-cell" target="_blank">
                <Button className="bg-[#41A3FF] text-white hover:bg-[#41A3FF] rounded-lg py-2 px-4 mt-2">
                view page
                </Button>
                </Link>
          </Card>
          <Card className="w-[250px] h-[130px] bg-[#FAFAFA] p-4  shadow-none border rounded-lg border-[#EEEEEE] flex flex-col items-center justify-center">
          <p className="text-[#101828] text-[14px] font-[600] p-2">Add Extra Section</p>
                <Link className="w-full flex justify-center text-[#41A3FF] text-sm font-medium " href="/dashboard/all-links">
                <Button className="bg-[#41A3FF] text-white hover:bg-[#41A3FF] rounded-lg py-2 px-4 mt-2">
                 <CirclePlus/>new
                </Button>
                </Link>
          </Card>
        </div>
      </div>
    </main>
  );
}
