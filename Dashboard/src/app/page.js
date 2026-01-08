"use client";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import useAuthDataStore from "@/store/authStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [noLoginSession, setNoLoginSession] = useState(false);
  const authData = useAuthDataStore((state) => state.authData);
  const router = useRouter();

  useEffect(() => {
    if (authData) {
      router.push("/dashboard");
    } else {
      setNoLoginSession(true);
    }
  }, [router,authData]);

  return (
    <>
      {noLoginSession && (
        <main className="w-full grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div className="w-full  bg-[#CAE5FF]  pt-8 relative hidden  lg:block">
            <div className="px-8  flex  flex-col gap-y-3">
              <h1 className="text-3xl xl:text-4xl font-bold text-[#0061D0]">
                <span className="text-[#ED8100]"> Eastern India’s</span> <br />{" "}
                No.1 Training Institute
              </h1>
              <p className="text-sm xl:text-base text-[#656565] ">
                Industry expert trainers to bring out the best in you and help
                you achieve new heights
              </p>
            </div>

            <Image
              src="/assets/images/login-image.png"
              alt="Education Technology"
              width={500}
              height={500}
              className="w-full  xl:h-[400px] absolute bottom-0 right- "
            />
          </div>
          <div className="w-full bg-white flex flex-col relative ">
            <div className="absolute top-2 left-1 ">
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </div>

            <LoginForm />

            <div className="w-full absolute bottom-3  flex flex-col gap-y-1 justify-center items-center ">
              <div className="flex text-[#0056B2] text-sm font-medium gap-x-2 ">
                <Link href={"/terms-conditions"}>Terms & Conditions</Link>
                <div className="w-px h-[18px] bg-black"></div>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </div>
              <div className="text-sm font-medium">Version 1.0.0</div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
