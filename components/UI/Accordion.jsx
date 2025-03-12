"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    <button role="button" aria-label="accordion"
                        className={`w-full flex justify-between items-center px-6 py-9 bg-linear-to-r from-text via-[#006565] to-green-darker focus:outline-none transition-colors ${activeIndex === index ? "rounded-t-lg" : "rounded-lg"}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-medium text-start text-white">
                            {item.title}
                        </span>
                        <span className="text-gray-600">
                            {activeIndex === index ? (
                                <IoIosArrowDown
                                    className={`mt-[0.6px] rotate-180 duration-500 text-white`}
                                />
                            ) : (
                                <IoIosArrowDown
                                    className={`mt-[0.6px] duration-500 text-white`}
                                />
                            )}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96 border-b border-x border-zinc-400 rounded-b-lg" : "max-h-0"
                            }`}
                    >
                        <div className="p-4 bg-white rounded-b-lg text-gray-700">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
