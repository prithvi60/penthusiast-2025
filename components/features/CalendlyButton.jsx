"use client";

import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const CalendlyLink = ({ type }) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const url = "https://calendly.com/gokulgandhi97"
    useEffect(() => {
        const handleScriptLoad = () => {
            setIsScriptLoaded(true);
        };

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = handleScriptLoad;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        if (window.Calendly && isScriptLoaded) {
            window.Calendly.initPopupWidget({ url });
        } else {
            console.error("Calendly script not loaded");
        }
    };

    return (
        <>
            <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
            />
            <button onClick={handleCalendlyClick} className={`bg-linear-to-bl from-green-light to-green-darker hover:scale-90 transition-all  transform duration-500 ease-in-out text-white  cursor-pointer rounded-md border-b-3 text-sm md:text-base border-[#00FFE7] shadow-xl ${type ? "px-2 py-2 md:py-3" : "px-3 py-2 md:py-3.5 md:px-5"}`}>
                Book a meeting
                <span className="mx-2">
                    <FaArrowRightLong className="inline-block text-sm md:text-lg ml-2" />
                </span>
            </button>
        </>
    );
};

export default CalendlyLink;
