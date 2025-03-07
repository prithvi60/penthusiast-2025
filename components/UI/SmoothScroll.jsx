"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
    const lenisRef = useRef(null);
    const rafIdRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 0.85,
            easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
        });

        lenisRef.current = lenis;

        // Animation frame function
        const raf = (time) => {
            lenisRef.current?.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        };

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            // Cleanup function to avoid memory leaks
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, []);

    return null;
};

export default SmoothScroll;
