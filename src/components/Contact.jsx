import React from "react";
import linkedinIcon from "../assets/contact/linkedin.png";
import instagramIcon from "../assets/contact/instagram.png";
import githubIcon from "../assets/contact/github.png";

function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      url: "https://www.linkedin.com/in/rizkyhanifaafania",
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://www.instagram.com/riz.kyhanifaa",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      url: "https://github.com/Rizkyhanifaa",
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 md:px-20 py-16 bg-white border-t border-gray-200"
      data-aos="fade-up"
    >
      {/* Judul */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact <span className="text-primary-light">Me</span>
        </h2>

        {/* Garis Horizontal Pendek */}
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

        <p className="text-primary-dark max-w-xl mx-auto">
          Jangan ragu untuk mengirimkan pesan jika Anda memiliki pertanyaan,
          masukan, atau ingin berdiskusi lebih lanjut.
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-center gap-8">
        {contactLinks.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            <div className=" transition-transform duration-300">
              <img
                src={link.icon}
                alt={link.name}
                className="w-16 h-16 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
