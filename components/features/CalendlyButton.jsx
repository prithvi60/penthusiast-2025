"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// Load Calendly styles globally (e.g., in a layout file or index.html)
// Add this to your root layout or HTML file:
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

const CalendlyLink = ({ type }) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const url = "https://calendly.com/gokulgandhi97";

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );

        if (existingScript) {
            setIsScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        script.onerror = () => console.error("Failed to load Calendly script");
        document.body.appendChild(script);

        return () => {
        };
    }, []);

    const handleCalendlyClick = (e) => {
        e.preventDefault(); // Prevent any default behavior
        e.stopPropagation(); // Stop event bubbling, if any

        if (window.Calendly && isScriptLoaded) {
            window.Calendly.initPopupWidget({ url });
        } else {
            console.error("Calendly not ready. Script loaded:", isScriptLoaded);
            // Fallback: Retry after a short delay
            setTimeout(() => {
                if (window.Calendly) {
                    window.Calendly.initPopupWidget({ url });
                } else {
                    alert("Unable to load Calendly. Please try again later.");
                }
            }, 500);
        }
    };

    return (
        <button
            onClick={handleCalendlyClick}
            className={`bg-linear-to-bl from-green-light to-green-darker transition-all duration-300 rounded-lg border-2 border-solid border-white text-white cursor-pointer text-sm md:text-base hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none shadow-xl ${type ? "px-2 py-2 md:py-3" : "px-3 py-2 md:py-3.5 md:px-5"
                }`}
        >
            Book a meeting
            <span className="mx-2">
                <FaArrowRightLong className="inline-block text-sm md:text-lg ml-2" />
            </span>
        </button>
    );
};

export default CalendlyLink;