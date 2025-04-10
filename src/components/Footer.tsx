import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-gray-400 mb-6">
              A modern coffee experience where tradition meets innovation in every cup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Hours</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block font-medium">Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li>
                <span className="block font-medium">Saturday - Sunday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on events, new menu items, and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Brew Haven. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}