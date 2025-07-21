import { FaUser } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { PiDesktopTower } from 'react-icons/pi';
import { FaChevronRight, FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import Css from "../assets/css-3.png";
import Python from "../assets/python.png";
import Nodejs from "../assets/nodejs.png";
import Java from "../assets/java.png";
import Codeign from "../assets/codeigniter.png";

type TutorialCard = {
  icon: ReactElement;
  title: string;
  desc: string;
  articles: number;
  level: string;
  link?: string;
};

const tutorialList: TutorialCard[] = [
  {
    icon: <img src={Python} alt="Python" className="w-16 h-16 object-contain" />,
    title: "Tutorial Baca Tulis File dengan Python",
    desc: "Pada tutorial ini, kita akan belajar membaca dan menulis File dengan Python. Mulai dari File Teks, JSON, XML, CSV, dan sebagainya.",
    articles: 5,
    level: "Pemula",
    link: "/tutorial/python-file",
  },
  {
    icon: <img src={Java} alt="Java" className="w-16 h-16 object-contain" />,
    title: "Tutorial Dasar OOP di Java untuk Pemula",
    desc: "Pada tutorial ini, kita akan belajar OOP dengan Java. Sehingga kamu akan paham konsep dasar OOP (Object Oriented Programming) di Java.",
    articles: 11,
    level: "Pemula",
    link: "/tutorial/java-oop",
  },
  {
    icon: <img src={Nodejs} alt="Nodejs" className="w-16 h-16 object-contain" />,
    title: "Tutorial Nodejs untuk Pemula",
    desc: "Pelajari dasar-dasar Nodejs agar bisa membuat aplikasi berbasis Javascript seperti apikasi CLI, GUI, Game, Backend Web, IoT, dan sebagainya.",
    articles: 12,
    level: "Pemula",
    link: "/tutorial/nodejs",
  },
  {
    icon: <img src={Codeign} alt="CodeIgniter 4" className="w-16 h-16 object-contain" />,
    title: "Tutorial Codeigniter 4 untuk Pemula",
    desc: "Pada tutorial ini, kamu akan belajar tentang dasar Codeigniter 4 mulai dari pengenalan sejarah, instalasi, hingga membuat proyek sederhana.",
    articles: 9,
    level: "Pemula",
    link: "/tutorial/codeigniter-4",
  },
  {
    icon: <img src={Codeign} alt="CodeIgniter 3" className="w-16 h-16 object-contain" />,
    title: "Tutorial Codeigniter 3 untuk Pemula",
    desc: "Pada tutorial ini kamu akan belajar tentang dasar Codeigniter 3. Dimulai dari pengenalan sejarah, instalasi, hingga membuat proyek sederhana.",
    articles: 14,
    level: "Pemula",
    link: "/tutorial/codeigniter-3",
  },
  {
    icon: <img src={Css} alt="CSS" className="w-16 h-16 object-contain" />,
    title: "Tutorial Dasar CSS untuk Pemula",
    desc: "Pada tutorial ini, kamu akan belajar dasar-dasar CSS dari awal hingga bisa membuat style web sendiri dan menjadikan websitemu lebih menarik.",
    articles: 14,
    level: "Pemula",
    link: "/tutorial/css",
  },
];

export default function AllTutorials() {
  return (
    <section className="bg-[#0f172a] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-teal-500 font-bold text-xl uppercase mb-2 md:text-start text-center">Explore</p>
        <h2 className="text-white text-4xl font-bold mb-2 md:text-start text-center">Semua Tutorial</h2>
        <p className="text-gray-400 mb-6 text-lg md:text-start text-center">Temukan tutorial yang ingin kamu pelajari.</p>

        <div className="space-y-6">
          {tutorialList.map((item, index) => {
            const content = (
              <div
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#1e293b] p-6 rounded-2xl transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                {/* KIRI: icon + teks */}
                <div className="flex items-start gap-4 md:w-2/3">
                  <div className="min-w-[64px]">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>

                {/* KANAN: metadata (hanya tampil di desktop) */}
                <div className="mt-4 md:mt-0 hidden md:flex flex-col gap-1 text-gray-300 text-sm md:items-end">
                  <div className="flex items-center gap-2">
                    <PiDesktopTower className="text-white" />
                    <span><b>Web</b> Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineDocumentText className="text-white" />
                    <span><b>{item.articles}</b> Artikel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-white" />
                    <span><b>Level</b> {item.level}</span>
                  </div>
                </div>
              </div>
            );

            return item.link ? (
              <Link to={item.link} key={index} className="block">
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex gap-2 justify-center mt-10">
          {[1, 2].map((num) =>
            num === 2 ? (
              <Link
                to="/page/2"
                key={num}
                className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold bg-gray-700 text-white hover:bg-teal-500 transition-transform duration-150 ease-in-out active:scale-95"
              >
                {num}
              </Link>
            ) : (
              <button
                key={num}
                className="w-8 h-8 rounded-full text-sm font-semibold transition-transform duration-150 ease-in-out active:scale-95 bg-teal-500 text-white"
              >
                {num}
              </button>
            )
          )}

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
    </section>
  );
}
