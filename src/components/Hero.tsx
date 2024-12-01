import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, FileDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 animate-gradient" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
        Gaurav Jena
        </motion.h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'FrontEnd Developer', 'Problem Solver'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, user-centric digital experiences with clean code and innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>

          <motion.a
            href="/Resume.pdf"
            download="gaurav-cv.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-gray-800 text-cyan-400 border border-cyan-400/30 px-8 py-3 rounded-full font-medium hover:bg-cyan-400/10 transition-colors w-full sm:w-auto"
          >
            <FileDown size={20} />
            Download CV
          </motion.a>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};