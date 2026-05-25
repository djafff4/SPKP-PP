import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Shield, Anchor } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-90" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-3xl opacity-30 rounded-full w-[800px] h-[800px] bg-blue-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Bersama Membangun Kesejahteraan
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 animate-slide-up">
            Kedaulatan & Kesejahteraan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pekerja Kelautan Indonesia
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            SPKP-PP berdedikasi tinggi menegakkan supremasi hak-hak pekerja, keadilan sosial, dan profesionalisme insan maritim nusantara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link
              href="/about"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-blue"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">10,000+</div>
              <div className="text-slate-600">Anggota Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">34</div>
              <div className="text-slate-600">Cabang Provinsi</div>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <Anchor className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Komitmen Maritim</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
