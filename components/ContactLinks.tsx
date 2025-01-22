import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export function ContactLinks() {
  return (
    <section className="bg-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-800">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

