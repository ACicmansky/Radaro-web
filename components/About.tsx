import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import profilePicture from "../images/ProfilePicture.jpg"

export function About() {
  return (
    <section id="about" className="bg-white py-12 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src={profilePicture}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-gray-600 mb-6">
              Dedicated Construction Manager with a keen eye for detail and quality. Experienced in construction,
              quality, and team management across residential and infrastructure projects. Passionate about innovation
              and modern technologies in construction. A strong team player who values relationships and continuous
              learning. Co-founder and volunteer at Upracme Slovensko since 2018, committed to making a difference.
            </p>
            <div className="mt-8">
              <div className="flex justify-center md:justify-start space-x-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
