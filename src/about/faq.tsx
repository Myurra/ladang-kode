import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

type FAQ = {
    question: string;
    answer: string;
};

const faqList: FAQ[] = [
    {
        question: 'Apa itu Ladang Kode?',
        answer: 'Ladang Kode adalah platform belajar pemrograman gratis dan berbahasa Indonesia.',
    },
    {
        question: 'Kenapa namanya Ladang Kode?',
        answer: 'Agar mudah diinget dan juga kami ingin membangun tempat tumbuhnya ilmu coding, seperti ladang yang menumbuhkan hasil panen.',
    },
    {
        question: 'Apakah bisa diakses gratis?',
        answer: 'Ya! Semua konten kami bisa diakses tanpa biaya.',
    },
    {
        question: 'Siapa target penggunanya?',
        answer: 'Bisa Pemula, pelajar, mahasiswa, hingga profesional yang ingin mengasah skill.',
    },
    {
        question: 'Apakah bisa bertanya?',
        answer: 'Fitur tanya-jawab komunitas sedang dalam pengembangan. Namun Jika kamu memiliki saran, kritik, dan pertanyaan, bisa kirim email ke info@ladangkode.com atau DM ke Instagram @ladangkode.',
    },
    {
        question: 'Team Ladang Kode sudah menguasai bahasa pemrograman apa saja?',
        answer: 'HTML, CSS, JavaScript, TypeScript, PHP, Python, Laravel, React, Next.js, dan masih banyak lagi.',
    },
    {
        question: 'Cara menjadi programmer bagaimana?',
        answer: 'Mulai dari dasar (HTML, CSS, JS), terus latihan, ikut komunitas, dan jangan takut mencoba hal baru dan juga jangan lupa bersabar dan tekun.',
    },
    {
        question: 'Ladang Kode hosting di mana?',
        answer: 'Ladnag Kode hosting di Digitalocean. Lalu Domainnya sewa di IDWebhost dan DNS diatur oleh CloudFlare.',
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="bg-[#0f172a] text-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-2 text-center">
                    Pertanyaan yang Sering Ditanyakan
                </h2>
                <p className="text-gray-300 text-base mx-auto mb-5 leading-relaxed text-center max-w-2xl">
                    Pertanyaan berikut sering diajukan oleh Sobat Ladang Kode. Dan berikut beberapa jawaban yang mungkin bisa membantu kamu.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {faqList.map((faq, index) => (
                        <div key={index} className="w-full">
                            {/* Pertanyaan */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full bg-[#1e293b] text-left px-5 py-4 rounded-t-xl font-semibold flex justify-between items-center ${openIndex !== index ? 'rounded-b-xl' : ''
                                    } transition-all duration-200`}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-teal-500" />
                                ) : (
                                    <FaChevronDown className="text-teal-500" />
                                )}
                            </button>

                            {/* Jawaban */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 py-3 px-5' : 'max-h-0 px-5 py-0'
                                    } bg-[#334155] text-sm text-gray-300 rounded-b-xl`}
                            >
                                <div className="pt-1">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
