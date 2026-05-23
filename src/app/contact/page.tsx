import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | SPKP-PP",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Hubungi Kami</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Ada pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi pengurus SPKP-PP.
        </p>
      </div>

      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Informasi Kontak</h2>
          <div className="mt-6 space-y-6">
            {[
              { label: "Alamat", value: "Jl. Pelabuhan Raya No. 10, Jakarta Utara, Indonesia" },
              { label: "Telepon", value: "+62 812 3456 7890" },
              { label: "Email", value: "info@spkp-pp.or.id" },
              { label: "Jam Operasional", value: "Senin - Sabtu, 08:00 - 17:00 WIB" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-sm font-semibold text-zinc-900">{item.label}</h3>
                <p className="mt-1 text-zinc-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Pendaftaran Anggota</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="email@anda.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tulis pesan atau alasan Anda ingin bergabung..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Daftar Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
