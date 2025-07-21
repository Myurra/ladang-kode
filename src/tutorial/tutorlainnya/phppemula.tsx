import { FaRegFileAlt } from "react-icons/fa";
import PHP from "../../assets/php.png";

const lessons = [
    "Tutorial PHP #01: Mengenal Bahasa Pemrograman PHP",
    "Tutorial PHP #02: Persiapan Pemrograman PHP di Linux",
    "Tutorial PHP #02: Persiapan Pemrograman PHP di Linux dengan XAMPP",
    "Tutorial PHP #02: Persiapan Pemrograman PHP di Windows",
    "Tutorial PHP #03: Memahami Struktur Dasar Sintaks PHP",
    "Tutorial PHP #04: Mengenal Fungsi untuk Mencetak Teks",
    "Tutorial PHP #05: Menganal Variabel dan Tipe Data di PHP",
    "Tutorial PHP #06: Apa itu Konstanta?",
    "Tutorial PHP #07: Operator di PHP",
    "Tutorial PHP #08: Blok Percabangan di PHP",
    "Tutorial PHP #09: Blok Perulangan di PHP",
    "Tutorial PHP #10: Mengenal Struktur Data Array di PHP",
    "Tutorial PHP #11: Mengenal Fungsi dan Prosedur di PHP",
    
];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={PHP}
                        alt="Java Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Dasar PHP untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kita akan belajar dasar-dasar pemrograman PHP sehingga kamu akan paham gimana cara coding di PHP.
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
