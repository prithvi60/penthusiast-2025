import Image from "next/image";
import Link from "next/link";
import React from "react";

const Founder = () => {
    return (
        <section className="padding w-full">
            <div className="flex flex-col lg:gap-10 lg:flex-row items-start max-w-5xl mx-auto">
                <div className="relative overflow-hidden w-full h-80 shadow-xl rounded">
                    <Image
                        title="founder picture"
                        src={"/founder.png"}
                        alt="founder image"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="space-y-4 shadow-xl flex flex-col justify-between items-start md:space-y-7 p-10 bg-linear-to-tl from-text via-text to-green-lighter">
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
                        <Link title="founder linkedin page"
                            href={"https://www.linkedin.com/company/penthusiasts2017"}
                            className="rounded-lg bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
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
