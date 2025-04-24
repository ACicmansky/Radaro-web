"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeInUp, fadeIn, hoverGrow } from "@/lib/animation-presets"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          {...fadeInUp()}
        >
          <motion.div
            {...fadeInUp()}
          >
            <motion.h3
              className="text-white text-heading-subsection mb-4"
              {...fadeIn()}
            >
              RADARO s.r.o.
            </motion.h3>
            <motion.p
              className="mb-4 text-body text-gray-300"
              {...fadeIn()}
            >
              Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie.
            </motion.p>
            <motion.p
              className="mb-4 text-body text-gray-300"
              {...fadeIn()}
            >
              IČO: 56 715 811
            </motion.p>
          </motion.div>

          <motion.div
            {...fadeInUp()}
            className="md:ml-auto md:max-w-xs"
          >
            <motion.h3
              className="text-white text-heading-subsection mb-4"
              {...fadeIn()}
            >
              Kontaktné údaje
            </motion.h3>
            <div className="space-y-3">
              <motion.div
                {...fadeIn()}
                className="flex items-start"
              >
                <motion.div
                  {...hoverGrow()}
                >
                  <FaMapMarkerAlt className="mr-3 mt-1 text-radaro-red" />
                </motion.div>
                <span className="text-body text-gray-300">
                  P. V. Rovnianka 5136/9
                  <br />
                  03601 Martin
                </span>
              </motion.div>
              <motion.div
                {...fadeIn()}
                className="flex items-center"
              >
                <motion.div
                  {...hoverGrow()}
                >
                  <FaEnvelope className="mr-3 text-radaro-red" />
                </motion.div>
                <motion.a
                  href="mailto:info@radaro.sk"
                  className="text-gray-300 hover:text-white transition-colors"
                  {...hoverGrow()}
                >
                  info@radaro.sk
                </motion.a>
              </motion.div>
              <motion.div
                {...fadeIn()}
                className="flex items-center"
              >
                <motion.div
                  {...hoverGrow()}
                >
                  <FaPhone className="mr-3 text-radaro-red" />
                </motion.div>
                <motion.a
                  href="tel:+421902851275"
                  className="text-gray-300 hover:text-white transition-colors"
                  {...hoverGrow()}
                >
                  +421 902 851 275
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full mt-4 mb-4 flex justify-center"
          {...fadeInUp()}
        >
          <span className="text-sm text-gray-300 text-center">
            <span className="font-semibold text-white">RADARO</span> hrdo podporuje{' '}
            <motion.a
              href="https://upracme.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-radaro-red font-semibold transition-colors"
              {...hoverGrow()}
            >
              Upracme.sk
            </motion.a>
            {' '}– Dobrovoľnícku iniciatívu odstraňovania nelegálnych skládok
          </span>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center"
          {...fadeInUp()}
        >
          <motion.p
            className="text-body-sm text-gray-300"
            {...fadeInUp()}
          >
            Design by &copy; {year} Mgr. Andrej Čičmanský. Všetky práva vyhradené.
          </motion.p>

          <motion.div
            className="flex space-x-4 mt-3 md:mt-0"
            {...fadeInUp()}
          >
            <motion.a
              href="https://github.com/ACicmansky"
              className="hover:text-white transition-colors"
              target="_blank" rel="noopener noreferrer"
              {...hoverGrow()}
            >
              <FaGithub size={18} className="hover:text-radaro-red" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/andrej-cicmansky/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...hoverGrow()}
            >
              <FaLinkedin size={18} className="hover:text-radaro-red" />
            </motion.a>
            <motion.a
              href="mailto:andrej.cicmansky@gmail.com"
              className="hover:text-white transition-colors"
              {...hoverGrow()}
            >
              <FaEnvelope size={18} className="hover:text-radaro-red" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

