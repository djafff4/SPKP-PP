import Image from "next/image";
import { Download, Mail } from "lucide-react";

export const metadata = {
  title: "Pengurus DPP",
};

const PENGURUS_DATA = [
  { name: "Nursalim, S.Pd.I", role: "Ketua Umum", image: "/placeholder-user.jpg" },
  { name: "Agus Riyanto, S.H.", role: "Wakil Ketua", image: "/placeholder-user.jpg" },
  { name: "Saefullah, S.Pd.", role: "Sekretaris Jenderal", image: "/placeholder-user.jpg" },
  { name: "Muhammad Iwan", role: "Bendahara Umum", image: "/placeholder-user.jpg" },
  { name: "Vatkhur Rokhman Syah", role: "Bidang Organisasi & Keanggotaan", image: "/placeholder-user.jpg" },
  { name: "Ahmad Muarif", role: "Bidang Advokasi", image: "/placeholder-user.jpg" },
  { name: "Tri Reza Hanafi", role: "Bidang Hubungan Industrial", image: "/placeholder-user.jpg" },
  { name: "Eko Yulianto", role: "Bidang Pendidikan & Diklat", image: "/placeholder-user.jpg" },
  { name: "Wiranto", role: "Bidang Kesejahteraan Anggota", image: "/placeholder-user.jpg" },
  { name: "Imam Tobroni", role: "Bidang Informasi & Komunikasi", image: "/placeholder-user.jpg" },
];

export default function PengurusPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pengurus DPP SPKP-PP</h1>
          <p className="text-slate-600">Mengenal lebih dekat jajaran pengurus Dewan Pimpinan Pusat Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila periode 2024-2029.</p>
          <div className="mt-6 flex justify-center">
             <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg font-medium transition-colors">
               <Download className="w-4 h-4" />
               Unduh Struktur Organisasi (PDF)
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PENGURUS_DATA.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden relative">
                {/* Fallback avatar */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-3xl font-bold bg-slate-100">
                  {p.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center">{p.name}</h3>
              <p className="text-blue-600 text-sm font-medium text-center mb-4">{p.role}</p>
              <div className="flex justify-center border-t border-slate-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
