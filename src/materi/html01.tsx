import { useEffect } from "react";

const artikelTerbaru = [
  {
    title: "Tutorial Laravel 11 untuk Pemula: Langsung Bisa bikin CRUD!",
    date: "18 Aug 2024",
    time: "baca 22 menit",
    icon: "/icons/laravel.png",
  },
  {
    title: "Tutorial Membuat Sistem Notifikasi dengan Redis Pub/Sub",
    date: "13 Aug 2024",
    time: "baca 6 menit",
    icon: "/icons/golang.png",
  },
  {
    title: "Belajar C++ #13: Mengenal Tipe Data Union",
    date: "03 May 2024",
    time: "baca 5 menit",
    icon: "/icons/cpp.png",
  },
  {
    title: "Belajar C++ #12: Mengenal Tipe Data Struct",
    date: "01 May 2024",
    time: "baca 8 menit",
    icon: "/icons/cpp.png",
  },
  {
    title: "Belajar C++ #11: Tipe Data Enum di C++",
    date: "28 Apr 2024",
    time: "baca 6 menit",
    icon: "/icons/cpp.png",
  },
];

export default function Html01() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#0f172a] min-h-screen px-6 py-10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* Konten Utama */}
        <div className="lg:col-span-2 bg-[#1e293b] rounded-xl p-6 shadow-md h-[720px] flex flex-col">
          <div className="mb-4">
            <h1 className="text-3xl font-bold leading-snug mt-2 ">
              Belajar HTML dari Nol: <br /> Pengenalan Dasar HTML untuk Pemula
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="space-y-6 overflow-y-auto px-4 py-2 scroll-smooth flex-1 bg-gray-900 rounded-lg scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-gray-800">
            <p>
              HTML adalah bahasa dasar dalam dunia pengembangan web. Dengan HTML, kita bisa membuat struktur halaman seperti heading, paragraf, gambar, dan lainnya.
            </p>
            <p>
              Bahasa ini sudah menjadi standar sejak lama dan digunakan oleh seluruh website di dunia.
              Meskipun terlihat sederhana, memahami HTML adalah langkah pertama menjadi web developer.
            </p>

            <h2 className="text-xl font-bold">1. Tag Dasar HTML</h2>
            <p>Berikut beberapa tag HTML paling dasar yang wajib kamu tahu:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>&lt;h1&gt; sampai &lt;h6&gt; untuk heading</li>
              <li>&lt;p&gt; untuk paragraf</li>
              <li>&lt;a&gt; untuk tautan</li>
              <li>&lt;img&gt; untuk gambar</li>
              <li>&lt;div&gt; sebagai pembungkus (container)</li>
            </ul>

            <h2 className="text-xl font-bold">2. Struktur Dasar HTML</h2>
            <pre className="bg-[#0f172a] p-4 rounded text-sm text-green-400 overflow-x-auto">
              {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Contoh HTML</title>
  </head>
  <body>
    <h1>Halo Dunia!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
  </body>
</html>`}
            </pre>

            <h2 className="text-xl font-bold">3. Menambahkan Gambar</h2>
            <p>Gunakan tag <code className="bg-gray-700 px-1 rounded">&lt;img&gt;</code> seperti ini:</p>
            <pre className="bg-[#0f172a] p-4 rounded text-sm text-green-400 overflow-x-auto">
              {`<img src="gambar.jpg" alt="Deskripsi gambar" width="300" />`}
            </pre>

            <p>Contoh ilustrasi:</p>
            <img
              src="https://raw.githubusercontent.com/ahmadrosid/html-css-js-icons/main/html-css-js.png"
              alt="html-css-js"
              className="rounded-lg w-full max-w-sm mx-auto"
            />

            <h2 className="text-xl font-bold">4. Membuat Tabel</h2>
            <pre className="bg-[#0f172a] p-4 rounded text-sm text-green-400 overflow-x-auto">
              {`<table>
  <tr>
    <th>Nama</th>
    <th>Umur</th>
  </tr>
  <tr>
    <td>Ani</td>
    <td>22</td>
  </tr>
</table>`}
            </pre>

            <p>Terus semangat belajar HTML ya!</p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">

          {/* Newsletter */}
          <div className="bg-[#1e293b] p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">📩 Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Mau dapat tips belajar coding, info teknologi, dan perkembangan lainnya?
            </p>
            <input
              type="email"
              placeholder="Email kamu"
              className="w-full px-3 py-2 rounded mb-2 bg-[#334155] text-white placeholder-gray-400"
            />
            <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
              Subscribe
            </button>
          </div>

          {/* Artikel Terbaru */}
          <div className="bg-[#1e293b] p-4 rounded-xl shadow text-white">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              🔥 Artikel Terbaru
            </h3>
            <div className="space-y-4">
              {artikelTerbaru.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start gap-4 border-b border-white/10 pb-3 last:border-none"
                >
                  <div className="flex-1">
                    <p className="font-medium leading-snug">{item.title}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.date} • {item.time}
                    </p>
                  </div>
                  <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Video Embed */}
          <div className="bg-[#1e293b] p-4 rounded-xl shadow">
            <iframe
              src="https://www.youtube.com/embed/UB1O30fR-EE"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-48 rounded-lg"
            ></iframe>
          </div>
        </aside>
      </div>
    </section>
  );
}
