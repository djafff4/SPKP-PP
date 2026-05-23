import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | SPKP-PP",
};

const services = [
  {
    title: "Advokasi & Pendampingan Hukum",
    desc: "Bantuan hukum bagi anggota yang menghadapi masalah ketenagakerjaan, PHK, atau pelanggaran hak.",
    items: ["Konsultasi hukum gratis", "Pendampingan PHK", "Bantuan hukum perjanjian kerja", "Mediasi sengketa"],
  },
  {
    title: "Perjuangan Upah & Hak Normatif",
    desc: "Memperjuangkan upah layak, jaminan sosial, dan hak normatif pekerja kelautan dan perikanan.",
    items: ["Advokasi upah minimum", "BPJS Ketenagakerjaan", "Jaminan kesehatan", "Hak cuti & istirahat"],
  },
  {
    title: "Pelatihan & Pengembangan",
    desc: "Program peningkatan kapasitas dan keterampilan bagi anggota.",
    items: ["Pelatihan keselamatan kerja", "Sertifikasi kompetensi", "Workshop kewirausahaan", "Pendidikan organisasi"],
  },
  {
    title: "Jaringan & Solidaritas",
    desc: "Membangun jaringan solidaritas pekerja kelautan dan perikanan di seluruh Indonesia.",
    items: ["Pertemuan anggota rutin", "Forum diskusi nasional", "Kerjasama antar serikat", "Kegiatan sosial"],
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Layanan Kami</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          SPKP-PP menyediakan berbagai layanan untuk melindungi hak, meningkatkan kesejahteraan, 
          dan memperkuat solidaritas pekerja kelautan dan perikanan di seluruh Indonesia.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:border-blue-200 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold text-zinc-900">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="h-1 w-1 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
