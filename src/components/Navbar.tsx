"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Coffee } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Brew Haven</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="btn-primary px-4 py-2 rounded-md font-medium"
            >
              Reserve a Table
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-gray-200 dark:border-gray-800">
            <Link 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#menu" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="#gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 mt-4 rounded-md text-base font-medium btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}