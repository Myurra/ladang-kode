import { FaRegFileAlt } from "react-icons/fa";
import Java from "../../assets/java.png";

const lessons = [
    "Tutorial Java OOP #01: Memahami Konsep Dasar OOP pada Java ",
    "Tutorial Java OOP #02: Inheritance dan Method Overriding",
    "Tutorial Java OOP #03: Tingkat Akses Member dan Class (Modifier)",
    "Tutorial Java OOP #04: Constructor & Destructor pada Java",
    "Tutorial Java OOP #05: Menggunakan Method Setter dan Getter",
    "Tutorial Java OOP #06: Memahami Kata Kunci this dan super",
    "Tutorial Java OOP #07: Memahami Konsep Polymorfisme di Java",
    "Tutorial Java OOP #08: Menggunakan Interface",
    "Tutorial Java OOP #09: Mengenal Class Abstract",
    "Tutorial Java OOP #10: Apa itu Anonymous Class?",
    "Tutorial Java OOP #11: Menggunakan Lambda Expression",
    
];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Java}
                        alt="Java Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Dasar OOP di Java untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kita akan belajar membaca dan menulis file dengan Java.
                            Mulai dari file teks, JSON, XML, CSV, dan sebagainya.Pada tutorial ini, kita akan belajar OOP dengan Java. Sehingga kamu akan paham konsep dasar OOP (Object Oriented Programming) di Java.
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
