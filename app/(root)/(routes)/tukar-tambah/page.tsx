import Link from "next/link";

export default function TukarTambah() {
    return (
        <div className="w-full bg-white rounded-3xl py-32" data-scroll-speed="0.5">
            <div className="px-5 lg:px-24 mb-10 gap-2 ">
                <div className="flex flex-col justify-center items-center pt-24">
                    <h1 className="text-secondary font-sf-pro-semibold text-xl lg:text-3xl lg:tracking-tight ">Maaf, Halaman sedang dalam masa pemeliharaan</h1>
                    <h1 className="text-secondary font-sf-pro-regular text-md lg:text-xl tracking-tight mb-6 lg:mb-2">
                        Klik tombol di bawah untuk melihat daftar unit yang tersedia
                    </h1>
                    <Link href="https://wa.me/6281258885800?text=Halo%20kak%2C%20saya%20dari%20website%20hpsecondepok%20ingin%20tukar%20tambah%20unit" className="bg-primary text-secondary px-6 py-3 rounded-full font-sf-pro-medium text-lg hover:bg-primary/70 transition-colors duration-300">Tukar tambah via WhatsApp</Link>
                </div>
            </div>

        </div>
    );
}

