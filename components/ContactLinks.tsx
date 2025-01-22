import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export function ContactLinks() {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-800 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

