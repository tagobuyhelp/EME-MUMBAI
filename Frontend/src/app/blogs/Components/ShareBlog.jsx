"use client";
import { useEffect, useState } from "react";

const ShareBlog = () => {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    // Share Handlers
    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, "_blank");
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`, "_blank");
    };

    const shareOnInstagram = () => {
        alert("Instagram does not support direct sharing via URL. Share manually.");
    };

    return (
        <div className="flex flex-row justify-center gap-2 mt-2 font-[500]">
            Share this blog:
            <div className="flex flex-row items-center gap-2">
                {/* Facebook Share */}
                <div
                    onClick={shareOnFacebook}
                    className="bg-[#F6F6F6] rounded-full w-7 h-7 p-1.5 cursor-pointer hover:bg-[#E4E4E4] transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </div>

                {/* X (Twitter) Share */}
                <div
                    onClick={shareOnTwitter}
                    className="bg-[#F6F6F6] rounded-full w-7 h-7 p-1.5 cursor-pointer hover:bg-[#E4E4E4] transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 48 48"
                    >
                        <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6" />
                        <polygon
                            fill="#fff"
                            fillRule="evenodd"
                            points="31.143,41 7.82,7 16.777,7 40.1,41"
                            clipRule="evenodd"
                        />
                        <path
                            fill="#616161"
                            d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                        />
                    </svg>
                </div>

                {/* Instagram Share (Manual) */}
                <div
                    onClick={shareOnInstagram}
                    className="bg-[#F6F6F6] rounded-full w-7 h-7 p-1.5 cursor-pointer hover:bg-[#E4E4E4] transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ShareBlog;
