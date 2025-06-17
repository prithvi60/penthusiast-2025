import Link from "next/link";
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
      { menu: "Content - B2B / SaaS", link: "/services/content-B2B" },
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
  { menu: "contact us", link: "/contact" },
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
  { menu: "Content - B2B / SaaS", href: "/services/content-B2B" },
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
  // { menu: "Other Policies", href: "/other-policies" },
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
    href: "https://www.linkedin.com/in/poornima-t-m-895b9095",
  },
  {
    icon: (
      <FaFacebook className="text-xl md:text-3xl text-[#008080] hover:text-[#008080]/60 hover:animate-pulse" />
    ),
    href: "https://www.facebook.com/penthusiasts",
  },
];

export const ourClients = [
  { logo: "/client-11.png", alt: "vurve logo" },
  { logo: "/client-9.png", alt: "mayflower logo" },
  { logo: "/client-1.svg", alt: "congruent logo" },
  { logo: "/client-2.png", alt: "atlantic rcm logo" },
  { logo: "/client-3.png", alt: "eClaim status logo" },
  { logo: "/client-8.png", alt: "clique logo" },
  { logo: "/client-7.png", alt: "canit solution logo" },
  { logo: "/client-10.png", alt: "ticket9 logo" },
  { logo: "/client-5.svg", alt: "bitsCrunch logo" },
  // { logo: "/client-17.jpg", alt: "fabright logo" },
  { logo: "/client-6.png", alt: "SKC logo" },
  { logo: "/client-14.png", alt: "t10 sports logo" },
  { logo: "/client-13.png", alt: "swan logo" },
  { logo: "/client-16.png", alt: "wild creek logo" },
  // { logo: "/client-4.png", alt: "cloudbankin logo" },
  // { logo: "/client-15.png", alt: "tata soulful logo" },
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

export const B2BContentHome = {
  lists: [
    "Blog & Article Writing",
    "Website & Landing Page Content Writing",
    "SEO Content & Optimization",
    "Social Media Content Creation & Management (Linkedin | Instagram | Facebook | YouTube)",
  ],
  tag: [
    { number: "1M+", name: "Impressions" },
    { number: "1000+", name: "Projects" },
    { number: "AI", name: "Content" },
  ],
};

export const B2CContentHome = {
  lists: [
    "Blog & Article Writing",
    "Website & Landing Page Content Writing",
    "SEO Content & Optimization",
    "Social Media Content Creation & Management (Linkedin | Instagram | Facebook | YouTube)",
  ],
  tag: [
    { number: "9K+", name: "Traffic" },
    { number: "2M+", name: "Impressions" },
    { number: "5000+", name: "Pieces " },
  ],
};

export const SMContentHome = {
  lists: [
    "Personal Branding Services for Founders",
    "Linkedin Thought Leadership Content Creation",
    "Instagram | Facebook | YouTube Content Creation & Management",
  ],
  tag: [
    { number: "10K+", name: "Followers - LinkedIn" },
    { number: "10K+", name: "Impressions" },
    { number: "25+", name: "Leaders" },
  ],
};

export const accordionItems = [
  {
    title: "What sets Penthusiasts apart from others in the industry?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        <strong>
          We solve content problems of businesses with the client and not for
          the client.
        </strong>
        We stand out by offering tailored content solutions, from providing
        comprehensive content audits to writing/creating diverse content types,
        all designed to meet your unique requirements.
      </p>
    ),
  },
  {
    title:
      "Can we customize your services and tailor content requirements based on our needs?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        Absolutely! Our content solutions are fully customizable to align with
        your unique brand voice, target audience, and specific marketing goals.
      </p>
    ),
  },
  {
    title:
      "Do you specialize in a particular content niche, or can you handle a wide range of industries?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        We excel in a wide range of industries, from technology and finance to
        lifestyle and healthcare, providing niche-specific, high-quality content
        that resonates with your audience.
      </p>
    ),
  },
  {
    title:
      "Can you help us assess our existing content's performance and quality?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        Absolutely, we offer in-depth content audits as a standalone service,
        providing comprehensive reports to enhance your existing content
        strategies.
      </p>
    ),
  },
  {
    title: "What does your website writing service include?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        Our website writing service covers comprehensive copywriting from home
        pages and landing pages to service pages and blogs, optimized for SEO.
      </p>
    ),
  },
  {
    title:
      "How do you measure the effectiveness of your content writing services?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        We track key performance indicators such as organic traffic, conversion
        rates, engagement metrics, and search rankings to continuously optimize
        and enhance content performance.
      </p>
    ),
  },
  {
    title: "Which industries do you serve for B2B / SaaS content writing?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        Our expertise spans a broad range of industries, including technology,
        finance, healthcare, and manufacturing, ensuring industry-specific
        insights and high-quality content for B2B / SaaS markets.
      </p>
    ),
  },
  {
    title:
      "How do you create engaging B2C content that resonates with consumers?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        We blend creative storytelling, crafting engaging, relatable content
        that builds emotional connections and drives brand loyalty among B2C
        audiences.
      </p>
    ),
  },
  {
    title: "What are your work timings and how can I get in touch with you?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        We work between 9 am to 6 pm every day from Monday to Friday. You can
        contact us by filling out the form or reach out to us at Phone:
        +91-90032 85687 | Email:{" "}
        <Link
          href="mailto:reachout@penthusiasts.com"
          className="text-text font-medium tracking-wide underline underline-offset-4"
        >
          reachout@penthusiasts.com
        </Link>
      </p>
    ),
  },
  {
    title: "Can you provide samples or case studies of your previous work?",
    content: (
      <p className="p-4 bg-white rounded-b-lg text-gray-700">
        Yes, we can share a portfolio of content projects and case studies that
        highlight our expertise in creating high-performing, industry-specific
        content. You can request samples from this link:{" "}
        <Link
          href="/resources/works"
          className="text-text font-medium tracking-wide hover:underline"
        >
          work samples
        </Link>
      </p>
    ),
  },
];

