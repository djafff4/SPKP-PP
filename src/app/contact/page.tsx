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
              { 
                label: "Alamat Kantor", 
                value: "Jl. Pala Barat. 8 No.1512, Griya Mejasem Baru, Mejasem Bar., Kec. Kramat, Kabupaten Tegal, Kota Tegal, Jawa Tengah 52181" 
              },
              { 
                label: "Sekretariat", 
                value: "Jl. Pala Barat 8 RT 03 RW 13 Kelurahan Mejasem, Kramat, Tegal" 
              },
              { 
                label: "Email", 
                value: "dpp_spkpp@gmail.com" 
              },
              { 
                label: "Jam Operasional", 
                value: "Senin - Sabtu, 08:00 - 17:00 WIB" 
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-sm font-semibold text-zinc-900">{item.label}</h3>
                <p className="mt-1 text-zinc-600">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">Layanan Chatbot (WhatsApp)</h3>
            <a 
              href="https://wa.me/6282299748232?text=Halo%20Admin%20SPKP-PP%2C%20saya%20ingin%20bertanya%20mengenai..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.578 5.919L0 24l6.228-1.634a11.83 11.83 0 005.817 1.526h.005c6.636 0 12.046-5.412 12.049-12.05a11.801 11.801 0 00-3.417-8.526z" />
              </svg>
              Chat dengan Admin (WA)
            </a>
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
