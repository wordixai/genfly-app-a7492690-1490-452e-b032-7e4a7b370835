"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12" ref={ref}>
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">Our Story</motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Founded in 2015, Brew Haven began as a small passion project by two friends who shared a love for exceptional coffee and warm community spaces.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Today, we've grown into a beloved neighborhood staple, but our mission remains the same: to create a haven where quality coffee, thoughtful design, and genuine connections come together.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300">
              Every bean we source, every drink we craft, and every plate we serve is done with intention and care. We're not just serving coffee; we're creating experiences.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-gray-600 dark:text-gray-400">Coffee Varieties</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5k+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Coffee being prepared"
                fill
                className="object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 h-48 w-48 bg-primary rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-full w-full flex items-center justify-center text-white p-6">
                <p className="text-xl font-medium text-center">Crafted with passion since 2015</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}