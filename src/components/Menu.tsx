import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Our house blend with notes of chocolate and caramel",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Coffee"
  },
  {
    id: 2,
    name: "Pour Over Selection",
    description: "Single-origin beans prepared with precision",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Coffee"
  },
  {
    id: 3,
    name: "Artisanal Pastries",
    description: "Freshly baked daily by our in-house pastry chef",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    category: "Food"
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Sourdough bread with avocado, radish, and microgreens",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Food"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 hero-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Carefully crafted offerings made with the finest ingredients and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="menu-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-medium text-primary">{item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-3 rounded-md text-lg font-medium">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}