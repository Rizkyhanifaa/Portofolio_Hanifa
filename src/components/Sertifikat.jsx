import React, { useRef } from "react";
import CodingCamp from "../assets/sertifikat/codingcamp.jpg";
import Backend from "../assets/sertifikat/dicoding_backend.jpg";
import WebIntermediate from "../assets/sertifikat/dicoding_intermediate.jpg";
import Dqlab from "../assets/sertifikat/dqlab.jpg";
import HAKI from "../assets/sertifikat/haki.jpg";
import MiniPbi from "../assets/sertifikat/mini_pbi.jpg";
import MTA from "../assets/sertifikat/mta.jpg";
import Prakerin from "../assets/sertifikat/prakerin.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const certificates = [
  {
    name: "Coding Camp 2025 – Graduate with Distinction",
    organizer: "Dicoding x DBS Foundation",
    image: CodingCamp,
    link: "https://drive.google.com/file/d/1PUrhCOPN1CQXAiF6Y7QAdKGqKSBwaZ3h/view?usp=sharing",
  },
  {
    name: "Networking Fundamentals  ",
    organizer: "Microsoft Technology Associate",
    image: MTA,
    link: "https://drive.google.com/file/d/1Jc_xIzX9pGzEKy-tVS3B1JPJJ96uKHAv/view?usp=sharing",
  },
  {
    name: "Surat Keterangan Praktek Kerja",
    organizer: "PT. OTAK KANAN",
    image: Prakerin,
    link: "https://drive.google.com/file/d/1AQzaf1UoffluNMNoCMjHFAFPeXPBijT4/view?usp=sharing",
  },
  {
    name: "Surat Hak Cipta Aplikasi",
    organizer: "ITekRoom: Sistem Peminjaman Ruangan Berbasis Desktop",
    image: HAKI,
    link: "https://drive.google.com/file/d/1GEZBo5rZtwiBCDcEfS0GfZ6irzATnrwu/view?usp=sharing",
  },
  {
    name: "Belajar Pengembangan Web Intermediate",
    organizer: "Dicoding",
    image: WebIntermediate,
    link: "https://drive.google.com/file/d/1ZHKPeUkbZ0pCH2XuBFmF1lL4FO040ZB3/view?usp=sharing",
  },
  {
    name: "Mini Project-Based Internship",
    organizer: "Luarsekolah",
    image: MiniPbi,
    link: "https://drive.google.com/file/d/1KftTKvCrIuR_uPVMe3i6uxLHoYwdRtD_/view?usp=sharing",
  },
  {
    name: "Belajar Back-End Pemula dengan JavaScript",
    organizer: "Dicoding",
    image: Backend,
    link: "https://drive.google.com/file/d/1b7tc8jeltusjG4PhV7P2Dr6vferpp4Hy/view?usp=sharing",
  },
  {
    name: "Introduction to Data Science with Python",
    organizer: "Dqlab",
    image: Dqlab,
    link: "https://drive.google.com/file/d/1awlGtv_s5DJHATqSd7-ThYnGKIUWz6t7/view?usp=sharing",
  },
];

export default function Sertifikat() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  return (
    <section id="certificate" className="px-6 md:px-20 py-10" data-aos="fade-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My <span className="text-primary-light">Certificate</span>
        </h2>

        {/* Garis Horizontal Pendek */}
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

        <p className="text-primary-dark max-w-2xl mx-auto">
          Berikut adalah sertifikat yang saya peroleh sebagai bukti kompetensi dan pengalaman dalam bidang Web Development dan teknologi terkait.
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-10 "
        >
          <HiChevronLeft className="text-2xl text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg hover:scale-104 transition-transform duration-300 ease-in-out"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {cert.organizer}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-light text-white text-sm px-4 py-1 rounded hover:bg-hover-dark transition"
                >
                  Lihat Sertifikat ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-10"
        >
          <HiChevronRight className="text-2xl text-gray-700" />
        </button>
      </div>
    </section>
  );
}
