"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function TambahKeuanganPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "pemasukan",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/keuangan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/dashboard/keuangan");
        router.refresh();
      } else {
        alert("Gagal menyimpan data.");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/dashboard/keuangan"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Daftar
      </Link>

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-zinc-900 mb-6">Tambah Catatan Keuangan</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">Tipe Transaksi</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "pemasukan" })}
                className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                  formData.type === "pemasukan"
                    ? "border-green-600 bg-green-50 text-green-700"
                    : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                Pemasukan
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "pengeluaran" })}
                className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                  formData.type === "pengeluaran"
                    ? "border-red-600 bg-red-50 text-red-700"
                    : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                Pengeluaran
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-semibold text-zinc-700 mb-2">
              Jumlah (Rp)
            </label>
            <input
              type="number"
              id="amount"
              required
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Contoh: 500000"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-zinc-700 mb-2">
              Tanggal
            </label>
            <input
              type="date"
              id="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-zinc-700 mb-2">
              Keterangan
            </label>
            <textarea
              id="description"
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Tulis deskripsi singkat transaksi..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Menyimpan..." : (
              <>
                <Save className="h-4 w-4" />
                Simpan Catatan
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
