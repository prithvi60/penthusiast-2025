"use client";

import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../public/animations/groovyWalk.json";
import buttonAnimation from "../../public/animations/button.json";

const LottieAnimationClient = () => {
    const options = {
        animationData: buttonAnimation,
        loop: true,
    };

    const { View } = useLottie(options);
    return <>{View}</>;
};

export default LottieAnimationClient;
