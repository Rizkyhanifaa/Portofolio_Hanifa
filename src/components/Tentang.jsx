import React from "react";

export default function Tentang() {
  return (
    <section
      id="about"
      className="text-center px-4 md:px-20 py-16"
      data-aos="fade-up"
    >

      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        About <span className="text-primary-light">Me</span>
      </h2>

        {/* Garis Horizontal Pendek */}
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

      {/* Deskripsi */}
      <p className="text-primary-dark text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
        Saya adalah mahasiswa semester 7 Program Studi Rekayasa Perangkat Lunak di Telkom University dengan minat besar pada <strong className="text-primary-light">Front-End Development</strong>. Saya mempunyai pengalaman menggunakan <strong className="text-primary-light">React, Tailwind CSS, Node.js</strong>, dan <strong className="text-primary-light">Figma</strong> untuk membangun antarmuka website yang modern dan responsif.
      </p>

      <p className="text-primary-dark text-sm md:text-base max-w-4xl mx-auto leading-relaxed mt-4">
        Saya pernah mengikuti <strong className="text-primary-light">Bootcamp Coding Camp 2025 by Dicoding x DBS Foundation </strong> 
        serta internship sebagai Front-End Web Developer di <strong>PT Imersa Solusi Teknologi</strong> dan <strong>PT Otak Kanan</strong>.
         Kedepannya, saya ingin berkarier sebagai <strong className="text-primary-light">Front-End Web Developer</strong> profesional yang menciptakan pengalaman pengguna terbaik melalui teknologi web.
      </p>
    </section>
  );
}
