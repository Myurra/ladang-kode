import { FaRegFileAlt } from "react-icons/fa";
import kotlin from "../../assets/kotlin.png";

const lessons = [
    "Tutorial Kotlin #01: Persiapan Pemrograman Kotlin di Linux dengan VS Code",
    "Tutorial Kotlin #01: Persiapan Pemrograman Kotlin dengan Netbeans",
    "Tutorial Kotlin #02: Sintak Dasar Kotlin",
    "Tutorial Kotlin #03: Fungsi input dan output",
    "Tutorial Kotlin #04: Variabel dan Tipe data",
    "Tutorial Kotlin #05: Percabangan",

];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={kotlin}
                        alt="Java Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Pemrograman Kotlin untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pelajari gimana dasar-dasar pemrograman Kotlin sehingga kamu bisa coding aplikasimu dengan Kotlin.
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
