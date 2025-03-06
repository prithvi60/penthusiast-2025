import { GetStartButton } from "@/components/UI/Button";
import { Gradient } from "@/components/UI/Gradient";
import React from "react";

const Hero = ({ title, desc }) => {
    return (
        <section className="padding relative w-full h-full space-y-4 md:space-y-7 text-center max-w-[1100px] mx-auto">
            <Gradient rotate />
            {title && title()}
            <p className="text-base md:text-xl w-full lg:w-4/5 mx-auto">
                {desc}
            </p>
            <div className="w-full flex justify-center items-center">
                <GetStartButton />
            </div>
        </section>
    );
};

export default Hero;
