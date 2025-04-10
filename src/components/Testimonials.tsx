import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    quote: "Brew Haven has become my second home. The atmosphere is perfect for both work and relaxation, and their signature espresso is unmatched in the city.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    quote: "As someone who visits cafes professionally, I can say that Brew Haven stands out for its attention to detail. The pour-over selection is exceptional, and the pastries are always fresh.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Artist",
    quote: "I've hosted several small exhibitions at Brew Haven, and the staff has always been incredibly accommodating. The space has a creative energy that's hard to find elsewhere.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their Brew Haven experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}