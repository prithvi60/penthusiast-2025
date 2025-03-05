import BuildOurStory from '@/components/layouts/BuildOurStory'
import ContentSolutions from '@/components/layouts/services/ContentSolutions'
import Hero from '@/components/layouts/services/Hero'
import React from 'react'

const TitleB2B = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
        Strategic Content for
        <span className="uppercase font-extrabold text-text px-3">
            Growing B2B
        </span>{" "}
        Brands
    </h2>
);

const TitleB2C = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
        Strategic Content for
        <span className="uppercase font-extrabold text-text px-3">
            Growing B2C
        </span>{" "}
        Brands
    </h2>
);

const TitleFounder = () => (
    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
        <span className="uppercase font-extrabold text-text px-3">
            Personal Branding
        </span>{" "}
        through powerful social media
    </h2>
);

const Page = async ({ params }) => {
    const { service } = await params;

    return (
        <main>
            <Hero title={service === "content-B2B" ? TitleB2B : service === "content-B2C" ? TitleB2C : TitleFounder} />
            <ContentSolutions />
            <BuildOurStory />
        </main>
    )
}

export default Page
