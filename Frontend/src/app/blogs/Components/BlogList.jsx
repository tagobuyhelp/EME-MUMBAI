import Image from "next/image";
import Link from "next/link";


export default function BlogList({ blog }) {
    const truncateDescription = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "....."
            : text;
    };

    return (
        <div
            key={blog?._id}
            className="max-w-[450px] max-h-[450px] w-full rounded-xl bg-[#ffffff] flex flex-col justify-start items-start gap-[10px] lg:gap-[20px] overflow-hidden p-[10px] pb-[20px]  shadow-sm"
        >
            <div className="w-full relative">
                <Image
                    src={blog?.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-[200px] rounded-xl object-cover"
                />
            </div>
            <div className="text-[#191719] text-[18px] lg:text-xl font-[400]  lg:h-[70px]">
                {blog?.title}
            </div>
            <div className="text-[#191719] text-[14px] lg:text-[15px] font-[300] lg:leading-[25px] lg:h-[70px]">
                {truncateDescription(blog?.meta_description, 20)}
            </div>
            <Link
                href={`/blogs/${blog?.url}`}
                className="flex justify-center items-center gap-1 cursor-pointer"
            >
                <div className="text-[#191719] text-[14px] lg:text-[16px] font-[500] ">
                    Read more
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.434 8.09997L7.71641 2.38317L8.28281 1.81677L14.9652 8.49997L8.28281 15.1832L7.71641 14.6176L13.434 8.89997H1.59961V8.09997H13.434Z"
                            fill="#191719"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )
}
