import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './home/navabr';
import { Footer } from './home/footer';
import ScrollToTop from './scrolltotop';

// Halaman utama dan umum
import Home from './home/home';
import Tutorial from './tutorial/tutorial';
import Artikel from './home/artikel';
import Artikels from './home/artikels';
import Newsletter from './info/newsletter';

// Halaman kategori
import Kategori from './kategori/kategori';
import Pemrograman from './kategori/pemrograman';
import Web from './kategori/web';

// Halaman buku
import BooksPage from './pages/book';
import Dataviz from './pages/dataviz';
import LaravelDatatables from './pages/datatables';
import ModernReact from './pages/modernreact';
import ReactExpress from './pages/reactexpres';
import ReactAWS from './pages/reactaws';
import LaravelRealtime from './pages/laravelreal';
import Vuejs from './pages/vuejs';
import Laravel from './pages/laravel';

// Halaman tentang
import About from './about/about';
import FAQs from './about/faq';
import Contact from './about/contact';

// Halaman isi tutorial
import Html from './tutorial/html';
import Javascript from './tutorial/js';
import Java from './tutorial/java';
import C from './tutorial/c';
import Python from './tutorial/pyhton';
import Git from './tutorial/git';
import Page2 from './tutorial/page2';

// Halaman tutorial explore
import Pythonfile from './tutorial/tutorexplore/python-file';
import JavaOOP from './tutorial/tutorexplore/java-oop';
import NodeJS from './tutorial/tutorexplore/nodejs';
import CodeIgn3 from './tutorial/tutorexplore/codeig3';
import CodeIgn4 from './tutorial/tutorexplore/codeig4';
import Css from './tutorial/tutorexplore/csstutor';

// Halaman tutor lainnya
import PhpP from './tutorial/tutorlainnya/phppemula';
import Kotlin from './tutorial/tutorlainnya/kotlin';
import Cplus from './tutorial/tutorlainnya/cplus';
import Csharp from './tutorial/tutorlainnya/csharp';

// html isinya
import Html01 from './materi/html01';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Tutorial dan Artikel */}
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/artikel/2" element={<Artikel />} />
        <Route path="/artikel" element={<Artikels />} />

        {/* Kategori */}
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/kategori/pemrograman" element={<Pemrograman />} />
        <Route path="/kategori/web" element={<Web />} />

        {/* Buku */}
        <Route path="/buku" element={<BooksPage />} />
        <Route path="/buku/laravel-dataviz" element={<Dataviz />} />
        <Route path="/buku/laravel-datatables" element={<LaravelDatatables />} />
        <Route path="/buku/modern-react" element={<ModernReact />} />
        <Route path="/buku/react-express" element={<ReactExpress />} />
        <Route path="/buku/react-aws" element={<ReactAWS />} />
        <Route path="/buku/laravel-realtime" element={<LaravelRealtime />} />
        <Route path="/buku/vuejs" element={<Vuejs />} />
        <Route path="/buku/laravel" element={<Laravel />} />

        {/* Info dan Tentang */}
        <Route path="/tentang" element={<About />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Isi tutorial */}
        <Route path="/tutorial/html" element={<Html />} />
        <Route path="/tutorial/javascript" element={<Javascript />} />
         <Route path="/tutorial/java" element={<Java />} />
        <Route path="/tutorial/c" element={<C />} />
        <Route path="/tutorial/python" element={<Python />} />
        <Route path="/tutorial/git" element={<Git />} />
        <Route path="/page/2" element={<Page2 />} />

        {/* isi tutor explore */}
        <Route path="/tutorial/python-file" element={<Pythonfile />} />
        <Route path="/tutorial/java-oop" element={<JavaOOP />} />
        <Route path="/tutorial/nodejs" element={<NodeJS />} />
        <Route path="/tutorial/codeigniter-3" element={<CodeIgn3 />} />
        <Route path="/tutorial/codeigniter-4" element={<CodeIgn4 />} />
        <Route path="/tutorial/css" element={<Css />} />

        {/* isi tutor lainnya */}
        <Route path="/tutorial/php" element={<PhpP />} />
        <Route path="/tutorial/kotlin" element={<Kotlin />} />
        <Route path="/tutorial/c++" element={<Cplus />} />
        <Route path="/tutorial/csharp" element={<Csharp />} />

        {/* Isi html */}
        <Route path="/html-dasar" element={<Html01 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;