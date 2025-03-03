import React from "react";
import { GetStartButton } from "../UI/Button";

const BuildOurStory = () => {
    return (
        <section className="w-full h-full padding">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 p-10 rounded-md border border-[#D3D2D2]">
                <div className="space-y-3 w-full">
                    <h4 className="text-xl font-medium sm:text-2xl lg:text-3xl">
                        Let&apos;s Build your story!
                    </h4>
                    <p className="text-base md:text-lg">
                        Unlock content that drives traffic & conversions.
                    </p>
                </div>
                <div className="w-[15%]">
                    <GetStartButton />
                </div>
            </div>
        </section>
    );
};

export default BuildOurStory;
