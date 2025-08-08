import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InfoCard from "@/components/card/InfoCard";
import { whyItems } from "@/data/why_items";

export default function WhySection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -320 : 320,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="mb-28 ">
            <div className="px-5 lg:px-24 mt-10 mb-6">
                <hr className="border-secondary/30" />
            </div>

            <div className="mt-12 lg:mt-24 mb-12 lg:mb-20 flex justify-between items-center  px-5 lg:px-24">
                <div>
                    <h1 className="text-secondary font-sf-pro-semibold text-4xl lg:text-[3.3rem]">
                        Mengapa Hpsecondepok adalah <br />
                        tempat terbaik untuk anda?
                    </h1>
                </div>
            </div>

            {/* SCROLLABLE CONTAINER */}
            <div
                ref={scrollRef}
                className=" relative flex gap-6   overflow-x-auto overflow-y-visible  scroll-smooth snap-x snap-mandatory no-scrollbar py-10 "
            >
                {whyItems.map((item, index) => (
                    <div
                        key={index}
                        className={`snap-start shrink-0 h-full
                          ${index === 0 ? "ps-6 lg:ps-24" : ""}
                          ${index === whyItems.length - 1 ? "pe-12" : ""}
                        `}
                    >
                        <InfoCard
                            icon={item.icon}
                            title={item.title}
                            description={item.desc}
                        />
                    </div>
                ))}
            </div>

            {/* BUTTON CONTROLS */}
            <div className="flex gap-3 justify-end px-5 lg:px-24">
                <button
                    onClick={() => scroll("left")}
                    className="bg-primary rounded-full"
                >
                    <ChevronLeft className="text-white h-10 w-10 p-2" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="bg-primary rounded-full"
                >
                    <ChevronRight className="text-white h-10 w-10 p-2" />
                </button>
            </div>
        </section>
    );
}
