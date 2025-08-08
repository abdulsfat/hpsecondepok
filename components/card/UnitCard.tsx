import React from "react";
import Image from "next/image";
import {UnitItem} from "@/data/unit_items";


const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);

const UnitCard: React.FC<UnitItem> = ({
                                               image,
                                               title,
                                               brand,
                                               storage,
                                               battery_health,
                                               color,
                                               price,
                                               garansi_tipe,
                                           }) => {
    return (
        <div className="group cursor-pointer">
            <div
                className="bg-gray-100  transition-transform duration-500 group-hover:brightness-95 group-hover:shadow-md rounded-2xl w-80 py-2 px-4">
                {/* Header */}
                <div className="flex justify-between items-center pt-2">
                    <div className="rounded-full text-secondary/70 text-md font-sf-pro-medium">
                        {garansi_tipe}
                    </div>
                    <div className="h-6 w-6 text-white relative">
                        <Image
                            src={brand === "apple" ? "/images/brand/apple.svg" : "/images/brand/samsung.svg"}
                            alt={brand}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex justify-center items-start flex-col mt-5">
                    <h1 className="text-secondary text-3xl font-sf-pro-semibold mb-2">{title}</h1>
                    <div className=" mb-4 overflow-hidden w-full h-auto flex justify-center items-center">
                        <Image
                            width={200}
                            height={200}
                            src={image ?? "/images/default.jpg"}
                            alt={title}
                            className="object-cover h-full w-auto  "
                        />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col  justify-center">
                        <div className="font-sf-pro-medium text-md text-secondary">
                            Storage : {" "}
                            <span className="font-sf-pro-regular text-sm text-secondary/70">
                                {storage}
                            </span>
                        </div>
                        <div className="font-sf-pro-medium text-md text-secondary">
                            Battery Health : {" "}
                            <span className="font-sf-pro-regular text-sm text-secondary/70">
                                {battery_health}%
                            </span>
                        </div>
                        <div className="font-sf-pro-medium text-md text-secondary">
                            Color : {" "}
                            <span className="font-sf-pro-regular text-sm text-secondary/70">
                                {color}
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <h1 className="text-secondary text-xl font-extrabold mt-3">
                        {formatRupiah(price)}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default UnitCard;
