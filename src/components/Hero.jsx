import React from "react";
import profileImg from '../assets/profilku.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-40 py-10"
    >
      {/* Left Side - Text */}
      <div className="text-left flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Hallo, Saya
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-light mb-4">
          Rizky Hanifa Afania
        </h2>
        <p className="text-lg md:text-xl text-primary-dark mb-6">
          Front-End Development Enthusiast
        </p>

        <div className="space-y-2 text-gray-800 mb-8">
          <p>🎓 Lulus Coding Camp 2025 by Dicoding x DBS Foundation</p>
          <p>💻 React | Tailwind CSS | Node.js</p>
          <p>📍 Malang, Indonesia</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/rizkyhanifaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-light text-white px-5 py-2 rounded-xl shadow hover:bg-hover-dark hover:scale-105 transform transition duration-300"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/rizkyhanifaafania"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 border border-primary-light px-5 py-2 rounded-xl shadow hover:bg-hover-light hover:border-none hover:scale-105 transform  transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={profileImg}
          alt="Rizky Hanifa Afania"
          className="w-80 h-80"
        />
      </div>
    </section>
  );
}
