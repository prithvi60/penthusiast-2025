"use client";

import { useLottie } from "lottie-react";
import buttonAnimation1 from "../../public/animations/button1.json";

const LottieAnimationClient = () => {
    const options = {
        animationData: buttonAnimation1,
        loop: true,
    };

    const { View } = useLottie(options);
    return <>{View}</>;
};

export default LottieAnimationClient;
