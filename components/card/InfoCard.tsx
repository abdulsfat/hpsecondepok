import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    bgClass?: string;
    textClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
                                               icon: Icon,
                                               title,
                                               description,
                                               bgClass = "bg-gray-100",
                                               textClass = "text-black",
                                           }) => {
    return (
        <div
            className={`flex flex-col ${bgClass} ${textClass} p-7 rounded-3xl w-80 min-h-[320px] 
                        transform transition-transform duration-500 hover:scale-[1.02]  
                        will-change-transform overflow-visible`}
        >
            <Icon strokeWidth={1} size={42} />
            <h1 className="font-sf-pro-semibold text-3xl my-3">{title}</h1>
            <p className="text-lg font-sf-pro mt-2 leading-tight mb-12">{description}</p>
        </div>
    );
};

export default InfoCard;
