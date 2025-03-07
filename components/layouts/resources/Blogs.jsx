import { GetStartButton } from "@/components/UI/Button";
import { Gradient } from "@/components/UI/Gradient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ posts }) => {
    const publishedAt = posts.map((val) => val.publishedAt);
    const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return (
        <section className="padding w-full space-y-24 md:space-y-36">
            <div className="w-full space-y-10 md:space-y-16">
                <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
                    Blogs
                </h2>
                <Gradient rotate />
                <div className="flex flex-col bg-white shadow lg:gap-28 lg:flex-row items-center max-w-5xl mx-auto rounded-lg p-8 gap-10">
                    <div className="relative overflow-hidden w-full md:w-[480px] h-80">
                        <Image
                            src={"/blog-1.png"}
                            alt="blog image"
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="space-y-4 flex flex-col justify-between items-start md:space-y-7">
                        <div className="space-y-3 md:pb-8">
                            <h4 className="text-lg md:text-xl font-bold tracking-wider">
                                How to calculate the ROI on your community efforts?
                            </h4>
                            <p className="text-base lg:text-lg">
                                Learn more about using the SPACES framework for defining the
                                business values of your community.
                            </p>
                        </div>
                        <GetStartButton />
                    </div>
                </div>
            </div>
            <div className="w-full space-y-10 md:space-y-16">
                <h4 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-center">
                    Read more Interesting Blog
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center xl:grid-cols-3 gap-8">
                    {posts.map((item, idx) => (
                        <Link
                            href={`/resources/blog/${item.slug.current}`}
                            key={idx}
                            className="rounded-lg shadow-lg border border-[#AFACAC] overflow-hidden hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer w-full max-w-[450px]"
                        >
                            <div className="w-full h-60 overflow-hidden relative">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.imageAlt}
                                    fill
                                    className="object-cover object-center rounded-lg"
                                />
                            </div>
                            <p className="text-base p-3.5 sm:text-lg lg:text-xl font-semibold tracking-wide">
                                {item.blogShortRead}
                            </p>
                            <div className="flex justify-between items-center p-3.5">
                                <h5 className="text-base font-medium tracking-wider md:text-lg">
                                    {formattedDate}
                                </h5>
                                <p className="text-sm tracking-wide underline underline-offset-2">
                                    {"Read more ->"}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

