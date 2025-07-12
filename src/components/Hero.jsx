import React from "react";
import { motion } from "framer-motion";
import profileImg from '../assets/profilku.jpg';
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-40 py-10"
    >
      {/* Left Side - Text */}
      <motion.div
        className="text-left flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Hallo, Saya
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-light mb-4">
          <Typewriter
            words={["Rizky Hanifa Afania"]}
            cursor
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={true}
          />
        </h2>
        <p className="text-lg md:text-xl text-primary-dark mb-6">
          Front-End Development Enthusiast
        </p>

        <div className="space-y-2 text-gray-800 mb-8">
          <p>🎓 Lulus Coding Camp 2025 by Dicoding x DBS Foundation</p>
          <p>🏫 Telkom University</p>
          <p>💻 React | Tailwind CSS | Node.js</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(6,182,212,0.6)" }}
            href="https://github.com/rizkyhanifaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-light text-white px-5 py-2 rounded-xl shadow transition"
          >
            Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(6,182,212,0.6)" }}
            href="https://linkedin.com/in/rizkyhanifaafania"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 border border-primary-light px-5 py-2 rounded-xl shadow transition"
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={profileImg}
          alt="Rizky Hanifa Afania"
          className="w-80 h-80 rounded-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
