"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-[5px] shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative h-12 w-[180px]">
          <Image
            src="/images/other/Logo.png"
            alt="RADARO logo"
            fill
            className="object-contain"
            sizes="180px"
            priority
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-gray-600 hover:text-gray-900`}
            >
              O nás
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-gray-600 hover:text-gray-900`}
            >
              Projekty
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-gray-600 hover:text-gray-900`}
            >
              Služby
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-gray-600 hover:text-gray-900`}
            >
              Referencie
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-gray-600 hover:text-gray-900`}
            >
              Kontakt
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

