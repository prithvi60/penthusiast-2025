import HomePageOurClients from "@/components/layouts/HomePageOurClients";
import Reviews from "@/components/layouts/about/Reviews";
import BuildOurStory from "@/components/layouts/BuildOurStory";
import ExploreOurServices from "@/components/layouts/ExploreOurServices";
import Faq from "@/components/layouts/Faq";
import Hero from "@/components/layouts/Hero";
import WhoWeAre from "@/components/layouts/WhoWeAre";
import { ClientSpotlight } from "@/components/layouts/ClientSpotLight";
import { Pricing } from "@/components/layouts/Pricing";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Penthusiasts",
    image: "https://ik.imagekit.io/webibee/penthusiast_logo_full.png",
    description:
      "Elevate your brand with our content writing services. Expert copywriting services to engage your audience and boost your online presence. Contact us today!",
    email: "reachout@penthusiasts.com",
    url: "https://penthusiasts.com/",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Penthusiasts",
    image: "https://ik.imagekit.io/webibee/penthusiast_logo_full.png",
    url: "https://penthusiasts.com",
    telephone: "+91-9003285687",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />
      <Hero />
      <ExploreOurServices
        subTitle={"Explore our services"}
        title={"From Website Copies to Social Media Content—We Do It All!"}
      />
      <WhoWeAre />
      <HomePageOurClients />
      <Reviews />
      <ClientSpotlight
        subTitle={"Client Spotlights"}
        title={"Showcasing our most impactful client collaborations"}
      />
      <Faq />
      {/*  <Pricing /> */}
      <BuildOurStory />
    </main>
  );
}
