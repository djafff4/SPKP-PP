import Image from "next/image";
import Link from "next/link";

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
              Lembaga perjuangan buruh yang berdedikasi tinggi dalam menegakkan supremasi hak-hak pekerja, mewujudkan kemandirian ekonomi, serta menjamin keadilan sosial bagi seluruh insan profesi di sektor kelautan dan perikanan Indonesia.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">Navigasi</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link href="/" className="hover:text-zinc-900">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-zinc-900">Tentang</Link></li>
              <li><Link href="/berita-acara" className="hover:text-zinc-900">Berita Acara</Link></li>
              <li><Link href="/pengurus" className="hover:text-zinc-900">Pengurus</Link></li>
              <li><Link href="/tupoksi" className="hover:text-zinc-900">Tupoksi</Link></li>
              <li><Link href="/surat-keputusan" className="hover:text-zinc-900">Surat Keputusan</Link></li>
              <li><Link href="/services" className="hover:text-zinc-900">Layanan</Link></li>
              <li><Link href="/majalah-terompet" className="hover:text-zinc-900">Majalah Terompet</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">Kontak</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="mailto:dpp_spkpp@gmail.com" className="hover:text-zinc-900">
                  dpp_spkpp@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/6282299748232?text=Halo%20Admin%20SPKP-PP%2C%20saya%20ingin%20bertanya..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900"
                >
                  +62 822 9974 8232 (WhatsApp)
                </a>
              </li>
              <li className="leading-tight">
                Jl. Pala Barat. 8 No.1512, Griya Mejasem Baru, Mejasem Bar., Kec. Kramat, Kabupaten Tegal
              </li>
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
