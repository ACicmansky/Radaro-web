"use client"

import { useCallback } from "react"

export function Header() {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Rady's Portfolio</h1>
        <button
          onClick={scrollToContact}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Contact Me
        </button>
      </div>
    </header>
  )
}

