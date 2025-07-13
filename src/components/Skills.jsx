import React from "react";

// Import gambar-gambar skill
import html5Icon from "../assets/skills/1.png";
import css3Icon from "../assets/skills/2.png";
import javascriptIcon from "../assets/skills/3.png";
import githubIcon from "../assets/skills/4.png";
import webpackIcon from "../assets/skills/5.png";
import chapiIcon from "../assets/skills/6.png";
import nodejsIcon from "../assets/skills/7.png";
import vscodeIcon from "../assets/skills/8.png";
import postmanIcon from "../assets/skills/9.png";
import figmaIcon from "../assets/skills/10.png";
import vueIcon from "../assets/skills/11.png"; 
import tailwindIcon from "../assets/skills/12.png"; 
import reactIcon from "../assets/skills/13.png"; 
import laraveltIcon from "../assets/skills/14.png";
import xamppIcon from "../assets/skills/15.png";

function Skills() {
  const skillsData = [
    { name: "HTML5", icon: html5Icon },
    { name: "CSS3", icon: css3Icon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Vue", icon: vueIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Webpack", icon: webpackIcon },
    { name: "Chapi", icon: chapiIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Laravel", icon: laraveltIcon },
    { name: "Xampp", icon: xamppIcon },
  ];

  return (
    <section id="skills" className="px-4 md:px-20 py-16 bg-gray-50" data-aos="fade-up">
      {/* Judul */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Skillset <span className="text-primary-light">& Tools</span>
        </h2>

        {/* Garis Horizontal Pendek */}
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

        <p className="text-primary-dark max-w-2xl mx-auto">
          Berikut adalah beberapa tools dan teknologi yang saya gunakan untuk mendukung proses pengembangan website.
        </p>
      </div>

      {/* Grid Skills */}
      <div 
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-primary-light shadow-md p-5 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
