import Image from "next/image";
import Link from "next/link";
import React from "react";

const Founder = () => {
    return (
        <section className="padding w-full">
            <div className="flex flex-col lg:gap-10 lg:flex-row items-start max-w-5xl mx-auto">
                <div className="relative overflow-hidden w-full h-80">
                    <Image
                        src={"/founder.png"}
                        alt="founder image"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="space-y-4 flex flex-col justify-between items-start md:space-y-7 p-10 bg-[#F1F2FF] h-">
                    <div className="space-y-3 md:pb-8">
                        <h4 className="text-lg md:text-xl font-bold tracking-wider">
                            Poornima TM
                        </h4>
                        <p className="text-base lg:text-lg">
                            Founder & CEO | Mentor | Faculty specializing in Content Creation
                            Avid Traveler | Fitness Enthusiast
                        </p>
                    </div>
                    <button className="mt-8 hover:scale-90 transition-all transform duration-500 ease-in-out">
                        <Link
                            href={"#"}
                            className="p-3 rounded-lg border border-black font-medium text-sm"
                        >
                            Learn more
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Founder;
