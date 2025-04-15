"use client"

import { useState } from "react"
import Image from "next/image"
import { Modal } from "@/components/ui/modal"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  title: string
  imageSrc: string
  description: string
  images?: string[]
}

interface ProjectCardProps {
  projects: Project[]
}

export function ProjectCard({ projects }: ProjectCardProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative px-12">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-64 m-1"
                onClick={() => handleProjectClick(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-full">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-white text-xl font-semibold px-4 text-center"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <motion.div 
          className="absolute -left-4 top-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CarouselPrevious className="relative left-0" />
        </motion.div>
        <motion.div 
          className="absolute -right-4 top-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CarouselNext className="relative right-0" />
        </motion.div>
      </Carousel>

      <AnimatePresence>
        {selectedProject && isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedProject.title}
            description={selectedProject.description}
            images={selectedProject.images || []}
          />  
        )}
      </AnimatePresence>
    </div>
  )
}

