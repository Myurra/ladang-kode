import { FaRegFileAlt } from "react-icons/fa";
import CSS from "../../assets/css-3.png";

const lessons = [
    "Tutorial CSS #01: Pengenalan Dasar CSS untuk Pemula ",
    "Tutorial CSS #02: Cara Menulis CSS di HTML",
    "Tutorial CSS #03: Sintaks Dasar CSS yang Harus Kamu Pahami",
    "Tutorial CSS #04: Memahami Selector di CSS",
    "Tutorial CSS #05: Menggunakan Warna di CSS",
    "Tutorial CSS #06: Menggunakan Background di CSS",
    "Tutorial CSS #07: Text Formatting di CSS",
    "Tutorial CSS #08: Menggunakan Font di CSS",
    "Tutorial CSS #09: Menggunakan Garis di CSS (Border)",
    "Tutorial CSS #10: Menentukan ukuran elemen",
    "Tutorial CSS #11: Box Model di CSS",
    "Tutorial CSS #12: Cara Menggunakan Bayangan (Shadow)",

];

export default function JavaOOP() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={CSS}
                        alt="Java Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold"> 
                            Tutorial Dasar CSS untuk Pemula
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kamu akan belajar dasar-dasar CSS dari awal hingga bisa membuat style web sendiri dan menjadikan websitemu lebih menarik.
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
