"use client";

import { useState } from "react";
import { Search, Download, FileText, Calendar } from "lucide-react";

export type DocumentItem = {
  id: string;
  nomor: string;
  tentang: string;
  tanggal: string;
  url: string;
};

interface DocumentTableProps {
  title: string;
  description: string;
  documents: DocumentItem[];
}

export default function DocumentTable({ title, description, documents }: DocumentTableProps) {
  const [search, setSearch] = useState("");

  const filteredDocs = documents.filter(doc => 
    doc.nomor.toLowerCase().includes(search.toLowerCase()) || 
    doc.tentang.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berdasarkan nomor atau perihal..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="text-sm text-slate-500 font-medium">
              Menampilkan {filteredDocs.length} dokumen
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">Nomor Dokumen</th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tentang / Perihal</th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[15%]">Tanggal</th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[10%] text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-slate-900 text-sm">{doc.nomor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600 leading-relaxed">
                        {doc.tentang}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1.5 text-sm text-slate-500">
                          <Calendar className="w-4 h-4 shrink-0" />
                          {doc.tanggal}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a 
                          href={doc.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="Unduh Dokumen"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center">
                        <FileText className="w-12 h-12 text-slate-200 mb-3" />
                        <p>Tidak ada dokumen yang ditemukan.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
