"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { testimonials } from "@/data/Testimonials"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeInUp } from "@/lib/animation-presets"

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

      <motion.div
        className="max-w-4xl mx-auto mt-8 sm:mt-12"
        {...fadeInUp(0)}>
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
            <CarouselPrevious className="!absolute !left-0 md:!-left-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
              <FaChevronLeft className="!h-5 !w-5 md:!h-6 md:!w-6" />
            </CarouselPrevious>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl md:rounded-t-2xl md:rounded-b-lg p-10 md:p-14 shadow-sm relative overflow-hidden">
                    <div className="text-radaro-red opacity-20 absolute top-6 left-6">
                      <FaQuoteLeft size={40} />
                    </div>

                    <div className="relative z-10">
                      <p className="text-body-lg text-gray-700 italic mb-8">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="ml-4">
                        <h4 className="text-emphasis font-bold">{testimonial.name}</h4>
                        <p className="text-subtle text-body-sm">{testimonial.position}</p>
                      </div>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!absolute !right-0 md:!-right-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
              <FaChevronRight className="!h-5 !w-5 md:!h-6 md:!w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
