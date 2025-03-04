
import Image from "next/image";
import React from "react";
import { HeroMarquee } from "../UI/Marquees";
import { GetStartButton } from "../UI/Button";

const Hero = () => {
    return (
        <section className="w-full h-full">
            <div className="w-full h-[20vh] md:h-[40vh] lg:h-[50vh] overflow-hidden relative">
                <Image
                    src={"/hero-bg.png"}
                    alt="hero illustration"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="bg-text w-full p-4">
                <HeroMarquee />
            </div>
            <div className="padding w-full h-full space-y-5 md:space-y-8 text-center max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Is your website telling the <span className="uppercase font-extrabold text-text px-3">right</span>story?</h2>
                <p className="text-base md:text-xl">We help you turn YOUR experience into content that converts while you&apos;re asleep.We work with people like YOU as a plug-and-play team to meet your Website, Blogs & Social Media Content Needs.</p>
                <div className="w-full flex justify-center items-center">
                    <GetStartButton />
                </div>
                <p className="text-sm w-4/5 md:w-2/5 mx-auto">YOU can be a Founder, a Decision-maker from the Marketing Team, or a CMO of a Startup.</p>
            </div>
        </section>
    );
};

export default Hero;
