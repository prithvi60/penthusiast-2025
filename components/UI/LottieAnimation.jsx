"use client"
import dynamic from "next/dynamic";

// Dynamically import the client-side component
const LottieAnimation = dynamic(() => import("./LottieAnimationClient"), {
    ssr: false, // Disable SSR to prevent "document is not defined" error
});

export default LottieAnimation;
