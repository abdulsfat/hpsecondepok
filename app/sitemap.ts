import type { MetadataRoute } from "next";

const SITE_URL = "https://hpsecondepok.id";

// Halaman /produk, /jual, /tukar-tambah sengaja belum dimasukkan karena masih
// "dalam pemeliharaan". Tambahkan di sini setelah kontennya sudah diisi.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
