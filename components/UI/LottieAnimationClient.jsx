"use client";

import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../public/animations/groovyWalk.json";
import buttonAnimation from "../../public/animations/button.json";
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
