"use client";
import { heroMarquee, ourClients } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const HeroMarquee = () => {
    return (
        <Marquee pauseOnHover speed={50} autoFill className="no_scrollbar">
            {heroMarquee.map((item, idx) => (
                <h5
                    key={idx}
                    className="text-white font-extrabold tracking-wider text-base sm:text-xl md:text-2xl lg:text-3xl px-3.5 md:px-5"
                >
                    {item}
                </h5>
            ))}
        </Marquee>
    );
};

export const OurClientsMarquee = () => {
    return (
        <Marquee pauseOnHover speed={50} autoFill className="no_scrollbar">
            {ourClients.map((item, idx) => (
                <Image
                    key={idx}
                    width={250}
                    height={250}
                    alt={item.alt}
                    src={item.logo}
                    className="px-3.5 md:px-5"
                />
            ))}
        </Marquee>
    );
};
