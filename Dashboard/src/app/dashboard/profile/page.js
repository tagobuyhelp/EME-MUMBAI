
import Navbar from "@/app/components/common/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full h-full flex flex-col ">
      <Navbar title={""} />

      <div className="flex bg-[#FBFBFB] flex-col gap-y-3 py-5 px-4 sm:px-8 h-[calc(100%-50px)]">
        <div className="w-full flex items-center ">
          <div className="text-sm text-[#71717A]">
            <span className="text-sm font-medium text-[#101828] leading-7">
              Profile -
            </span>{" "}
            Manage Your Profile Settings
          </div>
        </div>

        <div className="w-full  flex flex-col bg-white rounded-[6px] border border-[#EEEEEE] px-5 py-5 gap-y-4">
          <Card className="w-full  bg-[#FAFAFA] p-4  shadow-none border rounded-lg border-[#EEEEEE]">
            <CardContent className="w-full flex items-center justify-between p-0 ">
              <div className="flex items-center gap-x-2">
                <Image
                  src={"/assets/images/profile_Image.jpg"}
                  width={100}
                  height={100}
                  className="h-14 w-14 rounded-full"
                  alt="profile_Image"
                />
                <div>
                  <p className="text-[#1E1E1E] text-base font-semibold">
                    Kazi Mahasin Azim
                  </p>
                  <p className="text-[#605A5C] text-xs font-medium">
                    Chairman of EME Academy
                  </p>
                </div>
              </div>
              <div className="text-xs text-[#565656]">EME Admin</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col shadow-none bg-[#FAFAFA]   py-4  border rounded-lg border-[#EEEEEE]">
            <CardHeader className="py-2 border-b border-[#e4e4e796]">
              <CardTitle className="text-[#1E1E1E] text-base font-semibold  w-full  pb-2">
                Personal Information
              </CardTitle>
            </CardHeader>

            <CardContent className="w-full p-4 grid grid-cols-2  gap-6 ">
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-[#424551] text-sm font-medium">First name</p>
                <p className="text-[#9D9999] text-sm  border py-3 px-2 rounded-sm  bg-[#FAFAFA]">
                  Kazi
                </p>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-[#424551] text-sm font-medium">Last name</p>
                <p className="text-[#9D9999] text-sm  border py-3 px-2 rounded-sm  bg-[#FAFAFA]">
                  Mahasin Azim
                </p>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-[#424551] text-sm font-medium">
                  Email address
                </p>
                <p className="text-[#9D9999] text-sm  border py-3 px-2 rounded-sm   bg-[#FAFAFA]">
                  admin@emeacademy.com
                </p>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-[#424551] text-sm font-medium">Phone No</p>
                <p className="text-[#9D9999] text-sm  border py-3 px-2 rounded-sm bg-[#FAFAFA]">
                  9876543210
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
