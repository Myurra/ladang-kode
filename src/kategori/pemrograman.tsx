import { FaChevronRight, FaAnglesRight } from "react-icons/fa6";
import { Articles } from '../banner/bannerpemrog';
import { Link } from 'react-router-dom';

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
        <div className="mb-2">
          <Link to="/" className="text-teal-400 font-bold text-sm hover:underline">KATEGORI</Link>{' '}
          <FaChevronRight className="text-sm inline text-teal-400" />
          <span className="text-sm text-teal-400 font-bold"> PEMROGRAMAN </span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-white">Ini dia yang kamu cari</h1>
        <p className="text-gray-400 text-lg mb-4">Ada 287 artikel dalam kategori Pemrograman.</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Articles.map((post: Post, index: number) => (
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
        <div className="flex gap-2 justify-center mt-10">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-transform duration-150 ease-in-out active:scale-95 ${num === 1
                ? "bg-teal-500 text-white"
                : "bg-gray-700 text-white hover:bg-teal-500"
                }`}
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
