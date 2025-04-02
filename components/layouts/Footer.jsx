import Link from "next/link";
import { footerLinks1, footerLinks2, footerLinks3, footerLinks4, socialLinks } from "@/utils/Data";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={`padding relative space-y-6 md:space-y-10 w-full`}>
            <div
                className={`absolute -z-10 h-full inset-0 bg-radial from-gradient-1 to-gradient-2 sm:h-64 blur-3xl opacity-20 rounded-full rotate-[4deg] w-[90%] sm:m-auto`}
            />
            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between gap-6 lg:gap-8 w-full">
                <div className="flex flex-col gap-y-6">
                    <Link
                        title="logo"
                        href={"/"}
                        className="flex items-center gap-2"
                    >
                        <Image title={"logo"}
                            src={"https://ik.imagekit.io/webibee/penthusiasts%20logo.svg?updatedAt=1743161885549"}
                            alt="penthusiasts logo" width={180} height={180} className="object-contain object-center" />
                    </Link>
                    {/* <div className="flex flex-col gap-y-6 md:flex-row md:gap-6 lg:flex-col lg:gap-y-6">
                        <div className="block lg:hidden">
                            <h4 className="text-sm font-semibold tracking-wider text-text">Reg Address:</h4>
                            <p className="text-xs">
                                Penthusiasts,<br />
                                #12, Bharathi Nagar 1st Street,<br />
                                Thirumullaivoyal, Chennai-62
                            </p>
                        </div>
                        <div className="block lg:hidden">
                            <h4 className="text-sm font-semibold tracking-wider text-text">Work Location:</h4>
                            <p className="text-xs">
                                Penthusiasts,<br />
                                4th Floor, Woco Spaces, No 11/38, Status Quo Building,<br /> Sterling Rd, Seetha Nagar,<br />
                                Nungambakkam, Chennai, Tamil Nadu 600034
                            </p>
                        </div>
                    </div> */}
                    {/* <div className="hidden lg:block mt-6">
                        <h4 className="text-sm font-semibold tracking-wider text-text">Reg Address:</h4>
                        <p className="text-xs">
                            Penthusiasts,<br />
                            #12, Bharathi Nagar 1st Street,<br />
                            Thirumullaivoyal, Chennai-62
                        </p>
                    </div> */}
                    {/* <ul className="flex justify-center md:hidden items-center gap-2.5">
                        {socialLinks.map((list, idx) => (
                            <li key={idx} className="flex-shrink-0">
                                <Link title="footer social icons" href={list.href}>{list.icon}</Link>
                            </li>
                        ))}
                    </ul> */}
                </div>
                <div className="block space-y-6 md:space-y-8">
                    <div className="grid grid-cols-2 md:flex md:items-start md:justify-between md:flex-row gap-x-0 gap-y-6 md:gap-12">
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
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
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
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
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
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
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
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 md:flex-row justify-between md:gap-6 lg:gap-y-6">
                        <div className="block">
                            <h4 className="text-sm font-semibold tracking-wider text-text">Reg Address:</h4>
                            <p className="text-xs">
                                Penthusiasts,<br />
                                #12, Bharathi Nagar 1st Street,<br />
                                Thirumullaivoyal, Chennai-62
                            </p>
                        </div>
                        <div className="block ">
                            <h4 className="text-sm font-semibold tracking-wider text-text">Work Location:</h4>
                            <p className="text-xs">
                                Penthusiasts,<br />
                                4th Floor, Woco Spaces, No 11/38, Status Quo Building,<br /> Sterling Rd, Seetha Nagar,<br />
                                Nungambakkam, Chennai, Tamil Nadu 600034
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-6 lg:gap-8 font-medium`}>
                <ul className="flex items-center gap-2.5">
                    {socialLinks.map((list, idx) => (
                        <li key={idx} className="flex-shrink-0">
                            <Link title="icons" href={list.href}>{list.icon}</Link>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-center font-medium lg:text-start md:text-base">
                    © {new Date().getFullYear()} <span className="text-text font-semibold">Penthusiasts Inc</span>{" "}. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
