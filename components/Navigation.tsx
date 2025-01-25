"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navHeight = 64 // Approximate height of the navigation bar
      const offset = section.offsetTop - navHeight
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-[5px] shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Rady's Portfolio</h1>
        <ul className="flex space-x-6">
          {["about", "projects", "services"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === section ? "font-bold" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

