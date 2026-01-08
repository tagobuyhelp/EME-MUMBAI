import { motion } from "framer-motion";
import Image from "next/image";

export function SuccessStoryCard({
  name,
  location,
  profileImage,
  beforeStatus,
  afterCompany,
  afterCompanyLogo,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-sm transition-shadow flex flex-col gap-4 border border-[#DDDDDD]"
    >
      {/* Top Section */}
      <div className="flex items-center gap-4 px-5 pt-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden">
          <Image
            src={profileImage}
            alt={name}
            width={80}
            height={80}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold text-[#080808]">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-[#8E8E8E]">{location}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 rounded-xl flex items-center justify-between p-5 border border-[#EEEEEE] shadow-sm">
        {/* Before */}
        <div className="flex-1 space-y-1">
          <p className="text-xs text-[#656565]">Before EME</p>
          <p className="text-[16px] font-semibold text-[#4B4B4B]">
            {beforeStatus}
          </p>
        </div>

        {/* EME Logo and Arrow */}
        <div className="text-center justify-center flex flex-col items-center">
          <div className="text-xs mx-auto mb-2 text-text-[#656565]">Placed In</div>
          <Image
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SuccessStories/vectorLogo.svg"
            alt="EME Academy"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-end justify-end flex-1 space-y-1">
          <p className="text-xs text-[#232D63]">After EME</p>
          <div className="w-20 h-6 relative">
            <Image
              src={afterCompanyLogo}
              alt={afterCompany}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
