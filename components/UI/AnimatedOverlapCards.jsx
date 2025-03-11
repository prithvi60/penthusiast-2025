import { timeline } from "@/utils/Data";
import React from "react";
import { GiFeather } from "react-icons/gi";

const AnimatedOverlapCards = () => {
    return (
        <div className="padding w-full h-auto relative flex gap-10 flex-col lg:flex-row items-start">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 space-y-2 lg:sticky lg:top-40 block text-center lg:text-start z-10">
                <h4 className="text-sm">Our Journey</h4>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                    From a small idea to a content powerhouse, step by step.
                </h3>
            </div>

            {/* Timeline Cards */}
            <div className="w-full lg:w-1/2">
                <div className="h-auto max-h-[720vh] lg:max-h-[650vh] xl:max-h-[560vh] space-y-10">
                    {timeline.map((item, idx) => {
                        // const topPosition = `calc(${idx * timeline.length}% + ${idx * timeline.length}px)`;
                        return (
                            <div
                                key={idx}
                                className="sticky w-full max-w-xl mx-auto p-1 bg-white rounded-lg shadow-lg h-[340px] sm:h-[320px] xl:h-[380px] z-0 top-32 md:top-40"
                            // style={{
                            //     top: 0,
                            // }}
                            >
                                <div
                                    className={`p-6 xl:p-10 flex flex-col justify-between items-start gap-6 h-full ${idx % 2 === 0
                                        ? "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F]"
                                        : "bg-gradient-to-br from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99]"
                                        }`}
                                >
                                    <h4
                                        className={`text-3xl tracking-widest font-semibold sm:text-4xl xl:text-6xl   ${idx % 2 === 0 ? "text-[#957802]" : "text-[#00A651]"}`}
                                    >
                                        {item.year}
                                    </h4>
                                    <div className="space-y-3">
                                        <h5 className="text-xl tracking-wide font-semibold sm:text-2xl xl:text-3xl">
                                            {item.title}
                                        </h5>
                                        <ul className="">
                                            {item.lists.map((list, id) => (
                                                <li key={id} className="text-base xl:text-lg flex items-start gap-x-3">
                                                    <GiFeather className={`text-base shrink-0 lg:text-lg mt-2 ${idx % 2 === 0 ? "text-[#603913]" : "text-[#00A651]"}`} />
                                                    <p>{list}</p>
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
