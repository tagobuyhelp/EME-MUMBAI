import AdminProfile from "./AdminProfile";



export default function Navbar({ title }) {
  return (
    <div className="w-full h-[45px] bg-white border border-b border-[#EEEEEE] flex items-center justify-between px-8">
      <p className="text-[#3C3C3C] text-base font-semibold">{title}</p>
        <AdminProfile />
      </div>
  )
}
