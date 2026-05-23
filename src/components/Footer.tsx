import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image src="/logo.jpeg" alt="SPKP-PP Logo" width={36} height={36} className="rounded" />
              <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                SPKP<span className="text-blue-600">-PP</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600">
              Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila — memperjuangkan kesejahteraan dan keadilan bagi seluruh pekerja kelautan dan perikanan Indonesia.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">Navigasi</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="/" className="hover:text-zinc-900">Beranda</a></li>
              <li><a href="/about" className="hover:text-zinc-900">Tentang</a></li>
              <li><a href="/berita-acara" className="hover:text-zinc-900">Berita Acara</a></li>
              <li><a href="/pengurus" className="hover:text-zinc-900">Pengurus</a></li>
              <li><a href="/tupoksi" className="hover:text-zinc-900">Tupoksi</a></li>
              <li><a href="/surat-keputusan" className="hover:text-zinc-900">Surat Keputusan</a></li>
              <li><a href="/services" className="hover:text-zinc-900">Layanan</a></li>
              <li><a href="/contact" className="hover:text-zinc-900">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">Kontak</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>info@spkp-pp.or.id</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} SPKP-PP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
