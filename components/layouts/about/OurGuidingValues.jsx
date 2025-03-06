import { ourGuides } from "@/utils/Data";
import React from "react";

const OurGuidingValues = () => {
    return (
        <section className="padding w-full h-full space-y-5 md:space-y-10">
            <h2 className="text-3xl sm:text-5xl text-center lg:text-6xl font-bold">
                Our Guiding Values
            </h2>
            <div className="w-full text-white gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {ourGuides.map((guide, index) => (
                    <div
                        key={index}
                        className="w-full h-60 lg:h-[260px] xl:h-60 flex flex-col justify-between items-start shadow-lg p-5 rounded-lg bg-linear-to-b from-green-light to-green-darker"
                    >
                        <p>{guide.desc}</p>
                        <h5 className="font-extrabold tracking-wider text-lg sm:text-xl lg:text-2xl">
                            {guide.title}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurGuidingValues;
