import { MdEmail } from "react-icons/md";

export function News() {
  return (
    <div className="bg-[#1e293b] text-center py-16 px-4 md:px-8">
      <p className="text-emerald-400 font-semibold uppercase text-sm tracking-widest flex justify-center items-center gap-2">
        Newsletter <span role="img" aria-label="mail">📬</span>
      </p>

      {/* Judul */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 inline-block">
        Biar gak ketinggalan update..
      </h2>

      {/* Subjudul */}
      <p className="text-gray-300 text-lg max-w-xl mx-auto mt-4">
        Subscribe Newsletter Ladang Kode agar kamu bisa dapat info dan tips belajar coding langsung dikirim ke emailmu?
      </p>

      {/* Tombol mengikuti panjang judul */}
      <div className="mt-8 flex justify-center">
        <a
          href="/newsletter"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-transform duration-150 active:scale-95"
        >
          <MdEmail className="text-xl" />
          Subscribe
        </a>
      </div>
    </div>
  );
}