//  //   client spot

export const t10SportTags = [
  { number: "10K", name: "20K" },
  { number: "Just", name: "2 Years" },
  { number: "100,000+", name: "Impression" },
  { number: "Within", name: "24 hrs" },
];

export const bitsCrunchTags = [
  { number: "1M+", name: "Impression" },
  { number: "4 Years", name: "of Service" },
];

export const congruentTags = [
  { number: "5K", name: "28K" },
  { number: "Just", name: "21 Months" },
  { number: "Increased", name: "Engagement" },
  { number: "Organic", name: "Traffic" },
];

export const vurveTags = [
  { number: "9162", name: "Reach" },
  { number: "Within", name: "1 Year" },
];

// About Page

export const achievements = [
  {
    list: [
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">Diverse Sectors:</span>Successfully
            delivered <span className="font-bold px-1">1,000+</span>projects
            across <span className="font-bold px-1">25+</span> domains, spanning
            B2B / SaaS and B2C industries.
          </li>
        ),
      },
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">Content at Scale:</span>Published
            <span className="font-bold px-1">5,000+</span>content pieces,
            reinforcing our expertise in digital storytelling and brand
            communication.
          </li>
        ),
      },
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">Overall Digital Influence: </span>
            Generated a total of<span className="font-bold px-1">2M+</span>
            impressions through website content and blogs, amplifying brand
            visibility for our clients
          </li>
        ),
      },
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">Sports & Apparel:</span>Created
            high-impact social media content for
            <span className="font-bold px-1">T10 Sports,</span>a leading
            sportswear brand, achieving{" "}
            <span className="font-bold px-1">100K+</span>impressions on
            LinkedIn.
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
            <span className="font-bold px-1">Blockchain & Web3:</span>Helped
            <span className="font-bold px-1">bitsCrunch,</span>a blockchain
            analytics company, achieve
            <span className="font-bold px-1">1M+</span>impressions on its
            website through insightful blog content in the Web3 space.
          </li>
        ),
      },
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">Beauty:</span>Contributed to increasing traffic for the <span className="font-bold px-1">Vurve Salon's</span>website through strategic content creation for blogs and web pages
          </li>
        ),
      },
      {
        para: (
          <li className="text-base md:text-lg">
            <span className="font-bold px-1">SaaS:</span> Led a content-driven
            LinkedIn strategy for
            <span className="font-bold px-1">Congruent Solutions,</span>a
            US-based retirement plan administration services and technology
            solutions provider, helping them gain
            <span className="font-bold px-1">10K+</span>followers in just two
            years.
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
    bgColor: "bg-gradient-to-b from-[#ECF7FC] via-[#DDF1F9] to-[#87CEEB]",
  },
  {
    desc: "To help businesses slay their digital presence with strategically crafted website and social media content.",
    title: "Vision",
    bgColor: "bg-gradient-to-b from-[#FFF6D2] via-[#FEF0B7] to-[#FDDA4F]",
  },
  {
    desc: "We believe writers deserve more than just beanbag chairs and free coffee. We're talking real support, real opportunities, and a culture where their creativity can actually, you know, breathe.",
    title: "Culture",
    bgColor: "bg-gradient-to-b from-[#DFF4E2] to-[#39B54A]",
  },
  {
    desc: "Each year, we welcome at least one talented woman back to the workforce after her maternity leave, offering her a Junior or Senior Content Writer position to reignite her career.",
    title: "Cause",
    bgColor: "bg-gradient-to-b from-[#F7DBF9] to-[#E387EB]",
  },
];

