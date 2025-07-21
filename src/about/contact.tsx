import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul & Subjudul */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Hubungi Kami</h2>
        <p className="text-gray-300 text-base md:text-lg mb-10">
          Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap
          mendengarkan kamu melalui beberapa kanal berikut:
        </p>

        {/* Daftar Kontak */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaEnvelope className="text-white" />,
              title: "Email",
              value: "kontak@ladangkode.com",
            },
            {
              icon: <FaFacebookF className="text-[#1877F2]" />,
              title: "Facebook",
              value: "facebook.com/ladangkode",
            },
            {
              icon: <FaInstagram className="text-[#E4405F]" />,
              title: "Instagram",
              value: "@ladangkode",
            },
            {
              icon: <FaTwitter className="text-[#1DA1F2]" />,
              title: "X (Twitter)",
              value: "@ladangkode",
            },
            {
              icon: <FaYoutube className="text-[#FF0000]" />,
              title: "YouTube",
              value: "youtube.com/@ladangkode",
            },
            {
              icon: <FaTelegramPlane className="text-[#0088cc]" />,
              title: "Telegram",
              value: "t.me/ladangkode",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] p-6 rounded-xl text-center transform transition-transform duration-200 ease-in-out hover:scale-[1.03] active:scale-95"
            >
              <div className="flex justify-center mb-3 text-xl">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-300 break-all">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
