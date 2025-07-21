import { FaRegFileAlt } from "react-icons/fa";

const lessons = [
  "Belajar Python #01: Mengenal Bahasa Pemrograman Python",
  "Belajar Python #02: Persiapan Pemrograman Python di Windows",
  "Belajar Python #03: Aturan Dasar Penulisan Sintaks Python",
  "Belajar Python #04: Mengenal Variabel dan Tipe Data di Python",
  "Belajar Python #05: Fungsi Input dan Output di Python",
  "Belajar Python #06: Operator di Python",
  "Belajar Python #07: Percabangan di Python",
  "Belajar Python #08: Perulangan di Python",
  "Belajar Python #09: Struktur Data List",
  "Belajar Python #10: Struktur Data Tuple",
  "Belajar Python #11: Struktur Data Dictionary",
  "Belajar Python #12: Fungsi di Python",
  "Belajar Python #13: Fungsi Lambda di Python",
  "Belajar Python #14: Apa Maksud dari *args dan **kwargs pada Python?",
];

export default function PythonTutorial() {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
        {/* Header */}
        <div className="flex items-start gap-5 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
            alt="Python Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Tutorial Dasar Pemrograman Python
            </h2>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Kumpulan tutorial belajar Python dari dasar hingga mahir. Python adalah bahasa tingkat tinggi
              untuk backend, machine learning, AI, Desktop, IoT, dll.
            </p>
          </div>
        </div>

        <hr className="border-gray-600 mb-6" />

        {/* List Materi */}
        <div className="space-y-3">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#2d3748] px-4 py-2 rounded-md hover:bg-slate-600 shadow transition-transform duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <FaRegFileAlt className="text-lg text-white" />
              <span className="text-lg text-white">{lesson}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
