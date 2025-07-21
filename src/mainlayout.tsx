import Navbar from './home/navabr';
import { Footer } from './home/footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Ini akan diganti oleh Hero, Tutorial, dsb */}
      <Footer />
    </>
  );
}
