import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Berita Acara | SPKP-PP",
};

const beritaAcara = [
  {
    id: 1,
    judul: "Berita Acara Pembentukan SPKP-PP",
    tanggal: "08 April 2026",
    tempat: "Mejasem, Tegal",
    deskripsi: "Berita acara pembentukan Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila (SPKP-PP).",
  },
];

export default function BeritaAcara() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Berita Acara</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Kumpulan berita acara dan dokumen resmi SPKP-PP.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {beritaAcara.map((item) => (
          <Link
            key={item.id}
            href={`/berita-acara/${item.id}`}
            className="block rounded-xl border border-zinc-200 p-6 transition hover:border-blue-200 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">{item.judul}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {item.tempat}, {item.tanggal}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {item.deskripsi}
            </p>
          </Link>
        ))}
      </div>

      {beritaAcara.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-zinc-300 p-12 text-center">
          <p className="text-zinc-500">Belum ada berita acara.</p>
        </div>
      )}
    </div>
  );
}
