import { Gradient } from "@/components/UI/Gradient";
import React from "react";

const Legal = ({ title }) => {
    return (
        <section className="w-full padding space-y-14">
            <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
                {title}
            </h2>
            <div className="space-y-8 relative max-w-6xl mx-auto">
                <Gradient rotate />
                <h4 className="uppercase text-xl sm:text-2xl lg:text-3xl tracking-wider font-medium">
                    ARTICLE 1- DEFINITIONS
                </h4>
                <div className="space-y-2">
                    <p className="text-base md:text-lg lg:text-xl">
                        Applicable Website: This Privacy Policy applies to Content Whale, and
                        henceforth content-whale.com will be referred to as “Website.”
                        “Website” will also cover any future development of subsidiary
                        websites and mobile applications.
                    </p>
                    <ul className="list-decimal list-inside text-base md:text-lg lg:text-xl space-y-2">
                        <li>
                            Effective Date: The date that this Privacy Policy comes into effect
                            will be known as “Effective Date.” So, the effective date for this
                            Privacy Policy is (insert date).
                        </li>
                        <li>
                            Parties: The data controller, Content Whale, and the user, you, will
                            hereafter be individually referred to as “Party” and unitedly
                            referred to as “Parties.”
                        </li>
                        <li>
                            Data Controller: The owner, publisher, and operator of the website
                            are the Data Controller. Data Controller is the party responsible
                            for the collection of data. The Data Controller or the Data
                            Controller's property will be referred to using first-person
                            pronouns such as we, us, our and ours.
                        </li>
                        <li>
                            User: Contingent on your agreement to the Privacy Policy and
                            continued use of the website, the user will here forth be referred
                            to like you, the user or any applicable second-person pronoun such
                            as your and yours.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Legal;
