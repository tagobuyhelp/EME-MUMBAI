import { Inter, Stick } from "next/font/google";
import StickyCTAButton from "./Components/stickyCTAButton";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Explore Our Blogs | EME Academy Mumbai",
  description:
    "Easy-to-read tips, stories, and advice on our blog from EME Academy Mumbai. Join us for interesting topics and helpful information for success.",
};

export default function RootLayout({ children }) {
  return <main className={inter.className}>
  {children}
  {/* <StickyCTAButton /> */}
  </main>;
}
