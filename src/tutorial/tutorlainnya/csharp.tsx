import { FaRegFileAlt } from "react-icons/fa";
import Csharp from "../../assets/c-sharp.png";

const lessons = [
    "Tutorial C# 01: Mengenal Bahasa Pemrograman C#",
    "Tutorial C# 02: Persiapan Coding C# di Windows dengan Visual Studio",
    "Tutorial C# 02: Persiapan Coding C# di Linux dengan Dotnet Core",
    "Tutorial C# 02: Persiapan Coding C# di Linux dengan Monodevelop",
    "Tutorial C# 02: Persiapan Coding C# dengan VS Code dan Mono SDK",
    "Tutorial C# 03: Aturan Penulisan Sintak C# yang Harus Dipahami",
    "Tutorial C# 04: Fungsi input dan output",
    "Tutorial C# 05: Variabel, Konstanta, dan Tipe Data",
    "Tutorial C# 06: Operator Dasar", 

    
];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Csharp}
                        alt="Csharp Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Belajar Pemrograman C# untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Tutorial lengkap C# untuk Pemula hingga expert. C# adalah bahasa pemrograman OOP yang populer digunakan untuk membuat game, program desktop, dan web
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
