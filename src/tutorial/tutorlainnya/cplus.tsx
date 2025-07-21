import { FaRegFileAlt } from "react-icons/fa";
import Cplus from "../../assets/c-.png";

const lessons = [
    "Tutorial C++ #01: Pengenalan Bahasa Pemrograman C++",
    "Tutorial C++ #02: Persiapan Pemrograman C++ di Linux",
    "Tutorial C++ #02: Persiapan Pemrograman C++ di Windows",
    "Tutorial C++ #03: Struktur Dasar Program C++ yang Harus dipahami",
    "Tutorial C++ #04: Fungsi Input dan Output",
    "Tutorial C++ #05: Variabel, Konstanta, dan Tipe Data",
    "Tutorial C++ #06: Operator",
    "Tutorial C++ #07: Percabangan",
    "Tutorial C++ #08: Perulangan",
    "Tutorial C++ #09: Struktur Data Array",
    "Tutorial C++ #10: Prosedur dan Fungsi",
    "Tutorial C++ #11: Tipe Data Enum",
    "Tutorial C++ #12: Tipe Data Structure",
    "Tutorial C++ #13: Tipe Data Union",
    "Tutorial C++ #14: Pointer",
    
];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Cplus}
                        alt="Cplus Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Pemrograman C++ untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kamu akan belajar dasar-dasar pemrograman C++. Mulai dari pengenalan apa itu C++, sampai membuat program berbasis teks dengan C++.
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
