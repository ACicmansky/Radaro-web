"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FaQuoteLeft } from "react-icons/fa"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { testimonials } from "@/data/Testimonials"

export function Testimonials() {  
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Čo o nás hovoria klienti</h2>
            <div className="w-20 h-1 bg-radaro-red mx-auto mb-6" />
          </div>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div 
                    className="bg-gradient-to-b from-gray-50 to-white rounded-xl md:rounded-t-2xl md:rounded-b-lg p-8 md:p-12 shadow-sm relative overflow-hidden"
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
                        className="text-gray-700 text-lg italic mb-6"
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
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div 
              className="absolute -left-4 top-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <CarouselPrevious className="relative left-0" />
            </motion.div>
            <motion.div 
              className="absolute -right-4 top-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <CarouselNext className="relative right-0" />
            </motion.div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
