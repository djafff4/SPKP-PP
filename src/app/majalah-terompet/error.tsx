"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Magazine Page Error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-32 text-center sm:px-6">
      <div className="rounded-3xl border-2 border-dashed border-red-100 bg-red-50 p-12">
        <h2 className="text-2xl font-bold text-red-900">Terjadi Kesalahan</h2>
        <p className="mt-4 text-zinc-600">
          Gagal memuat data majalah. Pastikan koneksi database telah dikonfigurasi dengan benar di file .env.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 bg-white px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 text-xs text-red-400 font-mono">
            {error.message || "Unknown error"}
          </p>
        )}
      </div>
    </div>
  );
}
