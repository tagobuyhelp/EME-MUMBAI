import Navbar from "@/app/components/common/Navbar";

export default function blogLayout({ children }) {
  return (
    <main className="w-full h-full overflow-y-hidden flex flex-col ">
      <Navbar title={"Blogs Page"} />

      <div className="w-full h-[calc(100%-50px)] flex bg-[#FBFBFB] flex-col gap-y-3 py-5 px-4 sm:px-8 overflow-y-scroll overscroll-y-contain eme-scroll">
        {children}
      </div>
    </main>
  );
}
