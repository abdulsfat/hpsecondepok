import type { Metadata } from "next";
import "./globals.css";
import {MainLayout} from "@/app/_layouts";


export const metadata: Metadata = {
  title: "Hpsecondepok",
  description: "Jual beli tukar tambah hp second depok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className="font-general-sans antialiased bg-gray-100"
      >
      <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
