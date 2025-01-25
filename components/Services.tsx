export function Services() {
  const services = [
    "Construction Project Management",
    "Quality Assurance & Control",
    "Site Supervision",
    "Risk Management",
    "Innovation & Technology Integration",
    "Regulatory Compliance",
    "Environmental & Sustainability Consulting",
    "Team Leadership & Training",
    "Inspection & Reporting",
    "Volunteer Project Consulting",
  ]

  return (
    <section id="services" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
              <span className="text-gray-600 text-sm sm:text-base">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

