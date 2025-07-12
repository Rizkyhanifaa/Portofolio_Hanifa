import React from "react";

const bootcamps = [
  {
    name: "Coding Camp 2025",
    organizer: "Dicoding x DBS Foundation",
    period: "Februari 2025 – Juli 2025",
    role: "Front-End & Back-End Web Developer",
    skills: "HTML, CSS, JavaScript, Webpack, Hapi.js, Git, PWA, API Integration, MVP, SPA",
    project: "WasteWise Web",
    certificate: "https://drive.google.com/drive/folders/1sGg3nG7OQl0CITxESjS_esoSP5aM5qIm?usp=sharing", 
  },
  {
    name: "Mini Project-Based Internship",
    organizer: "Luarsekolah",
    period: "16 Juni 2025 – 20 Juni 2025",
    role: "Web Development Participant",
    skills: "HTML, CSS, JavaScript",
    project: "Membuat Portofolio Website",
    certificate: "https://drive.google.com/file/d/1X_iXShl674kMgwMkmMDIgETiiOKzx3kX/view?usp=sharing", 
  },
  {
    name: "Coding Camp Software Engineering",
    organizer: "RevoU",
    period: "7 Juni 2025 – 11 Juni 2025",
    role: "Web Development Participant",
    skills: "HTML, CSS, JavaScript, Git, SDLC, Tailwind, Deployment",
    project: "To Do List App",
    certificate: "https://drive.google.com/your-certificate-link-3",
    },
    {
    name: "Pelatihan Artificial Intelligence 2025",
    organizer: "Dicoding with AVPN",
    period: "8 Mei 2025 – 15 Juli 2025",
    role: "AI Learning Participant",
    skills: "Artificial Intelligence, AI Productivity Tools, Prompt Engineering, AI Ethics, AI Strategy",
    project: "Menyelesaikan seluruh course dan kuis dengan hasil melebihi standar minimal untuk mendapatkan sertifikat.",
    certificate: "https://drive.google.com/drive/folders/1Caj7_Wu2po23fYOfqetqVC8EDWhiWOtB?usp=sharing"
  },
    {
    name: "AWS Back-End Academy",
    organizer: "Dicoding with AWS",
    period: "April 2025 – Juni 2025",
    role: "Back-End Development Participant",
    skills: "AWS EC2, Cloud Computing, Back-End Web Development, REST APIs, Node.js, Hapi.js Framework, Postman API,(OOP",
    project: "Menyelesaikan seluruh course dan kuis dengan hasil melebihi standar minimal.",
    certificate: "https://drive.google.com/drive/folders/1LiXBqRYVrfpsmOghMZx-gr3WxL0yX8kA?usp=sharing"
  },
  {
    name: "Mentoring Frontend Web Developer with Tailwind CSS",
    organizer: "Banyumas Digital Valley",
    period: "9 - 23 Oktober 2022",
    role: "Frontend Web Development Participant",
    skills: "HTML, CSS, dan Tailwind CSS ",
    project: "Mengikuti seluruh materi pembelajaran.",
    certificate: "https://drive.google.com/file/d/1ZEu7Ud1htEUacMGQr5a8rBVCPs-IJ9ER/view?usp=sharing"
  },
  {
    name: "Web Development Course",
    organizer: "MySkill Academy",
    period: "Maret 2024 - April 2024",
    role: "Web Development Participant",
    skills: "HTML, CSS, HTTP, DNS, dan hosting",
    project: "Menyelesaikan seluruh course dan kuis dengan hasil melebihi standar minimal untuk mendapatkan sertifikat.",
    certificate: "https://drive.google.com/drive/folders/1049aWT1Qhl54XRgSz6EP3k7ykOeMoRgj?usp=sharing"
  },
];

export default function Bootcamp() {
  return (
    <section id="bootcamp" className="px-4 md:px-20 py-16 bg-gray-50" data-aos="fade-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Bootcamp <span className="text-primary-light">Experience</span>
        </h2>

        {/* Garis Horizontal Pendek */}
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>

        <p className="text-primary-dark max-w-2xl mx-auto">
          Pengalaman bootcamp yang telah saya ikuti untuk meningkatkan keterampilan di bidang Web Development.
        </p>
      </div>

      <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {bootcamps.map((bootcamp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-102  ease-in-out  p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary-light mb-1">
                {bootcamp.name}
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                {bootcamp.organizer} | {bootcamp.period}
              </p>
              <p className="text-primary-dark mb-2 text-[15px]">
                <strong>Role:</strong> {bootcamp.role}
              </p>
              <p className="text-primary-dark mb-2 text-[15px]">
                <strong>Dipelajari:</strong> {bootcamp.skills}
              </p>
              <p className="text-primary-dark mb-4 text-[15px]">
                <strong>Project:</strong> {bootcamp.project}
              </p>
            </div>
            <a
              href={bootcamp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 mt-3 text-sm font-medium text-white bg-primary-light rounded-lg hover:bg-hover-dark transition-colors duration-300"
            >
              Lihat Sertifikat
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
