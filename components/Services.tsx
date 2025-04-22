"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { services } from "@/data/Services"
import { hoverGrow, fadeIn } from "@/lib/animation-presets"

export const Services = () => {
  return (
    <SectionContainer id="services" background="light">
      <SectionHeader
        title="Naše služby"
        subtitle="Poskytujeme komplexné riešenia pre každú fázu vašich stavebných projektov"
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 sm:p-7 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            {...fadeIn()}
            {...hoverGrow(false)}
          >
            <motion.div
              className="text-radaro-red mb-4"
              {...fadeIn()}>
              {(() => { const Icon = service.icon; return <Icon className="w-6 h-6" /> })()}
            </motion.div>
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight"
              {...fadeIn()}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-body-sm text-gray-600 flex-grow mt-1 sm:mt-2"
              {...fadeIn()}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

