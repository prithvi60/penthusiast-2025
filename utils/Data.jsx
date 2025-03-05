import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";

export const navLinks = [
    { menu: "home", link: "/" },
    { menu: "about", link: "/about" },
    {
        menu: "services",
        subMenus: [
            { menu: "Content - B2B", link: "/services/content-B2B" },
            { menu: "Content - B2C", link: "/services/content-B2C" },
            { menu: "For Founders", link: "/services/founders" },
        ],
    },
    {
        menu: "resources",
        subMenus: [
            { menu: "Blog", link: "/resources/blog" },
            { menu: "Work samples", link: "/resources/works" },
            { menu: "Media", link: "/resources/media" },
            // { menu: "History", link: "/resources/history" },
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
    { menu: "Content - B2B", href: "/services/content-B2B" },
    { menu: "Content - B2C", href: "/services/content-B2C" },
    { menu: "For Founders", href: "/services/founders" },
];

export const footerLinks3 = [
    { menu: "Blog", href: "/resources/blog" },
    { menu: "Work samples", href: "/resources/works" },
    { menu: "Media", href: "/resources/media" },
    { menu: "History", href: "/resources/history" },
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
        href: "https://www.instagram.com/penthusiasts_2017",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
        ),
        href: " https://www.linkedin.com/company/penthusiasts2017",
    },
    {
        icon: (
            <FaFacebook className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
        ),
        href: "https://www.facebook.com/penthusiasts",
    },
];

export const heroMarquee = [
    "Content Writing",
    "Content creation",
    "Social media",
    "Founder’s  page management",
];

export const ourClients = [
    { logo: "/client-1.png", alt: "congruent logo" },
    { logo: "/client-2.png", alt: "inscribe logo" },
    { logo: "/client-3.png", alt: "atlantic rcm logo" },
    { logo: "/client-4.png", alt: "eClaim status logo" },
    { logo: "/client-5.png", alt: "bitsCrunch logo" },
    { logo: "/client-6.png", alt: "yuukke logo" },
    { logo: "/client-7.png", alt: "cloudbankin logo" },
];

// About Page

export const achievements = [
    {
        list: [
            {
                para: (
                    <li className="text-base md:text-lg">
                        Content support for AI modules of SaaS products
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        <span className="font-bold px-1">1M</span>impressions on
                        bitsCrunch's website contributing to blog traffic
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        Assisted<span className="font-bold px-1">25+</span>Founders &
                        Thought leaders with their Social Media presence & Personal
                        Branding.
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        Delivered over<span className="font-bold px-1">1000</span>projects
                        across diverse domains with B2B and B2C sectors over the past 7
                        years.
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        Created and published<span className="font-bold px-1">5000+</span>
                        content pieces.
                    </li>
                ),
            },
        ],
    },
    {
        list: [
            {
                para: (
                    <li className="text-base md:text-lg">
                        <span className="font-bold px-1">9k+</span>Organic traffic on a
                        client's website in the beauty services sector
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        <span className="font-bold px-1">10k</span>followers on a client
                        company's LinkedIn handle in 2 years of engagement
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        Garnered<span className="font-bold px-1">2M+</span>impressions on
                        Website Content & Blogs
                    </li>
                ),
            },
            {
                para: (
                    <li className="text-base md:text-lg">
                        Achieved<span className="font-bold px-1">10K+</span>impressions on
                        Social Media Content for Businesses
                    </li>
                ),
            },
        ],
    },
];

export const ourGuides = [
    {
        desc: "Create content that forges connections, sparks conversations, and results in conversion for business growth.",
        title: "Mission",
    },
    {
        desc: "To help businesses slay their digital presence with strategically crafted website and social media content.",
        title: "Vision",
    },
    {
        desc: "We believe writers deserve more than just beanbag chairs and free coffee. We're talking real support, real opportunities, and a culture where their creativity can actually, you know, breathe.",
        title: "Culture",
    },
    {
        desc: "Each year, we welcome at least one talented woman back to the workforce after her maternity leave, offering her a Junior or Senior Content Writer position to reignite her career.",
        title: "Cause",
    },
];

