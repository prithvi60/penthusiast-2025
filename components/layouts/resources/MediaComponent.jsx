import { Gradient } from "@/components/UI/Gradient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaComponent = ({ media }) => {

    return (
        <section className="padding w-full space-y-14">
            <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
                MEDIA
            </h2>
            <div className="w-full grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-10">
                <Gradient rotate />
                {media.map((list, idx) => (
                    <Link
                        title="media post page"
                        key={idx}
                        href={list.url}
                        target="_blank"
                        className="hover:scale-110 transition-all duration-500 ease-in-out shadow-lg rounded-lg bg-white"
                    >
                        <Image
                            title="article picture"
                            src={list.imageUrl}
                            alt={list.imageAlt}
                            width={380}
                            height={450}
                            className="object-contain object-center mx-auto overflow-hidden"
                            sizes="(min-width: 780px) 144px, (min-width: 380px) 128px, calc(100vw - 244px)"
                        />
                        <h3 className="font-medium text-base md:text-lg p-4">{list.title}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MediaComponent;
