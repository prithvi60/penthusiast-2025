"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gradient } from "../UI/Gradient";
import { GoCheckCircleFill } from "react-icons/go";
import { GiCancel } from "react-icons/gi";

export const Pricing = () => {
    const [selected, setSelected] = useState("annual");
    return (
        <div className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center relative">
                <h4 className="text-sm">No contracts. No surprise fees.</h4>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold capitalize">
                    Simple, transparent pricing
                </h2>
            </div>
            <section className="mx-auto max-w-7xl">
                <div className="mt-6 lg:mt-12 flex justify-center flex-wrap gap-6 h-full">
                    <PriceColumn
                        title="Web"
                        price="4000"
                        per={"per page"}
                        statement="Website Content Creation"
                        items={[
                            {
                                children: "Crisper and actionable",
                                checked: true,
                            },
                            {
                                children: "AI-Assisted Research; Human Written",
                                checked: true,
                            },
                            {
                                children: "SEO optimized content",
                                checked: true,
                            },
                            {
                                children: "Tailored Brand Content",
                                checked: true,
                            },
                            {
                                children: "7-Day Delivery (10 pgs)",
                                checked: true,
                            },
                        ]}
                    />
                    <PriceColumn
                        title="Blogs"
                        price={"10850"}
                        per={"per blog"}
                        statement="B2B / B2B SaaS Blogs"
                        items={[
                            {
                                children: "SEO-Aligned Outline",
                                checked: true,
                            },
                            {
                                children: "AI-Assisted Research; Human Written",
                                checked: true,
                            },
                            {
                                children: "Keyword Optimized",
                                checked: true,
                            },
                            {
                                children: "Proofread & Polished",
                                checked: true,
                            },
                            {
                                children: "SEO Organic Traffic",
                                checked: true,
                            },
                        ]}
                    />
                    <PriceColumn
                        title="Social Media"
                        per={"(Meta - FB & IG, LinkedIn, YouTube)"}
                        // highlight
                        price={"75000"}
                        statement="Social Media Content Creation"
                        items={[
                            {
                                children: "Ideation with client",
                                checked: true,
                            },
                            {
                                children: "Strategy and Buckets",
                                checked: true,
                            },
                            {
                                children: "Content Calendar",
                                checked: true,
                            },
                            {
                                children: "Content Creation",
                                checked: true,
                            },
                            {
                                children: "Content Design / Editing",
                                checked: true,
                            },
                            {
                                children: "Publishing & Promotion",
                                checked: true,
                            },
                            {
                                children: "Performance Analytics",
                                checked: true,
                            },
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};

const PriceColumn = ({ highlight, title, price, statement, items, per }) => {
    return (
        <div
            className={`relative flex flex-col justify-between w-full min-h-[450px] max-w-80 sm:max-w-96 xl:max-w-80 rounded-lg px-6 py-8 md:px-8 md:py-10 shadow-lg ${highlight ? "bg-linear-to-b from-text to-green-darker shadow-xl shadow-green-darker/40 text-white scale-110" : "bg-white text-[#848199]"}`}
        >
            {/* {highlight && (
                <span className="absolute right-4 top-5 animate-pulse -translate-y-1/2 rounded-md bg-green-darker px-3 py-1 text-[9px] md:text-[10px] text-[#0BE6E6BF] font-semibold uppercase">
                    Most Popular
                </span>
            )} */}
            <div>
                <div className="mb-6 flex items-center gap-3">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            initial={{
                                y: 24,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -24,
                                opacity: 0,
                            }}
                            key={price}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}
                            className={`block text-4xl ${highlight ? "text-white" : "text-text"} font-bold`}
                        >
                            ₹{price}
                        </motion.span>
                    </AnimatePresence>
                    <motion.div layout className={`font-medium space-y-1 ${title === "Social Media" ? "text-xs" : "text-sm"}`}>
                        <span className="block">{per}</span>
                        {title === "Blogs" && (<span className="block">{"(2k-2.5k Words)"}</span>)}
                    </motion.div>
                </div>
                <p
                    className={`mb-6 text-xl md:text-2xl font-semibold ${highlight ? "text-white" : "text-green-darker"}`}
                >
                    {title}
                </p>
                <p className="mb-8 text-sm -mt-2.5">{statement}</p>
            </div>
            <div className="">
                <div className="mb-8 space-y-2 flex flex-col flex-grow">
                    {items.map((i) => (
                        <CheckListItem key={i.children} checked={i.checked}>
                            {i.children}
                        </CheckListItem>
                    ))}
                </div>
                <button
                    aria-label="Choose plan"
                    title="Choose plan"
                    className={` ${highlight ? "bg-text hover:shadow-[4px_4px_0px_#00FFE7]" : "bg-linear-to-bl from-green-light to-green-darker text-white hover:shadow-[4px_4px_0px_#4db6ac]"} w-full cursor-pointer  px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none rounded-lg`}
                >
                    Choose plan
                </button>
            </div>
        </div>
    );
};

const CheckListItem = ({ children, checked }) => {
    return (
        <div className="flex gap-2 text-sm">
            {checked ? (
                <GoCheckCircleFill className="text-lg text-text" />
            ) : (
                <GiCancel className="text-lg text-text" />
            )}
            {children}
        </div>
    );
};
