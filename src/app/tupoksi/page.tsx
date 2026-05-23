import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tupoksi | SPKP-PP",
};

const data = [
  {
    jabatan: "Ketua Umum",
    tugas: [
      "Memimpin organisasi secara nasional",
      "Menentukan arah kebijakan strategis",
      "Menjadi penanggung jawab utama organisasi",
    ],
    fungsi: [
      "Pengambil keputusan tertinggi di luar Munas",
      "Representasi organisasi (ke pemerintah, perusahaan, publik)",
      "Penandatangan keputusan & dokumen resmi",
    ],
  },
  {
    jabatan: "Wakil Ketua Umum",
    tugas: [
      "Membantu Ketua Umum dalam menjalankan organisasi",
    ],
    fungsi: [
      "Mengkoordinasikan bidang/divisi",
      "Menggantikan Ketua Umum saat berhalangan",
      "Mengawasi pelaksanaan program kerja",
    ],
  },
  {
    jabatan: "Sekretaris Jenderal",
    tugas: [
      "Mengelola administrasi dan operasional organisasi",
    ],
    fungsi: [
      "Mengatur surat-menyurat & dokumentasi",
      "Menyusun program kerja organisasi",
      "Mengelola rapat dan notulen",
      "Mengkoordinasikan komunikasi internal",
    ],
  },
  {
    jabatan: "Bendahara Umum",
    tugas: [
      "Mengelola keuangan organisasi",
    ],
    fungsi: [],
  },
  {
    jabatan: "Bidang Kesejahteraan Anggota",
    tugas: [
      "Program kesejahteraan (bantuan sosial, koperasi, dll)",
      "Perlindungan jaminan sosial tenaga kerja",
      "Pengembangan ekonomi anggota",
    ],
    fungsi: [],
  },
  {
    jabatan: "Bidang Informasi & Komunikasi",
    tugas: [
      "Publikasi kegiatan organisasi",
      "Pengelolaan media sosial",
      "Penyebaran informasi ke anggota",
      "Hubungan media & publik",
    ],
    fungsi: [],
  },
];

export default function Tupoksi() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Tugas Pokok & Fungsi
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Tupoksi pengurus Dewan Pimpinan Pusat (DPP) SPKP-PP.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {data.map((item) => (
          <div
            key={item.jabatan}
            className="rounded-2xl border border-zinc-200 p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold text-blue-600">{item.jabatan}</h2>

            {item.tugas.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Tugas Pokok
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {item.tugas.map((t) => (
                    <li key={t} className="flex gap-2 text-zinc-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.fungsi.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Fungsi
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {item.fungsi.map((f) => (
                    <li key={f} className="flex gap-2 text-zinc-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
