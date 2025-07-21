import React from 'react';
import { useNavigate } from 'react-router-dom';
import Python from "../assets/python.png";
import JS from "../assets/js.png";
import Java from "../assets/java.png";
import Html from "../assets/html-5.png";
import Git from "../assets/git.png";
import C from "../assets/letter-c.png";

type Tutorial = {
  icon: React.ReactElement;
  title: string;
  desc: string;
  bgColor: string;
  link?: string;
};

const tutorials: Tutorial[] = [
  {
    icon: <img src={Html} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial HTML untuk Pemula',
    desc: 'Pelajari dasar-dasar HTML untuk membuat website dari nol.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/html',
  },
  {
    icon: <img src={JS} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial Dasar Javascript',
    desc: 'Pelajari dasar-dasar pemrograman Javascript untuk membuat website yang interaktif.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/javascript',
  },
  {
    icon: <img src={Java} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial Java untuk Pemula',
    desc: 'Pelajari dasar-dasar pemrograman Java dari nol.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/java',
  },
  {
    icon: <img src={C} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial Dasar Pemrograman C',
    desc: 'Pelajari dasar-dasar pemrograman C untuk dari nol.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/c',
  },
  {
    icon: <img src={Python} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial Python untuk Pemula',
    desc: 'Pelajari dasar-dasar pemrograman Python untuk pemula.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/python',
  },
  {
    icon: <img src={Git} alt="Html" className="w-16 h-16 object-contain" />,
    title: 'Tutorial Git untuk Pemula',
    desc: 'Pelajari dasar-dasar Git untuk version control pada project dan kolaborasi dengan tim.',
    bgColor: 'bg-[#1e293b]',
    link: '/tutorial/git',
  },
];

function Rekomen() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0f172a] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-teal-500 font-bold text-xl uppercase mb-2 md:text-start text-center">Rekomendasi</p>
        <h2 className="text-white text-4xl font-bold mb-2 flex flex-col md:flex-row items-center md:items-start gap-2 md:text-start text-center">
          Most Popular Tutorial <span role="img" aria-label="trophy">🏆</span>
        </h2>
        <p className="text-gray-400 mb-6 text-lg md:text-start text-center">Paling banyak dibaca dan direkomendasikan.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((item, index) => (
            <div
              key={index}
              onClick={() => item.link && navigate(item.link)}
              className={`${item.bgColor} flex items-start gap-4 p-5 rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer`}
            >
              {item.icon}
              <div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rekomen;
