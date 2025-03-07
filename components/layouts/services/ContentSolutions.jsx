"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContentSolutions = ({ title, data }) => {
    const [isActive, setIsActive] = useState(0);
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8">
            <h2 className="text-3xl sm:text-5xl text-center leading-16 lg:text-6xl font-bold w-full lg:w-4/5 mx-auto">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto place-content-center">
                {data.map((content, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-x-5 p-4 group hover:rounded-lg hover:bg-white hover:shadow-lg transition-all transform duration-500 ease-in-out ${isActive === index && "rounded-lg bg-white shadow-lg"}`}
                        onClick={() => setIsActive(index)}
                    >
                        <div
                            className={`p-3 shrink-0 rounded-lg group-hover:bg-linear-to-bl group-hover:from-white group-hover:via-white/80 group-hover:to-green-light transition-colors transform duration-500 ease-in-out ${isActive === index && "bg-linear-to-bl from-white via-white/80 to-green-light"}`}
                        >
                            <Image src={content.icon} alt="icon" width={70} height={70} />
                        </div>
                        <p className="text-lg sm:text-xl font-semibold">{content.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContentSolutions;
