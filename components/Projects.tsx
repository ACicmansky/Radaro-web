"use client"

import { useState } from "react"
import Image from "next/image"
import { Modal } from "@/components/ui/ModalWindow"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"
import { fadePresence, hoverLift, fadeInUp, hoverGrow } from "@/lib/animation-presets"
import { Project, projects } from "@/data/Projects"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export const Projects = () => {
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

            <motion.div
                className="mt-8 sm:mt-12 relative px-4 md:px-12"
                {...fadeInUp(0)}
            >
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselPrevious className="!absolute !left-0 md:!-left-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
                        <FaChevronLeft className="!h-5 !w-5 md:!h-6 md:!w-6" />
                    </CarouselPrevious>
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-64 m-2 focus:outline-none focus:ring-0"
                                    onClick={() => handleProjectClick(project)}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    {...hoverGrow(false)}
                                >
                                    <div className="relative h-full">``
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
                                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent"
                                                    {...fadePresence}
                                                >
                                                    <motion.div
                                                        className="bg-black/30 backdrop-blur-sm py-2 px-4 w-full"
                                                    >
                                                        <motion.h3
                                                            className="text-white text-heading-subsection text-center"
                                                            {...fadeInUp()}
                                                            {...hoverLift}
                                                        >
                                                            {project.title}
                                                        </motion.h3>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {/* Full overlay on hover (desktop only) */}
                                        <motion.div
                                            className="absolute inset-0 bg-black/60 flex items-center justify-center md:flex"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex flex-col items-center justify-center space-y-4 px-6">
                                                <h3 className="text-white text-heading-subsection text-center">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/90 text-body-sm text-center line-clamp-3">
                                                    {project.description.length > 100
                                                        ? `${project.description.substring(0, 100)}...`
                                                        : project.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="!absolute !right-0 md:!-right-4 !top-1/2 !-translate-y-1/2 !shadow-md hover:!shadow-lg focus:!shadow-lg !z-20 !h-10 !w-10 md:!h-12 md:!w-12 !flex !items-center !justify-center" >
                        <FaChevronRight className="!h-5 !w-5 md:!h-6 md:!w-6" />
                    </CarouselNext>
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
            </motion.div>
        </SectionContainer>
    )
}