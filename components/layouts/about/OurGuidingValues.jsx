import { ourGuides } from "@/utils/Data";
import React from "react";
import { GiFeather } from "react-icons/gi";

const OurGuidingValues = () => {
    return (
        <section className="padding w-full h-full space-y-5 md:space-y-10">
            <h2 className="text-3xl sm:text-5xl text-center lg:text-6xl font-bold">
                Our Guiding Values
            </h2>
            <div className="w-full gap-6 lg:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr max-w-[1520px] mx-auto">
                {ourGuides.map((guide, index) => (
                    <div
                        key={index}
                        className={`w-full h-full flex flex-col justify-between items-start shadow-lg p-5 rounded-lg bg-linear-to-b from-text to-green-darker text-white space-y-4`}
                    >
                        <div className="flex gap-2 flex-grow">
                            <GiFeather className="text-base shrink-0 lg:text-lg mt-1 text-green-light" />
                            <p className="">{guide.desc}</p>
                        </div>
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