import { Navigation } from "@/components/Navigation"
import { ProjectCard } from "@/components/ProjectCard"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Footer } from "@/components/Footer"

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 1. This project showcases my skills in responsive web design and modern JavaScript frameworks.",
    },
    {
      title: "Project 2",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 2. An e-commerce solution built with React and Node.js, featuring real-time inventory management.",
    },
    {
      title: "Project 3",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 3. A mobile app developed using React Native, allowing users to track their fitness goals and nutrition.",
    },
    {
      title: "Project 4",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 4. An AI-powered chatbot integrated into a customer service platform, improving response times and user satisfaction.",
    },
    {
      title: "Project 5",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 5. A data visualization dashboard built with D3.js, presenting complex datasets in an intuitive and interactive manner.",
    },
    {
      title: "Project 6",
      imageSrc: "/placeholder.svg?height=300&width=400",
      description:
        "Description for Project 6. A blockchain-based voting system ensuring transparency and security in online elections.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100 pt-16">
      <Navigation />
      <About />
      <section id="projects" className="container mx-auto px-4 py-8 pt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <Services />
      <Footer />
    </main>
  )
}

