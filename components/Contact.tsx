"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeInUp, fadeIn, hoverGrow } from "@/lib/animation-presets"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Vyplňte prosím všetky polia")
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Zadajte platnú emailovú adresu")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        toast.success("Správa bola úspešne odoslaná")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        toast.error(data.error || "Nastala chyba pri odosielaní správy")
      }
    } catch (error) {
      toast.error("Nastala chyba pri odosielaní správy")
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <SectionContainer id="contact" background="light" spacing="sm">
      <SectionHeader 
        title="Kontaktujte nás" 
        subtitle="Máte otázky alebo potrebujete konzultáciu? Neváhajte nás kontaktovať."
        centered={true} 
      />
        
        <div className="flex justify-center">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
            {...fadeInUp(0.2)}
          >
            <motion.h3 
              className="text-heading-subsection mb-6"
              {...fadeIn()}
            >
              Nechajte nám správu
            </motion.h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                {...fadeIn()}
              >
                <motion.div
                  {...fadeIn()}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-emphasis mb-2">
                    Meno a priezvisko <span className="text-radaro-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-radaro-red focus:border-transparent focus:shadow-sm"
                  />
                </motion.div>
                <motion.div
                  {...fadeIn()}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-emphasis mb-2">
                    Email <span className="text-radaro-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-radaro-red focus:border-transparent focus:shadow-sm"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                {...fadeIn()}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-emphasis mb-2">
                  Predmet <span className="text-radaro-red">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-radaro-red focus:border-transparent focus:shadow-sm"
                />
              </motion.div>
              
              <motion.div
                {...fadeIn()}
              >
                <label htmlFor="message" className="block text-sm font-medium text-emphasis mb-2">
                  Správa <span className="text-radaro-red">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-radaro-red focus:border-transparent focus:shadow-sm"
                ></textarea>
              </motion.div>
              
              <motion.div
                {...fadeIn()}
              >
                <motion.div {...hoverGrow()}>
                  <Button 
                    type="submit" 
                    className="w-full bg-radaro-red hover:bg-radaro-red-hover text-white font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Odosielanie..." : "Odoslať správu"}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
    </SectionContainer>
  )
}
