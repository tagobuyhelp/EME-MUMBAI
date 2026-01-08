import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full min-h-screen bg-[#070B23] ">
      <Header />
      <div className="w-full pt-[100px]  2xl:pt-[120px] min-h-[80vh]  p-[20px] bg-[#070B23] flex flex-col items-center justify-center">
        <h1 className="mt-[10px] text-3xl font-bold tracking-tight text-[#F5F1E9] sm:text-5xl">
          404
        </h1>
        <p className="mt-6 text-sm lg:text-base leading-7 text-[#F5F1E9]">
          Opps! , we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-[20px] rounded-sm bg-[#F5F1E9] px-3.5 py-2.5 text-[12px] lg:text-[15px] font-semibold text-[#181818] shadow-sm transition-all hover:bg-[#F5F1E9]/70 hover:text-[#181818] "
        >
          Go back home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
