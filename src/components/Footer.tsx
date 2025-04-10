"use client";

import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-gray-400 mb-6">
              A modern coffee experience where tradition meets innovation in every cup.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["about", "menu", "gallery", "contact"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link href={`#${item}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item === "about" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
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
          </motion.div>
          
          <motion.div variants={itemVariants}>
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
              <motion.button
                type="submit"
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
}