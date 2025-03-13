"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiFeather } from "react-icons/gi";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";

export const Card = ({ bgColor, data, img, title, href }) => {
    const [isActive, setIsActive] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const router = useRouter();
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

    const handleClick = () => {
        if (isDesktop) {
            router.push(href);
        }
    };

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    useEffect(() => {
        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    }, []);

    return (
        <div
            className={`relative w-full h-auto min-h-[420px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-10 space-y-3 max-w-lg mx-auto pb-20 cursor-pointer ${bgColor} 
                group lg:group-hover:active touch:hover-none`}
            onTouchStart={handleInteraction}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={handleInteraction}
            onMouseLeave={handleInteractionEnd}
            onClick={handleClick}
        >
            <Link href={href} className="w-full h-fit flex justify-end items-center">
                <FaExternalLinkAlt className="text-xl md:text-lg" />
            </Link>
            <div className="size-20 overflow-hidden relative">
                <Image
                    title="icon"
                    src={img}
                    alt="icon"
                    fill
                    className="object-contain object-center"
                />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold text-black">
                {title}
            </p>
            <div
                className={`z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out top-48 sm:top-56 left-0 w-full max-h-[450px]
                    ${isActive ? "opacity-0 lg:group-hover:opacity-0" : "opacity-100 lg:opacity-100"}`}
            >
                <ul className="space-y-2">
                    {data.lists.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-base lg:text-lg flex items-start gap-x-3"
                        >
                            <GiFeather className="text-base shrink-0 lg:text-lg mt-2" />
                            <h3 className="text-black">{list}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 px-8 xl:px-10 top-52 sm:top-60 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-1.5
                    ${isActive ? "-left-5 lg:group-hover:-left-5" : "-left-full"}`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider font-extrabold">
                    {data.tag[0].number}
                </h4>
                <p className="text-sm font-bold tracking-wide">{data.tag[0].name}</p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 pr-14 pl-2.5 top-52 sm:top-60 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-1.5
                    ${isActive ? "-right-5 lg:group-hover:-right-5" : "-right-full"}`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider font-extrabold">
                    {data.tag[1].number}
                </h4>
                <p className="text-sm font-bold tracking-wide">{data.tag[1].name}</p>
            </div>
            {title !== "Content for B2B" && (
                <div
                    className={`absolute shadow-lg rounded-lg p-6 left-1/2 -translate-x-1/2 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-1.5
                    ${isActive ? "-bottom-5 lg:group-hover:-bottom-3" : "-bottom-full"}`}
                >
                    <h4 className="text-xl md:text-2xl tracking-wider font-extrabold">
                        {data.tag[2].number}
                    </h4>
                    <p className="text-base font-bold tracking-wide">
                        {data.tag[2].name}
                    </p>
                </div>
            )}
        </div>
    );
};

export const CardClient = ({ bgColor, img, title, icon, data, href, type, col, para }) => {
    const [isActive, setIsActive] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const router = useRouter();
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

    const handleClick = () => {
        if (isDesktop) {
            router.push(href)
        }
    }

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    useEffect(() => {
        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    }, []);
    return (
        // <Link
        //     href={href}
        //     target="_blank"
        //     className={`relative w-full h-auto min-h-[150px] sm:min-h-[240px] xl:min-h-[240px] shadow-lg rounded-lg overflow-hidden space-y-3 max-w-lg mx-auto ${bgColor}
        //         group lg:group-hover:active touch:hover-none`}
        // >
        //     <div className="size-36 overflow-hidden relative top-10 left-10">
        //         <Image
        //             title="icon"
        //             src={icon}
        //             alt="icon"
        //             fill
        //             className="object-contain object-center"
        //         />
        //     </div>
        //     <p className="text-xl sm:text-2xl xl:text-3xl font-semibold px-10 py-5 text-black">
        //         {title}
        //     </p>
        //     <div className="w-full h-60 overflow-hidden relative px-10 pt-10">
        //         <Image
        //             title="icon"
        //             src={img}
        //             alt="icon"
        //             fill
        //             className="object-contain object-center"
        //         />
        //     </div>
        // </Link>
        <div
            className={`relative w-full h-auto min-h-[520px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-6 space-y-3 max-w-sm mx-auto pb-20 cursor-pointer ${bgColor} 
                group lg:group-hover:active touch:hover-none`}
            onTouchStart={handleInteraction}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={handleInteraction}
            onMouseLeave={handleInteractionEnd}
            onClick={handleClick}
        >
            {/* <Link href={href}
                className="w-full h-fit flex justify-end items-center"
            >
                <FaExternalLinkAlt className="text-xl md:text-lg" />
            </Link> */}
            <div className={`${col ? "block space-y-2 text-center" : "flex items-center gap-3 text-start"}`}>
                <div className={`${col ? "w-full h-10" : "h-16 w-1/4 shrink-0"} overflow-hidden relative`}>
                    <Image
                        title="icon"
                        src={icon}
                        alt="icon"
                        fill
                        className="object-contain object-center w-3/4"
                    />
                </div>
                <p className="text-lg sm:text-xl xl:text-2xl mt-1.5 sm:mt-0 font-extrabold text-black">
                    {title}
                </p>
            </div>
            <div
                className={`z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out left-0 w-full max-h-[450px]
                    ${isActive ? "top-96 lg:group-hover:top-[350px]" : "top-24 sm:top-28"}`}
            >
                <div className="w-full sm:w-[340px] h-[320px] overflow-hidden relative">
                    <Image
                        title="icon"
                        src={img}
                        alt="icon"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg p-3 top-40 sm:top-36 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out ${type ? "space-y-3.5" : ""}
                    ${isActive ? "-left-1 lg:group-hover:-left-1" : "-left-full"}`}
            >
                {!type ? (
                    <>
                        <h4 className="text-2xl md:text-3xl tracking-wider font-extrabold">
                            {data[0].number}
                        </h4>
                        <p className="text-lg md:text-xl tracking-wider font-semibold text-black">
                            {data[0].name}
                        </p>
                    </>
                ) : (
                    <>
                        <div className="w-full flex justify-end items-center">
                            <MdPersonAddAlt1 className="text-xl sm:text-2xl" />
                        </div>
                        <div className="flex justify-center gap-2 items-center">
                            <h4 className="text-lg md:text-xl tracking-wider font-semibold text-black">
                                {data[0].number}
                            </h4>
                            <FaArrowRight className="text-sm sm:text-base text-black" />
                            <p className="text-2xl md:text-3xl tracking-wider font-extrabold">
                                {data[0].name}
                            </p>
                        </div>
                    </>
                )}
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-3.5 px-4.5 top-40 sm:top-36 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out
                    ${isActive ? "-right-1 lg:group-hover:-right-1" : "-right-full"}`}
            >
                {!type ? (
                    <>
                        <h4 className="text-2xl md:text-3xl tracking-wider font-extrabold">
                            {data[1].number}
                        </h4>
                        <p className="text-lg md:text-xl tracking-wider font-semibold text-black">
                            {data[1].name}
                        </p>
                    </>
                ) : (
                    <>
                        <h4 className="text-xl md:text-2xl tracking-wider font-extrabold">
                            {data[1].number}
                        </h4>
                        <p className="text-2xl md:text-3xl font-bold tracking-wide">
                            {data[1].name}
                        </p>
                    </>
                )}
            </div>
            {!type ? (
                <p
                    className={`text-sm text-[#181726] text-justify absolute transition-all transform duration-500 ease-in-out top-64 sm:top-60 left-0 w-full p-5
                    ${isActive ? "opacity-100 lg:group-hover:opacity-100" : "opacity-0 lg:opacity-0"}`}
                >
                    {para}
                </p>
            ) : (
                <>
                    <div
                        className={`absolute shadow-lg rounded-lg py-3 px-5 top-64 sm:top-64 z-20 bg-white w-[55%] transition-all transform duration-500 ease-in-out space-y-1.5
                    ${isActive ? "-left-1 lg:group-hover:-left-1" : "-left-full"}`}
                    >
                        <h4 className="text-2xl md:text-3xl tracking-wider font-extrabold">
                            {data[2].number}
                        </h4>
                        <p className="text-lg md:text-xl tracking-wider font-semibold text-black">
                            {data[2].name}
                        </p>
                    </div>
                    <div
                        className={`absolute shadow-lg rounded-lg p-3 top-64 sm:top-64 z-20 bg-white w-[45%] transition-all transform duration-500 ease-in-out space-y-1.5
                    ${isActive ? "-right-1 lg:group-hover:-right-1" : "-right-full"}`}
                    >
                        <h4 className="text-xl md:text-2xl tracking-wider font-extrabold">
                            {data[3].name}
                        </h4>
                        <p className="text-2xl md:text-3xl font-bold tracking-wide">
                            {data[3].name}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};
