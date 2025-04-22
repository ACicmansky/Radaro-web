"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Sling as Hamburger } from "hamburger-react"
import { NavLogo } from "./NavLogo"
import { MobileMenu } from "./MobileMenu"
import { scrollToSection } from "@/lib/scroll"
import { hoverGrow } from "@/lib/animation-presets"

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleContactClick = () => {
    scrollToSection("contact")
    if (isOpen) setIsOpen(false)
  }
  
  // Animation variants for the nav container
  const navVariants = {
    visible: { 
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      height: "64px",
      y: 0,
      transition: { duration: 0.3 }
    },
    hidden: { 
      y: -100,
      transition: { duration: 0.3 }
    }
  }

  return (
    <>
      <motion.div 
        className="lg:hidden fixed top-0 left-0 right-0 h-16 z-50"
        variants={navVariants}
        animate="visible"
        initial="visible"
      >
        <div className="container mx-auto px-5 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLogo size="small" />
          </motion.div>
          
          {/* Nav actions */}
          <div className="flex items-center space-x-3">
            {/* Contact button */}
            <motion.button
              onClick={handleContactClick}
              className="bg-radaro-red hover:bg-radaro-red-hover text-white text-body-sm font-medium py-2 px-4 rounded"  
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              {...hoverGrow()}
            >
              Kontakt
            </motion.button>
            
            {/* Hamburger menu */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-800"
            >
              <Hamburger 
                toggled={isOpen} 
                toggle={setIsOpen} 
                size={20} 
                duration={0.3} 
                color={"#333"} 
                rounded
                label="Show menu"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>


    </>
  )
}
