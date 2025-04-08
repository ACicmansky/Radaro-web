"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"
import { useState, useEffect } from "react"
import { Sling as Hamburger } from "hamburger-react"

type NavItem = {
  label: string
  section: string
  isCta?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: "O nás", section: "about" },
  { label: "Projekty", section: "projects" },
  { label: "Služby", section: "services" },
  { label: "Referencie", section: "testimonials" },
  { label: "Kontakt", section: "contact", isCta: true }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle menu toggle and outside clicks
  useEffect(() => {
    // Only add listener when menu is open
    if (!isOpen) return
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".mobile-menu") && !target.closest(".hamburger-react")) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("click", handleClickOutside)
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden"
    
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleNavClick = (section: string) => {
    scrollToSection(section)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isOpen ? 'bg-white' : 'bg-white bg-opacity-80 backdrop-blur-[5px]'} shadow-md z-50`}>
      <div className="w-full px-3 sm:px-4 flex justify-between items-center h-[60px] md:h-[70px]">
        {/* Logo */}
        <div className="relative h-12 w-[140px] sm:h-14 sm:w-[160px] md:h-16 md:w-[220px]">
          <Image
            src="/images/other/navigation-logo.png"
            alt="RADARO logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 220px"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={item.isCta 
                ? "px-4 py-1.5 bg-radaro-red hover:bg-radaro-red-hover text-white rounded-md font-medium transition-colors flex items-center"
                : "text-gray-600 hover:text-gray-900 inline-flex items-center"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile CTA Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-radaro-red hover:bg-radaro-red-hover text-white rounded-md font-medium transition-colors text-xs sm:text-sm flex items-center"
          >
            Kontakt
          </button>
          
          {/* Hamburger Menu */}
          <div className="hamburger-react z-[60]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#333" size={18} />
          </div>
        </div>
        
        {/* Mobile Menu - Premium Level 3 Design */}
        <div className={`fixed inset-0 bg-black z-30 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-60 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile menu panel with advanced animation */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-full w-[280px] bg-white z-50 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            boxShadow: isOpen ? '0 10px 50px rgba(0, 0, 0, 0.18)' : 'none'
          }}
        >
          {/* Premium decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-radaro-red to-radaro-red-hover"></div>
          
          {/* Menu content with staggered animation */}
          <div className="pt-16 px-6 flex flex-col h-full">
            {/* Subtle pattern overlay for visual interest */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            {/* Logo with subtle animation */}
            <div className="flex justify-center mb-10 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-14 w-[160px] transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/other/navigation-logo.png"
                  alt="RADARO logo"
                  fill
                  className="object-contain"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
                
            {/* Premium navigation items with staggered animation */}
            <div className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item, index) => (
                <div 
                  key={item.section} 
                  className="group animate-slideRight opacity-0" 
                  style={{ animationDelay: `${0.15 + index * 0.07}s`, animationFillMode: 'forwards' }}
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
                </div>
              ))}
            </div>
            
            {/* Premium footer with social links and branding */}
            <div className="mt-auto pb-8 text-center animate-fadeIn opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {/* Social media icons */}
              <div className="flex justify-center space-x-5 mb-6">
                <a href="#" className="text-gray-400 hover:text-radaro-red transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-radaro-red transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              
              {/* Copyright with subtle animation */}
              <div className="text-xs text-gray-400 hover:text-gray-500 transition-colors duration-300">
                <span className="mr-1">RADARO</span>
                <span className="text-radaro-red">©</span>
                <span className="ml-1">{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </nav>
  )
}
