'use client'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import dynamic from "next/dynamic";

const LandingAdmissionForm = dynamic(() => import("@/components/common/LandingAdmissionForm"));
const LandingAdmissionFormWithTiming = dynamic(() => import("@/components/common/LandingAdmissionFormWithTiming"));

export default function CTAButton({ name, styleClasses, _this }) {

    // Auto detect brochure CTA
    // const isBrochureCTA = name.toLowerCase().includes("brochure");
    const isBrochureCTA = (name?.toLowerCase?.() ?? "").includes("download");

    return (
        <div className="flex justify-center items-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        size="lg" variant="outline"
                        className={`${styleClasses} w-full sm:w-auto text-[12px] md:text-sm leading-5 font-semibold px-8 hover:cursor-pointer py-2`}
                        onClick={() => { 
                        _this?.setIsModalOpen?.(true)
                        _this?.setCtaType?.(isBrochureCTA ? "download" : "normal");    
                         }}>
                        <div>
                            {name}
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="fixed w-fit top-[50%] rounded-lg">
                    <VisuallyHidden>
                        <DialogTitle>Admission Form</DialogTitle>
                    </VisuallyHidden>
                    <div className="w-full z-[999]">
                        {_this?.formVariant === "timing" ? (
                            <LandingAdmissionFormWithTiming {..._this} />
                        ) : (
                            <LandingAdmissionForm {..._this} />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
