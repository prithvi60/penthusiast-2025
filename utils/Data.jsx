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
    // { menu: "Services", href: "/services" },
    // { menu: "Resources", href: "/resources" },
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
    // { menu: "History", href: "/resources/history" },
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
    { logo: "/client-2.png", alt: "atlantic rcm logo" },
    { logo: "/client-3.png", alt: "eClaim status logo" },
    { logo: "/client-4.png", alt: "cloudbankin logo" },
    { logo: "/client-5.png", alt: "bitsCrunch logo" },
    { logo: "/client-6.png", alt: "SKC logo" },
    { logo: "/client-7.png", alt: "canit solution logo" },
    { logo: "/client-8.png", alt: "clique logo" },
    { logo: "/client-9.png", alt: "emami logo" },
    { logo: "/client-10.png", alt: "ticket logo" },
    { logo: "/client-11.png", alt: "vurve logo" },
    { logo: "/client-12.png", alt: "go floaters logo" },
    { logo: "/client-13.png", alt: "swan logo" },
    { logo: "/client-14.png", alt: "t10 sports logo" },
    { logo: "/client-15.png", alt: "tata soulful logo" },
    { logo: "/client-16.png", alt: "wild creek logo" },
];

export const domains = [
    "SaaS",
    "Web3",
    "AI",
    "Fintech",
    "PE & Investments",
    "Deep Tech",
    "Medical Billing & Coding",
    "Sales & Marketing",
    "HR & Payroll",
    "Food Tech",
    "Manufacturing",
    "Solar & Renewable Energy-FMCG",
    "Beauty",
    "Restaurant & Fine Dining",
    "Travel",
    "Lifestyle",
    "Sports",
    "Menswear",
    "Active wear",
    "Women's Fashion & Jewellery",
];

export const B2BContentHome =
{
    lists: [
        "Website Landing Page Content",
        "Landing page copywriting",
        "Blog Writing",
        "LinkedIn Content Creation for Founders",
    ],
    tag: [
        { number: "1M+", name: "Impressions" },
        { number: "1000+", name: "Projects" },
        { number: "AI", name: "Content" }
    ],
}

export const B2CContentHome =
{
    lists: ["Social Media Content Creation for Brands",
        "LinkedIn Content Creation",
        "Instagram Content Creation",
        "Blogs & Articles"],
    tag: [
        { number: "9K+", name: "Traffic" },
        { number: "2M+", name: "Impressions" },
        { number: "5000+", name: "Pieces " }
    ],
}

export const SMContentHome =
{
    lists: ["Personal Branding Services",
        "Linkedin, Instagram & Youtube for founders"],
    tag: [
        { number: "10K+", name: "Followers - LinkedIn" },
        { number: "10K+", name: "Impressions" },
        { number: "25+", name: "Leaders" }
    ],
}


export const accordionItems = [
    {
        title:
            "What sets your content marketing agency apart from others in the industry?",
        content:
            "We stand out by offering tailored content solutions, from writing diverse content types to providing comprehensive content audits, all designed to meet your unique requirements.",
    },
    {
        title:
            "Can we customize your services & avail content requirements based on our need?",
        content:
            "TWe are adaptable, and are always open to customizing our services to best suit your needs.",
    },
    {
        title:
            "Do you specialize in a particular content niche, or can you handle a wide range of industries?							",
        content:
            "We are versatile and skilled in crafting content for various sectors and in different forms like blogs, social media, PR articles, and more, ensuring a personalized approach for your business.",
    },
    {
        title:
            "Can you help us assess our existing content's performance and quality?",
        content:
            "Absolutely, we offer in-depth content audits as a standalone service, providing comprehensive reports to enhance your existing content strategies.",
    },
    {
        title:
            "How do you balance work commitments with work-life balance for your team?",
        content:
            "Our stress-free work culture prioritizes team well-being, allowing writers to take on projects based on bandwidth to ensure a healthy work-life balance while delivering quality results for our clients.",
    },
    {
        title: "What are your work timings & how can I get in touch?",
        content:
            "We work between 9am to 6pm everyday from Monday to Friday.You can contact us by filling out the form or reach out to us at Phone: +91-90032 85687 | Email: reachout@penthusiasts.com",
    },
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
        avatar: "/avatar-1.jpg",
        review:
            "Throughout our engagement with Penthusiasts, their meticulous approach to ensuring everything went according to plan impressed us. Their rigorous work ethic, dedication, and commitment to consistently delivering content and extensive follow-ups were remarkable. If you're looking for a reliable partner to produce quality content, look no further.",
        name: "Congruent",
        position: "Congruent Solutions",
    },
    {
        avatar: "/avatar-1.jpg",
        review:
            "We have been working with Penthusiasts for a while now. They handle some of our blog writing requirements. Their service has been extremely professional, with high-quality content delivered on time. More importantly, they do the necessary research and write a well-informed article as required. I wish them the best in the years to come. ",
        name: "CANIT",
        position: "CANIT Solutions",
    },
    {
        avatar: "/avatar-1.jpg",
        review:
            "During our partnership with penthusiast, we were shown promising new ways to market our company. Today we work with statistics and more accurate data and realize the digital space is an essential tool for our products to reach the right decision-maker in the industry. We highly recommend Penthusiast to any business that needs a hand in improving its business through digital marketing.",
        name: "XYMA",
        position: "XYMA Analytics",
    },
    {
        avatar: "/avatar-1.jpg",
        review:
            "Working with the Penthusiasts Team has been an absolute pleasure! Their dedication, expertise, deep understanding of our requirements, and commitment to excellence have positively impacted our work. Their creative solutions have always exceeded our expectations. I would recommend Penthusiast to anyone seeking excellent expertise and an outstanding partner for their work. They truly go above and beyond to deliver the job on time with excellence!",
        name: "LYFOGO",
        position: "LYFnGo",
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

export const contentSolutionsB2C = [
    { icon: "/icon-1.svg", desc: "LinkedIn Content Creation" },
    { icon: "/icon-2.svg", desc: "Instagram Content Creation" },
    { icon: "/icon-3.svg", desc: "Blogs & Articles" },
];

export const contentSolutionsSM = [
    { icon: "/icon-1.svg", desc: "Personal Branding Services" },
    { icon: "/icon-2.svg", desc: "Linkedin, Instagram & Youtube for founders" },
    { icon: "/icon-3.svg", desc: "Blog Writing" },
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
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
];

export const B2BContent = [
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
];

export const B2CContent = [
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "1mb.pdf",
    },
    {
        field: "Field",
        type: "Saas",
        img: "/blog.png",
        alt: "image",
        pdf: "500kb.pdf",
    },
];
