"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type NavLogoProps = {
  size?: "small" | "medium" | "large"
  className?: string
}

export const NavLogo = ({ size = "medium", className = "" }: NavLogoProps) => {
  // Define sizing based on the size prop
  const dimensions = {
    small: {
      height: "h-10",
      width: "w-[120px]"
    },
    medium: {
      height: "h-12 sm:h-14",
      width: "w-[140px] sm:w-[160px]"
    },
    large: {
      height: "h-14 sm:h-16",
      width: "w-[160px] sm:w-[220px]"
    }
  }

  const { height, width } = dimensions[size]
  
  return (
    <motion.div 
      className={`relative ${height} ${width} ${className}`}
      whileHover={{ scale: 1.05 }}
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
  )
}
