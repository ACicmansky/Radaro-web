"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

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
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Kontaktujte nás</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">
            Máte otázky alebo potrebujete konzultáciu? Neváhajte nás kontaktovať.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Nechajte nám správu</h3>
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Meno a priezvisko <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Predmet <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Správa <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Odosielanie..." : "Odoslať správu"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
