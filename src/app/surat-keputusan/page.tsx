import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surat Keputusan | SPKP-PP",
};

const suratKeputusan = [
  {
    id: 1,
    nomor: "001/A/SK/SPKP-PP/IV/2026",
    judul: "Pengangkatan Pengurus Dewan Pimpinan Pusat (DPP) SPKP-PP",
    tanggal: "08 April 2026",
    tempat: "Tegal",
    deskripsi: "Surat Keputusan tentang pengangkatan pengurus DPP Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila.",
  },
];

export default function SuratKeputusan() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Surat Keputusan</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Kumpulan surat keputusan resmi SPKP-PP.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {suratKeputusan.map((item) => (
          <Link
            key={item.id}
            href={`/surat-keputusan/${item.id}`}
            className="block rounded-xl border border-zinc-200 p-6 transition hover:border-blue-200 hover:shadow-sm"
          >
            <p className="text-sm font-mono text-blue-600">{item.nomor}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">{item.judul}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {item.tempat}, {item.tanggal}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {item.deskripsi}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
