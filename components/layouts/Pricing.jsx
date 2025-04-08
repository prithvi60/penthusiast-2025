"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gradient } from "../UI/Gradient";
import { GoCheckCircleFill } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import { SpringModalPrice } from "../UI/Modal";

export const Pricing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [thank, setThank] = useState(false);
    const [priceCard, setPriceCard] = useState("");
    return (
        <div className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center relative">
                <h4 className="text-sm">No contracts. No surprise fees.</h4>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold capitalize">
                    Simple, transparent pricing
                </h2>
            </div>
            <section className="mx-auto max-w-[1520px]">
                <div className="mt-6 lg:mt-12 flex justify-center flex-wrap gap-6 h-full">
                    <PriceColumn
                        title="Website Content Creation"
                        price="4000"
                        per={"per page / month"}
                        statement=""
                        items={[
                            {
                                children: "Crisper and actionable copies",
                                checked: true,
                            },
                            {
                                children: "AI-assisted research; Human written",
                                checked: true,
                            },
                            {
                                children: "SEO optimized content",
                                checked: true,
                            },
                            {
                                children: "In line with brand voice and requisites",
                                checked: true,
                            },
                            {
                                children: "Delivery in 7 working days (up to 10 pages)",
                                checked: true,
                            },
                        ]}
                        setIsOpen={setIsOpen}
                        setThank={setThank}
                        setPriceCard={setPriceCard}
                    />
                    <PriceColumn
                        title="B2B / B2B SaaS Blogs"
                        price={"10850"}
                        per={"per blog / month"}
                        statement="Additional charges for blog banners / infographics / in-blog images"
                        items={[
                            {
                                children: "Topic generation",
                                checked: true,
                            },
                            {
                                children: "Outline creation",
                                checked: true,
                            },
                            {
                                children: "AI-Assisted Research; Human Written",
                                checked: true,
                            },
                            {
                                children: "SEO Optimized Content",
                                checked: true,
                            },
                            {
                                children: "Final drafts after 2 levels of proof reading",
                                checked: true,
                            },
                            {
                                children: "2-day delivery",
                                checked: true,
                            },
                        ]}
                        setIsOpen={setIsOpen}
                        setThank={setThank}
                        setPriceCard={setPriceCard}
                    />
                    <PriceColumn
                        title="B2C Services / D2C / eCommerce Blogs"
                        price={"4000"}
                        per={"per blog / month"}
                        statement="Additional charges for blog banners / infographics / in-blog images"
                        items={[
                            {
                                children: "Topic generation",
                                checked: true,
                            },
                            {
                                children: "Outline creation",
                                checked: true,
                            },
                            {
                                children: "AI-Assisted Research; Human Written",
                                checked: true,
                            },
                            {
                                children: "SEO Optimized Content",
                                checked: true,
                            },
                            {
                                children: "Final drafts after 2 levels of proof reading",
                                checked: true,
                            },
                            {
                                children: "2-day delivery",
                                checked: true,
                            },
                        ]}
                        setIsOpen={setIsOpen}
                        setThank={setThank}
                        setPriceCard={setPriceCard}
                    />
                    <PriceColumn
                        title="Social Media Content Creation"
                        per={"per month"}
                        // highlight
                        price={"75000"}
                        statement=""
                        items={[
                            {
                                children: "Ideation & Brainstorming with Client",
                                checked: true,
                            },
                            {
                                children: "Content Buckets & Strategy Creation",
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
                                children: "Content Publishing / Promotion & Distribution",
                                checked: true,
                            },
                            {
                                children: "Content Performance & Analytics",
                                checked: true,
                            },
                        ]}
                        setIsOpen={setIsOpen}
                        setThank={setThank}
                        setPriceCard={setPriceCard}
                    />
                </div>
                <SpringModalPrice isOpen={isOpen} setIsOpen={setIsOpen} setThank={setThank} thank={thank} price={priceCard} />
            </section>
        </div>
    );
};

const PriceColumn = ({ highlight, title, price, statement, items, per, setIsOpen, setThank, setPriceCard }) => {

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
                <div className={` ${price === "75000" ? "mb-8 lg:mb-10 xl:mb-8" : "mb-12"} flex items-center gap-3 relative`}>
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
                    <motion.div layout className={`font-medium space-y-1 ${title === "Social Media Content Creation" ? "text-xs" : "text-sm"}`}>
                        <span className="block">{per}</span>
                        {title === "B2B / B2B SaaS Blogs" && (<span className="block">{"(2k-2.5k Words)"}</span>)}
                        {title === "B2C Services / D2C / eCommerce Blogs" && (<span className="block">{"(500-800 Words)"}</span>)}
                        {price === "75000" && (<span className="block text-xs">{"(Meta - FB & IG, LinkedIn, YouTube)"}</span>)}
                    </motion.div>
                    {statement !== "" && (<span className={`absolute -bottom-10 left-0 text-[11px] font-medium`}>{statement}</span>)}
                </div>
                <p
                    className={`mb-6 text-lg md:text-xl pt-6 font-bold ${highlight ? "text-white" : "text-green-darker"}`}
                >
                    {title}
                </p>
                {/* <p className="mb-8 text-sm -mt-2.5">{statement}</p> */}
            </div>
            <div className="">
                <div className="mb-12 space-y-2 flex flex-col flex-grow">
                    {items.map((i) => (
                        <CheckListItem key={i.children} checked={i.checked}>
                            {i.children}
                        </CheckListItem>
                    ))}
                </div>
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setThank(false);
                        setPriceCard(title)
                    }}
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
