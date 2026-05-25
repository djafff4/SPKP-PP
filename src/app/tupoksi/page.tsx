"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TUPOKSI_DATA = [
  {
    role: "Ketua Umum",
    tugasPokok: [
      "Memimpin organisasi secara nasional",
      "Menentukan arah kebijakan strategis",
      "Menjadi penanggung jawab utama organisasi"
    ],
    fungsi: [
      "Pengambil keputusan tertinggi di luar Munas",
      "Representasi organisasi (ke pemerintah, perusahaan, publik)",
      "Penandatangan keputusan & dokumen resmi"
    ]
  },
  {
    role: "Wakil Ketua Umum",
    tugasPokok: [
      "Membantu Ketua Umum dalam menjalankan organisasi"
    ],
    fungsi: [
      "Mengkoordinasikan bidang/divisi",
      "Menggantikan Ketua Umum saat berhalangan",
      "Mengawasi pelaksanaan program kerja"
    ]
  },
  {
    role: "Sekretaris Jenderal",
    tugasPokok: [
      "Mengelola administrasi dan operasional organisasi"
    ],
    fungsi: [
      "Mengatur surat-menyurat & dokumentasi",
      "Menyusun program kerja organisasi",
      "Mengelola rapat dan notulen",
      "Mengkoordinasikan komunikasi internal"
    ]
  },
  {
    role: "Bendahara Umum",
    tugasPokok: [
      "Mengelola keuangan organisasi"
    ],
    fungsi: [
      "Mengelola pemasukan & pengeluaran",
      "Membuat laporan keuangan berkala",
      "Menyusun anggaran (RAPBO)",
      "Menjaga transparansi & akuntabilitas"
    ]
  },
  {
    role: "Bidang Organisasi & Keanggotaan",
    tupoksi: [
      "Mengelola data anggota",
      "Membentuk struktur daerah/cabang",
      "Rekrutmen & kaderisasi anggota",
      "Penerbitan kartu anggota"
    ]
  },
  {
    role: "Bidang Advokasi",
    tupoksi: [
      "Pendampingan kasus PHK & sengketa",
      "Konsultasi hukum ketenagakerjaan",
      "Mewakili anggota di PHI",
      "Penyusunan kajian hukum"
    ]
  },
  {
    role: "Bidang Hubungan Industrial",
    tupoksi: [
      "Perundingan PKB",
      "Mediasi dengan perusahaan",
      "Penguatan hubungan pekerja-pengusaha",
      "Monitoring kondisi kerja"
    ]
  },
  {
    role: "Bidang Pendidikan & Pelatihan (Diklat)",
    tupoksi: [
      "Pelatihan anggota (hak pekerja, hukum, dll)",
      "Pendidikan kader serikat",
      "Workshop & seminar",
      "Pengembangan SDM anggota"
    ]
  },
  {
    role: "Bidang Kesejahteraan Anggota",
    tupoksi: [
      "Program kesejahteraan (bantuan sosial, koperasi, dll)",
      "Perlindungan jaminan sosial tenaga kerja",
      "Pengembangan ekonomi anggota"
    ]
  },
  {
    role: "Bidang Informasi & Komunikasi",
    tupoksi: [
      "Publikasi kegiatan organisasi",
      "Pengelolaan media social",
      "Penyebaran informasi ke anggota",
      "Hubungan media & publik"
    ]
  }
];

export default function TupoksiPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Tugas Pokok & Fungsi</h1>
        <p className="text-slate-600 text-center mb-12">Rincian tugas pokok dan fungsi (Tupoksi) masing-masing jabatan dalam struktur kepengurusan SPKP-PP.</p>

        <div className="space-y-4">
          {TUPOKSI_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors ${openIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg">{item.role}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-slate-600 border-t border-blue-100/50">
                  {item.tugasPokok && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Tugas Pokok:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        {item.tugasPokok.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {item.fungsi && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Fungsi:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        {item.fungsi.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {item.tupoksi && (
                    <div className="mt-4">
                      <ol className="list-decimal pl-5 space-y-1">
                        {item.tupoksi.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
