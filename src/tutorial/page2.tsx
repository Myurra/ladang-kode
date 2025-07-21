import Python from "../assets/python.png";
import Html from "../assets/html-5.png";
import Cplus from "../assets/c-.png";
import C from "../assets/letter-c.png";
import Csharp from "../assets/c-sharp.png";
import Js from "../assets/js.png";
import Java from "../assets/java.png";
import Kotlin from "../assets/kotlin.png";
import Git from "../assets/git.png";
import Php from "../assets/php.png";

import { PiDesktopTower } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaChevronLeft, FaAnglesLeft } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

type TutorialCard = {
  icon: React.ReactElement;
  title: string;
  desc: string;
  articles: number;
  level: string;
  link?: string;
};

const tutorialList: TutorialCard[] = [
  {
    icon: <img src={Html} alt="Html" className="w-16 h-16 object-contain" />,
    title: "Tutorial HTML untuk Pemula",
    desc: "Belajar HTML dasar dari Nol. Pahami tag-tag esensial yang sering dipakai. Lalu buat sendiri websitemu dengan HTML. Selamat Belajar!",
    articles: 16,
    level: "Pemula",
    link: "/tutorial/html",
  },
  {
    icon: <img src={Kotlin} alt="Kotlin" className="w-16 h-16 object-contain" />,
    title: "Tutorial Pemrograman Kotlin untuk Pemula",
    desc: "Pelajari gimana dasar-dasar pemrograman Kotlin sehingga kamu bisa coding aplikasimu dengan Kotlin.",
    articles: 13,
    level: "Pemula",
    link: "/tutorial/kotlin",
  },
  {
    icon: <img src={Js} alt="Javascript" className="w-16 h-16 object-contain" />,
    title: "Belajar Pemrograman Javascript untuk Pemula",
    desc: "Javascript adalah bahasa universal yang bisa digunakan untuk membuat aplikasi web, server, desktop, mobile, game, IoT, dsb.",
    articles: 15,
    level: "Pemula",
    link: "/tutorial/javascript",
  },
  {
    icon: <img src={Php} alt="PHP" className="w-16 h-16 object-contain" />,
    title: "Tutorial Dasar PHP untuk Pemula",
    desc: "Pada tutorial ini, kita akan belajar dasar-dasar pemrograman PHP sehingga kamu akan paham gimana cara coding di PHP.",
    articles: 13,
    level: "Pemula",
    link: "/tutorial/php",
  },
  {
    icon: <img src={Git} alt="Git" className="w-16 h-16 object-contain" />,
    title: "Tutorial Belajar Git untuk Pemula",
    desc: "Kumpulan Tutorial Belajar Git dalam Bahasa Indonesia. Git adalah program yang bertugas mengontrol versi dalam source code.",
    articles: 12,
    level: "Pemula",
    link: "/tutorial/git",
  },
  {
    icon: <img src={Python} alt="Python" className="w-16 h-16 object-contain" />,
    title: "Tutorial Dasar Pemrograman Python",
    desc: "Kumpulan tutorial belajar Python dari dasar hingga mahir. Python adalah bahasa tingkat tinggi untuk backend, machine learning, AI, Desktop, IoT, dll.",
    articles: 14,
    level: "Pemula",
    link: "/tutorial/python",
  },
  {
    icon: <img src={Java} alt="Java" className="w-16 h-16 object-contain" />,
    title: "Tutorial Pemrograman Java untuk Pemula",
    desc: "Kumpulan Tutorial Belajar Pemrograman Java untuk Pemula, dari dasar hingga mahir. Java adalah bahasa pemrograman OOP untuk membuat aplikasi desktop, web, dan android.",
    articles: 13,
    level: "Pemula",
    link: "/tutorial/java",
  },
  {
    icon: <img src={Cplus} alt="C++" className="w-16 h-16 object-contain" />,
    title: "Tutorial Pemrograman C++ untuk Pemula",
    desc: "Pada tutorial ini, kamu akan belajar dasar-dasar pemrograman C++. Mulai dari pengenalan apa itu C++, sampai membuat program berbasis teks dengan C++.",
    articles: 15,
    level: "Pemula",
    link: "/tutorial/c++",
  },
  {
    icon: <img src={Csharp} alt="C#" className="w-16 h-16 object-contain" />,
    title: "Belajar Pemrograman C# untuk Pemula",
    desc: "Tutorial lengkap C# untuk Pemula hingga expert. C# adalah bahasa pemrograman OOP yang populer digunakan untuk membuat game, program desktop, dan web.",
    articles: 18,
    level: "Pemula",
    link: "/tutorial/csharp",
  },
  {
    icon: <img src={C} alt="C" className="w-16 h-16 object-contain" />,
    title: "Belajar Pemrograman C untuk Pemula",
    desc: "Pada tutorial ini, kamu akan belajar dasar-dasar pemrograman C. Mulai dari pengenalan apa itu C, sampai membuat program berbasis teks dengan C.",
    articles: 20,
    level: "Pemula",
    link: "/tutorial/c",
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
                {/* Kiri: Icon dan teks */}
                <div className="flex items-start gap-4 md:w-2/3">
                  <div className="min-w-[64px]">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>

                {/* Kanan: hanya tampil di desktop */}
                <div className="mt-4 md:mt-0 hidden md:flex flex-col gap-1 text-gray-300 text-sm md:items-end">
                  <div className="flex items-center gap-2">
                    <PiDesktopTower className="text-white" />
                    <span><b>Multi</b> Platform</span>
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

        {/* Pagination */}
        <div className="flex gap-2 justify-center mt-10">
          <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-teal-500 rounded-full transition duration-150 ease-in-out active:scale-95">
            <FaAnglesLeft />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-teal-500 rounded-full transition duration-150 ease-in-out active:scale-95">
            <FaChevronLeft />
          </button>
          {[1, 2].map((num) =>
            num === 1 ? (
              <Link
                to="/tutorial"
                key={num}
                className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold bg-gray-700 text-white hover:bg-teal-500 transition active:scale-95"
              >
                {num}
              </Link>
            ) : (
              <button
                key={num}
                className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold bg-teal-500 text-white transition cursor-default"
                disabled
              >
                {num}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
