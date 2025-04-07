import Image from "next/image";
import Link from "next/link";
import React from "react";

const Founder = () => {
    return (
        <section className="padding w-full h-full space-y-5 md:space-y-10">
            <h2 className="text-3xl sm:text-5xl text-center lg:text-6xl font-bold">
                Management
            </h2>
            <div className="flex flex-col lg:gap-10 lg:flex-row items-start max-w-5xl mx-auto">
                <div className="relative overflow-hidden w-full lg:w-2/5 h-80 shadow-xl rounded-md">
                    <Image
                        title="founder picture"
                        src={"/founder.jpg"}
                        alt="founder image"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="space-y-4 shadow-xl flex flex-col w-full lg:w-3/5 justify-between items-start md:space-y-5 p-10 bg-linear-to-b from-text to-green-darker text-white rounded-md">
                    <div className="space-y-3 md:pb-8">
                        <h4 className="text-xl md:text-2xl font-extrabold tracking-wider">
                            Poornima TM
                        </h4>
                        <p className="text-base lg:text-lg">
                            Founder & CEO | Mentor | <br />Faculty specializing in Content Creation | <br />
                            Avid Traveler |  Fitness Enthusiast
                        </p>
                    </div>
                    <button role="link" aria-label="founder's linkedin profile" className="mt-8 hover:scale-90 transition-all transform duration-500 ease-in-out">
                        <Link title="founder linkedin page"
                            href={"https://www.linkedin.com/in/poornima-t-m-895b9095"}
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
