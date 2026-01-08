import Sidebar from "../components/common/Sidebar";



export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full scroll-smooth">
      <Sidebar />
      <main className="flex-1  overflow-auto">{children}</main>
    </div>
  );
}
