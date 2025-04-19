"use client"

import { useState, useEffect, useRef } from "react"
import { X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

export function Modal({ isOpen, onClose, title, description, images }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([])
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
          >
            {/* Header */}
            <motion.div 
              className="flex justify-between items-center p-8 border-b sticky top-0 bg-white rounded-t-xl z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div>
                <motion.h2 
                  className="text-heading-section text-emphasis"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {title}
                </motion.h2>
                <motion.div 
                  className="w-16 h-1 bg-radaro-red mt-2" 
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </div>
              <motion.button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-radaro-red-hover hover:text-white text-gray-600 transition-colors" 
                aria-label="Close"
                whileHover={{ scale: 1.1, backgroundColor: "#EF4444", color: "#FFFFFF" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="p-8 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <motion.p 
                className="text-body mb-10 leading-relaxed text-subtle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {description}
              </motion.p>
              
              {/* Image Grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {images.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="aspect-square relative rounded-lg overflow-hidden shadow-md border border-gray-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.2 + (index * 0.1), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                    }}
                  >
                    {!imageStatuses[index]?.loaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <Loader2 className="h-8 w-8 text-radaro-red animate-spin" />
                      </div>
                    )}
                    <img
                      ref={(el) => {
                        if (imageRefs.current) {
                          imageRefs.current[index] = el
                        }
                      }}
                      src={image || "/placeholder.svg"}
                      alt={`${title} image ${index + 1}`}
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
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