export const reviews = [
  {
    avatar: "/client-1.png",
    review:
      "Throughout our engagement with Penthusiasts, their meticulous approach to ensuring everything went according to plan impressed us. Their rigorous work ethic, dedication, and commitment to consistently delivering content and extensive follow-ups were remarkable. If you're looking for a reliable partner to produce quality content, look no further.",
    name: "Congruent",
    position: "Congruent Solutions",
  },
  {
    avatar: "/client-10.png",
    review:
      "During the early days of Ticket9, we had a vision that needed the right words to bring it to life. That’s where Penthusiasts came in. They didn’t just create content, hey understood our story, our passion, and our mission.From brand messaging to platform content, they crafted words that resonated with our audience and helped shape brand message and identity. Their dedication, creativity, and ability to adapt made a real difference in our journey.Grateful to have worked with a team that truly brings stories to life!",
    name: "Santhos Premraj",
    position: " Co-founder, HOP - Ticket9",
  },
  {
    avatar: "/client-7.png",
    review:
      "We have been working with Penthusiasts for a while now. They handle some of our blog writing requirements. Their service has been extremely professional, with high-quality content delivered on time. More importantly, they do the necessary research and write a well-informed article as required. I wish them the best in the years to come.",
    name: "CANIT",
    position: "CANIT Solutions",
  },
  {
    avatar: "/xymalogo.png",
    review:
      "During our partnership with penthusiast, we were shown promising new ways to market our company. Today we work with statistics and more accurate data and realize the digital space is an essential tool for our products to reach the right decision-maker in the industry. We highly recommend Penthusiast to any business that needs a hand in improving its business through digital marketing.",
    name: "XYMA",
    position: "XYMA Analytics",
  },
  {
    avatar: "/LYFnGO_logo.svg",
    review:
      "Working with the Penthusiasts Team has been an absolute pleasure! Their dedication, expertise, deep understanding of our requirements, and commitment to excellence have positively impacted our work. Their creative solutions have always exceeded our expectations. I would recommend Penthusiast to anyone seeking excellent expertise and an outstanding partner for their work. They truly go above and beyond to deliver the job on time with excellence!",
    name: "LYFnGO",
    position: "LYFnGo",
  },
  {
    avatar: "/client-4.png",
    review:
      "Penthusiasts has a dedicated and hardworking team. They are capable of learning any new technology and domain within a short period of time and produce quality content for the respective niche",
    name: "Mani Parthasarathy",
    position: "Director - Cloudbankin",
  },
  {
    avatar: "/tripleDart.png",
    review:
      "Penthusiasts has been a reliable partner for Tripledart helping us scale content volumes and quality. Vaanathi's ace team of writers supported our content marketing for a SaaS company that offers a global employment solution. Within a few weeks, the team nailed our expectations around content quality and delivery. Thanks for your efforts",
    name: "Tripledart",
    position: "Tripledart",
  },
  {
    avatar: "/client-5.png",
    review:
      "As a Founder of an NFT forensics firm, our collaboration with Penthusiasts team has been nothing short of transformative. Their prowess in sculpting compelling narratives for our digital platforms — from insightful blogs to dynamic social media content — has markedly bolstered our online stature. Their keen understanding of our specialized market, coupled with their flair for distilling intricate concepts into engaging discourse, is remarkable. Through their innovative approaches, we've not only expanded our digital footprint but also captivated our audience. Their dedication to excellence and agility in navigating the ever-evolving digital landscape is commendable. I unequivocally endorse Penthusiast for any enterprise aspiring to leave a lasting digital imprint.",
    name: "Bitscrunch",
    position: "Bitscrunch",
  },
  {
    avatar: "/client-11.png",
    review:
      "It's a pleasure working with Penthusiasts! I remember reaching out to Poornima when I was looking for an expert to write blog posts for Vurve Salon. I wasn't sure if anyone I knew was familiar with the beauty industry. Poornima came on board to support me, and this journey has been a collaborative learning experience. She and her team always bring in new ideas, concepts, and keyword-related topics. Her consultative approach and drive to excel continue to inspire me. Excited to continue this successful collaboration and explore even more creative possibilities together!",
    name: "Manoj Samuel",
    position: "Vurve",
  },
];

