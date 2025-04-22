"use client"

import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { fadePresence, modalSpring, fadeInUp, growWidth, hoverGrow, fadeRotateIn, fadeIn } from "@/lib/animation-presets"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  images: string[]
}

type ImageStatus = {
  loaded: boolean
  error: boolean
}

export const Modal = ({ isOpen, onClose, title, description, images }: ModalProps) => {
  // Close modal on Escape key
  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const [isVisible, setIsVisible] = useState(false)
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([])
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0)

  // Initialize image statuses when images array changes
  useEffect(() => {
    if (images.length > 0) {
      setImageStatuses(images.map(() => ({ loaded: false, error: false })))
      setCurrentLoadingIndex(0)
    }
  }, [images])

  // Handle modal visibility
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Sequential image loading
  useEffect(() => {
    if (!isVisible || currentLoadingIndex >= images.length) return

    const loadImage = (index: number) => {
      if (index >= images.length) return

      const img = new window.Image()
      img.src = images[index] || "/placeholder.svg"

      img.onload = () => {
        setImageStatuses(prev => {
          const newStatuses = [...prev]
          newStatuses[index] = { loaded: true, error: false }
          return newStatuses
        })
        // Load next image
        setCurrentLoadingIndex(index + 1)
      }

      img.onerror = () => {
        setImageStatuses(prev => {
          const newStatuses = [...prev]
          newStatuses[index] = { loaded: true, error: true }
          return newStatuses
        })
        // Even if error, continue to next image
        setCurrentLoadingIndex(index + 1)
      }
    }

    loadImage(currentLoadingIndex)
  }, [isVisible, currentLoadingIndex, images])

  return (
    typeof window !== "undefined" && createPortal(
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
            onClick={onClose}
            {...fadePresence(1)}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden z-[10000]"
              onClick={(e) => e.stopPropagation()}
              {...modalSpring}
            >
              {/* Header */}
              <motion.div
                className="flex justify-between items-center p-8 border-b sticky top-0 bg-white rounded-t-xl z-[10001]"
                style={{ position: 'sticky', top: 0, background: 'white', zIndex: 10001 }}
                {...fadeInUp(0)}
              >
                <div>
                  <h2 className="text-heading-section text-emphasis">
                    {title}
                  </h2>
                  <motion.div
                    className="w-16 h-1 bg-radaro-red mt-2"
                    {...growWidth}
                  />
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-full hover:text-radaro-red-hover text-gray-600 transition-colors"
                  aria-label="Close"
                  {...hoverGrow()}
                  {...fadeRotateIn(0.3)}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>

              {/* Content */}
              <motion.div
                className="p-8 overflow-y-auto"
                {...fadeInUp(0.2)}
              >
                <motion.p
                  className="text-body mb-10 leading-relaxed text-subtle"
                  {...fadeInUp(0.3)}
                >
                  {description}
                </motion.p>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square relative rounded-lg overflow-hidden shadow-md border border-gray-100"
                      {...fadeIn()}
                      {...hoverGrow(false)}
                    >
                      {!imageStatuses[index]?.loaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <Loader2 className="h-8 w-8 text-radaro-red animate-spin" />
                        </div>
                      )}
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${title} image ${index + 1}`}
                        fill={true}
                        className={`object-cover w-full h-full transition-transform duration-300 hover:scale-105 ${!imageStatuses[index]?.loaded ? 'opacity-0' : 'opacity-100'}`}
                        loading={index < 3 ? "eager" : "lazy"}
                        onLoad={() => {
                          if (!imageStatuses[index]?.loaded) {
                            setImageStatuses(prev => {
                              const newStatuses = [...prev]
                              newStatuses[index] = { loaded: true, error: false }
                              return newStatuses
                            })
                          }
                        }}
                        onError={() => {
                          setImageStatuses(prev => {
                            const newStatuses = [...prev]
                            newStatuses[index] = { loaded: true, error: true }
                            return newStatuses
                          })
                        }}
                      />
                      {imageStatuses[index]?.error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <p className="text-radaro-red text-body-sm">Failed to load image</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )
  )
}

