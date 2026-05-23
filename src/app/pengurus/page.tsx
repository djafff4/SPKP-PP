import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Pengurus | SPKP-PP",
};

const intiPengurus = [
  { jabatan: "Ketua Umum", nama: "Nursalim, S.Pd.I" },
  { jabatan: "Wakil Ketua", nama: "Agus Riyanto, S.H." },
  { jabatan: "Sekretaris Jenderal", nama: "Saefullah, S.Pd." },
  { jabatan: "Bendahara Umum", nama: "Muhammad Iwan" },
];

const bidang = [
  { bidang: "Organisasi & Keanggotaan", nama: "Vatkhur Rokhman Syah" },
  { bidang: "Advokasi", nama: "Ahmad Muarif" },
  { bidang: "Hubungan Industrial", nama: "Tri Reza Hanafi" },
  { bidang: "Pendidikan & Diklat", nama: "Eko Yulianto" },
  { bidang: "Kesejahteraan Anggota", nama: "Wiranto" },
  { bidang: "Informasi & Komunikasi", nama: "Imam Tobroni" },
];

export default function Pengurus() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Dewan Pimpinan Pusat
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
          Struktur Pengurus
        </h1>
        <p className="mt-2 text-lg text-zinc-500">SPKP-PP</p>
        <p className="mt-1 text-sm text-zinc-400">
          Ditetapkan di Tegal, 08 April 2026
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">Inti Pengurus</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intiPengurus.map((item) => (
            <div
              key={item.jabatan}
              className="rounded-xl border border-zinc-200 bg-white p-6 text-center transition hover:border-blue-200 hover:shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                {item.nama.charAt(0)}
              </div>
              <h3 className="font-semibold text-zinc-900">{item.nama}</h3>
              <p className="mt-1 text-sm text-blue-600">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-zinc-900">Bidang-Bidang</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bidang.map((item) => (
            <div
              key={item.bidang}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-zinc-900">{item.nama}</h3>
              <p className="mt-1 text-sm text-blue-600">Kepala Bidang {item.bidang}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/struktur-pengurus.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-blue-300 hover:text-blue-600"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}
