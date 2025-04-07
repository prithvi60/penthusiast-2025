"use client";
import { reviews } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Gradient } from "./Gradient";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export const OurClientsReviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="padding w-full relative">
            <Gradient rotate />
            <div className="w-full relative max-w-7xl mx-auto slider-container">
                <Slider {...settings} className="explore-slider">
                    {reviews.map((item, idx) => (
                        <div key={idx} className="!flex items-start gap-8 shadow-lg p-5 rounded-lg w-full h-[300px] my-8 bg-white">
                            <div className="w-[25%] md:w-1/5">
                                <div className="size-20 sm:size-24 shrink-0 relative overflow-hidden">
                                    <Image title="icon" src={item.avatar} alt="icon" fill className={`rounded-full object-contain border-2 border-text object-center p-1 ${item.name === "XYMA" && "bg-green-darker"}`} />
                                </div>
                            </div>
                            <div className="space-y-3.5 flex flex-col justify-between h-full items-start w-[75%] md:w-4/5">
                                <div className="max-h-40 overflow-y-scroll no_scrollbar">
                                    <p className="text-sm">{item.review}</p>
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg">{item.name}</h4>
                                    <p className="text-base md:text-lg text-[#848484]">{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker absolute -bottom-12 md:bottom-1/2 cursor-pointer hover:opacity-80 right-32 md:-right-10 xl:-right-16 group"
            }
            onClick={onClick}
        >
            <FaArrowRight className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker absolute -bottom-12 md:bottom-1/2 cursor-pointer left-32 hover:opacity-80 md:-left-10 xl:-left-16 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}