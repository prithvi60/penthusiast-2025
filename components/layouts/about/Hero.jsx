import { GetStartButton } from "@/components/UI/Button";
import { Gradient } from "@/components/UI/Gradient";
import React from "react";

const Hero = () => {
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8 text-center max-w-5xl mx-auto">
            <Gradient rotate />
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                The Content
                <span className="uppercase font-extrabold text-text px-3">
                    Experts
                </span>{" "}
                Behind Your Brand's Success
            </h2>
            <p className="text-base md:text-xl">
                Great content isn't just about words—it's about impact. We craft
                strategic, high-quality content that builds trust and drives results.
            </p>
            <div className="w-full flex justify-center items-center">
                <GetStartButton />
            </div>
        </section>
    );
};

export default Hero;
