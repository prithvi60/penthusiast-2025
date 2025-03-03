import BuildOurStory from "@/components/layouts/BuildOurStory";
import ExploreOurServices from "@/components/layouts/ExploreOurServices";
import Hero from "@/components/layouts/Hero";
import OurClients from "@/components/layouts/OurClients";
import WhoWeAre from "@/components/layouts/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ExploreOurServices />
      <OurClients />
      <BuildOurStory />
    </main>
  );
}
