import BuildOurStory from "@/components/layouts/BuildOurStory";
import ContentSolutions from "@/components/layouts/services/ContentSolutions";
import Hero from "@/components/layouts/services/Hero";
import {
    contentSolutions,
    contentSolutionsB2C,
    contentSolutionsSM,
} from "@/utils/Data";
import React from "react";

const TitleB2B = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[70px] md:!leading-20 tracking-wider font-bold">
        Strategic Content for{" "}
        <span className="font-extrabold text-text px-3">
            Growing B2B
        </span>{" "}
        Brands
    </h2>
);

const TitleB2C = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[70px] md:!leading-20 tracking-wider font-bold">
        Strategic Content for{" "}
        <span className="font-extrabold text-text px-3">
            Growing B2C
        </span>{" "}
        Brands
    </h2>
);

const TitleFounder = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[64px] md:!leading-20 tracking-wider font-bold">
        <span className="font-extrabold text-text">
            Personal Branding
        </span>{" "}
        through powerful social media
    </h2>
);

const Page = async ({ params }) => {
    const { service } = await params;

    return (
        <main>
            <Hero
                title={
                    service === "content-B2B"
                        ? TitleB2B
                        : service === "content-B2C"
                            ? TitleB2C
                            : TitleFounder
                }
                desc={
                    service === "content-B2B"
                        ? "We craft compelling B2B content that builds trust, engages decision-makers, and drives conversions. From blogs to website copy, we help businesses communicate effectively."
                        : service === "content-B2C"
                            ? "We create compelling B2C content that captures attention, builds brand loyalty, and drives engagement. From social media to blogs, we help brands connect with their audience effectively."
                            : "We empower founders to build credibility, expand their reach, and create meaningful connections. From LinkedIn to YouTube, we craft content that positions you as a leader in your industry."
                }
            />
            <ContentSolutions
                title={
                    service === "content-B2B"
                        ? "Content Solutions for Impactful B2B Communication"
                        : service === "content-B2C"
                            ? "Engaging Content Solutions for B2C Brands"
                            : "Social Media Solutions for Founders"
                }
                data={
                    service === "content-B2B"
                        ? contentSolutions
                        : service === "content-B2C"
                            ? contentSolutionsB2C
                            : contentSolutionsSM
                }
            />
            <BuildOurStory />
        </main>
    );
};

export default Page;
