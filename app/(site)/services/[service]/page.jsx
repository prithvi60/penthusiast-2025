import BuildOurStory from "@/components/layouts/BuildOurStory";
import { ClientSpotlight } from "@/components/layouts/ClientSpotLight";
import ContentSolutions from "@/components/layouts/services/ContentSolutions";
import Hero from "@/components/layouts/services/Hero";
import HowWeMake from "@/components/layouts/services/HowWeMake";
import WhyQualityContent from "@/components/layouts/services/WhyQualityContent";
import { ServiceCard } from "@/components/UI/CardComponent";
import {
    contentSolutions,
    contentSolutionsB2C,
    contentSolutionsSM,
    HWEB2BContent,
    HWEB2CContent,
    HWEFounderContent,
    serviceB2BClients,
    serviceB2CClients,
    WQCB2BContent,
    WQCB2CContent,
    WQCFounderContent,
} from "@/utils/Data";
import React from "react";

const TitleB2B = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[70px] md:!leading-20 tracking-wider font-bold">
        Strategic Content for{" "}
        <span className="font-extrabold text-text px-3">
            Growing B2B / Sass
        </span>{" "}
    </h2>
);

const HWEB2B = () => (
    <h2 className="text-4xl md:text-5xl lg:text-[60px] md:!leading-20 tracking-wider font-bold text-center">
        How do we make an{" "}
        <span className="font-extrabold text-text px-3">impact on B2B?</span>{" "}
    </h2>
);

const TitleB2C = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[70px] md:!leading-20 tracking-wider font-bold">
        Strategic Content for{" "}
        <span className="font-extrabold text-text px-3">Growing B2C</span> Brands
    </h2>
);

const HWEB2C = () => (
    <h2 className="text-4xl md:text-5xl lg:text-[60px] md:!leading-20 tracking-wider font-bold text-center">
        How do we make an{" "}
        <span className="font-extrabold text-text px-3">impact on B2C?</span>{" "}
    </h2>
);

const TitleFounder = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-[64px] md:!leading-20 tracking-wider font-bold">
        <span className="font-extrabold text-text">Personal Branding</span> through
        powerful social media presence
    </h2>
);

const HWEFounder = () => (
    <h2 className="text-4xl md:text-5xl lg:text-[60px] md:!leading-20 tracking-wider font-bold text-center">
        How we make an{" "}
        <span className="font-extrabold text-text px-3">
            Impact for Founders?
        </span>{" "}
    </h2>
);

const WQCTitle = () => (
    <h2 className="text-4xl md:text-5xl lg:text-[60px] md:!leading-20 tracking-wider font-bold text-center">
        Why Quality <span className="font-extrabold text-text px-3">Content</span>{" "}
        Matters?
    </h2>
);

const Page = async ({ params }) => {
    const { service } = await params;

    return (
        <div>
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
                        ? "We craft compelling B2B content that builds trust, engages decision-makers, and drives traffic. From blogs to website copy, we help businesses communicate effectively."
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
            <HowWeMake
                title={
                    service === "content-B2B"
                        ? HWEB2B
                        : service === "content-B2C"
                            ? HWEB2C
                            : HWEFounder
                }
                data={
                    service === "content-B2B"
                        ? HWEB2BContent
                        : service === "content-B2C"
                            ? HWEB2BContent
                            : HWEFounderContent
                }
            />
            <WhyQualityContent
                title={WQCTitle}
                data={
                    service === "content-B2B"
                        ? WQCB2BContent
                        : service === "content-B2C"
                            ? WQCB2BContent
                            : WQCFounderContent
                }
            />
            {service !== "founders" && (
                <ServiceCard subTitle={"Client Spotlights"}
                    title={service === "content-B2B"
                        ? "Showcasing our B2B impactful client collaborations"
                        : service === "content-B2C"
                            ? "Showcasing our B2C impactful client collaborations"
                            : "Showcasing our Founder's impactful client collaborations"} data={
                                service === "content-B2B" ? serviceB2BClients : serviceB2CClients
                            } />
            )}
            <BuildOurStory />
        </div>
    );
};

export default Page;
