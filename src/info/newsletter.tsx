import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto bg-teal-600 rounded-xl flex items-center justify-center mb-6">
          <FaPaperPlane className="text-white text-2xl" />
        </div>

        {/* Judul & Deskripsi */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Newsletter Ladang Kode
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-2">
          Dapatkan tips belajar coding, info teknologi, dan karier programmer.
        </p>
        <p className="text-sm text-gray-400 mb-6 font-medium">
          Sudah lebih dari <span className="text-teal-400 font-semibold">8.000</span> subscriber bergabung!
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <input
            type="email"
            placeholder="Masukkan email kamu..."
            className="px-4 py-3 rounded-md w-full sm:w-auto flex-1 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-500 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 transition px-6 py-3 rounded-md font-semibold text-sm active:scale-95"
          >
            Berlangganan
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-4">
          Dengan berlangganan, kamu menyetujui kebijakan privasi kami.
        </p>

        {/* No thanks */}
        <a
          href="/home"
          className="text-sm text-gray-400 hover:underline mt-3"
        >
          Tidak, terima kasih
        </a>
      </div>
    </section>
  );
}
