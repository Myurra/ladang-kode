import { FaRegFileAlt } from "react-icons/fa";
import Codeign from "../../assets/codeigniter.png";

const lessons = [
    "Tutorial Codeigniter 4 #01: Pengenalan Codeigniter untuk Pemula",
    "Tutorial Codeigniter 4 #02: Persiapan dan Instalasi CI 4",
    "Tutorial Codeigniter 4 #03: Konsep dasar CI 4 (MVC)",
    "Tutorial Codeigniter 4 #04: Routing dan Controller",
    "Tutorial Codeigniter 4 #05: Membuat View untuk Halaman",
    "Tutorial Codeigniter 4 #06: Membuat Template dengan View Layout",
    "Tutorial Codeigniter 4 #07: Membuat Widget dengan View Cell",
    "Tutorial Codeigniter 4 #08: Migrasi Database",
    "Tutorial Codeigniter 4 #09: Membuat CRUD (Model)",


];

export default function Codeig4() {
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
                            Tutorial Codeigniter 4 untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kamu akan belajar tentang dasar Codeigniter 4 mulai dari pengenalan sejarah, instalasi, hingga membuat proyek sederhana.
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
