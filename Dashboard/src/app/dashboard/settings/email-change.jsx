"use client"

import { useState } from 'react'
import { ArrowRight, Edit2, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from 'sonner'
import API from '@/api'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function EmailChange({ authData }) {
    const [currentEmail, setCurrentEmail] = useState(authData.email)
    const [newEmail, setNewEmail] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [oldOTP, setOldOTP] = useState('')
    const [newOTP, setNewOTP] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleEditToggle = () => {
        setIsEditing(!isEditing)
        if (!isEditing) {
            setNewEmail(currentEmail)
        }
    }

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    const handleNextStep = () => {
        if (newEmail && newEmail !== currentEmail) {
            setIsLoading(true)
            const formdata = {
                new_email: newEmail,
                token: authData.access_token
            }

            API.auth
                .ChangeEmailInitiate(formdata)
                .then((response) => {
                    if (response?.otp === true) {
                        setShowOTP(true)
                        toast.success("OTP Sent", {
                            description: "Please check both your current and new email for OTPs.",
                        })
                    } else {
                        toast.error("Error", {
                            description: "Failed to initiate email change. Please try again.",
                        })
                    }
                })
                .catch((error) => {
                    toast.error("Error", {
                        description: "An unexpected error occurred. Please try again.",
                    })
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            toast.warning('Invalid Email', {
                description: 'Please enter a new email address.',
            })
        }
    }

    const handleOTPChange = (e, type) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6)
        if (type === 'old') {
            setOldOTP(value)
        } else {
            setNewOTP(value)
        }
    }

    const handleSubmit = () => {
        if (oldOTP.length === 6 && newOTP.length === 6) {
            setIsLoading(true)
            const formdata = {
                oldEmailOtp: oldOTP,
                newEmailOtp: newOTP,
                newEmail: newEmail,
                token: authData.access_token
            }

            API.auth
                .verifyEmail(formdata)
                .then((response) => {
                    if (response) {
                        setCurrentEmail(newEmail)
                        setIsEditing(false)
                        setShowOTP(false)
                        setOldOTP('')
                        setNewOTP('')
                        toast.success('Email Updated', {
                            description: 'Your email has been successfully updated.',
                        });

                    } else {
                        toast.error('Invalid OTP', {
                            description: 'Please enter valid 6-digit OTPs for both email addresses.',
                        })
                    }
                })
                .catch((error) => {
                    toast.error("Error", {
                        description: "An unexpected error occurred. Please try again.",
                    })

                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            toast({
                title: "Invalid OTP",
                description: "Please enter valid 6-digit OTPs for both email addresses.",
                variant: "destructive",
            })
        }
    }

    return (
        <Card className="w-full max-w-md border-none shadow-none">
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-grow">
                            <Label htmlFor="email" className="text-[#4A4A4B]">
                                Email Address
                            </Label>
                            <div className='flex items-center gap-x-2'>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={isEditing ? newEmail : currentEmail}
                                    onChange={handleEmailChange}
                                    disabled={!isEditing || showOTP}
                                    className={isEditing && !showOTP ? "border-[#41A3FF] h-11 shadow-sm" : "shadow-sm h-11"}
                                />
                                

                                {!showOTP && (
                                    <TooltipProvider>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    className='h-11 w-12'
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={handleEditToggle}
                                                    disabled={isLoading}
                                                    aria-label={isEditing ? "Save email" : "Edit email"}
                                                >
                                                    {isEditing ? <Check className="h-4 w-4 text-[#41A3FF]" /> : <Edit2 className="h-4 w-4 text-[#41A3FF]" />}
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className='bg-white text-[#41A3FF] border'>
                                                <p>{isEditing ? "Save changes" : "Edit email address"}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>
                        </div>
                    </div>
                    {isEditing && !showOTP && (
                        <>
                            <p className="text-sm text-muted-foreground">
                                Enter your new email address above and click <span className='text-black'>'Next'</span> to proceed with the change.
                            </p>
                            <Button onClick={handleNextStep} disabled={isLoading} className="w-full  bg-[#41A3FF] hover:bg-[#41A3FF]/90">
                                {isLoading ? "Loading..." : (
                                    <>
                                        Next <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </>
                    )}
                    {showOTP && (
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="oldOTP" className='text-[#4A4A4B]'>OTP for current email ({currentEmail})</Label>
                                <Input
                                    type="text"
                                    id="oldOTP"
                                    value={oldOTP}
                                    className='h-11'
                                    onChange={(e) => handleOTPChange(e, 'old')}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength={6}
                                />
                            </div>
                            <div>
                                <Label htmlFor="newOTP" className='text-[#4A4A4B]'>OTP for new email ({newEmail})</Label>
                                <Input
                                    type="text"
                                    id="newOTP"
                                    value={newOTP}
                                    className='h-11'
                                    onChange={(e) => handleOTPChange(e, 'new')}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength={6}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
            {showOTP && (
                <CardFooter>
                    <Button onClick={handleSubmit} disabled={isLoading} className="w-full h-11 bg-[#41A3FF] hover:bg-[#41A3FF]/90">
                        {isLoading ? "Submitting..." : "Confirm Email Change"}
                    </Button>
                </CardFooter>
            )}
        </Card>
    )
}