export const timeline = [
  {
    year: "2017",
    title: "The Spark - Where It All Began",
    para: "Poornima launched Penthusiasts with a simple yet powerful belief - “Content is King”.",
    lists: [
      {
        listTitle: "The first steps included:",
        points: [
          "Writing blogs and articles for B2C brands like Derby Menswear",
        ],
      },
    ],
  },
  {
    year: "2018",
    title: "The Leap into B2B / SaaS",
    lists: [
      {
        listTitle: "Penthusiasts expanded into the corporate world with:",
        points: [
          "The first B2B / SaaS fintech blog project for Cloudbankin",
          "Product description writing diving deeper into brand storytelling",
        ],
      },
    ],
  },
  {
    year: "2019",
    title: "Building Brands, One Story at a Time",
    lists: [
      {
        listTitle:
          "This year marked the entry into personal branding, working with:",
        points: [
          "Vijay Kapoor & Rakhi Kapoor to shape their digital presence with Facebook Content Creation",
          "A new B2C win - Vurve Salon blog writing",
        ],
      },
    ],
  },
  {
    year: "2020 - 2021",
    title: "Making Waves in the Government Sector",
    lists: [
      {
        listTitle: "A proud milestone:",
        points: [
          "Penthusiasts secured its first government project with Tamil Nadu",
        ],
      },
      {
        listTitle: "MTIPB (Trade & Investment Promotion Bureau):",
        points: [
          "Website content writing to support public initiatives",
          "Facebook content creation to enhance outreach",
        ],
      },
    ],
  },
  {
    year: "2021",
    title: "Embracing the Future with Web3.0 & Deep Tech",
    lists: [
      {
        listTitle:
          "Venturing into the next-gen digital world, Penthusiasts collaborated with:",
        points: [
          "bitsCrunch for Web3.0 website, blog content, PR & thought leadership",
          "Xyma Analytics for LinkedIn content creation & Instagram content strategies",
        ],
      },
    ],
  },
  {
    year: "2022-2024",
    title: "Growth, Balance & Milestones",
    para: "Penthusiasts transitioned from freelancers to a strong in-house team, focusing on both growth and well-being.",
    para2:
      "Expanded as a 6 member team to take on bigger, more diverse projects. Introduced wellness holidays to encourage work-life balance.",
    para3:
      "Launched employee wellness programs to foster a healthy work environment",
    lists: [
      {
        listTitle:
          "By 2024, Penthusiasts celebrated seven years of excellence with:",
        points: ["1000+ projects delivered", "Expertise across 25+ domains"],
      },
    ],
  },
  {
    year: "2025",
    title: "The Next Chapter - Bigger, Bolder, and Better!",
    para: "With fresh perspectives and unstoppable momentum, Penthusiasts steps into its 8th year, ready to redefine content marketing once again.",
  },
];

