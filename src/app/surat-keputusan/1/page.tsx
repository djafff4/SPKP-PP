import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SK Pengangkatan Pengurus DPP | SPKP-PP",
};

export default function SKDetail() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Link
        href="/surat-keputusan"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </Link>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12">
        <div className="text-center">
          <p className="text-base font-semibold text-zinc-800">
            SERIKAT PEKERJA KELAUTAN DAN PERIKANAN PERISAI PANCASILA
          </p>
          <p className="text-sm font-semibold text-zinc-600">(SPKP-PP)</p>

          <div className="mt-6 border-t border-b border-zinc-300 py-4">
            <h1 className="text-xl font-bold text-zinc-900 sm:text-2xl">SURAT KEPUTUSAN</h1>
            <p className="mt-1 font-mono text-sm text-blue-600">
              NOMOR: 001/A/SK/SPKP-PP/IV/2026
            </p>
            <p className="mt-1 text-base font-semibold text-zinc-800">
              TENTANG
            </p>
            <p className="text-base font-semibold text-zinc-800">
              PENGANGKATAN PENGURUS DEWAN PIMPINAN PUSAT (DPP)
            </p>
            <p className="text-base font-semibold text-zinc-800">
              SERIKAT PEKERJA KELAUTAN DAN PERIKANAN PERISAI PANCASILA
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-justify leading-relaxed text-zinc-700">
          <p className="font-semibold text-center text-zinc-900">
            DENGAN RAHMAT TUHAN YANG MAHA ESA
          </p>

          <div>
            <p className="font-semibold text-zinc-900">Menimbang:</p>
            <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
              <li>
                Bahwa untuk menjalankan organisasi diperlukan kepengurusan
              </li>
              <li>
                Bahwa telah dilakukan musyawarah pembentukan
              </li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-zinc-900">Mengingat:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>UUD 1945</li>
              <li>UU No. 21 Tahun 2000 tentang Serikat Pekerja</li>
              <li>AD/ART SPKP-PP</li>
            </ol>
          </div>

          <div className="mt-6 border-t border-zinc-200 pt-6">
            <p className="text-center font-bold uppercase text-zinc-900">MEMUTUSKAN:</p>

            <div className="mt-4">
              <p className="font-semibold text-zinc-900">Menetapkan:</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-zinc-900">KESATU:</p>
                  <p className="mt-1">
                    Mengangkat Pengurus Dewan Pimpinan Pusat (DPP) SPKP-PP dengan susunan sebagai berikut:
                  </p>

                  <div className="mt-3 space-y-2 border-l-2 border-blue-200 pl-6">
                    {[
                      ["Ketua Umum", "Nursalim, S.Pd.I"],
                      ["Wakil Ketua", "Agus Riyanto, S.H."],
                      ["Sekretaris", "Saefullah"],
                      ["Bendahara", "Muhammad Iwan"],
                    ].map(([jabatan, nama]) => (
                      <p key={jabatan}>
                        <span className="font-medium text-zinc-900">{jabatan}</span>
                        {" : "}
                        {nama}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">KEDUA:</p>
                  <p>Pengurus bertugas menjalankan organisasi sesuai AD/ART.</p>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">KETIGA:</p>
                  <p>Keputusan ini berlaku sejak tanggal ditetapkan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-8 text-center">
          <p>Ditetapkan di: <strong>Tegal</strong></p>
          <p>Pada tanggal: <strong>08 April 2026</strong></p>

          <div className="mt-8">
            <p className="font-semibold text-zinc-900">Ketua Umum,</p>
            <div className="mt-8" />
            <p className="mt-12 font-semibold text-zinc-900 underline underline-offset-4">
              Nursalim, S.Pd.I
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
