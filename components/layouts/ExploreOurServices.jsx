import React from "react";
import { Card, CardClient } from "../UI/CardComponent";
import { Gradient } from "../UI/Gradient";
import CalendlyLink from "../features/CalendlyButton";
import { B2BContentHome, B2CContentHome, SMContentHome } from "@/utils/Data";

const ExploreOurServices = ({ subTitle, title }) => {
    return (
        <section className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center">
                <h4 className="text-sm">{subTitle}</h4>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-16 place-content-center place-items-center max-w-7xl mx-auto">
                <Card
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F] text-[#732D15]"
                    }
                    data={B2BContentHome}
                    img={"/b2b-icon.svg"}
                    title="Content for B2B"
                />
                <Card
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99] text-[#129F49]"
                    }
                    data={B2CContentHome}
                    img={"/b2c-icon.svg"}
                    title="Content for B2C"
                />
                <Card
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#DDF1F9] to-[#87CEEB] text-[#0D1967]"
                    }
                    data={SMContentHome}
                    img={"/SM-icon.svg"}
                    title="Social Media for Founders"
                />
            </div>
        </section>
    );
};

export default ExploreOurServices;

export const ClientSpotlight = ({ subTitle, title }) => {
    return (
        <section className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center">
                <h4 className="text-sm">{subTitle}</h4>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">
                    {title}
                </h2>
                <CalendlyLink type />
            </div>
            <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-16 place-content-center place-items-center max-w-7xl mx-auto">
                <CardClient
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99] text-[#129F49]"
                    }
                    icon={"/client-10.png"}
                    img={"/Rectangle.png"}
                    title={"Website content"}
                />
                <CardClient
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F] text-[#732D15]"
                    }
                    icon={"/client-11.png"}
                    img={"/Rectangle-2.png"}
                    title={"Website content"}
                />
                <CardClient
                    bgColor={
                        "bg-gradient-to-b from-[#FFFFFF] via-[#9799CCB2] to-[#21409A4D] text-[#0D1967]"
                    }
                    icon={"/client-5.png"}
                    img={"/Rectangle-3.png"}
                    title={"Blog content"}
                />
            </div>
        </section>
    );
};

{
    /* <CardClient bgColor={
                      "bg-gradient-to-b from-[#FFFFFF] via-[#9799CCB2] to-[#21409A4D] text-[#21409A]"
  
                  } img={"/SM-icon.svg"} title="Social Media for Founders" /> */
}
