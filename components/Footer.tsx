import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Company Details - Top Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Kontaktné údaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FaBuilding className="mr-2" />
              <span>RADARO s.r.o.</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1" />
              <span>
                P. V. Rovnianka 5136/9
                <br />
                03601 Martin
              </span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@radaro.sk" className="hover:text-gray-300 transition-colors">
                info@radaro.sk
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+421902851275" className="hover:text-gray-300 transition-colors">
                +421 902 851 275
              </a>
            </div>
            <div>
              <span>IČO: 56 715 811</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Creator Info - Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">© Andrej Cicmansky</p>
          <div className="flex items-center">
            <div className="flex space-x-4 mr-4">
              <a
                href="https://github.com/ACicmansky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrej-cicmansky/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:andrej.cicmansky@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

