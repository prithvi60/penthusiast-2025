"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiFeather } from "react-icons/gi";
import { BiSolidBookContent } from "react-icons/bi";
export const CardComponent = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 space-y-3 md:space-y-6">
            <div className="bg-zinc-300 w-full h-32"></div>
            <div className="p-4 space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                    Content for B2B
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li className="text-base lg:text-lg">Website Landing Page Content</li>
                    <li className="text-base lg:text-lg">Landing page copywriting</li>
                    <li className="text-base lg:text-lg">Blog Writing</li>
                    <li>LinkedIn Content Creation for Founders</li>
                </ul>
                <button className="mt-8 hover:scale-90 transition-all transform duration-500 ease-in-out">
                    <Link href={"#"} className="p-3 rounded-lg border text-sm">
                        Learn more
                    </Link>
                </button>
            </div>
        </div>
    );
};

export const Card = ({ bgColor, data, img }) => {
    const [isActive, setIsActive] = useState(false);

    // Handler for touch/click events
    const handleInteraction = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`relative w-full h-auto min-h-[420px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-10 space-y-3 max-w-lg mx-auto pb-20 ${bgColor} 
                group md:group-hover:active touch:hover-none`}
            // onClick={handleInteraction} // For tap/click
            onTouchStart={handleInteraction} // For touch devices
        >
            <div className="size-20 overflow-hidden relative">
                <Image src={img} alt="icon" fill className="object-contain object-center" />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                Content for B2B
            </p>
            <div
                className={`z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out top-40 left-0 w-full max-h-[450px]
                    ${isActive ? 'opacity-0' : 'opacity-100'} md:group-hover:-top-full`}
            >
                <ul className="space-y-2">
                    {data.map((list, idx) => (
                        <li key={idx} className="text-base lg:text-lg flex items-start gap-x-3">
                            <GiFeather className="text-base lg:text-lg mt-2" />
                            <h4 className="text-black">{list}</h4>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 pr-6 pl-10 top-44 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-left-5' : '-left-full'} md:group-hover:-left-5`}
            >
                <BiSolidBookContent className="text-3xl md:text-4xl" />
                <p className="text-base font-bold tracking-wide">
                    Website Content
                </p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 pr-10 pl-6 top-44 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-right-5' : '-right-full'} md:group-hover:-right-5`}
            >
                <BiSolidBookContent className="text-3xl md:text-4xl" />
                <p className="text-base font-bold tracking-wide">
                    Website Content
                </p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg p-6 left-1/2 -translate-x-1/2 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-bottom-5' : '-bottom-full'} md:group-hover:-bottom-5`}
            >
                <BiSolidBookContent className="text-3xl md:text-4xl" />
                <p className="text-base font-bold tracking-wide">
                    Website Content
                </p>
            </div>
        </div>
    );
};