import { useNavigate } from 'react-router-dom';
import books from './bookimport';
import { FaPlus } from 'react-icons/fa';

const BooksPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0f172a] py-12 px-4 md:px-8 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-teal-500 font-bold uppercase text-xl mb-2 md:text-start text-center">
          List Buku
        </p>
        <h2 className="text-white text-4xl font-bold mb-2 md:text-start text-center">Explore Buku</h2>
        <p className="text-gray-400 mb-8 text-lg md:text-start text-center">
          Belajar lebih terstruktur dengan buku/eBook.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-[#1e293b] rounded-xl p-4 flex gap-4 hover:scale-[1.02] active:scale-95 transition-transform duration-150 cursor-pointer"
              onClick={() => navigate(`/buku/${book.slug}`)} // ➕ Navigasi ke detail
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div className="text-sm">
                <span className="text-emerald-400 font-bold text-xs">EBOOK</span>
                <h3 className="text-white font-semibold text-base mt-1 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-1">
                  By {book.author}
                </p>
                <p className="text-gray-400 text-xs mt-1 line-clamp-3">
                  {book.description}
                </p>
              </div>
            </div>
          ))}

          {/* Kartu Request */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdk6lln0BVS2xsF9KP0qHyyYKCze5dPsIBg78yDFCatH-IGZQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dashed border-gray-500 hover:border-white rounded-xl p-4 flex gap-4 items-start bg-[#0f172a] hover:scale-[1.02] active:scale-95 transition-all duration-150 cursor-pointer no-underline"
          >
            <div className="w-16 h-24 bg-gray-600/50 rounded-md flex items-center justify-center">
              <FaPlus className="text-gray-400 text-xl" />
            </div>
            <div className="text-sm">
              <p className="text-white font-semibold">Request Buku Baru</p>
              <p className="text-sm text-gray-400 leading-tight">
                Tidak menemukan buku yang kamu cari?
                <br />
                Kamu bisa me-requestnya di sini.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BooksPage;
