import { FaChevronRight } from 'react-icons/fa6';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { AiOutlineGlobal } from 'react-icons/ai';
import { ImDrawer } from 'react-icons/im';
import { Link } from 'react-router-dom';

export function Kategori() {
  return (
    <div className="bg-[#0f172a] py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-teal-500 font-bold text-xl mb-1 md:text-start text-center">KATEGORI</h3>
        <h2 className="text-3xl text-white font-bold mb-2 md:text-start text-center">Mau belajar apa hari ini?</h2>
        <p className="text-lg text-gray-400 mb-4 md:text-start text-center">Temukan tutorial berdasarkan minatmu.</p>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Kategori 1 */}
          <Link to="/kategori/pemrograman" className="block">
            <div className="bg-[#1e293b] rounded-xl p-6 hover:shadow-lg transition transform hover:scale-[1.02] active:scale-95 cursor-pointer">
              <div className="bg-purple-500 text-white p-2 inline-block rounded-md mb-4">
                <IoCodeSlashSharp className="text-2xl" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Basic Programming</h4>
              <p className="text-gray-300 text-sm">
                Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.
              </p>
              <FaChevronRight className="mt-4 text-teal-500" />
            </div>
          </Link>

          {/* Kategori 2 */}
          <Link to="/kategori/web" className="block">
            <div className="bg-[#1e293b] rounded-xl p-6 hover:shadow-lg transition transform hover:scale-[1.02] active:scale-95 cursor-pointer">
              <div className="bg-orange-400 text-white p-2 inline-block rounded-md mb-4">
                <AiOutlineGlobal className="text-2xl" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Web Programming</h4>
              <p className="text-gray-300 text-sm">
                Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, CodeIgniter, React, dan masih banyak lagi.
              </p>
              <FaChevronRight className="mt-4 text-teal-500" />
            </div>
          </Link>

          {/* Kategori 3 */}
          <Link to="/kategori" className="block">
            <div className="bg-[#1e293b] rounded-xl p-6 hover:shadow-lg transition transform hover:scale-[1.02] active:scale-95 cursor-pointer">
              <div className="bg-cyan-500 text-white p-2 inline-block rounded-md mb-4">
                <ImDrawer className="text-2xl" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Kategori Lainnya</h4>
              <p className="text-gray-300 text-sm">
                Mobile programming, Game programming, IoT, Blockchain, Jaringan, Database, dan juga banyak lagi.
              </p>
              <FaChevronRight className="mt-4 text-teal-500" />
            </div>
          </Link>
        </div>
      </div>
    </div >
  );
}
