"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-[5px] shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px]">
        <div className="relative h-16 w-[220px]">
          <Image
            src="/images/other/Logo.png"
            alt="RADARO logo"
            fill
            className="object-contain"
            sizes="220px"
            priority
          />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-gray-600 hover:text-gray-900 inline-flex items-center`}
            >
              O nás
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-gray-600 hover:text-gray-900 inline-flex items-center`}
            >
              Projekty
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-gray-600 hover:text-gray-900 inline-flex items-center`}
            >
              Služby
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-gray-600 hover:text-gray-900 inline-flex items-center`}
            >
              Referencie
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-1.5 bg-radaro-red hover:bg-radaro-red-hover text-white rounded-md font-medium transition-colors flex items-center"
            >
              Kontakt
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

