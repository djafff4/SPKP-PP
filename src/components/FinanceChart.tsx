"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";

interface Transaction {
  id: number;
  type: "pemasukan" | "pengeluaran";
  amount: string | number;
  description: string;
  date: string;
}

interface FinanceChartProps {
  data: Transaction[];
}

type ChartView = "bar" | "area";

const formatRp = (value: number) =>
  `Rp ${value.toLocaleString("id-ID", { notation: "compact", maximumFractionDigits: 1 })}`;

const fullFormatRp = (value: number) =>
  `Rp ${value.toLocaleString("id-ID")}`;

export default function FinanceChart({ data }: FinanceChartProps) {
  const [view, setView] = useState<ChartView>("bar");

  // Group by month for aggregated view
  const monthlyData = useMemo(() => {
    const map = new Map<string, { month: string; pemasukan: number; pengeluaran: number }>();

    data.forEach((item) => {
      const d = new Date(item.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const label = d.toLocaleDateString("id-ID", { month: "short", year: "2-digit" });
      if (!map.has(key)) {
        map.set(key, { month: label, pemasukan: 0, pengeluaran: 0 });
      }
      const entry = map.get(key)!;
      const amount = parseFloat(item.amount.toString());
      if (item.type === "pemasukan") entry.pemasukan += amount;
      else entry.pengeluaran += amount;
    });

    return Array.from(map.values()).slice(-8).reverse();
  }, [data]);

  // Last 10 individual transactions
  const rawData = useMemo(() => {
    return data.slice(0, 10).reverse().map((item) => ({
      name: new Date(item.date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
      }),
      amount: parseFloat(item.amount.toString()),
      type: item.type,
      fill: item.type === "pemasukan" ? "#10b981" : "#ef4444",
    }));
  }, [data]);

  const chartData = view === "area" ? monthlyData : rawData;
  const isEmpty = data.length === 0;

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{name: string; value: number; color: string; dataKey: string}>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
          <p className="mb-2 text-xs font-semibold text-slate-500">{label}</p>
          {payload.map((p) => (
            <p key={p.dataKey} className="text-sm font-bold" style={{ color: p.color }}>
              {p.name}: {fullFormatRp(p.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (isEmpty) {
    return (
      <div className="flex h-[300px] items-center justify-center text-slate-400">
        <p className="text-sm">Belum ada data transaksi</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toggle */}
      <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 w-fit">
        {(["bar", "area"] as ChartView[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
              view === v
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {v === "bar" ? "Batang" : "Tren"}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {view === "bar" ? (
            <BarChart data={rawData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={formatRp}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc", radius: 6 }} />
              <Bar dataKey="amount" name="Jumlah" radius={[6, 6, 0, 0]}>
                {rawData.map((entry, index) => (
                  <rect key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="gradPemasukan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradPengeluaran" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={formatRp}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span className="text-xs text-slate-500">{value}</span>}
              />
              <Area
                type="monotone"
                dataKey="pemasukan"
                name="Pemasukan"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#gradPemasukan)"
                dot={{ fill: "#10b981", r: 3 }}
              />
              <Area
                type="monotone"
                dataKey="pengeluaran"
                name="Pengeluaran"
                stroke="#ef4444"
                strokeWidth={2}
                fill="url(#gradPengeluaran)"
                dot={{ fill: "#ef4444", r: 3 }}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
