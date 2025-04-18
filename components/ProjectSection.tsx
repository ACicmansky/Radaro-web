"use client"

import { useState } from "react"
import Image from "next/image"
import { Modal } from "@/components/ui/Modal"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"
import { Project, projects } from "@/data/Projects"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <SectionContainer id="projects" background="white">
            <SectionHeader 
                title="Naše projekty" 
                subtitle="Prezrite si naše úspešne dokončené projekty"
                centered={true}
            />
            
            <div className="mt-8 sm:mt-12 relative px-4 md:px-12">
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-64 m-2"
                                    onClick={() => handleProjectClick(project)}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
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
                                        {/* Permanent title at bottom - hidden on hover */}
                                        <AnimatePresence>
                                            {hoveredIndex !== index && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-4 px-3"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 0.9 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <motion.h3
                                                        className="text-white text-lg font-medium px-2 text-center"
                                                        initial={{ y: 0 }}
                                                        whileHover={{ y: -2 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {project.title}
                                                    </motion.h3>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {/* Full overlay on hover (desktop only) */}
                                        <motion.div
                                            className="absolute inset-0 bg-black/60 flex items-center justify-center md:flex"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                className="flex flex-col items-center justify-center space-y-4 px-6"
                                                initial={{ y: 10, opacity: 0 }}
                                                whileHover={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                <h3 className="text-white text-xl font-semibold text-center">
                                                    {project.title}
                                                </h3>
                                                <div className="w-8 h-1 bg-radaro-red rounded-full"></div>
                                                <p className="text-white/90 text-sm text-center line-clamp-3">
                                                    {project.description.length > 100
                                                        ? `${project.description.substring(0, 100)}...`
                                                        : project.description}
                                                </p>
                                            </motion.div>
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
        </SectionContainer>
    )
}