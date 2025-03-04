import { contentSolutions } from "@/utils/Data";
import Image from "next/image";
import React from "react";

const ContentSolutions = () => {
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8">
            <h2 className="text-3xl sm:text-5xl text-center lg:text-6xl font-bold">
                Content Solutions for Impactful B2B Communication
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {contentSolutions.map((content, index) => (
                    <div key={index} className="flex items-center gap-x-5 p-4 group hover:rounded-lg hover:bg-white hover:shadow-lg transition-all transform duration-500 ease-in-out">
                        <div className="p-3 shrink-0 rounded-lg group-hover:bg-linear-to-r group-hover:from-green-light group-hover:to-white transition-colors transform duration-500 ease-in-out">
                            <Image
                                src={content.icon}
                                alt="icon"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-lg sm:text-xl font-semibold">
                            {content.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContentSolutions;
