'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { LayoutDashboard, User, FileText, LogOut, ChevronsLeftRight, Settings, MessageSquareMore, CirclePlus, Link2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import useAuthDataStore from '@/store/authStore'
import API from '@/api'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'


const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/dashboard',
    matchPaths: ['/dashboard']
  },
  {
    icon: MessageSquareMore,
    label: 'Enquire',
    href: '/dashboard/enquire',
    matchPaths: ['/dashboard/enquire']
  },
  {
    icon: User,
    label: 'Admission',
    href: '/dashboard/admission',
    matchPaths: ['/dashboard/admission', '/dashboard/admission/[id]']
  },
  {
    icon: FileText,
    label: 'Blog',
    href: '/dashboard/blogs',
    matchPaths: ['/dashboard/blogs', '/dashboard/blogs/all-blogs', '/dashboard/blogs/create-blog', '/dashboard/blogs/edit']
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '/dashboard/settings',
    matchPaths: ['/dashboard/settings']
  },
  {
    icon: Link2,
    label: 'All links',
    href: '/dashboard/all-links',
    matchPaths: ['/dashboard/all-links']
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const clearAuthData = useAuthDataStore((state) => state.clearAuthData)

  const handleLogout = () => {
    API.auth.Logout(router, clearAuthData);
  }

  const isActiveRoute = (item) => {
    if (item.label === 'Dashboard') {
      return pathname === '/dashboard'
    }
    return item.matchPaths.some(path => pathname.startsWith(path))
  }

  return (
    <div className={cn(
      "bg-white h-full flex flex-col shadow-md transition-all duration-500 relative",
      isCollapsed ? "w-20" : "w-48"
    )}>
      <div className={isCollapsed ? ' flex  flex-col  justify-center items-center' : "flex  flex-col gap-y-0 justify-center items-center "}>
        <div className={isCollapsed ? ` h-[45px] flex flex-col items-center justify-center ` : ` h-[45px] flex flex-col items-center justify-center`} >
          {isCollapsed ?
            <Image src="/assets/images/small-logo.png" alt="Logo" className='w-[35px] ' width={50} height={50} /> :
            <Image src="/assets/images/logo.png" alt="Logo" className='w-[95px] ' width={500} height={500} />}
        </div>
        <div className='h-[1px] bg-[#eee]' style={{ width: isCollapsed ? '70%' : '80%' }}>

        </div>
        <div className="absolute top-6 -right-4 ">
          <div
            variant="ghost"

            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-black cursor-pointer bg-white rounded-[8px] px-2 py-1 border border-[rgb(0,0,0,0.15)]"
          >
            {isCollapsed ? <ChevronsLeftRight className='w-4' /> : <ChevronsLeftRight className='w-4' />}
          </div>
        </div>
      </div>
      <nav className={isCollapsed ? " px-4 py-3" : "px-4 py-3"}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span className={cn(
                  "flex items-center gap-x-2 text-sm py-2 px-3 my-2 text-[#7E7E7E] rounded-[6px] hover:bg-[#41A3FF]  hover:text-white cursor-pointer transition-all",
                  isActiveRoute(item) ? "bg-[#41A3FF] text-white" : "",
                  isCollapsed ? "justify-center" : ""
                )}>
                  <TooltipProvider className='relative'>
                    <Tooltip>
                      <TooltipTrigger>
                        <item.icon className={cn("shrink-0", isCollapsed ? "mr-0 w-4" : "mr-0 w-4")} />
                      </TooltipTrigger>
                      <TooltipContent className='bg-white text-[#41A3FF]  border absolute ml-8'>
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {!isCollapsed && <span>{item.label}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='h-[1px] bg-[#D0D5DD] mx-auto' style={{ width: isCollapsed ? '70%' : '80%' }}>

      </div>
      <div className={isCollapsed ? 'px-4 pt-4' : "px-6 pt-4"}>

        <AlertDialog className='w-full '>
          <AlertDialogTrigger className='w-full'>
            <Button
              className={cn(
                "w-full flex items-center justify-center bg-[#F7F8F9] text-[#4F4F4F] hover:bg-gray-100",
                isCollapsed ? "p-2" : ""
              )}
            >
              <LogOut className={cn("shrink-0", isCollapsed ? "mr-0 " : "mr-0")} />
              {!isCollapsed && <span className='text-sm font-medium'>Log out</span>}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className='max-w-sm flex flex-col gap-y-4'>
            <AlertDialogHeader>
              <AlertDialogTitle className='text-center text-sm sm:text-base flex flex-col items-center gap-y-1'>

                Are you sure, you want to Logout?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className="w-full grid grid-cols-2 gap-x-4  px-10 place-content-center content-center">
              <AlertDialogCancel className='bg-gray-100 border text-xs  sm:text-sm py-4 hover:bg-gray-200'>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout} className='bg-red-500 py-4 text-white text-xs  sm:text-sm hover:bg-red-600 ' >Logout</AlertDialogAction>
            </AlertDialogFooter>
            <div className="text-[#52544F] font-normal text-xs leading-4 text-center">
              Facing issues? <span className="text-[#004CA3] font-normal text-xs leading-4">Talk to our technical person </span>
            </div>

          </AlertDialogContent>
        </AlertDialog>
      </div>

      {
        <div className='w-full flex flex-col items-center absolute bottom-4 left-1/2 transform -translate-x-1/2'>
          {isCollapsed ? <p className='text-blue-700 font-semibold'>M</p> :
            <div>
              <div className='text-[#656565] text-sm flex items-center gap-x-1'>
                Developed By
                <Image src="/assets/images/love.svg"
                  className='w-4 h-4'
                  alt="love" width={50} height={50} />
              </div>
              <a href='https://emeacademy.co.in' target='_blank' className='text-[#323232] text-sm'>

                EME IT Team
              </a>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Sidebar

