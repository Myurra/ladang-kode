import { FaRegFileAlt } from "react-icons/fa";

const lessons = [
  "Belajar Git #01: Apa itu Git dan Kenapa Penting Bagi Programmer?",
  "Belajar Git #02: Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan",
  "Belajar Git #03: Cara Membuat Repositori Git pada Proyek",
  "Belajar Git #04: Melihat Catatan Log Revisi",
  "Belajar Git #05: Melihat Perbandingan Revisi dengan Git Diff",
  "Belajar Git #06: Perintah untuk Membatalkan Revisi",
  "Belajar Git #07: Menggunakan Cabang untuk Mencegah Konflik",
  "Belajar Git #08: Perbedaan Git checkout, Git Reset, dan Git Revert",
  "Belajar Git #09: Bekerja dengan Remote Repositori",
  "Belajar Git #10: Menggunakan Git Pull dan Git Fetch",
  "Belajar Git #11: Cara Berkontribusi di Proyek Open Source dengan Git",
  "Belajar Git #12: Cara Menggunakan Git pada Visual Studio Code",
];

export default function GitTutorial() {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
        {/* Header */}
        <div className="flex items-start gap-5 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/15466/15466163.png"
            alt="Git Logo"
            className="w-16 h-16 object-contain bg-white rounded"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Tutorial Belajar Git untuk Pemula
            </h2>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Kumpulan Tutorial Belajar Git dalam Bahasa Indonesia. Git adalah program yang bertugas
              mengontrol versi dalam source code.
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
