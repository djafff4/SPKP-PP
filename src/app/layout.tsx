import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SPKP-PP | Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila",
    template: "%s | SPKP-PP",
  },
  description:
    "SPKP-PP (Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila) berdedikasi tinggi dalam menegakkan supremasi hak-hak pekerja dan menjamin keadilan sosial bagi insan profesi kelautan Indonesia.",
  keywords: ["SPKP-PP", "Serikat Pekerja", "Kelautan", "Perikanan", "Perisai Pancasila", "Buruh Indonesia", "Kesejahteraan Pekerja"],
  authors: [{ name: "SPKP-PP" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://spkp-pp.or.id",
    siteName: "SPKP-PP",
    title: "SPKP-PP | Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila",
    description: "Memperjuangkan kedaulatan dan kesejahteraan pekerja kelautan Indonesia.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SPKP-PP",
  "alternateName": "Serikat Pekerja Kelautan dan Perikanan Perisai Pancasila",
  "url": "https://spkp-pp.or.id",
  "logo": "https://spkp-pp.or.id/logo.jpeg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-822-9974-8232",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": "Indonesian"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Pala Barat. 8 No.1512, Griya Mejasem Baru",
    "addressLocality": "Tegal",
    "addressRegion": "Jawa Tengah",
    "postalCode": "52181",
    "addressCountry": "ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
