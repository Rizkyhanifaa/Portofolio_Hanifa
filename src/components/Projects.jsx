import React from "react";
import Todoit from "../assets/projects/todoit.png";
import WasteWise from "../assets/projects/wastewise.png";
import OrderLink from "../assets/projects/orderlink.PNG";
import Bookshelf from "../assets/projects/bookshelf.PNG";
import Story from "../assets/projects/storyapp.PNG";
import CityCare from "../assets/projects/citycare.PNG";

const projects = [
  {
    title: "WasteWise Web",
    description:
      "Aplikasi untuk mengklasifikasikan gambar sampah organik atau anorganik dan memberikan rekomendasi pengolahan yang tepat berdasarkan hasil klasifikasi.",
    image: WasteWise,
    link: "https://rizkyhanifaa.github.io/WasteWiseWeb",
    repoLink: "https://github.com/Rizkyhanifaa/WasteWiseWeb.git",
  },
  {
    title: "OrderLink",
    description:
      "Aplikasi untuk agen, distributor, dan pabrik dalam mengelola permintaan order, validasi distribusi, pengiriman, dan tagihan secara terintegrasi.",
    image: OrderLink,
    link: "https://frontendorderlink.vercel.app/",
    repoLink: "https://github.com/Rizkyhanifaa/FrontEnd_OrderLink.git",
  },
  {
    title: "Story App",
    description:
      "Aplikasi membaca dan menambahkan cerita pendek dengan pengalaman PWA.",
    image: Story ,
    link: "https://rizkyhanifaa.github.io/storyapp/",
    repoLink: "https://github.com/Rizkyhanifaa/storyapp.git",
  },
    {
    title: "To Do It",
    description:
      "Aplikasi To Do List berbasis web dengan fitur tambah, edit, tandai selesai, filter, dan hapus tugas, didesain simpel dan responsif untuk produktivitas harian.",
    image: Todoit,
    link: "https://to-do-it-nine.vercel.app/",
    repoLink: "https://github.com/Rizkyhanifaa/To_Do_It.git",
  },
  {
    title: "City Care App",
    description:
      "Aplikasi pelaporan kerusakan fasilitas umum untuk mempermudah komunikasi warga dan pemerintah kota.",
    image: CityCare ,
    link: "https://rizkyhanifaa.github.io/City-Care-App",
    repoLink: "https://github.com/Rizkyhanifaa/City-Care-App.git",
  },
  {
    title: "Bookshelf App",
    description:
      "Aplikasi berbasis web untuk menambahkan, mencari, dan mengelola daftar buku.",
    image: Bookshelf,
    link: "https://bookshelf-starter-project-opal.vercel.app/",
    repoLink: "https://github.com/Rizkyhanifaa/Bookshelf_App_Starter_Project.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-20 py-16 bg-gray-50" data-aos="fade-up">
      {/* Judul Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My <span className="text-primary-light">Projects</span>
        </h2>

        {/* Garis Horizontal Pendek */}
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

        <p className="text-primary-dark max-w-2xl mx-auto">
          Saya telah memilih dan mencantumkan beberapa proyek terbaru saya di sini untuk saya bagikan kepada Anda.
        </p>
      </div>

      {/* Grid Projects */}
      <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-102  ease-in-out"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-primary-dark">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-light mr-2 rounded-lg hover:bg-hover-dark focus:ring-4 focus:outline-none focus:ring-primary-light transition"
              >
                Lihat Project
              </a>

              {/* Repo */}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-light bg-white border border-primary-light rounded-lg hover:bg-hover-light hover:border-none focus:ring-4 focus:outline-none focus:ring-gray-300 transition"
              >
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
