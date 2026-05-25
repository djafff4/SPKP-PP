import DocumentTable from "@/components/features/DocumentTable";
import type { DocumentItem } from "@/components/features/DocumentTable";

export const metadata = {
  title: "Surat Keputusan",
};

const SK_DATA: DocumentItem[] = [
  {
    id: "pengangkatan-pengurus",
    nomor: "001/A/SK/SPKP-PP/IV/2026",
    tentang: "Pengangkatan Pengurus Dewan Pimpinan Pusat (DPP) Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila",
    tanggal: "08 Apr 2026",
    url: "/surat-keputusan/1"
  }
];

export default function SuratKeputusanPage() {
  return (
    <DocumentTable 
      title="Surat Keputusan (SK)"
      description="Kumpulan Surat Keputusan resmi yang dikeluarkan oleh Dewan Pimpinan Pusat SPKP-PP."
      documents={SK_DATA}
    />
  );
}
