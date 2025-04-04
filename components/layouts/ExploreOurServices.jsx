import React from "react";
import { Card } from "../UI/CardComponent";
import { Gradient } from "../UI/Gradient";
import {
    B2BContentHome,
    B2CContentHome,
    SMContentHome,
} from "@/utils/Data";

const ExploreOurServices = ({ subTitle, title }) => {
    return (
        <section className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center">
                <p className="text-sm">{subTitle}</p>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-16 place-content-center place-items-center max-w-7xl mx-auto">
                <Card
                    bgColor={"bg-linear-to-b from-text to-green-darker text-white"
                        // "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F] text-[#732D15]"
                    }
                    data={B2BContentHome}
                    img={"/b2b-icon.svg"}
                    title="Content for B2B / SaaS"
                    href="/services/content-B2B"
                />
                <Card
                    bgColor={"bg-linear-to-b from-text to-green-darker text-white"
                        // "bg-gradient-to-b from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99] text-[#129F49]"
                    }
                    data={B2CContentHome}
                    img={"/b2c-icon.svg"}
                    title="Content for B2C"
                    href="/services/content-B2C"
                />
                <Card
                    bgColor={"bg-linear-to-b from-text to-green-darker text-white"
                        // "bg-gradient-to-b from-[#FFFFFF] via-[#DDF1F9] to-[#87CEEB] text-[#0D1967]"
                    }
                    data={SMContentHome}
                    img={"/SM-icon.svg"}
                    title="Social Media for Founders"
                    href="/services/founders"
                />
            </div>
        </section>
    );
};

export default ExploreOurServices;



