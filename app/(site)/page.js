import HomePageOurClients from "@/components/HomePageOurClients";
import Reviews from "@/components/layouts/about/Reviews";
import BuildOurStory from "@/components/layouts/BuildOurStory";
import ExploreOurServices from "@/components/layouts/ExploreOurServices";
import Faq from "@/components/layouts/Faq";
import Hero from "@/components/layouts/Hero";
import WhoWeAre from "@/components/layouts/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreOurServices
        subTitle={"Explore our services"}
        title={"From Websites to Social Media—We Write It All!"}
      />
      <WhoWeAre />
      {/* <HomePageOurClients /> */}
      <Reviews />
      <ExploreOurServices
        subTitle={"Client Spotlights"}
        title={"Showcasing our most impactful client collaborations"}
        explore
      />
      <Faq />
      <BuildOurStory />
    </main>
  );
}
