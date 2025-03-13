"use client"
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
    mass: 1.5,
    stiffness: 500,
    damping: 100,
};

const NeuFollowButton = ({ type, handleClick }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, SPRING_OPTIONS);
    const ySpring = useSpring(y, SPRING_OPTIONS);

    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;


    return (
        <div className="mx-auto w-max bg-green-light rounded-lg cursor-pointer" onClick={handleClick}>
            <motion.button
                ref={ref}
                style={{
                    transform,
                }}
                className={`bg-linear-to-bl group from-green-light gap-5 font-extrabold to-green-darker flex h-full w-full items-center text-white justify-between transition-all duration-300 rounded-lg border-2 border-solid border-white cursor-pointer text-sm md:text-base hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none shadow-xl ${type ? "px-3.5 py-2 md:py-3" : "px-3 py-2 md:py-3.5 md:px-5"
                    }`}
            >
                <Copy>Book a meeting</Copy>
                <Arrow />
            </motion.button>
        </div>
    );
};

const Copy = ({ children }) => {
    return (
        <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-sm md:text-base py-1">
                {children}
            </span>
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 text-sm md:text-base group-hover:translate-y-0 py-1">
                {children}
            </span>
        </span>
    );
};

const Arrow = () => (
    <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
        <FiArrowRight className="shrink-0 -translate-x-full text-green-lighter transition-transform duration-300 group-hover:translate-x-0" />
        <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
    </div>
);

export default NeuFollowButton;