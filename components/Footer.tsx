import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa"

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">RADARO s.r.o.</h3>
            <p className="mb-3">
              Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie.
            </p>
            <p>IČO: 56 715 811</p>
          </div>
          
          <div className="md:ml-auto md:max-w-xs">
            <h3 className="text-white text-lg font-semibold mb-3">Kontaktné údaje</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-red-600" />
                <span>
                  P. V. Rovnianka 5136/9
                  <br />
                  03601 Martin
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-red-600" />
                <a href="mailto:info@radaro.sk" className="hover:text-white transition-colors">
                  info@radaro.sk
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-red-600" />
                <a href="tel:+421902851275" className="hover:text-white transition-colors">
                  +421 902 851 275
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {year} Mgr. Andrej Čičmanský. Všetky práva vyhradené.</p>
          
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="https://github.com/ACicmansky" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrej-cicmansky/" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:andrej.cicmansky@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

