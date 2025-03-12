"use client";
import { reviews } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Gradient } from "./Gradient";


export const OurClientsReviews = () => {
    return (
        <div className="padding w-full relative">
            <Gradient rotate />
            <Marquee pauseOnHover speed={50} autoFill className="!overflow-hidden">
                {reviews.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-8 shadow-lg p-5 rounded-lg max-w-sm sm:max-w-md md:max-w-xl h-[450px] md:h-72 m-5 bg-white">
                        <div className="size-20 sm:size-24 shrink-0 relative overflow-hidden">
                            <Image title="icon" src={item.avatar} alt="icon" fill className={`rounded-full object-contain border-2 border-green-lighter shadow-lg object-center p-1 ${item.name === "XYMA" && "bg-green-darker"}`} />
                        </div>
                        <div className="space-y-3.5 flex flex-col justify-between h-full items-start">
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