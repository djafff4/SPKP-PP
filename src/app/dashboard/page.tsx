import pool from "@/lib/db";
import FinanceChart from "@/components/FinanceChart";
import {
  Wallet,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Plus,
  PenLine,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Transaction {
  id: number;
  type: "pemasukan" | "pengeluaran";
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
    const [keuanganRows] = await pool.query(
      "SELECT * FROM keuangan ORDER BY date DESC"
    );
    const [majalahRows] = await pool.query(
      "SELECT COUNT(*) as count FROM majalah"
    );
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
      saldo: totalPemasukan - totalPengeluaran,
    };
  } catch (error) {
    console.error(error);
    return {
      keuangan: [],
      majalahCount: 0,
      totalPemasukan: 0,
      totalPengeluaran: 0,
      saldo: 0,
    };
  }
}

export default async function DashboardPage() {
  const stats = await getStats();

  const cards = [
    {
      name: "Total Saldo",
      value: `Rp ${stats.saldo.toLocaleString("id-ID")}`,
      icon: Wallet,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
      borderColor: "border-t-blue-500",
      trend: "Saldo aktif organisasi",
    },
    {
      name: "Total Pemasukan",
      value: `Rp ${stats.totalPemasukan.toLocaleString("id-ID")}`,
      icon: TrendingUp,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50",
      borderColor: "border-t-emerald-500",
      trend: "Akumulasi pemasukan",
    },
    {
      name: "Total Pengeluaran",
      value: `Rp ${stats.totalPengeluaran.toLocaleString("id-ID")}`,
      icon: TrendingDown,
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
      borderColor: "border-t-red-500",
      trend: "Akumulasi pengeluaran",
    },
    {
      name: "Edisi Majalah",
      value: stats.majalahCount.toString(),
      icon: BookOpen,
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50",
      borderColor: "border-t-violet-500",
      trend: "Edisi telah diterbitkan",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Selamat datang, Admin SPKP-PP. Berikut ringkasan performa organisasi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/keuangan"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            <ArrowUpRight className="h-4 w-4" />
            Keuangan
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.name}
            className={`rounded-2xl border border-slate-200 border-t-2 bg-white p-6 shadow-sm transition hover:shadow-md ${card.borderColor}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {card.name}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {card.value}
                </h3>
              </div>
              <div className={`rounded-xl p-2.5 ${card.iconBg}`}>
                <card.icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">{card.trend}</p>
          </div>
        ))}
      </div>

      {/* Chart + Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <h3 className="font-bold text-slate-900">Tren Arus Kas</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                10 transaksi terakhir
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Pemasukan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Pengeluaran
              </span>
            </div>
          </div>
          <div className="p-6">
            <FinanceChart data={stats.keuangan} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-5">Aksi Cepat</h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/keuangan/tambah"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              style={{ boxShadow: "0 4px 15px -3px rgb(37 99 235 / 0.4)" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
                <Plus className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold">Catat Transaksi</p>
                <p className="text-xs opacity-80">Tambah pemasukan/pengeluaran</p>
              </div>
            </Link>
            <Link
              href="/dashboard/majalah/tambah"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <PenLine className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Post Majalah Baru</p>
                <p className="text-xs text-slate-400">Publikasi edisi terbaru</p>
              </div>
            </Link>
          </div>

          {/* Recent stats summary */}
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Ringkasan
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total transaksi</span>
                <span className="font-semibold text-slate-900">{stats.keuangan.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Edisi majalah</span>
                <span className="font-semibold text-slate-900">{stats.majalahCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
