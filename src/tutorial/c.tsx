import { FaRegFileAlt } from "react-icons/fa";

const lessons = [
    "Belajar Pemrograman C #01: Pengenalan Bahasa Pemrograman C",
    "Belajar Pemrograman C #02: Persiapan Pemrograman C di Linux",
    "Belajar Pemrograman C #02: Persiapan Pemrograman C di Windows",
    "Belajar Pemrograman C #03: Struktur Dasar Penulisan Program C",
    "Belajar Pemrograman C #04: Fungsi Input dan Output",
    "Belajar Pemrograman C #05: Variabel, Konstanta, dan Tipe Data",
    "Belajar Pemrograman C #06: Operator",
    "Belajar Pemrograman C #07: Percabangan",
    "Belajar Pemrograman C #08: Perulangan",
    "Belajar Pemrograman C #09: Struktur Data Array",
    "Belajar Pemrograman C #10: Prosedur dan Fungsi",
    "Belajar Pemrograman C #11: Tipe Data Enum",
    "Belajar Pemrograman C #12: Tipe Data Structure",
    "Belajar Pemrograman C #13: Tipe Data Union",
    "Belajar Pemrograman C #14: Tipe Data String",
    "Belajar Pemrograman C #15: Apa itu Pointer?",
    "Belajar Pemrograman C #16: Fungsi untuk Alokasi Memori",
    "Belajar Pemrograman C #17: Cara Membaca dan Menulis File di C",
    "Belajar Pemrograman C #18: Memahami Preprocessor dan Macro",
    "Belajar Pemrograman C #19: Header File pada C",
];

export default function CTutorial() {
    return (
        <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3665/3665923.png"
                        alt="C Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                            Belajar Pemrograman C untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kamu akan belajar dasar-dasar pemrograman C. Mulai dari pengenalan apa itu C, sampai membuat program berbasis teks dengan C.
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
