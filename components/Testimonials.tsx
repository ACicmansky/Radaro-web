"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { testimonials } from "@/data/Testimonials"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const Testimonials = () => {
  const [api, setApi] = React.useState<any>(null)
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  return (
    <SectionContainer id="testimonials" background="white">
      <SectionHeader
        title="Čo o nás hovoria klienti"
        centered={true}
      />

      <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
        <div 
          className="w-full"
          onMouseEnter={() => {
            if (api) plugin.current.stop()
          }}
          onMouseLeave={() => {
            if (api) plugin.current.play()
          }}
        >
          <Carousel 
            className="w-full"
            opts={{ loop: true }}
            plugins={[plugin.current]}
            setApi={setApi}
          >
          {/* Custom styled carousel buttons with fixed positioning */}
          <CarouselPrevious className="!absolute !left-0 md:!-left-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
            <FaChevronLeft className="!h-5 !w-5 md:!h-6 md:!w-6" />
          </CarouselPrevious>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="bg-gradient-to-b from-gray-50 to-white rounded-xl md:rounded-t-2xl md:rounded-b-lg p-10 md:p-14 shadow-sm relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-radaro-red opacity-20 absolute top-6 left-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, 0] }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  >
                    <FaQuoteLeft size={40} />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.p
                      className="text-body-lg text-gray-700 italic mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </motion.p>

                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <div className="ml-4">
                        <h4 className="text-emphasis font-bold">{testimonial.name}</h4>
                        <p className="text-subtle text-body-sm">{testimonial.position}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="!absolute !right-0 md:!-right-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
            <FaChevronRight className="!h-5 !w-5 md:!h-6 md:!w-6" />
          </CarouselNext>
        </Carousel>
        </div>
      </div>
    </SectionContainer>
  )
}
