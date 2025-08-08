"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {ChevronDown, ChevronRight, ChevronUp} from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Jual handphone",
        content: `Jual HP bekas kamu dengan mudah dan cepat. Cukup isi form, tim kami akan hubungi via WhatsApp. Transaksi aman, harga bersaing.`,
        image: "/images/feature-jual.jpg",
        link: "/jual-hp",
    },
    {
        title: "Beli handphone",
        content: `Cari HP impianmu? Semua unit sudah dicek dan bergaransi. Bisa cek kondisi, tanya ke admin langsung, dan COD/antar sesuai kota.`,
        image: "/images/feature-beli.jpg",
        link: "/produk",
    },
    {
        title: "Tukar Tambah",
        content: `Ingin upgrade HP? Tukarkan HP lamamu dan hanya bayar selisihnya. Proses cepat, praktis, dan transparan.`,
        image: "/images/feature-tukar.jpg",
        link: "/tukar-tambah",
    },
];

export default function FeatureSection() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="relative overflow-hidden px-5 lg:px-24">
            <div className="relative bg-gray-100 h-[40rem] py-16 lg:py-32 px-6 lg:px-32 rounded-3xl z-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-16 justify-start items-center relative z-10">
                    {/* LEFT */}
                    <div className="w-full lg:w-[35%] ">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`py-4 transition-all ${
                                    index !== 0 ? "border-t mb-2 border-gray-300" : ""
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className="w-full text-left flex justify-between items-center text-3xl font-sf-pro-medium text-gray-800 my-4"
                                >
                                    {feature.title}
                                    <span>{activeIndex === index ? <ChevronUp className="text-black/40 h-8 w-8 "/> : <ChevronDown className="text-black/40 h-8 w-8 "/>}</span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{height: 0, opacity: 0}}
                                            animate={{height: "auto", opacity: 1}}
                                            exit={{height: 0, opacity: 0}}
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                            className="overflow-hidden text-gray-600 text-lg font-sf-pro-medium leading-6"
                                        >
                                            {feature.content}
                                            <Link href={feature.link} passHref>
                                                    <div
                                                        className="mt-4 hover:text-secondary/70 text-secondary font-sf-pro-regular text-[0.99rem]  transition-colors duration-300 flex justify-start items-center cursor-pointer"
                                                    >
                                                        <span>
                                                            {feature.title}
                                                        </span>
                                                        <span>
                                                            <ChevronRight className="h-4 w-4" />
                                                        </span>
                                                    </div>

                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* IMAGE OUTSIDE CONTAINER */}
                <div className="hidden lg:block absolute -right-12 top-1/2 bg-primary -translate-y-1/2 max-w-[80%] z-0">
                    <Image
                        src={features[activeIndex].image}
                        alt={features[activeIndex].title}
                        width={900}
                        height={900}
                        className="w-[750px] h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
