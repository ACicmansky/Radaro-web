import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FaQuoteLeft } from "react-icons/fa"

export function Testimonials() {
  const testimonials = [
    {
      name: "Peter Novák",
      position: "Developerská spoločnosť XYZ",
      quote: "Tím RADARO nám poskytol vynikajúcu podporu pri našom projekte. Ich odbornosť a pozornosť k detailom výrazne prispeli ku kvalite finálneho produktu."
    },
    {
      name: "Jana Kováčová",
      position: "Majiteľka nehnuteľnosti",
      quote: "Technická obhliadka od RADARO odhalila viacero problémov, ktoré by nás neskôr stáli tisíce eur. Vysoko odporúčam ich služby každému, kto uvažuje o kúpe nehnuteľnosti."
    },
    {
      name: "Michal Svoboda",
      position: "Stavebná firma ABC",
      quote: "Spolupráca s Ing. Kramárom bola vždy profesionálna. Jeho expertíza a skúsenosti sú neoceniteľné pre úspešné dokončenie náročných projektov."
    }
  ]
  
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Čo o nás hovoria klienti</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md relative">
                    <div className="text-red-600 opacity-20 absolute top-6 left-6">
                      <FaQuoteLeft size={40} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-gray-700 text-lg italic mb-6">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      <div className="flex items-center">
                        <div className="ml-4">
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="relative left-0" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
