"use client"

import Image from "next/image"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { scrollToSection } from "@/lib/scroll"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn, hoverGrow } from "@/lib/animation-presets"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const About = () => {
  return (
    <SectionContainer id="about" background="light">
      <SectionHeader title="O nás" centered={true} />
        
        <div className="mt-8 sm:mt-12">
          <motion.div 
            className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            {...fadeInUp(0)}
          >
            <div className="md:flex">
              <motion.div 
                className="md:w-1/3 bg-gray-100 p-10 flex flex-col items-center justify-center"
                {...fadeInUp(0.3)}
              >
                <motion.div 
                  className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white"
                  {...scaleIn}
                >
                  <Image
                    src="/images/other/photo.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 160px"
                    priority
                  />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mt-5"
                  {...fadeInUp(0.5)}
                >
                  Ing. Radovan Kramár
                </motion.h3>
                <motion.p 
                  className="text-body-sm text-subtle"
                  {...fadeInUp(0.6)}
                >
                  zakladateľ
                </motion.p>
                
                <motion.div 
                  className="flex space-x-4 mt-6"
                  {...fadeInUp(0.7)}
                >
                  <motion.a 
                    href="mailto:info@radaro.sk" 
                    className="text-gray-600 hover:text-radaro-red transition-colors"
                    aria-label="Email"
                    {...hoverGrow()}
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/radovan-kram%C3%A1r-88842b73/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-radaro-red transition-colors"
                    aria-label="LinkedIn"
                    {...hoverGrow()}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3 p-10"
                {...fadeInUp(0.4)}
              >
                <motion.h4 
                  className="text-heading-subsection text-gray-800 mb-6"
                  {...fadeInUp(0.6)}
                >
                  Profesionálne stavebné služby
                </motion.h4>
                <div className="text-body-lg space-y-6">
                  <motion.p {...fadeInUp(0.6)}>

                    Máme dlhoročné skúsenosti s technickým dozorom a riadením výstavby rezidenčných a polyfunkčných projektov
                    v Bratislave a okolí. Ako autorizovaní stavební inžinieri pomáhame odhaliť skryté vady, predchádzať chybám
                    a šetriť náklady.
                  </motion.p>
                  <motion.p {...fadeInUp(0.6)}>

                    Ponúkame stavebný dozor, manažment výstavby, technické obhliadky, audity kvality a
                    poradenstvo pri kúpe nehnuteľností. Veríme v profesionálny prístup, moderné technológie a riešenia, ktoré
                    vám zabezpečia kvalitnú a bezproblémovú výstavbu.
                  </motion.p>
                  <motion.button 
                    onClick={() => scrollToSection('contact')} 
                    className="mt-6 px-8 py-3 bg-radaro-red hover:bg-radaro-red-hover text-white rounded-md font-medium transition-colors"
                    {...fadeInUp(0.6)}
                    {...hoverGrow()}
                  >
                    Kontaktujte nás pre cenovú ponuku
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
    </SectionContainer>
  )
}
