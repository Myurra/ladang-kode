import { useNavigate } from 'react-router-dom';
import G1 from '../assets/ladang kode.png';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1e293b] py-12 px-4 md:px-8 lg:px-12 md:text-left text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* GAMBAR - tampil duluan saat mobile */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center order-1 md:order-2">
          <img src={G1} alt="Illustration" className="w-100" />
        </div>

        {/* TEKS - tampil setelah gambar di mobile */}
        <div className="md:w-1/2 space-y-4 order-2 md:order-1">
          <h1 className="text-6xl text-white font-bold">Ladang Kode</h1>
          <p className="text-lg text-gray-300 max-w-md">
            Belajar budidaya kode (<em>coding</em>) dengan tutorial yang mudah dipahami. <em>Mostly</em> pakai Linux.
          </p>
          <div className="flex gap-3 md:justify-start justify-center">
            <button
              onClick={() => {
                navigate('/tutorial');
                window.location.reload(); // agar refresh saat pindah
              }}
              className="bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 rounded transition-transform duration-150 active:scale-95"
            >
              Mulai Belajar
            </button>
            <button
              onClick={() => navigate('/newsletter')}
              className="border border-teal-500 text-white hover:bg-teal-500 hover:text-white px-4 py-2 rounded transition-transform duration-150 active:scale-95"
            >
              Join Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
