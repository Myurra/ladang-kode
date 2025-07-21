import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-[#1b263b] text-white pt-12 pb-6 px-4 sm:px-6 md:px-8 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Grid utama */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* KIRI: Logo & Deskripsi */}
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold md:text-start text-center">
              Ladang <span className="text-white ">kode</span>
            </h1>
            <p className="text-xl mt-3 text-gray-300 md:text-start text-center">
              Tempat belajar kode dengan cara yang sederhana, praktis, dan mudah dipahami untuk semua kalangan.
            </p>
          </div>

          {/* KANAN: Menu footer */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8">
            <div>
              <h4 className="font-bold mb-2 text-lg">Belajar</h4>
              <ul className="space-y-1 text-lg text-gray-300">
                <li>
                  <a href="/artikel" className="hover:text-teal-500">Artikel</a>
                </li>
                <li><a href="/tutorial" className="hover:text-teal-500">Tutorial</a></li>
                <li><a href="/buku" className="hover:text-teal-500">Buku</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-lg">Popular Tutorial</h4>
              <ul className="space-y-1 text-lg text-gray-300">
                <li><a href="/tutorial/c" className="hover:text-teal-500">Tutorial Bahasa C</a></li>
                <li><a href="/tutorial/javascript" className="hover:text-teal-500">Tutorial Javascript</a></li>
                <li><a href="/tutorial/java" className="hover:text-teal-500">Tutorial Java</a></li>
                <li><a href="/tutorial/php" className="hover:text-teal-500">Tutorial PHP</a></li>
                <li><a href="/tutorial/python" className="hover:text-teal-500">Tutorial Python</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-lg">Social Media</h4>
              <ul className="space-y-1 text-lg text-gray-300">
                <li><a href="#" className="hover:text-teal-500">Facebook Page</a></li>
                <li><a href="#" className="hover:text-teal-500">Instagram</a></li>
                <li><a href="#" className="hover:text-teal-500">X</a></li>
                <li><a href="#" className="hover:text-teal-500">Youtube Channel</a></li>
                <li><a href="#" className="hover:text-teal-500">Telegram Channel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Ladang Kode</h4>
              <ul className="space-y-1 text-lg text-gray-300">
                <li><a href="/tentang" className="hover:text-teal-500">Tentang</a></li>
                <li><a href="/FAQs" className="hover:text-teal-500">FAQs</a></li>
                <li><a href="/Kontak" className="hover:text-teal-500">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BAWAH */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p className="text-sm mb-2">Ikuti Kami di</p>
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-gray-600 p-2 rounded-full hover:bg-[#1877F2] transition">
              <FaFacebook className="text-white" />
            </div>
            <div className="bg-gray-600 p-2 rounded-full hover:bg-[#000000] transition">
              <FaXTwitter className="text-white" />
            </div>
            <div className="bg-gray-600 p-2 rounded-full hover:bg-[#0088cc] transition">
              <FaTelegram className="text-white" />
            </div>
            <div className="bg-gray-600 p-2 rounded-full hover:bg-[#C13584] transition">
              <FaInstagram className="text-white" />
            </div>
            <div className="bg-gray-600 p-2 rounded-full hover:bg-[#FF0000] transition">
              <FaYoutube className="text-white" />
            </div>
          </div>
          <p className="font-semibold text-white">
            © 2025 <span className="font-bold text-white">Ladang Kode</span> · Made by <span className="font-bold">ANGCODE DEV</span>❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
