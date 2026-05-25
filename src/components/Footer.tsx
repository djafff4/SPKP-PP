import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Pengurus DPP", href: "/pengurus" },
  { label: "Tupoksi", href: "/tupoksi" },
  { label: "Layanan", href: "/services" },
];

const docLinks = [
  { label: "Berita Acara", href: "/berita-acara" },
  { label: "Surat Keputusan", href: "/surat-keputusan" },
  { label: "Majalah Terompet", href: "/majalah-terompet" },
  { label: "Hubungi Kami", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      {/* Decorative top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg">
                <Image src="/logo.jpeg" alt="SPKP-PP Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SPKP<span className="text-blue-400">-PP</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Lembaga perjuangan buruh yang berdedikasi dalam menegakkan supremasi
              hak-hak pekerja sektor kelautan dan perikanan Indonesia.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://wa.me/6282299748232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-green-600 hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.578 5.919L0 24l6.228-1.634a11.83 11.83 0 005.817 1.526h.005c6.636 0 12.046-5.412 12.049-12.05a11.801 11.801 0 00-3.417-8.526z" />
                </svg>
              </a>
              <a
                href="mailto:dpp_spkpp@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-blue-600 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dokumen & Media */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Dokumen & Media
            </h4>
            <ul className="space-y-2.5">
              {docLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Kontak
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <a href="mailto:dpp_spkpp@gmail.com" className="text-sm text-slate-400 transition hover:text-white">
                  dpp_spkpp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href="https://wa.me/6282299748232?text=Halo%20Admin%20SPKP-PP%2C%20saya%20ingin%20bertanya..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  +62 822 9974 8232
                  <span className="ml-1 text-xs text-green-500">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span className="text-sm leading-relaxed text-slate-400">
                  Jl. Pala Barat. 8 No.1512, Griya Mejasem Baru,
                  Kec. Kramat, Kab. Tegal, Jawa Tengah 52181
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SPKP-PP. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-xs text-slate-600">
            Dibuat dengan ❤️ untuk pekerja kelautan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
