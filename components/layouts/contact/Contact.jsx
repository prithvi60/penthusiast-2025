import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { Gradient } from "@/components/UI/Gradient";
import { ContactForm } from "@/components/features/ContactForm";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="w-full relative padding flex flex-col gap-20 md:gap-0 md:flex-row items-start justify-between max-w-5xl mx-auto">
            <Gradient rotate />
            <div className="w-full md:w-3/5 space-y-5 md:sticky md:top-32">
                <div className="space-y-3">
                    <h5 className="text-text text-2xl md:text-3xl font-semibold tracking-wider">Get in touch</h5>
                    <p className="text-base md:text-lg">
                        We are here for you! How can we help?
                    </p>
                </div>
                <ContactForm />
            </div>
            <div className="space-y-4 md:space-y-10 w-full md:w-2/5">
                <Image
                    title="illustration"
                    src={"/contact.svg"}
                    alt="illustration"
                    width={250}
                    height={250}
                    className="pb-10 mx-auto"
                />
                <div className="space-y-3">
                    <p className="text-sm flex items-center gap-2">
                        <span>
                            <FaPhone className="text-lg shrink-0 text-text" />
                        </span>
                        91-90032 85687
                    </p>
                    <p className="text-sm flex items-center gap-2">
                        <span>
                            <MdEmail className="text-xl shrink-0 text-text" />
                        </span>
                        <Link href={"mailto:reachout@penthusiasts.com"} className="hover:text-text hover:underline">reachout@penthusiasts.com</Link>
                    </p>
                    <div className="text-sm flex gap-2">
                        <IoLocation className="text-xl shrink-0 text-text" />
                        <p className="text-sm">
                            Reg Address:<br />
                            Penthusiasts,<br />
                            #12, Bharathi Nagar 1st Street,<br />
                            Thirumullaivoyal, Chennai-62
                        </p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <MdLocationCity className="text-xl shrink-0 text-text" />
                        <p>
                            Work Location:<br />
                            Penthusiasts,<br />
                            4th Floor, Woco Spaces, No 11/38, Status Quo Building,<br /> Sterling Rd, Seetha Nagar,<br />
                            Nungambakkam, Chennai, Tamil Nadu 600034
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
