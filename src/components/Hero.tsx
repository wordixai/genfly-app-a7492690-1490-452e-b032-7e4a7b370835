"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Coffee shop interior"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Experience Coffee <span className="text-accent">Reimagined</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Where tradition meets innovation in every cup. Discover our artisanal brews and cozy atmosphere.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#menu" 
              className="btn-primary px-8 py-3 rounded-md text-lg font-medium inline-block text-center"
            >
              Explore Menu
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-3 rounded-md text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors inline-block text-center"
            >
              Reserve a Table
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}