export const reviews = [
    {
        avatar: "",
        review:
            "Draft has been instrumental in helping us scale our content while maintaining high quality that both users and search engines love. We've beaten all projections thanks to the fantastic team at Draft.",
        name: "Krinal Mehta",
        position: "Senior SEO Manager @ Freshbooks",
    },
    {
        avatar: "",
        review:
            "Draft has been instrumental in helping us scale our content while maintaining high quality that both users and search engines love. We've beaten all projections thanks to the fantastic team at Draft.",
        name: "Krinal Mehta",
        position: "Senior SEO Manager @ Freshbooks",
    },
    {
        avatar: "",
        review:
            "Draft has been instrumental in helping us scale our content while maintaining high quality that both users and search engines love. We've beaten all projections thanks to the fantastic team at Draft.",
        name: "Krinal Mehta",
        position: "Senior SEO Manager @ Freshbooks",
    },
    {
        avatar: "",
        review:
            "Draft has been instrumental in helping us scale our content while maintaining high quality that both users and search engines love. We've beaten all projections thanks to the fantastic team at Draft.",
        name: "Krinal Mehta",
        position: "Senior SEO Manager @ Freshbooks",
    },
];

export const timeline = [
    {
        year: "2017",
        title: "The Foundation",
        lists: [
            "Content is the King",
            "established by Poornima TM",
            "Blogs and article writing for B2C businesses - Derby menswear",
            "Facebook & Instagram content creation",
        ],
    },
    {
        year: "2018",
        title: "Expanding Horizons",
        lists: [
            "First B2B Fintech Blog Writing project Product Description Writing",
        ],
    },
    {
        year: "2019",
        title: "Branding for Leaders",
        lists: [
            "First Personal Branding Project for FoundersFacebook Content Creation for Author Rakhi Kapoor & Vijay Kapoor",
        ],
    },
    {
        year: "2020 - 2021",
        title: "Content Development",
        lists: [
            "First Govt Project with TN MSME Trade & Investment Promotion BureauWebsite Content Writing,Facebook Content Creation",
        ],
    },
    {
        year: "2021",
        title: "Web3 Content Creation",
        lists: [
            "First Web3.o Project with bitsCrunch - Website Content Writing & Blog Writing",
        ],
    },
    {
        year: "2022",
        title: "Team Transition",
        lists: ["Transition of team from freelancers to employees on payroll"],
    },
    { year: "2023", title: "Team", lists: ["Team of 6"] },
    {
        year: "2024",
        title: "7-Year Content Dominance",
        lists: [
            "7 years of operations",
            "1000+ Content Delivery",
            "500+ Projects",
            "25+ domains",
        ],
    },
    {
        year: "2025",
        title: "Stepping Up",
        lists: ["Stepping into the 8th year with a fresh perspective"],
    },
];

// services page

export const contentSolutions = [
    { icon: "/icon-1.svg", desc: "Website Landing Page Content" },
    { icon: "/icon-2.svg", desc: "Landing page copywriting" },
    { icon: "/icon-3.svg", desc: "Blog Writing" },
    { icon: "/icon-4.svg", desc: "LinkedIn Content Creation for Founders" },
];

// resources page

// media

export const media = [
    { link: "https://www.youtube.com/watch?v=t3o9vdcM1Dw", img: "/media-1.png" },
    {
        link: "https://www.penbugs.com/its-never-too-late-to-dream-entrepreneur-poornima-opens-up/",
        img: "/media-2.png",
    },
    {
        link: "https://csufentrepreneurship.com/beyond-barriers-2024-csuf-center-for-entrepreneurship-supports-women-entrepreneurs-in-delhi/",
        img: "/media-3.png",
    },
    {
        link: "https://www.bwmarketingworld.com/article/ai-generated-content-balancing-creativity-efficiency-in-content-marketing-476800",
        img: "/media-4.png",
    },
    {
        link: "https://timesofindia.indiatimes.com/blogs/voices/uplifting-tech-startups-with-content-marketing-power-of-quality-content/",
        img: "/media-5.png",
    },
    {
        link: "https://makerstribe.in/events/global-freelancers-festival/",
        img: "/media-1.png",
    },
    {
        link: "https://cxotoday.com/cxo-bytes/what-role-does-content-marketing-play-in-any-tech-startup/",
        img: "/media-6.png",
    },
    {
        link: "https://www.adgully.com/you-automatically-become-a-leader-the-moment-you-have-a-child-poornima-tm-132344.html",
        img: "/media-3.png",
    },
];

// works

export const WCP = [
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
];

export const B2BContent = [
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
];

export const B2CContent = [
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
    { field: "Field", type: "Saas", img: "/blog.png", alt: "image" },
];