// services page

export const contentSolutions = [
  { icon: "/icon-1.svg", desc: "Website Copywriting" },
  { icon: "/icon-2.svg", desc: "Landing Page Copywriting" },
  { icon: "/icon-3.svg", desc: "Blog Writing" },
  { icon: "/icon-3.svg", desc: "SEO Blogs" },
  { icon: "/icon-4.svg", desc: "LinkedIn Content Creation for B2B / SaaS Businesses" },
];

export const HWEB2BContent = [
  {
    title: "Building a Strong Content Strategy",
    desc: "We craft a data-driven content strategy that aligns with your business goals, ensuring consistent messaging and audience engagement.",
  },
  {
    title: "Establishing Thought Leadership",
    desc: "Our content positions your brand as an industry leader, building trust and credibility through expert insights, research, and authoritative storytelling.",
  },
  {
    title: "Creating High-Value Content Assets",
    desc: "We develop compelling, high-value content like blogs, whitepapers, case studies, and social media posts that educate, engage, and drive conversions.",
  },
  {
    title: "Optimizing Content for SEO",
    desc: "By implementing SEO strategies, we ensure your content ranks higher and reaches the right target audience.",
  },
  {
    title: "Lead Generation with Targeted Content",
    desc: "We amplify your content across channels to maximize reach, engagement, and brand awareness to attract, nurture, and convert leads effectively.",
  },
  {
    title: "Tracking & Optimizing Performance with Analytics",
    desc: "We continuously measure, analyze, and optimize content performance, ensuring data-driven improvements for higher engagement and ROI.",
  },
];

export const WQCB2BContent = [
  {
    title: "Trust Wins Business",
    desc: (
      <p className="text-sm md:text-base">
        Expert content <strong className="px-0.5">connects</strong> and builds credibility with
        your target customers. It makes your brand the go-to authority in your
        space.
      </p>
    ),
  },
  {
    title: "Drives Organic Traffic",
    desc: "SEO-optimized content improves rankings and attracts high-intent visitors.",
  },
  {
    title: "Words That Convert",
    desc: "Persuasive content nurtures prospects and moves them toward action.",
  },
  {
    title: "More Reach, More Impact",
    desc: "A unified content strategy builds brand authority and ensures consistency across all platforms.",
  },
];

export const contentSolutionsB2C = [
  { icon: "/icon-1.svg", desc: "Website Copywriting" },
  { icon: "/icon-2.svg", desc: "Blogs and Articles" },
  {
    icon: "/icon-3.svg",
    desc: "Social Media Content Creation - Facebook, Instagram & Youtube",
  },
];

