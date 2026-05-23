"use client";

import { FileSpreadsheet, FileText } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Transaction {
  id: number;
  type: 'pemasukan' | 'pengeluaran';
  amount: string | number;
  description: string;
  date: string;
}

interface FinanceExportProps {
  data: Transaction[];
}

export default function FinanceExport({ data }: FinanceExportProps) {
  const handleExportExcel = () => {
    const formattedData = data.map((item) => ({
      Tanggal: new Date(item.date).toLocaleDateString("id-ID"),
      Keterangan: item.description,
      Tipe: item.type === "pemasukan" ? "Pemasukan" : "Pengeluaran",
      Jumlah: parseFloat(item.amount.toString()),
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Keuangan");
    XLSX.writeFile(workbook, `Laporan_Keuangan_SPKP_PP_${new Date().getTime()}.xlsx`);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(18);
    doc.text("Laporan Keuangan SPKP-PP", 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Dicetak pada: ${new Date().toLocaleString("id-ID")}`, 14, 30);

    const tableData = data.map((item) => [
      new Date(item.date).toLocaleDateString("id-ID"),
      item.description,
      item.type === "pemasukan" ? "Pemasukan" : "Pengeluaran",
      `Rp ${parseFloat(item.amount.toString()).toLocaleString("id-ID")}`,
    ]);

    autoTable(doc, {
      startY: 40,
      head: [["Tanggal", "Keterangan", "Tipe", "Jumlah"]],
      body: tableData,
      headStyles: { fillColor: [37, 99, 235] }, // Blue-600
    });

    doc.save(`Laporan_Keuangan_SPKP_PP_${new Date().getTime()}.pdf`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-500">Export Laporan:</span>
      <button
        onClick={handleExportExcel}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
      >
        <FileSpreadsheet className="h-3.5 w-3.5 text-green-600" />
        Excel (.xlsx)
      </button>
      <button
        onClick={handleExportPDF}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
      >
        <FileText className="h-3.5 w-3.5 text-red-600" />
        PDF (.pdf)
      </button>
    </div>
  );
}
