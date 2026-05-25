"use client";

import { useState } from "react";
import { FileSpreadsheet, FileText, Loader2, CheckCircle } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Transaction {
  id: number;
  type: "pemasukan" | "pengeluaran";
  amount: string | number;
  description: string;
  date: string;
}

interface FinanceExportProps {
  data: Transaction[];
}

type ExportState = "idle" | "loading" | "success";

export default function FinanceExport({ data }: FinanceExportProps) {
  const [excelState, setExcelState] = useState<ExportState>("idle");
  const [pdfState, setPdfState] = useState<ExportState>("idle");

  const withFeedback = async (setState: (s: ExportState) => void, fn: () => void) => {
    setState("loading");
    await new Promise((r) => setTimeout(r, 600)); // simulate work
    fn();
    setState("success");
    setTimeout(() => setState("idle"), 2500);
  };

  const handleExportExcel = () =>
    withFeedback(setExcelState, () => {
      const formattedData = data.map((item) => ({
        Tanggal: new Date(item.date).toLocaleDateString("id-ID"),
        Keterangan: item.description,
        Tipe: item.type === "pemasukan" ? "Pemasukan" : "Pengeluaran",
        Jumlah: parseFloat(item.amount.toString()),
      }));
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Keuangan");
      XLSX.writeFile(
        workbook,
        `Laporan_Keuangan_SPKP_PP_${new Date().getTime()}.xlsx`
      );
    });

  const handleExportPDF = () =>
    withFeedback(setPdfState, () => {
      const doc = new jsPDF();
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
        headStyles: { fillColor: [37, 99, 235] },
      });
      doc.save(`Laporan_Keuangan_SPKP_PP_${new Date().getTime()}.pdf`);
    });

  const ExportButton = ({
    onClick,
    state,
    icon: Icon,
    successIcon: SuccessIcon = CheckCircle,
    label,
    color,
  }: {
    onClick: () => void;
    state: ExportState;
    icon: React.ElementType;
    successIcon?: React.ElementType;
    label: string;
    color: string;
  }) => (
    <button
      onClick={onClick}
      disabled={state === "loading"}
      className={`group inline-flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition-all disabled:cursor-not-allowed ${
        state === "success"
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      {state === "loading" ? (
        <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
      ) : state === "success" ? (
        <SuccessIcon className="h-4 w-4 text-emerald-600" />
      ) : (
        <Icon className={`h-4 w-4 ${color}`} />
      )}
      {state === "success" ? "Berhasil diunduh ✓" : label}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-slate-500">Export Laporan:</span>
      <ExportButton
        onClick={handleExportExcel}
        state={excelState}
        icon={FileSpreadsheet}
        label="Excel (.xlsx)"
        color="text-emerald-600"
      />
      <ExportButton
        onClick={handleExportPDF}
        state={pdfState}
        icon={FileText}
        label="PDF (.pdf)"
        color="text-red-500"
      />
    </div>
  );
}
