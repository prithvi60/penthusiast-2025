import Link from "next/link";
import {
    footerLinks1,
    footerLinks2,
    footerLinks3,
    footerLinks4,
    socialLinks,
} from "@/utils/Data";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className={`px-5 py-[40px] md:px-10 lg:px-[80px] md:py-[70px] relative space-y-6 md:space-y-10 w-full`}
        >
            <div
                className={`absolute -z-10 h-full inset-0 bg-radial from-gradient-1 to-gradient-2 sm:h-64 blur-3xl opacity-20 rounded-full rotate-[4deg] w-[90%] sm:m-auto`}
            />
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-y-6">
                    <Link title="logo" href={"/"} className="flex items-center gap-2">
                        <Image
                            title={"logo"}
                            src={
                                "https://ik.imagekit.io/webibee/penthusiasts%20logo.svg?updatedAt=1743161885549"
                            }
                            alt="penthusiasts logo"
                            width={180}
                            height={180}
                            className="object-contain object-center"
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between gap-x-3 gap-y-6 md:gap-y-8">
                    <div className="flex flex-col gap-y-6 sm:flex-row justify-between md:gap-6 lg:gap-y-6">
                        <div className="block space-y-2 w-max mx-auto sm:w-full sm:mx-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.75584567840235!2d80.18601152946367!3d13.096222760995541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52632c8fa760a7%3A0xa89c2fd5d4ccbeab!2sPenthusiasts!5e0!3m2!1sen!2sin!4v1743595995818!5m2!1sen!2sin"
                                title="our office location"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-28 w-64 sm:w-40 xl:w-56 xl:h-32"
                            ></iframe>
                            <h4 className="text-sm md:text-base font-semibold tracking-wider text-text">
                                Registered Address:
                            </h4>
                            <p className="text-xs md:text-sm">
                                Penthusiasts,
                                <br />
                                #12, Bharathi Nagar 1st Street,
                                <br />
                                Thirumullaivoyal, Chennai-62
                            </p>
                        </div>
                        <div className="block space-y-2 w-max mx-auto sm:w-full sm:mx-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4782.454727935702!2d80.22247370000001!3d13.055179699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676179fa19a5%3A0x1e756da6c3fde677!2sRAASI%20BUSINESS%20CENTRE!5e1!3m2!1sen!2sin!4v1767950874727!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-28 w-64 sm:w-40 xl:w-56 xl:h-32"
                            ></iframe>
                            <h4 className="text-sm md:text-base font-semibold tracking-wider text-text">
                                Work Location:
                            </h4>
                            <p className="text-xs md:text-sm">
                                Penthusiasts,
                                <br />
                                #37A RAASI BUSINESS CENTRE 
                                <br />Puliyur 2nd Main Rd,<br /> Trustpuram, Kodambakkam,
                                <br />
                                Chennai, Tamil Nadu 600024
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:flex md:items-start md:justify-between md:flex-row gap-x-4 gap-y-4 md:gap-2 lg:gap-3 xl:gap-10">
                        <div className="block space-y-3">
                            {/* <h4 className="text-lg font-medium capitalize tracking-wider md:text-xl">
                            Helpful Links
                        </h4> */}
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks1.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-sm capitalize md:text-base tracking-wide font-medium`}
                                    >
                                        <Link title={list.menu} href={list.href}>
                                            {list.menu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="block space-y-3">
                            {/* <h4 className="text-lg font-medium capitalize tracking-wider md:text-xl">
                            Topics & Types
                        </h4> */}
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks2.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-sm capitalize md:text-base tracking-wide font-medium`}
                                    >
                                        <Link title={list.menu} href={list.href}>
                                            {list.menu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="block space-y-3">
                            {/* <h4 className="text-lg font-semibold tracking-wider md:text-xl">
                            Support
                        </h4> */}
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks3.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-sm capitalize md:text-base tracking-wide font-medium`}
                                    >
                                        <Link title={list.menu} href={list.href}>
                                            {list.menu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="block space-y-3">
                            {/* <h4 className="text-lg font-semibold tracking-wider md:text-xl">
                            Support
                        </h4> */}
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks4.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-sm capitalize md:text-base tracking-wide font-medium`}
                                    >
                                        <Link title={list.menu} href={list.href}>
                                            {list.menu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-4 lg:gap-8 font-medium`}
            >
                <ul className="flex items-center gap-2.5">
                    {socialLinks.map((list, idx) => (
                        <li key={idx} className="flex-shrink-0">
                            <Link title="icons" href={list.href}>
                                {list.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-center font-medium lg:text-start md:text-base">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-text font-semibold">Penthusiasts Inc</span> .
                    All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