export const HWEB2CContent = [
  {
    title: "Emotion-Driven Storytelling",
    desc: "We craft relatable content that resonates with your target audience.",
  },
  {
    title: "Engagement-Focused Strategy",
    desc: "Our social media posts and blogs are designed to maximize interactions and shares.",
  },
  {
    title: "Platform-Specific Content",
    desc: "We optimize content for LinkedIn, Instagram, and blogs to match audience behavior.",
  },
  {
    title: "Consistent Brand Voice",
    desc: "We ensure your brand message remains clear and compelling across all platforms.",
  },
  {
    title: "Trend-Driven Approach",
    desc: "We incorporate the latest trends to keep your content fresh and relevant.",
  },
];

export const WQCB2CContent = [
  {
    title: "Increases Audience Engagement",
    desc: "Creative and interactive content keeps your audience hooked.",
  },
  {
    title: "Boosts Brand Visibility",
    desc: " High-quality posts improve social reach and brand awareness.",
  },
  {
    title: "Encourages Customer Loyalty",
    desc: "Engaging storytelling fosters a strong brand-community relationship.",
  },
  {
    title: "Drives Sales & Conversions",
    desc: "Compelling copy moves customers through the buying journey.",
  },
  {
    title: "Enhances Social Proof",
    desc: "Authentic and valuable content builds credibility and trust among consumers.",
  },
];

export const contentSolutionsSM = [
  { icon: "/icon-1.svg", desc: "Personal Branding Consultation" },
  { icon: "/icon-2.svg", desc: "Personal Branding across all social media" },
];

export const HWEFounderContent = [
  {
    title: "Personal Brand Growth",
    desc: "We help founders establish their expertise and industry influence.",
  },
  {
    title: "Multi-Platform Optimization",
    desc: "We tailor content for LinkedIn, Instagram, and YouTube to maximize impact.",
  },
  {
    title: "Authenticity-Driven Approach",
    desc: "We highlight personal stories and professional insights to create meaningful connections.",
  },
  {
    title: "Community Building",
    desc: "We engage audiences through thought-provoking content that sparks discussions.",
  },
  {
    title: "Visibility & Networking",
    desc: "Our strategy enhances reach and fosters valuable business connections.",
  },
];

export const WQCFounderContent = [
  {
    title: "Positions You as a Leader",
    desc: "High-value content showcases your expertise and industry knowledge.",
  },
  {
    title: "Expands Professional Reach",
    desc: "Strategic content creation attracts a wider audience.",
  },
  {
    title: "Builds Trust & Credibility",
    desc: "Authentic storytelling strengthens your professional reputation.",
  },
  {
    title: "Drives Engagement",
    desc: "Engaging content leads to higher interactions and meaningful conversations.",
  },
  {
    title: "Creates Long-Term Impact",
    desc: " Consistently high-quality content establishes a strong digital presence over time.",
  },
];

export const serviceB2BClients = [
  {
    icon: "/client-5.svg",
    title: "Blockchain Analytics Content Strategy",
    achievements: [
      "Significant increase in brand visibility",
      "Enhanced engagement (likes, comments, shares)",
      "Consistent engagement rates with audience",
    ],
    importantMetrics: [
      "Follower growth: 10k to 29k in 2 years",
      "Over 100,000 impressions on a single post within 24 hours",
    ],
    summary:
      "Our team collaborated closely with various internal departments to understand bitsCrunch's operations. We developed a clear strategy, combining subject knowledge with consistency and patience. Content creation spanned multiple formats, including informative blogs, PRs, C-suite interviews, and podcasts, contributing to the client's growth in the blockchain and NFT space.",
    col: false,
    // bgColor: "bg-gradient-to-b from-[#FFFFFF] via-[#DBF7F7E6] to-[#94E6E7B5]",
    bgColor: "bg-linear-to-b from-text to-green-darker text-white",
  },
  {
    icon: "/client-1.svg",
    title: "LinkedIn Content for the Company's Handle",
    achievements: [
      "Enhanced visibility in retirement services",
      "Engaging a targeted professional audience",
      "Stronger thought leadership positioning",
    ],
    importantMetrics: [
      "Organic traffic growth: 5k to 28k within 21 months",
      "Increased engagement on LinkedIn posts",
    ],
    summary:
      "Our team developed and executed a strategic content plan focused on thought leadership, leveraging Congruent Solutions' expertise in retirement technology. By creating insightful and engaging LinkedIn posts, the initiative successfully boosted organic traffic and positioned the company as a trusted voice in its industry.",
    col: true,
    // bgColor: "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F]",
    bgColor: "bg-linear-to-b from-text to-green-darker text-white",
  },
];

