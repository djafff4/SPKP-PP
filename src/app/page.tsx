import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-white py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <Link 
              href="/majalah-terompet"
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-100 mb-8 border border-blue-100"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Edisi Terbaru Majalah Terompet Telah Rilis!
            </Link>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-7xl">
              Garda Terdepan <br />
              <span className="text-blue-600">Kesejahteraan Bahari</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-600">
              Lembaga perjuangan yang berdedikasi tinggi dalam menegakkan supremasi hak-hak pekerja sektor kelautan dan perikanan di seluruh pelosok Indonesia.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl"
              >
                Gabung Sekarang
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-bold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900">
            Mengapa Bergabung?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Perjuangan Hak",
                desc: "Memperjuangkan hak normatif dan kesejahteraan pekerja kelautan dan perikanan.",
              },
              {
                title: "Solidaritas Kuat",
                desc: "Jaringan solidaritas antar pekerja yang kokoh di seluruh Indonesia.",
              },
              {
                title: "Pendampingan Hukum",
                desc: "Bantuan dan pendampingan hukum bagi anggota yang menghadapi masalah ketenagakerjaan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 p-6 transition hover:border-blue-200 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Bersama Kita Kuat!
          </h2>
          <p className="mt-3 text-blue-100">
            Jadilah bagian dari perjuangan untuk kesejahteraan pekerja kelautan dan perikanan Indonesia.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
