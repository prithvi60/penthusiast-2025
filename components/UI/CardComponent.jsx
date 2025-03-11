"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiFeather } from "react-icons/gi";


export const Card = ({ bgColor, data, img, title }) => {
    const [isActive, setIsActive] = useState(false);
    let timeoutId;

    // Function to handle interaction (hover/touch)
    const handleInteraction = () => {
        setIsActive(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setIsActive(false);
        }, 2000); // Timeout set between 3 to 5 seconds
    };

    const handleInteractionEnd = () => {
        setIsActive(false);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    }, []);

    return (
        <div
            className={`relative w-full h-auto min-h-[420px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-10 space-y-3 max-w-lg mx-auto pb-20 ${bgColor} 
                group lg:group-hover:active touch:hover-none`}
            onTouchStart={handleInteraction}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={handleInteraction}
            onMouseLeave={handleInteractionEnd}
        >
            <div className="size-20 overflow-hidden relative">
                <Image title="icon" src={img} alt="icon" fill className="object-contain object-center" />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold text-black">
                {title}
            </p>
            <div
                className={`z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out top-48 left-0 w-full max-h-[450px]
                    ${isActive ? 'opacity-0 lg:group-hover:opacity-0' : 'opacity-100 lg:opacity-100'}`}
            >
                <ul className="space-y-2">
                    {data.lists.map((list, idx) => (
                        <li key={idx} className="text-base lg:text-lg flex items-start gap-x-3">
                            <GiFeather className="text-base shrink-0 lg:text-lg mt-2" />
                            <h4 className="text-black">{list}</h4>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 px-8 xl:px-10 top-44 md:top-52 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-left-5 lg:group-hover:-left-5' : '-left-full'}`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider">
                    {data.tag[0].number}
                </h4>
                <p className="text-base font-bold tracking-wide">{data.tag[0].name}</p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 pr-14 pl-2.5 top-44 md:top-52 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-right-5 lg:group-hover:-right-5' : '-right-full'}`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider">
                    {data.tag[1].number}
                </h4>
                <p className="text-base font-bold tracking-wide">{data.tag[1].name}</p>
            </div>
        </div>
    );
};

export const CardClient = ({ bgColor, img, title, icon }) => {
    return (
        <div
            className={`relative w-full h-auto min-h-[150px] sm:min-h-[240px] xl:min-h-[240px] shadow-lg rounded-lg overflow-hidden space-y-3 max-w-lg mx-auto ${bgColor} 
                group lg:group-hover:active touch:hover-none`}
        >
            <div className="size-36 overflow-hidden relative top-10 left-10">
                <Image title="icon" src={icon} alt="icon" fill className="object-contain object-center" />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold px-10 py-5 text-black">
                {title}
            </p>
            <div className="w-full h-60 overflow-hidden relative px-10 pt-10">
                <Image title="icon" src={img} alt="icon" fill className="object-contain object-center" />
            </div>
        </div>
    )
}