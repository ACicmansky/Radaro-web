"use client"

import { motion } from "framer-motion"
import { NavLogo } from "./NavLogo"
import { NAV_ITEMS, type NavItem } from "./types"
import { scrollToSection } from "@/lib/scroll"

export function DesktopNavigation() {
  const handleNavClick = (section: string) => {
    scrollToSection(section)
  }

  // Animation variants for the nav container
  const navVariants = {
    visible: { 
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      height: "80px",
      y: 0,
      transition: { duration: 0.3 }
    },
    hidden: { 
      y: -100,
      transition: { duration: 0.3 }
    }
  }

  // For individual nav items
  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (index * 0.05),
        duration: 0.4
      }
    })
  }

  return (
    <motion.div 
      className="hidden lg:block h-20 fixed w-full z-50 transition-all duration-300"
      variants={navVariants}
      animate="visible"
      initial="visible"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <NavLogo />
        </motion.div>

        {/* Nav items */}
        <div className="flex items-center space-x-1">
          {NAV_ITEMS.map((item: NavItem, index: number) => (
            <motion.div 
              key={item.section}
              custom={index}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => handleNavClick(item.section)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  item.isCta 
                    ? 'text-white bg-radaro-red hover:bg-radaro-red-hover font-medium shadow-sm hover:shadow-md mx-2' 
                    : 'text-gray-700 hover:text-radaro-red'
                }`}
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
