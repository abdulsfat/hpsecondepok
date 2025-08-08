import Link from "next/link";

export default function Produk() {
    return (
        <div className="w-full bg-white rounded-3xl pb-32" data-scroll-speed="0.5">
            <div className="px-5 lg:px-24 pt-24 flex  justify-between items-start font-sf-pro mb-32">
                <div>
                    <h1 className="text-secondary font-sf-pro-semibold text-4xl tracking-tight ">Daftar unit yang
                        tersedia </h1>
                    <p className="text-secondary/70 mb-3 text-xl mt-3">Temukan berbagai pilihan unit berkualitas dengan
                        harga
                        terjangkau,<br/> siap untuk Anda beli atau tukar tambah.</p>

                </div>
                {/*<div className='text-end leading-none'>*/}
                {/*    <h1 className="text-secondary font-sf-pro-medium text-lg tracking-tight ">Diperbaharui pada:</h1>*/}
                {/*    <h1 className="text-secondary/70 font-sf-pro-regular text-xs tracking-tight mt-1">08 Agustus 2025,*/}
                {/*        13:00</h1>*/}
                {/*</div>*/}
            </div>
            <div className="px-5 lg:px-24 mb-10 gap-2">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-secondary font-sf-pro-semibold text-xl lg:text-3xl lg:tracking-tight ">Maaf,
                        Halaman sedang dalam masa pemeliharaan</h1>
                    <h1 className="text-secondary font-sf-pro-regular text-md lg:text-xl tracking-tight mb-6 lg:mb-2">
                        Klik tombol di bawah untuk melihat daftar unit yang tersedia
                    </h1>
                    <Link
                        href="https://wa.me/6281258885800?text=Halo%20kak%2C%20saya%20dari%20website%20hpsecondepok%20ingin%20melihat%20unit%20yang%20sedang%20ready%20saat%20ini"
                        className="bg-primary text-secondary px-6 py-3 rounded-full font-sf-pro-medium text-lg hover:bg-primary/70 transition-colors duration-300"> Katalog
                        Ready Stock</Link>
                </div>
            </div>
            {/*<div className="flex justify-center items-center">*/}
            {/*    <div className="text-secondary mb-10 flex flex-col w-max p-1 lg:flex-row justify-center items-center rounded-full bg-secondary gap-1 duration-300 transition-colors font-sf-pro-medium text-lg">*/}
            {/*        <button className="px-4 bg-gray-100 rounded-full ">All Items</button>*/}
            {/*        <button className="px-4 text-gray-100 rounded-full hover:bg-gray-100/20 duration-300 transition-colors  ">Apple</button>*/}
            {/*        <button className="px-4 text-gray-100 rounded-full hover:bg-gray-100/20 duration-300 transition-colors ">Samsung</button>*/}
            {/*        <button className="px-4 text-gray-100 rounded-full hover:bg-gray-100/20 duration-300 transition-colors ">Aksesoris</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="px-5 lg:px-24">*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-32">*/}
            {/*        {unitItems.map((item) => (*/}
            {/*            <UnitCard*/}
            {/*                key={item.id}*/}
            {/*                id={item.id}*/}
            {/*                image="/display.png"*/}
            {/*                title={item.title}*/}
            {/*                model={item.title}*/}
            {/*                ram={item.ram}*/}
            {/*                brand={item.brand}*/}
            {/*                truetone={item.truetone}*/}
            {/*                storage={item.storage}*/}
            {/*                kelengkapan={item.kelengkapan}*/}
            {/*                battery_health={item.battery_health}*/}
            {/*                color={item.color}*/}
            {/*                price={item.price}*/}
            {/*                minus={item.minus}*/}
            {/*                garansi_tipe={item.garansi_tipe}*/}
            {/*                battery_original={item.battery_original}/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}

