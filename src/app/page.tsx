import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] items-center bg-gradient-to-br from-blue-50 via-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Bersatu untuk{" "}
              <span className="text-blue-600">Kesejahteraan</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              SPKP-PP adalah wadah perjuangan bagi seluruh pekerja kelautan dan perikanan Indonesia. 
              Kami berkomitmen memperjuangkan hak, keadilan, dan kesejahteraan anggota secara demokratis dan bermartabat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Daftar Anggota
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50"
              >
                Pelajari Lebih
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
