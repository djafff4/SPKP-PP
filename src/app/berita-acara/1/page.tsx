import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Berita Acara Pembentukan | SPKP-PP",
};

export default function BeritaAcaraDetail() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Link
        href="/berita-acara"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </Link>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
            BERITA ACARA PEMBENTUKAN
          </h1>
          <p className="mt-2 text-lg font-semibold text-zinc-800">
            SERIKAT PEKERJA KELAUTAN DAN PERIKANAN PERISAI PANCASILA
          </p>
          <p className="mt-1 text-base font-semibold text-zinc-700">(SPKP-PP)</p>
        </div>

        <div className="mt-8 space-y-4 text-justify leading-relaxed text-zinc-700">
          <p>
            Pada hari ini Rabu, tanggal delapan bulan April tahun dua ribu dua puluh enam, bertempat di{" "}
            <strong>Jl. Pala Barat 8 RT 003 RW 13 Kelurahan Mejasem, Kecamatan Kramat, Kabupaten Tegal</strong>,{" "}
            telah dilaksanakan musyawarah pembentukan Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila (SPKP-PP).
          </p>

          <p>
            Musyawarah ini dihadiri oleh para pekerja/buruh sektor kelautan dan perikanan yang dengan ini menyatakan:
          </p>

          <div className="mt-6">
            <p className="font-semibold text-zinc-900">MEMUTUSKAN:</p>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="font-semibold text-zinc-900">1.</span>
                <span>
                  Membentuk organisasi serikat pekerja dengan nama:{" "}
                  <strong>Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila (SPKP-PP)</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-zinc-900">2.</span>
                <span>
                  Menetapkan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) sebagai landasan organisasi.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-zinc-900">3.</span>
                <span>
                  Memilih dan menetapkan susunan pengurus, yaitu:
                </span>
              </li>
            </ol>

            <div className="ml-6 mt-4 space-y-2 border-l-2 border-blue-200 pl-6">
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

            <ol className="mt-4 space-y-4" start={4}>
              <li className="flex gap-3">
                <span className="font-semibold text-zinc-900">4.</span>
                <span>
                  Menyatakan bahwa serikat pekerja ini bersifat bebas, terbuka, mandiri, demokratis, dan bertanggung jawab serta berasaskan Pancasila dan UUD Negara Republik Indonesia Tahun 1945.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-zinc-900">5.</span>
                <div>
                  <p>Menugaskan kepada pengurus terpilih untuk:</p>
                  <ul className="mt-2 space-y-1 pl-5">
                    <li className="list-disc">Mengurus pencatatan serikat pekerja ke Dinas Ketenagakerjaan</li>
                    <li className="list-disc">Menjalankan roda organisasi sesuai AD/ART</li>
                    <li className="list-disc">Mewakili anggota dalam hubungan industrial</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          <p className="mt-6">
            Demikian Berita Acara ini dibuat dengan sebenarnya untuk dipergunakan sebagaimana mestinya.
          </p>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-8 text-center">
          <p className="font-semibold text-zinc-900">Ditetapkan di Mejasem, Tegal</p>
          <p className="text-zinc-600">Tanggal: 08 April 2026</p>
        </div>
      </div>
    </div>
  );
}
