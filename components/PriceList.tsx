export function PriceList() {
  const prices = [
    { service: "Basic Website", price: "$500" },
    { service: "E-commerce Site", price: "$1000" },
    { service: "Custom Web Application", price: "$2000+" },
  ]

  return (
    <section id="price-list" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Price List</h2>
        <ul className="space-y-4 max-w-md mx-auto">
          {prices.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <span className="text-gray-600">{item.service}</span>
              <span className="font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

