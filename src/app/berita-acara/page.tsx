import DocumentTable from "@/components/features/DocumentTable";
import type { DocumentItem } from "@/components/features/DocumentTable";

export const metadata = {
  title: "Berita Acara",
};

const BERITA_ACARA_DATA: DocumentItem[] = [
  {
    id: "pembentukan",
    nomor: "BA/PEMB/SPKP-PP/01",
    tentang: "Berita Acara Pembentukan Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila (SPKP-PP)",
    tanggal: "08 Apr 2026",
    url: "/berita-acara/1"
  }
];

export default function BeritaAcaraPage() {
  return (
    <DocumentTable 
      title="Berita Acara"
      description="Arsip resmi dokumen Berita Acara yang diterbitkan oleh SPKP-PP."
      documents={BERITA_ACARA_DATA}
    />
  );
}
