import pool from "@/lib/db";
import FinanceChart from "@/components/FinanceChart";
import { Wallet, BookOpen, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Transaction {
  id: number;
  type: 'pemasukan' | 'pengeluaran';
  amount: string | number;
  description: string;
  date: string;
}

interface DashboardStats {
  keuangan: Transaction[];
  majalahCount: number;
  totalPemasukan: number;
  totalPengeluaran: number;
  saldo: number;
}

async function getStats(): Promise<DashboardStats> {
  try {
    const [keuanganRows] = await pool.query("SELECT * FROM keuangan ORDER BY date DESC");
    const [majalahRows] = await pool.query("SELECT COUNT(*) as count FROM majalah");
    
    const keuangan = keuanganRows as Transaction[];
    const majalahCount = (majalahRows as { count: number }[])[0].count;

    const totalPemasukan = keuangan
      .filter((item) => item.type === "pemasukan")
      .reduce((acc, item) => acc + parseFloat(item.amount.toString()), 0);
    
    const totalPengeluaran = keuangan
      .filter((item) => item.type === "pengeluaran")
      .reduce((acc, item) => acc + parseFloat(item.amount.toString()), 0);

    return {
      keuangan,
      majalahCount,
      totalPemasukan,
      totalPengeluaran,
      saldo: totalPemasukan - totalPengeluaran
    };
  } catch (error) {
    console.error(error);
    return { keuangan: [], majalahCount: 0, totalPemasukan: 0, totalPengeluaran: 0, saldo: 0 };
  }
}

export default async function DashboardPage() {
  const stats = await getStats();

  const cards = [
    { name: "Total Saldo", value: `Rp ${stats.saldo.toLocaleString("id-ID")}`, icon: Wallet, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Pemasukan", value: `Rp ${stats.totalPemasukan.toLocaleString("id-ID")}`, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
    { name: "Pengeluaran", value: `Rp ${stats.totalPengeluaran.toLocaleString("id-ID")}`, icon: TrendingDown, color: "text-red-600", bg: "bg-red-50" },
    { name: "Edisi Majalah", value: stats.majalahCount.toString(), icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Halo, Admin SPKP-PP</h1>
        <p className="text-sm text-zinc-500">Berikut adalah ringkasan performa organisasi saat ini.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.bg} ${card.color} mb-4`}>
              <card.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-zinc-500">{card.name}</p>
            <h3 className="mt-1 text-2xl font-bold text-zinc-900">{card.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-bold text-zinc-900">Tren Arus Kas (Terakhir)</h3>
            <span className="text-xs text-zinc-400">Pemasukan (Hijau) vs Pengeluaran (Merah)</span>
          </div>
          <FinanceChart data={stats.keuangan} />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold text-zinc-900 mb-6">Aksi Cepat</h3>
          <div className="space-y-3">
            <Link 
              href="/dashboard/keuangan/tambah"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Catat Transaksi
            </Link>
            <Link 
              href="/dashboard/majalah/tambah"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              Post Majalah Baru
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
