"use client"

import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"

export function HeroSection() {
  return (
    <section
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
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          <span className="text-radaro-red">RA</span>DARO
        </h1>
        <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie
        </p>
        <p className="text-base mb-6 max-w-2xl mx-auto text-gray-300">
          Prinášame odborný dohľad a profesionálne riadenie pre vaše stavebné projekty
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-radaro-red hover:bg-radaro-red-hover text-white font-medium"
            onClick={() => scrollToSection("contact")}
          >
            Bezplatná konzultácia
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-900 border-white hover:bg-white font-medium"
            onClick={() => scrollToSection("projects")}
          >
            Naše projekty
          </Button>
        </div>
      </div>
    </section>
  )
}
