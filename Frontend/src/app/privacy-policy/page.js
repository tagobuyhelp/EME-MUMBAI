import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Link from "next/link";
export const metadata = {
  title:
    "",
  description:
  "",
  keywords: [
    "",
  ],
  alternates: {
    canonical: "https://emeacademy.co.in/privacy-policy",
  },
};

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen  bg-[#070B23]">
      <Header/>
      <div className="w-full  bg-[#070B23] min-h-screen flex flex-col  justify-start gap-[50px] items-center pt-[100px] py-[46px] px-[20px] md:px-24  max-w-[1380px] mx-auto">
        <div className="flex gap-y-2 min-h-[calc(100vh-100px)] w-[100%] justify-center overflow-x-hidden bg-black/10">
          <div className="h-full w-11/12 max-w-maxContent mx-auto bg-white text-black mt-6 mb-6 py-[40px] px-6">
            <div className="flex flex-col items-center gap-y-5  ">
              <h1 className="text-2xl font-bold flex flex-col items-center">
                PRIVACY POLICY
                <span className=" text-sm font-normal">
                  Last updated May 18, 2024
                </span>
              </h1>

              <div className="flex flex-col gap-2 items-start w-full">
                <div className="flex flex-col gap-[20px] text-sm lg:text-[15px]">
                  <p>
                    Thank you for your interest in our EME Academy’s privacy
                    policy. Your privacy is important to us, and we take the
                    protection of your personal information very seriously.
                  </p>
                  <p>
                    Our institute collects personal information such as your
                    name, email address, and contact number when you register
                    for our courses. This information is collected to provide
                    you with the training services that you have requested from
                    us.
                  </p>
                  <p>
                    We may also use your personal information to send you
                    promotional materials or updates about our courses, but you
                    can choose to opt-out of these communications at any time.
                  </p>
                  <p>
                    We will never disclose your personal information to any
                    third party unless required to do so by law or if necessary
                    to provide you with the training services that you have
                    requested from us.
                  </p>
                  <p>
                    We take all reasonable measures to protect your personal
                    information from unauthorized access, disclosure, or misuse.
                    Our website and database are secured with the latest
                    encryption technology, and we regularly review our security
                    practices to ensure the safety of your personal information.
                  </p>
                  <p>
                    If you have any questions or concerns about our privacy
                    policy or how we handle your personal information, please do
                    not hesitate to{" "}
                    <span className="text-blue-500 font-semibold">
                      <Link href={"/contact"}>contact us</Link>
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
