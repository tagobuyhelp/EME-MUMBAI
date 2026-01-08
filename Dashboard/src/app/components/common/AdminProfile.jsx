'use client'
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import useAuthDataStore from "@/store/authStore"
import API from "@/api"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {  useRouter } from 'next/navigation'

export default function AdminProfile() {
    const clearAuthData = useAuthDataStore((state) => state.clearAuthData)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const router = useRouter()

    const handleLogout = () => {
        API.auth.Logout(router, clearAuthData)
    }

    return (
        <div className="h-full flex items-center">
            <DropdownMenu>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer">
                                    <Image
                                        src="/assets/images/profile_Image.jpg"
                                        width={100}
                                        height={100}
                                        className="w-8 h-8 rounded-full"
                                        alt="profile_Image"
                                    />
                                </div>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-[#41A3FF] border">
                            <p>Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                        <div className="flex flex-col items-start gap-x-2">
                            <p>Kazi Mahasin Azim</p>
                            <p className="text-xs font-normal text-muted-foreground">admin@emeacademy.in</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link href="/dashboard/profile">
                            <DropdownMenuItem className="text-[#878787] text-xs">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                        </Link>

                        <Link href="/dashboard">
                            <DropdownMenuItem className="text-[#878787] text-xs">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span>Dashboard</span>
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/dashboard/settings">
                            <DropdownMenuItem className="text-[#878787] text-xs">
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuItem className="text-[#878787] text-xs" onSelect={() => setIsAlertOpen(true)}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className="max-w-sm flex flex-col gap-y-4">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-base flex flex-col items-center gap-y-1">
                            Are you sure you want to Logout?
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="w-full grid grid-cols-2 gap-x-4 px-10 place-content-center content-center">
                        <AlertDialogCancel className="bg-gray-100 border text-sm py-4 hover:bg-gray-200">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout} className="bg-red-500 py-4 text-white text-sm hover:bg-red-600">
                            Logout
                        </AlertDialogAction>
                    </AlertDialogFooter>
                    <div className="text-[#52544F] font-normal text-xs leading-4 text-center">
                        Facing issues?{" "}
                        <span className="text-[#004CA3] font-normal text-xs leading-4">Talk to our technical person</span>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

