"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useLogoVisibility } from "@/contexts/LogoVisibilityContext";

type NavLogoProps = {
  size?: "small" | "medium" | "large"
  useHiding?: boolean
  className?: string
}

export const NavLogo = ({ size = "medium", useHiding = true, className = "" }: NavLogoProps) => {
  const { isHeroLogoVisible } = useLogoVisibility()

  // Define sizing based on the size prop
  const dimensions = {
    small: {
      height: "h-14",
      width: "w-[120px]"
    },
    medium: {
      height: "h-16 sm:h-18",
      width: "w-[140px] sm:w-[160px]"
    },
    large: {
      height: "h-18 sm:h-20",
      width: "w-[160px] sm:w-[220px]"
    }
  }
  const { height, width } = dimensions[size]

  // Always visible, no hiding, no animation
  if (!useHiding) {
    return (
      <motion.div
        className={`relative ${height} ${width} ${className}`}
        whileHover={{ scale: 1.05 }}
        animate={{ opacity: 1 }}
        initial={false}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/other/navigation-logo.png"
          alt="RADARO logo"
          fill
          className="object-contain"
          sizes={size === "large" ? "220px" : size === "medium" ? "160px" : "120px"}
          priority
        />
      </motion.div>
    );
  }

  // Animated, conditional visibility
  return (
    <AnimatePresence>
      {!isHeroLogoVisible && (
        <motion.div
          key="nav-logo"
          className={`relative ${height} ${width} ${className}`}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src="/images/other/navigation-logo.png"
            alt="RADARO logo"
            fill
            className="object-contain"
            sizes={size === "large" ? "220px" : size === "medium" ? "160px" : "120px"}
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
