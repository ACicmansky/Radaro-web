"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
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
    <section id="contact" className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Kontaktujte nás</h2>
            <div className="w-16 h-1 bg-radaro-red mx-auto mb-4" />
            <p className="text-gray-600 text-sm">
              Máte otázky alebo potrebujete konzultáciu? Neváhajte nás kontaktovať.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="flex justify-center">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 max-w-md w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-lg font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Nechajte nám správu
            </motion.h3>
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Meno a priezvisko <span className="text-radaro-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radaro-red focus:border-transparent"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-radaro-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radaro-red focus:border-transparent"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Predmet <span className="text-radaro-red">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radaro-red focus:border-transparent"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Správa <span className="text-radaro-red">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radaro-red focus:border-transparent"
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    type="submit" 
                    className="w-full bg-radaro-red hover:bg-radaro-red-hover text-white font-medium py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Odosielanie..." : "Odoslať správu"}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
