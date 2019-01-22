import dynamic from "next/dynamic";

import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Sponsors from "../components/sections/sponsors";
import Organizers from "../components/sections/organizers";
import PreviousTalks from "../components/sections/previous-talks";

const Venue = dynamic(() => import("../components/sections/venue"));

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Venue />
      <Organizers />
      <Sponsors />
      <PreviousTalks />
    </main>
  );
}

export default HomePage;
