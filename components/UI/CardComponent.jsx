"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiFeather } from "react-icons/gi";
// import { BiSolidBookContent } from "react-icons/bi";
// import { motion } from "framer-motion";

// CardComponent remains unchanged
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

export const Card = ({ bgColor, data, img, title }) => {
    const [isActive, setIsActive] = useState(false);

    // Handler for touch/click events
    const handleInteraction = () => {
        setIsActive(!isActive);
    };
    // const [isDesktop, setIsDesktop] = useState(false);

    // // Check screen size on mount and resize
    // useEffect(() => {
    //     const checkScreenSize = () => {
    //         setIsDesktop(window.innerWidth >= 768);
    //     };

    //     checkScreenSize();
    //     window.addEventListener("resize", checkScreenSize);

    //     return () => {
    //         window.removeEventListener("resize", checkScreenSize);
    //     };
    // }, []);

    // // Animation variants
    // const listVariants = {
    //     hidden: {
    //         opacity: 1,
    //         y: "10px",
    //         transition: {
    //             duration: 0.8,
    //             ease: "easeInOut",
    //         },
    //     },
    //     visible: {
    //         opacity: 1,
    //         y: "-1000px",
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeInOut",
    //         },
    //     },
    // };

    // const leftCardVariants = {
    //     hidden: {
    //         x: "-1000px",
    //     },
    //     visible: {
    //         x: "-65px",
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeInOut",
    //         },
    //     },
    // };

    // const rightCardVariants = {
    //     hidden: {
    //         x: "1000px",
    //     },
    //     visible: {
    //         x: "180px",
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeInOut",
    //         },
    //     },
    // };

    // const bottomCardVariants = {
    //     hidden: {
    //         y: "1000px",
    //     },
    //     visible: {
    //         y: "150px",
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeInOut",
    //         },
    //     },
    // };

    return (
        <div
            className={`relative w-full h-auto min-h-[420px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-10 space-y-3 max-w-lg mx-auto pb-20 ${bgColor} 
                group lg:group-hover:active touch:hover-none`}
            // onClick={handleInteraction} // For tap/click
            onTouchStart={handleInteraction} // For touch devices
        >
            <div className="size-20 overflow-hidden relative">
                <Image src={img} alt="icon" fill className="object-contain object-center" />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                {title}
            </p>
            <div
                className={`z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out top-48 left-0 w-full max-h-[450px]
                    ${isActive ? 'opacity-0' : 'opacity-100'} lg:opacity-100 lg:group-hover:opacity-0`}
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
                    ${isActive ? '-left-5' : '-left-full'} lg:group-hover:-left-5`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider">
                    {data.tag[0].number}
                </h4>
                <p className="text-base font-bold tracking-wide">{data.tag[0].name}</p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg py-6 pr-14 pl-2.5 top-44 md:top-52 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-right-5' : '-right-full'} lg:group-hover:-right-5`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider">
                    {data.tag[1].number}
                </h4>
                <p className="text-base font-bold tracking-wide">{data.tag[1].name}</p>
            </div>
            <div
                className={`absolute shadow-lg rounded-lg p-6 left-1/2 -translate-x-1/2 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3
                    ${isActive ? '-bottom-5' : '-bottom-full'} lg:group-hover:-bottom-2`}
            >
                <h4 className="text-xl md:text-2xl tracking-wider">
                    {data.tag[2].number}
                </h4>
                <p className="text-base font-bold tracking-wide">{data.tag[2].name}</p>
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
                <Image src={icon} alt="icon" fill className="object-contain object-center" />
            </div>
            <p className="text-xl sm:text-2xl xl:text-3xl font-semibold px-10 py-5">
                {title}
            </p>
            <div className="w-full h-60 overflow-hidden relative px-10 pt-10">
                <Image src={img} alt="icon" fill className="object-contain object-center" />
            </div>
        </div>
    )
}

{/* <motion.div
    className={`relative w-full h-auto min-h-[420px] sm:min-h-[540px] md:min-h-[500px] xl:min-h-[480px] shadow-lg rounded-lg overflow-hidden p-10 space-y-3 max-w-lg mx-auto lg:group-hover:active pb-20 ${bgColor} group`}
    {...(!isDesktop && {
        whileInView: "visible",
        initial: "hidden",
        viewport: { once: false, amount: 0.3 },
    })}
>
    <div className="size-20 overflow-hidden relative">
        <Image
            src={img}
            alt="icon"
            fill
            className="object-contain object-center"
        />
    </div>
    <p className="text-xl sm:text-2xl xl:text-3xl font-semibold">
        {title}
    </p>
    <div
        className="z-10 p-10 space-y-3 absolute transition-all transform duration-500 ease-in-out top-40 left-0 w-full max-h-[450px]lg:group-hover:-top-full"
    // variants={listVariants}
    >
        <ul className="space-y-2">
            {data.lists.map((list, idx) => (
                <li
                    key={idx}
                    className="text-base lg:text-lg flex items-start gap-x-3"
                >
                    <GiFeather className="text-base lg:text-lg mt-2" />
                    <h4 className="text-black">{list}</h4>
                </li>
            ))}
        </ul>
    </div>
    <motion.div
        className="absolute shadow-lg rounded-lg py-6 pr-6 pl-10 top-44 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3 lg:group-hover:-left-5"
        variants={leftCardVariants}
    >
        <h4 className="text-xl md:text-2xl tracking-wider">
            {data.tag[0].number}
        </h4>
        <p className="text-base font-bold tracking-wide">{data.tag[0].name}</p>
    </motion.div>
    <motion.div
        className="absolute shadow-lg rounded-lg py-6 pr-10 pl-6 top-44 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3 lg:group-hover:-right-5"
        variants={rightCardVariants}
    >
        <h4 className="text-xl md:text-2xl tracking-wider">
            {data.tag[1].number}
        </h4>
        <p className="text-base font-bold tracking-wide">{data.tag[1].name}</p>
    </motion.div>
    <motion.div
        className="absolute shadow-lg rounded-lg p-6 left-1/2 -translate-x-1/2 z-20 bg-white w-1/2 transition-all transform duration-500 ease-in-out space-y-3 lg:group-hover:-bottom-5"
        variants={bottomCardVariants}
    >
        <h4 className="text-xl md:text-2xl tracking-wider">
            {data.tag[2].number}
        </h4>
        <p className="text-base font-bold tracking-wide">{data.tag[2].name}</p>
    </motion.div>
</motion.div> */}