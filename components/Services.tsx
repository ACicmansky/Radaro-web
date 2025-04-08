import { FaUserTie, FaHardHat, FaSearchPlus, FaCheckCircle, FaCogs, 
         FaExclamationTriangle, FaLightbulb, FaFileAlt, FaUsers } from "react-icons/fa"

export function Services() {
  const services = [
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Manažment stavebných projektov",
      description: "Komplexné riadenie projektov od plánovania po dokončenie"
    },
    {
      icon: <FaHardHat className="w-6 h-6" />,
      title: "Stavebný dozor",
      description: "Profesionálny dohľad nad všetkými aspektmi stavebného procesu"
    },
    {
      icon: <FaSearchPlus className="w-6 h-6" />,
      title: "Technické a odborné obhliadky",
      description: "Detailné hodnotenie stavu nehnuteľností"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Zabezpečenie a kontrola kvality",
      description: "Monitoring kvality prác a materiálov"
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Výber technologických riešení",
      description: "Optimálny výber podľa požiadaviek projektu"
    },
    {
      icon: <FaExclamationTriangle className="w-6 h-6" />,
      title: "Riadenie rizík",
      description: "Identifikácia a zmierňovanie rizík v stavebnom procese"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Integrácia inovácií a technológií",
      description: "Implementácia moderných riešení pre efektívnejšiu výstavbu"
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Súlad s predpismi",
      description: "Zabezpečenie dodržiavania noriem a legislatívy"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Vedenie tímu a školenie",
      description: "Koordinácia tímov a zvyšovanie odbornosti"
    }
  ]

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Naše služby</h2>
          <div className="w-20 h-1 bg-radaro-red mx-auto mb-6" />
          <p className="text-gray-600">
            Poskytujeme komplexné riešenia pre každú fázu vašich stavebných projektov
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="text-radaro-red mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

