import React from "react";
import { GetStartButton } from "../UI/Button";
import { CardComponent } from "../UI/CardComponent";
import { Gradient } from "../UI/Gradient";
import CalendlyLink from "../features/CalendlyButton";

const ExploreOurServices = ({ subTitle, title, explore }) => {
    return (
        <section className="w-full h-full space-y-5 md:space-y-8 padding">
            <div className="space-y-4 text-center">
                <h4 className="text-sm">{subTitle}</h4>
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">
                    {title}
                </h2>
                {explore ? (
                    <CalendlyLink type />
                ) : (
                    <div className="w-full flex justify-center items-center">
                        <GetStartButton />
                    </div>
                )}
            </div>
            <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                <Gradient rotate />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </section>
    );
};

export default ExploreOurServices;
