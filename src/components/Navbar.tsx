"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, Menu, ExternalLink } from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Organisasi",
    items: [
      { label: "Tentang Kami", href: "/about", desc: "Sejarah dan visi misi SPKP-PP" },
      { label: "Pengurus DPP", href: "/pengurus", desc: "Struktur kepengurusan organisasi" },
      { label: "Tupoksi", href: "/tupoksi", desc: "Tugas pokok dan fungsi pengurus" },
    ],
  },
  {
    label: "Dokumen",
    items: [
      { label: "Berita Acara", href: "/berita-acara", desc: "Dokumen berita acara resmi" },
      { label: "Surat Keputusan", href: "/surat-keputusan", desc: "SK dan keputusan organisasi" },
    ],
  },
  {
    label: "Media",
    items: [
      { label: "Majalah Terompet", href: "/majalah-terompet", desc: "Arsip digital majalah resmi" },
      { label: "Layanan", href: "/services", desc: "Layanan dan program kerja" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveGroup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGroupEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveGroup(label);
  };

  const handleGroupLeave = () => {
    closeTimer.current = setTimeout(() => setActiveGroup(null), 150);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/20 bg-white/90 shadow-md shadow-black/5 backdrop-blur-xl"
          : "border-b border-white/10 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg shadow-sm">
            <Image src="/logo.jpeg" alt="SPKP-PP Logo" fill className="object-cover" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            SPKP<span className="text-blue-600">-PP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Beranda
          </Link>

          {NAV_GROUPS.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleGroupEnter(group.label)}
              onMouseLeave={handleGroupLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeGroup === group.label
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {group.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeGroup === group.label ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {activeGroup === group.label && (
                <div
                  className="absolute left-0 top-full mt-1 w-64 animate-slide-down overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-black/10"
                  onMouseEnter={() => handleGroupEnter(group.label)}
                  onMouseLeave={handleGroupLeave}
                >
                  <div className="p-1.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveGroup(null)}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 mt-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
            style={{ boxShadow: "0 4px 15px -3px rgb(37 99 235 / 0.4)" }}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Beranda
            </Link>

            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <button
                  onClick={() =>
                    setMobileOpenGroup(
                      mobileOpenGroup === group.label ? null : group.label
                    )
                  }
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileOpenGroup === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileOpenGroup === group.label && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-slate-100 pt-3 mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
