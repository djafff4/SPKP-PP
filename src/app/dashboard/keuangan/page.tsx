import Link from "next/link";
import { Plus, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import pool from "@/lib/db";
import FinanceExport from "@/components/FinanceExport";
import FinanceChart from "@/components/FinanceChart";

export const dynamic = "force-dynamic";

export interface Transaction {
  id: number;
  type: "pemasukan" | "pengeluaran";
  amount: string | number;
  description: string;
  date: string;
}

async function getKeuangan(): Promise<Transaction[]> {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM keuangan ORDER BY date DESC"
    );
    return rows as Transaction[];
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
}

export default async function KeuanganPage() {
  const data = await getKeuangan();

  const totalPemasukan = data
    .filter((item) => item.type === "pemasukan")
    .reduce((acc, item) => acc + parseFloat(item.amount.toString()), 0);
  const totalPengeluaran = data
    .filter((item) => item.type === "pengeluaran")
    .reduce((acc, item) => acc + parseFloat(item.amount.toString()), 0);
  const saldo = totalPemasukan - totalPengeluaran;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Kebendaharaan Serikat</h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola dan pantau arus kas masuk dan keluar organisasi.
          </p>
        </div>
        <Link
          href="/dashboard/keuangan/tambah"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          style={{ boxShadow: "0 4px 15px -3px rgb(37 99 235 / 0.4)" }}
        >
          <Plus className="h-4 w-4" />
          Tambah Catatan
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-t-2 border-slate-200 border-t-blue-500 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <Wallet className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-sm font-semibold text-slate-500">Total Saldo</p>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Rp {saldo.toLocaleString("id-ID")}
          </h3>
        </div>
        <div className="rounded-2xl border border-t-2 border-slate-200 border-t-emerald-500 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="text-sm font-semibold text-emerald-600">Total Pemasukan</p>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-emerald-600">
            Rp {totalPemasukan.toLocaleString("id-ID")}
          </h3>
        </div>
        <div className="rounded-2xl border border-t-2 border-slate-200 border-t-red-500 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
              <TrendingDown className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-sm font-semibold text-red-600">Total Pengeluaran</p>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-red-600">
            Rp {totalPengeluaran.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h3 className="font-bold text-slate-900">Grafik Arus Kas</h3>
          <p className="text-xs text-slate-400 mt-0.5">Visualisasi tren transaksi</p>
        </div>
        <div className="p-6">
          <FinanceChart data={data} />
        </div>
      </div>

      {/* Export */}
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-700">
          Total {data.length} transaksi tercatat
        </p>
        <FinanceExport data={data} />
      </div>

      {/* Transaction Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h3 className="font-bold text-slate-900">Riwayat Transaksi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-3.5">Tanggal</th>
                <th className="px-6 py-3.5">Keterangan</th>
                <th className="px-6 py-3.5">Tipe</th>
                <th className="px-6 py-3.5 text-right">Jumlah</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-400 italic">
                    Belum ada data keuangan yang tercatat.
                  </td>
                </tr>
              ) : (
                data.map((item, i) => (
                  <tr
                    key={item.id}
                    className={`transition-colors hover:bg-slate-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs">
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          item.type === "pemasukan"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.type === "pemasukan" ? "Pemasukan" : "Pengeluaran"}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 text-right font-bold tabular-nums ${
                        item.type === "pemasukan"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.type === "pemasukan" ? "+" : "-"} Rp{" "}
                      {parseFloat(item.amount.toString()).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
