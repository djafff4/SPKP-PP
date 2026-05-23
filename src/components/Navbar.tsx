"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="SPKP-PP Logo" width={40} height={40} className="rounded" />
          <span className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
            SPKP<span className="text-blue-600">-PP</span>
          </span>
        </Link>

        <button
          className="flex flex-col gap-1 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-zinc-900 transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-900 transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-900 transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

        <div className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-4 border-b border-zinc-200 bg-white p-6 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-none sm:bg-transparent sm:p-0`}>
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Tentang
          </Link>
          <Link href="/berita-acara" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Berita Acara
          </Link>
          <Link href="/pengurus" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Pengurus
          </Link>
          <Link href="/tupoksi" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Tupoksi
          </Link>
          <Link href="/surat-keputusan" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            SK
          </Link>
          <Link href="/services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Layanan
          </Link>
          <Link href="/majalah-terompet" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsOpen(false)}>
            Majalah
          </Link>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700" onClick={() => setIsOpen(false)}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
