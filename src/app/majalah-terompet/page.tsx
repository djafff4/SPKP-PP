import Image from "next/image";
import { BookOpen, Calendar, Download } from "lucide-react";

export const metadata = {
  title: "Majalah Terompet",
};

const MAJALAH_DATA = [
  {
    id: "1",
    title: "Edisi Khusus: Keadilan di Tengah Lautan",
    vol: "Vol 12 / 2024",
    date: "Maret 2024",
    image: "/placeholder-majalah.jpg",
    desc: "Membahas tuntas tantangan dan harapan para pekerja kapal perikanan jarak jauh.",
    url: "#"
  },
  {
    id: "2",
    title: "Suara Pelaut Indonesia",
    vol: "Vol 11 / 2023",
    date: "Desember 2023",
    image: "/placeholder-majalah.jpg",
    desc: "Kilas balik perjuangan serikat sepanjang tahun 2023 dan resolusi tahun baru.",
    url: "#"
  },
  {
    id: "3",
    title: "Sinergi Pemerintah dan Serikat",
    vol: "Vol 10 / 2023",
    date: "September 2023",
    image: "/placeholder-majalah.jpg",
    desc: "Laporan khusus hasil dialog nasional dengan Kementerian Kelautan dan Perikanan.",
    url: "#"
  }
];

export default function MajalahPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Majalah Terompet</h1>
          <p className="text-slate-600">Publikasi resmi SPKP-PP yang menyuarakan aspirasi, berita terkini, dan kajian mendalam seputar dunia kelautan dan ketenagakerjaan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAJALAH_DATA.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <div className="aspect-[3/4] relative bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                  <BookOpen className="w-16 h-16 opacity-20" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-slate-900 font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Download className="w-4 h-4" />
                    Unduh PDF
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs font-medium text-slate-500">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">{item.vol}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">{item.desc}</p>
                
                <a href={item.url} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                  Baca Selengkapnya
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
