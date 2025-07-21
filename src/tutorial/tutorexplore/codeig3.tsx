import { FaRegFileAlt } from "react-icons/fa";
import Codeign from "../../assets/codeigniter.png";

const lessons = [
    "Tutorial Codeigniter 3 #01: Pengenalan Codeigniter untuk Pemula",
    "Tutorial Codeigniter 3 #02: Persiapan dan Instalasi Codeigniter",
    "Tutorial Codeigniter 3 #03: Konsep dasar MVC Codeigniter",
    "Tutorial Codeigniter 3 #04: Apa itu Controller?",
    "Tutorial Codeigniter 3 #05: Menggunakan View dan CSS",
    "Tutorial Codeigniter 3 #06: Menggunakan Model dan Database",
    "Tutorial Codeigniter 3 #07: Membuat Halaman Admin (CRUD)",
    "Tutorial Codeigniter 3 #08: Validasi Data Form di Codeigniter",
    "Tutorial Codeigniter 3 #09: Membuat Fitur Login",
    "Tutorial Codeigniter 3 #10: Membuat Fitur Setting Profile",
    "Tutorial Codeigniter 3 #11: Membuat FItur Upload Avatar",
    "Tutorial Codeigniter 3 #12: Menggunakan Editor Quilljs",
    "Tutorial Codeigniter 3 #13: Membuat Fitur Pencarian",
    "Tutorial Codeigniter 3 #14: Membuat Pagination",

];

export default function Codeig() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Codeign}
                        alt="Codeign Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Codeigniter 3 untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini kamu akan belajar tentang dasar Codeigniter 3. Dimulai dari pengenalan sejarah, instalasi, hingga membuat proyek sederhana.
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
