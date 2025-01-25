import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Cicmansky</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

