"use client";
import Image from "next/image";
import React from "react";
import { GetStartButton } from "../UI/Button";
import { AnimatePresence, motion } from "framer-motion";
import { HeroSvg } from "../features/HeroSvg";

const Hero = () => {
    const variantTitle = {
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };
    return (
        <section className="w-full h-full">
            <AnimatePresence>
                <motion.div
                    variants={variantTitle}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="w-full h-[30vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden relative mb-5"
                >
                    <Image
                        title={"hero illustration"}
                        src={"/hero-bg.svg"}
                        alt="hero illustration"
                        fill
                        className="object-contain object-center"
                    />
                    {/* <HeroSvg /> */}
                </motion.div>
            </AnimatePresence>
            <div className="px-5 pb-[40px] pt-0 md:px-[80px] md:pb-[70px]; w-full h-full space-y-4 text-center max-w-5xl mx-auto">
                {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    Is your website telling the{" "}
                    <span className="uppercase font-extrabold text-text px-3">right</span>
                    story?
                </h2> */}
                <p className="text-sm md:text-lg xl:text-xl">
                    We help you turn YOUR experience into content that converts while
                    you&apos;re asleep.We work with people like YOU as a plug-and-play
                    team to meet your Website, Blogs & Social Media Content Needs.
                </p>
                <div className="w-full flex justify-center items-center">
                    <GetStartButton />
                </div>
                <p className="text-sm w-4/5 md:w-2/5 mx-auto">
                    YOU can be a Founder, a Decision-maker from the Marketing Team, or a
                    CMO of a Startup.
                </p>
            </div>
        </section>
    );
};

export default Hero;
