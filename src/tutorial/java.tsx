import { FaRegFileAlt } from "react-icons/fa";

const lessons = [
  "Tutorial Java #01: Mengenal Bahasa Pemrograman Java",
  "Tutorial Java #02: Konsep Pemrograman Program Java",
  "Tutorial Java #03: Persiapan Pemrograman Java di Linux",
  "Tutorial Java #03: Persiapan Pemrograman Java di Windows",
  "Tutorial Java #04: Struktur dan Arturan Penulisan Sintaks Java",
  "Tutorial Java #05: Fungsi Input dan Output di Java",
  "Tutorial Java #06: Mengenal Variabel dan Tipe Data",
  "Tutorial Java #07: Operator Dasar di Java",
  "Tutorial Java #08: Percabangan di Java",
  "Tutorial Java #09: Perulangan di Java",
  "Tutorial Java #10: Struktur Data Array",
  "Tutorial Java #11: Struktur Data Hashmap",
  "Tutorial Java #12: Prosedur dan Fungsi",
];

export default function JavaTutorial() {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
        {/* Header */}
        <div className="flex items-start gap-5 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            alt="Java Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Tutorial Pemrograman Java untuk Pemula
            </h2>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Kumpulan Tutorial Belajar Pemrograman Java untuk Pemula, dari dasar hingga
              mahir. Java adalah bahasa pemrograman OOP untuk membuat aplikasi desktop,
              web, dan android.
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
