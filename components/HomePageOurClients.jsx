"use client"
import { domains, ourClients } from "@/utils/Data";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const HomePageOurClients = () => {
    const [isActive, setIsActive] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    // Handle auto-cycling only when in view
    useEffect(() => {
        if (!isInView) return; // Pause cycling when not in view

        const timer = setInterval(() => {
            setIsActive((prev) => {
                return prev >= domains.length - 1 ? 0 : prev + 1;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [isInView])

    // Detect if component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.8 }
        );

        const currentRef = containerRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    // Scroll to active element when in view
    useEffect(() => {
        if (isInView && scrollRef.current) {
            const activeElement = scrollRef.current.children?.[isActive];
            if (activeElement) {
                try {
                    activeElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                } catch (error) {
                    console.error("Error during scrollIntoView:", error);
                }
            }
        }
    }, [isActive, isInView]);

    return (
        <section className="w-full padding flex flex-col mx-auto max-w-[1536px] md:flex-row gap-10">
            <div ref={containerRef} className="w-full md:w-2/4 block space-y-5 md:space-y-10">
                <h1 className="text-2xl md:text-3xl font-semibold text-center">
                    Domains Covered
                </h1>
                <div className="w-full space-y-5 max-h-[320px] md:max-h-[450px] no_scrollbar overflow-hidden">
                    <div ref={scrollRef} className="space-y-5 pb-20">
                        {domains.map((list, idx) => (
                            <h2
                                key={idx}
                                className={`rounded-lg border transition-colors transform border-text px-10 py-3.5 text-lg lg:text-xl max-w-64 mx-auto text-center duration-700 ease-in-out ${isActive === idx
                                    ? "bg-gradient-to-r from-text to-green-darker text-white shadow-xl scale-110"
                                    : "bg-white text-black"
                                    }`}
                            >
                                {list}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-full space-y-5 md:space-y-10 md:w-3/4 ">
                <div className="w-full">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center sm:text-start">
                        Trusted by our clients and associations
                    </h3>
                </div>
                <div className="w-full relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-3.5 gap-x-0 md:gap-10 place-content-center place-items-center sm:before:top-0 md:before:-left-4 lg:before:-left-8 xl:before:-left-16 sm:before:h-full sm:before:w-1 sm:before:bg-[#E4E4E4] sm:before:absolute">
                    {ourClients.map((item, idx) => (
                        <div key={idx} className="w-24 h-12 lg:w-36 lg:h-20 relative overflow-hidden">
                            <Image
                                title={item.alt}
                                fill
                                alt={item.alt}
                                src={item.logo}
                                className="object-contain object-center"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePageOurClients;
