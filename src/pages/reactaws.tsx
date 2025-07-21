import { useNavigate } from 'react-router-dom';
import bookCover from '../assets/book5.png';

export default function Dataviz() {
    const navigate = useNavigate();

    return (
        <section className="bg-[#0f172a] text-white py-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-2xl p-6 md:p-10 shadow-md relative">

                {/* Tombol Kembali */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute -top-3 left-3 bg-gray-700 hover:bg-gray-600 active:scale-95 transition-transform text-sm text-white px-4 py-1 rounded shadow"
                >Kembali
                </button>

                {/* Gambar Buku */}
                <div className="flex justify-center mb-6 mt-4">
                    <img
                        src={bookCover}
                        alt="Laravel Dataviz"
                        className="w-64 md:w-72 rounded-xl shadow-xl object-cover transform transition-transform duration-300 hover:scale-105 active:scale-95"
                    />
                </div>

                {/* Garis pembatas */}
                <hr className="border-t border-gray-600 mb-6" />

                {/* Info Buku */}
                <div className="space-y-1 text-sm md:text-base mb-6 text-center">
                    <p><span className="font-semibold">Judul</span>: Laravel Dataviz</p>
                    <p><span className="font-semibold">Penulis</span>: Muhammad Azamuddin</p>
                    <p><span className="font-semibold">Publisher</span>: Literasikode</p>
                    <p><span className="font-semibold">Halaman</span>: 250 Halaman</p>
                    <p><span className="font-semibold">Rilis</span>: 01 Aug 2021</p>
                    <p><span className="font-semibold">Format</span>: eBook (PDF, ePub)</p>
                    <p><span className="font-semibold">Harga</span>: Rp 450.000</p>
                </div>

                {/* Tombol Lihat Detail */}
                <div className="text-center mb-10">
                    <button className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition-transform duration-150 text-white font-semibold text-sm px-6 py-2 rounded-md shadow">
                        Lihat Detail
                    </button>
                </div>

                {/* Judul Deskripsi */}
                <h3 className="text-xl font-bold mb-4 border-t border-gray-600 pt-6 text-center">
                    Deskripsi Buku
                </h3>

                {/* Deskripsi Buku */}
                <div className="text-gray-300 text-sm md:text-base space-y-4 leading-relaxed text-left">
                    <p>
                        Studi kasus mendalam bagaimana mempersiapkan perintah SQL dari database sampai menampilkan dalam 25+ macam visualisasi.
                    </p>
                    <p>
                        Di ebook ini kamu akan diajak bersimulasi menjadi seorang fullstack developer yang memiliki client yaitu Hana Hotel.
                    </p>
                    <p>
                        Hana Hotel telah beroperasi sejak 2016. Kamu diminta membuat dashboard web yang menampilkan performa hotel.
                    </p>
                    <p>
                        Hotel ini telah memiliki sistem informasi, dan tugasmu adalah mengembangkan fitur dashboard berbasis data.
                    </p>
                    <p>
                        Kamu akan bekerja dengan data bookings dari 2016–2020, serta data tamu, kepuasan, layanan, dan kamar hotel.
                    </p>
                </div>
            </div>
        </section>
    );
}
