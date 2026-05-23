import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Majalah Terompet | SPKP-PP",
  description: "Arsip digital Majalah Terompet, media informasi dan aspirasi Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila.",
};

const MAGAZINES = [
  {
    id: 1,
    title: "Majalah Terompet - Edisi Mei 2026",
    description: "Fokus Utama: Memperkuat Sinergi Buruh Kelautan di Era Digital.",
    date: "Mei 2026",
    image: "/logo.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Majalah Terompet - Edisi April 2026",
    description: "Evaluasi Kebijakan Kesejahteraan Pekerja Perikanan Semester I.",
    date: "April 2026",
    image: "/logo.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Majalah Terompet - Edisi Maret 2026",
    description: "Refleksi Perjuangan Hak-Hak Normatif di Sektor Kelautan.",
    date: "Maret 2026",
    image: "/logo.jpeg",
    link: "#",
  },
];

export default function MagazinePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Majalah Terompet</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Media informasi, komunikasi, dan aspirasi resmi SPKP-PP. Temukan berbagai edisi terbaru dan arsip Majalah Terompet di sini.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {MAGAZINES.map((mag) => (
          <div
            key={mag.id}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-blue-200 hover:shadow-lg"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
              <div className="flex h-full items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm">Cover Majalah</span>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{mag.date}</div>
              <h3 className="mt-2 text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {mag.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {mag.description}
              </p>
              <Link
                href={mag.link}
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Baca Selengkapnya
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
