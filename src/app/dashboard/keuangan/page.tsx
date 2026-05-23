import Link from "next/link";
import { Plus } from "lucide-react";
import pool from "@/lib/db";
import FinanceExport from "@/components/FinanceExport";

// Force dynamic because we fetch from DB
export const dynamic = "force-dynamic";

export interface Transaction {
  id: number;
  type: 'pemasukan' | 'pengeluaran';
  amount: string | number;
  description: string;
  date: string;
}

async function getKeuangan(): Promise<Transaction[]> {
  try {
    const [rows] = await pool.query("SELECT * FROM keuangan ORDER BY date DESC");
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Kebendaharaan Serikat</h1>
          <p className="text-sm text-zinc-500">Kelola dan pantau arus kas masuk dan keluar organisasi.</p>
        </div>
        <Link
          href="/dashboard/keuangan/tambah"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Tambah Catatan
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-medium text-zinc-500">Total Saldo</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">
            Rp {saldo.toLocaleString("id-ID")}
          </h3>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-medium text-zinc-500 text-green-600">Total Pemasukan</p>
          <h3 className="mt-2 text-3xl font-bold text-green-600">
            Rp {totalPemasukan.toLocaleString("id-ID")}
          </h3>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-medium text-zinc-500 text-red-600">Total Pengeluaran</p>
          <h3 className="mt-2 text-3xl font-bold text-red-600">
            Rp {totalPengeluaran.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>

      {/* Export Section */}
      <FinanceExport data={data} />

      {/* Transaction Table */}
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 font-semibold text-zinc-900 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4">Keterangan</th>
              <th className="px-6 py-4">Tipe</th>
              <th className="px-6 py-4 text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-zinc-500 italic">
                  Belum ada data keuangan yang tercatat.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-zinc-600">
                    {new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 font-medium text-zinc-900">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      item.type === 'pemasukan' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {item.type === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${
                    item.type === 'pemasukan' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.type === 'pemasukan' ? '+' : '-'} Rp {parseFloat(item.amount.toString()).toLocaleString("id-ID")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
