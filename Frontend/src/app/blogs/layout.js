
import { Inter, Stick } from "next/font/google";
import StickyCTAButton from "./Components/stickyCTAButton";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Explore Our Blogs | Simple Tips and Stories",
  description:
    "Easy-to-read tips, stories, and advice on our blog. Join us for interesting topics and helpful information for everyday life.",
};

export default function RootLayout({ children }) {
  return <main className={inter.className}>
  {children}
  {/* <StickyCTAButton /> */}
  </main>;
}
