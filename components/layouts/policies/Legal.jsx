import { Gradient } from "@/components/UI/Gradient";
import React from "react";
import { GiFeather } from "react-icons/gi";

const Legal = ({ data, title, type }) => {
    return (
        <section className="w-full padding space-y-20 md:space-y-32">
            <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
                {title}
            </h2>
            <div className="space-y-8 relative max-w-6xl mx-auto">
                <Gradient rotate />
                {type && (
                    <h3 className="uppercase text-xl sm:text-2xl lg:text-3xl tracking-wider font-bold">
                        Terms and Conditions
                    </h3>
                )}

                <p className="text-base md:text-lg xl:text-xl font-medium">
                    {data.desc}
                </p>
                {data.lists.map((list, idx) => (
                    <div className="space-y-6" key={idx}>
                        <h4 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider">
                            {list.title}
                        </h4>
                        {list.para && (
                            <p className="text-base md:text-lg xl:text-xl font-medium">
                                {list.para}
                            </p>
                        )}
                        {list.points && (
                            <ul className={`"text-base md:text-lg lg:text-xl space-y-2 list-disc list-inside ${(list.title === "3. User Conduct" || list.title === "9. Contact Us") ? "ml-5" : "ml-2"}`}>
                                {list.points.map((point, id) => (
                                    <li
                                        key={id}
                                        className="text-base md:text-lg xl:text-xl font-medium flex items-start gap-x-3"
                                    >
                                        <GiFeather className="text-base shrink-0 lg:text-lg mt-2" />
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
                {title === "terms of service" && (
                    <p className="text-base md:text-lg xl:text-xl font-medium">
                        By using Penthusiasts, you acknowledge that you have read, understood, and agree to these Terms of Service.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Legal;