export const serviceB2CClients = [
  {
    icon: "/client-11.png",
    title: "Enhancing Online Presence through Blogs",
    achievements: [
      "Improved website visibility through targeted content in a year ",
      "Enhanced customer engagement with salon services",
      "Strengthened online presence in the beauty industry",
    ],
    importantMetrics: [
      "Organic reach: 9,162 within a year ",
      "Website engagement increase",
    ],
    summary:
      "Our  team created engaging website blogs for Vurve Salon, focusing on relevant beauty and wellness topics. This strategic content initiative significantly boosted the salon's online visibility, attracting a substantial organic reach and positioning Vurve as a knowledgeable and appealing destination in the beauty sector.",
    col: true,
    // bgColor: "bg-gradient-to-b from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99]",
    bgColor: "bg-linear-to-b from-text to-green-darker text-white",
  },
  {
    icon: "/client-14.png",
    title: "Brand Awareness on LinkedIn",
    achievements: [
      "Significant increase in brand visibility",
      "Enhanced engagement (likes, comments, shares)",
      "Consistent engagement rates with audience",
    ],
    importantMetrics: [
      "Follower growth: 10k to 29k in 2 years",
      "Over 100,000 impressions on a single post within 24 hours",
    ],
    summary:
      "Over two years, we delivered well-researched, engaging content tailored to trends and sporting events. We collaborated closely with internal teams, developed a clear strategy, and maintained consistency in content delivery, resulting in improved brand awareness and positioning as an authority in the sports apparel sector.",
    col: false,
    // bgColor: "bg-gradient-to-b from-[#FFFFFF] via-[#EFDBD5E9] to-[#B5543999]",
    bgColor: "bg-linear-to-b from-text to-green-darker text-white",
  },
];

// legal services

export const legal = {
  desc: "Welcome to Penthusiasts! These Terms and Conditions govern your use of our website and services. By accessing or using Penthusiasts, you agree to comply with these terms.",
  lists: [
    {
      title: "1. Acceptance of Terms",
      para: "By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
    },
    {
      title: "2. Intellectual Property",
      para: "All content, including text, images, logos, and designs, is the property of Penthusiasts and is protected by intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.",
      // points: ["", "", "",]
    },
    {
      title: "3. User Conduct",
      para: "Users agree to:",
      points: [
        "Use the website for lawful purposes only.",
        "Refrain from posting harmful, defamatory, or misleading content.",
        "Respect the intellectual property rights of others.",
      ],
    },
    {
      title: "4. Third-Party Links",
      para: "Our website may contain links to third-party websites. We are not responsible for the content or policies of these external sites.",
    },
    {
      title: "5. Limitation of Liability",
      para: "Penthusiasts is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services.",
    },
    {
      title: "6. Privacy Policy",
      para: "We respect your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined in our Privacy Policy.",
    },
    {
      title: "7. Termination",
      para: "We reserve the right to terminate or suspend access to our services at any time for violations of these terms.",
    },
    {
      title: "8. Governing Law",
      para: "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].",
    },
    {
      title: "9. Changes to Terms",
      para: "We may update these Terms and Conditions from time to time. Continued use of our website constitutes acceptance of the revised terms.",
    },
    {
      title: "10. Contact Us",
      para: "For any questions or concerns, please contact us at reachout@penthusiasts.com.",
    },
  ],
};

