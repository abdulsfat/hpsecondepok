// app/data/unitItems.ts

export interface UnitItem {
    id: number;
    image?: string; // URL gambar unit, bisa opsional jika tidak ada gambar
    title: string; // Judul unit, biasanya nama model
    brand: "apple" | "samsung"; // Merek dari unit, misalnya "Apple", "Samsung", dll.
    model: string;  // Model dari unit, misalnya "iPhone 12", "Galaxy S21", dll.
    storage: "128GB" | "256GB" | "64GB" | "512GB"; // Kapasitas penyimpanan unit,
    ram: "4GB" | "6GB" | "8GB"; // Kapasitas RAM unit, jika relevan
    color: string;
    kelengkapan: "fullset" | "box only"; // Kelengkapan unit, apakah fullset, hanya unit, atau hanya box
    garansi_tipe: 'iBox' | 'GDN' | 'Digimap' | 'Beacukai' | 'SEIN';
    garansi_berlaku_sampai?: string | null;
    truetone: boolean;
    face_id?: boolean;
    battery_health?: number;
    battery_original?: 'original' | 'replacement'; // Status baterai, apakah original atau non-original
    kamera_depan_bersih?: boolean;
    kamera_belakang_bersih?: boolean;
    speaker_atas_jernih?: boolean;
    speaker_bawah_jernih?: boolean;
    minus: string | "Tidak ada minus"; // Deskripsi minus unit, jika ada
    price: number;
    catatan_tambahan?: string ; // Catatan tambahan tentang unit, bisa berupa kondisi, tips, atau informasi lain
}

export const unitItems: UnitItem[] = [
    {
        id: 1,
        title: "iPhone 12",
        brand: "apple",
        model: "iPhone 12",
        storage: "128GB",
        ram: "4GB",
        color: "Black",
        kelengkapan: "fullset",
        garansi_tipe: "iBox",
        garansi_berlaku_sampai: "2025-11-01",
        truetone: true,
        face_id: true,
        battery_health: 99,
        battery_original: 'original',
        kamera_depan_bersih: true,
        kamera_belakang_bersih: true,
        speaker_atas_jernih: true,
        speaker_bawah_jernih: true,
        minus: "Backglass pemakaian softcase sajanikaa😇",
        price: 6400000,
    },
];
