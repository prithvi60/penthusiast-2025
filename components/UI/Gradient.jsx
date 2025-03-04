import React from "react";

export const Gradient = ({ rotate }) => {
    return (
        <div
            className={`absolute inset-0 ${rotate && "-rotate-[8deg]"} bg-radial from-gradient-1 -z-10 to-gradient-2 h-64 blur-3xl opacity-50 rounded-full w-[90%] m-auto`}
        />
    );
};
