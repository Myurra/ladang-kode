import { FaRegFileAlt } from "react-icons/fa";

const lessons = [
    "Tutorial Javascript #01: Mengenal Javascript",
    "Tutorial Javascript #02: Cara Menulis Javascript di HTML",
    "Tutorial Javascript #03: Fungsi Output di Javascript",
    "Tutorial Javascript #04: Variabel dan Tipe Data",
    "Tutorial Javascript #05: Jendela Dialog untuk Input",
    "Tutorial Javascript #06: Operator",
    "Tutorial Javascript #07: Percabangan",
    "Tutorial Javascript #08: Perulangan",
    "Tutorial Javascript #09: Struktur Data Array",
    "Tutorial Javascript #10: Fungsi di Javascript",
    "Tutorial Javascript #11: Objek di Javascript",
    "Tutorial Javascript #12: Mengenal DOM untuk Manipulasi HTML",
    "Tutorial Javascript #13: Menggunakan Objek Math",
    "Tutorial Javascript #14: Menggunakan AJAX",
    "Tutorial Javascript #15: Memahami Event di Javascript",
];

export default function JsTutorial() {
    return (
        <section className="bg-[#0f172a] min-h-screen py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                        alt="JS Logo"
                        className="w-16 h-16 object-contain bg-yellow-400 rounded"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-2xl font-bold leading-tight">
                            Belajar Pemrograman Javascript untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Javascript adalah bahasa universal yang bisa digunakan untuk membuat aplikasi web,
                            server, desktop, mobile, game, IoT, dsb.
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
                            <FaRegFileAlt className="text-white text-lg" />
                            <span className="text-white text-base md:text-lg">{lesson}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
