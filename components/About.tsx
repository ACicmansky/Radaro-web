import Image from "next/image"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"

export function About() {
  return (
    <section id="about" className="bg-white py-12 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/other/ProfilePicture.jpg"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-500 mt-2">Ing. Radovan Kramár</span>
            <span className="text-xs text-gray-500 mt-2">zakladateľ</span>
          </div>
          <div className="max-w-2xl">
            <p className="text-gray-600 mb-6">
              Máme dlhoročné skúsenosti s technickým dozorom a riadením výstavby rezidenčných a polyfunkčných projektov
              v Bratislave a okolí. Ako autorizovaní stavební inžinieri pomáhame odhaliť skryté vady, predchádzať chybám
              a šetriť náklady. Ponúkame stavebný dozor, manažment výstavby, technické obhliadky, audity kvality a
              poradenstvo pri kúpe nehnuteľností. Veríme v profesionálny prístup, moderné technológie a riešenia, ktoré
              vám zabezpečia kvalitnú a bezproblémovú výstavbu.
              <br />
              <br />
              Kontaktujte nás pre cenovú ponuku.
            </p>
            <div className="mt-8">
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="mailto:info@radaro.sk" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <FaEnvelope size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/radovan-kram%C3%A1r-88842b73/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

