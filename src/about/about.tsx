import aboutImg from '../assets/tims.png';
// import { motion } from 'framer-motion'; // Aktifkan jika pakai animasi

export default function About() {
    return (
        <section className="bg-[#0f172a] text-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white mb-2">
                        Kenalan dulu sama <span className="text-teal-300">Ladang Kode 🌾</span>
                    </h1>
                    <p className="text-gray-200 text-lg max-w-xl mx-auto">
                        Platform tempat kamu bertumbuh jadi programmer — dari nol hingga profesional!
                    </p>
                </div>

                {/* Grid 2 kolom */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Kiri */}
                    <div className="space-y-6">
                        {[
                            {
                                title: '👋 Apa itu Ladang Kode?',
                                desc: 'Ladang Kode adalah platform belajar pemrograman dengan tutorial gratis, terstruktur, dan mudah dipahami oleh pemula.',
                            },
                            {
                                title: '🧑‍💻 Siapa Foundernya?',
                                desc: 'Didirikan oleh ANGCODE DEV, Tim web developer yang ingin membangun komunitas belajar pemrograman berbahasa Indonesia.',
                            },
                            {
                                title: '📜 Awal Dibuatnya',
                                desc: 'Mulai dibangun awal 2024, awalnya hanya blog sederhana hingga berkembang menjadi platform interaktif.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all hover:shadow-xl"
                            >
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Kanan */}
                    <div className="space-y-6">
                        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                            <img
                                src={aboutImg}
                                alt="Belajar coding"
                                className="w-full h-73 object-cover"
                            />
                        </div>

                        <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all hover:shadow-xl">
                            <h3 className="text-xl font-bold mb-2">🎯 Tujuan Kami</h3>
                            <p className="text-gray-300">
                                Membuka akses belajar ngoding bagi semua orang. Tanpa biaya, tanpa batas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rencana Selanjutnya - Lebar sama, posisi tengah */}
                <div className="mt-12">
                    <div className="max-w-xl w-full mx-auto bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all hover:shadow-xl">
                        <h3 className="text-xl font-bold mb-2 text-center">🚀 Rencana Selanjutnya</h3>
                        <p className="text-gray-300 text-center">
                            Kami sedang menyiapkan forum diskusi, video tutorial, dan mini bootcamp online agar makin banyak orang terbantu.
                        </p>
                    </div>
                </div>


                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <button className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition transform text-white font-semibold px-6 py-3 rounded-lg text-sm shadow-md">
                        JOIN NEWSLETTER
                    </button>
                </div>
            </div>
        </section>
    );
}
