import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export const navLinks = [
    { menu: "home", link: "/" },
    { menu: "about", link: "/about" },
    {
        menu: "services",
        subMenus: [
            { menu: "service 1", link: "/service1" },
            { menu: "service 2", link: "/service2" },
            { menu: "service 3", link: "/service3" },
        ],
    },
    {
        menu: "resources",
        subMenus: [
            { menu: "resources 1", link: "/resources" },
            { menu: "resources 2", link: "/resources" },
        ],
    },
];

export const footerLinks1 = [
    // { menu: "Helpful Links", href: "/helpful-links" },
    { menu: "Home", href: "/" },
    { menu: "About", href: "/about" },
    { menu: "Services", href: "/services" },
    { menu: "Resources", href: "/resources" },
    { menu: "Contact Us", href: "/contact" },
];

export const footerLinks2 = [
    // { menu: "Topics & Types", href: "/topics-types },
    { menu: "Content - B2B", href: "/content-B2B" },
    { menu: "Content - B2C", href: "/content-B2C" },
    { menu: "For Founders", href: "/founders" },
];

export const footerLinks3 = [
    { menu: "Blog", href: "/blog" },
    { menu: "Work samples", href: "/work-samples" },
    { menu: "Media", href: "/media" },
    { menu: "History", href: "/history" },
];

export const footerLinks4 = [
    { menu: "Legal", href: "/legal" },
    { menu: "Terms of Service", href: "/terms-service" },
    { menu: "Privacy Policy", href: "/privacy-policy" },
    { menu: "Other Policies", href: "/other-policies" },
];

export const socialLinks = [
    {
        icon: (
            <FaInstagram className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaYoutube className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
        ),
        href: "#",
    },
];

export const heroMarquee = [
    "Content Writing",
    "Content creation",
    "Social media",
    "Founder’s  page management",
];

export const ourClients = [
    { logo: "/client-1.png", alt: "logo" },
    { logo: "/client-2.png", alt: "logo" },
    { logo: "/client-3.png", alt: "logo" },
    { logo: "/client-4.png", alt: "logo" },
];
