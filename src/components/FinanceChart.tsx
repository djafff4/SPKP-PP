"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

interface Transaction {
  id: number;
  type: 'pemasukan' | 'pengeluaran';
  amount: string | number;
  description: string;
  date: string;
}

interface FinanceChartProps {
  data: Transaction[];
}

export default function FinanceChart({ data }: FinanceChartProps) {
  // Process data for chart: show the last 10 entries
  const chartData = data.slice(0, 10).reverse().map((item) => ({
    name: new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' }),
    amount: parseFloat(item.amount.toString()),
    type: item.type,
  }));

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#71717a' }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#71717a' }}
            tickFormatter={(value) => `Rp ${value.toLocaleString("id-ID")}`}
          />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number) => [`Rp ${value.toLocaleString("id-ID")}`, "Jumlah"]}
          />
          <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.type === 'pemasukan' ? '#16a34a' : '#dc2626'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
