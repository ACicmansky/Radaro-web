export function PriceList() {
  const prices = [
    { service: "Basic Website", price: "$500" },
    { service: "E-commerce Site", price: "$1000" },
    { service: "Custom Web Application", price: "$2000+" },
  ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Price List</h2>
        <ul className="space-y-2">
          {prices.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{item.service}</span>
              <span className="font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

