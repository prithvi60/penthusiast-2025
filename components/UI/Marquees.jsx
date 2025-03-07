"use client";
import { heroMarquee, ourClients, reviews } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Gradient } from "./Gradient";


export const OurClientsReviews = () => {
    return (
        <div className="padding w-full relative">
            <Gradient rotate />
            <Marquee pauseOnHover speed={50} autoFill className="">
                {reviews.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-8 shadow-lg p-5 rounded-lg max-w-sm sm:max-w-md md:max-w-xl h-fit m-5 bg-white">
                        <div className="size-14 sm:size-16 shrink-0 relative overflow-hidden">
                            <Image src={item.avatar} alt="" fill className="rounded-full object-cover object-center" />
                        </div>
                        {/* <div className="rounded-full bg-gray-300 size-20 shrink-0" /> */}
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