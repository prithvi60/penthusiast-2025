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

    const handleMove = (e) => {
        if (!ref.current) return;

        const { height, width } = ref.current.getBoundingClientRect();
        const { offsetX, offsetY } = e.nativeEvent;

        const xPct = offsetX / width;
        const yPct = 1 - offsetY / height;

        const newY = 12 + yPct * 12;
        const newX = 12 + xPct * 12;

        x.set(newX);
        y.set(-newY);
    };

    const handleReset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="mx-auto w-max bg-green-light rounded-lg cursor-pointer" onClick={handleClick}>
            <motion.button
                ref={ref}
                style={{
                    transform,
                }}
                onMouseMove={handleMove}
                onMouseLeave={handleReset}
                onMouseDown={handleReset}
                className={`group flex h-full w-full items-center text-white justify-between rounded-lg gap-3 font-bold bg-linear-to-bl ${type ? "px-2 py-2 md:py-3" : "px-3 py-2 md:py-3.5 md:px-5 cursor-pointer"
                    } from-green-light to-green-darker`}
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