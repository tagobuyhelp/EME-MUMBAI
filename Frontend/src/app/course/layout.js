import { AnotherHeader } from "@/components/common/AnotherHeader";

export const metadata = {
  title:
    "Western India’s No. 1 Training Institute | Mumbai's No.1 Job Oriented Training Institute - EME Academy Mumbai",
  description:
    "We are job oriented training Institute. Best SAP Certification courses and hotel Management courses for career growth. Job-oriented & relevant COURSES IN Mumbai at EME Academy Mumbai",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <AnotherHeader/>
      {children}
    </div>
  );
}
