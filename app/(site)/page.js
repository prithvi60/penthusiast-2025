import HomePageOurClients from "@/components/layouts/HomePageOurClients";
import Reviews from "@/components/layouts/about/Reviews";
import BuildOurStory from "@/components/layouts/BuildOurStory";
import ExploreOurServices, {
  ClientSpotlight,
} from "@/components/layouts/ExploreOurServices";
import Faq from "@/components/layouts/Faq";
import Hero from "@/components/layouts/Hero";
import WhoWeAre from "@/components/layouts/WhoWeAre";
import LottieAnimation from "@/components/UI/LottieAnimation";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Penthusiasts",
    image: "https://ik.imagekit.io/webibee/penthusiast_logo_full.png",
    description:
      "VBCC High Temperature Instruments is the leading manufacturer of top-tier furnaces, kilns, analytical instruments, and material processing equipment for precise heating and drying in laboratory and industrial settings.",
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
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
        title={"From Websites to Social Media—We Write It All!"}
      />
      <WhoWeAre />
      <HomePageOurClients />
      <Reviews />
      <ClientSpotlight
        subTitle={"Client Spotlights"}
        title={"Showcasing our most impactful client collaborations"}
        explore
      />
      <Faq />
      <BuildOurStory />
    </main>
  );
}
