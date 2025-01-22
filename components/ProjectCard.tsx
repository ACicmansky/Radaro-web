"use client"

import { useState } from "react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  imageSrc: string
  description: string
}

export function ProjectCard({ title, imageSrc, description }: ProjectCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => setShowDescription(!showDescription)}
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            showDescription ? "translate-y-full" : "translate-y-0"
          }`}
        >
          <Image src={imageSrc || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold px-4 text-center">{title}</h3>
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-white p-4 transition-transform duration-500 ease-in-out ${
            showDescription ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

