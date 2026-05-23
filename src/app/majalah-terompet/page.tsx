import type { Metadata } from "next";
import Link from "next/link";
import pool from "@/lib/db";

export const metadata: Metadata = {
  title: "Majalah Terompet | SPKP-PP",
  description: "Arsip digital Majalah Terompet, media informasi dan aspirasi Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila.",
};

interface Magazine {
  id: number;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  release_date: Date;
  file_url: string;
}

async function getMagazines() {
  try {
    // We cast to any here to avoid importing types from mysql2 in this file
    const [rows] = await pool.query("SELECT * FROM majalah ORDER BY release_date DESC") as any;
    return rows as Magazine[];
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
}

export default async function MagazinePage() {
  const magazines = await getMagazines();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Majalah Terompet</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Media informasi, komunikasi, dan aspirasi resmi SPKP-PP. Temukan berbagai edisi terbaru dan arsip Majalah Terompet di sini.
        </p>
      </div>

      {magazines.length === 0 ? (
        <div className="mt-16 text-center py-20 border-2 border-dashed border-zinc-200 rounded-3xl">
          <p className="text-zinc-500 italic">Belum ada edisi majalah yang diterbitkan atau sedang dalam pemeliharaan database.</p>
        </div>
      ) : (
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {magazines.map((mag) => (
            <div
              key={mag.id}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
                <div className="flex h-full items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm">Cover Majalah</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {new Date(mag.release_date).toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
                </div>
                <h3 className="mt-2 text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {mag.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 line-clamp-2">
                  {mag.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/majalah-terompet/${mag.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Baca Selengkapnya
                  </Link>
                  {mag.file_url && (
                    <a href={mag.file_url} download className="text-zinc-400 hover:text-zinc-600 transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
