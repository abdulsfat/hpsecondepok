import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/app/_layouts";
import { faqItems } from "@/data/faqItems";

const SITE_URL = "https://www.hpsecondepok.co.id";
const SITE_NAME = "HP Second Depok";
const DESCRIPTION =
  "Jual beli dan tukar tambah iPhone & HP second di Depok. Unit dicek transparan, bisa COD se-Jabodetabek. Chat admin via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HP Second Depok – Jual Beli & Tukar Tambah iPhone Second di Depok",
    template: "%s | HP Second Depok",
  },
  description: DESCRIPTION,
  keywords: [
    "hp second depok",
    "iphone second depok",
    "jual iphone second depok",
    "tukar tambah iphone depok",
    "jual hp bekas depok",
    "hpsecondepok",
    "COD iphone depok",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "HP Second Depok – Jual Beli & Tukar Tambah iPhone Second",
    description: DESCRIPTION,
    images: [{ url: "/images/feature-beli.jpg" }],
  },
  robots: { index: true, follow: true },
  // Isi kode dari Google Search Console kalau verifikasi pakai metode "HTML tag"
  // verification: { google: "KODE_VERIFIKASI_DARI_SEARCH_CONSOLE" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  name: SITE_NAME,
  alternateName: "hpsecondepok",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-hs.svg`,
  image: `${SITE_URL}/images/feature-beli.jpg`,
  description: DESCRIPTION,
  telephone: "+6281258885800",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kelapa Dua, Depok",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  areaServed: ["Depok", "Jakarta", "Bogor", "Tangerang", "Bekasi"],
  sameAs: [
    "https://www.instagram.com/hpsecondepok_",
    "https://www.tiktok.com/@hpsecondepok",
    "https://www.youtube.com/@hpsecondepokk",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/\*\*/g, "") },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-general-sans antialiased bg-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
