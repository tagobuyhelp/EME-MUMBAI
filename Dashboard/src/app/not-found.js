import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div>
      <div className="w-full pt-[100px]  h-screen  p-[20px] bg-[#fffffff] flex flex-col items-center justify-center container max-w-96 mx-auto">
        <h1 className="mt-[10px] text-3xl font-bold tracking-tight text-[#44A5FF] ">
          404
        </h1>
        <p className="mt-6 text-sm leading-7 text-[#181818]">
          Opps! , we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-5 rounded-md bg-[#44A5FF] px-5 py-3 text-sm  font-semibold text-[#ffffffff] shadow-sm transition-all hover:bg-[#004CA3]/70 "
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
