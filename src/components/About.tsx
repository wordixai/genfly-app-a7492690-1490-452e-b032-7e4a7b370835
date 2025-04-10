import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Founded in 2015, Brew Haven began as a small passion project by two friends who shared a love for exceptional coffee and warm community spaces.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Today, we've grown into a beloved neighborhood staple, but our mission remains the same: to create a haven where quality coffee, thoughtful design, and genuine connections come together.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Every bean we source, every drink we craft, and every plate we serve is done with intention and care. We're not just serving coffee; we're creating experiences.
            </p>
            
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-gray-600 dark:text-gray-400">Coffee Varieties</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5k+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Coffee being prepared"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 bg-primary rounded-lg shadow-lg hidden md:block">
              <div className="h-full w-full flex items-center justify-center text-white p-6">
                <p className="text-xl font-medium text-center">Crafted with passion since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}