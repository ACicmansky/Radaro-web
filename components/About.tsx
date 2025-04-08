"use client"

import Image from "next/image"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { scrollToSection } from "@/lib/scroll"

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O nás</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 p-8 flex flex-col items-center justify-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/other/ProfilePicture.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 160px"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">Ing. Radovan Kramár</h3>
              <p className="text-gray-600 text-sm">zakladateľ</p>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="mailto:info@radaro.sk" 
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/radovan-kram%C3%A1r-88842b73/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Profesionálne stavebné služby</h4>
              <div className="text-gray-600 space-y-4">
                <p>
                  Máme dlhoročné skúsenosti s technickým dozorom a riadením výstavby rezidenčných a polyfunkčných projektov
                  v Bratislave a okolí. Ako autorizovaní stavební inžinieri pomáhame odhaliť skryté vady, predchádzať chybám
                  a šetriť náklady.
                </p>
                <p>
                  Ponúkame stavebný dozor, manažment výstavby, technické obhliadky, audity kvality a
                  poradenstvo pri kúpe nehnuteľností. Veríme v profesionálny prístup, moderné technológie a riešenia, ktoré
                  vám zabezpečia kvalitnú a bezproblémovú výstavbu.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                >
                  Kontaktujte nás pre cenovú ponuku
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

