import React from "react";
import Image from "next/image";

interface TestimoniCardProps {
    image: string;
    name: string;
    content: string;
}

const TestimoniCard: React.FC<TestimoniCardProps> = ({image, name, content}) => {
    return (
        <div className="relative w-[350px] h-[550px] rounded-3xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]
                        will-change-transform">
            {/* Background Image */}
            <Image
                src={image}
                alt={`Foto ${name}`}
                fill
                className="object-cover object-bottom rounded-3xl "
                priority
            />

            {/* BOTTOM BLUR */}
            <div className="absolute bottom-0 left-0 w-full h-28 backdrop-blur-xl z-10"/>
            {/*<div className="absolute bottom-0 left-0 w-full h-full backdrop-blur-xl z-10"/>*/}

            {/* Content on top of blur */}
            <div
                className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center text-center px-6 pb-6 text-white">
                <h2 className="text-lg font-sf-pro-medium">{name}</h2>
                <p className="text-sm font-sf-pro-light line-clamp-3 leading-tight my-1">{content}</p>
            </div>
        </div>
    );
};

export default TestimoniCard;
