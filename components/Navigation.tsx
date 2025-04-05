"use client"

import Image from "next/image"

export function Navigation() {

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
        <div className="relative h-12 w-[180px]">
          <Image
            src="/images/other/Logo.png"
            alt="RADARO logo"
            layout="fill"
            objectFit="contain"
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
        </ul>
      </div>
    </nav>
  )
}