export const privacyPolicy = {
  desc: "Penthusiasts ('we,' 'our', or 'us') respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website.",
  lists: [
    {
      title: "1. Information We Collect",
      points: [
        "We may collect the following types of information:",
        "Personal Information: Name, email address, phone number, and other contact details when you register or subscribe.",
        "Non-Personal Information: Browser type, IP address, device information, and browsing activity collected through cookies and similar technologies.",
        "User-Generated Content: Comments, reviews, and messages you submit on our platform.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      points: [
        "We use the collected data for:",
        "Providing and improving our services",
        "Sending newsletters, updates, or promotional content",
        "Analyzing website performance and user engagement",
        "Responding to inquiries and customer support requests",
      ],
    },
    {
      title: "3. How We Share Your Information",
      points: [
        "We do not sell or rent your personal information. However, we may share your data with:",
        "Service Providers: Third-party vendors assisting in website operations",
        "Legal Authorities: If required by law, court order, or to protect our rights",
        "Business Transfers: In case of a merger, sale, or asset transfer",
      ],
    },
    {
      title: "4. Cookies and Tracking Technologies",
      para: "We use cookies to enhance user experience, analyze traffic, and personalize content. You can manage cookie settings through your browser.",
    },
    {
      title: "5. Data Security",
      para: "We implement security measures to protect your information but cannot guarantee absolute security. Users are responsible for keeping their login credentials confidential.",
    },
    {
      title: "6. Your Rights and Choices",
      points: [
        "Depending on your location, you may have rights to:",
        "Access, update, or delete your data",
        "Opt out of marketing communications",
        "Restrict data processing under certain conditions",
      ],
    },
    {
      title: "7. Third-Party Links",
      para: "Our website may contain links to external sites. We are not responsible for their privacy practices and encourage you to review their policies.",
    },
    {
      title: "8. Updates to This Policy",
      para: "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised 'Effective Date.'",
    },
    {
      title: "9. Contact Us",
      para: "For questions or concerns about this Privacy Policy, contact us at:",
      points: [
        "Email: reachout@penthusiasts.com",
        "Phone Number: +91-90032 85687",
      ],
    },
  ],
};

export const TOS = {
  desc: "Welcome to Penthusiasts! By accessing or using our website, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using our platform.",
  lists: [
    {
      title: "1. Acceptance of Terms",
      para: "By accessing or using Penthusiasts, you agree to abide by these Terms. If you do not agree, please refrain from using our website.",
    },
    {
      title: "2. Changes to Terms",
      para: "We reserve the right to modify or update these Terms at any time. Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    },
    {
      title: "3. User Responsibilities",
      points: [
        "You must be at least 18 years old to use our services.",
        "You are responsible for maintaining the confidentiality of your account.",
        "You agree not to engage in any prohibited activities, including but not limited to spamming, hacking, or distributing harmful content.",
      ],
    },
    {
      title: "4. Intellectual Property",
      para: "All content on Penthusiasts, including text, images, logos, and designs, is the property of Penthusiasts or its licensors and is protected by copyright laws. You may not reproduce, distribute, or modify our content without permission.",
    },
    {
      title: "5. User-Generated Content",
      points: [
        "By submitting content to Penthusiasts, you grant us a non-exclusive, royalty-free license to use, modify, and display your content.",
        "You are responsible for ensuring that any content you submit does not infringe on third-party rights.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      para: "Penthusiasts is provided 'as is' without warranties of any kind. We are not responsible for any direct, indirect, or incidental damages resulting from the use of our website.",
    },
    {
      title: "7. Termination",
      para: "We reserve the right to terminate or suspend access to our services at any time for violations of these terms.",
    },
    {
      title: "8. Governing Law",
      para: "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].",
    },
    {
      title: "9. Changes to Terms",
      para: "We may update these Terms and Conditions from time to time. Continued use of our website constitutes acceptance of the revised terms.",
    },
    {
      title: "10. Contact Us",
      para: "For any questions or concerns, please contact us at reachout@penthusiasts.com.",
    },
  ],
};
