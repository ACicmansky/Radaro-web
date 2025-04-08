"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"

export function HeroSection() {
  return (
    <section id="hero"
      className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Overlay pattern for visual interest */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             backgroundSize: '30px 30px'
           }}>
      </div>
      
      {/* Red accent diagonal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-0 w-1/2 h-full transform rotate-6 bg-red-600 opacity-10" />
      </div>
      
      <div className="relative z-10 text-center text-white px-3 sm:px-4 max-w-5xl mx-auto">
        <div className="relative h-32 sm:h-36 md:h-48 w-[280px] sm:w-[350px] md:w-[500px] mx-auto mb-1">
          <Image
            src="/images/other/hero-logo.PNG"
            alt="RADARO logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 500px"
            priority
          />
        </div>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2">
          Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie
        </p>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto text-gray-300 px-2">
          Prinášame odborný dohľad a profesionálne riadenie pre vaše stavebné projekty
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Button 
            className="bg-radaro-red hover:bg-radaro-red-hover text-white font-medium text-sm sm:text-base py-1 h-auto sm:h-10"
            onClick={() => scrollToSection("contact")}
          >
            Bezplatná konzultácia
          </Button>
          <Button 
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm sm:text-base py-1 h-auto sm:h-10"
            onClick={() => scrollToSection("projects")}
          >
            Naše projekty
          </Button>
        </div>
      </div>
    </section>
  )
}
