import { Link } from 'react-router-dom';

const categories = [
    { name: 'Data Science', count: 1 },
    { name: 'Database', count: 15 },
    { name: 'Desktop', count: 21 },
    { name: 'Game', count: 9 },
    { name: 'IoT', count: 2 },
    { name: 'Jaringan', count: 12 },
    { name: 'Machine Learning', count: 1 },
    { name: 'Mobile', count: 27 },
    { name: 'Pemrograman', count: 287, link: '/kategori/pemrograman' },
    { name: 'Tips Dan Trik', count: 14 },
    { name: 'Web', count: 208, link: '/kategori/pemrograman'},
];

export default function Kategori() {
    return (
        <section className="bg-[#0f172a] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h3 className="text-teal-400 font-bold text-sm mb-2 uppercase">Semua Kategori</h3>
                <h2 className="text-3xl font-bold mb-2">Kategori apa nih yang menarik perhatianmu?</h2>
                <p className="text-gray-400 text-lg mb-6">
                    Jika kamu tidak menemukan kategori yang dicari, kamu bisa minta kami untuk menambahkannya.
                </p>

                {/* Kategori list */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat, i) =>
                        cat.link ? (
                            <Link
                                to={cat.link}
                                key={i}
                                className="px-4 py-2 bg-[#1e293b] rounded-full border border-gray-500 hover:bg-teal-600 
                   text-sm font-medium transition-transform duration-150 ease-in-out 
                   hover:scale-105 active:scale-95"
                            >
                                {cat.name} <span className="ml-1">({cat.count})</span>
                            </Link>
                        ) : (
                            <span
                                key={i}
                                className="px-4 py-2 bg-[#1e293b] rounded-full border border-gray-500 
                   text-sm font-medium transition-transform duration-150 ease-in-out 
                   hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                {cat.name} <span className="ml-1">({cat.count})</span>
                            </span>
                        )
                    )}
                </div>

                {/* Request Box */}
                <div className="bg-[#1e293b] rounded-xl p-6 md:p-8">
                    <h4 className="text-teal-400 font-semibold text-sm uppercase mb-1">Request</h4>
                    <h3 className="text-xl font-bold mb-2">Tidak menemukan Kategori yang kamu cari?</h3>
                    <p className="text-gray-300 mb-4">
                        Silakan buat request agar kami bisa menambahkan.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScNGPD-dsed2s4fieWK5ZcKu4eRpFrXmLnaSmoboEe9rbDSfw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md text-sm 
                   transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 inline-block text-center"
                    >
                        Request Kategori Baru
                    </a>

                </div>
            </div>
        </section>
    );
}
