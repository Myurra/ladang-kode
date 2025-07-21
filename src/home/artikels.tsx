import { FaChevronRight, FaAnglesRight } from "react-icons/fa6";
import { Artikel } from '../banner/isiartikels';

type Post = {
  image?: string[];
  title: string;
  desc: string;
  author?: string;
};

export default function Pemrograman() {
  return (
    <div className="bg-[#0f172a] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-teal-500 font-bold text-xl mb-1 md:text-start text-center">ARTIKEL</h3>
        <h2 className="text-3xl font-bold mb-2 text-white md:text-start text-center">Explore Artikel</h2>
        <p className="text-gray-400 text-lg mb-4 md:text-start text-center">Daftar artikel di Ladang Kode.</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Artikel.map((post: Post, index: number) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-4 border border-transparent 
                         hover:border-gray-400 hover:shadow-xl hover:scale-105 
                         active:scale-95 transition-transform duration-300 ease-in-out 
                         cursor-pointer"
            >
              {post.image && post.image.length > 0 && (
                <img
                  src={post.image[0]}
                  alt={post.title}
                  className="w-full h-40 object-contain rounded mb-4"
                />
              )}
              <h4 className="font-bold text-white text-base mb-2">{post.title}</h4>
              <p className="text-sm text-gray-300">{post.desc}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 justify-center mt-10 items-center">
          {/* Tombol angka */}
          <button
            className="w-8 h-8 rounded-full text-sm font-semibold transition-transform duration-150 ease-in-out active:scale-95
              bg-teal-500 text-white"
          >
            1
          </button>

          <button
            className="w-8 h-8 rounded-full text-sm font-semibold transition-transform duration-150 ease-in-out active:scale-95
              bg-gray-700 text-white hover:bg-teal-500"
          >
            2
          </button>

          {[3, 4, 5].map((num) => (
            <button
              key={num}
              className="w-8 h-8 rounded-full text-sm font-semibold transition-transform duration-150 ease-in-out active:scale-95
                bg-gray-700 text-white hover:bg-teal-500"
            >
              {num}
            </button>
          ))}

          {/* Panah satu > */}
          <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-teal-500 rounded-full transition-transform duration-150 ease-in-out active:scale-95">
            <FaChevronRight />
          </button>

          {/* Panah dua >> */}
          <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-teal-500 rounded-full transition-transform duration-150 ease-in-out active:scale-95">
            <FaAnglesRight />
          </button>
        </div>
      </div>
    </div>
  );
}
