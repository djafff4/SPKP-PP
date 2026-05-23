import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | SPKP-PP",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Tentang Kami</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          <strong>Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila (SPKP-PP)</strong> adalah organisasi serikat pekerja 
          yang berjuang untuk melindungi hak, kepentingan, dan kesejahteraan seluruh pekerja di sektor kelautan dan perikanan di Indonesia.
        </p>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Visi</h2>
          <p className="mt-3 leading-relaxed text-zinc-600">
            Terwujudnya kesejahteraan dan keadilan bagi seluruh pekerja kelautan dan perikanan 
            Indonesia yang berlandaskan Pancasila dan Undang-Undang Dasar 1945.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Misi</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-zinc-600">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              Memperjuangkan hak normatif dan kesejahteraan pekerja kelautan dan perikanan.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              Membangun solidaritas dan persatuan antar pekerja di seluruh Indonesia.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              Menjalin kemitraan dengan pemerintah dan pemangku kepentingan untuk kebijakan yang berpihak pada pekerja.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-16">
        <h2 className="text-2xl font-semibold text-zinc-900">Nilai-Nilai Kami</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Solidaritas", desc: "Kami percaya kekuatan pekerja terletak pada persatuan dan kebersamaan." },
            { label: "Keadilan", desc: "Memperjuangkan perlakuan adil bagi seluruh pekerja tanpa diskriminasi." },
            { label: "Demokrasi", desc: "Menjunjung tinggi nilai demokrasi dalam setiap pengambilan keputusan organisasi." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-zinc-900">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
