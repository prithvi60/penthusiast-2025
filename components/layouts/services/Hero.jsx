import { GetStartButton } from "@/components/UI/Button";
import { Gradient } from "@/components/UI/Gradient";
import React from "react";

const Hero = ({ title }) => {
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8 text-center max-w-5xl mx-auto">
            <Gradient rotate />
            {title && title()}
            <p className="text-base md:text-xl">
                We craft compelling B2B content that builds trust, engages
                decision-makers, and drives conversions. From blogs to website copy, we
                help businesses communicate effectively.
            </p>
            <div className="w-full flex justify-center items-center">
                <GetStartButton />
            </div>
        </section>
    );
};

export default Hero;
