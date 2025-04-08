"use client"

import { useState, useEffect, useRef } from "react"
import { X, Loader2 } from "lucide-react"

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

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white rounded-t-xl z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <div className="w-16 h-1 bg-radaro-red mt-2" />
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-radaro-red-hover hover:text-white text-gray-600 transition-colors" 
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
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
                    <p className="text-radaro-red text-sm">Failed to load image</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

