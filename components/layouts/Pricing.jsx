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
                <div className="mt-6 lg:mt-12 flex justify-center flex-wrap gap-6">
                    <PriceColumn
                        title="Intro"
                        price="20"
                        statement="For most businesses that want to optimize web queries"
                        items={[
                            {
                                children: "All limited links",
                                checked: true,
                            },
                            {
                                children: "Own analytics platform",
                                checked: true,
                            },
                            {
                                children: "Chat support",
                                checked: false,
                            },
                            {
                                children: "Optimize hashtags",
                                checked: false,
                            },
                            {
                                children: "Unlimited users",
                                checked: false,
                            },
                        ]}
                    />
                    <PriceColumn
                        title="Base"
                        price={"50"}
                        statement="For most businesses that want to optimize web queries"
                        items={[
                            {
                                children: "All limited links",
                                checked: true,
                            },
                            {
                                children: "Own analytics platform",
                                checked: true,
                            },
                            {
                                children: "Chat support",
                                checked: true,
                            },
                            {
                                children: "Optimize hashtags",
                                checked: false,
                            },
                            {
                                children: "Unlimited users",
                                checked: false,
                            },
                        ]}
                    />
                    <PriceColumn
                        title="Pro"
                        highlight
                        price={"100"}
                        statement="For most businesses that want to optimize web queries"
                        items={[
                            {
                                children: "All limited links",
                                checked: true,
                            },
                            {
                                children: "Own analytics platform",
                                checked: true,
                            },
                            {
                                children: "Chat support",
                                checked: true,
                            },
                            {
                                children: "Optimize hashtags",
                                checked: true,
                            },
                            {
                                children: "Unlimited users",
                                checked: true,
                            },
                        ]}
                    />
                    <PriceColumn
                        title="Base"
                        price={"50"}
                        statement="For most businesses that want to optimize web queries"
                        items={[
                            {
                                children: "All limited links",
                                checked: true,
                            },
                            {
                                children: "Own analytics platform",
                                checked: true,
                            },
                            {
                                children: "Chat support",
                                checked: true,
                            },
                            {
                                children: "Optimize hashtags",
                                checked: true,
                            },
                            {
                                children: "Unlimited users",
                                checked: false,
                            },
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};

const PriceColumn = ({ highlight, title, price, statement, items }) => {
    return (
        <div
            // style={{
            //     boxShadow: highlight ? "0px 6px 0px rgb(24, 24, 27)" : "",
            // }}
            className={`relative w-full max-w-72 sm:max-w-96 xl:max-w-72 rounded-lg p-6 md:p-8 ${highlight ? "bg-linear-to-b from-text to-green-darker shadow-xl shadow-green-darker/40 text-white scale-110" : "text-[#848199]"}`}
        >
            {highlight && (
                <span className="absolute right-4 top-7 -translate-y-1/2 rounded-md bg-green-darker px-3 py-1 text-[10px] text-[#0BE6E6BF] font-semibold uppercase">
                    Most Popular
                </span>
            )}

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
                        className={`block text-4xl ${highlight ? "text-white" : "text-green-darker"} font-bold`}
                    >
                        ${price}
                    </motion.span>
                </AnimatePresence>
                <motion.div layout className={`font-medium text-base`}>
                    <span className="block">/month</span>
                </motion.div>
            </div>
            <p
                className={`mb-6 text-xl md:text-2xl font-semibold ${highlight ? "text-white" : "text-green-darker"}`}
            >
                {title}
            </p>
            <p className="mb-8 text-sm -mt-2.5">{statement}</p>

            <div className="mb-8 space-y-2">
                {items.map((i) => (
                    <CheckListItem key={i.children} checked={i.checked}>
                        {i.children}
                    </CheckListItem>
                ))}
            </div>

            <button
                aria-label="Choose plan"
                title="Choose plan"
                className={` ${highlight ? "bg-text hover:shadow-[4px_4px_0px_#00FFE7]" : "bg-[#008080]/30 text-text hover:shadow-[4px_4px_0px_#4db6ac]"} w-full cursor-pointer  px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none rounded-lg`}
            >
                Choose plan
            </button>
        </div>
    );
};

const CheckListItem = ({ children, checked }) => {
    return (
        <div className="flex items-center gap-2 text-sm">
            {checked ? (
                <GoCheckCircleFill className="text-lg text-green-light" />
            ) : (
                <GiCancel className="text-lg text-green-light" />
            )}
            {children}
        </div>
    );
};
