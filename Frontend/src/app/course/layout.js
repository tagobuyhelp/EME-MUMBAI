import { AnotherHeader } from "@/components/common/AnotherHeader";

export const metadata = {
  title:
    "Eastern India's No 1 Training Institute |  Kolkata's No.1 Job Oriented Training Institute - EME Academy",
  description:
    "We are job oriented training Institute. Best SAP Certification courses and hotel Management courses for career growth. Job-oriented & relevant COURSES IN Kolkata at EME Academy",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <AnotherHeader/>
      {children}
    </div>
  );
}
