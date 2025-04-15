"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h3 
              className="text-white text-lg font-semibold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              RADARO s.r.o.
            </motion.h3>
            <motion.p 
              className="mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              IČO: 56 715 811
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="md:ml-auto md:max-w-xs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h3 
              className="text-white text-lg font-semibold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Kontaktné údaje
            </motion.h3>
            <div className="space-y-2">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "#EF4444" }}
                >
                  <FaMapMarkerAlt className="mr-3 mt-1 text-radaro-red" />
                </motion.div>
                <span>
                  P. V. Rovnianka 5136/9
                  <br />
                  03601 Martin
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "#EF4444" }}
                >
                  <FaEnvelope className="mr-3 text-radaro-red" />
                </motion.div>
                <motion.a 
                  href="mailto:info@radaro.sk" 
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                >
                  info@radaro.sk
                </motion.a>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "#EF4444" }}
                >
                  <FaPhone className="mr-3 text-radaro-red" />
                </motion.div>
                <motion.a 
                  href="tel:+421902851275" 
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                >
                  +421 902 851 275
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.p 
            className="text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            &copy; {year} Mgr. Andrej Čičmanský. Všetky práva vyhradené.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4 mt-3 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.a 
              href="https://github.com/ACicmansky" 
              className="hover:text-white transition-colors" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={18} className="hover:text-radaro-red" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/andrej-cicmansky/" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={18} className="hover:text-radaro-red" />
            </motion.a>
            <motion.a 
              href="mailto:andrej.cicmansky@gmail.com" 
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.3, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={18} className="hover:text-radaro-red" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

