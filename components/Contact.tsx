import { Button } from "@/components/ui/button"

export function Contact() {
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
            
            <form className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Meno a priezvisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Predmet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Správa
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2">
                Odoslať správu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
