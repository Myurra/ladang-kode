import { FaRegFileAlt } from "react-icons/fa";
import Nodejs from "../../assets/nodejs.png";

const lessons = [
    "Tutorial NodeJS #01: Pengenalan Dasar Nodejs untuk Pemula",
    "Tutorial NodeJS #02: Menggunakan NPM untuk Manajemen Proyek Javascript",
    "Tutorial NodeJS #03: Cara Menggunakan Modul dalam Aplikasi Nodejs",
    "Tutorial NodeJS #04: Menggunakan Modul HTTP dan URL untuk Routing",
    "Tutorial NodeJS #05: Baca Tulis File dengan Modul File System",
    "Tutorial NodeJS #06: Membuat Webserver Statis dengan Modul URL",
    "Tutorial NodeJS #07: Bagaimana Cara Mengambil Data dari Form?",
    "Tutorial NodeJS #08: Cara Upload File di Nodejs",
    "Tutorial NodeJS #09: Cara Mengirim Email dengan Nodejs",
    "Tutorial NodeJS #10: Cara Mengakses Environment Variable di Nodejs",
    "Tutorial NodeJS #11: Menggunakan Database MySQL pada Nodejs",
    "Tutorial NodeJS #12:  Menggunakan Database SQLite pada Nodejs",
    
];

export default function NodeJS() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Nodejs}
                        alt="NodeJS Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Dasar NodeJS untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pelajari dasar-dasar Nodejs agar bisa membuat aplikasi berbasis Javascript seperti apikasi CLI, GUI, Game, Backend Web, IoT, dan sebagainya.
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
