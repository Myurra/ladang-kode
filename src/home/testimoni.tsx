export function Testimoni() {
  const feedback = [
    { name: 'Zulfikar Zahir Hamdani', quote: 'Materi yang diberikan mudah dipahami, terimakasih' },
    { name: 'Ghozan Azhar Fauzie', quote: 'Terimakasih banyak sudah membuatkan tutorial sejelas ini, sangat bermanfa\'at bagi saya yg masih pemula' },
    { name: 'Abdul Wahid', quote: 'Saya ucapkan terima kasih kepada admin ladang kode atas ilmu yang diberikan. Akhirnya saya bisa membuat website saya sendiri. Semoga ladang kode makin maju dan selalu diberikan kemudahan dalam segala urusannya. Aamiin' },
    { name: 'fbhikmawan', quote: 'Terima kasih banyak tutorialnya. Step by step dan rinci. Mudah untuk dipahami. Semangat terus tim Ladang Kode' },
    { name: 'Riski', quote: 'Akhirnya ketemu juga website belajar coding yang oke 🔥😍😍😍👌' },
    { name: 'BIBN', quote: 'Terimakasih author, yang telah membuat tutorial html, css, dan kawan-kawannya. Saya sangat terbantu dengan ini. Sekali lagi saya ucapkan terimakasih sedalam-dalamnya.' },
    { name: 'Ade', quote: 'Terimakasih banyak bang ilmunya, untuk aku pemula yang belum kenal sama sekali sangat bermanfaat. Jadi semangat untuk lanjut ke halaman berikutnya, ijin save ya bang' },
    { name: 'Arya Putra', quote: 'Wah terima kasih ladang kode, saya mengikuti tutorial Java di sini mulai nol hingga materi ini. Kesimpulannya: saya sangat suka dan mudah memahami. Apalagi penjelasannya seperti ada yang mendampingi. Setiap materi selalu terasa lebih dekat. Terima kasih Ladang Kode, amal jariyah untuk Anda.' }
  ];

  return (
    <div className="bg-[#0f172a] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-teal-500 font-bold text-lg mb-2 md:text-start text-center">REVIEW</h3>
        <h2 className="text-4xl font-bold mb-2 text-white md:text-start text-center">Apa kata mereka? 🤩</h2>
        <p className="text-gray-400 mb-6 text-lg md:text-start text-center">Kata mereka yang belajar di Ladang Kode</p>

        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {feedback.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] text-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg 
                 transition-transform duration-300 hover:scale-105 inline-block w-full"
            >
              <p className="text-lg text-gray-200">{item.quote}</p>
              <p className="text-teal-400 font-semibold text-sm mt-2">~ {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
