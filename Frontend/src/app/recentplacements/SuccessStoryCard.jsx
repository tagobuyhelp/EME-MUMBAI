import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function SuccessStoryCard({
  name,
  profileImage,
  beforeStatus,
  afterCompany,
  afterCompanyLogo,
  isHighlighted = false,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: isHighlighted ? -6 : 0,
        scale: isHighlighted ? 1.03 : 1,
        boxShadow: isHighlighted
          ? "0 22px 55px rgba(15,23,42,0.20)"
          : "0 16px 40px rgba(15,23,42,0.10)",
      }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0 26px 65px rgba(15,23,42,0.25)",
      }}
      className="relative bg-white rounded-[26px] shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-300 flex flex-col overflow-hidden border border-[#E5E7EB] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.10),transparent_55%)] before:opacity-0 hover:before:opacity-100 before:pointer-events-none"
    >
      <div className="relative w-full h-56 md:h-80 bg-[#E5E7EB] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHighlighted ? 1.04 : 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
        <Image
          src={profileImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
        />
        </motion.div>
        <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4">
          <motion.div
            className="flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 shadow-md"
            animate={{ scale: isHighlighted ? 1.05 : 1, y: isHighlighted ? -2 : 0 }}
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-[9px] md:text-[10px] text-[#6B7280]">
              Placed at
            </span>
            <div className="relative w-16 h-6 md:w-20 md:h-8">
              <Image
                src={afterCompanyLogo}
                alt={afterCompany}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base font-semibold text-[#111827] tracking-tight">
            {name}
          </p>
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.3 }}
          >
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
          </motion.span>
        </div>

        <div className="pt-1" />
      </div>
    </motion.div>
  );
}
