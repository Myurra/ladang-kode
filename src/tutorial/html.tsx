import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Belajar HTML #01: Pengenalan Dasar HTML untuk Pemula",
    link: "/html-dasar",
  },
  {
    title: "Belajar HTML #02: Mengenal Tag, Elemen, dan Atribut dalam HTML",
    link: "/html-tag-atribut",
  },
  {
    title: "Belajar HTML #03: Membuat Paragraf di HTML",
    link: "/html-paragraf",
  },
  {
    title: "Belajar HTML #04: Membuat Heading di HTML",
    link: "/html-heading",
  },
  {
    title: "Belajar HTML #05: Cara Membuat Komentar",
    link: "/html-komentar",
  },
  {
    title: "Belajar HTML #06: Text Formatting di HTML",
    link: "/html-formatting",
  },
  {
    title: "Belajar HTML #07: Membuat Link pada HTML",
    link: "/html-link",
  },
  {
    title: "Belajar HTML #08: Menampilkan Gambar di HTML",
    link: "/html-gambar",
  },
  {
    title: "Belajar HTML #09: Membuat List pada HTML",
    link: "/html-list",
  },
  {
    title: "Belajar HTML #10: Membuat Tabel pada HTML",
    link: "/html-tabel",
  },
  {
    title: "Belajar HTML #11: Membuat Form pada HTML",
    link: "/html-form",
  },
  {
    title: "Belajar HTML #12: Mengenal Elemen Semantik pada HTML",
    link: "/html-semantic",
  },
  {
    title: "Belajar HTML #13: Menampilkan Video pada HTML",
    link: "/html-video",
  },
  {
    title: "Belajar HTML #14: Menambahkan Audio pada HTML",
    link: "/html-audio",
  },
  {
    title: "Belajar HTML #15: Membuat Project Web Pribadi dengan HTML",
    link: "/html-project",
  },
  {
    title: "Belajar HTML #16: Cara Hosting HTML di Netlify",
    link: "/html-hosting",
  },
];

export default function HtmlTutorial() {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
        {/* Header */}
        <div className="flex items-start gap-5 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
            alt="HTML Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Tutorial HTML untuk Pemula
            </h2>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Belajar HTML dasar dari Nol. Pahami tag-tag esensial yang sering
              dipakai. Lalu buat sendiri websitemu dengan HTML. Selamat Belajar!
            </p>
          </div>
        </div>

        <hr className="border-gray-600 mb-6" />

        {/* List Materi */}
        <div className="space-y-3">
          {lessons.map((lesson, index) => (
            <Link
              key={index}
              to={lesson.link}
              className="flex items-center gap-2 bg-[#2d3748] px-4 py-2 rounded-md hover:bg-slate-600 shadow transition-transform duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <FaRegFileAlt className="text-lg text-white" />
              <span className="text-lg text-white">{lesson.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
