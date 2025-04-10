import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to see you in person. Stop by for a coffee or reach out to reserve a table.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-secondary dark:bg-secondary p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Coffee Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 7:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">hello@brewhaven.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Reserve a Table</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6+">6+ people</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Any special requests or notes"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-md text-lg font-medium"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}