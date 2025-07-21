import { FaRegFileAlt } from "react-icons/fa";
import Python from "../../assets/python.png";

const lessons = [
    "Python File: Membaca dan Menulis File Teks di Python",
    "Python File: Membaca File JSON di Python",
    "Python File: Membaca File XML di Python dengan DOM API",
    "Python File: Membaca File CSV di Python",
    "Python File: Membuat Program CRUDS dengan File CSV",
];

export default function PythonTutorial() {
    return (
        <section className="bg-[#0f172a] py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md text-white">
                {/* Header */}
                <div className="flex items-start gap-5 mb-4">
                    <img
                        src={Python}
                        alt="Python Logo"
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tutorial Baca Tulis File dengan Python
                        </h2>
                        <p className="text-gray-300 mt-1 text-sm md:text-base">
                            Pada tutorial ini, kita akan belajar membaca dan menulis file dengan Python.
                            Mulai dari file teks, JSON, XML, CSV, dan sebagainya.
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
