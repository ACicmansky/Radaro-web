"use client"

import { motion } from "framer-motion"
import { NAV_ITEMS } from "./types"
import { scrollToSection } from "@/lib/scroll"
import { NavLogo } from "./NavLogo"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleNavClick = (section: string) => {
    scrollToSection(section)
    onClose()
  }

  // Animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.07
      }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
    closed: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 }
    }
  }

  const backdropVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 z-50 lg:hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={backdropVariants}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        variants={backdropVariants}
      />
      
      {/* Menu container */}
      <motion.div 
        className="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-xl flex flex-col overflow-y-auto"
        variants={menuVariants}
      >
        {/* Menu content */}
        <div className="relative flex flex-col h-full p-6">
          {/* Pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}
            />
          </div>
          
          {/* Close button (X) */}
          <motion.div 
            className="absolute top-4 right-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-10 mt-4"
            variants={itemVariants}
          >
            <NavLogo size="medium" />
          </motion.div>
              
          {/* Navigation items */}
          <motion.div className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item, index) => (
              <motion.div 
                key={item.section} 
                className="group"
                variants={itemVariants}
              >
                <button
                  onClick={() => handleNavClick(item.section)}
                  className={`w-full py-4 px-4 text-left rounded-md transition-all duration-300 ${item.isCta 
                    ? 'text-white bg-radaro-red hover:bg-radaro-red-hover font-medium shadow-md hover:shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                >
                  <div className="relative flex items-center">
                    {/* Icon indicators for each menu item */}
                    {!item.isCta && (
                      <span className="mr-3 text-radaro-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.section === "about" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {item.section === "projects" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        )}
                        {item.section === "services" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {item.section === "testimonials" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        )}
                      </span>
                    )}
                    {item.isCta && (
                      <span className="mr-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    )}
                    <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </div>
                </button>
                {index < NAV_ITEMS.length - 1 && !item.isCta && (
                  <div className="border-b border-gray-100 mx-3 my-1"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Footer with social links */}
          <motion.div 
            className="mt-auto pb-8 text-center"
            variants={itemVariants}
          >
            {/* Social media icons */}
            <motion.div 
              className="flex justify-center space-x-5 mb-6"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-radaro-red transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2, color: "#EF4444" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-radaro-red transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2, color: "#EF4444" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </motion.div>
            
            {/* Copyright */}
            <motion.div 
              className="text-xs text-gray-400 hover:text-gray-500 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="mr-1">RADARO</span>
              <motion.span 
                className="text-radaro-red"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 4 
                }}
              >
                ©
              </motion.span>
              <span className="ml-1">{new Date().getFullYear()}</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
