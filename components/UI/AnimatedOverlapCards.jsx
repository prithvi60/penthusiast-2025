import { timeline } from "@/utils/Data";
import React from "react";

const AnimatedOverlapCards = () => {
    return (
        <div className="padding w-full h-auto relative flex gap-10 flex-col lg:flex-row items-start">
            {/* Left Section */}
            <div className="w-full lg:w-2/5 space-y-2 lg:sticky lg:top-40 block text-center lg:text-start z-10">
                <h4 className="text-sm">Our Journey</h4>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                    From a small idea to a content powerhouse, step by step.
                </h3>
            </div>

            {/* Timeline Cards */}
            <div className="w-full lg:w-3/5">
                <div className="h-[420vh] lg:h-[400vh] space-y-10">
                    {timeline.map((item, idx) => {
                        // const topPosition = `calc(${idx * timeline.length}% + ${idx * timeline.length}px)`;
                        return (
                            <div
                                key={idx}
                                className="sticky w-full max-w-xl mx-auto p-1 bg-white rounded-lg shadow-lg h-fit 
                                        z-0 top-40"
                            // style={{
                            //     top: 0,
                            // }}
                            >
                                <div className="p-10 bg-[#00808012]">
                                    <h4 className="text-3xl tracking-widest font-semibold sm:text-4xl lg:text-6xl">
                                        {item.year}
                                    </h4>
                                    <div className="space-y-3">
                                        <h5 className="text-xl tracking-wide font-semibold sm:text-2xl lg:text-3xl">
                                            {item.title}
                                        </h5>
                                        <ul className="list-disc list-inside">
                                            {item.lists.map((list, id) => (
                                                <li key={id} className="text-base md:text-lg">
                                                    {list}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AnimatedOverlapCards;
