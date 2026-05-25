"use client";

import { useState } from "react";
import { MessageCircle, X, UserPlus, Scale, Info, HelpCircle } from "lucide-react";

const CHAT_OPTIONS = [
  {
    id: 1,
    label: "Pendaftaran Anggota",
    desc: "Prosedur bergabung dengan SPKP-PP",
    icon: UserPlus,
    message: "Halo Admin SPKP-PP, saya ingin bertanya mengenai prosedur pendaftaran anggota baru.",
  },
  {
    id: 2,
    label: "Pengaduan & Bantuan Hukum",
    desc: "Lapor masalah ketenagakerjaan",
    icon: Scale,
    message: "Halo Admin SPKP-PP, saya ingin melakukan pengaduan atau memerlukan bantuan hukum terkait pekerjaan saya.",
  },
  {
    id: 3,
    label: "Informasi Organisasi",
    desc: "Visi, misi, dan program kerja",
    icon: Info,
    message: "Halo Admin SPKP-PP, saya ingin mengetahui lebih lanjut mengenai visi, misi, dan program kerja organisasi.",
  },
  {
    id: 4,
    label: "Pertanyaan Lainnya",
    desc: "Hal lain yang ingin ditanyakan",
    icon: HelpCircle,
    message: "Halo Admin SPKP-PP, saya memiliki pertanyaan lainnya.",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282299748232?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup */}
      {isOpen && (
        <div
          className="mb-4 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl"
          style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-500 p-4">
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -left-4 bottom-0 h-12 w-12 rounded-full bg-white/10" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Bantuan SPKP-PP</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-xs text-green-100">Online via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-3">
            <p className="mb-2 px-1 text-xs font-medium text-slate-500">
              Pilih topik yang ingin ditanyakan:
            </p>
            <div className="space-y-1.5">
              {CHAT_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSendMessage(option.message)}
                  className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition-all hover:border-green-200 hover:bg-green-50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-green-100 group-hover:text-green-600">
                    <option.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800">{option.label}</p>
                    <p className="text-xs text-slate-400">{option.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-1.5 border-t border-slate-100 py-2.5">
            <svg className="h-3.5 w-3.5 fill-green-500" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.578 5.919L0 24l6.228-1.634a11.83 11.83 0 005.817 1.526h.005c6.636 0 12.046-5.412 12.049-12.05a11.801 11.801 0 00-3.417-8.526z" />
            </svg>
            <p className="text-[10px] font-medium text-slate-400">
              Powered by WhatsApp · Respons dalam hitungan jam
            </p>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <div className="relative">
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full bg-green-500 opacity-60"
            style={{ animation: "pulse-ring 2s ease-out infinite" }}
          />
        )}
        <button
          id="chatbot-fab"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
            isOpen
              ? "bg-slate-200 text-slate-700 rotate-90"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          style={!isOpen ? { boxShadow: "0 8px 25px -5px rgb(34 197 94 / 0.5)" } : {}}
          aria-label="Chat dengan kami"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}
