import { useState } from 'react';
import { FaBookOpen, FaBook, FaBars, FaTimes } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoLK.png';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-[#134e4a] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* KIRI - Logo + Nav (desktop) */}
          <div className="flex items-center gap-6">
            <Link to="/home" className="flex items-center gap-2">
              <img
                src={Logo}
                className="h-10 w-auto transition-transform hover:scale-105"
                alt="Logo"
              />
            </Link>

            {/* Nav menu - Desktop only */}
            <nav className="hidden md:flex gap-3 text-sm">
              <Link
                to="/home"
                className="flex items-center gap-2 text-xl px-3 py-2 rounded-md hover:bg-teal-500 transition"
              >
                <IoHome /> Home
              </Link>
              <Link
                to="/tutorial"
                className="flex items-center gap-2 text-xl px-3 py-2 rounded-md hover:bg-teal-500 transition"
              >
                <FaBook /> Tutorial
              </Link>
              <Link
                to="/buku"
                className="flex items-center gap-2 text-xl px-3 py-2 rounded-md hover:bg-teal-500 transition"
              >
                <FaBookOpen /> Buku
              </Link>
            </nav>
          </div>

          {/* KANAN - Join & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Join Newsletter - Desktop only */}
            <Link
              to="/newsletter"
              className="hidden md:flex bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm transition-transform active:scale-95"
            >
              Join Newsletter
            </Link>

            {/* Hamburger - Mobile only */}
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <FaBars className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#134e4a] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-4 border-b border-teal-700">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-4 gap-4 text-lg">
          <Link
            to="/home"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-teal-600 transition"
          >
            <IoHome /> Home
          </Link>
          <Link
            to="/tutorial"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-teal-600 transition"
          >
            <FaBook /> Tutorial
          </Link>
          <Link
            to="/buku"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-teal-600 transition"
          >
            <FaBookOpen /> Buku
          </Link>
          <Link
            to="/newsletter"
            onClick={() => setSidebarOpen(false)}
            className="mt-4 bg-teal-500 hover:bg-teal-600 text-white text-center px-4 py-2 rounded transition"
          >
            Join Newsletter
          </Link>
        </nav>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </>
  );
}
