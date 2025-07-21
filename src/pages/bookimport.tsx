import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';

type Book = {
  title: string;
  author: string;
  description: string;
  image: string;
  slug: string;
};

const books: Book[] = [
  {
    title: 'Laravel Dataviz',
    author: 'Muhammad Azamuddin',
    description:
      'Ebook Laravel Dataviz: Studi kasus mendalam bagaimana mempersiapkan perintah SQL dari database sampai menampilkan dalam 25+ macam...',
    image: book1,
    slug: 'laravel-dataviz',
  },
  {
    title: 'Laravel Datatables',
    author: 'Muhammad Azamuddin',
    description:
      'Buku Laravel Datatables: Memahami & mempraktikkan konfigurasi laravel-datatables fundamental sampai konfigurasi tingkat lanjutan.',
    image: book2,
    slug: 'laravel-datatables',
  },
  {
    title: 'Modern React: Be Frontend Pro',
    author: 'Muhammad Azamuddin & Hafid...',
    description:
      'Buku Modern React berisi panduan belajar React untuk Pemula hingga bisa membuat aplikasi sendiri.',
    image: book3,
    slug: 'modern-react',
  },
  {
    title: 'React & Express: Be Fullstack...',
    author: 'Muhammad Azamuddin & Hafid...',
    description:
      'Buku ini berisi panduan menggunakan Reactjs dan Expressjs untuk membuat aplikasi Fullstack Javascript',
    image: book4,
    slug: 'react-express',
  },
  {
    title: 'Membangun Aplikasi Full-Stack...',
    author: 'Yuda Sukmana',
    description:
      'Buku ini berisi panduan menggunakan Reactjs dengan Serverless AWS',
    image: book5,
    slug: 'react-aws',
  },
  {
    title: 'Panduan Praktis Membuat...',
    author: 'Muhammad Azamuddin',
    description:
      'Buku ini berisi panduan membuat aplikasi realtime dengan Laravel dan Websockets...',
    image: book6,
     slug: 'laravel-realtime',
  },
  {
    title: 'Vuejs: Frontend Web Series',
    author: 'Muhammad Azamuddin',
    description:
      'Buku ini berisi panduan belajar VueJS untuk Pemula hingga bisa membuat aplikasi sendiri',
    image: book7,
     slug: 'vuejs',
  },
  {
    title: 'Laravel: Fullstack Web Series',
    author: 'Hafid Mukhlasin',
    description:
      'Buku ini berisi panduan belajar Laravel dari Dasar hingga bisa membuat aplikasi sendiri...',
    image: book8,
     slug: 'laravel',
  },
];

export default books;