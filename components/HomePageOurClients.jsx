"use client"
import { domains, ourClients } from "@/utils/Data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HomePageOurClients = () => {
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsActive((prev) => {
                // If we've reached the end of domains array, go back to 0
                if (prev >= domains.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full padding flex flex-col mx-auto max-w-7xl md:flex-row gap-10">
            <div className="w-full md:w-2/4 block space-y-5 md:space-y-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">
                    Domains Covered
                </h2>
                <div className="w-full space-y-5">
                    {domains.map((list, idx) => (
                        <h4
                            key={idx}
                            className={`rounded-lg border transition-colors transform border-text px-10 py-3.5 text-lg lg:text-xl max-w-64 mx-auto text-center duration-700 ease-in-out ${isActive === idx
                                ? "bg-linear-to-r from-text to-green-darker text-white shadow-xl scale-110"
                                : "bg-white text-black"
                                }`}
                        >
                            {list}
                        </h4>
                    ))}
                </div>
            </div>
            <div className="w-full h-full space-y-5 md:space-y-10 md:w-3/4 ">
                <div className="w-full">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center sm:text-start">
                        Trusted by our clients and associations
                    </h2>
                </div>
                <div className="w-full relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 place-content-center place-items-center sm:before:top-0 md:before:-left-4 lg:before:-left-8 xl:before:-left-16 sm:before:h-full sm:before:w-1 sm:before:bg-[#E4E4E4] sm:before:absolute">
                    {ourClients.map((item, idx) => (
                        <div key={idx} className="size-36 lg:size-40 relative overflow-hidden">
                            <Image
                                // width={300}
                                // height={300}
                                fill
                                alt={item.alt}
                                src={item.logo}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePageOurClients;
