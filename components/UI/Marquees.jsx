"use client";
import { heroMarquee, ourClients, reviews } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Gradient } from "./Gradient";

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


export const OurClientsReviews = () => {
    return (
        <div className="padding w-full relative">
            <Gradient rotate />
            <Marquee pauseOnHover speed={50} autoFill className="">
                {reviews.map((item, idx) => (
                    <div key={idx} className="flex gap-8 shadow-lg p-5 rounded-lg max-w-sm sm:max-w-md md:max-w-xl m-5 bg-white">
                        {/* <Image src={""} alt="" width={150} height={150} className="rounded-full" /> */}
                        <div className="rounded-full bg-gray-300 size-20 shrink-0" />
                        <div className="space-y-3.5">
                            <p className="text-sm">{item.review}</p>
                            <div>
                                <h4 className="text-base md:text-lg">{item.name}</h4>
                                <p className="text-base md:text-lg text-[#848484]">{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}