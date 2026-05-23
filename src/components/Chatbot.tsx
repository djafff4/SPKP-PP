"use client";

import { useState } from "react";

const CHAT_OPTIONS = [
  {
    id: 1,
    label: "Pendaftaran Anggota",
    message: "Halo Admin SPKP-PP, saya ingin bertanya mengenai prosedur pendaftaran anggota baru.",
  },
  {
    id: 2,
    label: "Pengaduan & Bantuan Hukum",
    message: "Halo Admin SPKP-PP, saya ingin melakukan pengaduan atau memerlukan bantuan hukum terkait pekerjaan saya.",
  },
  {
    id: 3,
    label: "Informasi Organisasi",
    message: "Halo Admin SPKP-PP, saya ingin mengetahui lebih lanjut mengenai visi, misi, dan program kerja organisasi.",
  },
  {
    id: 4,
    label: "Lainnya",
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-72 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-blue-600 p-4 text-white">
            <h3 className="font-bold">Layanan Bantuan SPKP-PP</h3>
            <p className="text-xs opacity-90">Pilih topik bantuan di bawah ini:</p>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {CHAT_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSendMessage(option.message)}
                className="w-full rounded-lg p-3 text-left text-sm text-zinc-700 hover:bg-zinc-100 transition-colors border border-transparent hover:border-zinc-200 mb-1"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="border-t border-zinc-100 p-3 text-center">
            <p className="text-[10px] text-zinc-400">Respons biasanya dalam hitungan jam.</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-zinc-200 text-zinc-800 rotate-90" : "bg-green-600 text-white"
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.578 5.919L0 24l6.228-1.634a11.83 11.83 0 005.817 1.526h.005c6.636 0 12.046-5.412 12.049-12.05a11.801 11.801 0 00-3.417-8.526z" />
          </svg>
        )}
      </button>
    </div>
  );
}
