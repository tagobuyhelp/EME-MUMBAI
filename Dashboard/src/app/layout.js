import {  Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NoInternet from "./components/no-internet";

const inter = Inter({
  variable: "--font-stack",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "EME Admin Dashboard",
  description: "Here we manage our leads of our courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable}  antialiased`}>
        <Toaster richColors />
        <div className="flex h-screen">
          <main className="flex-1  overflow-auto">
            <NoInternet />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
